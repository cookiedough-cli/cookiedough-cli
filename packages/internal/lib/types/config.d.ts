export declare type CookieFlavor = 'node' | 'deno' | 'go' | 'c' | 'c++' | 'rust' | 'python';
export declare type PathConfigOptions = {
    custom_flavors?: string;
    out?: string;
    process_root?: string;
    parent_config?: string;
};
export declare type ProcessConfigOptions = {
    add_files_from?: string[];
    always_use_prompt?: boolean;
    default_template?: CookieFlavor;
    detatched?: boolean;
    dry?: boolean;
    log_level?: 'verbose' | 'silent' | 'minimal';
    log_file?: string;
    overwrite_existing_out?: boolean;
};
export declare type RepositoryConfigOptions = {
    init?: boolean;
    type?: string;
    template_url?: string;
    submodule_map?: any;
};
export declare type CrumbOptions = {
    path?: PathConfigOptions;
    process?: ProcessConfigOptions;
    repository?: RepositoryConfigOptions;
};
export declare type CrumbFilePrefix = 'crumb' | 'crumbs' | 'cookieconfig' | 'cookieconf' | 'cookie-config' | 'crumbconf' | 'crumb-config' | 'crumbconfig';
export declare type CrumbFileSuffix = '.json' | //js
'.yml' | //yaml
'.yaml' | //yaml
'.js' | //js
'.ts' | //ts
'.cjs' | //js
'.mjs' | //js
'.crumb' | //ini
'.build' | //ini
'.cookie' | //ini
'.make' | //ini
'.conf' | //ini parse
'.ini' | //ini parse
'';
export declare type CrumbFileName = `${CrumbFilePrefix}${CrumbFileSuffix}`;
export declare const CrumbFileNames: CrumbFileName[];
