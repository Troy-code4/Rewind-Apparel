import { useState } from "react";
import {
  ArrowUpRight,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
} from "lucide-react";
import products from "../data/products";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [accountOpen, setAccountOpen] = useState(false);

  // TODO: Use useRef + useEffect to focus search and close overlays on Escape;
  // remove the key listener in the effect cleanup.
  // TODO: Replace these anchors with NavLink to style the active route.
  const searchResults = searchTerm.trim()
    ? products.filter(product =>
        `${product.name} ${product.category}`
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase()),
      )
    : [];

  function closeOverlays() {
    setMenuOpen(false);
    setSearchOpen(false);
    setAccountOpen(false);
  }

  return (
    <>
      <div className='flex min-h-7.75 items-center justify-center gap-5.75 bg-primary px-6 py-1.25 text-[9px] font-medium tracking-[0.09em] text-[#f5f1e8] uppercase max-[650px]:min-h-7.5 max-[650px]:px-2.5 max-[650px]:text-[8px] max-[650px]:tracking-[0.045em]'>
        <span>Complimentary UK delivery on orders over £250</span>
        <a
          className='inline-flex items-center gap-1 text-[#e7c982] transition-colors hover:text-white max-[650px]:hidden'
          href='/collections'>
          Explore the new season <ArrowUpRight size={12} />
        </a>
      </div>
      <header className='sticky top-0 z-40 grid min-h-19.75 grid-cols-[1fr_auto_1fr] items-center border-b border-[rgba(42,40,37,0.09)] bg-[rgba(245,241,232,0.96)] px-[clamp(24px,5.5vw,88px)] backdrop-blur-[14px] max-[900px]:px-6.25 max-[650px]:min-h-16.5 max-[650px]:px-4.25'>
        <button
          className='hidden min-w-7.5 min-h-9 items-center justify-center border-0 bg-transparent p-0 transition-colors hover:text-primary max-[650px]:inline-flex max-[650px]:justify-self-start'
          type='button'
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <a
          className='inline-flex w-max flex-col items-center text-primary'
          href='/'
          aria-label='Rewind Apparel home'>
          <span className='font-libre text-[25px] leading-none tracking-[0.09em] max-[650px]:text-[22px]'>
            REWIND
          </span>
          <small className='mt-1.25 text-[7px] font-semibold tracking-[0.23em]'>
            APPAREL · EST. 1924
          </small>
        </a>
        <nav
          className={`flex items-center gap-[clamp(24px,3.2vw,48px)] max-[900px]:gap-4.75 max-[650px]:absolute max-[650px]:top-full max-[650px]:right-0 max-[650px]:left-0 max-[650px]:z-62 max-[650px]:flex-col max-[650px]:items-stretch max-[650px]:gap-0 max-[650px]:bg-surface max-[650px]:px-5.75 max-[650px]:pt-2 max-[650px]:pb-5 max-[650px]:shadow-[0_12px_25px_rgba(34,30,22,0.08)] max-[650px]:transition-[opacity,transform] max-[650px]:duration-180 ${menuOpen ? "max-[650px]:pointer-events-auto max-[650px]:translate-y-0 max-[650px]:opacity-100" : "max-[650px]:pointer-events-none max-[650px]:-translate-y-1.75 max-[650px]:opacity-0"}`}>
          {navLinks.map(link => (
            <a
              className='relative py-2.25 text-[10px] font-semibold tracking-[0.09em] text-[#393832] uppercase after:absolute after:right-0 after:bottom-0.75 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-180 hover:after:scale-x-100 max-[650px]:border-b max-[650px]:border-[rgba(42,40,37,0.1)] max-[650px]:py-3.75 max-[650px]:text-[11px] max-[650px]:after:hidden'
              href={link.href}
              key={link.label}
              onClick={closeOverlays}>
              {link.label}
            </a>
          ))}
          <a
            className='hidden items-center gap-2 pt-4.25 text-[10px] font-semibold tracking-[0.08em] text-primary uppercase max-[650px]:flex'
            href='/collections'
            onClick={closeOverlays}>
            Shop all <ArrowUpRight size={14} />
          </a>
        </nav>
        <div className='flex items-center justify-self-end gap-4.75 max-[900px]:gap-2.5 max-[650px]:gap-2'>
          <button
            className='inline-flex min-w-7.5 min-h-9 items-center justify-center border-0 bg-transparent p-0 transition-colors hover:text-primary'
            type='button'
            aria-label='Search products'
            aria-expanded={searchOpen}
            onClick={() => {
              setSearchOpen(open => !open);
              setMenuOpen(false);
              setAccountOpen(false);
            }}>
            {searchOpen ? <X size={19} /> : <Search size={19} />}
          </button>
          <div className='relative'>
            <button
              className='inline-flex min-w-7.5 min-h-9 items-center justify-center border-0 bg-transparent p-0 transition-colors hover:text-primary max-[650px]:hidden'
              type='button'
              aria-label='Account'
              aria-expanded={accountOpen}
              onClick={() => {
                setAccountOpen(open => !open);
                setSearchOpen(false);
              }}>
              <UserRound size={19} />
            </button>
            {accountOpen && (
              <div className='absolute top-[calc(100%+17px)] right-0 z-60 w-68.5 border border-[rgba(42,40,37,0.1)] bg-surface p-5.25 shadow-[0_16px_38px_rgba(34,30,22,0.12)]'>
                <strong className='text-[10px] font-semibold tracking-widest uppercase'>
                  Your Rewind
                </strong>
                <p className='my-2.5 mb-4.25 font-source text-[14px] leading-normal text-[#746f65]'>
                  Sign in to see your orders and saved pieces.
                </p>
                <a
                  className='inline-flex items-center gap-1.25 text-[10px] font-semibold text-primary uppercase'
                  href='/contact'
                  onClick={() => setAccountOpen(false)}>
                  Contact our team <ArrowUpRight size={13} />
                </a>
              </div>
            )}
          </div>
          <a
            className='inline-flex min-w-7.5 min-h-9 items-center justify-center gap-2 border-0 bg-transparent p-0 text-[10px] font-semibold tracking-[0.07em] uppercase transition-colors hover:text-primary max-[650px]:relative'
            aria-label='Shopping bag, 0 items'
            href='/cart'>
            <ShoppingBag size={19} />
            <span className='max-[650px]:hidden'>Bag</span>
            {/* TODO: Implement add/remove bag state and the live header item count. */}
            <span className='grid size-4.5 place-items-center rounded-full bg-primary text-[9px] text-surface max-[650px]:absolute max-[650px]:top-0 max-[650px]:-right-1 max-[650px]:size-3.75 max-[650px]:text-[8px]'>
              0
            </span>
          </a>
        </div>
        {searchOpen && (
          <div className='absolute top-[calc(100%-1px)] right-[clamp(24px,5.5vw,88px)] z-60 w-[min(460px,calc(100vw-32px))] border border-[rgba(42,40,37,0.1)] bg-surface p-5.75 shadow-[0_16px_38px_rgba(34,30,22,0.12)] max-[650px]:right-2.5 max-[650px]:w-[calc(100vw-20px)] max-[650px]:p-4.75'>
            <label
              className='text-[10px] font-semibold tracking-widest uppercase'
              htmlFor='site-search'>
              Search Rewind
            </label>
            <div className='mt-3 flex items-center gap-2.75 border-b border-[rgba(42,40,37,0.25)] py-2.5'>
              <Search size={18} />
              <input
                autoFocus
                id='site-search'
                type='search'
                placeholder='Try “wool coat”'
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}
              />
              <button
                className='grid cursor-pointer place-items-center border-0 bg-transparent p-0.75'
                type='button'
                aria-label='Close search'
                onClick={() => {
                  setSearchOpen(false);
                  setSearchTerm("");
                }}>
                <X size={18} />
              </button>
            </div>
            {searchTerm && (
              <div className='pt-2.25'>
                {searchResults.length ? (
                  searchResults.slice(0, 4).map(product => (
                    <a
                      className='grid grid-cols-[43px_1fr_auto] items-center gap-3 border-b border-[rgba(42,40,37,0.08)] py-2.25 text-[11px]'
                      href='/collections'
                      key={product.id}
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchTerm("");
                      }}>
                      <img
                        className='h-12.75 w-10.75 object-cover'
                        src={product.image}
                        alt=''
                      />
                      <span>
                        <strong className='block text-[11px] font-medium'>
                          {product.name}
                        </strong>
                        <small className='mt-1.25 block text-[9px] text-[#817a6e]'>
                          {product.category}
                        </small>
                      </span>
                      <span>£{product.price}</span>
                    </a>
                  ))
                ) : (
                  <p className='font-source text-[14px] text-[#746f65]'>
                    No pieces found. Try another search.
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </header>
      {menuOpen && (
        <button
          className='fixed inset-x-0 top-24 bottom-0 z-39 hidden w-full border-0 bg-[rgba(29,34,28,0.17)] max-[650px]:block'
          aria-label='Close navigation menu'
          type='button'
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
