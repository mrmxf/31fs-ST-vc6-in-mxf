/** @module submission-xml-to-json
 *
 * find some submissions, convert to json and put in metadata folder
 *
 * Algorithm needs tweaking:
 * 1. Create empty JSON metadata register MR with a Register Submission (RS) child
 *    * MR = {Groups:{}, Types:{} ..., RS:{Groups:{} ... , message:{error:[], ..}}}
 * 2. read in all discrete registers from snapshot
 *    * add and read messages to MR.message
 * 3. read in all submission entries. For each entry
 *    a. create an MR.RS.REGISTER object indexed by Symbol
 *    b. add in read / parsing messages to MR.message
 *    c. for any entry with a type
 *        * add MR.RS.REGISTER.TypeSymbol = fn(loookup Type UL & return Type Symbol)
 *        * add MR.RS.REGISTER.TypeSize = fn(loookup Type UL & return Type Size text)
 *    d. for each entry in a group
 *        * copy entry JSON to MR.RS.Groups.ENTRY._Contents.SYMBOL to allow
 *          mustache iteration of the group elements
 *
 * 5. QA
 *   a. check for collisions & log errors to MR.RS.message
 *   b. inspect RS.Groups for IsOptional & update definition with [Req] or [Opt], log errors
 *   c. log unresolved types
 *   g. log unresolved groups
 * 6. export MR.RS as register-submission.json
 * 7. export MR.RS.messages as register-submission-messages.json
 */
const logPrefix = "SMPTE-xml2js-r1 "

const fs = require('fs')
const path = require('path')
const xml2js = require('xml2js')

const filenamePrefix = "src-mxf/metadata/meta-"
const tempnamePrefix = "src-mxf/metadata/tmp-"

const sourcePaths = [
    "src-mxf/register/30MR-REG-DD-ST2117-10-elements.xml",
    "src-mxf/register/30MR-REG-DD-ST2117-10-essence.xml",
    "src-mxf/register/30MR-REG-DD-ST2117-10-groups.xml",
    "src-mxf/register/30MR-REG-DD-ST2117-10-labels.xml",
    "src-mxf/register/30MR-REG-DD-ST2117-10-types.xml",
]
const typesPaths = [
    "src-mxf/register/30MR-REG-DD-ST2117-10-types.xml",
    "src-mxf/metadata/Types-snapshot.xml",
]
const groupsPaths = [
    "src-mxf/register/30MR-REG-DD-ST2117-10-groups.xml",
    "src-mxf/metadata/Groups-snapshot.xml",
]

/** refactor the entry XML to a JSON that's suitable for substitution
 *
 * The incoming JSON creates an array of anonimous Entry objects
 * The outer most object is xxxxRegister and  is handled in a for loop
 * {
 *    "ElementsRegister": {
 *      "$": {
 *        "xmlns": "http://www.smpte-ra.org/schemas/335/2012"
 *      },
 *      "Entries": [
 *        {
 *          "Entry": [
 *            { ... an actual entry ... }
 *
 * Outgoing json uses the Entry Symbol as a key
 * and assumes that lower level groups and types hierarchy
 * does not need to be accessed
 * {
 *   Symbol:{
 *       UL: ul,
 *       Kind:.... etc
 *   }
 * }
 */
function refactorSubmission(submission, types) {
    let document_substitution = {}
    for (register in submission) {
        //iterate trhough each entry adding an object to document_substitution
        submission[register].Entries[0].Entry.forEach(entry => {
            let tmp = {}
            //iterate through properties using secret knowledge that there are no
            //complex children - only strings or booleans or integers
            for (property in entry) {
                tmp[property] = entry[property][0]
            }
            //add in a type as a string for the document
            if (entry["Type"] && types[entry["Type"][0]]) {
                tmp["TypeSymbol"] = types[entry["Type"][0]].Symbol
                tmp["TypeSize"] = types[entry["Type"][0]].TypeSize
            }
            //add the property to the json array
            document_substitution[entry.Symbol[0]] = tmp
        })
    }
    return document_substitution
}

function refactorTypes(registerTypes, typesMap) {
    registerTypes.TypesRegister.Entries[0].Entry.forEach(type => {
        //log a warning if duplicate type found
        if (typesMap[type.UL[0]]) {
            console.log(`${logPrefix} WARNING over-writing duplicate Type Definition: ${type.Symbol[0]}`)
        }
        typesMap[type.UL[0]] = {
            "Symbol": type.Symbol[0],
            "TypeSize": (type.TypeSize) ? type.TypeSize[0] : 0
        }
    })
}

// do that parsing and file writing in parallel for speed
async function xml2JsonFile(xml, xref, destination_path) {
    const parser = new xml2js.Parser()
    parser.parseStringPromise(xml)
        .then(result => {
            let document_metadata = refactorSubmission(result, xref.types)
            let document_json = JSON.stringify(document_metadata, undefined, 2)
            fs.writeFileSync(destination_path, document_json)
        })
        .catch(e => {
            console.log(e.message)
        })
}

readXmlDocumentsToArray = (docPaths) => {
    let arr = []
    docPaths.forEach(docPath => {
        let filePath = path.resolve(docPath)
        let basename = path.basename(filePath)
        arr.push(fs.readFileSync(filePath))
    })
    return arr
}

createTypesMap = async (typesXmlArray) => {
    const typesMap = {}

    await typesXmlArray.forEach(async xmlDoc => {
        const parser = new xml2js.Parser()
        parser.parseStringPromise(xmlDoc)
            .then(result => {
                refactorTypes(result, typesMap)
                let destination_path = `${tempnamePrefix}types-map.json`
                fs.writeFileSync(destination_path, JSON.stringify(typesMap, undefined, 2))
            })
            .catch(e => {
                console.log(e.message)
            })
    })
    return typesMap
}


buildXrefData = async (typesXmlArray, groupsXmlArray) => {
    let typesMap = await createTypesMap(typesXmlArray)
    let xrefData = { types: typesMap, groups: "" }
    return xrefData
}

transformXmlIntoJson = async (typesXmlArray, groupsXmlArray) => {
    let xref = await buildXrefData(typesXmlArray, groupsXmlArray)
    let xrefPath = `${tempnamePrefix}xref.json`
    fs.writeFileSync(xrefPath, JSON.stringify(xref, undefined, 2))

    //take all the XML register source files and JSONify them
    sourcePaths.forEach(source_path => {
        let filepath = path.resolve(source_path)
        let basename = path.basename(filepath)
        let xml = fs.readFileSync(filepath)
        let destination_path = `${filenamePrefix}${basename}.json`

        xml2JsonFile(xml, xref, destination_path)
    })
}

// first read in the Types & Groups
const typesXmlArray = readXmlDocumentsToArray(typesPaths)
const groupsXmlArray = readXmlDocumentsToArray(groupsPaths)

transformXmlIntoJson(typesXmlArray, groupsXmlArray)
