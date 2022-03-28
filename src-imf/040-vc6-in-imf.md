# VC-6 in IMF

## General

This document deals only with the image essence track. All other aspects of an
IMF composition shall comply with the provisions of SMPTE ST 2067-2.

## Image Formats (Informative)

The list of operating points in Table 1 below are recommended for IMF workflows.

::: {custom-style="smpte-caption"}
Table 1 - Recommended Operating Pointe
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

| Image Format | Bit Depth | Structure             | Frame Rate (progressive)                     | Reference
| ------------ | --------- | --------------------- | -------------------------------------------- | ------------ 
| 1920 x 1080  | 10, 12b   | 4:2:2 (Y'C'~B~C'~R~)    | 60^[^1]^, 50, 30^1^, 25, 24^1^               | ST 274
| 1920 x 1080  | 10, 12b   | 4:4:4 (Y'C'~B~C'~R~)  | 60^1^, 50, 30^1^, 25, 24^1^               | ST 274
| 1920 x 1080  | 10, 12b   | 4:4:4 (R'G'B')        | 60^1^, 50, 30^1^, 25, 24^1^               | ST 274
| 1280 x 720   | 10, 12b   | 4:2:2 (Y'C'~B~C'~R~)    | 60^1^, 50, 30^1^, 25, 24^1^               | ST 296
| 1280 x 720   | 10, 12b   | 4:4:4 (Y'C'~B~C'~R~)  | 60^1^, 50, 30^1^, 25, 24^1^               | ST 296
| 1280 x 720   | 10, 12b   | 4:4:4 (R'G'B')        | 60^1^, 50, 30^1^, 25, 24^1^               | ST 296
| 3840 x 2160  | 10, 12b   | 4:2:2 (Y'C'~B~C'~R~)    | 120^1^, 100, 60^1^, 50, 30^1^, 25, 24^1^ | ST 2036-1
| 3840 x 2160  | 10, 12b   | 4:4:4 (Y'C'~B~C'~R~)  | 120^1^, 100, 60^1^, 50, 30^1^, 25, 24^1^ | ST 2036-1
| 3840 x 2160  | 10, 12b   | 4:4:4 (R'G'B')        | 120^1^, 100, 60^1^, 50, 30^1^, 25, 24^1^ | ST 2036-1
| 7680 x 4320  | 10, 12b   | 4:2:2 (Y'C'~B~C'~R~)    | 120^1^, 100, 60^1^, 50, 30^1^, 25, 24^1^ | ST 2036-1
| 7680 x 4320  | 10, 12b   | 4:4:4 (Y'C'~B~C'~R~)  | 120^1^, 100, 60^1^, 50, 30^1^, 25, 24^1^ | ST 2036-1
| 7680 x 4320  | 10, 12b   | 4:4:4 (R'G'B')        | 120^1^, 100, 60^1^, 50, 30^1^, 25, 24^1^ | ST 2036-1

INTERLACE? 4096 x 2160?

## Layering

All Image Essence Track Files shall have all echelons and planes for that image
contained within a single MXF Essence Stream.

::: {custom-style="smpte-note"}
NOTE: VC-6 IMF multi-resolution workflows are constrained in this document to 
having all the echelon resolutions in a single MXF stream in a single MXF file.
:::


[^1]: Both Frame rate _**F**_ and _**F/1.001**_ are included