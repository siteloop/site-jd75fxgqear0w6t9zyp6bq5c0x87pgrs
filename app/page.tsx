import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Menu from "../components/Menu";
import Story from "../components/Story";
import Visit from "../components/Visit";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Menu />
        <Story />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
