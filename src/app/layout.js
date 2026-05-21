import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { icons } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AgenticSense",
  description: "AgenticSense is a leading design studio specializing in crafting innovative digital experiences. With a focus on user-centric design and cutting-edge technology, we create impactful solutions that drive business growth and enhance user engagement. Our team of talented designers and developers work collaboratively to deliver exceptional results for our clients across various industries.",
icons: "/iconeee.png",
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning prevents browser extensions from breaking hydration
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased`}
      >
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
<Script 
  src="http://192.168.0.30:8100/widget/wid_db08e0f9c9df4b3d.js"

  strategy="lazyOnload"
/>
        
      </body>
    </html>
  );
}
