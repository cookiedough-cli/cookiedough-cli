# Command Option Documentation

## top-level format

```
cookiedough <cmd>
```

## cmd-level format

```
<cmd> <path?> [...args?]
```

### Valid Argument Signatures

| Short | Long | Description|
|-------|------|------|
|-nc|--no-config| ignore config files on system and just use inline args as possible overrides to default|
|-w|--write-path	| path to use as a base for any generated files by the process |
|-c|--config-path	| path to use to locate appropriate configuration for the recipe |
|-cf|--config-format | used to only use a given type of config (format) options: ini, yaml, json|
|-a|--add-files-from | copy files from given path to a generated project
|-h|--help|			print manpage to standard out|

### Valid Command Signatures

- **`create`**
default process command, used to generate a new project based on various configuration methods. First, it will look in the home directory for a config file, and if it cannot find one, it will look in the process caller directory. If neither of these conditions are satisfied and the user does not pass a path inline, then it uses the default settings with a printed warning.

- `edit`
opens the globalmost config file it can find in the preferred editor
- `set`
sets a value to a key at the globalmost config file it can find
- `doctor`
put together config recipe from context and detect any issues. If none are found, look for the local installation and try to debug that.
- `locate`
locate the closest recipe and print
- `create-local-flavor`
interactive cli for bootstrapping a valid flavor template setup
