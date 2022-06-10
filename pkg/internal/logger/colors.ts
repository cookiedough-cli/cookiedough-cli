import { ANSIEffect } from '../../types';

export const Reset: ANSIEffect = '\x1b[0m';

export const Bright: ANSIEffect = '\x1b[1m';
export const Dim: ANSIEffect = '\x1b[2m';
export const Underscore: ANSIEffect = '\x1b[4m';
export const Blink: ANSIEffect = '\x1b[5m';
export const Reverse: ANSIEffect = '\x1b[7m';
export const Hidden: ANSIEffect = '\x1b[8m';

export const FgBlack = '\x1b[30m';
export const FgRed = '\u001b[31m';
export const FgGreen = '\x1b[32m';
export const FgYellow = '\x1b[33m';
export const FgBlue = '\x1b[34m';
export const FgMagenta = '\x1b[35m';
export const FgCyan = '\x1b[36m';
export const FgWhite = '\x1b[37m';

export const BgBlack = '\x1b[40m';
export const BgRed = '\x1b[41m';
export const BgGreen = '\x1b[42m';
export const BgYellow = '\x1b[43m';
export const BgBlue = '\x1b[44m';
export const BgMagenta = '\x1b[45m';
export const BgCyan = '\x1b[46m';
export const BgWhite = '\x1b[47m';
