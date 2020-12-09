# Key Length Value Encoding

## Picture Element Key

### SMPTE ST-2117 Picture Element Key

::: {custom-style="smpte-caption"}
Table 1 - Picture Element Keys
:::

| Symbol                        | Kind                                   | Item UL
|-------------------------------|----------------------------------------|---------------------------------------------------
| FrameWrappedVC6PictureElement | {{FrameWrappedVC6PictureElement.Kind}} | {{FrameWrappedVC6PictureElement.UL}}

Bytes 1-13 of the `FrameWrappedVC6PictureElement` key are defined by SMPTE ST 379-2.

::: {custom-style="smpte-note"}
NOTE: The value `7f` in byte 16 is a placeholder for the Essence element number
of the Element within the Picture Item starting at `01` as defined by SMPTE ST 379-2.
For VC-6 mappings this shall have the value `01`.
:::

### SMPTE ST-2117 Picture Element Length

The length field of the KLV coded Element shall comply with SMPTE ST 379-2.

### SMPTE ST-2117 Picture Element Value

Each Picture Element value shall be a bitstream for a single image compliant with SMPTE ST-2117-1.
