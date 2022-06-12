import readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
const T_BASE = (0,0);
let tick = 0;

function wait(ms) {
	return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

function useClear(rl) {
	readline.cursorTo(rl, T_BASE)
	readline.clearLine(rl, 0);
}

function useTick(
	rline,
	val
) {
	useClear(rline);
	rline.write(`${val}`);
	tick++;
}

export async function useSpinner(spinner_type, cb, iter_ct) {
	const ict = iter_ct || 1;
	const rline = readline.createInterface({ input, output });
	const { interval, frames } = spinner_type;
	for await(const _ of Array(ict)) {
		for await (const frame of frames) {
			await wait(interval*tick, useTick(rline, frame));
		}
	}
	rline.close();
	tick = 0;
	if(cb) {
		return cb();
	}
	return;
}

export * as spinners from 'cli-spinners';


