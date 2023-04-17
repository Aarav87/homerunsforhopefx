import {GoClock, GoLocation} from "react-icons/all";

export default function Event() {
    return (
        <div id="event" className="flex flex-col items-center p-10 pt-16 md:py-16 md:pt-25 lg:pb-24 lg:pt-25 xl:pt-30 z-10 text-center bg-[#D8863B]">
            <div className="flex flex-col text-center mb-8">
                <h1 className="text-4xl text-white font-bold">Event Details</h1>
            </div>

            <div className="flex flex-row justify-center w-full h-full flex-wrap gap-6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.694338908298!2d-79.66456339999999!3d43.6129055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b40b93ac4ea7d%3A0x59b211451e79d796!2sSt.%20Francis%20Xavier%20Secondary%20School!5e0!3m2!1sen!2sca!4v1681771093546!5m2!1sen!2sca"
                    className="w-full lg:w-1/3 h-auto m-4" allowFullScreen="False" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="grid grid-cols-1 flex-wrap justify-between lg:w-1/4 h-full gap-4">
                    <span>
                        <div className="flex flex-col p-4 items-center lg:items-start text-center lg:text-left">
                            <div className="flex items-center justify-center text-2xl text-white bg-white w-12 h-12 rounded-lg">
                                <GoLocation className="text-blue-500" />
                            </div>
                            <h1 className="text-3xl text-white font-bold py-4">Location</h1>
                            <p className="text-lg text-gray-200 font-bold">St. Francis Xavier S.S</p>
                            <p className="text-sm text-gray-200">50 Bristol Rd W, Mississauga, ON L5R 3K3</p>
                        </div>

                        <div className="flex flex-col p-4 items-center lg:items-start text-center lg:text-left">
                            <div className="flex items-center justify-center text-2xl text-white bg-white w-12 h-12 rounded-lg">
                                <GoClock className="text-blue-500" />
                            </div>
                            <h1 className="text-3xl text-white font-bold py-4">Timings</h1>
                            <p className="text-lg text-gray-200 font-bold">June 1st, 2023</p>
                            <p className="text-sm text-gray-200">3:00 PM to 5:30 PM (tentative as changes may occur)</p>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}