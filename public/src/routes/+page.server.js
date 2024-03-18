export const load = async () => {
	const koppelcode = generateKoppelcode();
	return { koppelcode: koppelcode, QRcodeSrc: generateQRcodeSrc(koppelcode) };
};

function generateKoppelcode() {
	return Math.floor(100000000 + Math.random() * 900000000).toString();
}

function generateQRcodeSrc(koppelcode) {
	return `https://scorenu.app/qr/highres.php?link=https://werktijden-smartboard.vercel.app/settings/${koppelcode}`;
}
