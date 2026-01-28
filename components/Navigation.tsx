'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
    const pathname = usePathname()

    const isHome = pathname === '/'
    const isNow = pathname === '/now'
    const isCV = pathname.includes('/CV')
    const isGameDev = pathname.startsWith('/gamedev')
    const isBlog = pathname.split('/')[1] === 'blog'

    return (
        <nav className="flex gap-3 justify-center no-print mt-3">
            {isHome ? (
                <span className="text-black cursor-default">Home</span>
            ) : (
                <Link href="/">Home</Link>
            )}
            {isNow ? (
                <span className="text-black cursor-default">Now</span>
            ) : (
                <Link href="/now">Now</Link>
            )}
            {isCV ? (
                <span className="text-black cursor-default">CV</span>
            ) : (
                <Link href="/CV">CV</Link>
            )}
            {isGameDev ? (
                <span className="text-black cursor-default">GameDev</span>
            ) : (
                <Link href="/gamedev">GameDev</Link>
            )}
            {isBlog ? (
                <span className="text-black cursor-default">Blog</span>
            ) : (
                <span className="cursor-default text-gray-400">Blog</span>
            )}
        </nav>
    )
}
