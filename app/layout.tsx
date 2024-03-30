import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),

  title: "Kunal Chopra",

  authors: [
    {
      name: "Kunal Chopra",
    },
  ],

  description: "I'm a junior at Oregon State University, based in Portland,studying Computer Science. Passionate about using AI to solve real world,problems.",

  openGraph: {
    title: "Kunal Chopra",
    description: "I'm a junior at Oregon State University, based in Portland,studying Computer Science. Passionate about using AI to solve real world,problems.",
    url: "http://localhost:3000/",
    siteName: "Kunal Chopra",
    images: ["/og.png"],
    type: "website",
  },

  keywords: ["chopra", "Kunal Chopra", "kunal"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
