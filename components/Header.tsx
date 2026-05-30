import content from "../content.json";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-[var(--background)]/85 backdrop-blur border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight">
          {content.brand}
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {content.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-stone-700 hover:text-[var(--accent)] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
