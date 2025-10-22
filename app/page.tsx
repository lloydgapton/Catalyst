import { redirect } from "next/navigation";
import { getServerAuthStatus } from "@/lib/auth.server";

export default async function Home() {
  // server-side: check auth; placeholder until Firestore auth is available
  const isAuthenticated = await getServerAuthStatus();

  if (isAuthenticated) {
    redirect("/dashboard");
  } else {
    // Show a public landing page for unauthenticated users
    redirect("/landing");
  }
}
