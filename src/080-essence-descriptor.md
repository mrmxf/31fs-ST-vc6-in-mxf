# VC-6 Picture SubDescriptor

[
For the VC-6 wrapping, the VC-6 Sub Descriptor, which is strongly referenced from the CDCI Descriptor or the RGBA Descriptor, should be used.
The VC-6 Sub Descriptor consists of the VC-6 specific properties as shown in Table 4.
]{custom-style="smpte-ch-highlight"}

[Table X - VC-6 Sub Descriptor Symbols]{custom-style="smpte-caption-table"}

| Symbol                 | type        |                                                                    |
| -----------------------|-------------|--------------------------------------------------------------------|
| 2117SubDescriptor      | GROUP       | Properties in the group are in this table                          |
| VC6UpsamplerArray      | UInt8Array  | What do the indices mean?                                          |
| VC6FixedUpsampler      | UInt8       | Upsampler Identified in the bitstream for ideal reconstruction     |
| VC6ShortcutVectorArray | UInt16Array | Shortcuts affecting bitstream deconding from Table 27 in ST 2117-1 |
| VC6ShortcutVector      | UInt16      | One shortcut per frame?????                                        |
| VC6Lossless            | Boolean     | Set to true (_by magic_) if encoding is intended to be lossless    |
| VC6CBR                 | Boolean     | Set to true if the bitrate is intended to be constant              |
| VC6Bitrate             | UInt64      | Bits per second value of VBR bitrate cap or CBR target value       |
| VC6CompressedFrameMax  | UInt54      | If present, the maximum frame size in the file                     |
| VC6CompressedFrameAvg  | UInt54      | If present, the average of all frame sizes in the file             |
| VC6MaxNoOfEchelons     | UInt8       | Maximum number of Echelons in any frame in the file                |
| VC6EchelonList         | Group       | List of the dimensions of each Echelon                             |

| Symbol                 | type        |                                                                    |
| -----------------------|-------------|--------------------------------------------------------------------|
| VC6EchelonList         | GROUP       | Properties in the group are in this table                          |
| VC6EchelonProperties   | Group       | An Echelon Properties Set                                          |

| Symbol                 | type        |                                                                    |
| -----------------------|-------------|--------------------------------------------------------------------|
| VC6EchelonProperties   | GROUP       | Properties in the group are in this table                          |
| VC6EchelonIndex        | Int32       | Signed Index of this Echelon as identified in ST 2117-1:2020 §4.8.9|
| VC6SampledHeight       | UInt32      | Sampled Height of the recontituted pixel grid                      |
| VC6SampledWidth        | UInt32      | Sampled Height of the recontituted pixel grid                      |
