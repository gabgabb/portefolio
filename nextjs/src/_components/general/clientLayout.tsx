"use client";

import CustomDrawer from "@/_components/general/drawer";
import Footer from "@/_components/general/footer";
import Header from "@/_components/general/header";
import React, { useState } from "react";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    return (
        <>
            <Header onOpenDrawer={() => setIsDrawerOpen(true)} />
            <CustomDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            />
            {children}
            <Footer />
        </>
    );
}
