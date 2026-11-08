import { ArrowUpRight } from "lucide-react";

const footerGroups = [
  {
    title: "Shop",
    links: [
      ["Coats", "/collections"],
      ["Jackets", "/collections"],
      ["New arrivals", "/collections"],
      ["All collections", "/collections"],
    ],
  },
  {
    title: "Help",
    links: [
      ["Delivery & returns", "/contact"],
      ["Size guide", "/contact"],
      ["Care guide", "/journal"],
      ["Get in touch", "/contact"],
    ],
  },
  {
    title: "The house",
    links: [
      ["Our story", "/journal"],
      ["The journal", "/journal"],
      ["The atelier", "/contact"],
      ["Instagram", "https://www.instagram.com/"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#193f32] px-[clamp(24px,7vw,104px)] pt-[62px] text-surface">
      <div className="grid grid-cols-[1.6fr_repeat(3,1fr)] gap-[45px] pb-[52px] max-[650px]:grid-cols-2 max-[650px]:gap-8">
        <div>
          <a className="inline-flex w-max flex-col items-start text-surface" href="/" aria-label="Rewind Apparel home">
            <span className="font-libre text-[27px] leading-none tracking-[0.09em]">REWIND</span><small className="mt-[5px] text-[7px] font-semibold tracking-[0.23em]">APPAREL · EST. 1924</small>
          </a>
          <p className="my-[17px] mb-[19px] max-w-[220px] font-source text-[14px] leading-[1.55] text-[rgba(245,241,232,0.69)]">Thoughtful outerwear for everywhere life takes you.</p>
          <a href="https://www.instagram.com/" className="inline-flex items-center gap-1 text-[9px] font-semibold tracking-[0.08em] text-[#e7c982] uppercase transition-colors hover:text-white">
            Instagram <ArrowUpRight size={13} />
          </a>
        </div>
        {footerGroups.map(group => (
          <div className="flex flex-col items-start gap-3" key={group.title}>
            <h3 className="mb-[6px] text-[9px] font-semibold tracking-[0.15em] text-[#d7bd77] uppercase">{group.title}</h3>
            {group.links.map(([label, href]) => (
              <a className="font-source text-[13px] text-[rgba(245,241,232,0.76)] transition-colors hover:text-white" href={href} key={label}>{label}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="flex min-h-[55px] items-center justify-between gap-5 border-t border-[rgba(245,241,232,0.18)] text-[8px] tracking-[0.06em] text-[rgba(245,241,232,0.6)] max-[650px]:flex-wrap max-[650px]:py-3">
        <span>© 2025 Rewind Apparel. All rights reserved.</span>
        <span>Made with care, worn your way.</span>
        <div className="flex gap-[17px]"><a className="text-[8px] text-[rgba(245,241,232,0.76)] transition-colors hover:text-white" href="/contact">Privacy</a><a className="text-[8px] text-[rgba(245,241,232,0.76)] transition-colors hover:text-white" href="/contact">Terms</a></div>
      </div>
    </footer>
  );
}
