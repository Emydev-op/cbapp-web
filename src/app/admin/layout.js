import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import Sidebar from "@/components/ibank/Sidebar";
import { redirect } from "next/navigation";
import AuthProvider from "../context/AuthProvider";

// export default async function UserLayout({ children }) {
//   const session = await getServerSession(options);
//   return (
//     <>{session ? <p> You shall not pass</p> : <Sidebar>{children}</Sidebar>}</>
//   );
// }

export default async function UserLayout({ children }) {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }
  return (
    <AuthProvider>
      <Sidebar>{children}</Sidebar>;
    </AuthProvider>
  );
}
