import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { ReactNode } from "react";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "djpiper28.co.uk",
  description:
    "The website of Danny Piper (djpiper28). Portfolio, projects, blog, etc...",
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "a9212f4bdb624c089ea4977d302c16e9"}'
      ></script>
      <body className="flex flex-col justify-between min-h-screen">
        <Navbar />
        <div className="flex-1 md:px-10 md:py-10 lg:px-14 xl:px-20 2xl:px-40 p-2">
          <div className="flex flex-col gap-2">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
