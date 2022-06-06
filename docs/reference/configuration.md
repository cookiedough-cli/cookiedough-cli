# Configuration

## Process arguments

`-nc` | `--no-config`
Milkshake will by default search for a configuration file in the process's calling directory. This behavior can be disabled by passing the `--no-config` boolean option to the cli.

`-c` | `--config`
explicit format for setting config file path, by default if you set one anonymous argument it will be read in as the config path.

`-cf` | `--config-format`
tell the process to only look for config files of a given format

`-h` | `--help`
print manpage

`-a` | `--add-files`
tell the process to copy any generated project files additionally from the specified path(s). if you specify more than one path, separate them with a comma and wrap them in `()`

for example:

```
creamery -a (/usr/share/path0/,/scripts/*.sh)
```

you'll notice that it can accept glob patterns as well
