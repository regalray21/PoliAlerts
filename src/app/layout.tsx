import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "PoliAlerts: Advanced Dialogue Tracking and Monitoring of Government Hearings",
  description:
    "PoliAlerts offers cutting-edge dialogue tracking and monitoring of government hearings in real-time. Get instant email alerts and stay informed on the issues that matter most across Canada, the US, UK, and Australia.",
  icons: {
    icon: "/PoliAlerts/assets/home/favicon-polialerts.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-manrope), sans-serif" }}
      >
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
