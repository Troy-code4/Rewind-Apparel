import { useMemo, useState } from "react";
import { ArrowDownUp, ArrowRight } from "lucide-react";
import products from "../data/products";
import ProductCard from "./ProductCard";

const filters = ["All pieces", "Coats", "Jackets", "New arrivals"];

export default function Gallery({ onNotify }) {
  const [category, setCategory] = useState("All pieces");
  const [sortOrder, setSortOrder] = useState("featured");

  const filteredProducts = useMemo(() => {
    const filtered = products.filter(product => {
      if (category === "Coats") return product.category.toLowerCase().includes("coat");
      if (category === "Jackets") return product.category.toLowerCase().includes("jacket");
      if (category === "New arrivals") return product.isNew;
      return true;
    });

    if (sortOrder === "price-low") return [...filtered].sort((a, b) => a.price - b.price);
    if (sortOrder === "price-high") return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [category, sortOrder]);

  return (
    <section className="mx-auto w-[min(calc(100%-2*clamp(24px,7vw,104px)),1390px)] pt-[90px] pb-[78px] max-[650px]:w-[calc(100%-38px)] max-[650px]:py-[66px]" id="collection-shop">
      <div className="mb-9 flex items-end justify-between gap-[30px] max-[650px]:mb-[23px] max-[650px]:block">
        <div>
          <p className="mb-[14px] flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.16em] text-primary uppercase">Good things, made to stay</p>
          <h2 className="m-0 max-w-[660px] font-libre text-[clamp(34px,4vw,49px)] leading-[1.12] font-normal tracking-[-0.045em] max-[650px]:text-[35px]">Find the one you’ll <em className="font-normal text-primary">wear on repeat.</em></h2>
        </div>
        <p className="mb-1 max-w-[345px] font-source text-[15px] leading-[1.6] text-[#746f65] max-[650px]:mt-[13px] max-[650px]:text-[14px]">From the first cold morning to the last train home: meet the pieces that make getting dressed feel easy.</p>
      </div>
      <div className="flex min-h-[58px] items-center justify-between gap-5 border-y border-[rgba(42,40,37,0.15)] max-[650px]:items-start max-[650px]:flex-col max-[650px]:gap-0 max-[650px]:border-0">
        <div className="flex h-[58px] items-stretch gap-[clamp(17px,3vw,43px)] max-[650px]:h-auto max-[650px]:w-full max-[650px]:gap-5 max-[650px]:overflow-x-auto" aria-label="Filter products by category">
          {filters.map(filter => (
            <button
              type="button"
              className={`relative cursor-pointer border-0 bg-transparent p-0 text-[9px] font-semibold tracking-[0.09em] uppercase transition-colors hover:text-primary max-[650px]:min-h-12 max-[650px]:shrink-0 max-[650px]:text-[8px] ${category === filter ? "text-primary after:absolute after:right-0 after:bottom-[-1px] after:left-0 after:h-0.5 after:bg-secondary max-[650px]:after:bottom-0" : "text-[#777166]"}`}
              aria-pressed={category === filter}
              key={filter}
              onClick={() => setCategory(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-[7px] text-primary max-[650px]:min-h-10 max-[650px]:self-end">
          <ArrowDownUp size={14} />
          <span className="sr-only">Sort products</span>
          <select className="max-w-[155px] cursor-pointer border-0 bg-transparent py-2 text-[9px] text-tertiary" value={sortOrder} onChange={event => setSortOrder(event.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </label>
      </div>
      <div className="flex justify-between py-[17px] pb-5 text-[8px] tracking-[0.1em] text-[#817a6e] uppercase max-[650px]:pt-[14px]" aria-live="polite">
        <span className="text-tertiary">{filteredProducts.length} considered pieces</span>
        <span>{category}</span>
      </div>
      <div className="grid grid-cols-4 gap-x-[17px] gap-y-[35px] max-[650px]:grid-cols-2 max-[650px]:gap-y-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onNotify={onNotify} />
        ))}
      </div>
      <div className="mt-[45px] flex items-center justify-between gap-5 border-t border-[rgba(42,40,37,0.15)] pt-[19px] max-[650px]:mt-[31px] max-[650px]:items-start max-[650px]:flex-col">
        <p className="m-0 font-source text-[14px] text-[#746f65] italic">Good things take time. These are made to be kept.</p>
        <a className="inline-flex items-center gap-[7px] text-[9px] font-semibold tracking-[0.07em] text-primary uppercase transition-[gap] duration-[180ms] hover:gap-3" href="/contact">Need a hand choosing? <ArrowRight size={14} /></a>
      </div>
    </section>
  );
}
