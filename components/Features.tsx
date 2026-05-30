import content from "../content.json";

export default function Features() {
  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-3">
        {content.features.map((feature) => (
          <div key={feature.title}>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-stone-600 leading-relaxed">{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
