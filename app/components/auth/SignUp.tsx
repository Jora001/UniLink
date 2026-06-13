'use client';

import Link from "next/link";
import { useAuthModal } from "../../context/auth/AuthModalContext";
import { FormEvent, useState } from "react";
import { UserData } from "../../types/auth";
import useSignUp from "../../hooks/auth/useSignUp";
import useGoogleAuth from "@/app/hooks/auth/useGoogleAuth";


export default function SignUp() {
    const { closeModal, openModal } = useAuthModal();
    const { signUp, error } = useSignUp();
    const { googleAuth } = useGoogleAuth();

    const [havingError, setHavingError] = useState<boolean>(false);
    const { signUp } = useSignUp();

    const [formData, setFormData] = useState<UserData>(
        {
            "name": "",
            "surname": "",
            "email": "", //abgarmec@mail.ru
            "password": "", //AbGaRMeC&369
            "nickname": "",
            "age": 0,
            "role": "USER",
            "gender": "MALE"
        });

    const [passwordType, setPasswordType] = useState<"text" | "password">("password");


    const handleSubmit = async (e: FormEvent) => {
    const handleSumbit = async (e: FormEvent) => {
        e.preventDefault();

        const cleaned = Object.fromEntries(
            Object.entries(formData).map(([key, value]) => [
                key,
                typeof value === "string" ? value.trim() : value
            ])
        ) as UserData;

        if (!cleaned.email || !cleaned.password) return;

        const uniqueID = Date.now();

        const updatedData: UserData = {
            ...cleaned,
            ...formData,
            nickname: `user${uniqueID}`
            name: `User`,
            surname: `User`,
            nickname: `user${uniqueID}`,
            age: 18
        };

        const user = await signUp(updatedData);

        if (!user) {
            setHavingError(true);
            return;
        }

        closeModal();
        openModal("signIn");
        if (user) {
            closeModal();
            openModal("signIn");
        }
    };


    const togglePassword = () => {
        setPasswordType(prev => prev === "password" ? "text" : "password");
    }


    return <main className="SignUp h-full text-(--text) w-100 md:w-120 lg:w-152.75 rounded-3xl flex flex-col justify-center items-center gap-6 py-7 bg-white/5 backdrop-blur-sm shadow-lg border">
    return <main className="SignUp h-full text-(--text) w-100 md:w-120 lg:w-152.75 rounded-3xl flex flex-col justify-center items-center gap-10 py-7 bg-white/5 backdrop-blur-sm shadow-lg border">

        {/* Close */}
        <button
            onClick={closeModal}
            className="absolute top-5.5 right-6.5 cursor-pointer"
        >
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 12.109L6.8664 6.42953M6.8664 6.42953L12.9828 0.75M6.8664 6.42953L0.75 0.75M6.8664 6.42953L12.9828 12.109" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>

        <h2 className="font-semibold text-[32px] leading-[130%] text-center align-middle">Sign Up</h2>

        <form
            onSubmit={handleSubmit}
            onSubmit={handleSumbit}
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
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    value={formData.email}
                    className="w-full h-full p-4.5 border rounded-[10px] font-normal text-[13px] leading-[130%] align-middle outline-none focus:ring"
                />
                <svg className="absolute right-0 mr-4.5"
                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9L12 12.5L17 9" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="white" />
                </svg>
            </div>


            <div className="flex gap-4 w-80 md:w-100 lg:w-119">

                {/* Name */}
                <div className="relative flex items-center w-1/2 h-12">
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={(e) => {
                            setFormData(prev => ({ ...prev, name: e.target.value }));
                            setHavingError(false);
                        }}
                        value={formData.name}
                        className="w-full h-full p-4.5 border rounded-[10px] font-normal text-[13px] leading-[130%] outline-none focus:ring"
                    />
                </div>

                {/* Surename */}
                <div className="relative flex items-center w-1/2 h-12">
                    <input
                        type="text"
                        placeholder="Surname"
                        onChange={(e) => {
                            setFormData(prev => ({ ...prev, surname: e.target.value }));
                            setHavingError(false);
                        }}
                        value={formData.surname}
                        className="w-full h-full p-4.5 border rounded-[10px] font-normal text-[13px] leading-[130%] outline-none focus:ring"
                    />
                </div>
            </div>

            {/* Name */}
            {/* <div className="relative flex items-center w-80 md:w-100 lg:w-119 h-12">
                <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    value={formData.name}
                    className="w-full h-full p-4.5 border rounded-[10px] font-normal text-[13px] leading-[130%] outline-none focus:ring"
                />
            </div> */}

            {/* Surename */}
            {/* <div className="relative flex items-center w-80 md:w-100 lg:w-119 h-12">
                <input
                    type="text"
                    placeholder="Surname"
                    onChange={(e) => setFormData(prev => ({ ...prev, surname: e.target.value }))}
                    value={formData.surname}
                    className="w-full h-full p-4.5 border rounded-[10px] font-normal text-[13px] leading-[130%] outline-none focus:ring"
                />
            </div> */}

            {/* Phone */}
            <div className="relative flex items-center w-80 md:w-100 lg:w-119 h-12">
                <input
                    type="tel"
                    placeholder="Phone number"
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full h-full p-4.5 border rounded-[10px] font-normal text-[13px] leading-[130%] align-middle outline-none focus:ring "
                />
                <svg className="absolute right-0 mr-4.5"
                    width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M16.3734 12.0937L12.2552 12.8252C9.4735 11.5453 7.7552 10.0752 6.7552 7.78353L7.52515 3.9976L6.06972 0.450195H2.3188C1.19125 0.450195 0.303341 1.30433 0.471741 2.32632C0.892151 4.8777 2.13173 9.50365 5.7552 12.8252C9.5604 16.3133 15.0409 17.8269 18.0572 18.4285C19.222 18.6609 20.2552 17.8279 20.2552 16.7352V13.4496L16.3734 12.0937Z" stroke="white" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>


            <div className="flex gap-4 w-80 md:w-100 lg:w-119">

                {/* Age */}
                <div className="relative flex items-center w-1/2 h-12">
                    <input
                        type="text"
                        placeholder="Age"
                        onChange={(e) => setFormData(prev => ({ ...prev, age: Number(e.target.value) }))}
                        value={formData.age || ""}
                        className="w-full h-full p-4.5 border rounded-[10px] font-normal text-[13px] leading-[130%] outline-none focus:ring"
                    />
                </div>

                {/* Gender */}
                <div className="relative flex items-center w-1/2 h-12">
                    <select
                        value={formData.gender}
                        onChange={(e) => {
                            setFormData(prev => ({ ...prev, gender: e.target.value as "MALE" | "FEMALE" }));
                            setHavingError(false);
                        }}
                        className="w-full h-full px-4.5 border rounded-[10px] font-normal text-[13px] outline-none focus:ring bg-transparent"
                    >
                        <option value="MALE" className="text-black">MALE</option>
                        <option value="FEMALE" className="text-black">FEMALE</option>
                    </select>
                </div>
            </div>
            {/* Age */}
            {/* <div className="relative flex items-center w-80 md:w-100 lg:w-119 h-12">
                <input
                    type="number"
                    placeholder="Age"
                    onChange={(e) => setFormData(prev => ({ ...prev, age: Number(e.target.value) }))}
                    value={formData.age}
                    className="w-full h-full p-4.5 border rounded-[10px] font-normal text-[13px] leading-[130%] outline-none focus:ring"
                />
            </div> */}

            {/* Gender */}
            {/* <div className="relative flex items-center w-80 md:w-100 lg:w-119 h-12">
                <select
                    value={formData.gender}
                    onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value as "MALE" | "FEMALE" }))}
                    className="w-full h-full p-4.5 border rounded-[10px] font-normal text-[13px] leading-[130%] outline-none focus:ring bg-transparent"
                >
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                </select>
            </div> */}

            {/* Password */}
            <div className="relative flex items-center w-80 md:w-100 lg:w-119 h-12">
                <input
                    type={passwordType}
                    placeholder="Password"
                    onChange={(e) => {
                        setFormData(prev => ({ ...prev, password: e.target.value }));
                        setHavingError(false);
                    }}
                    value={formData.password}
                    className="w-full h-full p-4.5 border rounded-[10px] font-normal text-[13px] leading-[130%] align-middle outline-none focus:ring "
                />
                <svg 
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

            <button
                type="submit"
                className="w-full h-14 rounded-[10px] bg-linear-to-r from-[#1170FF] to-[#0A4399] font-['Arial'] font-black text-[18px] md:text-[20px] leading-5 text-center align-middle mt-5 cursor-pointer">

            <button
                type="submit"
                className="w-full h-14 rounded-[10px] bg-linear-to-r from-[#1170FF] to-[#0A4399] font-['Arial'] font-black text-[18px] md:text-[20px] leading-5 text-center align-middle mt-7 cursor-pointer">
                Sign Up
            </button>
        </form>

        {/* or */}
        <div className="flex items-center justify-between w-80 md:w-100 lg:w-119">
            <svg className="w-35 md:w-45 lg:w-full" width="199" height="1" viewBox="0 0 199 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0.5H199" stroke="white" strokeDasharray="2 2" />
            </svg>
            <p className="font-semibold text-[15px] leading-[130%] align-middle">Or</p>
            <svg className="w-35 md:w-45 lg:w-full" width="199" height="1" viewBox="0 0 199 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0.5H199" stroke="white" strokeDasharray="2 2" />
            </svg>
        </div>

        {/* Sing Up With */}
        <button
            onClick={googleAuth}
            className="w-80 md:w-100 lg:w-119 flex items-center gap-3.75 border rounded-[10px] py-5.5 px-7.5 cursor-pointer">

        <div className="w-80 md:w-100 lg:w-119 flex items-center gap-3.75 border rounded-[10px] py-5.5 px-7.5">
            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.543 12.8002C24.543 11.7707 24.4594 11.0194 24.2786 10.2402H12.522V14.8872H19.4229C19.2838 16.042 18.5325 17.7812 16.8629 18.9498L16.8395 19.1054L20.5567 21.9851L20.8142 22.0108C23.1794 19.8264 24.543 16.6124 24.543 12.8002Z" fill="#4285F4" />
                <path d="M12.5222 25.0434C15.903 25.0434 18.7413 23.9303 20.8144 22.0103L16.8631 18.9493C15.8057 19.6867 14.3865 20.2015 12.5222 20.2015C9.21086 20.2015 6.40042 18.0172 5.39857 14.998L5.25172 15.0105L1.38649 18.0019L1.33594 18.1424C3.39507 22.2328 7.62469 25.0434 12.5222 25.0434Z" fill="#34A853" />
                <path d="M5.39827 14.9983C5.13392 14.2192 4.98094 13.3843 4.98094 12.5217C4.98094 11.6591 5.13392 10.8243 5.38436 10.0452L5.37736 9.87924L1.46368 6.83984L1.33564 6.90075C0.486968 8.59818 0 10.5043 0 12.5217C0 14.5391 0.486968 16.4452 1.33564 18.1426L5.39827 14.9983Z" fill="#FBBC05" />
                <path d="M12.5222 4.84176C14.8735 4.84176 16.4596 5.85742 17.3639 6.70619L20.8979 3.25569C18.7275 1.23828 15.903 0 12.5222 0C7.62469 0 3.39507 2.81045 1.33594 6.9009L5.38466 10.0453C6.40042 7.02616 9.21086 4.84176 12.5222 4.84176Z" fill="#EB4335" />
            </svg>
            <span className="font-normal text-[15px] leading-[130%] align-middle">Continue with Google</span>
        </button>

        {/* Sign In */}
        <div>
        </div>

        {/* Sign In */}
        <div className="">
            <span className="font-normal text-[14px] leading-[130%] align-middle" >Already have an account? </span>
            <button
                onClick={() => { closeModal(), openModal("signIn") }}
                className="font-bold text-[14px] leading-[130%] align-middle text-[#0066ff] cursor-pointer "
            > Sign In </button>
        </div>
    </main>
}