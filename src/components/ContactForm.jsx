import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: Add field-level validation and connect this form to a real endpoint.
    setSubmitted(true);
  }

  return (
    <section className="w-full self-start rounded-[17px] border border-[#e8e7e5] bg-[#f7f7f6] px-[35px] py-[31px] pb-[34px] shadow-[0_1px_3px_rgba(33,30,26,0.035)] max-[650px]:rounded-[14px] max-[650px]:px-5 max-[650px]:py-[23px] max-[650px]:pb-[25px]" aria-label="Send us a message">
      {submitted ? (
        <div className="flex min-h-[250px] items-center gap-[15px] rounded-xl border-l-2 border-primary bg-[#e9e3d7] p-6 max-[650px]:flex-wrap max-[650px]:p-[18px]" role="status">
          <span className="grid size-[35px] shrink-0 place-items-center rounded-full bg-primary text-white"><Check size={18} /></span>
          <div>
            <strong className="font-libre text-xl font-normal">Thank you for getting in touch.</strong>
            <p className="mt-[7px] mb-0 font-source text-[14px] text-[#746f65]">This demo form isn’t connected to a support inbox yet. Please email care@rewindapparel.com to reach our team.</p>
          </div>
          <button className="ml-auto cursor-pointer border-0 bg-transparent py-2 text-[8px] font-semibold tracking-[0.07em] text-primary uppercase max-[650px]:ml-[50px] max-[650px]:w-full max-[650px]:text-left" type="button" onClick={() => setSubmitted(false)}>Send another message</button>
        </div>
      ) : (
        <form className="grid gap-[18px] max-[650px]:gap-4" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-[11px] font-medium text-[#383633]">
            Full Name
            <input className="h-[42px] w-full rounded-[11px] border border-[#e5e4e2] bg-white px-[13px] font-montserrat text-[11px] font-normal text-tertiary transition-colors placeholder:text-[#77736e] focus:border-[#9c9a95] max-[650px]:text-xs" autoComplete="name" name="name" placeholder="Your full name" required />
          </label>
          <label className="grid gap-2 text-[11px] font-medium text-[#383633]">
            Email Address
            <input className="h-[42px] w-full rounded-[11px] border border-[#e5e4e2] bg-white px-[13px] font-montserrat text-[11px] font-normal text-tertiary transition-colors placeholder:text-[#77736e] focus:border-[#9c9a95] max-[650px]:text-xs" autoComplete="email" name="email" type="email" placeholder="you@example.com" required />
          </label>
          <label className="grid gap-2 text-[11px] font-medium text-[#383633]">
            Phone Number
            <input className="h-[42px] w-full rounded-[11px] border border-[#e5e4e2] bg-white px-[13px] font-montserrat text-[11px] font-normal text-tertiary transition-colors placeholder:text-[#77736e] focus:border-[#9c9a95] max-[650px]:text-xs" autoComplete="tel" name="phone" type="tel" placeholder="+44" />
          </label>
          <label className="grid gap-2 text-[11px] font-medium text-[#383633]">
            Message
            <textarea className="min-h-[94px] w-full resize-y rounded-[11px] border border-[#e5e4e2] bg-white px-[13px] pt-[11px] font-montserrat text-[11px] leading-[1.5] font-normal text-tertiary transition-colors placeholder:text-[#77736e] focus:border-[#9c9a95] max-[650px]:text-xs" name="message" rows="4" placeholder="Tell us about your inquiry, sizing questions, or order details..." required />
          </label>
          <div className="mt-1 flex items-center justify-between gap-5">
            <button className="inline-flex min-h-10 cursor-pointer items-center justify-center gap-[9px] rounded-full border-0 bg-[#171717] px-5 font-montserrat text-[10px] font-semibold text-white transition-colors hover:bg-primary" type="submit">Send Message <ArrowRight size={15} /></button>
          </div>
        </form>
      )}
    </section>
  );
}
