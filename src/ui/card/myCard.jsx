'use client';
import { Card, CardBody, Image } from '@nextui-org/react';
import React from 'react';

export default function myCard({ }) {
    return (
        <Card className='col-span-12 sm:col-span-4 h-[200px]'>
        <Image
          isZoomed
          removeWrapper
          alt='Card background'
          className='z-0 w-full h-full object-cover'
          src={"image"}
        />
        <CardBody className='p-[16px] top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>What to watch</p>
          <h4 className='text-white font-medium text-large'>Stream the Acme event</h4>
        </CardBody>
      </Card>
    )
}