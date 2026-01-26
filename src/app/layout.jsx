// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({
// variable: "--font-inter",
// subsets: ["latin"],
// });

export const metadata = {
    title: "Zar File | Home",
    description: "Platform for Downloading and Uploading Files",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={``}>
            {children}
        </body>
        </html>
    );
}
