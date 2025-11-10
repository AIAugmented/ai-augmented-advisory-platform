"use client";

import { AnimatePresence, motion } from "framer-motion";

import Chat from "@/components/chat";

export default function Dashboard() {
  // Show the main app for authenticated users
  return (
    <div className="flex h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key="chat"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          className="max-w-xl flex-1"
        >
          <Chat />
        </motion.div>

        <motion.div
          key="workspace"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-[70%] bg-muted pl-2 transition-all duration-300"
        >
          Workspace View
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
