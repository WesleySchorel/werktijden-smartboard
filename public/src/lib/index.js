// place files you want to import through the `$lib` alias in this folder.
export { default as Koppelcode } from '$lib/assets/components/atoms/koppelcode.svelte';
export { default as QRcode } from '$lib/assets/components/atoms/qr-code.svelte';

export { default as Weer1 } from '$lib/assets/components/widgets/weer-1.svelte';
export { default as Analogeklok1 } from '$lib/assets/components/widgets/analogeklok-1.svelte';

import Pusher from 'pusher-js';

export const pusher = new Pusher('64fb6baf53ed716416d3', {
	cluster: 'eu',
	channelAuthorization: {
		// transport: 'jsonp',
		endpoint: `http://localhost:3000/pusher/auth`
	}
});

export const sizes = [
	{ reference: "s", x: 300, y: 100 },
	{ reference: "m", x: 400, y: 200 },
	{ reference: "l", x: 500, y: 300 },
	{ reference: "banner", x: "100%", y: 70 }
];
