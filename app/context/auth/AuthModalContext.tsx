'use client';

import { AuthModalContextType, ModalType } from "@/app/types/context/auth";
import { createContext, ReactNode, useContext, useState } from "react";

const AuthModalContext = createContext<AuthModalContextType | null>(null);

export function AuthModalProvider({ children }: { children: ReactNode }) {
    const [modal, setModal] = useState<ModalType>(null);

    const openModal = (type: ModalType) => {
        setModal(type);
    }

    const closeModal = () => {
        setModal(null);
    }

    return <AuthModalContext.Provider value={{ modal, openModal, closeModal }}>
        {children}
    </AuthModalContext.Provider>
}

export function useAuthModal() {
    const context = useContext(AuthModalContext);

    if (!context) {
        throw new Error("useAuthModal must be used inside AuthModalProvider");
    }

    return context;
}