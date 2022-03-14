# Composition

## General

Composition shall conform to SMPTE ST 2067-2.

## Application Identification

The `ApplicationIdentification` element (see SMPTE ST 2067-2) shall include the value listed in Table 11.
Table 2 — Application Identification
http://www.smpte-ra.org/ns/2067-60/2020

## Homogeneous Essence

### Image

Within a given a composition, the following shall remain constant:

* All Image Essence characteristics specified in Section 5.1.
* The codestream profile specified in Section 5.2.

## Segment Duration

If the average number of audio samples per Composition Edit Unit is not an integer, the duration of each Segment shall be an integer multiple of 5/Composition Edit Rate

## Color

TBC Do we want to constrain Color representation e.g. DoVi, P3 etc
