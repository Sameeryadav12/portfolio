// src/components/TechLogos.tsx
import type { IconItem } from '../lib/techIcons';

export default function TechLogos({
  items,
  size = 20,
}: { items: IconItem[]; size?: number }) {
  if (!items?.length) return null;

  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t.key}>
          <div
            className="
              h-8 w-8 rounded-lg
              flex items-center justify-center
              ring-1 ring-brand-mist/25
              bg-brand-base/80 hover:bg-brand-slate/60
              transition-colors
            "
            title={t.name}
            aria-label={t.name}
          >
            {t.src ? (
              <img
                src={t.src}
                alt={t.name}
                style={{ width: size, height: size }}
                className="object-contain"
                loading="lazy"
              />
            ) : (
              <span className="text-xs text-brand-mist">{t.name}</span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
