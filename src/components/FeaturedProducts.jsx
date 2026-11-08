import { ArrowRight } from "lucide-react";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts({ onNotify }) {
  return (
    <section
      className='mx-auto w-[min(calc(100%-2*clamp(24px,7vw,104px)),1390px)] pt-1.25 pb-26.25 max-[650px]:w-[calc(100%-38px)] max-[650px]:pt-0 max-[650px]:pb-18.25'
      id='featured'>
      <div className='mb-8.75 flex items-end justify-between gap-6 max-[650px]:mb-6 max-[650px]:items-end'>
        <div>
          <p className='mb-3.5 flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.16em] text-primary uppercase'>
            The Rewind edit
          </p>
          <h2 className='m-0 font-libre text-[clamp(33px,3.2vw,44px)] font-normal tracking-[-0.055em] max-[650px]:text-[clamp(31px,8vw,40px)]'>
            Worth keeping <em className='font-normal text-primary'>close.</em>
          </h2>
        </div>
        <p className='mb-1 max-w-55 font-source text-[14px] leading-normal text-[#746f65] max-[650px]:hidden'>
          Four considered pieces. Made to be worn on repeat.
        </p>
      </div>
      <div className='grid grid-cols-4 gap-4.25 max-[650px]:grid-cols-2 max-[650px]:gap-x-2.75 max-[650px]:gap-y-6'>
        {products.slice(0, 4).map(product => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              onNotify={onNotify}
            />
          );
        })}
      </div>
      <a
        className='mx-auto mt-9.5 flex w-max min-h-11.75 items-center justify-center gap-4.25 border border-primary px-5 text-[9px] font-semibold tracking-[0.08em] text-primary uppercase transition-colors hover:bg-primary hover:text-surface max-[650px]:mt-7'
        href='/collections'>
        View all collections <ArrowRight size={15} />
      </a>
    </section>
  );
}
