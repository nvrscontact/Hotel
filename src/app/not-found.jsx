import React from 'react'
import Link from 'next/link'

function NotFound() {
  return (
    <>
    <section className='inter-300 ml-6 text-black/80 mt-10 mb-20'>
    <h1 className='inter-300 text-2xl mb-2'>Página no Encontrada</h1>
    <p className='mb-20 inter-300'>Al parecer esta pagina no existe. <br />Te recomendamos volver.</p>

    <section className='flex flex-col'>
    <span className='mb-2 inter-300 text-2xl'>Links de Interés</span>
    <p className='gap-1 flex flex-col '>
        <Link href="/">Home</Link>
        <Link href="/Products/Hotel">Hotel</Link>
        <Link href="/Products/Resort">Resort</Link>
        <Link href="Products/Restaurant">Restaurant</Link></p>
    </section>
    </section>
    </>
  )
}

export default NotFound