'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { UserDataResponse } from "@/app/types/auth";
import useProfile from "@/app/hooks/profile/useProfile";
import { AuthContextType } from "@/app/types/context/auth";


const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode; }) {
    const [user, setUser] = useState<UserDataResponse | null>(null);
    const [loading, setLoading] = useState(true);

    const { getUserMe } = useProfile();

    useEffect(() => {
        const loadUser = async () => {
            try {
                const currentUser = await getUserMe();

                if (currentUser) {
                    setUser(currentUser);
                } else {
                    setUser(null);
                }
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
    return ctx;
};