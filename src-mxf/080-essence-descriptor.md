# `VC6SubDescriptor`

A `VC6SubDescriptor` should be present for VC-6 content in MXF, even if all the
optional properties are omitted. The `VC6SubDescriptor` is strongly referenced
from a CDCI Descriptor or RGBA Descriptor and has the properties shown in
Table 4.

::: {custom-style="smpte-caption"}
Table 4 - `VC6SubDescriptor` ULs
:::

| Symbol                      | Register.Kind                                                             | Item UL                          |
|-----------------------------|---------------------------------------------------------------------------|----------------------------------|
| `VC6Parameters`             | {{VC6Parameters.Register}}.{{VC6Parameters.Kind}}                         | {{VC6Parameters.UL}}             |
| `VC6SubDescriptor`          | {{VC6SubDescriptor.Register}}.{{VC6SubDescriptor.Kind}}                   | {{VC6SubDescriptor.UL}}          |
| `VC6GCUpsamplersBatch`      | {{VC6GCUpsamplersBatch.Register}}.{{VC6GCUpsamplersBatch.Kind}}           | {{VC6GCUpsamplersBatch.UL}}      |
| `VC6ShortcutBitvectorBatch` | {{VC6ShortcutBitvectorBatch.Register}}.{{VC6ShortcutBitvectorBatch.Kind}} | {{VC6ShortcutBitvectorBatch.UL}} |
| `VC6Lossless`               | {{VC6Lossless.Register}}.{{VC6Lossless.Kind}}                             | {{VC6Lossless.UL}}               |
| `VC6CBR`                    | {{VC6CBR.Register}}.{{VC6CBR.Kind}}                                       | {{VC6CBR.UL}}                    |
| `VC6Bitrate`                | {{VC6Bitrate.Register}}.{{VC6Bitrate.Kind}}                               | {{VC6Bitrate.UL}}                |
| `VC6CompressedFrameMax`     | {{VC6CompressedFrameMax.Register}}.{{VC6CompressedFrameMax.Kind}}         | {{VC6CompressedFrameMax.UL}}     |
| `VC6CompressedFrameAvg`     | {{VC6CompressedFrameAvg.Register}}.{{VC6CompressedFrameAvg.Kind}}         | {{VC6CompressedFrameAvg.UL}}     |
| `VC6MaxNoOfEchelons`        | {{VC6MaxNoOfEchelons.Register}}.{{VC6MaxNoOfEchelons.Kind}}               | {{VC6MaxNoOfEchelons.UL}}        |
| `VC6EchelonsArray`          | {{VC6EchelonsArray.Register}}.{{VC6EchelonsArray.Kind}}                   | {{VC6EchelonsArray.UL}}          |

::: {custom-style="smpte-note"}

NOTE: `VC6SubDescriptor` is a child of `SubDescriptor` as specified in SMPTE ST
377-1 annex B.3 and includes properties of the parent.
:::

::: {custom-style="smpte-caption"}
Table 5 - Elements in the `VC6SubDescriptor` Set
:::

