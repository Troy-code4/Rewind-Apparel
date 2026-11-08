import { Heart, Plus } from "lucide-react";

export default function ProductCard({ product, onNotify }) {
  const { id, name, image, price, isNew, category } = product;

  return (
    <article className='group min-w-0'>
      <div className='relative overflow-hidden bg-[#e8e2d7]'>
        <a
          className='block aspect-[0.79] overflow-hidden max-[650px]:aspect-[0.73]'
          href={`/product/${id}`}
          aria-label={`View ${name}`}>
          <img
            className='h-full w-full object-cover object-[center_32%] transition-transform duration-500 ease-[cubic-bezier(0.2,0.65,0.3,1)] group-hover:scale-[1.04]'
            src={image}
            alt={name}
          />
        </a>
        {isNew && (
          <span className='absolute top-3.25 left-3.25 bg-surface px-2.25 py-1.75 text-[8px] font-semibold tracking-[0.07em] text-primary uppercase max-[650px]:top-2 max-[650px]:left-2 max-[650px]:p-1.5 max-[650px]:text-[7px]'>
            Just arrived
          </span>
        )}
        <button
          className='absolute top-2.75 right-2.75 grid size-8.5 cursor-pointer place-items-center rounded-full border-0 bg-[rgba(245,241,232,0.94)] text-tertiary transition-[color,transform] duration-180 hover:scale-[1.06] hover:text-[#9c3d36] max-[650px]:top-1.75 max-[650px]:right-1.75 max-[650px]:size-7.75'
          type='button'
          aria-label={`Save ${name} to wishlist`}
          onClick={() => onNotify("Wishlist is ready for you to connect.")}>
          {/* TODO: Lift wishlist state to a shared parent/context and toggle immutably. */}
          <Heart size={17} />
        </button>
        <button
          className='absolute right-2.75 bottom-2.75 left-2.75 flex min-h-10.5 translate-y-2 items-center justify-center gap-1.75 border-0 bg-[rgba(245,241,232,0.96)] text-[9px] font-semibold tracking-[0.08em] text-tertiary uppercase opacity-0 transition-[opacity,transform,background,color] duration-180 group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100 hover:bg-primary hover:text-white max-[650px]:right-1.5 max-[650px]:bottom-1.5 max-[650px]:left-1.5 max-[650px]:min-h-9.25 max-[650px]:translate-y-0 max-[650px]:text-[8px] max-[650px]:opacity-100'
          type='button'
          onClick={() =>
            onNotify(`${name} — connect this button to your bag.`)
          }>
          <Plus size={16} /> Quick add
        </button>
      </div>
      <div className='flex justify-between gap-2.5 pt-3.5 max-[650px]:gap-1.25 max-[650px]:pt-2.5'>
        <div>
          <a
            href={`/product/${id}`}
            className='font-source text-[15px] transition-colors hover:text-primary max-[650px]:text-[13px]'>
            {name}
          </a>
          <p className='mt-1 mb-0 text-[8px] tracking-[0.09em] text-[#8b8478] uppercase max-[650px]:text-[7px]'>
            {category}
          </p>
        </div>
        <span className='shrink-0 pt-0.5 text-[11px] font-medium whitespace-nowrap max-[650px]:text-[10px]'>
          £{price}
        </span>
      </div>
    </article>
  );
}
