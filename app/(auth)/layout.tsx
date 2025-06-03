import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (session) {
    redirect("/");
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default Layout;
