# post-process shell script for this document
# all file paths are relative to the root folder of the project
#
SCRIPTPATH="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
#
# zip up the XML submission elements to the default output folder (xr/_SETTINGS) with the right name
DST="$OUTPUT_FOLDER/${DOC_PREFIX}a-register-submission-$MDPUB_DATE.zip"
echo -e "$EKO zipping xml into$Cfile $DST"
zip --update --junk-paths "$DST" src/register/*.xml
#
# copy the XML submission elements to elements output folder (xr/_SETTINGS) with the right name
DST="$OUTPUT_FOLDER/elements/"
echo -e "$EKO copying submission xml files to$Cfile $DST"
cp src/register/*.xml $DST
#
# rename each file output to the right filename - from the config file
SRC="$OUTPUT_FOLDER/$DOC_SOURCE_NAME.$DOC_SOURCE_EXT"
if [ -e "$SRC" ] ; then
  DST="$OUTPUT_FOLDER/${DOC_PREFIX}-${DOC_TITLE}-${MDPUB_DATE}(${DOC_COMMENT}-ag04).$DOC_SOURCE_EXT"
  mv  "$SRC" "$DST"
  echo -e "$EKO created$Cfile $DST"
fi
#
# rename each file output to the right filename - from the config file
SRC="$OUTPUT_FOLDER/$DOC_SOURCE_NAME-eng.$DOC_SOURCE_EXT"
if [ -e "$SRC" ] ; then
  DST="$OUTPUT_FOLDER/${DOC_PREFIX}-${DOC_TITLE}-${MDPUB_DATE}(${DOC_COMMENT}-pub).$DOC_SOURCE_EXT"
  mv  "$SRC" "$DST"
  echo -e "$EKO created$Cfile $DST"
fi