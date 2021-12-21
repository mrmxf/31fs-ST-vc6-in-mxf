# 31fs-ST-vc6-in-mxf

Mapping VC-6 (**SMPTE ST 2117-1**) into MXF as document **SMPTE ST 2117-10**

## recommended usage

1. sign up for a gitpod account by signing into `gitpod.io` with gihub
2. open this repo with gitpod by opening a browser with this url:
  `gitpod.io/#https://github.com/mrmxf/31fs-ST-vc6-in-mxf`
3. open up a terminal window (Ctrl+Shift+`)
4. Type `git submodule init`
4. Type `git submodule update`
5. Type `yarn`

Periodically, you may have to re-install pandoc

* `sudo dpkg -i ./zmp/tools/pandoc-amd64.deb`

You're good to go. Type `zmp/do --help` and don't forget to regularly commit
your work to the github repo if you want to keep it.

## Offline Installation

The tooling uses the Mr MXF [zmp] tools based on [Pandoc].

The tools have been tested on AWS, Ubuntu, Mac and Windows 10 with WSL2 running
Ubuntu. They **do not** work in Windows CMD or powershell. The goal is to
migrate them to an API service accessible from a the browser.

1. clone this repo somewhere
2. `cd` into the new project folder `cd 31fs-ST-vc6-in-mxf`
3. bring in the [zmp] tools:
```
  git submodule init
  git submodule update
```
4. ensure Node v12.x or higher is installed
  * from the project folder type `npm install` (or `yarn install` depending on
    your package manager preferences)
  * this will install the libraries that parse the XML submissions and the zip
    package builder
5. from your project folder type `zmp/do` to build a new version of the document
6. Raise an issue if it all goes wrong

[zmp]:https://github.com/mrmxf/md-publish "Zimple Markdown Publishing"
