'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
    const [imageIdx, setImageIdx] = useState<number>(0);

    const imagesLaptop = [
        'image-2.jpg',
        [
            'image-3.jpg',
            'image-4.jpg',
        ],
        'image-5.jpg',
        'image-1.jpg',
        'image-6.jpg',
        [
            'image-7.jpg',
            'image-8.jpg',
        ],
        'image-9.jpg'
    ];

    const imagesMobile = imagesLaptop.flat();

    useEffect(() => {
        setImageIdx(Math.trunc(imagesMobile.length / 2));
    }, []);


    const nextImage = () => {
        if (imageIdx === imagesMobile.length - 1) {
            setImageIdx(0);
            return;
        }
        setImageIdx(prev => prev + 1);
    }

    const prevImage = () => {
        if (imageIdx === 0) {
            setImageIdx(imagesMobile.length - 1);
            return;
        }
        setImageIdx(prev => prev - 1);
    }


    return <main className="About">

        <div className="Container max-w-360 mx-auto relative">

            {/* ellipse */}
            <div className="hidden md:block absolute top-0 right-0">
                <svg width="449" height="640" viewBox="0 0 449 640" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M847.409 -127.91C785.447 -206.66 700.144 -263.774 603.728 -291.064C507.311 -318.354 404.729 -314.42 310.686 -279.826C216.642 -245.232 135.965 -181.753 80.2156 -98.4887C24.4666 -15.224 -3.4914 83.5523 0.348527 183.683C4.18845 283.814 39.6292 380.159 101.591 458.91C163.553 537.66 248.856 594.774 345.272 622.064C441.689 649.354 544.271 645.42 638.314 610.826C732.358 576.232 813.036 512.753 868.784 429.489L674.868 299.654C646.537 341.968 605.539 374.226 557.747 391.806C509.956 409.386 457.826 411.386 408.829 397.517C359.832 383.649 316.483 354.625 284.995 314.605C253.507 274.586 235.496 225.625 233.545 174.74C231.594 123.856 245.801 73.6594 274.132 31.3459C302.463 -10.9677 343.461 -43.2262 391.253 -60.8063C439.044 -78.3864 491.174 -80.3856 540.171 -66.5172C589.168 -52.6488 632.517 -23.625 664.005 16.3946L847.409 -127.91Z" fill="#0097FE" />
                </svg>
            </div>

            <div className="pt-30 md:pt-25 flex flex-col">

                {/* Intro */}
                <section className="text-start flex flex-col gap-5 px-4 md:px-20 py-9 md:py-35 z-10">
                    <div className="font-medium text-[44px] leading-14.25 tracking-[0%] max-w-174 ">
                        <span className="text-(--secondary)">Bridging </span>
                        <span>Students, Universities, and Opportunities</span>
                    </div>
                    <div className="w-52.5 h-0.5 bg-black"></div>
                    <p className="font-light text-[16px] leading-[100%] tracking-[0%] capitalize text-[#5E6C6A] max-w-211.75">Discover top-tier events across all Armenian universities in one unified feed. Join hackathons, academic debates, and cultural activities designed to foster collaboration and empower the national student community.</p>
                </section>

                {/* Text Area */}
                <section className="flex flex-col justify-center items-center gap-2.5 px-4 md:px-20 py-20">
                    <p className="font-medium text-[44px] leading-16.5 tracking-[0%] text-center max-w-143.5 ">Intelligent Networking For Modern Education</p>
                    <div className="w-30 h-0.5 bg-black"></div>
                    <p className="text-[16px] leading-7.5 tracking-[0%] text-center max-w-266 text-[#5E6C6A] ">UniLink is a leading Armenian platform specializing in connecting the academic world. Since our launch, we’ve delivered innovative digital tools across all regions, transforming ordinary university life into a connected, efficient environment.</p>
                    <p className="text-[16px] leading-7.5 tracking-[0%] text-center max-w-266 text-[#5E6C6A] ">Our team leverages modern technologies to create customized solutions for students and partners. We integrate seamless event management with robust networking tools, ensuring reliable performance for each university's needs.</p>
                </section>

                {/* Accomplishment */}
                <section className="flex flex-col gap-22 px-4 md:px-20 py-10 text-[#333333]">
                    <p className="text-center text-[20px] leading-[100%] tracking-[0%]">Our accomplishment</p>

                    <div className="flex flex-col md:flex-row md:items-end items-center justify-between gap-5">
                        {/* students */}
                        <div className="">
                            <p className="text-[80px] leading-40 tracking-[0%] font-light ">+50K</p>
                            <p className="text-center leading-[100%] text-[16px] ">Students</p>
                        </div>

                        {/* Line */}
                        <div className="md:h-35 md:w-0.5 h-0.5 w-full bg-[#333333]"></div>

                        {/* universities */}
                        <div className="">
                            <p className="text-[80px] leading-40 tracking-[0%] font-light ">+10</p>
                            <p className="text-center leading-[100%] text-[16px] ">Universities</p>
                        </div>

                        {/* Line */}
                        <div className="md:h-35 md:w-0.5 h-0.5 w-full bg-[#333333]"></div>

                        {/* projects */}
                        <div className="">
                            <p className="text-[80px] leading-40 tracking-[0%] font-light ">+100</p>
                            <p className="text-center leading-[100%] text-[16px] ">Joint Projects</p>
                        </div>
                    </div>

                    <Image
                        src={"/images/about/accomplishment.jpg"}
                        alt="accomplishment"
                        width={1280}
                        height={500}
                        className="w-full h-125 rounded-3xl object-cover"
                    />
                </section>
            </div>
        </div>

        {/* Employees */}
        <section className="bg-[#F7F7F7] py-20 w-full">

            <div className="max-w-360 mx-auto flex flex-col items-center gap-5 px-4 md:px-20">
                <p className="text-[#333333] font-medium text-center text-[44px] leading-16.5 tracking-[0%]">-------------------------</p>
                <div className="w-30 h-0.5 bg-black"></div>
                <p className="text-[20px] leading-7.5 tracking-[0%] text-center max-w-157.25 text-[#5E6C6A] ">Our experts combine cutting-edge technology with creative problem-solving to deliver intelligent networking solutions.</p>

                {/* Images Laptop*/}
                <ul className="hidden md:flex items-center justify-between gap-4">
                    {imagesLaptop.map((image, index) => (
                        <li
                            key={index}
                            className={`${image.includes('1') ? "pt-15" : ""}`}
                        >
                            {Array.isArray(image) ?
                                <div>
                                    {image.map((img, idx) => <div
                                        key={idx}
                                        className="flex flex-col"
                                    >
                                        <Image
                                            src={`/images/about/${img}`}
                                            alt={`image-${idx}`}
                                            width={196}
                                            height={240}
                                            className="w-49 h-60 rounded-3xl object-cover my-2"
                                        />
                                    </div>)}
                                </div> : <Image
                                    src={`/images/about/${image}`}
                                    alt={`image-${index}`}
                                    width={196}
                                    height={240}
                                    className="w-49 h-60 rounded-3xl object-cover"
                                />
                            }

                        </li>
                    ))}
                </ul>

                {/* Images MObile */}
                <div className="md:hidden flex flex-col items-center justify-center gap-5">
                    <Image
                        src={`/images/about/${imagesMobile[imageIdx]}`}
                        alt={`image-${imageIdx}`}
                        width={370}
                        height={400}
                        className="rounded-3xl w-92.5 h-100 object-cover"
                    />

                    {/* buttons */}
                    <div className="flex items-center justify-center gap-2.5">
                        <button
                            onClick={prevImage}
                            className="bg-[#BFBFBF]/50 hover:bg-[#BFBFBF] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-200"
                        >
                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.51193 1.41297L8.09727 -0.000362396L0.391934 7.7023C0.267728 7.82573 0.169156 7.9725 0.101892 8.13416C0.0346284 8.29583 0 8.4692 0 8.6443C0 8.8194 0.0346284 8.99278 0.101892 9.15444C0.169156 9.31611 0.267728 9.46288 0.391934 9.5863L8.09727 17.293L9.5106 15.8796L2.2786 8.6463L9.51193 1.41297Z" fill="#333333" />
                            </svg>
                        </button>
                        <button
                            onClick={nextImage}
                            className="bg-[#BFBFBF]/50 hover:bg-[#BFBFBF] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-200"
                        >
                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-0.000214577 1.41297L1.41445 -0.000364304L9.11978 7.7023C9.24399 7.82573 9.34256 7.97249 9.40983 8.13416C9.47709 8.29583 9.51172 8.4692 9.51172 8.6443C9.51172 8.8194 9.47709 8.99278 9.40983 9.15444C9.34256 9.31611 9.24399 9.46288 9.11978 9.5863L1.41445 17.293L0.00111866 15.8796L7.23312 8.6463L-0.000214577 1.41297Z" fill="#333333" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </main>
}