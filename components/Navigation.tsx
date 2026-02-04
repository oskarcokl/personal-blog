'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
    const pathname = usePathname()

    const isHome = pathname === '/'
    const isNow = pathname === '/now'
    const isCV = pathname.includes('/CV')
    const isGameDev = pathname.startsWith('/gamedev')
    const isBlog = pathname === '/blog'

    return (
        <nav className="flex gap-3 justify-center no-print mt-3">
            {isHome ? (
                <span className="text-black cursor-default">Home</span>
            ) : (
                <Link href="/">Home</Link>
            )}
            {isBlog ? (
                <span className="text-black cursor-default">Blog</span>
            ) : (
                <Link href="/blog">Blog</Link>
            )}
            {isGameDev ? (
                <span className="text-black cursor-default">Game Development</span>
            ) : (
                <Link href="/gamedev">Game Development</Link>
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
        </nav>
    )
}
