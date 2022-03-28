## CDCI Picture Essence Descriptor

### General

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

### Component Depth

The value shall be equal to the Bit Depth used. (see Section 4.1)

###  Horizontal Subsampling

The value of Horizontal Subsampling item shall be equal to:

* 0x01 if 4:4:4 sampling is used per Section 4.2.
* 0x02 if 4:2:2 or 4:2:0 sampling is used per Section 4.2.

### Vertical Subsampling

The value of Vertical Subsampling item shall be equal to:

* 0x01 if 4:4:4 or 4:2:2 sampling is used per Section 4.2.
* 0x02 if 4:2:0 sampling is used per Section 4.2.

### Color Siting

The value shall be 0x00.

### ReversedByteOrder

The typical value is 0.

### PaddingBits

The typical value is 0.

### Black Ref Level, White Ref Level and Color Range

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
