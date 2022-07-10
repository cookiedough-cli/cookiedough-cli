import axios from 'axios';

export function hasUrlPattern(input: string) {
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
export async function retrieveExternal<T>(url: string): Promise<T> {
	const res = await axios.get(url);
	return <T>res.data;
}

export * from './sys';
export * from './subprocess';
