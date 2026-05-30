'use client';

import { useState } from "react";
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
                headers: {
                    "Content-Type": "application/json",
                },
                // credentials: "include", 
                body: JSON.stringify(userData),
            });

            const data = await res.json();

            if (!res.ok) {
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