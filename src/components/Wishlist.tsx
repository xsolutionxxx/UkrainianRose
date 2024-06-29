import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Favorites() {
    return (
        <section className="relative">
            <MaxWidthWrapper className="py-12 flex flex-col justify-center items-center text-center">
                <div className="w-2/3 font-semibold text-xl">Список бажаного</div>
                <div className="w-4/5 font-regular text-base">Тут будуть зберігатися товари, які ви обали як улюблені товари, для подальшого перегляду та покупки.</div>
                <ul className="grid grid-cols-4 gap-5">
                    <li className="">
                        
                    </li>
                </ul>
            </MaxWidthWrapper>
        </section>
    )
}