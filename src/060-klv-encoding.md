# Key Length Value Encoding

## Picture Element Key

### SMPTE ST-2117 Picture Element Key

::: {custom-style="smpte-caption"}
Table 1 - Picture Element Keys
:::

| Symbol                          | Kind                                   | Item UL                              |
|---------------------------------|----------------------------------------|--------------------------------------|
| `FrameWrappedVC6PictureElement` | {{FrameWrappedVC6PictureElement.Kind}} | {{FrameWrappedVC6PictureElement.UL}} |

::: {custom-style="smpte-note"}
NOTE: The table shows the `Item UL` in the SMPTE Metadata registers where the
value `7f` in bytes 14 and 16 are placeholders for the Essence element count
and Essence element number of the Element within the Picture Item as defined in
SMPTE ST 379.
:::

`FrameWrappedVC6PictureElement` key bytes 1-13 are defined in SMPTE ST 379-2.

`FrameWrappedVC6PictureElement` key bytes 14 and 16 shall be set to 1 in this
version of the standard. Future versions may allow this constraint to be
loosened.

### SMPTE ST-2117 Picture Element Length

The length field of the KLV coded Element shall comply with SMPTE ST 379-2.

### SMPTE ST-2117 Picture Element Value

Each Picture Element value shall be a bitstream for a single image compliant
with SMPTE ST-2117-1.
