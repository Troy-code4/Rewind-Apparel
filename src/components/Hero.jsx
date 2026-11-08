import { ArrowDown, ArrowRight } from "lucide-react";
import heroImage from "../assets/Hero_Background.png";

export default function Hero() {
  return (
    <section className="grid min-h-[min(690px,calc(100vh-110px))] grid-cols-[1.1fr_0.9fr] bg-[#e9e3d7] min-[1500px]:min-h-[720px] max-[900px]:min-h-[610px] max-[900px]:grid-cols-[1fr_0.95fr] max-[650px]:min-h-0 max-[650px]:grid-cols-1" aria-labelledby="hero-title">
      <div className="relative min-h-[560px] overflow-hidden bg-[#26392d] after:absolute after:inset-[45%_0_0] after:bg-[linear-gradient(transparent,rgba(20,25,20,0.44))] after:content-[''] max-[900px]:min-h-[610px] max-[650px]:h-[55vw] max-[650px]:min-h-[390px] max-[650px]:max-h-[540px]">
        <img className="h-full w-full object-cover object-center max-[650px]:object-[center_53%]" src={heroImage} alt="A considered outerwear collection in a historic green interior" />
        <span className="absolute bottom-[26px] left-8 z-[1] text-[8px] tracking-[0.14em] text-white uppercase max-[650px]:bottom-[18px] max-[650px]:left-[19px]">A study in lasting form · 01 / 04</span>
      </div>
      <div className="flex flex-col items-start justify-center px-[clamp(42px,6vw,88px)] pt-[62px] pb-[42px] max-[900px]:px-[35px] max-[900px]:pr-[33px] max-[650px]:min-h-[420px] max-[650px]:px-[25px] max-[650px]:pt-[41px] max-[650px]:pb-[22px]">
        <p className="mb-[17px] flex items-center gap-[10px] text-[9px] leading-[1.5] font-semibold tracking-[0.16em] text-primary uppercase max-[650px]:mb-[14px]"><span className="h-px w-[18px] bg-secondary" /> The outerwear collection · 2025</p>
        <h1 className="m-0 font-libre text-[clamp(38px,4.7vw,65px)] leading-[1.08] font-normal tracking-[-0.055em] max-[900px]:text-[53px] max-[650px]:text-[clamp(47px,13vw,64px)]" id="hero-title">Made for<br /><em className="font-normal text-primary">the long way</em><br />home.</h1>
        <p className="mt-[22px] mb-[27px] max-w-[345px] font-source text-[16px] leading-[1.65] text-[#676359] max-[650px]:mt-[17px] max-[650px]:mb-[21px] max-[650px]:max-w-[360px] max-[650px]:text-[15px]">
          Considered layers, honest materials and the kind of craftsmanship
          that only gets better with time.
        </p>
        <div className="flex flex-wrap items-center gap-[26px] max-[650px]:gap-[17px]">
          <a className="inline-flex min-h-[47px] items-center justify-center gap-[17px] border border-transparent bg-primary px-5 text-[9px] font-semibold tracking-[0.08em] text-surface uppercase transition-colors hover:bg-[#174532]" href="/collections">
            Shop the collection <ArrowRight size={15} />
          </a>
          <a className="inline-flex items-center gap-[7px] text-[9px] font-semibold tracking-[0.07em] text-primary uppercase transition-[gap] duration-[180ms] hover:gap-3" href="#our-story">Discover Rewind</a>
        </div>
        <div className="mt-auto flex w-full items-center gap-3 pt-10 text-[8px] tracking-[0.12em] text-[#716c62] uppercase max-[650px]:pt-8">
          <span className="text-secondary">01</span><span className="h-px w-[34px] bg-[#bcb4a7]" />
          <span>Heritage, reimagined.</span>
          <a className="ml-auto grid size-[31px] place-items-center rounded-full border border-[rgba(42,40,37,0.2)] text-primary transition-colors hover:bg-primary hover:text-white" href="#shop-by-category" aria-label="Scroll to shop by category"><ArrowDown size={16} /></a>
        </div>
      </div>
    </section>
  );
}
