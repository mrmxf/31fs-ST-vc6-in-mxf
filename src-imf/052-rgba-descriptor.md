## Image Track File RGBA Descriptor

### General

The RGBA Picture Essence Descriptor items shall be as specified in Annex G of
SMPTE ST 377-1:2019 and then further constrained as specified in this section.
Table 6 specifies the following items:

Items which are further constrained, i.e. required items which are specified as
Optional in SMPTE ST 377-1.

Best Effort items which are specified in SMPTE ST 377-1.

:::{custom-style="smpte-caption"}
Table 6 — RGBA Picture Essence Descriptor Items
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

| **RGBA  Item**      | **Constraints**                           | **Status: ST 377-1** |
| ------------------- | ----------------------------------------- | -------------------- |
| Component  Max Ref  | Shall  be present. See Section 5.2.2.2.2. | Opt                  |
| Component  Min Ref  | Shall  be present. See Section 5.2.2.2.2. | Opt                  |
| PixelLayout         | See  Section 5.2.2.2.3.                   | B.Effort             |

### Component Max Ref and Component Min Ref

Component Max Ref is an item, whose unsigned 32-bit integer value shall specify
the R’G’B’ sample value for reference white level. Similarly, Component Min Ref
is an item, whose unsigned 32-bit integer value shall specify the R’G’B’ sample
value for reference black level. Table 7 describes the “narrow range” and “full
range” signal representations of Recommendation ITU-R BT.2100.

:::{custom-style="smpte-caption"}
Table 7 — Component Max Ref and Component Min Ref values
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

| **Range**          | **Narrow  range** | **Full  range** |        |            |
| ------------------ | ----------------- | --------------- | ------ | ---------- |
| **Bit Depth**      | **10**            | **1****2**      | **10** | **1****2** |
| Component  Min Ref | 64                | 256             | 0      | 0          |
| Component  Max Ref | 940               | 3760            | 1023   | 4095       |
|                    |                   |                 |        |            |

### PixelLayout

The value of the PixelLayout item shall be equal to { ‘G’, x, ‘B’, x, ‘R’, x, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0 }  where x is equal to 10 or 12 if 10-bit or 12-bit
color components are used per Section 4.1.

