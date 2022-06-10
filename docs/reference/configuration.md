# Default Configuration

```json
{
	"path": {
		"custom_flavors": null,
		"out": ".",
		"parent_config": null,
		"allow_cwd_out": true
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
		"shell_prefix": null
	},
	"repository": {
		"init": false,
		"type": null,
		"template_url": null,
		"submodule_map": null
	}
}

```
The following is the shape of the default configuration that is run when there are no other options. Most of the values are null masked because most of the options are based on preference rather than necessity.

|Key|Value|
|---|-----|
|path.custom_flavors|optional directory containing resolvable flavors of your own creation|
|path.out|the default path to use to write files|
|path.root_config|the path to overwrite the default root config option|
|process.add_files_from|optional directory to add files from independent of the recipe being written|
|process.allow_cwd_write|whether or not to allow the process working directory to be written to|
|process.detatched|whether or not to run in a seperate shell or the same one as the caller|
|process.dry|whether or not to write any files or just print information about the command to standard out|
|process.log_level|the level by which to use for writing logs about the process|
|process.log_file|optional file to write the logs to|
|process.overwrite_existing_out| boolean to allow or disallow overwriting files already in the `path.out` directory.|
|process.shell_prefix|prefix to use for shell commands executed by this process. best used as `something &&` as the prefix if you need the prefix command to be successful or `something &` if you want it to run in the background and run the process asynchronously.

