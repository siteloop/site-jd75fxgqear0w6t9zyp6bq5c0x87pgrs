import content from "../content.json";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-semibold tracking-tight mb-4">
        {content.heading}
      </h1>
      <p className="text-lg text-neutral-600 max-w-xl text-center">
        {content.subheading}
      </p>
    </main>
  );
}
