'use client';

import { apiFetch } from "@/app/lib/apiFetch";
import { useState } from "react";

export default function useProfile() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const getUserMe = async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await apiFetch("/api/user/me", {
                method: "GET",
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.message || "Fetch failed");
            }

            return data.user;

        } catch (e: any) {
            setError(e.message);

            if (e.message !== "Not authenticated") {
                console.error("USER PROFILE ERROR:", e.message);
            }

            return null;
        } finally {
            setLoading(false);
        }
    };

    const getUserProfile = async (req: { userId: number }) => {
        setLoading(true);
        setError(null);

        try {
            const res = await apiFetch("/api/profile", {
                method: "POST",
                body: JSON.stringify(req),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.message || "Fetch failed");
            }

            return data;

        } catch (e: any) {
            setError(e.message);

            if (e.message !== "Not authenticated") {
                console.error("PROFILE ERROR:", e.message);
            }

            return null;
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        getUserMe,
        getUserProfile,
    };
}