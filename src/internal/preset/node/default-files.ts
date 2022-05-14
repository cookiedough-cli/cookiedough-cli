import { PreloadedFileData, ToWriteFileData } from '../../../types';
export const MinFileMap: PreloadedFileData[] = [
	{
		is_source: true,
		filename: 'index',
		extension: 'js',
		path: '<base>/'
	},
	{
		is_source: false,
		filename: 'package',
		extension: 'json',
		path: '<base>/'
	}
];

export const PackageJSONDefaults = {
	name: 'btb-node-template',
	version: '0.1.0',
	main: 'index.js',
	license: 'MIT'
};
