import { Inquirer, PathConfigOptions } from '../internal';
import { LogLevel } from './log';
import { ChoiceCollection } from 'inquirer';
/**
 * Process Types
 */

// process-specific configuration parameters - all optional
export type ProcessCrumbs = {
	add_files_from?: string[]; // directories to copy files into the new project from
	allow_cwd_write?: boolean;
	always_use_prompt?: boolean; // boolean whether to override settings default template in config
	default_flavor?: string; // name of template to run against prompter
	detatched?: boolean; // run in caller process or spawn its own
	disable_color?: boolean; //disables colored output in terminal
	dry?: boolean; // run without doing anything, just print the would-be output
	log_level?: LogLevel;
	log_file?: string;
	overwrite_existing_out?: boolean;
	shell_prefix?: string; //prefix the process using this config with a shell wrapper command to run, followed by &&, followed by the process (ie cd ~/)
};

export type CrumbInlineType = {
	type: string | number;
	key: string;
	required: boolean;
};

// configuration as an object
export type CrumbOptions = {
	path?: PathConfigOptions; // path related config options
	process?: ProcessCrumbs; // runtime related config options
	repository?: RepositoryCrumbs; // options to configure auto repo setup/integrations
};
export type RepositoryCrumbs = {
	ctx_base_path?: string; // child path of the context its written to, to be written to
	init?: boolean; //init a repo and enable parsing of other attributes in the type
	submodule_map?: any; //todo - set up map of submodules to automatically set up in the initialized repo
	type?: string; //type eg git, gitlab, bitbucket
	template_url?: string; // url of template repo to use for creation
};

export type FlavorCrumbSchema = {
	tag_name: string;
	recipe_path: string;
	doughmap: ChoiceCollection;
};
