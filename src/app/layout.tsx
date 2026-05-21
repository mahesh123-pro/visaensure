import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import Preloader from "@/components/animations/Preloader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "VisaEnsure | Hassle-Free Visa Solutions",
  description: "Avoid visa mistakes & rejections! Get expert guidance for work, study & PR visas with VisaEnsure. Get Free assessment & fast-track approval!",
  openGraph: {
    title: "VisaEnsure | Hassle-Free Visa Solutions",
    description: "Avoid visa mistakes & rejections! Get expert guidance for work, study & PR visas with VisaEnsure. Get Free assessment & fast-track approval!",
    url: "https://visaensure.com",
    siteName: "VisaEnsure",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable)} suppressHydrationWarning>
      <body
        className={`antialiased font-body relative`}
      >
        <Preloader />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
