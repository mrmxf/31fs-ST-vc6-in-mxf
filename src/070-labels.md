# MXF Labels

## Essence Container Label

The Essence Container Label is carried in the Essence Containers Properties
of the Partition Packs, Preface Set and File Descriptor as define in SMPTE ST 377-1.

The values of the Essence Container Label for VC-6 Bytestreams in MXF shall be one of the values in Table 2.

[Table 2 – Essence Container Label Values for VC-6]{custom-style="smpte-caption-figure"}

| Symbol                                  | Kind                                             | Item UL
|-----------------------------------------|------------------------------------------------- |---------------------------------------------------
| MXFGCVC6Bytestreams                     | {{MXFGCVC6Bytestreams.Kind}}                     | {{MXFGCVC6Bytestreams.UL}}
| MXFGCVC6FrameWrappedGenericBytestream   | {{MXFGCVC6FrameWrappedGenericBytestream.Kind}}   | {{MXFGCVC6FrameWrappedGenericBytestream.UL}}
| MXFGCVC6FrameWrappedProgressivePictures | {{MXFGCVC6FrameWrappedProgressivePictures.Kind}} | {{MXFGCVC6FrameWrappedProgressivePictures.UL}}
| MXFGCVC6FrameWrappedInterlacedPictures  | {{MXFGCVC6FrameWrappedInterlacedPictures.Kind}}  | {{MXFGCVC6FrameWrappedInterlacedPictures.UL}}

The `VC6FrameWrappedGenericBytestream` shall only be used in cases where neither `VC6FrameWrappedProgressivePictures`
nor `VC6FrameWrappedInterlacedPictures` describe the Pictures that are VC-6 encoded.

## Picture Essence Coding Label

Labels intended for use as values for the Picture Essence Coding item of the Generic Picture Essence
Descriptor, specified in SMPTE ST 377-1, are given in Table 3.

[Table 3 – Picture Essence Coding Label Values for VC-6]{custom-style="smpte-caption-figure"}

| Symbol                               | Kind                                   | Item UL
|--------------------------------------|----------------------------------------|---------------------------------------------------
| VC6Bytestreams                       | {{VC6Bytestreams.Kind}}                | {{VC6Bytestreams.UL}}
| VC6UnrestrictedBytestream            | {{VC6UnrestrictedBytestream.Kind}}     | {{VC6UnrestrictedBytestream.UL}}
| VC6ConstrainedBySomeMagic            | {{VC6ConstrainedBySomeMagic.Kind}}     | {{VC6ConstrainedBySomeMagic.UL}}

NOTE The Picture Essence Coding item of the Generic Picture Essence Descriptor is intended to allow a decoder to
fast-fail when processing the MXF file.

[EDITORIAL NOTE: ]{custom-style="smpte-ch-highlight"}
[Currently there are no profiles or levels defined. We don't have to define any. Current register entry is {{VC6ConstrainedBySomeMagic.Definition}}
]{custom-style="smpte-ch-highlight-green"}
