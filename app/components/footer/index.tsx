import Image from "next/image";

export default function Footer() {
    return (
        <main className="bg-[#0097FE] w-full h-full px-4 lg:px-20 py-10 text-white flex flex-col justify-between">

            {/* Top */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-25">

                {/* Left */}
                <div className="flex flex-col w-1/2">
                    <Image
                        src="/images/footer/logo.png"
                        alt="UniLink"
                        width={211}
                        height={100}
                        className="my-21.25"
                    />


                    <p
                        className="mb-5.75 opacity-100 rotate-0 font-poppins font-semibold text-[18px] leading-[100%]"
                    >
                        Stay updated with the latest cross-university events
                    </p>


                    <div className=" mb-24.25 h-17.5 flex items-center justify-between relative">
                        <input
                            className="border-b outline-none
                                    w-full h-full opacity-100 rotate-0 
                                    font-poppins font-light text-[16px] leading-[100%] "
                            placeholder="Your email address"
                        />
                        <svg className="absolute right-0" width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.72748e-05 10L20.4168 10L11.6668 1.25L12.7668 0L23.6001 10.8333L12.7668 21.6667L11.6668 20.4167L20.4168 11.6667L9.72748e-05 11.6667V10Z" fill="white" />
                        </svg>

                    </div>



                    <a
                        href="https://www.unilink.am"
                        className=" opacity-100 rotate-0 
                                    font-poppins font-medium text-[18px] leading-[100%]
                                     text-white hover:underline"
                    >
                        WWW.Unilink.am
                    </a>


                </div>

                {/* Right */}
                <div className="flex flex-col items-start w-1/2 xl:w-[51%]">
                    <h2
                        className="w-full my-20 xl:w-160 h-24 font-poppins font-medium text-[42px] leading-12"
                    >
                        Connecting students, universities, and opportunities
                    </h2>

                    {/* Right columns now under h2 */}
                    <div className="flex flex-col xl:flex-row gap-16 xl:mt-6 md:mt-17 mt-25">
                        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between">
                            <div>
                                <p className=" opacity-100 rotate-0 
                                            font-poppins font-semibold text-[18px] leading-[100%]  mb-2">
                                    Menu
                                </p>
                                <div className="flex flex-col gap-4">
                                    <p className="font-poppins font-normal text-[16px] leading-[100%] ">Universities</p>
                                    <p className="font-poppins font-normal text-[16px] leading-[100%] ">Events</p>
                                    <p className="font-poppins font-normal text-[16px] leading-[100%] ">Organizations</p>
                                    <p className="font-poppins font-normal text-[16px] leading-[100%] ">Opportunities</p>
                                </div>
                            </div>

                            <div>
                                <p className=" opacity-100 rotate-0 
                                            font-poppins font-semibold text-[18px] leading-[100%]  mb-2">
                                    Support
                                </p>
                                <div className="flex flex-col gap-4"><p className="font-poppins font-normal text-[16px] leading-[100%] ">How it works</p>
                                    <p className="font-poppins font-normal text-[16px] leading-[100%] ">FAQ</p>
                                    <p className="font-poppins font-normal text-[16px] leading-[100%] ">Contact Us</p>
                                    <p className="font-poppins font-normal text-[16px] leading-[100%] ">Privacy Policy</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className=" opacity-100 rotate-0 flex flex-col gap-4
                                            font-poppins font-semibold text-[18px] leading-[100%] mb-2">
                                Say Hello
                            </p>
                            <p className="font-poppins font-normal text-[16px] leading-[100%] ">info@UniLink.am</p>
                        </div>
                    </div>

                </div>

            </div>

            {/* Bottom */}
            <div className="mt-10 border-t pt-4 text-sm font-Regular w-full">
                © 2026 UniLink Platform. All rights reserved.
            </div>

        </main>
    );
}