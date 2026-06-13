'use client';

import { useState } from "react";
import { SignInData, UserData } from "@/app/types/auth";
import { useAuth } from "@/app/context/auth/AuthContext";

export default function useSignIn() {
    const { setUser } = useAuth();

import { SignInData } from "@/app/types/auth";

export default function useSignIn() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const signIn = async (userData: SignInData) => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                headers: {
                    "Content-Type": "application/json",
                },
                // credentials: "include", 
                body: JSON.stringify(userData),
            });

            const data = await res.json();

            if (!res.ok) {
                const message = data?.message;

                throw new Error(message || "Login failed");
            }

            setUser(data.user);

                throw new Error(data?.message || "Login failed");
            }

            return data.user;

        } catch (err: any) {
            setError(err.message);
            console.error("SIGN IN ERROR:", err.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        signIn
    };
}