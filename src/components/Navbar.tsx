import Image from "next/image";
import React from "react";
import NavLogo from "@/app/assets/appLogo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#1E293B] flex justify-between items-center w-screen px-8 py-5">
      <div className="rounded-full flex justify-between items-center w-full ">
        <Image
          src={NavLogo}
          height={50}
          width={50}
          alt="Nav Logo"
          className="rounded-full"
        />
        <div className="flex justify-center items-center gap-8">
          <Link href="/signup" className="bg-[#000000] rounded-3xl px-6 py-3">Sign up</Link>
          <Link href="/signin" className="bg-[#000000] rounded-3xl px-6 py-3">Log in</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
