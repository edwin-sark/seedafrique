import Image from "next/image";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Footer />
    </main>
  );
}
