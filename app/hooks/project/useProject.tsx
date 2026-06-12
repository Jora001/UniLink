'use client';

import { useCallback, useState } from "react";
import { AddProjectType, Project } from "@/app/types/project";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const addProject = async (project: AddProjectType) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project)
      });

      const data = await res.json();

      if (!res.ok) {

        if (res.status === 400) {
          setError("Something went wrong.");
          return;
        }

        const message = data?.message;
        throw new Error(message || "Adding Project Failed.");
      }

      setProjects(prev => ([data, ...prev]));
      return data;

    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }


  const fetchProjects = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/projects");

      const data = await res.json();

      if (!res.ok) {
        const message = data?.message;
        throw new Error(message || "Fetching Projects Failed.");
      }

      setProjects(data);
      return data;

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
    addProject
  };
}