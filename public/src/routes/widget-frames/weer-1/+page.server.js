export const load = async () => {
	const res = await fetch(`https://weerlive.nl/api/weerlive_api_v2.php?key=6ddd27a02e&locatie=Amsterdam`);
	const data = await res.json();

	return data;
};
