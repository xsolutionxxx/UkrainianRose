"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, PackageOpen } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";

import { DetailsProduct } from "./Product";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

import { ScrollArea } from "@/components/ui/scroll-area"


export default function History() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    function toggleDetails(index: number) {
        setExpandedIndex(index === expandedIndex ? null : index);
    }

    function goToPage(page: number) {
        setCurrentPage(page);
        setExpandedIndex(null);
    }

    const orders = [
        { id: 1, status: "Скасовано", declarationNumber: "1231231 3123", date: "14 жовтня 2022 10:12", amount: "2000 грн" },
        { id: 2, status: "Скасовано", declarationNumber: "1231232 2343", date: "18 березня 2023 15:14", amount: "3000 грн" },
        { id: 3, status: "Скасовано", declarationNumber: "1231232 5235", date: "22 травень 2023 18:52", amount: "1040 грн" },
        { id: 4, status: "Скасовано", declarationNumber: "1231232 8624", date: "16 червень 2023 12:26", amount: "4000 грн" },
        { id: 5, status: "Скасовано", declarationNumber: "1231231 3123", date: "14 жовтня 2022 10:12", amount: "2000 грн" },
        { id: 6, status: "Скасовано", declarationNumber: "1231232 2343", date: "18 березня 2023 15:14", amount: "3000 грн" },
        { id: 7, status: "Скасовано", declarationNumber: "1231232 5235", date: "22 травень 2023 18:52", amount: "1040 грн" },
        { id: 8, status: "Скасовано", declarationNumber: "1231232 8624", date: "16 червень 2023 12:26", amount: "4000 грн" },
        { id: 9, status: "Скасовано", declarationNumber: "1231232 2343", date: "18 березня 2023 15:14", amount: "3000 грн" },
        { id: 10, status: "Скасовано", declarationNumber: "1231232 5235", date: "22 травень 2023 18:52", amount: "1040 грн" },
        { id: 11, status: "Скасовано", declarationNumber: "1231232 8624", date: "16 червень 2023 12:26", amount: "4000 грн" },
        { id: 12, status: "Скасовано", declarationNumber: "1231231 3123", date: "14 жовтня 2022 10:12", amount: "2000 грн" },
    ];

    const totalPages = Math.ceil(orders.length / itemsPerPage);
    const currentOrders = orders.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="pl-8">
            <h1 className="font-bold text-3xl pb-10">Мої замовлення</h1>
            <div className="flex pl-12 gap-8">
                <Select>
                    <SelectTrigger className="w-48 border-gray-400">
                        <SelectValue placeholder="За періодом" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="month">За місяць</SelectItem>
                            <SelectItem value="year">За рік</SelectItem>
                            <SelectItem value="all">За весь час</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-48 border-gray-400">
                        <SelectValue placeholder="За статусом" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="success">Доставлені</SelectItem>
                            <SelectItem value="in-process">В обробці</SelectItem>
                            <SelectItem value="canceled">Скасовані</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <ul className="pl-12 pr-6 my-8 flex flex-col gap-4 max-h-screen">
                {currentOrders.map((order, index) => (
                    <li className="p-4 h-full grid grid-cols-5 gap-6 border border-slate-300 shadow-md">
                        <div className="flex flex-col col-span-3 justify-between gap-3">
                            <h3 className="font-bold text-red-700">{order.status}</h3>
                            <div className="flex gap-4 text-sm">
                                <h4>Замовлення №{order.declarationNumber}</h4>
                                <p>{order.date}</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-3 text-sm">
                            <h4 className="font-medium ">Сума</h4>
                            <p>{order.amount}</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <Button
                                onClick={() => toggleDetails(index)}
                                className={`${buttonVariants({ variant: 'clear' })}`}>Детальніше
                                <ChevronDown strokeWidth={1.25} className="w-4 h-4" />
                            </Button>
                        </div>
                        {expandedIndex === index && (
                            <>
                                <div className="flex flex-col col-span-2 gap-2 text-sm text-slate-500">
                                    <h4 className="font-medium">Деталі доставки</h4>
                                    <p>тел. 0996462584</p>
                                    <p>Івано-Франківськ, Івано-Франківська обл., Івано-Франківський р-н, Відділення №2 (до 30 кг), вул. Вовчинецька, 26</p>
                                    <p>Номер декларації: 20400359303075</p>
                                </div>
                                <div className="flex flex-col justify-start items-start col-span-3 gap-2">
                                    <h4 className="font-medium text-sm text-slate-500">Замовлені товари</h4>
                                    <ScrollArea className="h-[180px]">
                                        <ul className="flex flex-col gap-3 pr-6">
                                            <DetailsProduct />
                                            <DetailsProduct />
                                            <DetailsProduct />
                                            <DetailsProduct />
                                            <DetailsProduct />
                                            <DetailsProduct />
                                        </ul>
                                    </ScrollArea>
                                    <div className="py-px pr-6 grid text-sm w-full gap-1">
                                        <div className="flex justify-between">
                                            <h4>Підсумок</h4>
                                            <p>60000</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <h4>Доставка</h4>
                                            <p>250</p>
                                        </div>
                                        <div className="mt-2 font-medium text-lg flex justify-between">
                                            <h2>Разом</h2>
                                            <p>62500</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            <Pagination className="mt-8">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={() => goToPage(Math.max(1, currentPage - 1))} href="#" />
                    </PaginationItem>
                    {[...Array(totalPages)].map((_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink
                                href="#"
                                isActive={currentPage === index + 1}
                                onClick={() => goToPage(index + 1)}
                            >
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext onClick={() => goToPage(Math.min(totalPages, currentPage + 1))} href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}