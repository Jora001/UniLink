'use client';

import { Event } from "@/app/types/event";
import { useCallback, useState } from "react";

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/events");

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      const data: Event[] = await res.json();
      setEvents(data);

    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    events,
    loading,
    error,
    fetchEvents,
  };
}