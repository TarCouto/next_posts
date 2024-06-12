import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideBar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className={styles.wrapper}>
          <SideBar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
