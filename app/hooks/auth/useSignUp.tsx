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
                const message = data?.message?.toLowerCase();

                if (message?.includes("name")) {
                    setError("Name doesn't have correct syntax.");
                    return null;
                }

                if (message?.includes("surename")) {
                    setError("Surename doesn't have correct syntax.");
                    return null;
                }

                if (message?.includes("email")) {
                    setError("Please enter a valid email address.");
                    return null;
                }

                if (message?.includes("password")) {
                    setError("Password must contain uppercase, lowercase, number and special character.");
                    return null;
                }

                if (message?.includes("gender")) {
                    setError("Please select a valid gender.");
                    return null;
                }

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