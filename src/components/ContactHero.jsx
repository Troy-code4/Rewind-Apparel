import { Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
  { icon: Mail, value: "care@rewindapparel.com", href: "mailto:care@rewindapparel.com" },
  { icon: MapPin, value: "12 Conduit Street, Mayfair, London W1S 2XG", href: "https://maps.google.com/?q=12+Conduit+Street+London" },
  { icon: Phone, value: "+44 (0) 20 7946 0128", href: "tel:+442079460128" },
];

export default function ContactHero() {
  return (
    <section className="flex min-h-0 flex-col justify-between bg-transparent p-0">
      <div>
        <h1 className="m-0 font-montserrat text-[clamp(36px,4vw,49px)] leading-[1.05] font-bold tracking-[-0.055em] text-[#171717] max-[650px]:text-[clamp(39px,11vw,48px)]">Here for<br />Every Detail</h1>
        <p className="mt-[18px] mb-0 max-w-[430px] font-montserrat text-[15px] leading-[1.65] text-[#88837e] max-[650px]:mt-[14px] max-[650px]:max-w-[450px] max-[650px]:text-[13px]">
          Questions about your order or a piece you love? We’re here to make
          every part of your Rewind experience seamless.
        </p>
      </div>
      <div className="mt-10 grid gap-[13px] max-[650px]:mt-[23px] max-[650px]:gap-[10px]">
        {contactDetails.map(({ icon: Icon, value, href }) => (
          <a className="flex min-h-[33px] items-center gap-3 font-montserrat text-[12px] leading-[1.4] text-[#343230] transition-colors hover:text-primary max-[650px]:text-[11px]"
            href={href}
            key={value}
            target={href.startsWith("https") ? "_blank" : undefined}
            rel={href.startsWith("https") ? "noreferrer" : undefined}
          >
            <span className="grid size-[33px] shrink-0 place-items-center rounded-full border border-[#e8e7e5] bg-[#fbfbfa] text-[#77736e]"><Icon size={15} /></span>
            <span className="block">{value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
