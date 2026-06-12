'use client';

import { ResetPswRequest, ResetPswVerify } from "@/app/types/auth";
import { useState } from "react";


export default function useResetPsw() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const request = async (email: ResetPswRequest) => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/user/password/forgot/request", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(email)
            });

            const data = await res.json();

            if (!res.ok) {

                if (res.status === 429) {
                    setError("Too many requests.");
                    return;
                }

                throw new Error(data?.message || "Password reset failed.");
            }

            return true;

        } catch (err: any) {
            setError(err.message);
            console.error("PASSWORD RESET ERROR:", err.message);
        } finally {
            setLoading(false);
        }
    };

    
    const verify = async (userData: ResetPswVerify) => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/user/password/forgot/confirm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const data = await res.json();

            if (!res.ok) {

                if (res.status === 400) {
                    setError("Invalid or expired code.");
                    return;
                }

                if (res.status === 409) {
                    setError("Email already in use by active account.");
                    return;
                }

                throw new Error(data?.message || "Password reset failed.");
            }

            return data.user;

        } catch (err: any) {
            setError(err.message);
            console.error("PASSWORD RESET ERROR:", err.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        request,
        verify
    }
}