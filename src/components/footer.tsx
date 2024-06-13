import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from 'next/link';
import { ChevronRight, Mail, Facebook, Instagram } from 'lucide-react';
import { Button, buttonVariants } from './ui/button';

export default function Footer() {

    const links = [
        {
            title: 'Про нас',
            href: '/about'
        },
        {
            title: 'Оплата і доставка',
            href: '/payment-and-delivery'
        },
        {
            title: 'Обмін і повернення',
            href: '/exchange-and-return'
        },
        {
            title: 'Публічна оферта',
            href: '/public-offer'
        },
        {
            title: 'Контакти',
            href: '/contacts'
        },
    ];

    const contacts = [
        {
            name: 'number',
            text: '+38 (050) 434 71 02',
            href: 'tel:+380504347102'
        },
        {
            name: 'email',
            text: 'info@ukrainianrose.com',
            href: 'mailto:info@ukrainianrose.com'
        },
        {
            name: 'schedule',
            text: 'Щоденно з 10:00 до 18:00',
            href: '/contacts'
        }
    ]

    const socials = [
        {
            name: 'Instagram',
            media: <Instagram strokeWidth={1.25} className="w-7 h-7 transition-all duration-200 transform hover:scale-105" />,
            href: 'https://www.instagram.com/ukrainianrose/'
        },
        {
            name: 'Facebook',
            media: <Facebook strokeWidth={1.25} className="w-7 h-7 transition-all duration-200 transform hover:scale-105" />,
            href: 'https://www.facebook.com/ukrainianrose/'
        }
    ];

    return (
        <>
            <footer className="bg-custom-dark-blue px-8 py-6 lg:px-16 lg:py-8">
                <MaxWidthWrapper className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col gap-3">
                        <h2 className="w-4/5 font-base text-lg text-white">Дізнайтесь більше про те, що Вас цікавить</h2>
                        <ul className="w-full flex flex-col justify-start gap-2 font-light text-base text-white capitalize md:pl-2">
                            {links.map((link) => (
                                <li key={link.title} className="inline transition-all duration-100 hover:ml-1">
                                    <Link
                                        href={link.href}
                                        className="relative flex gap-2 hover:text-red-500">
                                        <ChevronRight
                                            strokeWidth={1.25}
                                            className="w-6 h-6" />
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6 sm:gap-10">
                        <div className="flex flex-col gap-3">
                            <h2 className="w-4/5 font-base text-lg text-white">Потрібна допомога? Зв'яжіться з нами</h2>
                            <ul className="pl-6 w-full flex flex-col justify-start gap-2 font-light text-sm text-white list-disc">
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
                        <div className="flex flex-col gap-5 ">
                            <h2 className="w-4/5 font-base text-lg text-white">Слідкуйте за нами в соціальних мережах</h2>
                            <ul className="pl-3 w-full flex justify-start gap-4 font-light text-base text-white capitalize">
                                {socials.map((social) => (
                                    <li key={social.name}>
                                        <Link
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer" className="relative flex gap-2">
                                            {social.media}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 sm:w-2/3 sm:col-span-2 md:w-full md:col-span-1">
                        <div className="w-full">
                            <h2 className="font-base text-lg text-white">Підпишіться на розсилку</h2>
                            <p className="font-light text-sm text-white">Отримуйте останні новини та оновлення прямо на вашу електронну пошту.</p>
                        </div>
                        <input
                            type="text"
                            name="email"
                            placeholder="Ваша електронна пошта"
                            className="px-5 py-3 w-full bg-custom-deep-blue border rounded-lg border-slate-600 text-sm text-white focus:outline-none" />
                        <Button
                            className={`${buttonVariants({ size:'lg', variant: 'rose'})} font-light text-sm text-white sm:w-1/2 md:w-3/5 lg:w-2/3`}>
                            <Mail
                                strokeWidth={1}
                                className="mr-2 w-5" /> Підписатися
                        </Button>
                    </div>
                </MaxWidthWrapper>
                <p className="mt-10 text-center font-base text-xs text-slate-600 md:mt-14 md:font-normal md:text-sm">All rights reserved © 2024 Ukrainian Rose</p>
            </footer >
        </>
    );
}