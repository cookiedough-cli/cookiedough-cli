# setting up locally

## requirements
- nodejs
having node means you have python installed, so I wont bother listing


## first steps

```
git clone git@github.com:abschill/cookiedough-cli
cd cookiedough-cli
```
after you clone the repository, be sure to allow the internals to execute on your filesystem. it should just work automatically on windows if you are using git bash/mingw or wsl.
```
chmod +x ./scripts/*
```

## utilities
`scripts/setup`
installs dependencies locally and builds initial version

`scripts/new`
removes local old version and compiles new one

`scripts/remove-old`
removes local old generated code

`scripts/relink-pkg`
this is for potentially fixing any issues with local module updates by running `npm link` in each module from the root

`scripts/refresh`
this script will refresh all local packages manually regarding their `lib` and `node_module` directories.

`scripts/update`
update git on the main branch (you probably wont need this, just use another branch on a fork and PR if you wanted to make changes to the main distribution.
