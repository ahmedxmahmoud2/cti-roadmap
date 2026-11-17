// Single source of truth for every checklist on the site.
// Item ids are stable: progress is stored by id, so never rename an id
// once published. Add new items with new ids instead.
// `ar` is optional; the English text is shown when it is missing.

export type Item = { id: string; en: string; ar?: string };
export type List = { id: string; group: string; kind: 'self' | 'topics' | 'deliverable' | 'exit'; items: Item[] };

export const groups: { id: string; en: string; ar: string; href: string; track?: boolean }[] = [
	{ id: 'l0', en: 'Level 0 · Foundations', ar: 'Level 0 · الأساسيات', href: 'levels/level-0/' },
	{ id: 'l1', en: 'Level 1 · CTI core', ar: 'Level 1 · أساسيات الـ CTI', href: 'levels/level-1/' },
	{ id: 'l2', en: 'Level 2 · Core skills', ar: 'Level 2 · المهارات الأساسية', href: 'levels/level-2/' },
	{ id: 'infra', en: 'Infrastructure hunting', ar: 'Infrastructure hunting', href: 'tracks/infrastructure-hunting/', track: true },
	{ id: 'malware', en: 'Malware intelligence', ar: 'Malware intelligence', href: 'tracks/malware-intelligence/', track: true },
	{ id: 'hunt', en: 'Threat hunting and detection', ar: 'Threat hunting and detection', href: 'tracks/hunting-detection/', track: true },
	{ id: 'drp', en: 'Dark web and digital risk', ar: 'Dark web and digital risk', href: 'tracks/dark-web-drp/', track: true },
	{ id: 'strat', en: 'Strategic and geopolitical', ar: 'Strategic and geopolitical', href: 'tracks/strategic-geopolitical/', track: true },
	{ id: 'eng', en: 'CTI engineering', ar: 'CTI engineering', href: 'tracks/cti-engineering/', track: true },
	{ id: 'redteam', en: 'Intel-led red teaming', ar: 'Intel-led red teaming', href: 'tracks/adversary-emulation/', track: true },
];

const L = (id: string, group: string, kind: List['kind'], items: [string, string][]): List => ({
	id,
	group,
	kind,
	items: items.map(([iid, en]) => ({ id: `${id}.${iid}`, en })),
});

