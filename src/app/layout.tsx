import "@/styles/globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${inter.variable} h-full bg-gray-50 dark:bg-gray-950`} suppressHydrationWarning>
            <head></head>
            <body className="h-full antialiased">
                <Providers>
                    <div>{children}</div>
                </Providers>
            </body>
        </html>
    );
}
