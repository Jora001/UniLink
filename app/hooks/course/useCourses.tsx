'use client';

import { Course } from "@/app/types/course";
import { useCallback, useState } from "react";

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const addCourse = async (course: Course) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(course)
      });

      const data = await res.json();

      if (!res.ok) {

        if (res.status === 400) {
          setError("Something went wrong.");
          return;
        }

        const message = data?.message;
        throw new Error(message || "Adding Course Failed.");
      }

      setCourses(prev => ([data, ...prev]));
      return data;

    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }


  const fetchCourses = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/courses");

      const data = await res.json();

      if (!res.ok) {
        const message = data?.message;
        throw new Error(message || "Fetching Courses Failed.");
      }

      setCourses(data);
      return data;
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
    addCourse
  };
}