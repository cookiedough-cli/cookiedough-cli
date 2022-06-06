# Source Code Guide

- `cmd`
this is the core directory for process files to be run through `npx exec`, `npm init`, or most commonly, `npx`.

The `cmd/index.ts` file is the entry point to the command line interface.


- `include`
this is the directory for the dependencies used by `cmd`. It contains preset information, prompter information, and other crumbs to respond to different user input.

- `tools`
this is the directory for utilities used during the cli. they are mostly miscelleaneous and didn't have a better place to be stored that wouldn't become cluttered.

- `types`
type information for entire packages

- `packages`
this directory contains resolution handlers for different crumb resolutions from the cli. For instance, if it determines you are making a node project, it will begin comparing your crumbs against the node templates in `packages`.
