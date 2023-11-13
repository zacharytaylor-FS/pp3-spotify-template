import Link from "next/link"

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 md:px-2">
            <Link href='/'>
                Home
            </Link>
            Hello
        </div>
    )
}