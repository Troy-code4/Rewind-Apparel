import { ArrowRight, ArrowUpRight } from "lucide-react";
import archiveImage from "../assets/Legacy_Background_3.jpg";
import tailoringImage from "../assets/pexels-hbharun-4052692.jpg";
import weekendImage from "../assets/pexels-guney-akcay-271956164-30951487.jpg";
import atelierImage from "../assets/centre-for-ageing-better-oIAr3Hepn3I-unsplash.jpg";

const stories = [
  {
    category: "The archive",
    date: "08 October 2025",
    title: "A coat for every kind of weather",
    description: "A few thoughts on dressing for the in-between days, and the pieces that make them feel like yours.",
    image: archiveImage,
    imageAlt: "A tailored coat in the city",
    readingTime: "5 min read",
  },
  {
    category: "In good hands",
    date: "24 September 2025",
    title: "The details that make a difference",
    description: "Inside the finishing touches, natural cloth and careful hands behind a Rewind outer layer.",
    image: tailoringImage,
    imageAlt: "A close look at a wool outerwear piece",
    readingTime: "4 min read",
  },
  {
    category: "Out of office",
    date: "12 September 2025",
    title: "A slower weekend, well dressed",
    description: "A change of pace, a good walk, and the simple pleasure of wearing something well made.",
    image: weekendImage,
    imageAlt: "A weekend outerwear look outdoors",
    readingTime: "3 min read",
  },
  {
    category: "Made personal",
    date: "29 August 2025",
    title: "A more personal kind of tailoring",
    description: "Meet the Rewind Atelier: a thoughtful process for making a piece that feels entirely your own.",
    image: atelierImage,
    imageAlt: "A made-to-measure outerwear look",
    readingTime: "6 min read",
  },
];

