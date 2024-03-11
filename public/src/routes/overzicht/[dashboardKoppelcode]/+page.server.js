import { pusher } from '$lib/index.js';

export const actions = {
	update: async ({ request, params }) => {
		const { dashboardKoppelcode } = params;
		const formData = await request.formData();
		const widgetPath = formData.get('widgetPath');
		const widgetSize = formData.get('widgetSize');
		let enabled = formData.get('enabled') != null ? true : false;
		const presenceChannel = pusher.subscribe(`presence-${dashboardKoppelcode}`);

		await presenceChannel.trigger('client-change-setting', {
			path: widgetPath,
			size: widgetSize,
			enabled: enabled
		});
	}
};
