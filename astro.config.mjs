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
				'An open, track-based Cyber Threat Intelligence roadmap: from zero to advanced CTI analyst, with self-checks, progress tracking and a regional (MENA) focus.',
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
				{
					label: 'Start',
					translations: { ar: 'ابدأ' },
					items: [
						{ label: 'Start here', translations: { ar: 'ابدأ من هنا' }, slug: 'start-here' },
						{ label: 'My progress', translations: { ar: 'تقدّمي' }, slug: 'progress' },
					],
				},
				{
					label: 'Levels',
					translations: { ar: 'المستويات' },
					items: [
						{ label: 'Level 0 · Foundations', slug: 'levels/level-0' },
						{ label: 'Level 1 · CTI core', slug: 'levels/level-1' },
						{ label: 'Level 2 · Core skills', slug: 'levels/level-2' },
					],
				},
				{
					label: 'Level 3 · Tracks',
					translations: { ar: 'Level 3 · التخصصات' },
					items: [
						{ label: 'Choose your tracks', translations: { ar: 'اختر تخصصك' }, slug: 'tracks' },
						{ label: 'Infrastructure hunting', slug: 'tracks/infrastructure-hunting' },
						{ label: 'Malware intelligence', slug: 'tracks/malware-intelligence' },
						{ label: 'Threat hunting and detection', slug: 'tracks/hunting-detection' },
						{ label: 'Dark web and digital risk', slug: 'tracks/dark-web-drp' },
						{ label: 'Strategic and geopolitical', slug: 'tracks/strategic-geopolitical' },
						{ label: 'CTI engineering', slug: 'tracks/cti-engineering' },
						{ label: 'Intel-led red teaming', slug: 'tracks/adversary-emulation' },
					],
				},
				{
					label: 'Reference',
					translations: { ar: 'مراجع' },
					items: [
						{ label: 'Portfolio', translations: { ar: 'الـ Portfolio' }, slug: 'portfolio' },
						{ label: 'Resource library', translations: { ar: 'مكتبة المصادر' }, slug: 'resources' },
						{ label: 'MENA threat landscape', translations: { ar: 'تهديدات المنطقة' }, slug: 'mena' },
						{ label: 'Ethics, OPSEC and law', translations: { ar: 'الأخلاقيات والقانون' }, slug: 'ethics' },
						{ label: 'Certifications (optional)', translations: { ar: 'الشهادات (اختياري)' }, slug: 'certifications' },
						{ label: 'Glossary', translations: { ar: 'المصطلحات' }, slug: 'glossary' },
						{ label: 'Contributing', translations: { ar: 'ساهم' }, slug: 'contributing' },
					],
				},
			],
		}),
	],
});
