import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

function Main() {
  return (
     <>
      <main className='relative w-full h-[37rem] overflow-hidden text-white/70'>
        <video className='object-cover w-full h-full brightness-70' autoPlay muted loop playsInline>
          <source src='/hotelVideo.mp4' type='video/mp4'/>
        </video>
        <section className="absolute top-12 left-6">
          <h1 className='text-4xl inter-100'>Rosetti's Hotel</h1>
                <h2 className='inter-200 text-[16px] '>Benidorm, Alicante</h2>
                    <section className='flex items-center -space-x-0.5 '>
                      <Image src='/icons/starFill.svg' alt="Hotel Five Stars" width={21} height={21} />
                      <Image src='/icons/starFill.svg' alt="Hotel Five Stars" width={21} height={21}/>
                      <Image src='/icons/starFill.svg' alt="Hotel Five Stars" width={21} height={21}/>
                      <Image src='/icons/starFill.svg' alt="Hotel Five Stars" width={21} height={21}/>
                      <Image src='/icons/starFill.svg' alt="Hotel Five Stars" width={21} height={21}/>
                      <span className='text-[12px] inter-200 ml-2 '>4,7 / 5</span>
                    </section>
        </section>
        <section className='absolute inter-100 bottom-10 right-6 flex flex-col items-end text-[18px]'>
          <h3 className='text-3xl mb-2'><Link href='/Products/Hotel'  className='flex items-center gap-2'>Hotel <Image src='/icons/arrowUpRight.svg' alt="Hotel with Parking" width={21} height={21} /></Link></h3>
          <h3><Link href='/Products/Resort' className='flex items-center gap-2 pr-2'>Resort <Image src='/icons/arrowUpRight.svg' alt="Resort with pool" width={21} height={21} /></Link></h3>
          <h3 ><Link href='/Products/Restaurant' className='flex items-center gap-2 pr-2'>Restaurant <Image src='/icons/arrowUpRight.svg' alt="Hotel with Restaurant" width={21} height={21} /></Link></h3>
        </section>
      </main>
      <aside className='bg-black/90 text-white text-[10px] py-[10px] text-center inter-400 mb-20'>
        <p className=''>10% discount on rooms for two persons</p>
      </aside>
      </>
  )
}

export default Main