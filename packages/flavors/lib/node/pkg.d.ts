import { NodeModule, NodeModuleInstaller } from '@cookiedough/types';
export declare const NodePresetPackageMapper: (np: NodeFlavor) => {
    installer: NodeModuleInstaller;
    packages: NodeModule[];
};
