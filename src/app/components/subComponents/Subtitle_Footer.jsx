import Link from 'next/link'

function Subtitle_Footer({title,subtitleOne,subtitleTwo,subtitleThree,urlOne,urlTwo,urlThree}) {
  return (
    <>
        <details className='w-full '>
          <summary className='list-none mb-2 flex justify-between items-center gap-5'>{title}<img src='/icons/arrowDown.svg' alt="" className='h-4' /></summary>
            <ul className='text-[13px] flex flex-col gap-3 text-white/50 pl-2 mb-4 pt-2 '>
                    <li className='hover:bg-white/10 active:bg-white/10 p-1'><Link href={urlOne} className='flex'>{subtitleOne}</Link> </li>
                    <li className='hover:bg-white/10 active:bg-white/10 p-1'><Link href={urlTwo} className='flex'>{subtitleTwo}</Link> </li>
                    <li className='hover:bg-white/10 active:bg-white/10 p-1'><Link href={urlThree} className='flex'>{subtitleThree}</Link> </li>
            </ul>
        </details>  
    </>
  )
}

export default Subtitle_Footer