# Default Configuration

```json
{
	"path": {
		"custom_flavors": null,
		"out": ".",
		"root_config": null
	},
	"process": {
		"add_files_from": null,
		"always_use_prompt": true,
		"default_template": null,
		"detatched": false,
		"dry": false,
		"log_level": "minimal",
		"log_file": null,
		"overwrite_existing_out": false,
		"allow_cwd_write": true
	},
	"repository": {
		"init": false,
		"type": null,
		"template_url": null,
		"submodule_map": null,
		"can_inherit_config": false,
	}
}

```
The following is the shape of the default configuration that is run when there are no other options. Most of the values are null masked because most of the options are based on preference rather than necessity.

|Key|Value|
|---|-----|
|path:custom_flavors	|directory containing resolvable flavors of your own creation|
|path:out|the default path to use to write files|
|path:root_config|the path to overwrite the default root config option|
|process:allow_cwd_write|whether or not to allow the process working directory to be written to|


## System Configuration

By default, you can store a config file in the HOMEDIR of your machine, and cookiedough will automatically be able to find that during runtime and read it into the context. This config file can be ignored with

[Local Configuration](commands.md)
