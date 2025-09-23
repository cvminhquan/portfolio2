import MainLayout from "@/components/MainLayout";
import Sidebar from "@/components/Sidebar";
import ThemeWrapper from "@/components/ThemeWrapper";
import { ThemeProvider } from "@/contexts/ThemeContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Chau Vu Minh Quan - Web Developer Portfolio",
  description: "Web Developer with nearly 3 years of experience in building responsive, high-performance web applications using ReactJS/NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased overflow-x-hidden`}
      >
        <ThemeProvider>
          <ThemeWrapper>
            <Sidebar />
            <MainLayout>
              {children}
            </MainLayout>
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
