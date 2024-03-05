import { pusher } from '$lib/index.js';

let koppelcodes = [];

export const load = async () => {
	return { koppelcodes };
};

export const actions = {
	koppel: async ({ request }) => {
		const formData = await request.formData();
		const koppelcode = formData.get('koppelcode').replace(/\s/g, '');

		const channel = pusher.subscribe(`private-${koppelcode}`);
		channel.trigger('client-join', { join: true });

		koppelcodes.push(koppelcode);
		return {
			koppelcode,
			koppel: true
		};
	},

	ontkoppel: async ({ request }) => {
		const formData = await request.formData();
		const koppelcode = formData.get('koppelcode');
		const index = koppelcodes.indexOf(koppelcode);
		koppelcodes.splice(index, 1);
		return {
			koppelcode,
			ontkoppel: true
		};
	}
};
