import content from "../content.json";

export default function Visit() {
  const { heading, address, hours, phone } = content.visit;

  return (
    <section id="visit" className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            {heading}
          </h2>
          <p className="text-stone-700 text-lg leading-relaxed mb-2">{address}</p>
          <a
            href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
            className="text-[var(--accent)] hover:underline"
          >
            {phone}
          </a>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--accent)] mb-6">
            Hours
          </h3>
          <ul className="divide-y divide-stone-200 border-y border-stone-200">
            {hours.map((row) => (
              <li
                key={row.days}
                className="flex items-center justify-between py-3 text-stone-800"
              >
                <span>{row.days}</span>
                <span className="text-stone-600">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
