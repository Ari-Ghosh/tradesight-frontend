/* eslint-disable @next/next/no-img-element */
"use client";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { NavTransition } from "./NavTransition";
import { useEffect, useState } from "react";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function NavBar(props: any) {
  const [logStatus, setLogStatus] = useState(false);

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      setLogStatus(true);
    } else {
      setLogStatus(false);
    }
  }, [logStatus]);

  const router = useRouter();
  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: string,
    href: string,
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");

    body?.classList.add("page-transition-down");

    await sleep(400);
    router.push(href);
    await sleep(500);

    body?.classList.remove("page-transition");
  };

  const [query, setQuery] = useState("");
  async function handleSearch(e: any) {
    e.preventDefault();
    const body = document.querySelector("body");
    handleTransition(e, query, `/stocks?search=${query}`);
  }

  // Navigation links that were previously in the hamburger menu
  const navLinks = [
    {
      title: "Portfolio",
      id: 1,
      href: "/portfolio",
    },
    {
      title: "Watchlist",
      id: 2,
      href: "/watchlist",
    },
    {
      title: "Top Movers",
      id: 3,
      href: "/topmovers",
    },
    {
      title: "AutoTrade",
      id: 4,
      href: "/autotrade",
    },
    {
      title: "Log Out",
      id: 5,
      href: "/logout",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex mt-2 items-center flex-row justify-between text-xl">
        <div className="flex flex-row items-center">
          <img src="/Logo.png" alt="Logo" className="h-8" />
          <p className="ml-2 font-medium blue-text">
            <NavTransition className="" href="/">
              AlgoTrade Advisor
            </NavTransition>
          </p>
        </div>

        <div className="flex flex-row items-center">
          {/* Nav links from hamburger now displayed inline */}
          {logStatus && (
            <div className="mr-4 flex flex-row space-x-4">
              {navLinks.map((link) => (
                <NavTransition key={link.id} href={link.href} className="text-sm hover:green-text transition-colors duration-300">
                  {link.title}
                </NavTransition>
              ))}
            </div>
          )}

          <div className="flex flex-row items-center border border-1 border-[#C6C6C6] hover:border-[#858585] transition transition-all-0.5s rounded-lg px-2 py-1">
            <form
              className="flex flex-row items-center justify-center"
              onSubmit={handleSearch}
            >
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent focus:border-none focus:outline-none border-none px-2 text-base rounded-lg"
                type="text"
                placeholder="Search for stocks"
              />
              <button className="my-auto">
                <CiSearch className="hover:blue-text" />
              </button>
            </form>
          </div>

          {!logStatus && (
            <NavTransition
              href="/signup"
              className="flex"
            >
              <button className="bg-[#4169e1] hover:bg-[#1e3a8a] transition transition-all-0.5s bg-[#037A68] py-1 px-3 text-sm text-white rounded-md ml-3">
                Login/Register
              </button>
            </NavTransition>
          )}
        </div>
      </div>
      <hr className="w-full mt-2" />
    </div>
  );
}