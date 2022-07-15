import axios from 'axios';

export function hasUrlPattern(input: string): RegExpMatchArray | null {
	const match = input.match(
		/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi
	);
	if (!match) return null;
	if (match.length === 0) return null;
	return match;
}

/**
 * TODO: setup error handlers & winston
 * @param url url to get
 * @returns typed promise from raw url
 */
export async function retrieveExtern<T>(url: string): Promise<T> {
	const res = await axios.get(url);
	if (res.status === 200) return <T>res.data;
	throw res.data;
}

export * from './sys';
export * from './subprocess';
