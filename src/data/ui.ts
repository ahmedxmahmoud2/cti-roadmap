// Interface strings used by the interactive components.
const strings = {
	en: {
		selfTitle: 'Self-check',
		selfHint: 'Tick what you can already do without a tutorial.',
		selfDone: 'You passed this self-check. You can skip to:',
		topics: 'Topics',
		deliverables: 'Deliverables',
		exit: 'Exit criteria',
		wizardQ: 'Where are you coming from?',
		wizardStart: 'Start at',
		wizardGo: 'Go to',
		overviewTitle: 'Your progress',
		tracksHint: 'Pin one or two tracks to follow them here.',
		pin: 'Pin',
		unpin: 'Unpin',
		export: 'Export progress',
		import: 'Import progress',
		reset: 'Reset',
		resetConfirm: 'Clear all your progress on this device?',
		importOk: 'Progress imported.',
		importBad: 'That file is not a CTI Roadmap progress export.',
		saved: 'Progress is saved in this browser only. Export it to move it to another device.',
		filterAll: 'All',
		filterCost: 'Cost',
		filterType: 'Type',
		filterLang: 'Language',
		filterWhere: 'Level or track',
		free: 'Free',
		freemium: 'Free tier',
		paid: 'Paid',
		arabic: 'Arabic available',
		english: 'English',
		hours: 'h',
		noResults: 'No resources match these filters.',
		of: 'of',
	},
	ar: {
		selfTitle: 'Self-check',
		selfHint: 'علّم على اللي تقدر تعمله من غير tutorial.',
		selfDone: 'عدّيت الـ self-check. تقدر تنتقل إلى:',
		topics: 'المواضيع',
		deliverables: 'الـ Deliverables',
		exit: 'معايير الانتقال',
		wizardQ: 'إنت جاي منين؟',
		wizardStart: 'ابدأ من',
		wizardGo: 'روح إلى',
		overviewTitle: 'تقدّمك',
		tracksHint: 'ثبّت تخصص أو اتنين عشان تتابعهم هنا.',
		pin: 'تثبيت',
		unpin: 'إلغاء التثبيت',
		export: 'تصدير التقدم',
		import: 'استيراد التقدم',
		reset: 'مسح',
		resetConfirm: 'تمسح كل التقدم على الجهاز ده؟',
		importOk: 'تم استيراد التقدم.',
		importBad: 'الملف ده مش export من CTI Roadmap.',
		saved: 'التقدم محفوظ في المتصفح ده بس. اعمل export عشان تنقله لجهاز تاني.',
		filterAll: 'الكل',
		filterCost: 'التكلفة',
		filterType: 'النوع',
		filterLang: 'اللغة',
		filterWhere: 'المستوى أو التخصص',
		free: 'مجاني',
		freemium: 'فيه نسخة مجانية',
		paid: 'مدفوع',
		arabic: 'متاح بالعربي',
		english: 'إنجليزي',
		hours: 'س',
		noResults: 'مفيش مصادر مطابقة للفلاتر دي.',
		of: 'من',
	},
} as const;

export type Lang = keyof typeof strings;
export const ui = (lang: Lang) => strings[lang];

export const typeLabels: Record<string, { en: string; ar: string }> = {
	course: { en: 'Course', ar: 'كورس' },
	book: { en: 'Book', ar: 'كتاب' },
	paper: { en: 'Paper', ar: 'ورقة بحثية' },
	lab: { en: 'Lab', ar: 'Lab' },
	tool: { en: 'Tool', ar: 'أداة' },
	reading: { en: 'Reading', ar: 'قراءة' },
	video: { en: 'Video', ar: 'فيديو' },
	report: { en: 'Report', ar: 'تقرير' },
	standard: { en: 'Standard', ar: 'معيار' },
};

// Works out the page language from Starlight's route data.
export function pageLang(astro: { locals: any }): Lang {
	const l: string = astro.locals?.starlightRoute?.lang ?? 'en';
	return l.startsWith('ar') ? 'ar' : 'en';
}

export function localHref(lang: Lang, href: string) {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}/${lang === 'ar' ? 'ar/' : ''}${href}`;
}
