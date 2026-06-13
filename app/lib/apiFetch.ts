export async function apiFetch(url: string, options: RequestInit = {}) {
    const makeRequest = () =>
        fetch(url, {
            ...options,
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {}),
            },
        });

    let res = await makeRequest();

    if (res.status === 401) {
        try {
            const refreshRes = await fetch("/api/auth/refresh", {
                method: "POST",
                credentials: "include",
            });

            if (!refreshRes.ok) {
                throw new Error("Not authenticated");
            }

            res = await makeRequest();

        } catch {
            throw new Error("Not authenticated");
        }
    }

    return res;
}