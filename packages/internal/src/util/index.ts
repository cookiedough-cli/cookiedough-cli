export function hasUrlPattern(
	input: string
) {
	const match = input.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi);
	if(!match) return null;
	if(match.length === 0) return null;
	return match;
}
