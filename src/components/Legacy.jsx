import { useState, useEffect, useRef } from "react";
import Background from "../assets/Legacy_Background.jpg";
import Background2 from "../assets/Legacy_Background_2.jpg";
import Background3 from "../assets/Legacy_Background_3.jpg";

const images = [Background, Background2, Background3];

const TAG_DURATION = 2500;
const BANNER_DURATION = 2000;
const SLIDE_DURATION = 2200;

function Legacy() {
  const [phase, setPhase] = useState("tag");
  const [activeImg, setActiveImg] = useState(0);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  const isActive = inView || hovered;

  // Track whether section is in viewport (no longer disconnects after first trigger)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Tag → Banner
  useEffect(() => {
    if (!isActive || phase !== "tag") return;

    const t = setTimeout(() => {
      setPhase("banner");
    }, TAG_DURATION);

    return () => clearTimeout(t);
  }, [isActive, phase]);

  // Banner → Slideshow
  useEffect(() => {
    if (!isActive || phase !== "banner") return;

    const t = setTimeout(() => {
      setActiveImg(0);
      setPhase("slideshow");
    }, BANNER_DURATION);

    return () => clearTimeout(t);
  }, [isActive, phase]);

  // Slideshow → next image → Tag
  useEffect(() => {
    if (!isActive || phase !== "slideshow") return;

    const t = setTimeout(() => {
      if (activeImg === images.length - 1) {
        setPhase("tag");
      } else {
        setActiveImg(prev => prev + 1);
      }
    }, SLIDE_DURATION);

    return () => clearTimeout(t);
  }, [isActive, phase, activeImg]);

  return (
    <div className='bg-surface-container-highest px-30 py-10'>
      <div className='flex items-center justify-between gap-10'>
        {/* TEXT CONTENT */}
        <div className='flex flex-col gap-5'>
          <p className='tracking-widest text-sm font-montserrat font-bold uppercase text-secondary'>
            The Art Of Permanence
          </p>

          <h1 className='text-4xl font-libre max-w-md'>
            The art of permanence in a world of trends.
          </h1>

          <div className="w-[12.5%] border border-secondary" />

          <p className='max-w-md font-sans text-gray-900'>
            Each piece is handcrafted using centuries-old techniques, designed
            to be passed down as a legacy. We reject the cadence of seasonal
            disposability in favor of silhouettes that outlast their decade.
          </p>

          <div className='flex items-center justify-between max-w-md'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-3xl text-primary font-libre'>100%</h1>

              <p className='uppercase text-gray-800 font-semibold tracking-widest text-xs font-montserrat'>
                Merino Wool
              </p>
            </div>

            <div className='flex flex-col gap-2'>
              <h1 className='text-3xl text-primary font-libre'>72hrs</h1>

              <p className='uppercase text-gray-800 font-semibold tracking-widest text-xs font-montserrat'>
                Bench Tailoring Per Coat
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div
          ref={ref}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative inline-block rounded-lg bg-surface-container-high p-3 shadow-lg">
          <div className="relative h-[27.5rem] w-[22.5rem] overflow-hidden rounded-sm">
            {/* IMAGE STACK */}
            {images.map((src, i) => {
              const isVisible =
                phase === "slideshow" ? i === activeImg : i === 0;

              return (
                <img
                  key={src}
                  src={src}
                  alt='Tailored coat'
                  className={`
                    absolute inset-0
                    h-full w-full object-cover
                    transition-all duration-1800
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      isVisible
                        ? "opacity-100 scale-105"
                        : "opacity-0 scale-100"
                    }
                  `}
                />
              );
            })}

            {/* BANNER */}
            <div
              className={`
                absolute inset-0
                bg-primary/95
                text-white
                flex flex-col items-center justify-center gap-2
                transition-all duration-1000
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  phase === "banner"
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105 pointer-events-none"
                }
              `}>
              <span
                className={`
                  text-xs tracking-[0.3em] uppercase font-montserrat
                  transition-all duration-700 delay-100
                  ${
                    phase === "banner"
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }
                `}>
                Savile Row Heritage
              </span>

              <span
                className={`
                  text-3xl font-serif font-bold leading-tight
                  transition-all duration-700 delay-200
                  ${
                    phase === "banner"
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }
                `}>
                EST. 1924
              </span>

              <span
                className={`
                  text-[11px] tracking-widest text-gray-200
                  max-w-xs text-center
                  transition-all duration-700 delay-300
                  ${
                    phase === "banner"
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }
                `}>
                Internal hand-padded canvas chest piece for lifetime contouring.
              </span>
            </div>
          </div>

          {/* CORNER TAG */}
          <div
            className={`
              absolute -top-4 -right-4
              bg-primary text-white
              px-5 py-3
              flex flex-col items-center
              shadow-lg
              transition-all duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                phase === "tag"
                  ? "opacity-100 translate-y-0 translate-x-0 scale-100"
                  : "opacity-0 -translate-y-2 translate-x-2 scale-95 pointer-events-none"
              }
            `}>
            <span className='text-[10px] tracking-widest font-medium text-gray-200'>
              EST.
            </span>

            <span className='text-xl font-serif font-bold leading-tight'>
              1924
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legacy;
