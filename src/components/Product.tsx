import Link from "next/link";
import { ChevronRight, CircleMinus, CirclePlus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";

export function CartProduct() {
    return (
        <>
            <li className="flex gap-5">
                <div className="flex justify-center items-center w-40 h-40 overflow-hidden">
                    <Link href={"/"}>
                        <img src="/products/product-test-1.jpg" alt="product" className="full-size object-cover" />
                    </Link>
                </div>
                <div className="flex flex-col justify-around">
                    <Link href={"/"}>
                        <h3 className="text-lg sm:text-xl md:text-2xl hover:text-red-500">Коригуюча пептидна сироватка для зони навколо очей</h3>
                    </Link>
                    <div className="flex items-center gap-4">
                        <button className="w-6 md:w-7 hover:text-red-500">
                            <CircleMinus
                                strokeWidth={1} className="full-size" />
                        </button>
                        <div className="h-4 w-px bg-slate-300"></div>
                        <span className="font-medium text-lg md:text-xl">1</span>
                        <div className="h-4 w-px bg-slate-300"></div>
                        <button className="w-6 md:w-7 hover:text-red-500">
                            <CirclePlus
                                strokeWidth={1} className="full-size" />
                        </button>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="font-bold text-lg md:text-xl">{"750 грн"}</span>
                        <button className="h-4 flex gap-1 items-start hover:text-red-500 text-sm md:h-5 md:text-base">
                            <span>Видалити</span>
                            <Trash2
                                strokeWidth={1.25} className="full-size" />
                        </button>
                    </div>
                </div>
            </li>
        </>
    )
}

export function DetailsProduct() {
    return (
        <>
            <li className="flex gap-3 h-20">
                <div className="flex justify-center items-center w-20 h-20 overflow-hidden">
                    <Link href={"/"} className="w-full h-full">
                        <img src="/products/product-test-1.jpg" alt="product" className="full-size object-cover" />
                    </Link>
                </div>
                <div className="flex justify-around  gap-4">
                    <Link href={"/"}>
                        <h3 className="text-md hover:text-red-500">Коригуюча пептидна сироватка для зони навколо очей</h3>
                    </Link>
                    <div className="flex flex-col items-center gap-3 text-sm">
                        <h3 className="font-medium">Кількість</h3>
                        <span className="text-md">1</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 text-sm">
                        <h3 className="font-medium">Ціна</h3>
                        <span className="text-md">200000</span>
                    </div>
                </div>
            </li>
        </>
    )
}