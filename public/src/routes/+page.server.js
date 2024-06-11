export const load = async () => {

	const data = await fetch('https://feeds.nos.nl/nosnieuwsalgemeen')
		.then((response) => {
			return response.text();
		})
		.then((html) => {
			html = html.replace(/\s\s/g, '');

			const titles = [];
			const str = html;

			const parts = str.split(`<title><![CDATA[`);

			for (let i = 1; i < parts.length; i++) {
				const title = parts[i].split(`]]></title>`)[0];
				titles.push(title);
			}

			titles.shift();
			return titles;
		});
	const koppelcode = generateKoppelcode();
	return { data: data, koppelcode: koppelcode, QRcodeSrc: generateQRcodeSrc(koppelcode) };
};

function generateKoppelcode() {
	return Math.floor(10000000000 + Math.random() * 90000000000).toString();
}

function generateQRcodeSrc(koppelcode) {
	return `https://werktijden-smartboard.vercel.app/widgets/${koppelcode}`;
}
