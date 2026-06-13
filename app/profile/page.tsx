'use client';

import useProfile from "@/app/hooks/profile/useProfile";
import { ProfileData } from "@/app/types/profile";
import { useEffect, useRef, useState } from "react";
import { UserDataResponse } from "../types/auth";
import About from "@/app/components/profile/About";
import Password from "@/app/components/profile/Password";
import Notification from "@/app/components/profile/Notification";
import Projects from "@/app/components/profile/Projects";
import Image from "next/image";
import SkillsModal from "../components/profile/SkillsModal";
import { useAuth } from "../context/auth/AuthContext";


export default function Profile() {
    const { user, loading } = useAuth();
    const { getUserProfile } = useProfile();
    const [profile, setProfile] = useState<ProfileData | null>(null);
    const [activeTab, setActiveTab] = useState("about");

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<string | null>(null);

    const [edit, setEdit] = useState<"education" | "skill" | null>(null);


    useEffect(() => {
        if (loading) return;

        if (!user?.id) return;

        const loadProfile = async () => {
            const profileData = await getUserProfile({
                userId: user.id,
            });

            if (profileData) {
                setProfile(profileData);
            }
        };

        loadProfile();
    }, [user, loading]);


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) return;

        setImage(URL.createObjectURL(file));
    };



    return <main className=" min-h-screen bg-[#F5F5F5] pb-10 relative flex flex-col items-center justify-center">

        <div className="w-full">
            {/* Blue Header */}
            <div className="h-60 bg-[#0097FE]" />

            {/* Content */}
            <div className="max-w-360 mx-auto xl:px-20 lg:px-5 px-4 -mt-24 flex flex-col md:flex-row xl:gap-8">

                {/* Left Side */}
                <div className="mx-auto w-95 md:w-65 lg:w-80 xl:w-98.25 ">

                    {/* Profile Image */}
                    <div>
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className="bg-gray-300 rounded-2xl overflow-hidden shadow w-full h-106 md:h-85 lg:h-95 xl:h-102.5 cursor-pointer relative group"
                        >
                            {image ? <Image
                                src={image}
                                alt="profile"
                                fill
                                className="object-cover"
                            /> :
                                <svg className="w-full h-full" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0001 13.3332C18.9456 13.3332 21.3334 10.9454 21.3334 7.99984C21.3334 5.05432 18.9456 2.6665 16.0001 2.6665C13.0546 2.6665 10.6667 5.05432 10.6667 7.99984C10.6667 10.9454 13.0546 13.3332 16.0001 13.3332Z" stroke="white" strokeWidth="2" />
                                    <path d="M26.664 23.9997C26.6658 23.781 26.6667 23.5588 26.6667 23.333C26.6667 20.0197 21.8907 17.333 16 17.333C10.1094 17.333 5.33337 20.0197 5.33337 23.333C5.33337 26.6463 5.33337 29.333 16 29.333C18.9747 29.333 21.12 29.1237 22.6667 28.7503" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            }

                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
                                Change Photo
                            </div>
                        </div>

                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </div>

                    {/* Profile Header Mobile */}
                    <div className="md:hidden flex flex-col gap-4 justify-between items-start pt-6">
                        <div>
                            <h1 className="font-semibold text-[40px] leading-14.5 text-nowrap">
                                {profile?.name} {profile?.surname}
                            </h1>

                            <p className="text-[#0097FE] mt-2 font-normal text-[16px] leading-[100%] text-nowrap">
                                Data Analyst
                            </p>

                        </div>

                        <button className="bg-[#0097FE] text-white px-6 py-2 rounded-full cursor-pointer text-nowrap">
                            Create a business account
                        </button>
                    </div>

                    {/* Education */}
                    <div className="mt-8">
                        <div className="w-full h-full flex items-end justify-between">
                            <h3 className="font-semibold text-[22px] leading-[100%] mb-4">
                                Education
                            </h3>
                            <button
                                onClick={() => setEdit("education")}
                                className="font-bold text-3xl text-gray-400 hover:text-gray-700 cursor-pointer transition-all duration-100">
                                +
                            </button>
                        </div>
                        <ul
                            className="space-y-5 font-normal text-[16px] leading-[100%] text-[#333333]"
                        >
                            {profile?.education.map((edu, index) => <li key={index}>
                                <p
                                    className="font-normal lg:text-[16px] md:text-[14px] leading-[100%] text-[#333333] mb-1"
                                    style={{ fontFamily: 'Poppins' }}
                                >
                                    {edu.institution}
                                </p>

                                <p
                                    className="font-normal lg:text-[16px] md:text-[14px] leading-[100%] text-[#333333]"
                                    style={{ fontFamily: 'Poppins' }}
                                >
                                    {edu.degree}
                                </p>
                            </li>)}
                        </ul>

                    </div>

                    {/* Skills */}
                    <div className="mt-8">
                        <div className="w-full h-full flex items-end justify-between">
                            <h3 className="font-semibold text-[22px] leading-[100%] mb-4">
                                Skills
                            </h3>
                            <button
                                onClick={() => setEdit("skill")}
                                className="font-bold text-3xl text-gray-400 hover:text-gray-700 transition-all duration-100 cursor-pointer">
                                +
                            </button>
                        </div>

                        <ul
                            className="space-y-4 font-normal lg:text-[16px] md:text-[14px] text-[16px] leading-[100%] text-[#333333]"
                        >
                            {profile?.skill.map((skill, index) => <li key={index}>
                                {skill}
                            </li>)}
                        </ul>

                    </div>
                </div>

                {/* Right Side */}
                <div className="flex-1 md:p-8 pt-8 md:mt-24">

                    {/* Profile Header Laptop*/}
                    <div className="hidden md:flex flex-col lg:flex-row gap-4 justify-between items-start">
                        <div>
                            <h1 className="font-semibold text-[40px] leading-14.5 text-nowrap">
                                {profile?.name} {profile?.surname}
                            </h1>

                            <p className="text-[#0097FE] mt-2 font-normal text-[16px] leading-[100%] text-nowrap">
                                Data Analyst
                            </p>

                        </div>

                        <button className="bg-[#0097FE] text-white px-6 py-2 rounded-full cursor-pointer text-nowrap">
                            Create a business account
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#BFBFBF] md:mt-8 pb-4 lg:text-[16px] md:text-[14px] justify-between gap-8">

                        {/* About */}
                        <div className="relative">
                            <button
                                onClick={() => setActiveTab("about")}
                                className={`flex items-center gap-2 mx-auto cursor-pointer ${activeTab === "about" ? "text-[#0097FE] font-medium" : "text-black"
                                    }`}
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5 4C5 2.93913 5.42143 1.92172 6.17157 1.17157C6.92172 0.421427 7.93913 0 9 0C10.0609 0 11.0783 0.421427 11.8284 1.17157C12.5786 1.92172 13 2.93913 13 4C13 5.06087 12.5786 6.07828 11.8284 6.82843C11.0783 7.57857 10.0609 8 9 8C7.93913 8 6.92172 7.57857 6.17157 6.82843C5.42143 6.07828 5 5.06087 5 4ZM5 10C3.67392 10 2.40215 10.5268 1.46447 11.4645C0.526784 12.4021 0 13.6739 0 15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.7956 18 16.5587 17.6839 17.1213 17.1213C17.6839 16.5587 18 15.7956 18 15C18 13.6739 17.4732 12.4021 16.5355 11.4645C15.5979 10.5268 14.3261 10 13 10H5Z"
                                        fill={activeTab === "about" ? "#0097FE" : "black"}
                                    />
                                </svg>
                                About
                            </button>
                            {activeTab === "about" && <div className="h-1 w-full bg-[#0097FE] absolute mt-3"> </div>}
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <button
                                onClick={() => setActiveTab("password")}
                                className={`flex items-center gap-2 mx-auto  cursor-pointer ${activeTab === "password" ? "text-[#0097FE] font-medium" : "text-black"
                                    }`}
                            >
                                <svg
                                    width="16"
                                    height="21"
                                    viewBox="0 0 16 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8 16C8.53043 16 9.03914 15.7893 9.41421 15.4142C9.78929 15.0391 10 14.5304 10 14C10 13.4696 9.78929 12.9609 9.41421 12.5858C9.03914 12.2107 8.53043 12 8 12C7.46957 12 6.96086 12.2107 6.58579 12.5858C6.21071 12.9609 6 13.4696 6 14C6 14.5304 6.21071 15.0391 6.58579 15.4142C6.96086 15.7893 7.46957 16 8 16ZM14 7C14.5304 7 15.0391 7.21071 15.4142 7.58579C15.7893 7.96086 16 8.46957 16 9V19C16 19.5304 15.7893 20.0391 15.4142 20.4142C15.0391 20.7893 14.5304 21 14 21H2C1.46957 21 0.960859 20.7893 0.585786 20.4142C0.210714 20.0391 0 19.5304 0 19V9C0 8.46957 0.210714 7.96086 0.585786 7.58579C0.960859 7.21071 1.46957 7 2 7H3V5C3 3.67392 3.52678 2.40215 4.46447 1.46447C5.40215 0.526784 6.67392 0 8 0C8.65661 0 9.30679 0.129329 9.91342 0.380602C10.52 0.631876 11.0712 1.00017 11.5355 1.46447C11.9998 1.92876 12.3681 2.47995 12.6194 3.08658C12.8707 3.69321 13 4.34339 13 5V7H14ZM8 2C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V7H11V5C11 4.20435 10.6839 3.44129 10.1213 2.87868C9.55871 2.31607 8.79565 2 8 2Z"
                                        fill={activeTab === "password" ? "#0097FE" : "black"}
                                    />
                                </svg>
                                Password
                            </button>
                            {activeTab === "password" && <div className="h-1 w-full bg-[#0097FE] absolute mt-3"> </div>}
                        </div>

                        {/* Notification */}
                        <div className="relative">
                            <button
                                onClick={() => setActiveTab("notification")}
                                className={`flex items-center gap-2 mx-auto  cursor-pointer ${activeTab === "notification" ? "text-[#0097FE] font-medium" : "text-black"
                                    }`}
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 18a2 2 0 002-2H7a2 2 0 002 2zm6-6V8a6 6 0 10-12 0v4l-2 2v1h16v-1l-2-2z"
                                        fill={activeTab === "notification" ? "#0097FE" : "black"}
                                    />
                                </svg>
                                Notification
                            </button>
                            {activeTab === "notification" && <div className="h-1 w-full bg-[#0097FE] absolute mt-3"> </div>}
                        </div>

                        {/* Projects */}
                        <div className="relative">
                            <button
                                onClick={() => setActiveTab("projects")}
                                className={`flex items-center gap-2 mx-auto  cursor-pointer ${activeTab === "projects" ? "text-[#0097FE] font-medium" : "text-black"
                                    }`}
                            >
                                <svg
                                    width="22"
                                    height="21"
                                    viewBox="0 0 22 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 21C1.45 21 0.979333 20.8043 0.588 20.413C0.196667 20.0217 0.000666667 19.5507 0 19V9C0 8.71667 0.096 8.47933 0.288 8.288C0.48 8.09667 0.717333 8.00067 1 8C1.28267 7.99933 1.52033 8.09533 1.713 8.288C1.90567 8.48067 2.00133 8.718 2 9V19H18C18.2833 19 18.521 19.096 18.713 19.288C18.905 19.48 19.0007 19.7173 19 20C18.9993 20.2827 18.9033 20.5203 18.712 20.713C18.5207 20.9057 18.2833 21.0013 18 21H2ZM6 17C5.45 17 4.97933 16.8043 4.588 16.413C4.19667 16.0217 4.00067 15.5507 4 15V5C4 4.71667 4.096 4.47933 4.288 4.288C4.48 4.09667 4.71733 4.00067 5 4H9V2C9 1.45 9.196 0.979333 9.588 0.588C9.98 0.196667 10.4507 0.000666667 11 0H15C15.55 0 16.021 0.196 16.413 0.588C16.805 0.98 17.0007 1.45067 17 2V4H21C21.2833 4 21.521 4.096 21.713 4.288C21.905 4.48 22.0007 4.71733 22 5V15C22 15.55 21.8043 16.021 21.413 16.413C21.0217 16.805 20.5507 17.0007 20 17H6ZM11 4H15V2H11V4Z"
                                        fill={activeTab === "projects" ? "#0097FE" : "black"}
                                    />
                                </svg>
                                Projects
                            </button>
                            {activeTab === "projects" && <div className="h-1 w-full bg-[#0097FE] absolute mt-3"> </div>}
                        </div>
                    </div>

                    {/* Components */}
                    <div className="mt-8">
                        {activeTab === "about" && <About
                            profile={profile}
                            onProfileUpdate={setProfile}
                        />}

                        {activeTab === "password" && <Password />}

                        {activeTab === "notification" && <Notification />}

                        {activeTab === "projects" && <Projects />}
                    </div>
                </div>
            </div>
        </div>

        {/* Edit Education / Skill Modal */}
        {edit && <SkillsModal
            profile={profile}
            onProfileUpdate={setProfile}
            edit={edit}
            onEdit={setEdit}
        />}
    </main>
}