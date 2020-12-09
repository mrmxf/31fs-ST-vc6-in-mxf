# Mapping VC-6 bitstream

## General

The mapping of SMPTE ST-2117, is as defined in SMPTE ST 381-3. The mapping of AES3 digital audio data is defined by SMPTE ST 382. This specification uses Frame Wrapping as defined by SMPTE ST 379-2. The System Item is defined by SMPTE ST 326 and mapped into the MXF by SMPTE ST 385. The order of Items in each Edit Unit is System, Picture, Sound and Data.

## Edit Unit Structure

The SMPTE ST 2117 MXF Mapping shall make use of Frame Wrapping as defined by SMPTE ST 379-2 Section 8.4.1.

An arrangement of System, Picture, Sound, and Data Items in a Frame Wrapping, i.e. the structure of Edit Unit is shown in Figure 3.

![Structure of Generic Edit Unit]()

## System Item Mapping

## General

The System Item in each Edit Unit consists of System Metadata Pack, a Package Metadata set and Picture Metadata Set.

### Overview of System Item

The System Item is placed at the beginning of every Edit Unit and contains information on the essence item and the metadata attached to the frames, and it shall comply with SMPTE ST 385.

Typical System Item consists of the following two KLV packets and a fill item, and its size is the same as one KAG size (1h).

* System Metadata Pack contains Package Rate, Multiple EC UL, LTC
* Package Metadata Set contains Body UMID
* Fill Item

Figure 4 shows the outline of System Item.

![Typical System Item]()

### System Metadata Pack

The Pack Key is 06.0E.2B.34.02.05.01.01.0D.01.03.01.04.01.01.00, in accordance with SMPTE ST 385. The Length of this pack shall be fixed, i.e. 57-bit payload.

Also, each property shall be described in the provided field without tag and length. The sequence and values shall comply with SMPTE ST 326

* System Metadata Bitmap ("SMB" in the figure) indicates the presence of metadata in the Pack, and of essence data within the Edit Unit, should be set to 0101_1100b, when Data Item is not recorded or 0101_1110b when Data Item is recorded.
* The value of Continuity Count ("CC" in the figure) shall be monotonically increasing within a file. It does not have to start from 0, and reverts to 0000h following full count FFFFh.
* SMPTE Universal Label ("GC EC label" in the figure) shall be set to the same label as the Essence Container Property of Multiple Descriptor Set
* Package Creation Date should be blank. Tag ("T" in the figure) and the remains are filled with 00h
* LTC shall be described in the User Date column. Since it complies with SMPTE ST 331, it starts with CP-Tag 81h and digits of Frame, Second, Minute, and Hour are placed with flags such as DF, and then Binary Group data (4 bits) is placed and remaining 8 bits are filled with 0. In the 50p/59.94p system, the LTC is handled in half the rate of the Main-Stream video, and the field mark flag in the Time Code is used to identify the first or second frame of a frame pair

### Package Metadata Set

The Set Key is 06.0E.2B.34.02.43.01.01.0D.01.03.01.04.01.02.nn, in accordance with SMPTE ST 385. This nn indicates the number of Metadata Block in the Set and is typically 1 for Body UMID in this specification.

Each metadata block is described with 1-bit CP-Tag and 2-bit Length field. Typical metadata in this specification, shown in Figure 4 is defined as follows:

* Body UMID should be described as the first Metadata Block
  * Extended UMID (64 bits) should be described with CP-Tag 83h
  * Decoders should support the case of having just Basic UMID (32 bits) or blank data (i.e. Local Length is zero) in the Metadata Block

## Picture Item Mapping

### General

Figure 5 shows the SMPTE ST-2117 picture element, the bitstream shall comply with SMPTE ST-2117.

![Mapping of ST-2117 Picture Item Element]()

### SMPTE ST-2117 Picture Element Key

The Key is `06.0E.2B.34.01.02.01.01.0D.01.03.01.15.kk.05.nn`, in accordance with SMPTE ST-2117, as it is a Frame Wrapped GC-Picture element.

The parameter kk specifies the count of Picture Elements in the Picture Item, and nn indicates the index number of the Element. In this specification, the tail of the key shall be set to 15.01.05.00.

### SMPTE ST-2117 Picture Element Length

The length field of the KLV coded Element is 4 bits BER long-form encoded (i.e. `83h.xx.yy.zz`) for Frame wrapping.

### SMPTE ST-2117 Picture Element Value

The Picture Element complies with SMPTE ST-2117.

* The constraints on the conformant implementations are described in Annex B.8.2.
* Operating Points of the elementary stream are described in Annex C.
* The property values of Picture Essence Descriptor are described in Annex D.

## AES3 Sound Item Mapping

### General

This element contains a Linear-PCM Audio data stream and shall comply with SMPTE ST 382.

Figure 6 shows the mapping of generic AES Sound Item Element

![Mapping of AES in a Sound Item]()

### AES3 Sound Element Key

The Key is `06.0E.2B.34.01.02.01.01.0D.01.03.01.16.kk.03.nn`, in accordance with SMPTE ST 382 as it is a Frame Wrapped AES GC-Sound element.
The parameter kk specifies the count of Sound Elements, and nn indicates the index number of the Element. In this specification, nn shall be assigned as an incremental integer number starting from zero., for the 3rd element of 8 channels, the tail of the key is set to `16.08.03.02`

### AES3 Sound Element Length

The length field of the KLV coded Element is 4 bits BER long-form encoded (i.e. `83h.xx.yy.zz`) for Frame wrapping.

### AES3 Sound Element Value

The Sound Element Value complies with SMPTE ST 382

* The constraints on the conformant implementations are described in Annex B.8.3.
* The property values of Sound Essence Descriptor are described in Annex D

## Data Item Mapping

## General

This element contains data stream, e.g. caption or sub-title, and shall comply with SMPTE ST 436-1. Figure 6 shows the mapping of ANC Data Item Element.

![Mapping of ANC Data in a Data Item Element]()

The Set Key is `06.0E.2B.34.01.02.01.01.0D.01.03. 01.17.01.02.01`, in accordance with SMPTE ST 436-1, because it allows one Frame Wrapped ANC Data Element in an Edit Unit.

### Acquisition Metadata Set

Acquisition Metadata Sets are specified in SMPTE RDD 18 and may be attached as ANC packets in the Data Item.
