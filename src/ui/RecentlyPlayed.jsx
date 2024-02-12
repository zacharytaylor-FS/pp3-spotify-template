import React from 'react'
import ArtistCard from './card/Artist'

function RecentlyPlayed() {
  return (
    <section className='p-4'>
    <h2 className='text-xl font-bold'>Recently Played</h2>
    <div className='max-w-[1000px] gap-5 grid grid-cols-12 grid-rows-2 p-5 mx-auto'>
        <ArtistCard/>
    </div>
    </section>
  )
}

export default RecentlyPlayed