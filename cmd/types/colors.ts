export type ANSIReset = '\x1b[0m';
export type ANSIBright = '\x1b[1m';
export type ANSIDim = '\x1b[2m';
export type ANSIUnderscore = '\x1b[4m';
export type ANSIBlink = '\x1b[5m';
export type ANSIReverse = '\x1b[7m';
export type ANSIHidden = '\x1b[8m';

export type ANSIFgBlack = '\x1b[30m';
export type ANSIFgRed = '\u001b[31m';
export type ANSIFgGreen = '\x1b[32m';
export type ANSIFgYellow = '\x1b[33m';
export type ANSIFgBlue = '\x1b[34m';
export type ANSIFgMagenta = '\x1b[35m';
export type ANSIFgCyan = '\x1b[36m';
export type ANSIFgWhite = '\x1b[37m';

export type ANSIBgBlack = '\x1b[40m';
export type ANSIBgRed = '\x1b[41m';
export type ANSIBgGreen = '\x1b[42m';
export type ANSIBgYellow = '\x1b[43m';
export type ANSIBgBlue = '\x1b[44m';
export type ANSIBgMagenta = '\x1b[45m';
export type ANSIBgCyan = '\x1b[46m';
export type ANSIBgWhite = '\x1b[47m';

export type ANSIEffect =
	| ANSIReset
	| ANSIBright
	| ANSIDim
	| ANSIUnderscore
	| ANSIBlink
	| ANSIReverse
	| ANSIHidden;

export type ANSIForegroundColor =
	| ANSIFgBlack
	| ANSIFgRed
	| ANSIFgGreen
	| ANSIFgYellow
	| ANSIFgBlue
	| ANSIFgMagenta
	| ANSIFgCyan
	| ANSIFgWhite;

export type ANSIBackgroundColor =
	| ANSIBgBlack
	| ANSIBgRed
	| ANSIBgGreen
	| ANSIBgYellow
	| ANSIBgBlue
	| ANSIBgMagenta
	| ANSIBgCyan
	| ANSIBgWhite;
