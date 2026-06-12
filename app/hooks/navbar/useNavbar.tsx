"use client";

import { NavItem } from "@/app/types/navbar";
import { useEffect, useState } from "react";

export default function useNavbar() {
  const [navItems, setNavItems] = useState<NavItem[]>([]);


  useEffect(() => {
    const items: NavItem[] = [
      {
        name: "Events",
        href: "",
      },
      {
        name: "Projects",
        href: "",
      },
      {
        name: "Courses",
        href: "",
      },
      {
        name: "Contact Us",
        href: "/contact",
      },
      {
        name: "About Us",
        href: "/about",
      },
    ];

    setNavItems(items);
  }, []);

  return {
    navItems
  }
}