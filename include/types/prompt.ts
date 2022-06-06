export type InquirerPrompt = {
	type   	: string;
	name   	: string;
	message	: string;
	choices	: string[];
}

export type CrumbPrompt = Promise<void>;
