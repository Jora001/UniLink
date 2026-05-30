'use client';

import SignUp from "@/app/components/auth/SignUp";
import { useAuthModal } from "./AuthModalContext";
import SignIn from "@/app/components/auth/SignIn";

export default function AuthModal() {
    const {modal, closeModal} = useAuthModal();

    if(!modal) return null;

    return <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/10">
        
        {/* Close */}
        <div
            className="absolute inset-0"
            onClick={closeModal}
        ></div>

        {/* Modal */}
        <div className="relative z-10">
            {modal === "signUp" ? <SignUp /> : <SignIn/> }
        </div>
    </div>
}