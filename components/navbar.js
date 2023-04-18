import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.png"
import {GoThreeBars} from "react-icons/go";

const menuItems = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/#about"
    },
    {
        name: "Event",
        path: "/#event"
    },
    {
        name: "Sponsors",
        path: "/#sponsors"
    },
    // {
    //     name: "Team",
    //     path: "/#team"
    // }
]

export default function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [navBg, setNavBg] = useState(false);

    const changeNavBg = () => {
        window.scrollY >= 80 ? setNavBg(true) : setNavBg(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        return () => window.removeEventListener('scroll', changeNavBg);
    })

    return (
        <header className={`flex flex-col items-center py-2 lg:py-4 w-full transition-colors duration-400 ${navBg || showDropdown ? 'bg-blue-900' : 'bg-transparent'} `}>
            <div className="container px-4 lg:flex lg:items-center lg:justify-around w-full">
                <div className="flex justify-between items-center">
                    <Link href="/#home" className="flex flex-row items-center gap-4 font-bold text-xl">
                        <Image src={Logo} alt="logo" width={64} height={64} />
                        <h2 className="text-2xl text-white inline-block">HomeRunsForHope</h2>
                    </Link>

                    <button
                        className="px-3 py-1 opacity-50 hover:opacity-75 rounded text-white lg:hidden"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        <GoThreeBars />
                    </button>
                </div>

                <div className={`${showDropdown ? "flex" : "hidden"} lg:flex flex-col lg:flex-row mt-3 lg:mt-0 lg:text-lg`}>
                    {menuItems.map((menuItem, i) => (
                        <Link
                            className="text-gray-300 hover:bg-gray-200/25 hover:text-white p-2 lg:px-4 lg:mx-2 rounded duration-300 transition-colors"
                            href={menuItem.path}
                            key={i}
                        >
                            {menuItem.name}
                        </Link>
                    ))}
                    <Link href="." className="text-blue-200 hover:bg-blue-500 hover:text-white text-center border border-solid border-blue-500 mt-1 lg:mt-0 lg:ml-1 p-2 lg:px-4 lg:mx-2 rounded">
                        Sponsor Us
                    </Link>
                </div>
            </div>
        </header>
    )

}