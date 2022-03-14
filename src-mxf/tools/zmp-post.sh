# post-process shell script for this document
# all file paths are relative to the root folder of the project
#
ThisPath="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
EKO="    $EKO"
#echo -e "$EKO ThisPath     $ThisPath"

#-------------------------------------------------------------------------------
# make variables for all the files that might be used in the script
SRC_AG4="$ZMPPubPath/$ZMPDocBase.$ZMPDocExtn"
SRC_PUB="$ZMPPubPath/$ZMPDocBase-eng.$ZMPDocExtn"
SRC_XML="src-mxf/register/*.xml"

DST_AG4="$ZMPPubPath/${ZMPDocPrefix}-${ZMPDocTitle}-${MDPUB_DATE}(${ZMPDocNote}-ag04).$ZMPDocExtn"
DST_PUB="$ZMPPubPath/${ZMPDocPrefix}-${ZMPDocTitle}-${MDPUB_DATE}(${ZMPDocNote}-pub).$ZMPDocExtn"

DST_ELE="$ZMPPubPath/elements/"
DST_ZIP="$ZMPPubPath/30MR-REG-DD-ST2117-10-$MDPUB_DATE.zip"

#-------------------------------------------------------------------------------
# zip up the XML submission elements to the default output folder (xr/_SETTINGS) with the right name
echo -e "$EKO zipping xml into$Cfile $DST_ZIP$Coff"

ZMPCmd="zip --update --junk-paths "$DST_ZIP" src-mxf/register/*.xml"
echo -e "$EKO$Ccmd $ZMPCmd$Coff"
#Capture command output as array
readarray -t ARRAY_OfStdOut < <($ZMPCmd 2>&1)
#Print array output line by line
for LL in "${ARRAY_OfStdOut[@]}"; do echo -e "          $ZA02$Cinfo $LL" ; done

#-------------------------------------------------------------------------------
# copy the XML submission elements to elements output folder (xr/_SETTINGS) with the right name
echo -e "$EKO copying submission xml files to$Cfile $DST_ELE"
cp $SRC_XML $DST_ELE

#-------------------------------------------------------------------------------
# rename the AG04 generated output
if [ -e "$SRC_AG4" ] ; then
  echo -e "$EKO creating$Cfile $DST_AG4"
  mv  "$SRC_AG4" "$DST_AG4"
  echo -e "$EKO adding$Cfile "$DST_AG4" $Cinfo to$Cfile $DST_ZIP"
  zip --update --junk-paths "$DST_ZIP" "$DST_AG4"
fi

#-------------------------------------------------------------------------------
# rename the PUB generated output & update zip file
if [ -e "$SRC_PUB" ] ; then
  echo -e "$EKO creating$Cfile $DST_PUB"
  mv  "$SRC_PUB" "$DST_PUB"
  echo -e "$EKO added$Cfile "$DST_PUB" $Cinfo to$Cfile $DST_ZIP"
  zip --update --junk-paths "$DST_ZIP" "$DST_PUB"
fi