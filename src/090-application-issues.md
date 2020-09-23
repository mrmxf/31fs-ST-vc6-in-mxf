# Application Issues

## Application of the KAG

MXF encoders and decoders shall comply with the KAG rules defined in SMPTE ST 377-1.
The default value of the KAG is 1. Other KAG values may be used within the range defined by SMPTE ST 377-1.

## Index Tables and the Fill Item

VC-6 coding is frame-based and the KLV fill item can be used to maintain a constant edit unit size for all frames.

Where the application defines a constant edit unit size, an index table shall be used. This includes the cases
where the VC-6 essence element is the sole essence component and where it is interleaved with other
essence components.

Where the application has a variable edit unit size an index table should be used wherever possible.
SMPTE EG 377-3 illustrates the use of index tables for both mono and multi-essence mappings and for both
constant and variable length edit unit sizes.

## Operational Pattern Usage

This essence mapping may be used with any generalized operational pattern.

NOTE This does not preclude the use of specialized operational patterns.

## Mapping Track Numbers to Generic Container Elements

Each track number value for an essence element defined in this standard shall be derived as described in the
MXF Constrained Generic Container specification (SMPTE ST 379-2).

## Essence Container Partitions

Frame wrapping maintains each content package of the generic container as a separate editable unit with the
contents of the system, picture, sound and data items in synchronism. If a frame-wrapped essence container
is partitioned, then individual content packages should not be fragmented by the partitioning process.

NOTE SMPTE ST 377-1:2019, Section 6.2.2 (Partition Rules Summary) summarizes the use of partitions in MXF files.

## MXF Header Metadata Property Values

The following restrictions apply to Picture Stream wrapped with this standard

| Property                    | Progressive Pictures | Interlaced Pictures |
| ----------------------------|:---------------------|:--------------------|
| Bytestreams per KLV Element |            1         |           2         |
| Frame Layout (G.2.1)        |  0 (full_frame)      | 1 (separate_fields) or 4 (segmented_frame) |
| Sample Rate (G.2.2)         |         Frame        |        Frame        |
| Edit Rate (B.12)            |         Frame        |        Frame        |
| Index Edit Rate (11.2.3)    |         Frame        |        Frame        |
| Aspect Ratio (G.2.4)        |         Frame        |        Frame        |
