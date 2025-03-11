"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ProvidersProps {
    children: React.ReactNode;
}

export function Providers(props: ProvidersProps) {
    return (
        <HeroUIProvider className="h-full">
            <NextThemesProvider>{props.children}</NextThemesProvider>
        </HeroUIProvider>
    );
}
