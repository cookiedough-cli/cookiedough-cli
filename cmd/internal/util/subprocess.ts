/**
 * @module subprocess
 */
import { execSync } from 'child_process';

export function _call(cmd: string): void {
	execSync(cmd);
}

export function _callFrom(from: string, cmd: string): void {
	execSync(`cd ${from} && ${cmd}`);
}
