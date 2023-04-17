import Image from "next/image";

export default function About() {
    return (
        <div id="about" className="flex flex-col items-center lg:flex-row bg-blue-800 p-10 lg:p-20 xl:px-40 items-left gap-6 z-[30] py-0 lg:pt-8 pb-0 lg:pb-0 xl:pb-0">
            <div className="flex flex-col items-center lg:items-start w-[80%] text-center lg:text-left mb-4 lg:mb-0 sm:pt-8">
                <h1 className="text-white font-bold text-3xl md:text-4xl">
                    Using baseball to {" "}
                    <span className="text-orange-500">empower</span>
                    {" "} Canadian youth
                </h1>

                <p className="mt-4 w-[85%] md:w-[80%] text-lg text-gray-200">
                    HomeRunsForHope is a charity students vs teachers baseball game
                    being hosted at St. Francis Xavier SS, Mississauga, on June 1st.
                    All proceeds will go to the Jays Care Foundation to support the
                    development of marginalized Canadian youth.
                </p>

                <div className='my-4'>
                    <a href="https://www.mlb.com/bluejays/community/jays-care" target="_blank" rel="noreferrer">
                        <button className='px-6 py-3 border border-blue-400 text-gray-200 hover:bg-blue-400 rounded-lg font-medium'>
                            Learn more about the Jays Care Foundation
                        </button>
                    </a>
                </div>
            </div>

            <div className="flex p-0 m-0 w-full md:w-1/2 h-3/4">
                <Image src="/banner.jpg" alt="Jays Care Foundation in-action" height={500} width={500} className="rounded-lg" />
            </div>
        </div>
    )
}