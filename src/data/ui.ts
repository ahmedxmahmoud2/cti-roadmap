// Interface strings used by the components.
const strings = {
	en: {
		wizardQ: 'Where are you coming from?',
		wizardStart: 'Start at step',
		wizardGo: 'Go to step',
		studyFrom: 'Study from',
		free: 'Free',
		freemium: 'Free tier',
		paid: 'Paid',
		arabic: 'Arabic subtitles or audio',
	},
	ar: {
		wizardQ: 'إنت جاي منين؟',
		wizardStart: 'ابدأ من الخطوة',
		wizardGo: 'روح للخطوة',
		studyFrom: 'ذاكر من',
		free: 'مجاني',
		freemium: 'فيه جزء مجاني',
		paid: 'مدفوع',
		arabic: 'فيه عربي',
	},
} as const;

export type Lang = keyof typeof strings;
export const ui = (lang: Lang) => strings[lang];

export function pageLang(astro: { locals: any }): Lang {
	const l: string = astro.locals?.starlightRoute?.lang ?? 'en';
	return l.startsWith('ar') ? 'ar' : 'en';
}

export function localHref(lang: Lang, href: string) {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}/${lang === 'ar' ? 'ar/' : ''}${href}`;
}
