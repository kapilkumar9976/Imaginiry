'use client'

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'

const MobileNav = () => {



    const pathname = usePathname();
    return (
        <header className='header'>
            <Link href="/" className='flex item-center gap-2 md:p-2'>
                <Image src='/assets/images/logo-text.svg' alt='logo' width={180} height={28} />
            </Link>

            <nav className='flex gap-2'>
                <UserButton afterSignOutUrl='/' />
                <Sheet>
                    <SheetTrigger>
                        <Image src='/assets/icons/menu.svg' alt='menu' width={32} height={32} className='cursor-pointer' />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetTitle className="hidden">

                        </SheetTitle>
                        <>

                            <Image src='/assets/images/logo-text.svg' alt='logo' width={152} height={23} />
                            <ul className='header-nav_elements'>

                                {navLinks.map(link => {
                                    const isActive = link.route === pathname;
                                    return (
                                        <li key={link.route} className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}>
                                            <Link className='sidebar-link cursor-pointer' href={link.route}>

                                                <Image
                                                    src={link.icon}
                                                    alt="logo"
                                                    width={24}
                                                    height={24}

                                                />
                                                {link.label}

                                            </Link>
                                        </li>
                                    )

                                })}
                            </ul>


                        </>
                    </SheetContent>
                </Sheet>



            </nav>
        </header>
    )
}

export default MobileNav