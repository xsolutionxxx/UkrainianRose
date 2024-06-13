"use client";

import { useState, useEffect } from 'react';
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from 'next/link';
import { Menu, Search, X, ArrowLeft, Heart, ShoppingBag, UserRound, ChevronRight, LayoutDashboard } from 'lucide-react';

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    const user = undefined;
    const isAdmin = false;

    const navLinks = [
        { title: 'Колекція', href: '/collection' },
        { title: 'Бестселери', href: '/bestsellers' },
        { title: 'Подарунки', href: '/gift' },
        { title: 'Блог', href: '/blog' },
        { title: 'Про нас', href: '/about' },
        { title: 'Контакти', href: '/contacts' },
    ]

    const phrases = [
        <>
            <p>
                Відчуйте силу природи з нашою <span className="font-bold text-red-500">натуральною</span> косметикою з квітів троянд!
            </p>
        </>,
        <>
            <p>
                Квіти троянд у кожному флаконі - <span className="font-bold text-red-500">якісна</span> косметика для вашої краси.
            </p>
        </>
    ];

    const toggleNavbar = () => {
        setNavOpen(!navOpen);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="relative">
            <div className={`${searchOpen || navOpen ? 'hidden lg:block' : ''}`}>
                <MaxWidthWrapper className="py-1.5 flex justify-center items-center text-center font-regular text-xs text-custom-dark-blue md:text-sm lg:text-base overflow-x-hidden whitespace-nowrap">
                    <div className="inline-block">
                        {phrases[currentPhraseIndex]}
                    </div>
                </MaxWidthWrapper>
                <div className="bg-custom-dark-blue">
                    <MaxWidthWrapper>
                        <div className="relative px-4 py-6 flex justify-between items-center lg:px-3 lg:h-24 xl:px-2">
                            <div className="flex items-center gap-4 md:gap-6">

                                {/* Burger-menu Mobile*/}
                                <button onClick={toggleNavbar} className="w-6 lg:hidden cursor-pointer">
                                    <Menu
                                        strokeWidth={1.25}
                                        className="text-white full-size" />
                                </button>

                                {/* SearchBar Mobile*/}
                                <button onClick={toggleSearch} className="w-6 lg:hidden cursor-pointer">
                                    <Search
                                        strokeWidth={1.25}
                                        className="text-white full-size" />
                                </button>

                                {/* SearchBar DESKTOP */}
                                <div className={`relative hidden bg-transparent lg:flex ${searchOpen ? 'py-2 h-16' : 'py-0 h-0 delay-1000'}`}>
                                    <div className={`relative ml-9 flex ease-in-out duration-1000 ${searchOpen ? 'w-64' : 'w-0'}`}>
                                        <input
                                            type="text"
                                            name="search"
                                            placeholder="Type to search..."
                                            className={`bg-white border rounded-full border-slate-600 text-base text-custom-dark-blue ease-in-out duration-300 placeholder-slate-600 focus:outline-none ${searchOpen ? 'py-2 pl-5 pr-12 w-full opacity-100 delay-200' : 'w-0 lg:delay-500 opacity-0'}`} />
                                        <button
                                            className={`absolute top-1/2 right-1.5 h-9 w-9 flex items-center justify-center rounded-full z-10 transform -translate-y-1/2 ease-in-out duration-1000 ${searchOpen ? 'bg-custom-dark-blue opacity-100' : 'opacity-100 delay-1000'}`}>
                                            <Search
                                                strokeWidth={1.25}
                                                className="w-7 h-7 text-white" />
                                        </button>
                                    </div>
                                    <button
                                        onClick={toggleSearch}
                                        className={`absolute top-1/2 h-8 w-8 z-20 transform -translate-y-1/2 transition-opacity duration-500 delay-300 ${searchOpen ? 'opacity-100' : 'opacity-0 delay-0'}`}>
                                        <X strokeWidth={1.25} className="full-size text-white " />
                                    </button>
                                </div>
                            </div>

                            {/* Logo */}
                            <Link href="/" className="absolute w-2/6 left-1/2 transform -translate-x-1/2 md:w-1/4 ">
                                <img src="/logo.svg" alt="logo" className="w-full cursor-pointer" />
                            </Link>

                            {/* Whishlist, cart, account */}
                            <div className="flex gap-4 md:gap-6 lg:gap-8">
                                <Link href="/wishlist" className="w-6 text-white cursor-pointer lg:w-7">
                                    <Heart strokeWidth={1.25} className="full-size" />
                                </Link>
                                <Link href="/cart" className="relative w-6 lg:w-7 text-white cursor-pointer">
                                    <ShoppingBag strokeWidth={1.25} className="full-size" />
                                    <div className="absolute w-custom-width-18 h-custom-height-18 -bottom-2 -right-2 flex justify-center items-center bg-white lg:w-5 lg:h-5 lg:-bottom-2.5 lg:-right-2.5  rounded-full text-center text-xs text-custom-dark-blue lg:text-sm overflow-hidden">99</div>
                                </Link>
                                {user ? (
                                    <>
                                        <Link href="/account" className="w-6 lg:w-7 text-white cursor-pointer">
                                            <UserRound strokeWidth={1.25} className="full-size" />
                                        </Link>
                                        {isAdmin ?
                                            <Link href="/dashboard" className="w-6 lg:w-7 text-white cursor-pointer">
                                                <LayoutDashboard strokeWidth={1.25} className="full-size" />
                                            </Link>
                                            : null}
                                    </>
                                ) : (
                                    <>
                                        <Link href="/api/auth/login" className="w-6 lg:w-7 text-white cursor-pointer">
                                            <UserRound strokeWidth={1.25} className="full-size" />
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </MaxWidthWrapper>
                </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block h-custom-height-1 bg-slate-600" />

            {/* Navbar DESKTOP, MOBILE and Search MOBILE functionality */}
            <div className="bg-custom-deep-blue">
                <MaxWidthWrapper>
                    <div className={`fixed w-full bg-custom-deep-blue z-50 lg:static lg:flex lg:flex-row lg:justify-around lg:items-center ${navOpen || searchOpen ? 'block' : 'hidden'}`}>

                        {/* SearchBar MOBILE */}
                        <div className="realative px-6 py-2 w-full h-16 flex items-center bg-custom-dark-blue lg:hidden">
                            <button className="mr-5 w-8 text-white cursor-pointer">
                                {navOpen ? <X strokeWidth={1} onClick={toggleNavbar} className="full-size" /> : <ArrowLeft strokeWidth={1} onClick={toggleSearch} className="full-size" />}
                            </button>
                            <input type="text" name="search" placeholder="Type to search..." className="py-2 pr-10 pl-5 full-size bg-custom-deep-blue border rounded-full border-slate-600 text-lg text-white focus:outline-none" />
                            <button className="absolute right-9 w-6 text-white cursor-pointer md:w-7">
                                <Search strokeWidth={1.5} className="full-size" />
                            </button>
                        </div>

                        {/* Navbar DESKTOP, MOBILE */}
                        <ul className={`realative px-6 py-5 w-full flex flex-col gap-5 lg:flex-row lg:justify-around lg:items-center font-light text-2xl text-white capitalize lg:pb-0 lg:text-xl ${navOpen ? 'block' : 'hidden lg:flex'}`}>
                            {navLinks.map((navLink) => (
                                <li key={navLink.title}>
                                    <Link href={navLink.href} className="relative flex transition-all duration-200 hover:text-red-500 lg:pb-5 lg:link-ease-in-out ">
                                        {navLink.title}
                                        <ChevronRight strokeWidth={1.25} className="absolute right-0 w-8 h-full lg:hidden" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </MaxWidthWrapper>
            </div>
        </nav >
    );
}