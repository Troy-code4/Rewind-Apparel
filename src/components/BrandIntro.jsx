import { ArrowUpRight } from "lucide-react";
import campaignImage from "../assets/Gallery_Img.jpg";

export default function BrandIntro() {
  return (
    <section className="grid min-h-[515px] grid-cols-2 bg-[#e9e4d9] max-[650px]:grid-cols-1" id="our-story">
      <div className="relative min-h-[480px] overflow-hidden max-[650px]:h-[95vw] max-[650px]:min-h-0 max-[650px]:max-h-[500px]">
        <img className="h-full w-full object-cover object-[center_42%]" src={campaignImage} alt="The Rewind approach to modern heritage dressing" />
        <span className="absolute right-5 bottom-5 bg-surface px-3 py-[9px] font-source text-xs text-tertiary italic">Made to move with you.</span>
      </div>
      <div className="flex flex-col items-start justify-center px-[clamp(42px,8vw,125px)] py-[72px] max-[900px]:px-[38px] max-[650px]:px-[25px] max-[650px]:py-[53px]">
        <p className="mb-[14px] flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.16em] text-primary uppercase">A little about us · Since 1924</p>
        <h2 className="m-0 font-libre text-[clamp(36px,4vw,55px)] leading-[1.08] font-normal tracking-[-0.055em] max-[650px]:text-[clamp(37px,10vw,48px)]">Clothing with character.<br /><em className="font-normal text-primary">Style that endures.</em></h2>
        <p className="mt-5 mb-[23px] max-w-[390px] font-source text-[16px] leading-[1.7] text-[#69665d] max-[650px]:text-[15px]">
          We believe in buying fewer, better things. So we make thoughtful
          outerwear with the confidence to outlast a season — and the ease to
          become part of your everyday.
        </p>
        <a className="inline-flex items-center gap-[7px] text-[9px] font-semibold tracking-[0.07em] text-primary uppercase transition-[gap] duration-[180ms] hover:gap-3" href="/journal">Get to know Rewind <ArrowUpRight size={15} /></a>
        <div className="mt-[45px] flex w-full items-center gap-[10px] border-t border-[rgba(42,40,37,0.2)] pt-[14px] text-[8px] tracking-[0.1em] text-[#777267] uppercase max-[650px]:mt-[33px]">A century in the making <span className="text-secondary">✳</span> Worn your way</div>
      </div>
    </section>
  );
}
