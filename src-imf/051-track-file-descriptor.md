##  Image Track File Descriptor

The Generic Picture Essence Descriptor items shall be as specified in Annex G of
SMPTE ST 377-1:2019 and Annexes F and G of SMPTE ST 2067-21:2020 and then
further constrained as specified in this section. Table 4 specifies the
following items:

* Items which are further constrained, i.e. required items which are specified
  as Optional or Decoder Required in SMPTE ST 377-1, `StoredF2Offset`,
  `DisplayF2Offset` and `FieldDominance`
* Best Effort items which are specified in SMPTE ST 377-1
* Optional items which are specified in SMPTE ST 2067-2

:::{custom-style="smpte-caption"}
Table 1 - Generic Picture Essence Descriptor Items
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

| **Item**                  | **Constraints**                                         | **Status: ST 377-1** | **Status: ST 2067-2** |
| --------------------------| ------------------------------------------------------- | -------------------- | --------------------- |
| Frame Layout              | See Section 5.3.1                                       | B.Effort             | -                     |
| Stored Width              | See Section 5.3.2                                       | B.Effort             | -                     |
| Stored Height             | See Section 5.3.3                                       | B.Effort             | -                     |
| StoredF2Offset            | Shall be present for Interlaced. See Section  5.3.4     | Opt                  | -                     |
| Sampled Width             | Shall be present. See  Section 5.3.5                    | Opt                  | -                     |
| Sampled Height            | Shall be present. See  Section 5.3.6                    | Opt                  | -                     |
| SampledXOffset            | Shall be present. See Section 5.7                       | Opt                  | -                     |
| SampledYOffset            | Shall be present. See Section 5.3.8                     | Opt                  | -                     |
| DisplayHeight             | Shall be present. See  Section 5.3.9                    | Opt                  | -                     |
| DisplayWidth              | Shall be present. See  Section 5.3.10                   | Opt                  | -                     |
| DisplayXOffset            | Shall be present. See Section 5.3.11                    | Opt                  | -                     |
| DisplayYOffset            | Shall be present. See Section 5.3.12                    | Opt                  | -                     |
| DisplayF2Offset           | Shall be present for Interlaced.  See Section 5.3.13    | Opt                  | -                     |
| ActiveHeight              | See Section 5.3.14                                      | -                    | Opt                   |
| ActiveWidth               | See Section 5.3.15                                      | -                    | Opt                   |
| ActiveXOffset             | See Section 5.3.16                                      | -                    | Opt                   |
| ActiveYOffset             | See Section 5.3.17                                      | -                    | Opt                   |
| Aspect Ratio              | See Section 5.3.18                                      | B.Effort             | -                     |
| Video Line Map            | See Section 5.3.19                                      | B.Effort             | -                     |
| Transfer Characteristic   | Shall be present. See Section 5.3.20                    | Opt                  | -                     |
| FieldDominance            | Shall be present for Interlaced. See  Section 5.3.21    | Opt                  | -                     |
| Picture Essence Coding    | Shall be present. See Section 5.3.22                    | D/req                | -                     |
| Coding Equations          | Shall be present. See Section 5.3.23                    | Opt                  |                       |
| Color Primaries           | Shall be present. See Section 5.3.24                    | Opt                  |                       |
| Alternative Center  Cuts  | See Section 5.324.                                      | -                    | Opt                   |

##  Image Track File Descriptor Items

### Frame Layout

The value of the Frame Layout item shall be equal to:

* 0x00 (FULL_FRAME) if the image structure is progressive.
* 0x01 (SEPARATE_FIELDS) if the image structure is interlaced.

### Stored Width

The value of the Stored Width item shall be equal to:

* 1920 if the image format is 1920x1080.
* 1280 if the image format is 1280x720.
* 3840 if the image format is 3840x2160.
* 7680 if the image format is 7680x4320.

### Stored Height

The value of the Stored Height item shall be equal to:

* 10881 if the image format is 1920x1080 and progressive.
* 5441 if the image format is 1920x1080 and interlaced.
* 720 if the image format is 1280x720 and progressive.
* 2160 if the image format is 3840x2160 and progressive.
* 4320 if the image format is 7680x4320 and progressive.

### StoredF2Offset

The default value is 0.

### Sampled Width

The value of the Sampled Width item shall be equal to:

* 1920 if the image format is 1920x1080.
* 1280 if the image format is 1280x720.
* 3840 if the image format is 3840x2160.
* 7680 if the image format is 7680x4320.

### Sampled Height

The value of the Sampled Height item shall be equal to:

* 1080 if the image format is 1920x1080 and progressive.
* 540 if the image format is 1920x1080 and interlaced.
* 720 if the image format is 1280x720 and progressive.
* 2160 if the image format is 3840x2160 and progressive.
* 4320 if the image format is 7680x4320 and progressive.

### SampledXOffset

The typical value is 0.

### SampledYOffset

The typical value is 0.

### DisplayHeight

The value of the DisplayHeight item shall be equal to:

* 1080 if the image format is 1920x1080 and progressive.
* 540 if the image format is 1920x1080 and interlaced.
* 720 if the image format is 1280x720 and progressive.
* 2160 if the image format is 3840x2160 and progressive.
* 4320 if the image format is 7680x4320 and progressive.

### DisplayWidth

* 1920 if the image format is 1920x1080.
* 1280 if the image format is 1280x720.
* 3840 if the image format is 3840x2160.
* 7680 if the image format is 7680x4320.

### DisplayXOffset

The typical value is 0.

### DisplayYOffset

The typical value is 0.

### DisplayF2Offset

The default value is 0.

### ActiveHeight

The value of the ActiveHeight is the number of vertical pixels of the Active Area Rectangle, as defined in Annex G of SMPTE ST 2067-2:2020.

### ActiveWidth

The value of the ActiveWidth is the number of horizontal pixels of the Active Area Rectangle, as defined in Annex G of SMPTE ST 2067-2:2020.

### ActiveXOffset

The value of the ActiveXOffset is the horizontal offset in Pixels of the Active Area Rectangle relative to the Display Rectangle, as defined in Annex G of SMPTE ST 2067-2:2020.

### ActiveYOffset

The value of the ActiveYOffset is the vertical offset in Pixels of the Active Area Rectangle relative to the Display Rectangle, as defined in Annex G of SMPTE ST 2067-2:2020.

### Aspect Ratio

The value of the Aspect Ratio item shall be equal to:

* 16:9 if the image format is 1920x1080.
* 16:9 if the image format is 1280x720.
* 16:9 if the image format is 3840x2160.
* 16:9 if the image format is 7680x4320.

### Video Line Map

The value of the Video Line Map item should be equal to:

* {42,0} if the image format is 1920x1080 and progressive.
* {21,584} if the image format is 1920x1080 and interlaced.
* {26,0} if the image format is 1280x720 and progressive.
* {42,0} if the image format is 3840x2160 and progressive.
* {42,0} if the image format is 7680x4320 and progressive.

### Transfer Characteristic, Coding Equations and Color Primaries

Transfer Characteristic, Coding Equations and Color Primaries should be one of the combinations per Signal Format of ST 2067-2.

[Check this is true 2067-60]{custom-style="smpte-ch-review-highlight"}

### FieldDominance

The default value is 1.

### Picture Essence Coding

The value of the Picture Essence Coding item shall be as specified in SMPTE ST 381-3.

### Alternative Center Cuts

The Alternative Center Cuts item specifies the alternate aspect ratio subset(s)
of the active area as specified in Annex F of SMPTE ST 2067-2:2020. Active area
is defined in Annex G of SMPTE ST 2067-2:2020.

