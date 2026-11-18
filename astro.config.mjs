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
						{ label: '0 · Technical foundations', translations: { ar: '0 · الأساسيات التقنية' }, slug: 'path/foundations' },
						{ label: '1 · CTI fundamentals and ATT&CK', translations: { ar: '1 · أساسيات الـ CTI والـ ATT&CK' }, slug: 'path/cti-fundamentals' },
						{ label: '2 · Reading and writing intelligence', translations: { ar: '2 · قراءة وكتابة الـ Intelligence' }, slug: 'path/intel-writing' },
						{ label: '3 · OSINT and infrastructure', translations: { ar: '3 · OSINT والـ Infrastructure' }, slug: 'path/osint-infrastructure' },
						{ label: '4 · Dark web and underground', translations: { ar: '4 · الـ Dark Web والـ Underground' }, slug: 'path/dark-web' },
						{ label: '5 · Actor profiling and tracking', translations: { ar: '5 · Actor Profiling وTracking' }, slug: 'path/actor-profiling' },
						{ label: '6 · Malware intelligence', translations: { ar: '6 · Malware Intelligence' }, slug: 'path/malware' },
						{ label: '7 · Hunting and detection', translations: { ar: '7 · Hunting وDetection' }, slug: 'path/hunting-detection' },
						{ label: '8 · Platforms and automation', translations: { ar: '8 · الـ Platforms والـ Automation' }, slug: 'path/platforms-automation' },
						{ label: '9 · Specialization', translations: { ar: '9 · التخصص' }, slug: 'path/specialization' },
						{ label: '10 · Portfolio and readiness', translations: { ar: '10 · الـ Portfolio وتقييم مستواك' }, slug: 'path/portfolio' },
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
