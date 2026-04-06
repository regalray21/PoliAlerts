import type { Metadata } from "next";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Login | PoliAlerts",
  description:
    "Log in to your PoliAlerts account to access real-time government tracking, committee monitoring, and legislative transcripts.",
};

export default function LoginPage() {
  return <LoginForm />;
}
