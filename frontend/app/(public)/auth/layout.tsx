"use client";

import { motion } from "framer-motion";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 items-center justify-center p-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md space-y-5"
      >
        {/* Main Content */}
        {children}
      </motion.div>
    </div>
  );
}
