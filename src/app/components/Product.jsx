import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

function Product({title,img}) {
  return (
    <>
      <article className='flex flex-col inter-200 mb-40 w-80 justify-center mx-auto'>
          <h1 className='text-4xl inter-200 text-center text-[#7a520dd0] '>{title}</h1>
          <span className='border h-[1px] mx-5 my-3 border-[#7a520d] '></span>
          <div className='flex gap-1 justify-center items-center'>
            <span className=' flex gap-1 text-[9px] py-[6px] px-3  bg-[#7a520dd0] text-[#ffffff] inter-300 rounded-md items-center '>
              <Image src='/icons/parkingWhite.svg' alt="" width={18} height={30} />
              <h1>Wifi Free</h1>
            </span>
            <span className=' flex  gap-1 text-[9px] py-[6px] px-3 bg-[#7a520dd0] text-[#ffffff] inter-300 rounded-md items-center'>
              <Image src='/icons/parkingWhite.svg' alt="" width={18} height={30}/>
              <h1>Parking Private</h1>
            </span>
            <span className='flex gap-1 text-[9px] py-[6px] px-3 bg-[#7a520dd0] text-[#ffffff] inter-300 rounded-md items-center'>
              <Image src='/icons/parkingWhite.svg' alt="" width={18} height={30}/>
              <h1>Elevator</h1>
            </span>
          </div>

        <p className='text-center text-[12px] text-[#7a520d] inter-300 py-4'>We want to give you the guarantee that our services are very pleasant for the people who have tried them for the rest of them lives i promise very pleasant for the</p>
                    
        <div className='flex justify-center gap-3 bg-black py-[10px]'>
              <section className='flex items-center relative gap-2'>
               <Image src='/icons/elevatorGold.svg' alt="" width={18} height={16}/>
                <span className='text-[10px] text-white inter-400'>Elevator</span>
              </section>
              <section className='flex items-center relative gap-1'>
               <Image src='/icons/wheelchairGold.svg' alt="" width={16} height={16}/>
                <span className='text-[10px] text-white inter-400'>Wheelchair accessible</span>
              </section>
              <section className='flex items-center relative'>
               <Image src='/icons/dotGold.svg' alt="" width={18} height={16}/>
                <span className='text-[10px] text-white inter-400'>24h Service</span>
              </section>
         </div>
   
          <section className='flex flex-col'>
            <img src={img} alt="" className='w-80 h-[28rem]' />
          </section>
          
          <section className='flex justify-center gap-3 items-center border-t-[6px] mx-4 pt-5 border-[#7a520dd0] '>
            <button className='text-[#7a520dd0] inter-400 border py-2 px-3 rounded-md '> <Link href={'/Information'}>More Info</Link> </button>
            <button className='bg-[#7a520dd0] text-white py-2 px-4 rounded-md'> <Link href={'/Reservation'}>Reservation</Link> </button>
          </section>
      </article>   
    </>
  )
}

export default Product