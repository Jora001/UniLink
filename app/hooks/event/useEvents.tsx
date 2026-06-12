'use client';

import { AddEventType, Event } from "@/app/types/event";
import { useCallback, useState } from "react";

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const addEvent = async (event: AddEventType) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event)
      });

      const data = await res.json();

      if (!res.ok) {

        if(res.status === 400) {
          setError("Something went wrong.");
          return;
        }

        const message = data?.message;
        throw new Error(message || "Adding Event Failed.");
      }

      setEvents(prev => ([data, ...prev]));
      return data;

    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }
  

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/events");

      const data = await res.json();

      if (!res.ok) {
        const message = data?.message;
        throw new Error(message || "Fetching Events Failed.");
      }

      setEvents(data);
      return data;

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
    addEvent
  };
}