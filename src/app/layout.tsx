import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Navbar from "@/components/Navbar";
import DarkModeProvider from "@/context/DarkModeContext";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
// import ConditionalFooter from "./ConditionalFooter";
import Provider from "@/context/Provider";

export const metadata: Metadata = {
  title: "Anchal Jain",
  description:
    "Anchal Jain is a Full Stack Developer specializing in building impactful web applications from scratch. Explore her portfolio to see my projects and skills.",
  keywords:
    "Anchal Jain, Full Stack Developer, Web Developer, Portfolio, JavaScript, TypeScript, React, Node.js, software engineer, Express, Backend Engineer",
  authors: [{ name: "Anchal Jain" }],
  openGraph: {
    title: "Anchal",
    description: "",
    url: "https://anchal.tech",
    siteName: "anchal",
    // images: [
    //   {
    //     url: "https://res.cloudinary.com/dl27j0qcm/image/upload/v1739721063/gradii-3840x2160_3_jqk2nt.png",
    //     width: 400,
    //     height: 200,
    //     alt: "fardeen",
    //   },
    // ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "anchal",
    creator: "@anchalj04",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <DarkModeProvider>
          <body className={`bg-white dark:bg-black `}>
            <Toaster position="bottom-right" />
            <Theme className="dark:!bg-black">
              <Navbar />
              {children}
              <Analytics />
              {/* <ConditionalFooter /> */}
            </Theme>
          </body>
        </DarkModeProvider>
      </Provider>
    </html>
  );
}
