import Navbar from "@/components/navbar";
import Image from "next/image";
import About from "@/components/about";
import Event from "@/components/event";
import Sponsors from "@/components/sponsors";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <div className="font-raleway">
            <div className="fixed z-50 w-screen" id="home">
                <Navbar />
            </div>
            <header className="flex relative">
                <img alt="Banner" src="/banner.jpg" className="duration-300 transition-filter w-full h-[100vh] object-cover" />
                <div className="absolute h-screen w-full p-4 xs:p-8 sm:p-16 flex flex-col justify-center items-center bg-black/60">
                    <div className="text-center">
                        <div className="mb-4">
                            <div className="flex flex-col flex-wrap gap-1 text-6xl sm:text-4xl lg:text-8xl font-extrabold">
                                <span className="inline-block relative bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">HOME RUNS</span>
                                <span className="inline-block relative bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">FOR HOPE</span>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-3/4 lg:w-1/2 mb-6 flex flex-col gap-2 text-white mx-auto">
                        <p className="text-xl text-center font-light">
                          Students vs Teachers charity baseball game on June 1st.<br />
                          In affiliation with the Jays Care Foundation!
                        </p>
                        <Image src="/jays_care.png" alt="Jays Care Foundation" width={400} height={100} className="mx-auto sm:h-300 sm:w-100" quality={100} />
                    </div>
                </div>
            </header>

            <div className="-translate-y-40">
                <div className="h-0">
                    <svg preserveAspectRatio="none" width="100%" height="300px" viewBox="0 0 1440 600" fill="none"
                         xmlns="http://www.w3.org/2000/svg" className="z-[10] relative">
                        <path
                            className="fill-blue-500"
                            d="M 0,600 C 0,600 0,200 0,200 C 101.39285714285714,193.03571428571428 202.78571428571428,186.07142857142858 313,196 C 423.2142857142857,205.92857142857142 542.25,232.75 660,232 C 777.75,231.25 894.2142857142858,202.92857142857144 1024,193 C 1153.7857142857142,183.07142857142856 1296.892857142857,191.53571428571428 1440,200 C 1440,200 1440,600 1440,600 Z"
                            stroke="none"/>
                    </svg>
                </div>

                <div className="h-0">
                    <svg preserveAspectRatio="none" width="100%" height="300px" viewBox="0 0 1440 600" fill="none"
                         xmlns="http://www.w3.org/2000/svg" className="z-[20] relative">
                        <path
                            className="fill-blue-800"
                            d="M 0,600 C 0,600 0,400 0,400 C 134.85714285714286,415.3571428571429 269.7142857142857,430.7142857142857 378,434 C 486.2857142857143,437.2857142857143 568.0000000000001,428.5 685,417 C 801.9999999999999,405.5 954.2857142857142,391.2857142857143 1086,388 C 1217.7142857142858,384.7142857142857 1328.857142857143,392.3571428571429 1440,400 C 1440,400 1440,600 1440,600 Z"
                            stroke="none" />
                    </svg>
                </div>
                <div className="h-[130px]" />
            </div>

            <About />

            <div>
                <div className="h-0">
                    <svg preserveAspectRatio="none" width="100%" height="200px" viewBox="0 0 1440 600" fill="none"
                         xmlns="http://www.w3.org/2000/svg" className="z-[20] relative rotate-180">
                        <path
                            className="fill-blue-800"
                            d="M 0,600 C 0,600 0,400 0,400 C 134.85714285714286,415.3571428571429 269.7142857142857,430.7142857142857 378,434 C 486.2857142857143,437.2857142857143 568.0000000000001,428.5 685,417 C 801.9999999999999,405.5 954.2857142857142,391.2857142857143 1086,388 C 1217.7142857142858,384.7142857142857 1328.857142857143,392.3571428571429 1440,400 C 1440,400 1440,600 1440,600 Z"
                            stroke="none" />
                    </svg>
                </div>

                <div className="h-0 -translate-y-40">
                    <svg preserveAspectRatio="none" width="100%" height="300px" viewBox="0 0 1440 600" fill="none"
                         xmlns="http://www.w3.org/2000/svg" className="z-[20] relative">
                        <path
                            className="fill-[#D8863B]"
                            d="M 0,600 C 0,600 0,400 0,400 C 134.85714285714286,415.3571428571429 269.7142857142857,430.7142857142857 378,434 C 486.2857142857143,437.2857142857143 568.0000000000001,428.5 685,417 C 801.9999999999999,405.5 954.2857142857142,391.2857142857143 1086,388 C 1217.7142857142858,384.7142857142857 1328.857142857143,392.3571428571429 1440,400 C 1440,400 1440,600 1440,600 Z"
                            stroke="none" />
                    </svg>
                </div>
                <div className="h-[100px]" />
            </div>

            <Event />

            <div>
                <div className="h-0">
                    <svg preserveAspectRatio="none" width="100%" height="200px" viewBox="0 0 1440 600" fill="none"
                         xmlns="http://www.w3.org/2000/svg" className="z-[20] relative rotate-180">
                        <path
                            className="fill-[#D8863B]"
                            d="M 0,600 C 0,600 0,400 0,400 C 134.85714285714286,415.3571428571429 269.7142857142857,430.7142857142857 378,434 C 486.2857142857143,437.2857142857143 568.0000000000001,428.5 685,417 C 801.9999999999999,405.5 954.2857142857142,391.2857142857143 1086,388 C 1217.7142857142858,384.7142857142857 1328.857142857143,392.3571428571429 1440,400 C 1440,400 1440,600 1440,600 Z"
                            stroke="none" />
                    </svg>
                </div>

                <div className="h-0 -translate-y-10">
                    <svg preserveAspectRatio="none" width="100%" height="200px" viewBox="0 0 1440 600" fill="none"
                         xmlns="http://www.w3.org/2000/svg" className="z-[10] relative">
                        <path
                            className="fill-blue-800"
                            d="M 0,600 C 0,600 0,200 0,200 C 101.39285714285714,193.03571428571428 202.78571428571428,186.07142857142858 313,196 C 423.2142857142857,205.92857142857142 542.25,232.75 660,232 C 777.75,231.25 894.2142857142858,202.92857142857144 1024,193 C 1153.7857142857142,183.07142857142856 1296.892857142857,191.53571428571428 1440,200 C 1440,200 1440,600 1440,600 Z"
                            stroke="none"/>
                    </svg>
                </div>
                <div className="h-[100px]" />
            </div>

            <Sponsors />
            <Footer />
        </div>
  )
}