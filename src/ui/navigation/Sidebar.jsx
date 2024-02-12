'use client'
import {
    HomeIcon,
    MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import Link from "next/link";
export default function SideNav() {
    return (
        <>
        <aside>
        <div className="flex h-[100%] flex-col overflow-hidden px-2 min-w-28 sm:min-w-[150px]">
            <div className='flex flex-col  gap-3 h-[100%] bg-[var(--spotify-black)]'>
                <Link href='/' className='flex flex-row items-center justify-center h-14 w-14'>
                    <HomeIcon className='w-7 h-7 absolute'/>
                    <p className='relative left-[50px] hidden sm:flex'>Home</p>
                </Link>
                <Link href='/dashboard/search' className='flex flex-row items-center justify-center h-14 w-14'>
                    <MagnifyingGlassIcon className='w-7 h-7 absolute'/>
                    <p className='relative left-[50px] hidden sm:flex'>Search</p>
                </Link>
            </div>
        </div>
        </aside>
        </>
    )
}