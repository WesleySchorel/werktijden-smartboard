import { pusher } from '$lib/index.js';
export async function load({ params }) {
	const channel = pusher.subscribe(`private-${params.dashboardKoppelcode}`);
	channel.trigger('client-join', { join: true });
}
