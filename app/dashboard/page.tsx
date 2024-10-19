"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";

export default function MainDashboard() {
  const { data: session } = authClient.useSession();

  const logout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      alert(error.message);
    }

    window.location.href = "/";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Hello, <span className="text-lg font-bold">{session?.user?.name}</span></h1>
      <button onClick={logout} type="button" className="mt-4 px-6 py-2 border-2 border-gray-200 hover:border-0 hover:bg-gray-200 rounded-md">Logout</button>
    </div>
  );
}
