import { WERKTIJDEN_KEY } from '$env/static/private';

export const load = async () => {
	const data = await fetch('https://api.werktijden.nl/2/smartboard/tickets', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${WERKTIJDEN_KEY}`
		}
	})
		.then((res) => res.json())
		.then((res) => {
			return res;
		})
		.catch((err) => console.error(err));

	return { data };
};
