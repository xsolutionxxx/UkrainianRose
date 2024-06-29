import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, X, CircleMinus, CirclePlus, Trash2 } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { CartProduct } from "./Product";
import { ScrollArea } from "@radix-ui/react-scroll-area";
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

    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLDivElement).id === 'modal-container') {
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
                    className="fixed inset-0 lg:px-8 bg-gray-900 z-50 bg-opacity-50 flex justify-center items-center">
                    <div className="h-screen lg:max-h-[calc(100vh-135px)] mx-auto max-w-screen-xl w-full bg-white">
                        <div className="relative w-full px-6 pr-3 py-3 bg-white flex justify-between items-center">
                            <h2 className="font-medium text-3xl">Кошик</h2>
                            <button onClick={toggleCart} className="w-10 hover:text-red-500">
                                <X strokeWidth={1.25} className="full-size" />
                            </button>
                            <div className="absolute bottom-0 left-0 w-full h-px bg-slate-600 opacity-30" />
                        </div>

                        <div className="lg:h-screen max-h-[calc(100vh-188px)] overflow-y-auto custom-scrollbar">
                            <div className="lg:p-8 lg:pt-2 lg:pb-0 bg-white lg:grid grid-cols-1 lg:gap-10 lg:grid-cols-3">
                                <ul className="lg:pr-8 px-6 lg:col-span-2 flex flex-col gap-8 p-4">
                                    <CartProduct />
                                    <CartProduct />
                                    <CartProduct />
                                    <CartProduct />
                                    <CartProduct />
                                    <CartProduct />
                                    <CartProduct />
                                    <CartProduct />
                                </ul>

                                <div className="fixed bottom-0 px-4 w-full bg-white lg:z-0 z-50 flex flex-col gap-3 lg:static py-4 lg:pt-12 lg:gap-8">
                                    <div className="lg:hidden absolute top-0 left-0 w-full h-px bg-slate-600 opacity-30" />
                                    <div className="flex justify-between font-semibold text-2xl">
                                        <h2>Всього:</h2>
                                        <span>{"750 грн"}</span>
                                    </div>
                                    <Link href={"/checkout"}>
                                        <Button className={`${buttonVariants({ variant: 'rose' })} w-full h-12 border-2 font-medium lg:text-lg text-xl text-white`}>{"Оформити замовлення"}</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}