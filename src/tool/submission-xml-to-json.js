/** @module submission-xml-to-json
 *
 * find some submissions, convert to json and put in metadata folder
 */

const fs = require('fs')
const path = require('path')
const xml2js = require('xml2js')

const filename_prefix = "src/metadata/meta-"

const source_paths = [
    "src/register/elements.xml",
    "src/register/essence.xml",
    "src/register/groups.xml",
    "src/register/labels.xml",
    "src/register/types.xml",
]

/** refactor the entry XML to a JSON that's suitable for substitution
 *
 * The incoming JSON creates an array of annonimous Entry objects
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
function refactor_submission(submission){
    let document_substitution = {}
    for (register in submission) {
        //iterate trhough each entry adding an object to document_substitution
        submission[register].Entries[0].Entry.forEach(entry => {
            let tmp={}
            //iterate through properties using secret knowledge that there are no
            //complex children - only strings or booleans or integers
            for(property in entry){
                tmp[property]= entry[property][0]
            }
            //add the property to the json array
            document_substitution[entry.Symbol[0]] = tmp
        })
    }
    return document_substitution
}

// do that parsing and file writing in parallel for speed
async function xml_to_json_file(xml, destination_path) {
    const parser = new xml2js.Parser()
    parser.parseStringPromise(xml)
        .then(result => {
            let document_metadata = refactor_submission(result )
            let document_json = JSON.stringify(document_metadata, undefined, 2)
            fs.writeFileSync(destination_path, document_json)
        })
        .catch(e => {
            console.log(e.message)
        })
}

//take all the source files and JSONify them
source_paths.forEach(source_path => {
    let filepath = path.resolve(source_path)
    basename = path.basename(filepath)
    let xml = fs.readFileSync(filepath)
    let destination_path = `${filename_prefix}${basename}.json`

    xml_to_json_file(xml, destination_path)
})