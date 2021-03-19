# `VC6SubDescriptor`

A `VC6SubDescriptor` should be present for VC-6 content in MXF. The `VC6SubDescriptor` is strongly referenced from
a CDCI Descriptor or RGBA Descriptor and has the properties shown in Table 4. [**R**] indicates that a property is required.

::: {custom-style="smpte-caption"}
Table 4 - `VC6SubDescriptor` ULs
:::

| Symbol                 | Register.Kind                                                        | Item UL                         |
| -----------------------|----------------------------------------------------------------------|---------------------------------|
| VC6Parameters          | {{VC6Parameters.Register}}.{{VC6Parameters.Kind}}                    | {{VC6Parameters.UL}}            |
| VC6SubDescriptor       | {{VC6SubDescriptor.Register}}.{{VC6SubDescriptor.Kind}}              | {{VC6SubDescriptor.UL}}         |
| VC6EchelonProperties   | {{VC6EchelonProperties.Register}}.{{VC6EchelonProperties.Kind}}      | {{VC6EchelonProperties.UL}}     |
| VC6GCUpsamplersBatch   | {{VC6GCUpsamplersBatch.Register}}.{{VC6GCUpsamplersBatch.Kind}}      | {{VC6GCUpsamplersBatch.UL}}     |
| VC6ShortcutVectorsBatch| {{VC6ShortcutVectorsBatch.Register}}.{{VC6ShortcutVectorsBatch.Kind}}| {{VC6ShortcutVectorsBatch.UL}}  |
| VC6Lossless            | {{VC6Lossless.Register}}.{{VC6Lossless.Kind}}                        | {{VC6Lossless.UL}}              |
| VC6CBR                 | {{VC6CBR.Register}}.{{VC6CBR.Kind}}                                  | {{VC6CBR.UL}}                   |
| VC6Bitrate             | {{VC6Bitrate.Register}}.{{VC6Bitrate.Kind}}                          | {{VC6Bitrate.UL}}               |
| VC6CompressedFrameMax  | {{VC6CompressedFrameMax.Register}}.{{VC6CompressedFrameMax.Kind}}    | {{VC6CompressedFrameMax.UL}}    |
| VC6CompressedFrameAvg  | {{VC6CompressedFrameAvg.Register}}.{{VC6CompressedFrameAvg.Kind}}    | {{VC6CompressedFrameAvg.UL}}    |
| VC6MaxNoOfEchelons     | {{VC6MaxNoOfEchelons.Register}}.{{VC6MaxNoOfEchelons.Kind}}          | {{VC6MaxNoOfEchelons.UL}}       |
| VC6EchelonVector       | {{VC6EchelonVector.Register}}.{{VC6EchelonVector.Kind}}              | {{VC6EchelonVector.UL}}         |

::: {custom-style="smpte-caption"}
Table 5 - Elements in the `VC6SubDescriptor`
:::

| Symbol                 | type                                  | Len                                | Meaning                                |
| -----------------------|---------------------------------------|----------------------------------- |----------------------------------------|
| VC6SubDescriptor       | Set UL                                | 16                                 | [**R**] ST 2117 Sub Descriptor Key     |
| VC6GCUpsamplersBatch   | {{VC6GCUpsamplersBatch.TypeSymbol}}   | 8 + 16n                            | {{VC6GCUpsamplersBatch.Definition}}    |
| VC6ShortcutVectorsBatch| {{VC6ShortcutVectorsBatch.TypeSymbol}}| 8 + 16n                            | {{VC6ShortcutVectorsBatch.Definition}} |
| VC6Lossless            | {{VC6Lossless.TypeSymbol}}            | {{VC6Lossless.TypeSize}}           | {{VC6Lossless.Definition}}             |
| VC6CBR                 | {{VC6CBR.TypeSymbol}}                 | {{VC6CBR.TypeSize}}                | {{VC6CBR.Definition}}                  |
| VC6Bitrate             | {{VC6Bitrate.TypeSymbol}}             | {{VC6Bitrate.TypeSize}}            | {{VC6Bitrate.Definition}}              |
| VC6CompressedFrameMax  | {{VC6CompressedFrameMax.TypeSymbol}}  | {{VC6CompressedFrameMax.TypeSize}} | {{VC6CompressedFrameMax.Definition}}   |
| VC6CompressedFrameAvg  | {{VC6CompressedFrameAvg.TypeSymbol}}  | {{VC6CompressedFrameAvg.TypeSize}} | {{VC6CompressedFrameAvg.Definition}}   |
| VC6MaxNoOfEchelons     | {{VC6MaxNoOfEchelons.TypeSymbol}}     | {{VC6MaxNoOfEchelons.TypeSize}}    | {{VC6MaxNoOfEchelons.Definition}}      |
| VC6EchelonVector       | Array of Strong Ref                   | 8 + 16n                            | {{VC6EchelonVector.Definition}}        |

A zero value of `VC6CBR` shall indicate that `VC6Bitrate` represents the target CBR bitrate. A non-zero value shall indicate that `VC6Bitrate` represents the maximum
bitrate value in bits per second for one frame period.

::: {custom-style="smpte-note"}
NOTE: `VC6ShortcutVectorsBatch` contains only unique values. In theory there are 65536 different permutations of ShortcutVector.
In practise only a few are actually created by an encoder. This property can be used by a decoder to help determine the resources
required for decoding the generic container.
:::

::: {custom-style="smpte-caption"}
Table 7 - Elements in the VC6EchelonProperties Set
:::

| Symbol                | type                               | Len                            | Meaning                                |
| ----------------------|------------------------------------|--------------------------------|----------------------------------------|
| VC6EchelonProperties  | Set UL                             | 16                             | [**R**] VC6EchelonProperties Key       |
| VC6EchelonIndex       | {{VC6EchelonIndex.TypeSymbol}}     | {{VC6EchelonIndex.TypeSize}}   | [**R**] {{VC6EchelonIndex.Definition}} |
| VC6SampledHeight      | {{VC6SampledHeight.TypeSymbol}}    | {{VC6SampledHeight.TypeSize}}  | [**R**] {{VC6SampledHeight.Definition}}|
| VC6SampledWidth       | {{VC6SampledWidth.TypeSymbol}}     | {{VC6SampledWidth.TypeSize}}   | [**R**] {{VC6SampledWidth.Definition}} |
