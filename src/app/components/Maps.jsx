import React from 'react'
import Image from 'next/image';

function Maps() {
  return (
    <>
    <div className=' mx-auto mt-16 inter-500'>
        <section className='mx-6 flex flex-col' >
            <h1 className='text-xl text-[#7a520dd0]'>Alcoy, Alicante</h1>
            <span className='text-md mb-1 text-black/80 inter-300'>Calle Na Saurina de Entenza 60.</span>
            <p className='flex items-end gap-1 text-sm mb-6'><Image src='/icons/phone.svg' width={19} height={20} alt='hola' ></Image><a href="tel:+34600000000" className="text-black/80 inter-300 text-start">+34 600 000 000</a></p>
        </section>
            <section className='h-72'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24908.640986631737!2d-0.47442855716745597!3d38.70448801725399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd61864db38069f7%3A0x612097ca2f0865bd!2sOficina%20de%20Correos!5e0!3m2!1ses!2ses!4v1755183371999!5m2!1ses!2ses" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>   
            </section>
            <aside className='bg-black/80 text-white text-[10px] py-2 text-center inter-400'>
                <p className=''>Open Monday - Saturday by 6:00 to 23:00</p>
            </aside>
    </div>
    </>
  )
}

export default Maps