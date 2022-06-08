export type CLIPrompt = {
	choices	: string[];
	type   	: string;
	name   	: string;
	message	: string;
}

export type CrumbPromptNoOp = Promise<void>;