| Symbol                      | type                                     | Len                                  | Req? | Meaning                                  |
|-----------------------------|------------------------------------------|--------------------------------------|------| -----------------------------------------|
| `VC6SubDescriptor`          | Set UL                                   | 16                                   | Req  | {{VC6SubDescriptor.Definition}}          |
| _`Length`_                  | BER Length                               | 4                                    | Req  | Set Length                               |
| `VC6GCUpsamplersBatch`      | {{VC6GCUpsamplersBatch.TypeSymbol}}      | 8 + 16n                              | Opt  | {{VC6GCUpsamplersBatch.Definition}}      |
| `VC6ShortcutBitvectorBatch` | {{VC6ShortcutBitvectorBatch.TypeSymbol}} | 8 + 16n                              | Opt  | {{VC6ShortcutBitvectorBatch.Definition}} |
| `VC6Lossless`               | {{VC6Lossless.TypeSymbol}}               | {{VC6Lossless.TypeSize}}             | Opt  | {{VC6Lossless.Definition}}               |
| `VC6CBR`                    | {{VC6CBR.TypeSymbol}}                    | {{VC6CBR.TypeSize}}                  | Opt  | {{VC6CBR.Definition}}                    |
| `VC6Bitrate`                | {{VC6Bitrate.TypeSymbol}}                | {{VC6Bitrate.TypeSize}}              | Opt  | {{VC6Bitrate.Definition}}                |
| `VC6CompressedFrameMax`     | {{VC6CompressedFrameMax.TypeSymbol}}     | {{VC6CompressedFrameMax.TypeSize}}   | Opt  | {{VC6CompressedFrameMax.Definition}}     |
| `VC6CompressedFrameAvg`     | {{VC6CompressedFrameAvg.TypeSymbol}}     | {{VC6CompressedFrameAvg.TypeSize}}   | Opt  | {{VC6CompressedFrameAvg.Definition}}     |
| `VC6MaxNoOfEchelons`        | {{VC6MaxNoOfEchelons.TypeSymbol}}        | {{VC6MaxNoOfEchelons.TypeSize}}      | Opt  | {{VC6MaxNoOfEchelons.Definition}}        |
| `VC6EchelonsArray`          | {{VC6EchelonsArray.TypeSymbol}}          | 8 + 16n                              | Opt  | {{VC6EchelonsArray.Definition}}          |

A zero value of `VC6CBR` shall indicate that `VC6Bitrate` represents the target
CBR bitrate. A non-zero value shall indicate that `VC6Bitrate` represents the
maximum bitrate value in bits per second for one frame period.

::: {custom-style="smpte-note"}
NOTE: `VC6ShortcutVectorsBatch` contains only unique values. In theory there are
65536 different permutations of ShortcutVector. In practice only a few are
actually created by an encoder. This property can be used by a decoder to help
determine the resources required for decoding the generic container.
:::

::: {custom-style="smpte-caption"}
Table 6 - `VC6EchelonProperties` ULs
:::

| Symbol                 | Register.Kind                                                   | Item UL                     |
| -----------------------|---------------------------------------------------------------- |-----------------------------|
| `VC6EchelonProperties` | {{VC6EchelonProperties.Register}}.{{VC6EchelonProperties.Kind}} | {{VC6EchelonProperties.UL}} |
| `VC6EchelonIndex`      | {{VC6EchelonIndex.Register}}.{{VC6EchelonIndex.Kind}}           | {{VC6EchelonIndex.UL}}      |
| `VC6SampledHeight`     | {{VC6SampledHeight.Register}}.{{VC6SampledHeight.Kind}}         | {{VC6SampledHeight.UL}}     |
| `VC6SampledWidth`      | {{VC6SampledWidth.Register}}.{{VC6SampledWidth.Kind}}           | {{VC6SampledWidth.UL}}      |

::: {custom-style="smpte-note"}
NOTE: `VC6EchelonProperties` is a child of `InterchangeObject` as specified in
SMPTE ST 377-1 and includes properties of the parent.
:::

::: {custom-style="smpte-caption"}
Table 7 - Elements in the `VC6EchelonProperties` Set
:::

| Symbol                 | type                            | Len                           | Req? | Meaning                             |
| -----------------------|---------------------------------|-------------------------------|------|-------------------------------------|
| `VC6EchelonProperties` | Set UL                          | 16                            | Req  | {{VC6EchelonProperties.Definition}} |
| _`Length`_             | BER Length                      | 4                             | Req  | Set Length                          |
| `VC6EchelonIndex`      | {{VC6EchelonIndex.TypeSymbol}}  | {{VC6EchelonIndex.TypeSize}}  | Req  | {{VC6EchelonIndex.Definition}}      |
| `VC6SampledHeight`     | {{VC6SampledHeight.TypeSymbol}} | {{VC6SampledHeight.TypeSize}} | Req  | {{VC6SampledHeight.Definition}}     |
| `VC6SampledWidth`      | {{VC6SampledWidth.TypeSymbol}}  | {{VC6SampledWidth.TypeSize}}  | Req  | {{VC6SampledWidth.Definition}}      |
