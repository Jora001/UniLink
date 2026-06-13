'use client';

import { useState } from "react";

export default function useLogout() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const logout = async () => {
        setLoading(true); 
        setError(null);

        try {
            const res = await fetch("/api/auth/log-out", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await res.json();

            if(!res.ok) {
                throw new Error(data?.message || "Log out failed");
            }
            
            return data;

        } catch (err: any) {
            setError(err.message);
            console.error("LOG OUT ERROR:", err.message);
        } finally {
            setLoading(false);
        }
    }

    return {
        logout
    }
}