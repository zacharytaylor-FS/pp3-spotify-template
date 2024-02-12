'use client';
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import React from 'react';
let artist = [
  {
    name: 'Juice Wrld',
    type: 'Artist',
    img: ''
  }
]
export default function ArtistCard({ artist = [] }) {
 
  return (
      <Card className='bg-neutral-900 flex max-w-xs text-left sm:shrink-0 sm:grow sm:basis-0'>
        <CardHeader className='relative justify-center overflow-hidden bg-cover bg-no-repeat'>
          <Image
            alt='Card background'
            className='z-0 w-full h-[300] object-cover'
            src='images/juice-wrld.jpg'
          />
        </CardHeader>
        <CardBody className='p-4'>
          <h5 className='mb-4 leading-tight font-medium text-large text-neutral-400 dark:text-neutral-50'>Juice Wrld</h5>
          <p className='mb-2 text-base text-neutral-500  dark:text-neutral-50'>Artist</p>
        </CardBody>
      </Card>  

  );
}
