export default function Sponsors() {
    return (
        <div id="sponsors" className="flex flex-col items-center p-10 pt-16 md:py-16 md:pt-25 lg:pb-5 lg:pt-25 xl:pt-30 z-10 text-center bg-blue-800">
            <div className="flex flex-col text-center mb-8">
                <h1 className="text-4xl text-white font-bold">Sponsors</h1>
            </div>

            <p className="text-lg text-white w-3/5">
                We are currently looking for sponsors to help make the event possible.
                If you are interested in sponsoring, email
                {" "}
                <a href="mailto:khushp2006@gmail.com" className="underline text-blue-200">khushp2006@gmail.com.</a>
                {" "}
            </p>

            <div className='my-4'>
                <a href="/sponsorship_package.pdf" target="_blank" rel="noreferrer">
                    <button className='px-6 py-3 border border-blue-400 text-gray-200 hover:bg-blue-400 rounded-lg font-medium'>
                        View our Sponsorship Package
                    </button>
                </a>
            </div>
        </div>
    )
}