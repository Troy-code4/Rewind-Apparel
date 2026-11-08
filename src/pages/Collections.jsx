import Atelier from "../components/Atelier";
import CollectionHero from "../components/CollectionHero";
import Craftsmanship from "../components/Craftsmanship";
import Gallery from "../components/Gallery";

export default function Collections({ onNotify }) {
  return (
    <main>
      <CollectionHero />
      <Gallery onNotify={onNotify} />
      <Craftsmanship />
      <Atelier />
    </main>
  );
}
