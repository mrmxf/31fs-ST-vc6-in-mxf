# Composition

## General

Composition shall conform to SMPTE ST 2067-2.

## Application Identification

The `ApplicationIdentification` element (see SMPTE ST 2067-2) shall include the
value listed in Table 11.

:::{custom-style="smpte-caption" }
Table 2 — Application Identification
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

| Application Identifier                    |
|-------------------------------------------|
| http://www.smpte-ra.org/ns/2067-xxx/202x  |

## Homogeneous Essence

### Image

Within a given a composition, the following shall remain constant:

* The height and width of the image
* The color profile of the image
* The number of echelons used to encode the image

## Segment Duration

If the average number of audio samples per Composition Edit Unit is not an
integer, the duration of each Segment shall be an integer multiple of
5/Composition Edit Rate

## Color

[TBC Do we want to constrain Color representation e.g. DoVi, P3 etc or be silent?]{custom-style="smpte-ch-review-highlight"}
