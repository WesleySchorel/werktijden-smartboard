import { pusher } from '$lib/index.js';

let presenceChannel = '';
export const load = async ({ params }) => {
	const { dashboardKoppelcode } = params;
	// console.log(dashboardKoppelcode);
	presenceChannel = pusher.subscribe(`presence-${dashboardKoppelcode}`);
};

export const actions = {
	update: async ({ request }) => {
		const formData = await request.formData();
		const widgetPath = formData.get('widgetPath');
		const widgetSize = formData.get('widgetSize');
		let enabled = formData.get('enabled') != null ? true : false;

		console.log("trigger")
		presenceChannel.trigger('client-change-setting', {
			path: widgetPath,
			size: widgetSize,
			enabled: enabled
		});
	}
};
