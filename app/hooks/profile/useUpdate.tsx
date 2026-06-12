'use client';

import { apiFetch } from "@/app/lib/apiFetch";
import { UpdatingUserData } from "@/app/types/profile";
import { useState } from "react";

export default function useUpdate() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);


    const updateUserProfile = async(userData: UpdatingUserData) => {
        setLoading(true);
        setError(null); 

        try {
            const res = await apiFetch("/api/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                }, 
                body: JSON.stringify(userData),
            });

            const data = await res.json();

            if(!res.ok) {
                throw new Error(data?.message || "Fetch failed");
            }

            console.log("UPDATED DATA:", data);
            
            return data;

        } catch(e: any) { 
            setError(e.message);
            console.error("UPDATE USER PROFILE ERROR:", e.message);
        } finally {
            setLoading(false);
        }
    }
    
    return {
        loading,
        error,
        updateUserProfile
    }
}