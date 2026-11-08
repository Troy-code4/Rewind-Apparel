import { ArrowRight } from "lucide-react";

export default function Newsletter({ onNotify }) {
  function handleSubmit(event) {
    event.preventDefault();
    // TODO: Add newsletter email validation and subscription handling.
    onNotify("Thanks for stopping by. Newsletter sign-up is a demo for now.");
  }

  return (
    <section className="grid grid-cols-[1fr_0.9fr] items-center gap-[50px] bg-[#e8e2d5] px-[clamp(24px,9vw,140px)] py-16 max-[900px]:gap-[30px] max-[900px]:px-[7vw] max-[650px]:grid-cols-1 max-[650px]:gap-7 max-[650px]:py-[50px]">
      <div>
        <p className="mb-[14px] flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.16em] text-primary uppercase">A note from Rewind</p>
        <h2 className="m-0 max-w-[540px] font-libre text-[clamp(30px,3.2vw,43px)] leading-[1.08] font-normal tracking-[-0.055em]">Good things come <em className="font-normal text-primary">to those who subscribe.</em></h2>
        <p className="mt-[13px] mb-0 font-source text-[14px] text-[#746f65]">First looks, considered stories and 10% off your first order.</p>
      </div>
      <form className="grid grid-cols-[1fr_auto] items-center border-b border-primary" onSubmit={handleSubmit} noValidate>
        <label className="sr-only" htmlFor="newsletter-email">Email address</label>
        {/* TODO: Make email a controlled input with useState and validate it on submit. */}
        <input className="h-[49px] min-w-0 border-0 bg-transparent font-source text-[15px] outline-0 placeholder:text-[#817a6e]" id="newsletter-email" name="email" type="email" placeholder="Your email address" />
        <button className="inline-flex cursor-pointer items-center gap-[9px] border-0 bg-transparent py-[11px] pl-[14px] text-[9px] font-semibold tracking-[0.08em] text-primary uppercase" type="submit" aria-label="Subscribe to the newsletter">Sign me up <ArrowRight size={16} /></button>
        <small className="col-span-full py-[9px] pb-[13px] text-[8px] text-[#8b8478]">By subscribing, you agree to receive the occasional note from us.</small>
      </form>
    </section>
  );
}
