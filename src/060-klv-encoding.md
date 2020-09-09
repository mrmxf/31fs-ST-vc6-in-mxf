# Key Length Value Encoding

## Picture Element Key

### SMPTE ST-2117 Picture Element Key

[Table 1]{custom-style=smpte-caption-table}

| Item Name                         | Symbol                        | Kind | Item UL
|-----------------------------------|-------------------------------|------|---------------------------------------------------
| Frame Wrapped VC6 Picture Element | FrameWrappedVC6PictureElement | LEAF | `urn:smpte:ul:060E2B34.01020101.0D010301.15kk05nn`

The parameter `kk` specifies the count of Picture Elements in the Picture Item, and `nn` indicates the index number of the Element.
For VC-6 mappings `kk` should have the value `01` and `nn` should have the value `01`.

### SMPTE ST-2117 Picture Element Length

The length field of the KLV coded Element shall be 4 bytes BER long-form encoded (i.e. `83h.xx.yy.zz`).

### SMPTE ST-2117 Picture Element Value

Each Picture Element shall be a byte stream for a single image compliant with SMPTE ST-2117-1.
