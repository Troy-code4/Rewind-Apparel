import { ArrowUpRight } from "lucide-react";
import craftImage from "../assets/pexels-omerderinyar-22481682.jpg";

export default function Craftsmanship() {
  return (
    <section className="grid min-h-[565px] grid-cols-[0.85fr_1.15fr] bg-[#ebe6db] max-[650px]:grid-cols-1">
      <div className="flex flex-col items-start justify-center px-[clamp(38px,7vw,105px)] py-[70px] max-[900px]:px-[38px] max-[650px]:px-[25px] max-[650px]:py-[53px]">
        <p className="mb-[14px] flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.16em] text-primary uppercase">Thought through. Made to last.</p>
        <h2 className="m-0 font-libre text-[clamp(36px,4vw,55px)] leading-[1.08] font-normal tracking-[-0.055em] max-[650px]:text-[clamp(37px,10vw,48px)]">The beauty is<br />in the <em className="font-normal text-primary">details.</em></h2>
        <p className="mt-5 mb-[23px] max-w-[390px] font-source text-[16px] leading-[1.7] text-[#69665d] max-[650px]:text-[15px]">
          A good coat starts long before the first stitch. We choose tactile,
          responsible cloth, give every seam room to breathe, and finish each
          piece by hand.
        </p>
        <a className="inline-flex items-center gap-[7px] text-[9px] font-semibold tracking-[0.07em] text-primary uppercase transition-[gap] duration-[180ms] hover:gap-3" href="/journal">Our approach to making <ArrowUpRight size={15} /></a>
        <div className="mt-[22px] grid w-full gap-3 border-t border-[rgba(42,40,37,0.18)] pt-[17px]">
          <span className="text-[9px] tracking-[0.08em] text-[#5f5c53] uppercase"><b className="mr-3 font-medium text-secondary">01</b> Natural fibres</span>
          <span className="text-[9px] tracking-[0.08em] text-[#5f5c53] uppercase"><b className="mr-3 font-medium text-secondary">02</b> Thoughtful tailoring</span>
          <span className="text-[9px] tracking-[0.08em] text-[#5f5c53] uppercase"><b className="mr-3 font-medium text-secondary">03</b> Made for the long run</span>
        </div>
      </div>
      <div className="relative min-h-[510px] overflow-hidden">
        <img className="h-full w-full object-cover object-[center_35%]" src={craftImage} alt="Close view of a carefully tailored wool coat" />
        <span className="absolute right-[21px] bottom-5 text-[8px] tracking-[0.1em] text-white uppercase [text-shadow:0_1px_5px_rgba(0,0,0,0.65)]">The Weekend Car Coat · Italian wool blend</span>
      </div>
    </section>
  );
}