export const lists: List[] = [
	// ───────────────────────── Level 0 ─────────────────────────
	L('l0.self', 'l0', 'self', [
		['osi', 'I can explain what happens, protocol by protocol, when I open https://example.com in a browser'],
		['dns', 'I can read a DNS response and explain A, AAAA, MX, TXT, NS and CNAME records'],
		['pcap', 'I can open a PCAP in Wireshark and follow a TCP or HTTP stream'],
		['win', 'I know where Windows keeps processes, services, scheduled tasks, the registry and event logs'],
		['linux', 'I am comfortable in a Linux shell: files, permissions, processes, cron, SSH, logs'],
		['py', 'I can write a Python script that calls a REST API and parses the JSON it returns'],
		['regex', 'I can write a regex that pulls IPs, domains and hashes out of text'],
		['sec', 'I can explain phishing, malware, ransomware, C2 and lateral movement to a non-technical friend'],
	]),
	L('l0.net', 'l0', 'topics', [
		['tcpip', 'TCP/IP and the OSI model, the three-way handshake, UDP and ICMP'],
		['dns', 'DNS resolution, record types, registrars and nameservers'],
		['http', 'HTTP/HTTPS, headers, status codes, cookies and proxies'],
		['tls', 'TLS handshake and certificates (what a CA, a SAN and a fingerprint are)'],
		['nat', 'NAT, VPNs, firewalls and basic routing'],
		['mail', 'Email: SMTP, SPF, DKIM, DMARC and reading raw email headers'],
		['wireshark', 'Wireshark and tcpdump basics'],
	]),
	L('l0.os', 'l0', 'topics', [
		['winarch', 'Windows: processes, services, scheduled tasks, registry, DLL loading'],
		['winlog', 'Windows event logs and Sysmon basics'],
		['ps', 'PowerShell basics and why attackers love it'],
		['ad', 'Active Directory fundamentals: users, groups, Kerberos at a high level'],
		['linux', 'Linux: filesystem, permissions, systemd, cron, SSH, logs'],
	]),
	L('l0.code', 'l0', 'topics', [
		['python', 'Python: requests, json, csv, regex and virtual environments'],
		['bash', 'Bash one-liners: grep, awk, sort, uniq, jq'],
		['api', 'REST APIs, API keys and rate limits'],
		['formats', 'JSON, YAML and CSV'],
		['git', 'Git and GitHub basics: commit, branch, pull request'],
	]),
	L('l0.sec', 'l0', 'topics', [
		['cia', 'Core security concepts: CIA triad, vulnerabilities, exploits, risk'],
		['attacks', 'Common attacks: phishing, credential theft, ransomware, web attacks'],
		['malware', 'Malware families at a high level: loaders, RATs, stealers, ransomware'],
		['soc', 'How a SOC works: alerts, triage, SIEM, EDR, incident response'],
	]),
	L('l0.deliv', 'l0', 'deliverable', [
		['enrich', 'Build a small IOC enrichment script: takes an IP, domain or hash, validates it, queries one or two free APIs and prints a JSON summary'],
	]),

	// ───────────────────────── Level 1 ─────────────────────────
	L('l1.self', 'l1', 'self', [
		['pir', 'I can turn a business question into PIRs and smaller, collectable intelligence requirements'],
		['admiralty', 'I can grade a source and a piece of information with the Admiralty system (A–F / 1–6)'],
		['confidence', 'I can state a judgment with a confidence level and estimative language, and explain why'],
		['ach', 'I have run an Analysis of Competing Hypotheses on a real question'],
		['diamond', 'I can model an intrusion with the Diamond Model and map a report to ATT&CK'],
		['bluf', 'I can write a one-page BLUF assessment that separates facts from judgments'],
		['tlp', 'I know what TLP:CLEAR, GREEN, AMBER, AMBER+STRICT and RED allow'],
	]),
	L('l1.what', 'l1', 'topics', [
		['def', 'What intelligence is: information + analysis, aimed at a decision'],
		['levels', 'Strategic, operational, tactical and technical intelligence, and who uses each'],
		['vs', 'CTI vs threat hunting vs incident response vs OSINT vs threat feeds'],
		['ioc', 'Why an IOC feed is not a CTI program (Pyramid of Pain)'],
	]),
	L('l1.cycle', 'l1', 'topics', [
		['cycle', 'The intelligence lifecycle: direction, collection, processing, analysis, dissemination, feedback'],
		['nonlinear', 'Why the lifecycle is not linear in practice'],
		['f3ead', 'F3EAD as an alternative cycle for operations-heavy teams (optional)'],
	]),
	L('l1.req', 'l1', 'topics', [
		['pir', 'Priority Intelligence Requirements (PIRs), specific requirements (SIRs) and EEIs'],
		['business', 'Translating business risk into intelligence requirements'],
		['rfi', 'Handling requests for information (RFIs): intake, scoping, answering, closing'],
		['consumers', 'Who consumes CTI: SOC, IR, vulnerability management, IAM, fraud, third-party risk, architecture, leadership'],
		['interview', 'Running a stakeholder interview to discover requirements'],
		['feedback', 'Collecting feedback and re-validating requirements on a schedule'],
		['metrics', 'Measuring CTI value: what to count and what not to count'],
		['gaps', 'Identifying intelligence gaps and turning them into collection requirements'],
	]),
	L('l1.trade', 'l1', 'topics', [
		['bias', 'Cognitive biases in analysis: confirmation, anchoring, mirror imaging, availability'],
		['sats', 'Structured analytic techniques: key assumptions check, ACH, devil’s advocacy, red team analysis'],
		['cone', 'Cone of plausibility and simple scenario/forecasting techniques'],
		['admiralty', 'Source evaluation with the Admiralty/NATO system: reliability (A–F) and credibility (1–6)'],
		['confidence', 'Confidence levels (low, moderate, high) and what drives them'],
		['estimative', 'Estimative language (likely, almost certainly…) and a standard probability scale'],
		['factjudg', 'Separating fact, assessment and assumption in every product'],
	]),
	L('l1.models', 'l1', 'topics', [
		['killchain', 'Lockheed Martin Cyber Kill Chain and its limits'],
		['diamond', 'Diamond Model of Intrusion Analysis: adversary, capability, infrastructure, victim'],
		['attack', 'MITRE ATT&CK: tactics, techniques, procedures, groups, software, campaigns'],
		['navigator', 'Mapping a report to ATT&CK and comparing groups in ATT&CK Navigator'],
		['pyramid', 'Pyramid of Pain and why TTPs outlast IOCs'],
	]),
	L('l1.write', 'l1', 'topics', [
		['bluf', 'BLUF writing: the judgment first, then the evidence'],
		['products', 'Product types: flash alert, intelligence summary, actor profile, assessment, landscape report'],
		['audience', 'Writing the same finding for a CISO, a SOC lead and an engineer'],
		['brief', 'Oral briefing: a 5-minute executive brief'],
		['tlp', 'TLP 2.0 and scoping a report to sharing restrictions'],
		['sources', 'Citing sources and marking confidence inside the text'],
	]),
	L('l1.geo', 'l1', 'topics', [
		['events', 'Non-cyber events (conflicts, elections, sanctions, major deals) and their cyber implications'],
		['state', 'State-linked actors in the region and their usual motivations'],
		['hacktivism', 'Hacktivism and its spikes during geopolitical escalation'],
	]),
	L('l1.ai', 'l1', 'topics', [
		['llm', 'Using LLMs for summarising, translating and extracting IOCs/TTPs, and verifying every output'],
		['data', 'Data handling: never paste TLP:AMBER/RED or client data into public AI tools'],
		['threats', 'AI-enabled threats: deepfake fraud, AI-assisted phishing and malware development'],
	]),
	L('l1.deliv', 'l1', 'deliverable', [
		['reqs', 'Intelligence requirements for a fictional company (sector, country, crown jewels → 3 PIRs → SIRs → collection sources)'],
		['profile', 'Threat actor profile of one regional actor: every claim sourced, facts and assessments marked, confidence stated'],
		['mapping', 'ATT&CK mapping of one public report, with a Navigator layer'],
		['bluf', 'A one-page BLUF assessment for an executive, plus the 5-minute brief you would give'],
	]),
	L('l1.exit', 'l1', 'exit', [
		['explain', 'I can explain to a manager what CTI will and will not do for them'],
		['product', 'My actor profile cites sources and uses estimative language correctly'],
		['peer', 'Someone experienced reviewed one of my products and I applied the feedback'],
	]),

	// ───────────────────────── Level 2 ─────────────────────────
	L('l2.self', 'l2', 'self', [
		['plan', 'I have built a collection plan that maps sources to PIRs'],
		['pivot', 'Starting from one domain, I can find related infrastructure with passive DNS, certificates and scan data, and rate each link'],
		['ja4', 'I know what JARM, JA3/JA4 and favicon hashes are and when they mislead'],
		['triage', 'I can triage a malware sample from sandbox output and pull out intel (C2, config, mutexes, TTPs)'],
		['cluster', 'I can explain the difference between an activity cluster and a named group, and why vendors name actors differently'],
		['critique', 'I can critique a vendor report: what is evidence, what is assessment, what is marketing'],
	]),
	L('l2.collect', 'l2', 'topics', [
		['cmf', 'Collection management: a collection plan and a source-to-PIR matrix'],
		['osint', 'OSINT methods: search operators, archives, social media, code repositories'],
		['meta', 'Document and image metadata analysis'],
		['feeds', 'Evaluating threat feeds and vendor reporting as sources'],
		['paste', 'Paste and dump sites, Telegram channels and forums: what to collect and how safely'],
		['sock', 'Sock puppets and research OPSEC (see Ethics, OPSEC and law)'],
	]),
	L('l2.infra', 'l2', 'topics', [
		['whois', 'WHOIS, registrars and registration patterns'],
		['pdns', 'Passive DNS and DNS history'],
		['ct', 'Certificate Transparency (crt.sh) and certificate reuse'],
		['asn', 'IPs, ASNs, hosting providers and bulletproof hosting'],
		['scan', 'Scan data search engines: Shodan, Censys, FOFA, urlscan.io'],
		['fp', 'Fingerprints: JARM, JA3/JA4+, favicon hashes, HTTP headers and banners'],
		['composite', 'Infrastructure as composite objects, and pivot confidence'],
		['graph', 'Drawing an infrastructure graph with confirmed vs possible links'],
	]),
	L('l2.malware', 'l2', 'topics', [
		['sandbox', 'Reading sandbox reports (any.run, Triage, Hybrid Analysis)'],
		['static', 'Basic static triage: hashes, file type, strings/FLOSS, imports, capa'],
		['config', 'Malware configuration extraction at a basic level'],
		['yara', 'Writing simple YARA rules'],
		['repos', 'Using MalwareBazaar and ThreatFox for pivoting'],
		['lab', 'A safe analysis lab (isolated VM, REMnux or FLARE-VM) and safe handling rules'],
	]),
	L('l2.campaign', 'l2', 'topics', [
		['timeline', 'Building a campaign timeline from multiple reports'],
		['overlap', 'Linking incidents: infrastructure, tooling, code, TTPs, victimology, timing'],
		['cluster', 'Clustering and naming: activity clusters (UNC/DEV/TAG-style) vs named groups'],
		['aliases', 'Cross-vendor naming (e.g. MuddyWater / Mango Sandstorm / Seedworm)'],
		['attribution', 'Attribution levels, false flags and why one shared technique proves nothing'],
	]),
	L('l2.critique', 'l2', 'topics', [
		['vendor', 'Critiquing vendor reports: evidence vs assessment vs marketing'],
		['numbers', 'Reading vendor statistics critically (feed counts are not incident counts)'],
	]),
	L('l2.platforms', 'l2', 'topics', [
		['stix', 'STIX 2.1 objects and relationships at a user level'],
		['misp', 'MISP as a user: events, attributes, galaxies, taxonomies, warning lists'],
		['opencti', 'OpenCTI as a user: entities, relationships, reports, the knowledge graph'],
	]),
	L('l2.deliv', 'l2', 'deliverable', [
		['plan', 'A collection plan for your Level 1 PIRs'],
		['infra', 'An infrastructure hunting report: start from one published IOC, pivot, and grade every link'],
		['malware', 'A malware triage note for one sample, ending in IOCs, ATT&CK mapping and a YARA rule'],
		['critique', 'A one-page critique of a vendor report'],
		['capstone', 'Capstone: turn one published intrusion into a campaign assessment (see the MuddyWater case study)'],
	]),
	L('l2.exit', 'l2', 'exit', [
		['solo', 'I can run an investigation end to end without a step-by-step tutorial'],
		['grade', 'Every link in my infrastructure graph has a stated confidence'],
		['publish', 'I published at least one piece of work (blog, GitHub or LinkedIn)'],
	]),

	// ───────────────────────── Tracks ─────────────────────────
	L('infra.topics', 'infra', 'topics', [
		['c2', 'C2 framework fingerprinting: Cobalt Strike, Sliver, Mythic, Brute Ratel, Havoc'],
		['redir', 'Redirectors, CDNs and domain fronting'],
		['lifecycle', 'Adversary infrastructure lifecycle: registration, staging, use, burn'],
		['queries', 'Writing and maintaining hunting queries in Shodan/Censys/FOFA'],
		['cluster', 'Clustering infrastructure at scale and tracking it over time'],
		['phish', 'Phishing kits and phishing infrastructure'],
		['cloud', 'Cloud and identity: cloud-hosted C2, OAuth abuse, token theft, Entra ID attack patterns'],
	]),
	L('infra.deliv', 'infra', 'deliverable', [
		['tracker', 'Track one actor’s infrastructure for 60 days and publish what changed'],
		['queries', 'Publish a set of hunting queries with notes on false positives'],
	]),
	L('malware.topics', 'malware', 'topics', [
		['asm', 'x86/x64 assembly basics and Windows internals'],
		['ghidra', 'Static reversing with Ghidra or IDA Free'],
		['debug', 'Dynamic analysis and debugging (x64dbg)'],
		['anti', 'Anti-analysis, packers and obfuscation'],
		['inject', 'Process injection and persistence techniques'],
		['crypto', 'Recognising crypto and decoding configurations'],
		['extract', 'Writing config extractors and family classifiers'],
		['family', 'Malware family clustering and code-similarity analysis'],
	]),
	L('malware.deliv', 'malware', 'deliverable', [
		['report', 'A full malware analysis report on a family linked to a regional actor'],
		['extractor', 'A config extractor or YARA rule set published on GitHub'],
	]),
	L('hunt.topics', 'hunt', 'topics', [
		['method', 'Hunting methodology: hypothesis-, TTP- and anomaly-based hunting'],
		['telemetry', 'Telemetry: Sysmon, Windows security logs, EDR, DNS, proxy, Zeek'],
		['sigma', 'Sigma rules'],
		['query', 'Query languages: KQL, SPL, EQL'],
		['suricata', 'Suricata/Snort network signatures'],
		['gap', 'ATT&CK-based detection gap analysis'],
		['vuln', 'Vulnerability intelligence: CVSS, EPSS, CISA KEV, exploit availability, actor-to-CVE links'],
	]),
	L('hunt.deliv', 'hunt', 'deliverable', [
		['package', 'A hunting package for one actor: 5 hypotheses, data sources, queries, false positives, Sigma rules'],
		['vuln', 'A vulnerability intelligence note: prioritise 10 CVEs for a fictional company and justify it'],
	]),
	L('drp.topics', 'drp', 'topics', [
		['eco', 'The underground economy: forums, markets, IABs, MaaS, RaaS, affiliates'],
		['stealer', 'Infostealer logs: what they contain, how they are sold, how to validate exposure'],
		['ransom', 'Ransomware intelligence: leak sites, victimology, affiliates, double extortion'],
		['telegram', 'Telegram and messaging-app monitoring'],
		['brand', 'Brand protection: typosquatting, lookalike domains, fake apps, fake social accounts'],
		['fraud', 'Fraud and abuse intelligence (payment fraud, BEC, impersonation)'],
		['thirdparty', 'Third-party and supply-chain exposure'],
		['validate', 'Validating claims: old data re-sold, fake leaks, exaggerated claims'],
	]),
	L('drp.deliv', 'drp', 'deliverable', [
		['exposure', 'A brand exposure assessment for a fictional brand: lookalikes, leaked credentials, impersonation, recommended actions'],
		['ransom', 'A regional ransomware landscape note built from leak-site data, with its limits stated'],
	]),
	L('strat.topics', 'strat', 'topics', [
		['landscape', 'Writing a sector or country threat landscape'],
		['geo', 'Geopolitics and cyber: state interests, sanctions, conflicts'],
		['io', 'Influence operations and hacktivism'],
		['forecast', 'Forecasting and scenario analysis'],
		['exec', 'Executive communication and risk language'],
		['civil', 'Spyware and civil-society targeting (Citizen Lab, Amnesty Tech reporting)'],
	]),
	L('strat.deliv', 'strat', 'deliverable', [
		['landscape', 'A strategic threat landscape for one sector in one MENA country'],
		['brief', 'A recorded 5-minute executive brief on that landscape'],
	]),
	L('eng.topics', 'eng', 'topics', [
		['stix', 'STIX 2.1 and TAXII 2.1 in depth'],
		['misp', 'MISP administration, feeds, PyMISP and sharing groups'],
		['opencti', 'OpenCTI connectors, data model and API'],
		['pipeline', 'Collection pipelines: parsing, normalisation, deduplication, enrichment'],
		['quality', 'Data quality: expiry, false positives, confidence scoring, provenance, revocation'],
		['ds', 'Data science for CTI: pandas, Jupyter, simple clustering and link analysis'],
		['sop', 'Writing a team CTI SOP / handbook'],
	]),
	L('eng.deliv', 'eng', 'deliverable', [
		['pipeline', 'An open-source pipeline: sources → enrichment → MISP/OpenCTI → SIEM-ready output'],
		['sop', 'A CTI team handbook: requirements, collection, production and sharing procedures'],
	]),
	L('redteam.topics', 'redteam', 'topics', [
		['tlpt', 'Threat-led penetration testing frameworks (CBEST, TIBER-EU style)'],
		['ti', 'Producing a targeted threat intelligence report for a red team engagement'],
		['plan', 'Building an adversary emulation plan from ATT&CK and real reports'],
		['purple', 'Purple teaming: turning emulation results into detections'],
	]),
	L('redteam.deliv', 'redteam', 'deliverable', [
		['plan', 'An emulation plan for one regional actor, with the intel behind every step'],
	]),
];

