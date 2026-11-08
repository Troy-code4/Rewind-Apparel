import { useState } from "react";
function JoinInnerCircle() {
  const [email, setEmail] = useState("");
  console.log(email);
  return (
    <div className='bg-primary-container w-full h-full flex flex-col gap-8 p-35 items-center justify-center'>
      <h1 className='text-on-primary-container uppercase text-5xl font-libre'>
        Join The Inner Circle
      </h1>
      <p className='text-md text-primary-fixed-dim font-source'>
        Gain exclusive access to archival releases, heritage storytelling, and
        private viewings.
      </p>
      <form>
        <div className='flex gap-3'>
          <input
            className='w-90 h-14 p-3 border border-primary-fixed font-montserrat text-primary-fixed outline-none focus:border-on-primary-container'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            name=''
            id=''
            placeholder='EMAIL ADDRESS'
          />
          <button
            className='bg-secondary border-2 border-secondary text-secondary-fixed-dim py-4   px-9 uppercase rounded font-montserrat text-sm cursor-pointer hover:scale-105 duration-300
              ease-in-out'>
            JOIN
          </button>
        </div>
      </form>
    </div>
  );
}
export default JoinInnerCircle;
