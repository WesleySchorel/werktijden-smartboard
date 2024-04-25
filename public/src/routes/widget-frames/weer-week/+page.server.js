import { WEERLIVE } from '$env/static/private';

export const load = async () => {
	const res = await fetch(
		`https://weerlive.nl/api/weerlive_api_v2.php?key=demo&locatie=Amsterdam`
	);
	const data = await res.json();

	return data;
};
