import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";


export default function PersonalInfo() {
    return (
        <div className="pl-8">
            <h1 className="pb-10 font-bold text-3xl">Персональні данні</h1>
            <form action="#" className="pl-12 w-full grid grid-cols-2 items-start gap-12">
                <div className="flex flex-col gap-5">
                    <h1 className="font-medium text-lg">Зміна персональних данних</h1>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Ваше ім'я</Label>
                        <Input type="email" id="email" placeholder="Ваше ім'я" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Ваше прізвище</Label>
                        <Input type="email" id="email" placeholder="Ваше прізвище" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Ваше електронна пошта</Label>
                        <Input type="email" id="email" placeholder="Ваше електронна пошта" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Ваше номер телефону</Label>
                        <Input type="email" id="email" placeholder="Ваше номер телефону" />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-medium text-lg">Зміна пароля</h1>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Старий пароль</Label>
                        <Input type="email" id="email" placeholder="Старий пароль" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Новий пароль</Label>
                        <Input type="email" id="email" placeholder="Новий пароль" />
                    </div>
                </div>
                <Button
                    type="submit"
                    className={`${buttonVariants({ variant: 'rose' })} w-48 h-12 border-2 font-medium lg:text-lg text-xl text-white`}>
                    {"Зберегти"}
                </Button>
            </form>
        </div>
    )
}