export const load = async ({params}) => {

	const { dashboardKoppelcode } = params

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
	return { data: data, QRcodeSrc: generateQRcodeSrc(dashboardKoppelcode) };
};

function generateQRcodeSrc(koppelcode) {
	return `https://scorenu.app/qr/highres.php?link=https://werktijden-smartboard.vercel.app/widgets/${koppelcode}`;
}