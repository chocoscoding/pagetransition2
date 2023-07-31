import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="text-2xl font-medium z-20 relative">
      <ul className="inline-flex z-5 gap-4 relative text-black">
        <Link
          href={`/`}
          className="mr-3">
          <li>Home</li>
        </Link>
        <Link
          href={`/Contact`}
          className="mr-3">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
