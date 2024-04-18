// ATOMIC DESIGN
// ATOMS
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
export { default as SearchBar } from '$lib/components/atoms/searchbar.svelte';
export { default as FilterOption } from '$lib/components/atoms/filter-option.svelte';
export { default as Kebab } from '$lib/components/atoms/kebab.svelte';
export { default as NavItem } from '$lib/components/atoms/nav-item.svelte';
export { default as TemplateList } from '$lib/components/atoms/template-list.svelte';

// MOLECULES
export { default as Step } from '$lib/components/molecules/step.svelte';
export { default as Iphone } from '$lib/components/molecules/iphone.svelte';
export { default as Bullet } from '$lib/components/molecules/bullet.svelte';
export { default as DemoColumn } from '$lib/components/molecules/demo-column.svelte';
export { default as Bulletchecks } from '$lib/components/molecules/bulletchecks.svelte';
export { default as Widget } from '$lib/components/molecules/widget.svelte';
export { default as WidgetSetting } from '$lib/components/molecules/widget-setting.svelte';
export { default as FilterBlock } from '$lib/components/molecules/filter-block.svelte';
export { default as BottomNav } from '$lib/components/molecules/bottom-nav.svelte';
export { default as Template } from '$lib/components/molecules/template.svelte';

// ORGANISMS
export { default as KoppelMobile } from '$lib/components/organisms/koppelmobile.svelte';
export { default as ErrorPagina } from '$lib/components/organisms/errorpagina.svelte';
export { default as BulletInfo } from '$lib/components/organisms/bulletinfo.svelte';
export { default as Demo } from '$lib/components/organisms/demo.svelte';
export { default as CTA } from '$lib/components/organisms/cta.svelte';
export { default as Intro } from '$lib/components/organisms/intro.svelte';
export { default as MemoryCards } from '$lib/components/organisms/MemoryCards.svelte';

// PREVIEWS
// WIDGETS
import PreviewWeer1 from '$lib/assets/previews/widgets/weer-1.jpg';
import PreviewAnalogeklok1 from '$lib/assets/previews/widgets/analogeklok-1.jpg';
import Kalender1 from '$lib/assets/previews/widgets/kalender-1.jpg';
import Kalender2 from '$lib/assets/previews/widgets/kalender-2.jpg';
import Actualiteitbanner from '$lib/assets/previews/widgets/actualiteitbanner.jpg';

// TEMPLATES
import PreviewStandaard from '$lib/assets/previews/templates/standaard.jpg';
import PreviewZomer from '$lib/assets/previews/templates/zomer.jpg';
import PreviewKerst from '$lib/assets/previews/templates/kerst.jpg';

// PUSHER
import Pusher from 'pusher-js';

// channelAuthorization: {
// 	endpoint: `https://werktijden-smartboard-server.vercel.app/pusher/auth`
// 	// endpoint: `http://localhost:3000/pusher/auth`
// }
export const pusher = new Pusher('64fb6baf53ed716416d3', {
	cluster: 'eu',
	// authEndpoint: `https://werktijden-smartboard-server.vercel.app/pusher/auth`,
	authEndpoint: `https://werktijden-smartboard-server.vercel.app/pusher/auth`
	// auth: {
	// 	headers: {
	// 		'Access-Control-Allow-Origin': 'http://localhost:3000/pusher/auth'
	// 	}
	// }
});

// OTHER
// WIDGET SIZES
export const sizes = [
	{ reference: 's', name: 'Small', x: 300, y: 100 },
	{ reference: 'm', name: 'Medium', x: 400, y: 200 },
	{ reference: 'l', name: 'Large', x: 500, y: 300 },
	{ reference: 'banner', name: 'Full width', x: '100%', y: 70 }
];

// AVAILABLE WIDGETS
// path must be unique
// preview has IMPORT from PREVIEW WIDGETS
export const availableWidgets = [
	{ title: 'Weer gevoelstemperatuur', x: 4, y: 4, preview: PreviewWeer1, path: 'weer-1' },
	{
		title: 'Analoge klok (met cijfers)',
		x: 4,
		y: 4,
		preview: PreviewAnalogeklok1,
		path: 'analogeklok-1'
	},
	{ title: 'Analoge klok (zonder cijfers)', x: 4, y: 4, path: 'analogeklok-2' },
	{ title: 'Kalender (datum)', x: 4, y: 4, preview: Kalender1, path: 'kalender-1' },
	{ title: 'Kalender (weekdag & datum)', x: 4, y: 4, preview: Kalender2, path: 'kalender-2' },
	{
		title: 'Actualiteitbanner',
		x: 'full',
		y: 1,
		preview: Actualiteitbanner,
		path: 'actualiteitbanner'
	}
	// { title: 'De digitale klok', x: 6, y: 4, path: 'digitaleklok-1' },
	// { title: 'De digitale klok met seconden', x: 10, y: 4, path: 'digitaleklok-seconden' },
];

// AVAILABLE TEMPLATES
// title must be unique
// preview has IMPORT from PREVIEW TEMPLATES
export const availableTemplates = [
	{
		title: 'Standaard',
		preview: PreviewStandaard,
		widgets: ['kalender-1', 'analogeklok-1', 'weer-1', 'actualiteitbanner']
	},
	{ title: 'Zomer', preview: PreviewZomer, widgets: ['weer-1', 'kalender-1'] },
	{ title: 'Kerst', preview: PreviewKerst, widgets: ['actualiteitbanner', 'kalender-1'] }
];
