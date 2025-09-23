import MainLayout from "@/components/MainLayout";
import Sidebar from "@/components/Sidebar";
import ThemeWrapper from "@/components/ThemeWrapper";
import { ThemeProvider } from "@/contexts/ThemeContext";
import type { Metadata } from "next";
import { Inter, Sniglet } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const sniglet = Sniglet({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sniglet",
});

export const metadata: Metadata = {
  title: "Chau Vu Minh Quan - Web Developer Portfolio",
  description:
    "Web Developer with nearly 3 years of experience in building responsive, high-performance web applications using ReactJS/NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sniglet.variable} bg-[#111111] font-sans antialiased overflow-x-hidden w-full h-full`}
      >
        <div className="fixed object-cover w-full h-full opacity-30 left-0 top-0 pointer-events-none">
          <div className="w-full h-full bg-[#45e77b] dark:bg-[#0ea5e9] transition-colors duration-300 [mask:url('/assets/images/bg-shape.svg')] [mask-repeat:no-repeat] [mask-position:center] [mask-size:cover] [-webkit-mask:url('/assets/images/bg-shape.svg')] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] [-webkit-mask-size:cover]"></div>
        </div>
        <ThemeProvider>
          <ThemeWrapper>
            <Sidebar />
            <MainLayout>{children}</MainLayout>
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
