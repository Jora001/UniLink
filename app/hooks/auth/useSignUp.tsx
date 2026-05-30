'use client';

import { useState } from "react";
import { UserData } from "@/app/types/auth";

export default function useSignUp() {
    const [user, setUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const signUp = async (userData: UserData) => {
        setLoading(true);
        setError(null); 

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(userData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.message || "Registration failed");
            }

            setUser(data.user);
            return data.user;

        } catch (err: any) {
            setError(err.message);
            console.error("SIGN UP ERROR:", err.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        user,
        loading,
        error,
        signUp
    };
}