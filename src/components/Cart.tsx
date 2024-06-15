import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, X, Minus, Plus, SquareMinus, SquarePlus, CircleMinus, CirclePlus, Trash2 } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";

export default function Cart() {
    const [cartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };

    useEffect(() => {
        if (cartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [cartOpen]);

    const handleClose = (e) => {
        if (e.target.id === 'modal-container') {
            toggleCart();
        }
    };

    return (
        <>
            {/* CartBtn */}
            <button onClick={toggleCart} className="relative w-6 text-white cursor-pointer lg:w-7">
                <ShoppingBag strokeWidth={1.25} className="full-size" />
                <div className="absolute w-custom-width-18 h-custom-height-18 -bottom-2 -right-2 flex justify-center items-center bg-white rounded-full text-center text-xs text-custom-dark-blue overflow-hidden lg:w-5 lg:h-5 lg:-bottom-2.5 lg:-right-2.5 lg:text-sm">99</div>
            </button>

            {/* CartContent */}
            {cartOpen && (
                <div
                    id="modal-container"
                    onClick={handleClose}
                    className="fixed inset-0 bg-gray-900 z-50 flex justify-center items-center bg-opacity-50">
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-h-screen lg:h-[80vh] max-w-screen-xl bg-white shadow-lg">
                        <div className="relative px-6 py-4 bg-white flex justify-between items-center">
                            <h2 className="font-medium text-3xl">Кошик</h2>
                            <button onClick={toggleCart} className="w-10 hover:text-red-500">
                                <X strokeWidth={1.25} className="full-size" />
                            </button>
                            <div className="absolute bottom-0 left-0 w-full h-px bg-slate-600 opacity-30" />
                        </div>

                        <div className="relative lg:py-8 bg-white grid grid-cols-1 lg:gap-10 lg:grid-cols-3 lg:px-8">

                            {/* CartProducts */}
                            <div className="lg:pr-8 px-6 lg:col-span-2 flex flex-col gap-8 p-4 h-[77vh] lg:h-[60vh] overflow-y-auto">
                                <div className="flex gap-5">
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
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex justify-center items-center w-40 h-40 overflow-hidden">
                                        <Link href={"/"}>
                                            <img src="/products/product-test-2.jpg" alt="product" className="full-size object-cover" />
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
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex justify-center items-center w-40 h-40 overflow-hidden">
                                        <Link href={"/"}>
                                            <img src="/products/product-test-3.jpg" alt="product" className="full-size object-cover" />
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
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex justify-center items-center w-40 h-40 overflow-hidden">
                                        <Link href={"/"}>
                                            <img src="/products/product-test-4.jpg" alt="product" className="full-size object-cover" />
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
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex justify-center items-center w-40 h-40 overflow-hidden">
                                        <Link href={"/"}>
                                            <img src="/products/product-test-5.jpg" alt="product" className="full-size object-cover" />
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
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex justify-center items-center w-40 h-40 overflow-hidden">
                                        <Link href={"/"}>
                                            <img src="/products/product-test-6.jpg" alt="product" className="full-size object-cover" />
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
                                </div>
                            </div>

                            {/* CartNavigation */}
                            <div className="relative px-4 w-full bg-white lg:z-0 z-50 flex flex-col gap-3 lg:static py-4 lg:pt-12 lg:gap-8">
                                <div className="lg:hidden absolute top-0 left-0 w-full h-px bg-slate-600 opacity-30" />
                                <div className="flex justify-between font-semibold text-2xl">
                                    <h2>Всього:</h2>
                                    <span>{"750 грн"}</span>
                                </div>
                                <Link href={"/checkout"}>
                                    <Button className={`${buttonVariants({ variant: 'rose' })} w-full h-12 border-2 font-medium text-xl text-white`}>{"Оформити замовлення"}</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div >
            )
            }
        </>
    )
}