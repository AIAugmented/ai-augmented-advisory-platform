"use client";

import { useStore } from "@/store";

import Header from "@/components/common/Header";
import Loader from "@/components/common/Loader";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = useStore();

  if (!isAuthenticated) {
    return <Loader />;
  }

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
