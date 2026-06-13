"use client";

import { NavItem } from "@/app/types/navbar";
import { useEffect, useState } from "react";

export default function useNavbar() {
  const [navItems, setNavItems] = useState<NavItem[]>([]);

import { useEvents } from "../event/useEvents";
import { useProjects } from "../project/useProject";
import { useCourses } from "../course/useCourses";

export default function useNavbar() {
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const { events } = useEvents();
  const { projects } = useProjects();
  const { courses } = useCourses();

  useEffect(() => {
    const items: NavItem[] = [
      {
        name: "Events",
        href: "",
        subItems: events.map(e => e.name)
      },
      {
        name: "Projects",
        href: "",
        subItems: projects.map(p => p.title),
      },
      {
        name: "Courses",
        href: "",
        subItems: courses.map(c => c.title),
      },
      {
        name: "Contact Us",
        href: "/contact",
      },
      {
        name: "About Us",
        href: "/about",
        href: "",
      },
    ];

    setNavItems(items);
  }, []);
  }, [events]);

  return {
    navItems
  }
}