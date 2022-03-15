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

DST_AG4="$ZMPPubPath/${ZMPDocPrefix}-${ZMPDocTitle}-${MDPUB_DATE}(${ZMPDocNote}-ag04).$ZMPDocExtn"
DST_PUB="$ZMPPubPath/${ZMPDocPrefix}-${ZMPDocTitle}-${MDPUB_DATE}(${ZMPDocNote}-pub).$ZMPDocExtn"

#-------------------------------------------------------------------------------
# rename the AG04 generated output
if [ -e "$SRC_AG4" ] ; then
  echo -e "$EKO creating$Cfile $DST_AG4"
  mv  "$SRC_AG4" "$DST_AG4"
fi

#-------------------------------------------------------------------------------
# rename the PUB generated output & update zip file
if [ -e "$SRC_PUB" ] ; then
  echo -e "$EKO creating$Cfile $DST_PUB"
  mv  "$SRC_PUB" "$DST_PUB"
fi