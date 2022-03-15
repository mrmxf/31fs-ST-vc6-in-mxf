# Track files


## General

Track Files shall conform to SMPTE ST 379-2 and SMPTE ST 2067-2.

## Image Track Files

### Essence

The Image Essence contained in Image Track Files shall conform to Section 4.

### Track Format and Mapping

An Image Track File shall conform to SMPTE ST 2771-10:

* The Edit Rate and Sample Rate are equal to the image frame rate as defined in
  SMPTE ST 379-2.
* Indexing is image frame-based, using Index Edit Rates defined by the Edit
Rates of the Essence Track, as defined in SMPTE ST 377-1. The Top-Level File
Package of Image Track File shall reference:
* A CDCI Picture Essence Descriptor as defined in SMPTE ST 377-1 if the Image
  Essence uses Y’C’BC’R color components.
* An RGBA Picture Essence Descriptor as defined in SMPTE ST 377-1 if the Image
  Essence uses R’G’B’ color components
* A VC6SubDescriptor as defined in SMPTE ST 2110-10 shall be present 

#### Generic Picture Essence Descriptor

##### General

The Generic Picture Essence Descriptor items shall be as specified in Annex G of
SMPTE ST 377-1:2019 and Annexes F and G of SMPTE ST 2067-21:2020 and then
further constrained as specified in this section. Table 4 specifies the
following items:

* Items which are further constrained, i.e. required items which are specified
  as Optional or Decoder Required in SMPTE ST 377-1, `StoredF2Offset`,
  `DisplayF2Offset` and `FieldDominance`
* Best Effort items which are specified in SMPTE ST 377-1
* Optional items which are specified in SMPTE ST 2067-2

~~~{custom-style="smpte-caption"}
Table 1 - Generic Picture Essence Descriptor
Items
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

| **Item**                  | **Constraints**                                              | **Status: ST 377-1** | **Status: ST 2067-2** |
| --------------------------| ------------------------------------------------------------ | -------------------- | --------------------- |
| Frame Layout              | See Section 5.2.2.1.2.                                       | B.Effort             | -                     |
| Stored Width              | See Section 5.2.2.1.3.                                       | B.Effort             | -                     |
| Stored Height             | See Section 5.2.2.1.4.                                       | B.Effort             | -                     |
| StoredF2Offset            | Shall be present for Interlaced. See Section  5.2.2.1.5.     | Opt                  | -                     |
| Sampled Width             | Shall be present. See  Section 5.2.2.1.6.                    | Opt                  | -                     |
| Sampled Height            | Shall be present. See  Section 5.2.2.1.7.                    | Opt                  | -                     |
| SampledXOffset            | Shall be present. See Section 5.2.2.1.8.                     | Opt                  | -                     |
| SampledYOffset            | Shall be present. See Section 5.2.2.1.9.                     | Opt                  | -                     |
| DisplayHeight             | Shall be present. See  Section 5.2.2.1.10.                   | Opt                  | -                     |
| DisplayWidth              | Shall be present. See  Section 5.2.2.1.11.                   | Opt                  | -                     |
| DisplayXOffset            | Shall be present. See Section 5.2.2.1.12.                    | Opt                  | -                     |
| DisplayYOffset            | Shall be present. See Section 5.2.2.1.13.                    | Opt                  | -                     |
| DisplayF2Offset           | Shall be present for Interlaced.  See Section 5.2.2.1.14.    | Opt                  | -                     |
| ActiveHeight              | See Section 5.2.2.1.15.                                      | -                    | Opt                   |
| ActiveWidth               | See Section 5.2.2.1.16.                                      | -                    | Opt                   |
| ActiveXOffset             | See Section 5.2.2.1.17.                                      | -                    | Opt                   |
| ActiveYOffset             | See Section 5.2.2.1.18.                                      | -                    | Opt                   |
| Aspect Ratio              | See Section 5.2.2.1.19.                                      | B.Effort             | -                     |
| Video Line Map            | See Section 5.2.2.1.20.                                      | B.Effort             | -                     |
| Transfer Characteristic   | Shall be present. See Section 5.2.2.1.21.                    | Opt                  | -                     |
| FieldDominance            | Shall be present for Interlaced. See  Section 5.2.2.1.22.    | Opt                  | -                     |
| Picture Essence Coding    | Shall be present. See Section 5.2.2.1.23.                    | D/req                | -                     |
| Coding Equations          | Shall be present. See Section 5.2.2.1.21.                    | Opt                  |                       |
| Color Primaries           | Shall be present. See Section 5.2.2.1.21.                    | Opt                  |                       |
| Alternative Center  Cuts  | See Section 5.2.2.1.24.                                      | -                    | Opt                   |


##### Frame Layout

The value of the Frame Layout item shall be equal to:

* 0x00 (FULL_FRAME) if the image structure is progressive.
* 0x01 (SEPARATE_FIELDS) if the image structure is interlaced.

