import content from "../content.json";

export default function Hero() {
  const { eyebrow, heading, subheading, primaryCta, secondaryCta } = content.hero;

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #c89a6a 0, transparent 50%), radial-gradient(circle at 80% 70%, #8a5a2b 0, transparent 55%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-36 text-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[var(--accent)] mb-6">
          {eyebrow}
        </p>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6 max-w-3xl mx-auto">
          {heading}
        </h1>
        <p className="text-lg md:text-xl text-stone-700 max-w-2xl mx-auto mb-10">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={primaryCta.href}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:bg-[#704621] transition-colors"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-stone-400 text-sm font-medium text-stone-800 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            {secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
