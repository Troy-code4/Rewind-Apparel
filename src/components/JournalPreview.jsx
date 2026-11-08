import { ArrowRight, ArrowUpRight } from "lucide-react";
import heritageImage from "../assets/Legacy_Background_3.jpg";
import tailoringImage from "../assets/pexels-hbharun-4052692.jpg";
import fieldImage from "../assets/pexels-guney-akcay-271956164-30951487.jpg";

const stories = [
  { category: "The archive", title: "A coat for every kind of weather", image: heritageImage, date: "08.10.25" },
  { category: "In good hands", title: "The details that make a difference", image: tailoringImage, date: "24.09.25" },
  { category: "Out of office", title: "A slower weekend, well dressed", image: fieldImage, date: "12.09.25" },
];

export default function JournalPreview() {
  return (
    <section className="mx-auto w-[min(calc(100%-2*clamp(24px,7vw,104px)),1390px)] py-[106px] max-[650px]:w-[calc(100%-38px)] max-[650px]:py-[68px]">
      <div className="mb-[35px] flex items-end justify-between gap-6 max-[650px]:mb-6">
        <div>
          <p className="mb-[14px] flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.16em] text-primary uppercase">Notes from the Rewind world</p>
          <h2 className="m-0 font-libre text-[clamp(33px,3.2vw,44px)] font-normal tracking-[-0.055em] max-[650px]:text-[clamp(31px,8vw,40px)]">A good read, <em className="font-normal text-primary">well worn.</em></h2>
        </div>
        <a className="inline-flex items-center gap-[7px] text-[9px] font-semibold tracking-[0.07em] text-primary uppercase transition-[gap] duration-[180ms] hover:gap-3" href="/journal">View the journal <ArrowUpRight size={15} /></a>
      </div>
      <div className="grid grid-cols-3 gap-[19px] max-[650px]:grid-cols-1">
        {stories.map(story => (
          <a className="group" href="/journal" key={story.title}>
            <div className="relative aspect-[1.31] overflow-hidden bg-[#e5dfd4]">
              <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.2,0.65,0.3,1)] group-hover:scale-[1.045]" src={story.image} alt="" />
              <span className="absolute right-[13px] bottom-[13px] grid size-[34px] place-items-center rounded-full bg-surface text-primary transition-colors group-hover:bg-primary group-hover:text-white"><ArrowRight size={16} /></span>
            </div>
            <div className="mt-4 flex justify-between text-[8px] font-semibold tracking-[0.12em] text-primary uppercase"><span>{story.category}</span><time className="font-normal text-[#8d8679]">{story.date}</time></div>
            <h3 className="mt-[9px] max-w-[330px] font-libre text-[21px] leading-[1.3] font-normal">{story.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
