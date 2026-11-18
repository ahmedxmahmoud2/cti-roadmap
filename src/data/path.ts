// The steps of the path, in order. Used by the "Where are you coming from?" picker.
export const steps = [
	{ n: 0, slug: 'path/00-foundations/', en: 'Technical foundations', ar: 'الأساسيات التقنية' },
	{ n: 1, slug: 'path/01-cti-fundamentals/', en: 'CTI fundamentals and the intelligence lifecycle', ar: 'أساسيات الـ CTI والـ Intelligence Lifecycle' },
	{ n: 2, slug: 'path/02-osint-collection/', en: 'OSINT and intelligence collection', ar: 'OSINT وجمع المعلومات' },
	{ n: 3, slug: 'path/03-attack-adversary-analysis/', en: 'MITRE ATT&CK and adversary analysis', ar: 'MITRE ATT&CK وتحليل الخصم' },
	{ n: 4, slug: 'path/04-malware-intelligence/', en: 'Malware intelligence', ar: 'Malware Intelligence' },
	{ n: 5, slug: 'path/05-hunting-detection/', en: 'Threat hunting and detection engineering', ar: 'Threat Hunting وDetection Engineering' },
	{ n: 6, slug: 'path/06-actor-tracking-attribution/', en: 'Threat actor profiling, tracking and attribution', ar: 'Threat Actor Profiling وTracking وAttribution' },
	{ n: 7, slug: 'path/07-dark-web/', en: 'Dark web and the underground ecosystem', ar: 'الـ Dark Web والـ Underground' },
	{ n: 8, slug: 'path/08-cti-engineering/', en: 'CTI engineering and intelligence platforms', ar: 'CTI Engineering ومنصات الـ Intelligence' },
	{ n: 9, slug: 'path/09-specialization/', en: 'Advanced research and specialization', ar: 'البحث المتقدم والتخصص' },
	{ n: 10, slug: 'path/10-portfolio/', en: 'Portfolio and readiness', ar: 'الـ Portfolio وتقييم مستواك' },
];

export const backgrounds = [
	{
		id: 'zero',
		en: 'Starting from zero',
		ar: 'بادئ من الصفر',
		start: 0,
		noteEn: 'Start at step 0 and do not skip it. Plan for 3–6 months on the foundations if you study 8–10 hours a week.',
		noteAr: 'ابدأ من الخطوة 0 ومتتخطاهاش. خطط لـ 3–6 شهور على الأساسيات لو بتذاكر 8–10 ساعات في الأسبوع.',
	},
	{
		id: 'soc',
		en: 'SOC / incident response',
		ar: 'SOC / Incident Response',
		start: 1,
		noteEn: 'Read step 0 quickly and study the CTI-specific networking topics at the end of it, then start step 1.',
		noteAr: 'عدّي على الخطوة 0 بسرعة وذاكر الـ Networking الخاص بالـ CTI اللي في آخرها، وبعدين ابدأ الخطوة 1.',
	},
	{
		id: 'pentest',
		en: 'Pentest / red team',
		ar: 'Pentest / Red Team',
		start: 1,
		noteEn: 'You already know the attacker side. Start at step 1 to learn how intelligence work is planned, analysed and written.',
		noteAr: 'إنت فاهم جانب المهاجم. ابدأ من الخطوة 1 عشان تتعلم شغل الـ intelligence بيتخطط ويتحلل ويتكتب إزاي.',
	},
	{
		id: 'dev',
		en: 'Developer / data',
		ar: 'Developer / Data',
		start: 0,
		noteEn: 'Start at step 0 but skip the programming part. Your automation skills will pay off in step 8.',
		noteAr: 'ابدأ من الخطوة 0 بس فوّت جزء البرمجة. مهارات الـ automation عندك هتفرق معاك في الخطوة 8.',
	},
	{
		id: 'nontech',
		en: 'Non-technical (politics, journalism, analysis)',
		ar: 'خلفية غير تقنية (سياسة، صحافة، تحليل)',
		start: 0,
		noteEn: 'Start at step 0 for the technical base. Your analysis and writing skills will put you ahead from step 1 onward.',
		noteAr: 'ابدأ من الخطوة 0 عشان الأساس التقني. مهارات التحليل والكتابة عندك هتسبّقك من الخطوة 1 وانت ماشي.',
	},
];