##### Stored Width

The value of the Stored Width item shall be equal to:

* 1920 if the image format is 1920x1080.
* 1280 if the image format is 1280x720.
* 3840 if the image format is 3840x2160.
* 7680 if the image format is 7680x4320.

##### Stored Height

The value of the Stored Height item shall be equal to:

* 10881 if the image format is 1920x1080 and progressive.
* 5441 if the image format is 1920x1080 and interlaced.
* 720 if the image format is 1280x720 and progressive.
* 2160 if the image format is 3840x2160 and progressive.
* 4320 if the image format is 7680x4320 and progressive.

##### StoredF2Offset

The default value is 0.

##### Sampled Width

The value of the Sampled Width item shall be equal to:

* 1920 if the image format is 1920x1080.
* 1280 if the image format is 1280x720.
* 3840 if the image format is 3840x2160.
* 7680 if the image format is 7680x4320.

##### Sampled Height

The value of the Sampled Height item shall be equal to:

* 1080 if the image format is 1920x1080 and progressive.
* 540 if the image format is 1920x1080 and interlaced.
* 720 if the image format is 1280x720 and progressive.
* 2160 if the image format is 3840x2160 and progressive.
* 4320 if the image format is 7680x4320 and progressive.

##### SampledXOffset

The typical value is 0.

##### SampledYOffset

The typical value is 0.

##### DisplayHeight

The value of the DisplayHeight item shall be equal to:

* 1080 if the image format is 1920x1080 and progressive.
* 540 if the image format is 1920x1080 and interlaced.
* 720 if the image format is 1280x720 and progressive.
* 2160 if the image format is 3840x2160 and progressive.
* 4320 if the image format is 7680x4320 and progressive.

##### DisplayWidth

* 1920 if the image format is 1920x1080.
* 1280 if the image format is 1280x720.
* 3840 if the image format is 3840x2160.
* 7680 if the image format is 7680x4320.

##### DisplayXOffset

The typical value is 0.

##### DisplayYOffset

The typical value is 0.

##### DisplayF2Offset

The default value is 0.

##### ActiveHeight

The value of the ActiveHeight is the number of vertical pixels of the Active Area Rectangle, as defined in Annex G of SMPTE ST 2067-2:2020.

##### ActiveWidth

The value of the ActiveWidth is the number of horizontal pixels of the Active Area Rectangle, as defined in Annex G of SMPTE ST 2067-2:2020.

##### ActiveXOffset

The value of the ActiveXOffset is the horizontal offset in Pixels of the Active Area Rectangle relative to the Display Rectangle, as defined in Annex G of SMPTE ST 2067-2:2020.

##### ActiveYOffset

The value of the ActiveYOffset is the vertical offset in Pixels of the Active Area Rectangle relative to the Display Rectangle, as defined in Annex G of SMPTE ST 2067-2:2020.

##### Aspect Ratio

The value of the Aspect Ratio item shall be equal to:

* 16:9 if the image format is 1920x1080.
* 16:9 if the image format is 1280x720.
* 16:9 if the image format is 3840x2160.
* 16:9 if the image format is 7680x4320.

##### Video Line Map

The value of the Video Line Map item should be equal to:

* {42,0} if the image format is 1920x1080 and progressive.
* {21,584} if the image format is 1920x1080 and interlaced.
* {26,0} if the image format is 1280x720 and progressive.
* {42,0} if the image format is 3840x2160 and progressive.
* {42,0} if the image format is 7680x4320 and progressive.

##### Transfer Characteristic, Coding Equations and Color Primaries

Transfer Characteristic, Coding Equations and Color Primaries should be one of the combinations per Signal Format of Table 5.

[TBC do we need a table of color primaries like tST 2067-60]{custom-style="smpte-ch-review-highlight"}

##### FieldDominance

The default value is 1.

##### Picture Essence Coding

The value of the Picture Essence Coding item shall be as specified in SMPTE ST 381-3.

##### Alternative Center Cuts

The Alternative Center Cuts item specifies the alternate aspect ratio subset(s)
of the active area as specified in Annex F of SMPTE ST 2067-2:2020. Active area
is defined in Annex G of SMPTE ST 2067-2:2020.

#### RGBA Picture Essence Descriptor

##### General

The RGBA Picture Essence Descriptor items shall be as specified in Annex G of
SMPTE ST 377-1:2019 and then further constrained as specified in this section.
Table 6 specifies the following items:

Items which are further constrained, i.e. required items which are specified as
Optional in SMPTE ST 377-1.

Best Effort items which are specified in SMPTE ST 377-1.

:::{custom-style="smpte-caption"}
Table 6 — RGBA Picture Essence Descriptor items
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

