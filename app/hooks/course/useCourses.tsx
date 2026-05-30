'use client';

import { Course } from "@/app/types/course";
import { useCallback, useState } from "react";

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCourses = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/courses");

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      const data: Course[] = await res.json();
      setCourses(data);

    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    courses,
    loading,
    error,
    fetchCourses,
  };
}