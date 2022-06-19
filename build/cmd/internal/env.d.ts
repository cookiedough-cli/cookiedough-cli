import { ListQuestion } from 'inquirer';
export declare const __COOKIE_ENV__ = ".env";
export declare const CRUMB_DEFAULT_FILE = ".defaults.json";
export declare type CLIPrompt = {
    choices: string[];
    type: string;
    name: string;
    message: string;
};
export declare type CrumbPromptNoOp = Promise<void>;
export declare type CrumbInlineType = {
    type: string | number;
    key: string;
    required: boolean;
};
export declare type CrumbOptions = {
    path?: PathConfigOptions;
    process?: ProcessCrumbs;
    repository?: RepositoryCrumbs;
};
export declare type CookieCMD = {
    alias?: string[];
    signature: CookieCMDSignature;
    follow_up_with?: CrumbInlineType[];
};
export declare type CookieCMDSignature = 'create' | 'doctor' | 'edit' | 'add' | 'locate' | 'set' | 'setup' | 'help' | 'create-flavor';
export declare type CookieProcessRecipe = {
    cmd: CookieCMD;
    crumbs: CrumbOptions;
    _raw_args: string[];
    _raw_cmd: CookieCMD[];
};
export declare type LogLevel = 'verbose' | 'silent' | 'minimal';
export declare type LogType = 'success' | 'info' | 'warning' | 'error';
export declare type LogFilePath = string;
export declare type ProcessCrumbs = {
    add_files_from?: string[];
    allow_cwd_write?: boolean;
    always_use_prompt?: boolean;
    default_flavor?: string;
    detatched?: boolean;
    dry?: boolean;
    log_level?: LogLevel;
    log_file?: string;
    overwrite_existing_out?: boolean;
    shell_prefix?: string;
};
export declare type PathConfigOptions = {
    custom_flavors?: string;
    out?: string;
    root_config?: string;
};
export declare type RepositoryCrumbs = {
    ctx_base_path?: string;
    init?: boolean;
    submodule_map?: any;
    type?: string;
    template_url?: string;
};
export declare type ValidLogData = any;
export declare const Flavors: string[];
export declare const FlavorInquiry: ListQuestion;
/**
 * Full List of Commands to interpret at runtime
 */
export declare const CMDList: CookieCMD[];
