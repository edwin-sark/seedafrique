import Summary from "./components/Summary";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const heroH1 = "Connecting People With Opportunities";
const heroP =
  "Discover limitless opportunities. Embrace innovation and change the world.";

export default function Home() {
  return (
    <main className="bg-lime-950">
      <Hero h1={heroH1} p={heroP} />
      <Summary
        summaryH3="Who We Are"
        summaryP="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          perferendis ratione ipsam atque corporis odio, ipsa inventore illo
          ullam consequuntur!"
      />

      <Footer />
    </main>
  );
}
