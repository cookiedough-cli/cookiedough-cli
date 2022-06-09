import {
	CCompilers,
	CStandards,
	CCStandards
} from '../../types';

export const CMenuOptions = [
	{
		type: 'list',
		name: 'compiler',
		message: 'select a compiler',
		choices: CCompilers
	},
	{
		type: 'list',
		name: 'standard',
		message: 'select a standard',
		choices: CStandards
	}
];


export const CCMenuOptions = [
	{
		type: 'list',
		name: 'compiler',
		message: 'select a compiler',
		choices: CCompilers
	},
	{
		type: 'list',
		name: 'standard',
		message: 'select a standard',
		choices: CCStandards
	}
]
