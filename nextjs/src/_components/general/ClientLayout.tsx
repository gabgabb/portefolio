"use client";

import React from "react";

import { useDisclosure } from "@heroui/react";
import Header from "@/_components/general/header";
import DrawerCustom from "@/_components/general/Drawer";
import Footer from "@/_components/general/footer";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            {/* Passe `onOpen` au Header pour qu'il ouvre le Drawer */}
            <Header onOpenDrawer={onOpen} />
            {/*<DrawerCustom isOpen={isOpen} onOpenChange={onOpenChange} />*/}
            {children}
            {/* Drawer accessible partout */}
            <Footer />
        </>
    );
}
