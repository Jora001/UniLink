'use client';

import { FormEvent, useState } from "react";
import { useContact } from "../hooks/contact/useContact";
import { ContactData } from "../types/contact";


export default function Contact() {
    const { sendMessage } = useContact();

    const [formData, setFormData] = useState<ContactData>({
        name: "",
        email: "",
        phoneNumber: "",

type FormDataType = {
    name: string,
    email: string,
    phone: string,
    message: string
};

export default function Contact() {
    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        email: "",
        phone: "",
        message: ""
    });


    const handleSubmit = async (e: FormEvent) => {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const cleaned = Object.fromEntries(
            Object.entries(formData).map(([key, value]) => [
                key, value.trim()
            ])
        ) as ContactData;

        if (!cleaned.name || !cleaned.email || !cleaned.message) return;

        const response = await sendMessage(cleaned);

        if (response) {
            clearForm();
        }
                key,
                typeof value === "string" ? value.trim() : value
            ])
        ) as FormDataType;

        if (!cleaned.name || !cleaned.email || !cleaned.message) return;


        clearForm();
    };


    const clearForm = () => {
        setFormData({
            name: "",
            email: "",
            phoneNumber: "", 
            phone: "",
            message: ""
        });
    }


    return <main className="Contact pt-35 md:pt-37.5 lg:pt-52.5 pb-5 px-4 lg:px-42.5 text-[#333333] ">

        <div className="Container w-full mx-auto max-w-360 flex flex-col lg:flex-row lg:justify-between gap-10">

            {/* Text Area */}
            <section className="flex flex-col gap-12.5 lg:w-1/2">

                {/* Texts */}
                <div className="flex flex-col md:items-center lg:items-start gap-2.5 ">
                    <p className="text-[14px] leading-5">We Are Here To Help You</p>
                    <h2 className=" font-semibold text-[64px] max-w-97 md:max-w-130.5 md:text-center lg:text-start leading-[100%] ">Contact the UniLink Team</h2>
                    <p className="text-[16px] leading-5" >We’re happy to answer your questions and support you every step of the way.</p>
                </div>

                {/* Contact Data */}
                <div className="flex flex-col md:flex-row lg:flex-col gap-7.5 md:justify-between">

                    {/* Email */}
                    <div className="flex items-center gap-2.75">
                        <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.83125 1.83125C-1.24176e-07 3.66042 0 6.60833 0 12.5V16.6667C0 22.5583 -1.24176e-07 25.5063 1.83125 27.3354C3.66042 29.1667 6.60833 29.1667 12.5 29.1667H25C30.8917 29.1667 33.8396 29.1667 35.6688 27.3354C37.5 25.5063 37.5 22.5583 37.5 16.6667V12.5C37.5 6.60833 37.5 3.66042 35.6688 1.83125C33.8396 3.72529e-07 30.8917 0 25 0H12.5C6.60833 0 3.66042 3.72529e-07 1.83125 1.83125ZM7.40625 6.6C6.94654 6.29334 6.38384 6.18187 5.84194 6.29009C5.30004 6.39831 4.82332 6.71737 4.51667 7.17708C4.21001 7.63679 4.09853 8.19949 4.20676 8.74139C4.31498 9.28329 4.63404 9.76001 5.09375 10.0667L16.4396 17.6292C17.1239 18.0851 17.9277 18.3284 18.75 18.3284C19.5723 18.3284 20.3761 18.0851 21.0604 17.6292L32.4062 10.0667C32.866 9.76001 33.185 9.28329 33.2932 8.74139C33.4015 8.19949 33.29 7.63679 32.9833 7.17708C32.6767 6.71737 32.2 6.39831 31.6581 6.29009C31.1162 6.18187 30.5535 6.29334 30.0937 6.6L18.75 14.1625L7.40625 6.6Z" fill="#333333" />
                        </svg>
                        <div className="leading-5 flex flex-col gap-2.5 items-start">
                            <p>Email</p>
                            <p>support@unilink.am</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2.75">
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.7577 25.5208L28.466 24.9167C27.8438 24.8436 27.2131 24.9125 26.6213 25.1182C26.0296 25.3238 25.4921 25.6609 25.0493 26.1042L21.216 29.9375C15.3022 26.929 10.4953 22.1221 7.48682 16.2083L11.341 12.3542C12.2368 11.4583 12.6743 10.2083 12.5285 8.93751L11.9243 3.68751C11.8066 2.67102 11.319 1.73339 10.5545 1.05332C9.78986 0.373262 8.80176 -0.00166681 7.77849 5.57074e-06H4.17432C1.82015 5.57074e-06 -0.13818 1.95834 0.00765308 4.31251C1.11182 22.1042 15.341 36.3125 33.1118 37.4167C35.466 37.5625 37.4243 35.6042 37.4243 33.25V29.6458C37.4452 27.5417 35.8618 25.7708 33.7577 25.5208Z" fill="#333333" />
                        </svg>
                        <div className="leading-5 flex flex-col gap-2.5 items-start">
                            <p>Phone number</p>
                            <p>+374 10 123456</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form */}
            <form
                className="lg:w-1/2 flex flex-col gap-2.5 leading-5 py-10 md:px-10 rounded-[40px] md:shadow-[-6px_-6px_15px_0px_rgba(0,0,0,0.1),6px_6px_15px_0px_rgba(0,0,0,0.1)] "
                onSubmit={handleSubmit}
            >

                {/* Name */}
                <div className="flex flex-col gap-2.5">
                    <p className="text-[16px] pl-2.5">Name</p>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full h-12 rounded-[22px] px-5 py-3.5 border border-[#DFD4D4] gap-2.5 outline-none focus:ring focus:ring-blue-200 transition-all duration-100"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2.5">
                    <p className="text-[16px] pl-2.5">Email</p>
                    <input
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full h-12 rounded-[22px] px-5 py-3.5 border border-[#DFD4D4] gap-2.5 outline-none focus:ring focus:ring-blue-200 transition-all duration-100"
                    />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-2.5">
                    <p className="text-[16px] pl-2.5">Phone Number</p>
                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                        className="w-full h-12 rounded-[22px] px-5 py-3.5 border border-[#DFD4D4] gap-2.5 outline-none focus:ring focus:ring-blue-200 transition-all duration-100"
                    />
                </div>

                {/* message */}
                <div className="flex flex-col gap-2.5">
                    <p className="text-[16px] pl-2.5">message</p>
                    <textarea
                        placeholder="Your message"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full h-30 rounded-[22px] px-5 py-3.5 border border-[#DFD4D4] gap-2.5 resize-none outline-none focus:ring focus:ring-blue-200 transition-all duration-100"
                    />
                </div>

                {/* button */}
                <button
                    type="submit"
                    className="w-42.5 h-12 rounded-3xl px-6 py-2.5 mt-10 border border-white bg-[#1170FF] gap-2.5 text-white text-nowrap cursor-pointer">
                    Send Message
                </button>
            </form>
        </div>
    return <main className="Contact pt-35 lg:pt-37.5 xl:pt-52.5 px-4 lg:px-42.5 text-[#333333] flex flex-col xl:flex-row xl:justify-between gap-10">


        {/* Text Area */}
        <section className="flex flex-col gap-12.5 xl:w-1/2">

            {/* Texts */}
            <div className="flex flex-col lg:items-center xl:items-start gap-2.5 ">
                <p className="text-[14px] leading-5">We Are Here To Help You</p>
                <h2 className=" font-semibold text-[64px] max-w-97 lg:max-w-130.5 lg:text-center xl:text-start leading-[100%] ">Contact the UniLink Team</h2>
                <p className="text-[16px] leading-5" >We’re happy to answer your questions and support you every step of the way.</p>
            </div>

            {/* Contact Data */}
            <div className=" flex flex-col lg:flex-row xl:flex-col gap-7.5 lg:justify-between">

                {/* Email */}
                <div className="flex items-center gap-2.75">
                    <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.83125 1.83125C-1.24176e-07 3.66042 0 6.60833 0 12.5V16.6667C0 22.5583 -1.24176e-07 25.5063 1.83125 27.3354C3.66042 29.1667 6.60833 29.1667 12.5 29.1667H25C30.8917 29.1667 33.8396 29.1667 35.6688 27.3354C37.5 25.5063 37.5 22.5583 37.5 16.6667V12.5C37.5 6.60833 37.5 3.66042 35.6688 1.83125C33.8396 3.72529e-07 30.8917 0 25 0H12.5C6.60833 0 3.66042 3.72529e-07 1.83125 1.83125ZM7.40625 6.6C6.94654 6.29334 6.38384 6.18187 5.84194 6.29009C5.30004 6.39831 4.82332 6.71737 4.51667 7.17708C4.21001 7.63679 4.09853 8.19949 4.20676 8.74139C4.31498 9.28329 4.63404 9.76001 5.09375 10.0667L16.4396 17.6292C17.1239 18.0851 17.9277 18.3284 18.75 18.3284C19.5723 18.3284 20.3761 18.0851 21.0604 17.6292L32.4062 10.0667C32.866 9.76001 33.185 9.28329 33.2932 8.74139C33.4015 8.19949 33.29 7.63679 32.9833 7.17708C32.6767 6.71737 32.2 6.39831 31.6581 6.29009C31.1162 6.18187 30.5535 6.29334 30.0937 6.6L18.75 14.1625L7.40625 6.6Z" fill="#333333" />
                    </svg>
                    <div className="leading-5 flex flex-col gap-2.5 items-start">
                        <p>Email</p>
                        <p>support@unilink.am</p>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2.75">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.7577 25.5208L28.466 24.9167C27.8438 24.8436 27.2131 24.9125 26.6213 25.1182C26.0296 25.3238 25.4921 25.6609 25.0493 26.1042L21.216 29.9375C15.3022 26.929 10.4953 22.1221 7.48682 16.2083L11.341 12.3542C12.2368 11.4583 12.6743 10.2083 12.5285 8.93751L11.9243 3.68751C11.8066 2.67102 11.319 1.73339 10.5545 1.05332C9.78986 0.373262 8.80176 -0.00166681 7.77849 5.57074e-06H4.17432C1.82015 5.57074e-06 -0.13818 1.95834 0.00765308 4.31251C1.11182 22.1042 15.341 36.3125 33.1118 37.4167C35.466 37.5625 37.4243 35.6042 37.4243 33.25V29.6458C37.4452 27.5417 35.8618 25.7708 33.7577 25.5208Z" fill="#333333" />
                    </svg>
                    <div className="leading-5 flex flex-col gap-2.5 items-start">
                        <p>Phone number</p>
                        <p>+374 10 123456</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Form */}
        <form
            className="sm:w-[90%] md:w-[70%] lg:w-full xl:w-1/2 flex flex-col gap-2.5 leading-5 mb-5 py-10 lg:px-10 rounded-[40px] lg:shadow-[-6px_-6px_15px_0px_rgba(0,0,0,0.1),6px_6px_15px_0px_rgba(0,0,0,0.1)] "
            onSubmit={handleSubmit}
        >

            {/* Name */}
            <div className="flex flex-col gap-2.5">
                <p className="text-[16px] pl-2.5">Name</p>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full h-12 rounded-[22px] px-5 py-3.5 border border-[#DFD4D4] gap-2.5 outline-none focus:ring focus:ring-gray-400"
                />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2.5">
                <p className="text-[16px] pl-2.5">Email</p>
                <input
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full h-12 rounded-[22px] px-5 py-3.5 border border-[#DFD4D4] gap-2.5 outline-none focus:ring focus:ring-gray-400"
                />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2.5">
                <p className="text-[16px] pl-2.5">Phone Number</p>
                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full h-12 rounded-[22px] px-5 py-3.5 border border-[#DFD4D4] gap-2.5 outline-none focus:ring focus:ring-gray-400"
                />
            </div>

            {/* message */}
            <div className="flex flex-col gap-2.5">
                <p className="text-[16px] pl-2.5">message</p>
                <textarea
                    placeholder="Your message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full h-30 rounded-[22px] px-5 py-3.5 border border-[#DFD4D4] gap-2.5 resize-none outline-none focus:ring focus:ring-gray-400"
                />
            </div>

            {/* button */}
            <button
                type="submit"
                className="w-42.5 h-12 rounded-3xl px-6 py-2.5 mt-10 border border-white bg-[#1170FF] gap-2.5 text-white cursor-pointer">
                Send Message
            </button>
        </form>
    </main>
}