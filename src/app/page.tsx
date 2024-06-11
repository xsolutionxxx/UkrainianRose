"use client";

import { useState, useEffect } from 'react';
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Link from 'next/link';

export default function Home() {
    const [navOpen, setNavOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    const phrases = [
        <>
            <p>
                Відчуйте силу природи з нашою <span className="font-bold text-red-500">натуральною</span> косметикою з квітів троянд!
            </p>
        </>,
        <>
            <p>
                Подаруйте своїй шкірі <span className="font-bold text-red-500">ніжність</span> і <span className="font-bold text-red-500">свіжість</span> троянд!
            </p>
        </>,
        <>
            <p>
                Ваша краса в <span className="font-bold text-red-500">гармонії з природою:</span> косметика з троянд для бездоганного догляду.
            </p>
        </>,
        <>
            <p>
                Квіти троянд у кожному флаконі - <span className="font-bold text-red-500">якісна</span> косметика для вашої краси.
            </p>
        </>,


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
        <>
            <nav className="relative">
                <div className={`${searchOpen || navOpen ? 'hidden lg:block' : ''}`}>
                    <div className="py-1.5 text-center flex justify-center items-center font-regular text-xs text-custom-dark-blue md:text-sm lg:text-base whitespace-nowrap">
                        <MaxWidthWrapper>
                            <div className="inline-block">
                                {phrases[currentPhraseIndex]}
                            </div>
                        </MaxWidthWrapper>
                    </div>
                    <div className="bg-custom-dark-blue">
                        <MaxWidthWrapper>
                            <div className="relative px-4 py-6 flex justify-between items-center lg:px-3 lg:h-24 xl:px-2">
                                <div className="flex items-center gap-4 md:gap-6">
                                    <button onClick={toggleNavbar} className="w-5 md:w-6 lg:hidden cursor-pointer">
                                        <img src="/menu.svg" alt="menu" className="w-full cursor-pointer" />
                                    </button>

                                    <button onClick={toggleSearch} className="w-5 md:w-6 lg:hidden cursor-pointer">
                                        <img src="/search.svg" alt="search" className="w-full cursor-pointer" />
                                    </button>

                                    {/* SearchBar DESKTOP */}
                                    <div className={`relative hidden lg:flex bg-custom-dark-blue bg-transparent ${searchOpen ? 'py-3 h-16' : 'delay-1000 py-0 h-0'}`}>
                                        <div className={`relative flex ml-9 ease-in-out duration-1000 ${searchOpen ? 'w-64' : 'w-0'}`}>
                                            <input
                                                type="text"
                                                name="search"
                                                placeholder="Type to search..."
                                                className={`bg-white border rounded-full border-slate-600 text-custom-dark-blue text-base focus:outline-none placeholder-slate-600 ease-in-out duration-300 ${searchOpen ? 'py-2 pl-5 pr-10 w-full opacity-100 delay-200' : 'w-0 lg:delay-500 opacity-0'}`} />
                                            <button
                                                className={`absolute flex items-center justify-center h-8 w-8 top-1/2 right-1.5 transform -translate-y-1/2 rounded-full z-10 ease-in-out duration-1000 ${searchOpen ? 'bg-custom-dark-blue opacity-100' : 'opacity-100 delay-1000'}`}>
                                                <img src="/search.svg" alt="search" className="cursor-pointer" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={toggleSearch}
                                            className={`absolute h-6 w-6 z-20 top-1/2 transform -translate-y-1/2 transition-opacity duration-500 delay-300 ${searchOpen ? 'opacity-100' : 'delay-0 opacity-0'}`}>
                                            <img src="/close.svg" alt="close" className="w-full cursor-pointer" />
                                        </button>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-2/6 md:w-1/4 ">
                                    <img src="/logo.svg" alt="logo" className="w-full cursor-pointer" />
                                </div>
                                <div className="flex gap-4 md:gap-6 lg:gap-8">
                                    <div className="w-5 md:w-6">
                                        <img src="/heart.svg" alt="heart" className="w-full cursor-pointer" />
                                    </div>
                                    <div className="relative w-5 md:w-6">
                                        <img src="/shopping-bag.svg" alt="shopping bag" className="w-full cursor-pointer" />
                                        <div className="absolute w-custom-width-18 h-custom-height-18 -bottom-2 -right-2 flex justify-center items-center bg-white lg:w-5 lg:h-5 lg:-bottom-2.5 lg:-right-2.5  rounded-full text-center text-xs text-custom-dark-blue lg:text-sm overflow-hidden">99</div>
                                    </div>
                                    <div className="w-5 md:w-6">
                                        <img src="/user.svg" alt="user" className="w-full cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </MaxWidthWrapper>
                    </div>
                </div>

                <div className="hidden lg:block h-custom-height-1 bg-slate-600" />

                <div className="bg-custom-deep-blue">
                    <MaxWidthWrapper>
                        <div className={`lg:flex lg:justify-around lg:items-center lg:flex-row ${navOpen || searchOpen ? 'block' : 'hidden'}`}>
                            <div className="relative px-6 py-2 w-full h-16 flex items-center bg-custom-dark-blue lg:hidden">
                                <button className="mr-5 w-10">
                                    {navOpen ? <img src="/close.svg" alt="close" onClick={toggleNavbar} className="w-full cursor-pointer" /> : <img src="/arrow-left.svg" alt="arrow-left" onClick={toggleSearch} className="w-full cursor-pointer" />}
                                </button>
                                <input type="text" name="search" placeholder="Type to search..." className="py-2 pl-5 pr-10 w-full h-full bg-custom-deep-blue border rounded-full border-slate-600 text-lg text-white focus:outline-none" />
                                <button className="absolute right-9 w-6 md:w-7">
                                    <img src="/search.svg" alt="search" className="w-full cursor-pointer" />
                                </button>
                            </div>
                            <ul className={`px-6 py-5 w-full flex flex-col gap-5 lg:w-full lg:flex-row lg:justify-around lg:items-center font-light text-2xl text-white capitalize lg:text-xl ${navOpen ? 'block' : 'hidden lg:flex'}`}>
                                {['Collections', 'Bestsellers', 'Gifts', 'Blog', 'About us', 'Contact'].map((link) => (
                                    <li key={link}>
                                        <Link href="/" className="relative flex hover:text-red-500">
                                            {link}
                                            <img src="/chevron-right.svg" alt="chevron-right" className="absolute top-0.5 right-0 lg:hidden" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </MaxWidthWrapper>
                </div>
            </nav >
        </>
    );
}