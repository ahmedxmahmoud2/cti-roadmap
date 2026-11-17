// The resource library. Every resource is written once and shows in both languages.
// cost: free | freemium | paid   ·   lang: languages the resource itself is available in
// where: the group ids (see roadmap.ts) the resource belongs to

export type Resource = {
	id: string;
	title: string;
	url: string;
	by?: string;
	type: 'course' | 'book' | 'paper' | 'lab' | 'tool' | 'reading' | 'video' | 'report' | 'standard';
	cost: 'free' | 'freemium' | 'paid';
	lang: ('en' | 'ar')[];
	where: string[];
	hours?: number;
	note: string;
	noteAr?: string;
};

export const resources: Resource[] = [
	// ── Level 0 ──
	{ id: 'mahara', title: 'Mahara-Tech cybersecurity courses', url: 'https://maharatech.gov.eg/course/index.php?categoryid=11', by: 'ITI Egypt', type: 'course', cost: 'free', lang: ['ar', 'en'], where: ['l0'], note: 'Free Arabic-friendly foundations, incident handling, malware analysis fundamentals and forensics.' },
	{ id: 'technawi-soc', title: 'SOC Analyst diploma (Arabic playlist)', url: 'https://www.youtube.com/playlist?list=PLroS9tRyoUGqPHKWE1VqNw1957AAgOVzR', by: 'تكناوي دوت نيت', type: 'video', cost: 'free', lang: ['ar'], where: ['l0'], note: '14 free Arabic videos covering SOC fundamentals.' },
	{ id: 'thm-presec', title: 'TryHackMe Pre Security and SOC Level 1 paths', url: 'https://tryhackme.com/', by: 'TryHackMe', type: 'lab', cost: 'freemium', lang: ['en'], where: ['l0'], note: 'Hands-on networking, Linux, Windows and SOC basics. Most CTI rooms need Premium.' },
	{ id: 'mta', title: 'Malware-Traffic-Analysis.net exercises', url: 'https://www.malware-traffic-analysis.net/training-exercises.html', by: 'Brad Duncan', type: 'lab', cost: 'free', lang: ['en'], where: ['l0', 'l2', 'hunt'], note: 'Real infection PCAPs with answers. The best free way to learn traffic analysis.' },

	// ── Level 1 ──
	{ id: 'nickels1', title: 'A Cyber Threat Intelligence Self-Study Plan: Part 1', url: 'https://medium.com/katies-five-cents/a-cyber-threat-intelligence-self-study-plan-part-1-968b5a8daf9a', by: 'Katie Nickels', type: 'reading', cost: 'free', lang: ['en'], where: ['l1'], note: 'Fundamentals, definitions and models, each with exercises. The community’s go-to reading plan.' },
	{ id: 'mitre-cti', title: 'Using ATT&CK for CTI Training', url: 'https://attack.mitre.org/resources/learn-more-about-attack/training/cti/', by: 'MITRE', type: 'course', cost: 'free', lang: ['en'], where: ['l1'], hours: 4, note: 'Five modules with videos and exercises: mapping reports and raw data to ATT&CK, comparing groups in Navigator.' },
	{ id: 'first-curriculum', title: 'FIRST CTI SIG Curriculum', url: 'https://www.first.org/global/sigs/cti/curriculum/', by: 'FIRST', type: 'course', cost: 'free', lang: ['en'], where: ['l1', 'l2'], note: 'PIRs, source evaluation, analysis techniques, threat modelling, standards and a glossary.' },
	{ id: 'first-source', title: 'Source evaluation and information reliability', url: 'https://www.first.org/global/sigs/cti/curriculum/source-evaluation', by: 'FIRST', type: 'reading', cost: 'free', lang: ['en'], where: ['l1', 'l2'], note: 'The Admiralty system explained with worked CTI examples.' },
	{ id: 'first-uncertainty', title: 'Communicating uncertainties in CTI reporting', url: 'https://www.first.org/global/sigs/cti/curriculum/cti-reporting', by: 'FIRST', type: 'standard', cost: 'free', lang: ['en'], where: ['l1'], note: 'A standard way to express likelihood and confidence in reports.' },
	{ id: 'heuer', title: 'Psychology of Intelligence Analysis', url: 'https://www.cia.gov/resources/csi/static/Pyschology-of-Intelligence-Analysis.pdf', by: 'Richards J. Heuer Jr.', type: 'book', cost: 'free', lang: ['en'], where: ['l1', 'strat'], note: 'The classic on cognitive bias and ACH. Free PDF from the CIA.' },
	{ id: 'diamond', title: 'The Diamond Model of Intrusion Analysis', url: 'https://apps.dtic.mil/sti/pdfs/ADA586960.pdf', by: 'Caltagirone, Pendergast, Betz', type: 'paper', cost: 'free', lang: ['en'], where: ['l1'], note: 'The original paper. Read sections 1–5 first.' },
	{ id: 'killchain', title: 'Intelligence-Driven Computer Network Defense (Kill Chain paper)', url: 'https://www.lockheedmartin.com/content/dam/lockheed-martin/rms/documents/cyber/LM-White-Paper-Intel-Driven-Defense.pdf', by: 'Hutchins, Cloppert, Amin', type: 'paper', cost: 'free', lang: ['en'], where: ['l1'], note: 'Where the Cyber Kill Chain comes from.' },
	{ id: 'tlp', title: 'Traffic Light Protocol (TLP) 2.0', url: 'https://www.first.org/tlp/', by: 'FIRST', type: 'standard', cost: 'free', lang: ['en'], where: ['l1'], note: 'The sharing standard every CTI product uses.' },
	{ id: 'arcx101', title: 'Cyber Threat Intelligence 101', url: 'https://arcx.io/courses/cyber-threat-intelligence-101', by: 'arcX', type: 'course', cost: 'free', lang: ['en', 'ar'], where: ['l1'], hours: 4, note: 'Free intro course with practice questions. Arabic subtitles available.' },
	{ id: 'ctiacademy', title: 'Cyber Threat Intelligence learning path', url: 'https://ctiacademy.io/learning-paths/cyber-threat-intelligence', by: 'CTI Academy', type: 'course', cost: 'free', lang: ['en'], where: ['l1'], hours: 16, note: '16 modules and missions with a free certificate.' },
	{ id: 'attack', title: 'MITRE ATT&CK', url: 'https://attack.mitre.org/', by: 'MITRE', type: 'standard', cost: 'free', lang: ['en'], where: ['l1', 'l2', 'hunt', 'redteam'], note: 'The knowledge base itself: groups, software, campaigns, techniques.' },
	{ id: 'navigator', title: 'ATT&CK Navigator', url: 'https://mitre-attack.github.io/attack-navigator/', by: 'MITRE', type: 'tool', cost: 'free', lang: ['en'], where: ['l1', 'hunt'], note: 'Build and compare technique layers.' },
	{ id: 'sans-cti-survey', title: 'SANS Cyber Threat Intelligence Survey', url: 'https://www.sans.org/research/cyber-threat-intelligence-report', by: 'SANS', type: 'report', cost: 'free', lang: ['en'], where: ['l1'], note: 'What CTI teams and CISOs actually do and value. Good for the requirements and metrics module.' },
	{ id: 'cti-cmm', title: 'CTI Capability Maturity Model (CTI-CMM)', url: 'https://cti-cmm.org/', by: 'CTI-CMM community', type: 'standard', cost: 'free', lang: ['en'], where: ['l1', 'eng'], note: 'Who CTI serves (11 domains) and how to measure it. Includes a metrics appendix.' },

	// ── Level 2 ──
	{ id: 'nickels2', title: 'A Cyber Threat Intelligence Self-Study Plan: Part 2', url: 'https://medium.com/katies-five-cents/a-cyber-threat-intelligence-self-study-plan-part-2-d04b7a529d36', by: 'Katie Nickels', type: 'reading', cost: 'free', lang: ['en'], where: ['l2'], note: 'OSINT, pivoting, clustering, naming and attribution, with exercises.' },
	{ id: 'crtsh', title: 'crt.sh', url: 'https://crt.sh/', type: 'tool', cost: 'free', lang: ['en'], where: ['l2', 'infra', 'drp'], note: 'Search Certificate Transparency logs.' },
	{ id: 'urlscan', title: 'urlscan.io', url: 'https://urlscan.io/', type: 'tool', cost: 'freemium', lang: ['en'], where: ['l2', 'infra', 'drp'], note: 'Scan and search websites; great for phishing pivots.' },
	{ id: 'shodan', title: 'Shodan', url: 'https://www.shodan.io/', type: 'tool', cost: 'freemium', lang: ['en'], where: ['l2', 'infra'], note: 'Internet scan data: banners, certificates, JARM, favicons.' },
	{ id: 'censys', title: 'Censys Search', url: 'https://search.censys.io/', type: 'tool', cost: 'freemium', lang: ['en'], where: ['l2', 'infra'], note: 'Internet scan data with strong certificate search.' },
	{ id: 'ja4', title: 'JA4+ fingerprinting suite', url: 'https://github.com/FoxIO-LLC/ja4', by: 'FoxIO', type: 'tool', cost: 'free', lang: ['en'], where: ['l2', 'infra'], note: 'Documentation for JA4, JA4S, JA4H, JA4X and friends.' },
	{ id: 'bazaar', title: 'MalwareBazaar', url: 'https://bazaar.abuse.ch/', by: 'abuse.ch', type: 'tool', cost: 'free', lang: ['en'], where: ['l2', 'malware'], note: 'Free malware samples with tags and YARA hits.' },
	{ id: 'threatfox', title: 'ThreatFox', url: 'https://threatfox.abuse.ch/', by: 'abuse.ch', type: 'tool', cost: 'free', lang: ['en'], where: ['l2', 'malware', 'infra'], note: 'Community IOCs linked to malware families.' },
	{ id: 'yara', title: 'YARA documentation', url: 'https://yara.readthedocs.io/', type: 'reading', cost: 'free', lang: ['en'], where: ['l2', 'malware', 'hunt'], note: 'Learn to write rules from the source.' },
	{ id: 'remnux', title: 'REMnux', url: 'https://remnux.org/', type: 'tool', cost: 'free', lang: ['en'], where: ['l2', 'malware'], note: 'A ready-made Linux toolkit for malware analysis.' },
	{ id: 'misp', title: 'MISP documentation and training', url: 'https://www.misp-project.org/documentation/', by: 'CIRCL / MISP project', type: 'reading', cost: 'free', lang: ['en'], where: ['l2', 'eng'], note: 'Official docs and training material.' },
	{ id: 'opencti', title: 'OpenCTI documentation', url: 'https://docs.opencti.io/', by: 'Filigran', type: 'reading', cost: 'free', lang: ['en'], where: ['l2', 'eng'], note: 'Data model, connectors and API.' },
	{ id: 'stix', title: 'STIX and TAXII documentation', url: 'https://oasis-open.github.io/cti-documentation/', by: 'OASIS', type: 'standard', cost: 'free', lang: ['en'], where: ['l2', 'eng'], note: 'The specs plus readable intros and examples.' },
	{ id: 'eset-muddy', title: 'MuddyWater: Snakes by the riverbank', url: 'https://www.welivesecurity.com/en/eset-research/muddywater-snakes-riverbank/', by: 'ESET', type: 'report', cost: 'free', lang: ['en'], where: ['l2', 'strat'], note: 'Case study for the Level 2 capstone: includes an Egyptian victim and a joint operation with an OilRig subgroup.' },

	// ── Tracks ──
	{ id: 'sigma', title: 'SigmaHQ rule repository', url: 'https://github.com/SigmaHQ/sigma', type: 'tool', cost: 'free', lang: ['en'], where: ['hunt'], note: 'Thousands of detection rules to read and adapt.' },
	{ id: 'mitre-hunt', title: 'TTP-Based Threat Hunting training', url: 'https://attack.mitre.org/resources/learn-more-about-attack/training/threat-hunting', by: 'MITRE', type: 'course', cost: 'free', lang: ['en'], where: ['hunt'], note: 'Hypotheses, analytics and hunting with ATT&CK.' },
	{ id: 'kev', title: 'CISA Known Exploited Vulnerabilities catalog', url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog', by: 'CISA', type: 'tool', cost: 'free', lang: ['en'], where: ['hunt'], note: 'Vulnerabilities confirmed exploited in the wild.' },
	{ id: 'epss', title: 'EPSS', url: 'https://www.first.org/epss/', by: 'FIRST', type: 'standard', cost: 'free', lang: ['en'], where: ['hunt'], note: 'Probability that a CVE will be exploited in the next 30 days.' },
	{ id: 'ransomwarelive', title: 'ransomware.live', url: 'https://www.ransomware.live/', type: 'tool', cost: 'free', lang: ['en'], where: ['drp'], note: 'Tracks ransomware leak-site claims. Remember: claims are not confirmed incidents.' },
	{ id: 'mitre-emu', title: 'ATT&CK Adversary Emulation training', url: 'https://attack.mitre.org/resources/learn-more-about-attack/training/adversary-emulation', by: 'MITRE', type: 'course', cost: 'free', lang: ['en'], where: ['redteam'], note: 'Technique deep dives for building emulation plans.' },
	{ id: 'mitre-purple', title: 'Purple Teaming Fundamentals', url: 'https://attack.mitre.org/resources/learn-more-about-attack/training/purple-teaming-fundamentals', by: 'MITRE', type: 'course', cost: 'free', lang: ['en'], where: ['redteam', 'hunt'], note: 'Turning emulation into detections.' },
	{ id: 'cloudsek-me', title: 'Middle East Cyber Threat Landscape 2025–2026', url: 'https://cdn.prod.website-files.com/635e632477408d12d1811a64/6aa9246a81909ec612530547_Upload_CloudSEK_Middle_East_Cyber_Threat_Landscape_2025-2026.pdf', by: 'CloudSEK', type: 'report', cost: 'free', lang: ['en'], where: ['strat', 'drp'], note: 'Regional ransomware and hacktivism trends. Vendor feed counts: read them critically.' },
	{ id: 'sans-roadmap', title: 'SANS Cyber Security Skills Roadmap', url: 'https://www.sans.org/cyber-security-skills-roadmap', by: 'SANS', type: 'reading', cost: 'free', lang: ['en'], where: ['l1'], note: 'Where CTI sits among other security careers.' },
];
