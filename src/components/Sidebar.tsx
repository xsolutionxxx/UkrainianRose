"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Sidebar = () => {
	const pathname = usePathname()

	return (
		<div className="w-[260px] h-full border-r border-gray-300 pl-4 py-5">
			<ul className="space-y-4">
				<li>
					<Link
						className={`hover:text-red-500 flex ${pathname === '/account/personal-data' ? 'font-semibold text-red-500 border-r border-red-500' : ''}`}
						href="/account/personal-data">
						Персональні дані
					</Link>
				</li>
				<li>
					<Link
						className={`hover:text-red-500 flex ${pathname === '/account/order-history' ? 'font-semibold text-red-500 border-r border-red-500' : ''}`}
						href="/account/order-history">
						Історія замовлення
					</Link>
				</li>
				<li>
					<Link
						className={`hover:text-red-500 flex ${pathname === '/account/wishlist' ? 'font-semibold text-red-500 border-r border-red-500' : ''}`}
						href="/account/wishlist">
						Список бажаного
					</Link>
				</li>
				<li>
					<Link
						className={`text-red-700 hover:text-red-500 flex ${pathname === '/account/delete-account' ? 'font-semibold text-red-500 border-r border-red-500' : ''}`}
						href="/account/delete-account">
						Видалити мій аккаунт
					</Link>
				</li>
				<li>
					<Link
						className={`hover:text-red-500 flex ${pathname === '/account/logout' ? 'font-semibold text-red-500 border-r border-red-500' : ''}`}
						href="/account/logout">
						Вихід
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
