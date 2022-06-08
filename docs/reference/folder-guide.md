# Source Code Guide

- `cmd`
this is the core directory for process files to be run through `npx exec`, `npm init`, or most commonly, `npx`.

The `cmd/index.ts` file is the entry point to the command line interface.

- `packages`
this is the directory for the dependencies used by `cmd`. It contains preset information, prompter information, and other crumbs to respond to different user input.

- `scripts`
internal dev tools for local environment


- `__fixtures__`
testing/ci/cd/tmp stuff like this
