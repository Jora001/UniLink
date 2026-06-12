'use client';

import { apiFetch } from "@/app/lib/apiFetch";
import { ContactData } from "@/app/types/contact";
import { useState } from "react";

export function useContact() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const sendMessage = async (message: ContactData) => {
        setLoading(true);
        setError(null);

        try {
            const res = await apiFetch("/api/contact-with-team", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(message),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.message || "Erro sending message.");
            }

            return data;

        } catch (e: any) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        sendMessage
    };
}