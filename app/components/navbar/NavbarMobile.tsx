/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { NavTransition } from "./NavTransition";
import Hamburger from "./utils/Hamburger";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

const NavbarMobile = (props: any) => {
  const router = useRouter();
  const [logStatus, setLogStatus] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

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
    setIsMenuOpen(false);
  };

  const [query, setQuery] = useState("");

  async function handleSearch(e: any) {
    e.preventDefault();
    const body = document.querySelector("body");
    handleTransition(e, query, `/stocks?search=${query}`);
    setIsSearchVisible(false);
  }

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      setLogStatus(true);
    } else {
      setLogStatus(false);
    }
  }, [logStatus]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchVisible(false); // Ensure search is closed when menu is toggled
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    setIsMenuOpen(false); // Ensure menu is closed when search is toggled
  };

  // Navigation links from desktop NavBar
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
      title: "Log Out",
      id: 4,
      href: "/logout",
    },
  ];

  return (
    <div className="my-4 mx-6 text-xl">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <img src="/Logo.png" alt="Logo" className="h-8" />
          <p className="ml-2 font-medium blue-text">
            <NavTransition className="" href="/">
              AlgoTrade Advisor
            </NavTransition>
          </p>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="mr-2">
            <button onClick={toggleSearch}>
              <CiSearch className="text-[#037A68] cursor-pointer" />
            </button>
          </div>
          {!logStatus && (
            <NavTransition href="/signup" className="flex">
              <button className="bg-[#037A68] flex items-center justify-center py-1 px-2 text-sm text-white rounded-md ml-3">
                Login/Register
              </button>
            </NavTransition>
          )}
          {logStatus && <Hamburger />}
        </div>
      </div>

      {/* Search Bar */}
      <div
        className={`search-bar my-2 flex flex-row border border-1 border-[#C6C6C6] hover:border-[#858585] transition transition-all-0.5s rounded-lg px-2 py-2 ${isSearchVisible ? "animate-in" : "hidden"}`}
      >
        <form
          className="flex flex-row w-full justify-between"
          onSubmit={handleSearch}
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full flex bg-transparent focus:border-none focus:outline-none border-none px-2 text-base rounded-lg"
            type="text"
            placeholder="Search for stocks"
          />
          <button className="my-auto">
            <CiSearch className="hover:blue-text" />
          </button>
        </form>
      </div>

      {/* Navigation Menu */}
      {logStatus && (
        <div
          className={`flex flex-col mt-2 space-y-2 ${isMenuOpen ? "animate-in" : "hidden"}`}
        >
          {navLinks.map((link) => (
            <NavTransition
              key={link.id}
              href={link.href}
              className="text-base hover:blue-text transition-colors duration-300"
            >
              {link.title}
            </NavTransition>
          ))}
        </div>
      )}

      <hr className="w-full mt-2" />
    </div>
  );
};

export default NavbarMobile;