export const listById = Object.fromEntries(lists.map((l) => [l.id, l]));

// Backgrounds for the entry wizard
export const backgrounds = [
	{
		id: 'zero',
		en: 'Starting from zero',
		ar: 'بادئ من الصفر',
		start: 'l0',
		noteEn: 'Start with Level 0. Do not skip it: CTI analysts who cannot read a PCAP or a process tree stay stuck at copying IOCs. Expect 3–6 months here at 8–10 hours a week.',
		noteAr: 'ابدأ من Level 0 ومتتخطاهوش. توقّع 3–6 شهور هنا بمعدل 8–10 ساعات في الأسبوع.',
	},
	{
		id: 'soc',
		en: 'SOC / incident response',
		ar: 'SOC / Incident Response',
		start: 'l1',
		noteEn: 'Run the Level 0 self-check, then start Level 1. Your strength is telemetry and attack chains; your gap is usually requirements, analytic tradecraft and writing for non-technical readers.',
		noteAr: 'اعمل الـ self-check بتاع Level 0 وابدأ Level 1. نقطة قوتك الـ telemetry، والفجوة غالباً في الـ requirements والـ tradecraft والكتابة.',
	},
	{
		id: 'pentest',
		en: 'Pentest / red team',
		ar: 'Pentest / Red Team',
		start: 'l1',
		noteEn: 'Start Level 1. You already think like an adversary and know infrastructure; learn to work from evidence and confidence instead of exploitation. The intel-led red teaming track is your natural bridge.',
		noteAr: 'ابدأ Level 1. إنت فاهم الـ adversary والـ infrastructure، المطلوب تتعلم تشتغل بالـ evidence والـ confidence. Track الـ Intel-led red teaming هو الجسر الطبيعي ليك.',
	},
	{
		id: 'dev',
		en: 'Developer / data',
		ar: 'Developer / Data',
		start: 'l0',
		noteEn: 'Do the networking, OS and security parts of Level 0 and skip the coding part. Your edge is automation: the CTI engineering track will feel natural after Level 2.',
		noteAr: 'خد الـ networking والـ OS والـ security من Level 0 وفوّت جزء البرمجة. ميزتك الـ automation، وtrack الـ CTI engineering هيبقى طبيعي ليك بعد Level 2.',
	},
	{
		id: 'nontech',
		en: 'Non-technical (politics, journalism, analysis)',
		ar: 'خلفية غير تقنية (سياسة، صحافة، تحليل)',
		start: 'l1',
		noteEn: 'Start Level 1 — your analytic and writing skills are the hardest part to teach. Do the security basics in Level 0 in parallel. The strategic and geopolitical track fits you best.',
		noteAr: 'ابدأ Level 1، مهارات التحليل والكتابة عندك هي أصعب حاجة تتعلم. خد أساسيات الـ security من Level 0 بالتوازي، وtrack الـ Strategic هو الأنسب ليك.',
	},
];
