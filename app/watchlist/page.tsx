"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import WatchlistScrip from "./components/WatchlistScrip";
import { apiURL } from "../components/apiURL";
import axios from "axios";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { NavTransition } from "../components/navbar/NavTransition";
import Loading from "../components/Loading";
import RouterComponent from "../components/RouterComponent";
export default function WatchlistPage() {
  const [watchlistData, setWatchlistData] = useState([]);
  const token = getCookie("token");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getWatchListData() {
      let data;
      try {
        data = await axios({
          method: "post",
          url: apiURL + "/getWatchList",
          headers: { Authorization: "Bearer " + token },
        });
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
      setWatchlistData(data?.data);
      return data?.data;
    }
    getWatchListData();
  }, [token]);
  return (
    <div className="md:mx-[15%] ">
      <Navbar />
      <div className="mt-2 mb-8 mx-6 md:mx-0">
        <div className="my-4">
          <RouterComponent />
        </div>

        <div className="my-4">
          <h1 className="text-xl font-semibold">Watchlist</h1>
        </div>

        {loading ? (
          <div className=" w-full h-full flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <div className="grid gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {Object.keys(watchlistData).map((key: any) => {
              const scrip = watchlistData[key];
              return <WatchlistScrip key={key} scrip={scrip} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
