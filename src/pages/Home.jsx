import Atelier from "../components/Atelier";
import BrandIntro from "../components/BrandIntro";
import CategorySection from "../components/CategorySection";
import Craftsmanship from "../components/Craftsmanship";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import JournalPreview from "../components/JournalPreview";
import NewArrivals from "../components/NewArrivals";
import Newsletter from "../components/Newsletter";

export default function Home({ onNotify }) {
  return (
    <main>
      <Hero />
      <CategorySection />
      <FeaturedProducts onNotify={onNotify} />
      <BrandIntro />
      <NewArrivals onNotify={onNotify} />
      <Craftsmanship />
      <Atelier />
      <JournalPreview />
      <Newsletter onNotify={onNotify} />
    </main>
  );
}
