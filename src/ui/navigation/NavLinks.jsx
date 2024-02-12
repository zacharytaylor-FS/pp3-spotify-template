'use client'
import {
    DocumentDuplicateIcon,
    HomeIcon,
    MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon},
    { name: 'Search', href: '/dashboard/search', icon: MagnifyingGlassIcon},
    { name: 'Library', href: '/dashboard/library', icon: DocumentDuplicateIcon},
];

export default function NavLinks() {
    const pathname = usePathname()
    return(
        <nav className='flex gap-2'>
        {links.map((link) => {
            const LinkIcon = link.icon;
            return (
                <Link
                    key={link.name}
                    href={link.href}
                    className='flex h-[48px] grow items-center gap-2 rounded-md bg-neutral-800 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
                >
                    <LinkIcon className='w-6'/>
                    <p className='hidden md:block'>{link.name}</p>
                </Link>
            );
        })}
    </nav>
    );
}