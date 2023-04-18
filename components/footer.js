import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex bg-dark-periwinkle flex-col gap-4 p-8 py-16 items-center bg-blue-500">
            <Image src="/logo.png" alt="Logo" width={150} height={50} />
            {/*<div className="pt-2 gap-6 flex pb-3">*/}
            {/*    {socials.map((social, i) => (*/}
            {/*        <a href={social.url} key={i}>*/}
            {/*            <Image src={social.img} alt={social.name} width={40} height={40} />*/}
            {/*        </a>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <p className="lg:text-xl text-md text-white">
                Made by
                {" "}
                <a
                    className="underline text-blue-200 transition-all hover:text-amber-300 duration-100"
                    href="https://github.com/Aarav87"
                >
                    Aarav Chhabra
                </a>
            </p>
        </div>
    )
}