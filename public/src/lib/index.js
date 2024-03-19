// place files you want to import through the `$lib` alias in this folder.
export { default as Koppelcode } from '$lib/components/atoms/koppelcode.svelte';
export { default as QRcode } from '$lib/components/atoms/qr-code.svelte';
export { default as UnderlinedWord } from '$lib/components/atoms/underlined-word.svelte';
export { default as Button } from '$lib/components/atoms/button.svelte';
export { default as StepBlock } from '$lib/components/atoms/step-block.svelte';
export { default as StepHeading } from '$lib/components/atoms/step-heading.svelte';
export { default as StepText } from '$lib/components/atoms/step-text.svelte';
export { default as Link } from '$lib/components/atoms/link.svelte';
export { default as BulletText } from '$lib/components/atoms/bullet-text.svelte';
export { default as BulletBlock } from '$lib/components/atoms/bullet-block.svelte';
export { default as BulletHeading } from '$lib/components/atoms/bullet-heading.svelte';
export { default as GreenLink } from '$lib/components/atoms/green-link.svelte';
export { default as PipeHeading } from '$lib/components/atoms/pipe-heading.svelte';
export { default as BulletCheck } from '$lib/components/atoms/bulletcheck.svelte';

export { default as Step } from '$lib/components/molecules/step.svelte';
export { default as Iphone } from '$lib/components/molecules/iphone.svelte';
export { default as Bullet } from '$lib/components/molecules/bullet.svelte';
export { default as DemoColumn } from '$lib/components/molecules/demo-column.svelte';
export { default as Bulletchecks } from '$lib/components/molecules/bulletchecks.svelte';
export { default as Widget } from '$lib/components/molecules/widget.svelte';
export { default as WidgetSetting } from '$lib/components/molecules/widget-setting.svelte';

export { default as KoppelMobile } from '$lib/components/organisms/koppelmobile.svelte';
export { default as ErrorPagina } from '$lib/components/organisms/errorpagina.svelte';
export { default as BulletInfo } from '$lib/components/organisms/bulletinfo.svelte';
export { default as Demo } from '$lib/components/organisms/demo.svelte';
export { default as CTA } from '$lib/components/organisms/cta.svelte';
export { default as Intro } from '$lib/components/organisms/intro.svelte';

export { default as Weer1 } from '$lib/components/widgets/weer-1.svelte';
export { default as Analogeklok1 } from '$lib/components/widgets/analogeklok-1.svelte';
export { default as Actualiteitbanner } from '$lib/components/widgets/actualiteitbanner.svelte';

import Pusher from 'pusher-js';

export const pusher = new Pusher('64fb6baf53ed716416d3', {
	cluster: 'eu',
	channelAuthorization: {
		endpoint: `https://werktijden-smartboard-server.vercel.app/pusher/auth`
	}
});

export const sizes = [
	{ reference: 's', name: 'Small', x: 300, y: 100 },
	{ reference: 'm', name: 'Medium', x: 400, y: 200 },
	{ reference: 'l', name: 'Large', x: 500, y: 300 },
	{ reference: 'banner', name: 'Full width', x: '100%', y: 70 }
];

export const availableWidgets = [
	{ title: 'Weer met voorspelling', size: 'm', path: 'weer-1' },
	{ title: 'Minimalistische analoge klok', size: 's', path: 'analogeklok-1' },
	{ title: 'Actualiteitbanner', size: 'banner', path: 'actualiteitbanner' }
];
