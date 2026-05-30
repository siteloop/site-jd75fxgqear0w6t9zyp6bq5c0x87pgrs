import content from "../content.json";

export default function Menu() {
  const { heading, subheading, sections } = content.menu;

  return (
    <section id="menu" className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">
          {heading}
        </h2>
        <p className="text-stone-600 text-lg">{subheading}</p>
      </div>
      <div className="grid gap-12 md:grid-cols-3">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--accent)] mb-6">
              {section.title}
            </h3>
            <ul className="space-y-5">
              {section.items.map((item) => (
                <li key={item.name}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-stone-500 text-sm">{item.price}</span>
                  </div>
                  <p className="text-stone-600 text-sm mt-1">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
