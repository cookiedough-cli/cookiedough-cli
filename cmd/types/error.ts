export type ExceptionType = 'notice' | 'fatal' | 'warning';

export type CookieException = {
	type: ExceptionType;
	msg: string;
	data: object;
	fn_trigger ?: any;
	line_no: number;
}
