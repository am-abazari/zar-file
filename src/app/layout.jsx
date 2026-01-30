// fonts
import { Inter } from "next/font/google";

// styles
import "./globals.css";

//components
import Footer from "@components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zar File | Home",
  description: "Platform for Downloading and Uploading Files",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased flex flex-col justify-between items-center`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
