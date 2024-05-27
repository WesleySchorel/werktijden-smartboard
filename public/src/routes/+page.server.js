export const load = async () => {
	const koppelcode = generateKoppelcode();
	return { koppelcode: koppelcode, QRcodeSrc: generateQRcodeSrc(koppelcode) };
};

function generateKoppelcode() {
	return Math.floor(10000000000 + Math.random() * 90000000000).toString();
}

function generateQRcodeSrc(koppelcode) {
	return `https://werktijden-smartboard.vercel.app/widgets/${koppelcode}`;
}
