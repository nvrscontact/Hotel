import React from 'react'
import Link from 'next/link'
import Image from 'next/image';


import Subtitle_Footer from './subComponents/Subtitle_Footer'


function footer() {
    const date = new Date().getFullYear()

    const footerSections = 
    [
      { title:'Contact', 
        links: 
        [ { label: 'Hotel', url:'/Products/Hotel' },
          { label: 'Resort', url:'/Products/Resort' },
          { label: 'Restaurant', url:'/Products/Restaurant' }]
     },
     {
        title:'Information', links: [
        { label: 'Hotel', url:'/Products/Hotel' },
        { label: 'Resort', url:'/Products/Resort' },
        { label: 'Restaurant', url:'/Products/Restaurant' },
      ]
     },
     {
        title:'Legal', links: [
        { label: 'Hotel', url:'/Products/Hotel' },
        { label: 'Resort', url:'/Products/Resort' },
        { label: 'Restaurant', url:'/Products/Restaurant' },
      ]
     },
    ]
    /* se recorre cada section de footerSections como bloque,
       se llama title, luego se accede a llamar a links,
       especificamos el primer primer bloque dentro de liks,
       primero específicamos los label [0] [1] y luego 
       en este mismo bloque de links específicamos ahora los urls. 
    */

  return (
    <>
    <footer className='flex flex-col w-full bg-[#7d550fea] text-white/70 text-[10px] '>
        <nav className='flex gap-3 items-center pl-6 pt-6'>
          <a href="https://facebook.com"><Image src='/icons/instagramWhite.svg' alt="Instagram" width={20} height={20} /></a>
          <a href="https://facebook.com"><Image src='/icons/facebookWhite.svg' alt="Facebook" width={20} height={20} /></a>
          <a href="https://facebook.com"><Image src='/icons/whatsapp.svg' alt="Facebook" width={20} height={20} /></a>
        </nav>
        <section className='flex flex-col text-white/60 my-2 gap-3 w-full p-6 text-[14px] inter-300'>
        
        {footerSections.map((section,i) => (
          <Subtitle_Footer
          key={i}
          title={section.title}
          subtitleOne={section.links[0].label}
          subtitleTwo={section.links[1].label}
          subtitleThree={section.links[2].label}
          urlOne={section.links[0].url}
          urlTwo={section.links[1].url}
          urlThree={section.links[2].url}
          />
        ))}

        </section>
        <address className='pl-6 pb-6 space-y-1 flex flex-col inter-200'>
          <span>Valencia, Spain - 03803</span>
          <span>© Rosetti's Hotel {date} - All Rights Reserved</span>
        </address>
      </footer>  
        <nav className='flex gap-6 pl-6 inter-200 bg-black/80 w-full py-3 text-[10px] '> 
          <Link href='/Support/Policy#cookies'>Cookies Policy</Link>
          <Link href='/Support/Policy#terms'>Terms of Use</Link>
          <Link href='/Support/Policy#privacy'>Privacy Policy</Link>
        </nav>
    </>
  )
}

export default footer
