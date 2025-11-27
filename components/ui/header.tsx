"use client";

import Link from "next/link";
import { useState } from "react";

/* -------------------------------------------------
   Inline Logo – no external component needed
   ------------------------------------------------- */
function InlineLogo() {
    return (
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-md">
                <span className="text-sm font-bold text-white">W</span>
            </div>
            <span className="hidden text-lg font-bold text-white sm:inline-block">
        WEB-WIZARDS
      </span>
        </Link>
    );
}

/* -------------------------------------------------
   Header – everything in ONE file
   ------------------------------------------------- */
export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="z-30 mt-2 w-full md:mt-5">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* ---------- Desktop + Mobile container ---------- */}
                <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
                    {/* Logo */}
                    <div className="flex flex-1 items-center">
                        <InlineLogo />
                    </div>

                    {/* ---------- Desktop links ---------- */}
                    <ul className="hidden md:flex md:flex-1 md:items-center md:justify-end md:gap-3">
                        <li>
                            <Link
                                href="/signin"
                                className="btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                            >
                                Sign In
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/signup"
                                className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,.16)] hover:bg-[length:100%_150%]"
                            >
                                Register
                            </Link>
                        </li>
                    </ul>

                    {/* ---------- Mobile toggle button ---------- */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="flex md:hidden items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-800/50 hover:text-gray-200 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {/* Hamburger / X icon using pure CSS */}
                        <span className="relative block h-5 w-5">
              <span
                  className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-transform ${
                      mobileOpen ? "top-2 rotate-45" : "-translate-y-1"
                  }`}
              />
              <span
                  className={`absolute left-0 top-2 h-0.5 w-full bg-current transition-opacity ${
                      mobileOpen ? "opacity-0" : "opacity-100"
                  }`}
              />
              <span
                  className={`absolute left-0 top-4 h-0.5 w-full bg-current transition-transform ${
                      mobileOpen ? "top-2 -rotate-45" : "translate-y-1"
                  }`}
              />
            </span>
                    </button>
                </div>

                {/* ---------- Mobile dropdown menu ---------- */}
                <div
                    className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
                        mobileOpen
                            ? "max-h-64 opacity-100"
                            : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                >
                    <div className="mt-2 rounded-2xl bg-gray-900/95 p-4 shadow-xl backdrop-blur-md"
                         style={{
                             border: "1px solid",
                             borderImageSlice: 1,
                             borderImageSource:
                                 "linear-gradient(to right, #1f2937, #374151, #1f2937)",
                         }}
                    >
                        <Link
                            href="/signin"
                            onClick={() => setMobileOpen(false)}
                            className="mt-2 block rounded-lg px-4 py-3 text-sm font-medium text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400 transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/signup"
                            onClick={() => setMobileOpen(false)}
                            className="mt-2 block rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 px-4 py-3 text-sm font-medium text-white shadow-md transition-transform hover:scale-105"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}