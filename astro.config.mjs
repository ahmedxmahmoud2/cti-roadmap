// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://ahmedxmahmoud2.github.io',
	base: '/cti-roadmap',
	integrations: [
		starlight({
			title: 'CTI Roadmap',
			description:
				'A step-by-step Cyber Threat Intelligence path, from zero to advanced CTI analyst, with the course to study for every step.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				ar: { label: 'العربية', lang: 'ar', dir: 'rtl' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/ahmedxmahmoud2/cti-roadmap' },
			],
			editLink: {
				baseUrl: 'https://github.com/ahmedxmahmoud2/cti-roadmap/edit/main/',
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Start here', translations: { ar: 'ابدأ من هنا' }, slug: 'index' },
				{
					label: 'The path',
					translations: { ar: 'المسار' },
					items: [
						{ label: '0 · Technical foundations', slug: 'path/00-foundations' },
						{ label: '1 · CTI fundamentals', slug: 'path/01-cti-fundamentals' },
						{ label: '2 · OSINT and collection', slug: 'path/02-osint-collection' },
						{ label: '3 · ATT&CK and adversary analysis', slug: 'path/03-attack-adversary-analysis' },
						{ label: '4 · Malware intelligence', slug: 'path/04-malware-intelligence' },
						{ label: '5 · Hunting and detection', slug: 'path/05-hunting-detection' },
						{ label: '6 · Actor profiling and attribution', slug: 'path/06-actor-tracking-attribution' },
						{ label: '7 · Dark web and underground', slug: 'path/07-dark-web' },
						{ label: '8 · CTI engineering', slug: 'path/08-cti-engineering' },
						{ label: '9 · Specialization', slug: 'path/09-specialization' },
						{ label: '10 · Portfolio and readiness', slug: 'path/10-portfolio' },
					],
				},
				{
					label: 'Reference',
					translations: { ar: 'مراجع' },
					items: [
						{ label: 'Ethics, OPSEC and law', translations: { ar: 'الأخلاقيات والقانون' }, slug: 'ethics' },
						{ label: 'MENA threat landscape', translations: { ar: 'تهديدات المنطقة' }, slug: 'mena' },
						{ label: 'Certifications (optional)', translations: { ar: 'الشهادات (اختياري)' }, slug: 'certifications' },
						{ label: 'Glossary', translations: { ar: 'المصطلحات' }, slug: 'glossary' },
						{ label: 'Contributing', translations: { ar: 'ساهم' }, slug: 'contributing' },
					],
				},
			],
		}),
	],
});