| **RGBA  Item**      | **Constraints**                           | **Status: ST 377-1** |
| ------------------- | ----------------------------------------- | -------------------- |
| Component  Max Ref  | Shall  be present. See Section 5.2.2.2.2. | Opt                  |
| Component  Min Ref  | Shall  be present. See Section 5.2.2.2.2. | Opt                  |
| PixelLayout         | See  Section 5.2.2.2.3.                   | B.Effort             |

##### Component Max Ref and Component Min Ref

Component Max Ref is an item, whose unsigned 32-bit integer value shall specify
the R’G’B’ sample value for reference white level. Similarly, Component Min Ref
is an item, whose unsigned 32-bit integer value shall specify the R’G’B’ sample
value for reference black level. Table 7 describes the “narrow range” and “full
range” signal representations of Recommendation ITU-R BT.2100.

~~~{custom-style="smpte-caption"}
Table 7 — Component Max Ref and Component Min Ref values
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

| **Range**          | **Narrow  range** | **Full  range** |        |            |      |      |
| ------------------ | ----------------- | --------------- | ------ | ---------- | ---- | ---- |
| **Bit Depth**      | **10**            | **1****2**      | **10** | **1****2** |      |      |
| Component  Min Ref | 64                | 256             | 0      | 0          |      |      |
| Component  Max Ref | 940               | 3760            | 1023   | 4095       |      |      |
|                    |                   |                 |        |            |      |      |

##### PixelLayout

The value of the PixelLayout item shall be equal to { ‘G’, x, ‘B’, x, ‘R’, x, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0 }  where x is equal to 10 or 12 if 10-bit or 12-bit
color components are used per Section 4.1.

#### CDCI Picture Essence Descriptor

##### General

The CDCI Picture Essence Descriptor items shall be as specified in Annex G of
SMPTE ST 377-1:2019 and then further constrained as specified in this section.
Table 8 specifies the following items:

Items which are further constrained, i.e. required items which are specified
as Optional in SMPTE ST 377-1.

Best Effort items which are specified in SMPTE ST 377-1.

:::{custom-style="smpte-caption"}
Table 8 — CDCI Picture Essence Descriptor items
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

| **CDCI  Item**          | **Constraints**                           | **Status: ST 377-1** |
| ------------------------| ----------------------------------------- | -------------------- |
| Component  Depth        | See Section 5.2.2.3.2.                    | B.Effort             |
| Horizontal  Subsampling | See  Section 5.2.2.3.3.                   | B.Effort             |
| Vertical  Subsampling   | Shall  be present. See Section 5.2.2.3.4. | Opt                  |
| Color  Siting           | Shall  be present. See Section 5.2.2.3.5. | Opt                  |
| ReversedByteOrder       | See Section 5.2.2.3.6.                    | Opt                  |
| PaddingBits             | See Section 5.2.2.3.7.                    | Opt                  |
| Black  Ref Level        | Shall be present. See Section 5.2.2.3.8.  | Opt                  |
| White  Ref level        | Shall  be present. See Section 5.2.2.3.8. | Opt                  |
| Color  Range            | Shall  be present. See Section 5.2.2.3.8. | Opt                  |

##### Component Depth

The value shall be equal to the Bit Depth used. (see Section 4.1)

#####  Horizontal Subsampling

The value of Horizontal Subsampling item shall be equal to:

* 0x01 if 4:4:4 sampling is used per Section 4.2.
* 0x02 if 4:2:2 or 4:2:0 sampling is used per Section 4.2.

##### Vertical Subsampling

The value of Vertical Subsampling item shall be equal to:

* 0x01 if 4:4:4 or 4:2:2 sampling is used per Section 4.2.
* 0x02 if 4:2:0 sampling is used per Section 4.2.

##### Color Siting

The value shall be 0x00.

##### ReversedByteOrder

The typical value is 0.

##### PaddingBits

The typical value is 0.

##### Black Ref Level, White Ref Level and Color Range

The values of the Black Ref Level, White Ref Level and Color Range items shall
be set according to the component bit depth used. Table 9 describes the “narrow
range” and “full range” signal representations of Recommendation ITU-R BT.2100.

:::{custom-style="smpte-caption"}
Table 9 — Black Ref Level, White Ref Level and Color Range values
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

| **Range**       | **Narrow  range** | **Full  range** |        |            |
| --------------- | ----------------- | --------------- | ------ | ---------- |
| **Bit Depth**   | **10**            | **1****2**      | **10** | **1****2** |
| Black Ref Level | 64                | 256             | 0      | 0          |
| White Ref Level | 940               | 3760            | 1023   | 4095       |
| Color Range     | 897               | 3585            | 1023   | 4095       |
|                 |                   |                 |        |            |

NOTE: The White Ref Level item applies only to the Y' component and the Color Range item to the C’B and C’R components.

#### VC6 Sub Descriptor

Do we need a constrained IMF label? pCD process question?

[TBC Table of values]{custom-style="smpte-ch-review-highlight"}
