'use client';

import { useAuthModal } from "./AuthModalContext";
import SignUp from "@/app/components/auth/SignUp";
import SignIn from "@/app/components/auth/SignIn";
import Request from "@/app/components/auth/password/Request";
import Verify from "@/app/components/auth/password/Verify";

export default function AuthModal() {
    const { modal, closeModal } = useAuthModal();

    if (!modal) return null;

    return <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/10">

        {/* Close */}
        <div
            className="absolute inset-0"
            onClick={closeModal}
        ></div>

        {/* Modal */}
        <div className="relative z-10">
            {modal === "signUp" ? <SignUp /> :
                modal === "signIn" ? <SignIn /> :
                    modal === "resetRequest" ? <Request /> : <Verify />}
        </div>
    </div>
}