import React from "react";
import { FloatingNav } from "./acernityui/floating-navbar";
import { navItems } from "@/data/config/nav.config";

export default function Navbar() {
  return (
    <div className="flex h-full w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
