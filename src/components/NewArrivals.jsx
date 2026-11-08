import { ArrowLeft, ArrowRight } from "lucide-react";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function NewArrivals({ onNotify }) {
  return (
    <section className="mx-auto w-[min(calc(100%-2*clamp(24px,7vw,104px)),1390px)] pt-[102px] pb-[95px] max-[650px]:w-[calc(100%-38px)] max-[650px]:pt-[71px] max-[650px]:pb-[67px]" id="new-arrivals">
      <div className="mb-[35px] flex items-end justify-between gap-6 max-[650px]:mb-6">
        <div>
          <p className="mb-[14px] flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.16em] text-primary uppercase">Fresh from the workroom</p>
          <h2 className="m-0 font-libre text-[clamp(33px,3.2vw,44px)] font-normal tracking-[-0.055em] max-[650px]:text-[clamp(31px,8vw,40px)]">New, not <em className="font-normal text-primary">for long.</em></h2>
        </div>
        <div className="flex gap-2 max-[650px]:gap-[5px]" aria-label="New arrivals carousel controls">
          {/* TODO: Use a ref to scroll the product row and keep carousel position in state. */}
          <button className="grid size-[39px] cursor-pointer place-items-center rounded-full border border-[rgba(31,92,69,0.35)] bg-transparent text-primary transition-colors hover:bg-primary hover:text-white" type="button" aria-label="Previous products" onClick={() => onNotify("Carousel controls are ready to connect.")}>
            <ArrowLeft size={17} />
          </button>
          <button className="grid size-[39px] cursor-pointer place-items-center rounded-full border border-[rgba(31,92,69,0.35)] bg-transparent text-primary transition-colors hover:bg-primary hover:text-white" type="button" aria-label="Next products" onClick={() => onNotify("Carousel controls are ready to connect.")}>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[17px] max-[650px]:grid-cols-2 max-[650px]:gap-x-[11px] max-[650px]:gap-y-6">
        {products.slice(4, 8).map(product => (
          <ProductCard key={product.id} product={product} onNotify={onNotify} />
        ))}
      </div>
      <p className="mt-6 mb-0 text-center font-source text-[13px] text-[#817a6e] italic">A fresh perspective on the pieces you’ll keep.</p>
    </section>
  );
}
