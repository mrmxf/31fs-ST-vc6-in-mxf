# MXF Labels

## Essence Container Label

The Essence Container Label is carried in the Essence Containers Properties of
the Partition Packs, Preface Set and File Descriptor as defined in SMPTE ST
377-1.

The values of the Essence Container Label for VC-6 bitstreams in MXF shall be
one of the values in Table 2.

:::{custom-style="smpte-caption"}
Table 2 – Essence Container Label Values for VC-6
:::

| Symbol                                    | Kind                                             | Item UL                                       |
|-------------------------------------------|------------------------------------------------- |-----------------------------------------------|
| `MXFGCVC6BitstreamContainerLabels`        | {{MXFGCVC6BitstreamContainerLabels.Kind}}        | {{MXFGCVC6BitstreamContainerLabels.UL}}                 |
| `MXFGCVC6FrameWrappedGenericBitstream`    | {{MXFGCVC6FrameWrappedGenericBitstream.Kind}}    | {{MXFGCVC6FrameWrappedGenericBitstream.UL}}   |
| `MXFGCVC6FrameWrappedProgressivePictures` | {{MXFGCVC6FrameWrappedProgressivePictures.Kind}} | {{MXFGCVC6FrameWrappedProgressivePictures.UL}}|
| `MXFGCVC6FrameWrappedInterlacedPictures`  | {{MXFGCVC6FrameWrappedInterlacedPictures.Kind}}  | {{MXFGCVC6FrameWrappedInterlacedPictures.UL}} |

The `VC6FrameWrappedGenericbitstream` shall only be used in cases where neither
`VC6FrameWrappedProgressivePictures` nor `VC6FrameWrappedInterlacedPictures`
describe the Pictures that are VC-6 encoded.

## Picture Essence Coding Label

Labels intended for use as values for the Picture Essence Coding item of the
Generic Picture Essence Descriptor, specified in SMPTE ST 377-1, are given in
Table 3.

:::{custom-style="smpte-caption"}
Table 3 – Picture Essence Coding Label Values for VC-6
:::

| Symbol                     | Kind                              | Item UL                         |
|----------------------------|-----------------------------------|---------------------------------|
| `VC6BitstreamCoding`       | {{VC6BitstreamCoding.Kind}}       | {{VC6BitstreamCoding.UL}}       |
| `VC6UnrestrictedBitstream` | {{VC6UnrestrictedBitstream.Kind}} | {{VC6UnrestrictedBitstream.UL}} |

:::  {custom-style="smpte-note"}
NOTE The Picture Essence Coding item of the Generic Picture Essence Descriptor
is intended to allow a decoder to fast-fail when processing the MXF file.
:::

:::  {custom-style="smpte-note"}
NOTE The Public CD for this document will start with no constrained bitstream
flags. If requirements for constrained bitstreams arise during the Public CD
phase, then we will add them to the table above.
:::
