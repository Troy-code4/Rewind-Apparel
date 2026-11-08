function CustomCTA() {
  return (
    <div className='p-15 bg-surface-container-high'>
      <div className='flex flex-col gap-5 items-center text-center'>
        <p className='text-sm uppercase font-montserrat tracking-widest font-bold text-secondary'>
          The Custom Atelier
        </p>
        <h1 className='font-libre max-w-2xl text-5xl'>
          Not quite sure what you're looking for?
        </h1>
        <p className='max-w-lg text-base font-semibold text-gray-700'>
          Commission a garment designed around your vision, preferences and
          measurements. Our master tailors accommodate bespoke cuts, bespoke
          cloths, and private appointments.
        </p>
        <button className='px-5 py-2 rounded-md cursor-pointer font-semibold border border-secondary tracking-wide text-sm uppercase font-montserrat text-primary hover:bg-secondary hover:text-surface  duration-300 ease-in-out'>
          Begin Your Commission →
        </button>
      </div>
    </div>
  );
}
export default CustomCTA;
