import { ArrowRight } from "lucide-react";
import atelierImage from "../assets/centre-for-ageing-better-oIAr3Hepn3I-unsplash.jpg";

export default function Atelier() {
  return (
    <section className="grid min-h-[505px] grid-cols-[0.95fr_1.05fr] bg-primary text-surface max-[650px]:grid-cols-1">
      <div className="min-h-[505px] overflow-hidden">
        <img className="h-full w-full object-cover object-[center_35%]" src={atelierImage} alt="A personal approach to made-to-measure outerwear" />
      </div>
      <div className="flex flex-col items-start justify-center px-[clamp(38px,7vw,105px)] py-[65px] max-[900px]:px-[38px] max-[650px]:px-[25px] max-[650px]:py-[53px]">
        <p className="mb-[14px] flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.16em] text-[#d3b86f] uppercase">The Rewind atelier · Made personal</p>
        <h2 className="m-0 font-libre text-[clamp(36px,4vw,55px)] leading-[1.08] font-normal tracking-[-0.055em] max-[650px]:text-[clamp(37px,10vw,48px)]">Made around<br /><em className="font-normal text-[#e3c36f]">your vision.</em></h2>
        <p className="mt-5 mb-[23px] max-w-[390px] font-source text-[16px] leading-[1.7] text-[rgba(245,241,232,0.78)] max-[650px]:text-[15px]">
          Discover a more personal approach to tailoring, shaped around your
          preferences and individual style.
        </p>
        <a className="inline-flex min-h-[47px] items-center justify-center gap-[17px] border border-transparent bg-surface px-5 text-[9px] font-semibold tracking-[0.08em] text-primary uppercase transition-colors hover:border-surface hover:bg-transparent hover:text-surface" href="/contact">Discover the atelier <ArrowRight size={15} /></a>
        <span className="mt-[18px] font-source text-xs text-[rgba(245,241,232,0.65)] italic">A conversation, a fitting, a piece that is entirely yours.</span>
      </div>
    </section>
  );
}