export default function Journal() {
  return (
    <main>
      <section className="relative grid min-h-[520px] grid-cols-[0.9fr_1.1fr] items-center gap-[clamp(35px,7vw,100px)] bg-[#e9e3d7] px-[clamp(24px,8vw,120px)] pt-[55px] pb-[74px] max-[650px]:min-h-0 max-[650px]:grid-cols-1 max-[650px]:gap-[27px] max-[650px]:px-5 max-[650px]:pt-[55px] max-[650px]:pb-[63px]">
        <div>
          <p className="mb-[17px] flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.16em] text-[#e2c47a] uppercase">A journal by Rewind Apparel</p>
          <h1 className="m-0 font-libre text-[clamp(43px,5.3vw,68px)] leading-[1.05] font-normal tracking-[-0.055em] max-[650px]:text-[clamp(44px,12vw,58px)]">Things worth<br /><em className="font-normal text-primary">taking time over.</em></h1>
          <p className="my-[19px] mb-[25px] max-w-[370px] font-source text-[16px] leading-[1.65] text-[#69665d] max-[650px]:mt-[14px] max-[650px]:mb-[19px] max-[650px]:text-[14px]">Notes on the clothes we keep, the hands that make them, and a life well worn.</p>
          <a className="inline-flex min-h-[47px] items-center justify-center gap-[17px] border border-transparent bg-primary px-5 text-[9px] font-semibold tracking-[0.08em] text-surface uppercase transition-colors hover:bg-[#174532]" href="#journal-stories">Read our latest <ArrowRight size={15} /></a>
        </div>
        <a className="group relative h-[min(39vw,430px)] min-h-[365px] overflow-hidden bg-[#ddd6c9] max-[650px]:h-[68vw] max-[650px]:min-h-0 max-[650px]:max-h-[390px]" href="#journal-stories" aria-label="Read our story about the Rewind archive">
          <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-[550ms] group-hover:scale-[1.04]" src={archiveImage} alt="A Rewind outerwear look in the city" />
          <span className="absolute right-[15px] bottom-[15px] bg-surface px-3 py-[10px] text-[8px] tracking-[0.1em] text-tertiary uppercase">From the Rewind archive · Autumn 2025</span>
        </a>
        <div className="absolute right-[clamp(24px,8vw,120px)] bottom-[23px] left-[clamp(24px,8vw,120px)] flex justify-between border-t border-[rgba(42,40,37,0.17)] pt-[10px] text-[8px] tracking-[0.12em] text-[#817a6e] max-[650px]:right-5 max-[650px]:bottom-[19px] max-[650px]:left-5 max-[650px]:text-[7px]">THE REWIND JOURNAL <span>VOL. 01 — 2025</span></div>
      </section>

      <section className="mx-auto w-[min(calc(100%-2*clamp(24px,7vw,104px)),1390px)] pt-[84px] pb-[96px] max-[650px]:w-[calc(100%-38px)] max-[650px]:pt-[65px] max-[650px]:pb-[68px]" id="journal-stories">
        <div className="mb-[35px] flex items-end justify-between gap-6 max-[650px]:mb-6 max-[650px]:items-start max-[650px]:flex-col max-[650px]:gap-3">
          <div>
            <p className="mb-[14px] flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.16em] text-primary uppercase">Field notes & considered things</p>
            <h2 className="m-0 font-libre text-[clamp(33px,3.2vw,44px)] font-normal tracking-[-0.055em] max-[650px]:text-[clamp(31px,8vw,40px)]">Stories to <em className="font-normal text-primary">come back to.</em></h2>
          </div>
          <span className="text-[8px] tracking-[0.1em] text-[#817a6e] uppercase max-[650px]:text-[7px]">01 — 04 / THE JOURNAL</span>
        </div>
        <div className="grid grid-cols-2 gap-x-7 gap-y-12 max-[650px]:grid-cols-1 max-[650px]:gap-y-[33px]">
          {stories.map((story, index) => (
            <article className={`group relative min-w-0 ${index === 0 ? "col-span-full grid grid-cols-[1.1fr_0.9fr] items-center gap-x-[clamp(28px,6vw,82px)] gap-y-0 max-[650px]:col-auto max-[650px]:block" : ""}`} key={story.title}>
              <a className={`relative block aspect-[1.45] overflow-hidden bg-[#e5dfd4] ${index === 0 ? "row-span-6 aspect-[1.34] max-[650px]:row-span-auto max-[650px]:aspect-[1.2]" : "max-[650px]:aspect-[1.38]"}`} href="/collections" aria-label={`Explore ${story.title}`}>
                <img className="h-full w-full object-cover transition-transform duration-[550ms] group-hover:scale-[1.04]" src={story.image} alt={story.imageAlt} />
                <span className="absolute right-[14px] bottom-[14px] grid size-9 place-items-center rounded-full bg-surface text-primary transition-colors group-hover:bg-primary group-hover:text-white"><ArrowUpRight size={16} /></span>
              </a>
              <div className="mt-4 flex justify-between gap-3 text-[8px] font-semibold tracking-[0.12em] text-primary uppercase">
                <span>{story.category}</span><time className="shrink-0 font-normal text-[#8d8679]">{story.date}</time>
              </div>
              <h3 className="mt-[11px] mb-0 font-libre text-[clamp(23px,2.5vw,31px)] leading-[1.23] font-normal tracking-[-0.03em] max-[650px]:text-[25px]">{story.title}</h3>
              <p className="my-3 mb-[17px] font-source text-[14px] leading-[1.6] text-[#746f65]">{story.description}</p>
              <a className="inline-flex items-center gap-[7px] text-[9px] font-semibold tracking-[0.07em] text-primary uppercase transition-[gap] duration-[180ms] hover:gap-3" href="/collections">Explore the collection <ArrowRight size={14} /></a>
              <span className="mt-[17px] block text-[8px] tracking-[0.1em] text-[#817a6e] uppercase">{story.readingTime}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="flex min-h-[300px] flex-col items-center justify-center bg-[#e9e3d7] px-[22px] py-[50px] text-center max-[650px]:min-h-[260px]">
        <p className="mb-[17px] flex items-center justify-center gap-2.5 text-[9px] font-semibold tracking-[0.16em] text-primary uppercase">A note from the house</p>
        <h2 className="mb-[22px] font-libre text-[clamp(31px,4vw,48px)] leading-[1.18] font-normal tracking-[-0.04em] max-[650px]:text-[34px]">“The best things are<br /><em className="font-normal text-primary">better with a little time.”</em></h2>
        <a className="inline-flex items-center gap-[7px] text-[9px] font-semibold tracking-[0.07em] text-primary uppercase transition-[gap] duration-[180ms] hover:gap-3" href="/collections">Find your forever layer <ArrowRight size={14} /></a>
      </section>
    </main>
  );
}
