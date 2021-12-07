# post-process shell script for this document
# all file paths are relative to the root folder of the project
#
ThisPath="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
EKO="    $EKO"
#echo -e "$EKO ThisPath     $ThisPath"
#
# zip up the XML submission elements to the default output folder (xr/_SETTINGS) with the right name
#DST="$ZMPPubPath/${ZMPDocPrefix}a-register-submission-$MDPUB_DATE.zip"
ZipDst="$ZMPPubPath/30MR-REG-DD-ST2117-10-$MDPUB_DATE.zip"
echo -e "$EKO zipping xml into$Cfile $ZipDst$Coff"

ZMPCmd="zip --update --junk-paths "$ZipDst" src/register/*.xml"
echo -e "$EKO$Ccmd $ZMPCmd$Coff"

#Capture command output as array
readarray -t arrayOfStdOut < <($ZMPCmd 2>&1)
#Print array output line by line
for LL in "${arrayOfStdOut[@]}"; do echo -e "   $ZA02$Cinfo $LL" ; done

#
# copy the XML submission elements to elements output folder (xr/_SETTINGS) with the right name
DST="$ZMPPubPath/elements/"
echo -e "$EKO copying submission xml files to$Cfile $DST"
cp src/register/*.xml $DST
#
# rename each file output to the right filename - from the config file
SRC="$ZMPPubPath/$ZMPDocBase.$ZMPDocExtn"
if [ -e "$SRC" ] ; then
  DST="$ZMPPubPath/${ZMPDocPrefix}-${ZMPDocTitle}-${MDPUB_DATE}(${ZMPDocNote}-ag04).$ZMPDocExtn"
  mv  "$SRC" "$DST"
  echo -e "$EKO created$Cfile $DST"
fi
#
# rename each file output to the right filename - from the config file
SRC="$ZMPPubPath/$ZMPDocBase-eng.$ZMPDocExtn"
if [ -e "$SRC" ] ; then
  DST="$ZMPPubPath/${ZMPDocPrefix}-${ZMPDocTitle}-${MDPUB_DATE}(${ZMPDocNote}-pub).$ZMPDocExtn"
  mv  "$SRC" "$DST"
  echo -e "$EKO created$Cfile $DST"
  zip --update --junk-paths "$ZipDst" "$DST"
  echo -e "$EKO added$Cfile "$DST" $Cinfo to$Cfile $ZipDst"
fi