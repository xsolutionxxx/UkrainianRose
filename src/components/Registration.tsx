"use client";

/* import { useState } from "react"; */
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
/* import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"; */

/* import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'; */


export default function Authentication() {
    /* const [selectedDate, setSelectedDate] = useState(null); */

    return (
        <section className="relative">
            <MaxWidthWrapper className="flex justify-center items-center py-12 px-16 sm:px-0">
                <form action="#" className="w-full flex flex-col items-center gap-6 sm:w-2/3 md:w-96">
                    <h1 className="text-3xl font-bold">Реєстрація</h1>
                    {/* <Select>
                        <SelectTrigger className="w-full h-12 border-slate-600 text-base text-gray-500">
                            <SelectValue placeholder="Gender" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="famale">Famale</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select> */}
                    <Input placeholder="Ваше ім'я" />
                    <Input placeholder="Ваше прізвище" />
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                    </LocalizationProvider> */}
                    <Input placeholder="Ваше номер телефону" />
                    <Input placeholder="Пароль" />
                    <Input placeholder="Пароль повторно" />
                    <Input placeholder="Ваше електронна пошта" />
                    <div className="flex justify-center items-center space-x-2 px-4">
                        <Checkbox />
                        <div className="grid gap-1.5 leading-none">
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Отримувати повідомлення про новини, знижки та спеціальні пропозиції
                            </label>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        className={`${buttonVariants({ variant: 'rose' })} w-full h-12 border-2 font-medium lg:text-lg text-xl text-white`}>
                        {"Зареєструватися"}
                    </Button>
                </form>
            </MaxWidthWrapper>
        </section>
    )
}