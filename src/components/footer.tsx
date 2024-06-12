import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from 'next/link';

export default function Footer() {

    const links = [
        { text: 'Про нас', href: '/about' },
        { text: 'Оплата і доставка', href: '/payment-and-delivery' },
        { text: 'Обмін і повернення', href: '/exchange-and-return' },
        { text: 'Публічна оферта', href: '/public-offer' },
        { text: 'Контакти', href: '/contacts' },
    ];

    const contacts = [
        { name: 'number', text: '+38 (050) 434 71 02', href: 'tel:+380504347102' },
        { name: 'email', text: 'info@ukrainianrose.com', href: 'mailto:info@ukrainianrose.com' },
        { name: 'schedule', text: 'Щоденно з 10:00 до 18:00', href: '/contacts' }
    ]

    const socials = [
        { src: '/instagram.svg', alt: 'instagram', href: 'https://www.instagram.com/ukrainianrose/' },
        { src: '/facebook.svg', alt: 'facebook', href: 'https://www.facebook.com/ukrainianrose/' }
    ];

    return (
        <>
            <footer className="bg-custom-dark-blue py-6 px-8 lg:py-8 lg:px-16">
                <MaxWidthWrapper className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-white text-lg font-base w-4/5">Дізнайтесь більше про те, що Вас цікавить</h2>
                        <ul className="pl-2 w-full flex flex-col justify-start gap-2 font-light text-base text-white capitalize">
                            {links.map((link) => (
                                <li key={link.text} className="hover:ml-1 transition-all duration-100">
                                    <Link
                                        href={link.href}
                                        className="relative flex gap-2 hover:text-red-500">
                                        <img
                                            src="/chevron-right.svg"
                                            alt="chevron-right" />
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-white text-lg font-base w-4/5">Потрібна допомога? Зв'яжіться з нами</h2>
                            <ul className="pl-6 list-disc w-full flex flex-col justify-start gap-2 font-light text-sm text-white">
                                {contacts.map((contact) => (
                                    <li key={contact.name}>
                                        <Link
                                            href={contact.href}
                                            className="hover:underline">
                                            {contact.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h2 className="text-white text-lg font-base w-4/5">Слідкуйте за нами в соціальних мережах</h2>
                            <ul className="pl-3 w-full flex justify-start gap-4 font-light text-base text-white capitalize">
                                {socials.map((social) => (
                                    <li key={social.alt}>
                                        <Link
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer" className="relative flex gap-2">
                                            <img src={social.src} alt={social.alt} className="w-6 h-6 transition-all duration-75 transform hover:scale-105" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:grid-cols-1">
                        <div className="w-full">
                            <h2 className="text-white text-lg font-base">Підпишіться на розсилку</h2>
                            <p className="text-white text-sm font-light">Отримуйте останні новини та оновлення прямо на вашу електронну пошту.</p>
                        </div>
                        <input
                            type="text"
                            name="email"
                            placeholder="Ваша електронна пошта"
                            className="py-3 px-5 w-full bg-custom-deep-blue border rounded-lg border-slate-600 text-sm text-white focus:outline-none" />
                        <button
                            type="submit"
                            className="py-2 px-4 mx-auto mr-0 w-full lg:w-1/2 lg:mx-0 bg-custom-dark-blue border rounded-lg border-slate-600 text-sm font-light text-white hover:text-red-500 hover:bg-custom-deep-blue hover:border-red-500">Підписатися</button>
                    </div>
                </MaxWidthWrapper>
                <p className="mt-14 text-slate-600 text-xs font-base md:text-sm md:font-normal text-center">All rights reserved © 2024 Ukrainian Rose</p>
            </footer>
        </>
    );
}