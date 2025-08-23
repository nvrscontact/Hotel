import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

function Main() {

      const mensajes = [
    <>
    <span><span className='text-white'>Free </span>Rooms for two person. </span>
    <span>Summer Discounts</span>
    <span>Reserve Now <span className='text-white/80'>2025</span></span>
    <span>10% discount in Bar</span>
    </>
  ]


  return (
     <>
      <main className='relative w-full h-[37rem] overflow-hidden text-white/70'>
        <video className='object-cover w-full h-full brightness-70' autoPlay muted loop playsInline>
          <source src='/hotelVideo.mp4' type='video/mp4'/>
        </video>
        <section className="absolute top-12 left-6">
          <h1 className='text-4xl inter-100'>Rosetti's Hotel</h1>
                <h2 className='inter-200 text-[16px] mb-1 text-white/60 '>Benidorm, Alicante</h2>
                    <section className='flex items-center -space-x-0.5 '>
                      <Image src='/icons/starFill.svg' alt="Hotel Five Stars" width={19} height={21} />
                      <Image src='/icons/starFill.svg' alt="Hotel Five Stars" width={19} height={21}/>
                      <Image src='/icons/starFill.svg' alt="Hotel Five Stars" width={19} height={21}/>
                      <Image src='/icons/starFill.svg' alt="Hotel Five Stars" width={19} height={21}/>
                      <Image src='/icons/starFill.svg' alt="Hotel Five Stars" width={19} height={21}/>
                      <span className='text-[12px] inter-200 ml-2 '>4,7 / 5</span>
                    </section>
        </section>
        <section className='absolute inter-100 bottom-10 right-6 flex flex-col items-end text-[18px]'>
          <h3 className='text-3xl mb-2'><Link href='/Products/Hotel'  className='flex items-center gap-2'>Hotel <Image src='/icons/arrowUpRight.svg' alt="Hotel with Parking" width={18} height={21} /></Link></h3>
          <h3><Link href='/Products/Resort' className='flex items-center gap-2 pr-2'>Resort <Image src='/icons/arrowUpRight.svg' alt="Resort with pool" width={16} height={16} /></Link></h3>
          <h3 ><Link href='/Products/Restaurant' className='flex items-center gap-2 pr-2'>Restaurant <Image src='/icons/arrowUpRight.svg' alt="Hotel with Restaurant" width={16} height={21} /></Link></h3>
        </section>
      </main>
           <aside className="lg:mx-30 xl:mx-96 mb-20 ">
        <section className='relative overflow-hidden w-full'>
          <div className="w-max carousel-track bg-black/90 space-x-14">
          {Array(4).fill(mensajes[0]).map((mensaje,index) => (
           <p key={index} className="shrink-0 space-x-24 py-3 px-4 text-[12px] text-white/60 inter-200 flex lg:text-sm ">
            {mensaje}
          </p>
          ))}
          </div>
        </section>
       </aside> 
      </>
  )
}

export default Main