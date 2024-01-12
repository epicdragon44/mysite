"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./components/nav";

export default function Layout({ children }) {
    const pathname = usePathname();

    return (
        <div>
            <Navbar active={pathname} />
            <div style={{ border: "1px solid" }}>{children}</div>
        </div>
    );
}
