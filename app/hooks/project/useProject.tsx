'use client';

import { useCallback, useState } from "react";
import { Project } from "@/app/types/project";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/projects");

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      const data: Project[] = await res.json();
      setProjects(data);

    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    projects,
    loading,
    error,
    fetchProjects,
  };
}