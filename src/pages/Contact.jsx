import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <main className="min-h-[610px] bg-white max-[650px]:min-h-0">
      <div className="mx-auto grid min-h-[600px] w-[min(calc(100%-2*clamp(26px,10vw,150px)),1050px)] grid-cols-2 items-stretch gap-[clamp(38px,7vw,90px)] py-[70px] pb-[62px] max-[650px]:min-h-0 max-[650px]:w-[calc(100%-38px)] max-[650px]:grid-cols-1 max-[650px]:gap-[31px] max-[650px]:py-[42px] max-[650px]:pb-[55px]">
        <ContactHero />
        <ContactForm />
      </div>
    </main>
  );
}

export default Contact;
