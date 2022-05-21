#!/usr/bin/node
import inquirer from 'inquirer';
import followup from './internal/followup';
import { createValidWritePath } from './util';
import { join, resolve } from 'path';
import {
	TemplateName,
	templateInquiry
} from './constants';
const { warn } = console;

function bob() {
	let wPath: string;
	const pathRoot = process.argv[2] ?? process.cwd();
	const dizzyPath = resolve(pathRoot, 'dizzy.json');
	const dizzy = require(dizzyPath);
	if(!dizzy.outPath) {
		warn('no outpath set in dizzy, using cwd / inline');
		wPath = pathRoot;
	}
	wPath = createValidWritePath(join(pathRoot, dizzy.outPath ?? ''));
	// main inquiry process
	inquirer.prompt([templateInquiry]).then((options: { template: TemplateName }) => followup(options.template, wPath, inquirer));
}
bob();
