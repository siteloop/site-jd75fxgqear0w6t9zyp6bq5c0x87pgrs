import content from "../content.json";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-stone-600">
        <p>{content.footer.tagline}</p>
        <p>{content.footer.copyright}</p>
      </div>
    </footer>
  );
}
