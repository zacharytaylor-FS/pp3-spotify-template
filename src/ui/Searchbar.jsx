'use client'

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const Search = ({placeholder}) => {
    return (
        <div className="relative flex flex-1 flex-shrink-2 ">
            <label htmlFor='search' className="sr-only">Search</label>
            <input type="search" className="peer placeholder:text-gray-500 py-[9px] pl-10 text-sm outline-2 w-full block rounded-md border border-gray-200" placeholder={placeholder}/>
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[20px] w-[20px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
        </div>
    )
}

export default Search