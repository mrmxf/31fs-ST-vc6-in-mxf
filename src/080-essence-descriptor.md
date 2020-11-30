# VC-6 Picture SubDescriptor

[
For the VC-6 wrapping, the VC-6 Sub Descriptor, which is strongly referenced from the CDCI Descriptor or the RGBA Descriptor, should be used.
The VC-6 Sub Descriptor consists of the VC-6 specific properties as shown in Table 4.
]{custom-style="smpte-ch-highlight"}

[Table X - VC-6 Sub Descriptor Symbols]{custom-style="smpte-caption-table"}

| Symbol              | type
| ---------------------------------|
| 2117SubDescriptor   |
| UpsamplerList       |
| Upsampler           |
| FixedUpsampler      |
| ShortcutVectorList  |
| ShortcutVector      |
| Lossless            |
| CBR                 | Boolean or value?
| Bitrate             | Int16 - cap of VBR or CBR target |
| FrameCompressedSize |
| MaxNoOfEchelons     |
| EchelonList         |
| Echelon             |
| EchelonNumber       |
| SampledHeight       |
| SampledWidth        |
