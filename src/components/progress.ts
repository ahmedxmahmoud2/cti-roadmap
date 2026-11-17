// Client-side progress store. Everything lives in localStorage under one key,
// so the site needs no backend and no account.
const KEY = 'ctir.v1';

type State = { done: Record<string, true>; tracks: string[]; bg?: string };

export function load(): State {
	try {
		const raw = localStorage.getItem(KEY);
		if (raw) {
			const s = JSON.parse(raw);
			return { done: s.done ?? {}, tracks: s.tracks ?? [], bg: s.bg };
		}
	} catch {}
	return { done: {}, tracks: [] };
}

export function save(s: State) {
	try {
		localStorage.setItem(KEY, JSON.stringify(s));
	} catch {}
	document.dispatchEvent(new CustomEvent('ctir:change'));
}

export function isState(x: unknown): x is State {
	return !!x && typeof x === 'object' && 'done' in (x as any) && typeof (x as any).done === 'object';
}

// Checkboxes: any <input type=checkbox data-ctir="id"> on the page
function bindCheckboxes() {
	const s = load();
	document.querySelectorAll<HTMLInputElement>('input[data-ctir]').forEach((box) => {
		const id = box.dataset.ctir!;
		box.checked = !!s.done[id];
		if (box.dataset.bound) return;
		box.dataset.bound = '1';
		box.addEventListener('change', () => {
			const st = load();
			if (box.checked) st.done[id] = true;
			else delete st.done[id];
			save(st);
		});
	});
}

// Any element with data-ctir-count="id1,id2,…" shows "x of n" and fills its bar
function refreshCounts() {
	const s = load();
	document.querySelectorAll<HTMLElement>('[data-ctir-count]').forEach((el) => {
		const ids = el.dataset.ctirCount!.split(',').filter(Boolean);
		const n = ids.filter((i) => s.done[i]).length;
		const pct = ids.length ? Math.round((n / ids.length) * 100) : 0;
		el.style.setProperty('--pct', `${pct}%`);
		const label = el.querySelector<HTMLElement>('[data-ctir-label]');
		if (label) label.textContent = `${n} ${label.dataset.of ?? 'of'} ${ids.length}`;
		el.toggleAttribute('data-complete', ids.length > 0 && n === ids.length);
	});
}

export function init() {
	bindCheckboxes();
	refreshCounts();
}

document.addEventListener('ctir:change', () => {
	bindCheckboxes();
	refreshCounts();
});
window.addEventListener('storage', (e) => {
	if (e.key === KEY) document.dispatchEvent(new CustomEvent('ctir:change'));
});
