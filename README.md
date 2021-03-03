# 31fs-ST-vc6-in-mxf

Mapping VC-6 into MXF

# Installation

The installation process is rather user-aggressive while I try and figure out how
to force Pandoc to do my bidding. Pandoc has design issues that almost certainly
prevent it being the tool that SMPTE will use. I'm looking at alternatives that
the open source community will maintain for us.

The tools have been tested on AWS, Ubuntu, Mac and Windows 10 with WSL running Ubuntu.
They won't work in windows CMD or powershell. The goal is to migrate them to a service.

1. clone this repo somewhere
2. go into the new project folder `cd 31fs-ST-vc6-in-mxf`
3. follow the instructions at [github.com/mrmxf/md-publish](https://github.com/mrmxf/md-publish)
  * shallow clone the md-publish repo into the `xr/` subfolder
  * from your project folder type `xr/mdpub.sh --help` to check it works
  * from your project folder type `xr/mdpub.sh --update` to check that tool updates can be seen
4. ensure Node v10.x or higher is installed
  * from the project folder type `npm install` (or `yarn install` depending on your package manager preferences)
  * this will install the libraries that parse the XML submissions and the zip package builder
5. from your project folder type `xr/mdpub.sh` to build a new version of the document
6. Raise an issue if it all goes wrong
