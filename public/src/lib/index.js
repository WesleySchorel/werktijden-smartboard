// ATOMIC DESIGN
// ATOMS
export { default as Koppelcode } from '$lib/components/atoms/koppelcode.svelte';
export { default as QRcode } from '$lib/components/atoms/qr-code.svelte';
export { default as Button } from '$lib/components/atoms/button.svelte';
export { default as PipeHeading } from '$lib/components/atoms/pipe-heading.svelte';
export { default as SearchBar } from '$lib/components/atoms/searchbar.svelte';
export { default as FilterOption } from '$lib/components/atoms/filter-option.svelte';
export { default as Kebab } from '$lib/components/atoms/kebab.svelte';
export { default as ClearDashboardBtn } from '$lib/components/atoms/clear-dashboard-btn.svelte';
export { default as NavItem } from '$lib/components/atoms/nav-item.svelte';
export { default as TemplateList } from '$lib/components/atoms/template-list.svelte';

// MOLECULES
export { default as Widget } from '$lib/components/molecules/widget.svelte';
export { default as WidgetSetting } from '$lib/components/molecules/widget-setting.svelte';
export { default as FilterBlock } from '$lib/components/molecules/filter-block.svelte';
export { default as BottomNav } from '$lib/components/molecules/bottom-nav.svelte';
export { default as Template } from '$lib/components/molecules/template.svelte';
export { default as Call } from '$lib/components/molecules/call.svelte';
export { default as WeerUrenLijst } from '$lib/components/molecules/weer-uren-lijst.svelte';
export { default as WeerWeekLijst } from '$lib/components/molecules/weer-week-lijst.svelte';

// ORGANISMS
export { default as KoppelMobile } from '$lib/components/organisms/koppelmobile.svelte';
export { default as ErrorPagina } from '$lib/components/organisms/errorpagina.svelte';
export { default as MemoryCards } from '$lib/components/organisms/MemoryCards.svelte';

// PREVIEWS
// WIDGETS
import PreviewWeer1 from '$lib/assets/previews/widgets/weer-1.jpg';
import PreviewWeerUren from '$lib/assets/previews/widgets/weer-uren.jpg';
import PreviewWeerWeek from '$lib/assets/previews/widgets/weer-week.jpg';
import PreviewWeerAlles from '$lib/assets/previews/widgets/weer-alles.jpg';
import PreviewKanikeenkortebroekaan from '$lib/assets/previews/widgets/kanikeenkortebroekaan.jpg';
// import PreviewAnalogeklok1 from '$lib/assets/previews/widgets/analogeklok-1.jpg';
import Analogeklok from '$lib/assets/previews/widgets/analogeklok.jpg';
import Digitaleklok from '$lib/assets/previews/widgets/digitaleklok-1.jpg';
import IncomingCalls from '$lib/assets/previews/widgets/incomingcalls.jpg';
import PreviewProefperiodes from '$lib/assets/previews/widgets/proefperiodes.jpg';
import PreviewVerlengingen from '$lib/assets/previews/widgets/verlengingen.jpg';
import PreviewTickets from '$lib/assets/previews/widgets/tickets.jpg';
import Kalender1 from '$lib/assets/previews/widgets/kalender-1.jpg';
import Kalender2 from '$lib/assets/previews/widgets/kalender-2.jpg';
import Actualiteitbanner from '$lib/assets/previews/widgets/actualiteitbanner.jpg';

// TEMPLATES
import PreviewStandaard from '$lib/assets/previews/templates/standaard.jpg';
import PreviewEenvoudig from '$lib/assets/previews/templates/eenvoudig.jpg';

// PUSHER
import Pusher from 'pusher-js';

// channelAuthorization: {
// 	endpoint: `https://werktijden-smartboard-server.vercel.app/pusher/auth`
// 	// endpoint: `http://localhost:3000/pusher/auth`
// }
export const pusher = new Pusher('64fb6baf53ed716416d3', {
	cluster: 'eu',
	// authEndpoint: `https://werktijden-smartboard-server.vercel.app/pusher/auth`,
	authEndpoint: `https://werktijden-server.adaptable.app/pusher/auth`
	// auth: {
	// 	headers: {
	// 		'Access-Control-Allow-Origin': 'http://localhost:3000/pusher/auth'
	// 	}
	// }
});

// OTHER
// WIDGET SIZES
export const sizes = [
	{ reference: 's', name: 'Small', x: 210, y: 210 },
	{ reference: 'm', name: 'Medium', x: 420, y: 210 },
	{ reference: 'l', name: 'Large', x: 420, y: 420 },
	{ reference: 'xl', name: 'Extra large', x: 600, y: 420 },
];

// AVAILABLE WIDGETS
// path must be unique
// preview has IMPORT from PREVIEW WIDGETS
export const availableWidgets = [
	{ title: 'Weer gevoelstemperatuur', size: sizes[0], preview: PreviewWeer1, path: 'weer-1' },
	{ title: 'Weer met urenvoorspelling', size: sizes[1], preview: PreviewWeerUren, path: 'weer-uren' },
	// { title: 'Weer met weekvoorspelling', size: sizes[1], preview: PreviewWeerWeek, path: 'weer-week' },
	{ title: 'Weer met alles', size: sizes[2], preview: PreviewWeerAlles, path: 'weer-uren-week' },
	{ title: 'Kan ik een korte broek aan?', size: sizes[1], preview: PreviewKanikeenkortebroekaan, path: 'kanikeenkortebroekaan' },
	{ title: 'Incoming calls', size: sizes[3], preview: IncomingCalls, path: 'incomingcalls' },
	{ title: 'Proefperiodes', size: sizes[2], preview: PreviewProefperiodes, path: 'proefperiode' },
	{ title: 'Verlengingen', size: sizes[2], preview: PreviewVerlengingen, path: 'verlengingen' },
	{ title: 'Tickets', size: sizes[2], preview: PreviewTickets, path: 'tickets' },
	{ title: 'Ingeklokte medewerkers', size: sizes[2], preview: PreviewTickets, path: 'punches' },
	{ title: 'Analoge klok', size: sizes[0], preview: Analogeklok, path: 'analogeklok-2' },
	{ title: 'Digitale klok', size: sizes[0], preview: Digitaleklok, path: 'digitaleklok-1' },
	// { title: 'Kalender (datum)', preview: Kalender1, path: 'kalender-1' },
	{ title: 'Kalender (weekdag & datum)', size: sizes[0], preview: Kalender2, path: 'kalender-2' },
	{ title: 'De Dam Live', size: sizes[3], path: 'de-dam-live' },
	{ title: 'Wereldsteden Live', size: sizes[3], path: 'wereldsteden-live' },
	{ title: 'Gettysburg Vogelvoederhuisje Live', size: sizes[3], path: 'natuur-live' },
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
		widgets: ['weer-uren-week', 'de-dam-live', 'incomingcalls', 'analogeklok-2', 'kalender-2', 'kanikeenkortebroekaan', 'tickets', 'proefperiode', 'verlengingen', 'punches']
	},
	{
		title: 'Eenvoudig',
		preview: PreviewEenvoudig,
		widgets: ['weer-uren-week', 'de-dam-live', 'wereldsteden-live', 'analogeklok-2', 'kalender-2', 'kanikeenkortebroekaan']
	}
];
