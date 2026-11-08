import { ArrowDown, ArrowRight } from "lucide-react";
import collectionImage from "../assets/Collections_Hero_Background.jpg";

export default function CollectionHero() {
  return (
    <section className="relative flex min-h-[530px] items-center overflow-hidden bg-[#25372d] text-white max-[650px]:min-h-[480px]">
      <img className="absolute inset-0 h-full w-full object-cover object-[center_42%] max-[650px]:object-[57%_center]" src={collectionImage} alt="Rewind Apparel outerwear, considered for the everyday" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,33,26,0.79),rgba(20,33,26,0.32)_60%,rgba(20,33,26,0.06))] max-[650px]:bg-[linear-gradient(90deg,rgba(20,33,26,0.72),rgba(20,33,26,0.18))]" />
      <div className="relative z-[1] ml-[clamp(25px,10vw,150px)] w-[min(610px,80%)] py-[75px] max-[650px]:ml-[23px] max-[650px]:w-[calc(100%-46px)] max-[650px]:py-[62px]">
        <p className="mb-[17px] flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.16em] text-[#e2c47a] uppercase">The Rewind collection · 2025</p>
        <h1 className="m-0 font-libre text-[clamp(48px,6vw,78px)] leading-[1.05] font-normal tracking-[-0.055em] max-[650px]:text-[clamp(48px,13vw,64px)]">Layers for<br /><em className="font-normal text-[#e2c47a]">the long run.</em></h1>
        <p className="my-[19px] mb-[25px] max-w-[400px] font-source text-[16px] leading-[1.65] text-[rgba(255,255,255,0.84)] max-[650px]:max-w-[330px] max-[650px]:text-[15px]">Thoughtful outerwear. A quieter kind of confidence. Pieces made to find their way into your everyday.</p>
        <a className="inline-flex min-h-[47px] items-center justify-center gap-[17px] border border-transparent bg-surface px-5 text-[9px] font-semibold tracking-[0.08em] text-primary uppercase transition-colors hover:border-surface hover:bg-transparent hover:text-surface" href="#collection-shop">
          Find your next layer <ArrowRight size={15} />
        </a>
      </div>
      <a className="absolute bottom-6 left-[clamp(25px,10vw,150px)] z-[1] inline-flex items-center gap-[9px] text-[8px] tracking-[0.12em] text-white uppercase max-[650px]:bottom-5 max-[650px]:left-[23px]" href="#collection-shop">
        Explore the collection <ArrowDown size={14} />
      </a>
      <span className="absolute right-[clamp(25px,5vw,75px)] bottom-6 z-[1] text-[8px] tracking-[0.12em] text-[rgba(255,255,255,0.75)] uppercase max-[650px]:right-5 max-[650px]:bottom-5 max-[650px]:text-[7px]">REWIND · OUTERWEAR 01 / 08</span>
    </section>
  );
}
