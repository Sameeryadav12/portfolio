export function readingTime(s: string){const w=(s||'').trim().split(/\s+/).filter(Boolean).length;return{words:w,mins:Math.max(1,Math.round(w/200))}}
