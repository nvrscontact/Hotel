import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

function NavBar() {
  return (
    <>
    <header className='bg-black/90 inter-300 flex justify-between items-center relative h-[50px] text-white'>
          <details className='list-none pl-4'>
            <summary aria-label='Open navigation menu' className='list-none'><Image src='/icons/menu.svg' alt="Navigation Menu" width={30} height={30} /></summary>
              <nav className='absolute left-0 z-3 top-12 bg-black/50 backdrop-blur-md w-60 h-[39rem] p-6 flex flex-col justify-between' aria-label='Main Navigation'>
                  <ul className='text-white/70 space-y-8 w-full [&>*>*]:flex pt-4 '>
                    <li><Link href='/Products/Hotel'>Hotel</Link></li>
                    <li><Link href='/Products/Resort'>Resort</Link></li>
                    <li><Link href='/Products/Restaurant'>Restaurant</Link> </li>
                    <li><Link href='/Information#faq'>Faq</Link> </li>
                    <li><Link href='/Information'>Information</Link> </li>
                    <li><Link href='/' className=''>Home</Link> </li>
                  </ul>
                  <section className='space-y-3 flex flex-col text-center'>
                   <Link href='/register' className='bg-white/10 py-2'>Register</Link>
                   <Link href='/login' className='bg-white/10 py-2'>Login</Link>
                    <p className='text-white/70 text-[10px] '>
                    If you need more info visit <Link href='/Support/Support' className='border-b border-white/40'>Support</Link> </p>
                  </section>
              </nav>
          </details>
      </header>
    </>
  )
}

export default NavBar