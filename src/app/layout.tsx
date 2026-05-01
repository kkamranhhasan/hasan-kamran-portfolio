import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { WeatherProvider } from "@/components/WeatherProvider";
import { RainOverlay } from "@/components/RainOverlay";
import { MoonBackground } from "@/components/MoonBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Kamran Hasan",
  description: "Personal portfolio of Kamran Hasan, a software engineer specializing in modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", "font-sans", geist.variable)}
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <WeatherProvider>
            <SmoothScroll>
              <MoonBackground />
              <RainOverlay />
              {/* Global Wave Background */}
            <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-background pointer-events-none">
              <div className="absolute bottom-0 left-0 w-[200%] h-[30vh] md:h-[40vh] opacity-50 dark:opacity-30 animate-wave">
                <svg className="w-full h-full" viewBox="0 0 2000 100" preserveAspectRatio="none">
                  <path d="M0,50 C250,150 750,-50 1000,50 C1250,150 1750,-50 2000,50 L2000,100 L0,100 Z" fill="currentColor" className="text-primary/20 dark:text-primary/30"></path>
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-[200%] h-[35vh] md:h-[45vh] opacity-40 dark:opacity-20 animate-wave-reverse">
                <svg className="w-full h-full" viewBox="0 0 2000 100" preserveAspectRatio="none">
                  <path d="M0,50 C250,150 750,-50 1000,50 C1250,150 1750,-50 2000,50 L2000,100 L0,100 Z" fill="currentColor" className="text-primary/30 dark:text-primary/40"></path>
                </svg>
              </div>
            </div>

            <Navbar />
            <main className="flex-1 flex flex-col relative z-0">
              {children}
            </main>
            <Footer />
            </SmoothScroll>
          </WeatherProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
