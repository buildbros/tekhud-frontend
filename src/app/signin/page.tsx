"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#1E293B] p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md lg:max-w-lg text-[#CBD5E1]"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Sign In
        </h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-[#0F172A] border border-[#CBD5E1] rounded-lg focus:ring-2 focus:ring-[#CBD5E1] outline-none text-sm sm:text-base"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-[#0F172A] border border-[#CBD5E1] rounded-lg focus:ring-2 focus:ring-[#CBD5E1] outline-none text-sm sm:text-base"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 bg-[#0F172A] text-[#CBD5E1] font-semibold rounded-lg hover:bg-[#0A1220] transition text-sm sm:text-base"
          >
            Sign In
          </motion.button>
        </form>

        <p className="text-center mt-4 text-xs sm:text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}