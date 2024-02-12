'use client';
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react';
import React from 'react';

export default function SongCard({ artist }) {
  return (
    <div className='max-w-[1000px] gap-5 grid grid-cols-12 grid-rows-2 p-12 mx-auto'>
      <Card className='col-span-12 sm:col-span-4 h-[200px]'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>What to watch</p>
          <h4 className='text-white font-medium text-large'>Stream the Acme event</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt='Card background'
          className='z-0 w-full h-full object-cover'
          src={"image"}
        />
      </Card>
      <Card className='col-span-12 sm:col-span-4 h-[200px]'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Plant a tree</p>
          <h4 className='text-white font-medium text-large'>Contribute to the planet</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt='Card background'
          className='z-0 w-full h-full object-cover'
          src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
      </Card>
      <Card className='col-span-12 sm:col-span-4 h-[200px]'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Supercharged</p>
          <h4 className='text-white font-medium text-large'>Creates beauty like a beast</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt='Card background'
          className='z-0 w-full h-full object-cover'
          src='https://images.unsplash.com/photo-1514533212735-5df27d970db0?auto=format&fit=crop&q=80&w=2012&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
      </Card>
      <Card isFooterBlurred className='w-full h-[300px] col-span-12 sm:col-span-5'>
        <CardHeader className='absolute z-10 top-1 flex-col items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>New</p>
          <h4 className='text-black font-medium text-2xl'>Acme camera</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt='Card example background'
          className='z-0 w-full h-full scale-125 -translate-y-6 object-cover'
          src='https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
        <CardFooter className='absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
          <div>
            <p className='text-black text-tiny'>Available soon.</p>
            <p className='text-black text-tiny'>Get notified.</p>
          </div>
          <Button className='text-tiny' color='primary' radius='full' size='sm'>
            Notify Me
          </Button>
        </CardFooter>
      </Card>
      <Card isFooterBlurred className='w-full h-[300px] col-span-12 sm:col-span-7'>
        <CardHeader className='absolute z-10 top-1 flex-col items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Your day your way</p>
          <h4 className='text-white/90 font-medium text-xl'>Your checklist for better sleep</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt='Relaxing app background'
          className='z-0 w-full h-full object-cover'
          src='https://images.unsplash.com/photo-1459233313842-cd392ee2c388?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
        <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
          <div className='flex flex-grow gap-2 items-center'>
            <Image
              isZoomed
              alt='Breathing app icon'
              className='rounded-full w-10 h-11 bg-black'
              src='https://images.unsplash.com/photo-1524779709304-40b5a3560c60?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <div className='flex flex-col'>
              <p className='text-tiny text-white/60'>Breathing App</p>
              <p className='text-tiny text-white/60'>Get a good night's sleep.</p>
            </div>
          </div>
          <Button radius='full' size='sm'>
            Get App
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
