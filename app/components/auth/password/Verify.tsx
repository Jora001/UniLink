'use client';

import { useAuthModal } from "@/app/context/auth/AuthModalContext";
import useResetPsw from "@/app/hooks/auth/useResetPsw";
import { ResetPswVerify } from "@/app/types/auth";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Verify() {
    const { closeModal } = useAuthModal();
    const { verify, error } = useResetPsw();
    const router = useRouter();

    const [havingError, setHavingError] = useState<boolean>(false);

    const [formData, setFormData] = useState<ResetPswVerify>({
        email: "",
        code: "",
        password: ""
    });

    const [codeType, setCodeType] = useState<"text" | "password">("password");
    const [passwordType, setPasswordType] = useState<"text" | "password">("password");


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const cleaned: ResetPswVerify = {
            email: formData.email.trim(),
            code: formData.code.trim(),
            password: formData.password.trim()
        };

        if (!cleaned.email || !cleaned.password || !cleaned.code) return;

        const user = await verify(cleaned);

        if (user) {
            closeModal();
            router.push("/profile");
        }
    };


    const toggleCode = () => {
        setCodeType(prev => prev === "password" ? "text" : "password");
    }

    const togglePassword = () => {
        setPasswordType(prev => prev === "password" ? "text" : "password");
    }

    return <main className="Request h-full text-(--text) w-100 md:w-120 lg:w-152.75 rounded-3xl flex flex-col justify-center items-center gap-10 py-7 bg-white/5 backdrop-blur-sm shadow-lg border">

        {/* Close */}
        <button
            onClick={closeModal}
            className="absolute top-5.5 right-6.5 cursor-pointer"
        >
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 12.109L6.8664 6.42953M6.8664 6.42953L12.9828 0.75M6.8664 6.42953L0.75 0.75M6.8664 6.42953L12.9828 12.109" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>

        <h2 className="font-semibold text-[32px] leading-[130%] text-center align-middle">Password Reset</h2>

        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-3.5"
        >

            {/* Email */}
            <div className="relative flex items-center w-80 md:w-100 lg:w-119 h-12">
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
                        setFormData(prev => ({ ...prev, email: e.target.value }));
                        setHavingError(false);
                    }}
                    value={formData.email}
                    className="w-full h-full p-4.5 border rounded-[10px] font-normal text-[13px] leading-[130%] align-middle outline-none focus:ring"
                />
                <svg
                    className="absolute right-0 mr-4.5"
                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M7 9L12 12.5L17 9" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="white" />
                </svg>
            </div>

            {/* Code */}
            <div className="relative flex items-center w-80 md:w-100 lg:w-119 h-12">
                <input
                    type={codeType}
                    placeholder="Code"
                    onChange={(e) => {
                        setFormData(prev => ({ ...prev, code: e.target.value }));
                        setHavingError(false);
                    }}
                    value={formData.code}
                    className="w-full h-full p-4.5 border rounded-[10px] font-normal text-[13px] leading-[130%] align-middle outline-none focus:ring"
                />
                <svg
                    onClick={toggleCode}
                    className="absolute right-0 mr-4.5 cursor-pointer"
                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M19.5001 16.0002L17.0249 12.604" stroke="white" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 17.5V14" stroke="white" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.5 15.9999L6.96895 12.6123" stroke="white" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 8C6.6 16 17.4 16 21 8" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            {/* Password */}
            <div className="relative flex items-center w-80 md:w-100 lg:w-119 h-12">
                <input
                    type={passwordType}
                    placeholder="New Password"
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    value={formData.password}
                    className="w-full h-full p-4.5 border rounded-[10px] font-normal text-[13px] leading-[130%] align-middle outline-none focus:ring "
                />
                <svg
                    onClick={togglePassword}
                    className="absolute right-0 mr-4.5 cursor-pointer"
                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M19.5001 16.0002L17.0249 12.604" stroke="white" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 17.5V14" stroke="white" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.5 15.9999L6.96895 12.6123" stroke="white" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 8C6.6 16 17.4 16 21 8" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            {/* Error */}
            {havingError && <p className="w-80 md:w-100 lg:w-119 text-red-500 text-sm text-left">
                {error}
            </p>}

            {/* Button */}
            <button
                type="submit"
                className="w-full h-14 rounded-[10px] bg-linear-to-r from-[#1170FF] to-[#0A4399] font-['Arial'] font-black text-[18px] md:text-[20px] leading-5 text-center align-middle mt-5 cursor-pointer">
                Next
            </button>
        </form>

    </main >
}