# Track files


## General

Track Files shall conform to SMPTE ST 379-2 and SMPTE ST 2067-2.

## Image Track File Essence

The Image Essence contained in Image Track Files shall conform to Section 4.

##  Image Track File Format and Mapping

An Image Track File shall conform to SMPTE ST 2771-10:

* The Edit Rate and Sample Rate are equal to the image frame rate as defined in
  SMPTE ST 379-2.
* Indexing is image frame-based, using Index Edit Rates defined by the Edit
Rates of the Essence Track, as defined in SMPTE ST 377-1. The Top-Level File
Package of Image Track File shall reference:
* A CDCI Picture Essence Descriptor as defined in SMPTE ST 377-1 if the Image
  Essence uses Y’C’BC’R color components.
* An RGBA Picture Essence Descriptor as defined in SMPTE ST 377-1 if the Image
  Essence uses R’G’B’ color components
* A VC6SubDescriptor as defined in SMPTE ST 2110-10 shall be present 
