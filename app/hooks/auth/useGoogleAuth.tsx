'use client';

export default function useGoogleAuth() {

    const googleAuth = () => {
        window.location.href = "http://localhost:3000/api/auth/google";
    };

    return { googleAuth };
} 