# VC-6 Picture SubDescriptor

[
For the VC-6 wrapping, the VC-6 Sub Descriptor, which is strongly referenced from the CDCI Descriptor or the RGBA Descriptor, should be used.
The VC-6 Sub Descriptor consists of the VC-6 specific properties as shown in Table 4.
]{custom-style="smpte-ch-highlight"}

::: {custom-style="smpte-caption"}
Table 4 - VC-6 Sub Descriptor ULs
:::

| Symbol                 | Kind        | Item UL                                                            |
| -----------------------|-------------|--------------------------------------------------------------------|
| 2117SubDescriptor      | GROUP       | `{{2117SubDescriptor.UL}}`                                         |
| VC6FixedUpsampler      | UInt8       | `{{VC6FixedUpsampler.UL}}`                                         |
| VC6ShortcutVector      | UInt16      | `{{VC6ShortcutVector.UL}}`                                         |
| VC6Lossless            | Boolean     | `{{VC6Lossless.UL}}`                                               |
| VC6CBR                 | Boolean     | `{{VC6CBR.UL}}`                                                    |
| VC6Bitrate             | UInt64      | `{{VC6Bitrate.UL}}`                                                |
| VC6CompressedFrameMax  | UInt54      | `{{VC6CompressedFrameMax.UL}}`                                     |
| VC6CompressedFrameAvg  | UInt54      | `{{VC6CompressedFrameAvg.UL}}`                                     |
| VC6MaxNoOfEchelons     | UInt8       | `{{VC6MaxNoOfEchelons.UL}}`                                        |
| VC6EchelonList         | Group       | `{{VC6EchelonList.UL}}`                                            |

::: {custom-style="smpte-caption"}
Table 5 - VC-6 Sub Descriptor Elements
:::

| Symbol                 | type        |                                                                    |
| -----------------------|-------------|--------------------------------------------------------------------|
| 2117SubDescriptor      | GROUP       | Properties in the group are in this table                          |
| VC6FixedUpsampler      | UInt8       | Upsampler Identified in the bitstream for ideal reconstruction     |
| VC6ShortcutVector      | UInt16      | One shortcut per frame?????  34MB of xml                                      |
| VC6Lossless            | Boolean     | Set to true (_by magic_) if encoding is intended to be lossless    |
| VC6CBR                 | Boolean     | Set to true if the bitrate is intended to be constant              |
| VC6Bitrate             | UInt64      | Bits per second value of VBR bitrate cap or CBR target value       |
| VC6CompressedFrameMax  | UInt54      | If present, the maximum frame size in the file                     |
| VC6CompressedFrameAvg  | UInt54      | If present, the average of all frame sizes in the file             |
| VC6MaxNoOfEchelons     | UInt8       | Maximum number of Echelons in any frame in the file                |
| VC6EchelonList         | Group       | List of the dimensions of each Echelon                             |

::: {custom-style="smpte-caption"}
Table 6 - VC6EchelonList Symbols
:::

| Symbol                 | type        |                                                                    |
| -----------------------|-------------|--------------------------------------------------------------------|
| VC6EchelonList         | GROUP       | Properties in the group are in this table                          |
| VC6EchelonProperties   | Group       | An Echelon Properties Set                                          |

::: {custom-style="smpte-caption"}
Table 7 - VC6EchelonProperties Symbols
:::

| Symbol                 | type        |  Description                                                       |
| -----------------------|-------------|--------------------------------------------------------------------|
| VC6EchelonProperties   | GROUP       | Properties in the group are in this table                          |
| VC6EchelonIndex        | Int32       | Signed Index of this Echelon as identified in ST 2117-1:2020 §4.8.9|
| VC6SampledHeight       | UInt32      | Sampled Height of the recontituted pixel grid                      |
| VC6SampledWidth        | UInt32      | Sampled Height of the recontituted pixel grid                      |
