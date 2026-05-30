import content from "../content.json";

export default function Story() {
  const { heading, body } = content.story;

  return (
    <section id="story" className="bg-[#2a1d12] text-stone-100">
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          {heading}
        </h2>
        <p className="text-lg md:text-xl text-stone-300 leading-relaxed">{body}</p>
      </div>
    </section>
  );
}
