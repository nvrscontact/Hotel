import React from 'react'
import Review from './subComponents/Review'

function Reviews() {
  return (
    <>
    <div className='mx-6 flex flex-col inter-200'>
        <h1 className='fira-sans-extralight text-[#7a520dd0] text-4xl inter-200 text-center '>Reviews</h1>
        <span className='border h-[1px] mx-20 my-3 border-[#7a520d] '></span>
        <p className='text-center mb-6 text-[12px] mx-4 text-[#7a520d] inter-300'>We want to give you the guarantee that our services are very pleasant for the people who have tried them.</p>
        <section className='flex flex-col gap-4'>
          <Review names='Katterin R.' dates='December 2024' paragraph='Excellent food.' />
          <Review names='Mascherandossk' dates='Summer of 2025' paragraph='Excellent food and sprites, during summer is great.' />
          <Review names='Jennifer' dates='April 2023' paragraph='Their meals are unique ' />
          <Review names='Aniston Jeff' dates='May 2025' paragraph="Hotel and Restaurant was awesome, i've never been in a place like this, recommended highly to vacations" />
        </section>
    </div>    
    </>
  )
}

export default Reviews