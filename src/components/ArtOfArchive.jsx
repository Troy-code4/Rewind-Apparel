import Image from "../assets/Rewind_Img.png";
function ArtOfArchive() {
  return (
    <div className="grid w-full grid-cols-2 px-[100px] pt-[120px] pb-0">
      <div className='w-fit h-fit border-2 border-secondary'>
        <img className="h-full w-full object-cover" src={Image} alt="" />
      </div>
      <div className="flex flex-col gap-6 py-[160px]">
        <p className='font-libre text-primary'>The Art of the Archive</p>
        <p className='font-source text-tertiary'>
          Our design philosophy is rooted in the "physicality" of high-end
          print. We believe that true luxury is felt before it is seen. Each
          garment is treated as an architectural anchor for the modern
          wardrobe—curated, timeless, and reliable.
        </p>
        <div className='flex flex-col gap-4 pt-5 border-t border-t-tertiary-fixed-dim'>
          <div className='flex items-center gap-3'>
            <span className='w-1.5 h-1.5 bg-secondary rotate-45'></span>
            <span className="font-montserrat text-[12px] tracking-widest text-primary uppercase">
              Sustainably Sourced Textiles
            </span>
          </div>
          <div className='flex items-center gap-3'>
            <span className='w-1.5 h-1.5 bg-secondary rotate-45'></span>
            <span className="font-montserrat text-[12px] tracking-widest text-primary uppercase">
              Hand-Finished Detailing
            </span>
          </div>
          <div className='flex items-center gap-3'>
            <span className='w-1.5 h-1.5 bg-secondary rotate-45'></span>
            <span className="font-montserrat text-[12px] tracking-widest text-primary uppercase">
              Limited Archival Releases
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArtOfArchive;
