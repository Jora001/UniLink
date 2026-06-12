'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useNavbar from "@/app/hooks/navbar/useNavbar";
import { useAuth } from "@/app/context/auth/AuthContext";
import { useRouter } from "next/navigation";
import { useAuthModal } from "@/app/context/auth/AuthModalContext";
import useLogout from "@/app/hooks/auth/useLogout";

export default function HeaderMobile() {
    const { user, setUser } = useAuth();
    const { logout } = useLogout();
    const [showDropDown, setShowDropDown] = useState(false);
    const { navItems } = useNavbar();
    const router = useRouter();
    const { openModal } = useAuthModal();
    const wrapperRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShowDropDown(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return (() => {
            document.removeEventListener('mousedown', handleClickOutside);
        })
    }, []);


    const handleLogout = async () => {
        const data = await logout();

        if (data) {
            setUser(null);
            router.push("/");
        }
    }

    return <header
        ref={wrapperRef}
        className={`w-full flex lg:hidden h-30 md:h-25 px-4 text-(--text)
            ${showDropDown ? "bg-(--secondary)" : ""}`}
    >
        <div className="max-w-360 mx-auto w-full">
            <div className="flex justify-between items-center w-full pt-10 md:pt-6 px-4 relative">
                <Link href={user ? "/profile" : "/"}>
                    {/* Mobile */}
                    <Image
                        src={"/images/header/name-gray.png"}
                        alt="UniLink"
                        width={113}
                        height={48}
                        className="block md:hidden"
                    />
                    {/* Tablet */}
                    <Image
                        src={"/images/header/logo.png"}
                        alt="UniLink"
                        width={129}
                        height={48}
                        className="hidden md:block"
                    />
                </Link>

                <div
                    onClick={() => setShowDropDown(prev => !prev)}
                    className="w-6 h-6 py-1.5 px-0.75 flex flex-col items-center justify-between gap-0.75 cursor-pointer"
                >
                    <div className="w-full h-0.75 rounded bg-gray-300"></div>
                    <div className="w-full h-0.75 rounded bg-gray-300"></div>
                    <div className="w-full h-0.75 rounded bg-gray-300"></div>
                </div>

            </div>

            {showDropDown && <ul className="w-full max-h-130 bg-(--secondary) absolute top-full left-0 right-0 flex flex-col items-center gap-6.25 pb-5">
                {navItems.map((item, index) =>
                    <li
                        key={index}
                        className="cursor-pointer flex items-center gap-1 font-bold text-[32px] "
                    >
                        <Link href={item.href} onClick={() => setShowDropDown(false)}>{item.name}</Link>
                    </li>
                )}
                {user ? <div className="flex flex-col items-center justify-between gap-6.25">
                    <li
                        onClick={() => {
                            setShowDropDown(false);
                            router.push("/profile");
                        }}
                        className="cursor-pointer flex items-center gap-1 font-bold text-[32px] "
                    > Profile
                    </li>
                    <li
                        onClick={() => {
                            setShowDropDown(false);
                            handleLogout();
                        }}
                        className="cursor-pointer flex items-center gap-1 font-bold text-[32px] "
                    > Log out
                    </li>
                </div> :
                    <li
                        onClick={() => {
                            setShowDropDown(false);
                            openModal("signIn");
                        }}
                        className="cursor-pointer flex items-center gap-1 font-bold text-[32px] "
                    > Sign In
                    </li>}
            </ul>}
        </div>
    </header>
}