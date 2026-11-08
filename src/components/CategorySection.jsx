import { ArrowUpRight } from "lucide-react";
import coatsImage from "../assets/pexels-guney-akcay-271956164-30951487.jpg";
import jacketsImage from "../assets/centre-for-ageing-better-oIAr3Hepn3I-unsplash.jpg";
import arrivalsImage from "../assets/Legacy_Background_2.jpg";

const categories = [
  { name: "Coats", note: "The forever layer", image: coatsImage, className: "category-tall" },
  { name: "Jackets", note: "Everyday, elevated", image: jacketsImage, className: "" },
  { name: "New arrivals", note: "Just found their way in", image: arrivalsImage, className: "" },
];

export default function CategorySection() {
  return (
    <section className="mx-auto w-[min(calc(100%-2*clamp(24px,7vw,104px)),1390px)] py-[100px] pb-[96px] max-[650px]:w-[calc(100%-38px)] max-[650px]:py-[68px]" id="shop-by-category">
      <div className="mb-[35px] flex items-end justify-between gap-6 max-[650px]:mb-6 max-[650px]:items-start max-[650px]:flex-col max-[650px]:gap-[15px]">
        <div>
          <p className="mb-[14px] flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.16em] text-primary uppercase">Find your layer</p>
          <h2 className="m-0 font-libre text-[clamp(33px,3.2vw,44px)] leading-[1.08] font-normal tracking-[-0.055em] max-[650px]:text-[clamp(31px,8vw,40px)]">Good things, <em className="font-normal text-primary">in season.</em></h2>
        </div>
        <a className="inline-flex items-center gap-[7px] text-[9px] font-semibold tracking-[0.07em] text-primary uppercase transition-[gap] duration-[180ms] hover:gap-3" href="/collections">Shop all collections <ArrowUpRight size={15} /></a>
      </div>
      <div className="grid h-[405px] grid-cols-[1.12fr_1fr_1fr] gap-[15px] max-[900px]:h-[345px] max-[900px]:gap-[11px] max-[650px]:h-auto max-[650px]:grid-cols-2 max-[650px]:gap-[10px]">
        {categories.map((category, index) => (
          <a className={`group relative min-w-0 overflow-hidden bg-[#ddd6c9] after:absolute after:inset-[35%_0_0] after:bg-[linear-gradient(transparent,rgba(14,21,17,0.62))] after:content-[''] ${category.className === "category-tall" ? "max-[650px]:col-span-2 max-[650px]:min-h-[330px]" : "max-[650px]:min-h-[240px]"}`} href="/collections" key={category.name}>
            <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.2,0.65,0.3,1)] group-hover:scale-[1.045]" src={category.image} alt={`Shop ${category.name.toLowerCase()}`} />
            <span className="absolute top-[19px] left-5 z-[1] text-[8px] tracking-[0.12em] text-white">0{index + 1}</span>
            <span className="absolute bottom-[26px] left-[25px] z-[1] flex flex-col gap-[5px] text-white max-[650px]:bottom-[18px] max-[650px]:left-[17px]">
              <small className="font-source text-[13px]">{category.note}</small><strong className="font-libre text-[27px] font-normal max-[650px]:text-2xl">{category.name}</strong>
            </span>
            <span className="absolute right-5 bottom-6 z-[1] grid size-[35px] place-items-center rounded-full border border-[rgba(255,255,255,0.6)] text-white transition-transform duration-[180ms] group-hover:rotate-45 group-hover:bg-surface group-hover:text-primary max-[650px]:right-[13px] max-[650px]:bottom-[15px] max-[650px]:size-[30px]"><ArrowUpRight size={18} /></span>
          </a>
        ))}
      </div>
    </section>
  );
}
