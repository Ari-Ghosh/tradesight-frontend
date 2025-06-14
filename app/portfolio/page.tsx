"use client";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useState, useEffect } from "react";
import { apiURL } from "../components/apiURL";
import Navbar from "../components/navbar/Navbar";
import { NavTransition } from "../components/navbar/NavTransition";
import parseJwt from "../components/navbar/utils/parseJwt";
import Networth from "./sections/Networth";
import RouterComponent from "../components/RouterComponent";

export default function PortfolioPage() {
  let token = getCookie("token");
  const [details, setDetails] = useState({});
  const [profitDetails, setProfitDetails] = useState({});
  useEffect(() => {
    let tokenContents;
    if (token) {
      tokenContents = parseJwt(token);
    }

    async function getNetworth() {
      let results;
      try {
        results = await axios({
          method: "post",
          url: apiURL + "/auth/getAccountDetails",
          headers: { Authorization: "Bearer " + token },
        });
        setDetails(results.data);
      } catch (err) {
        console.error(err);
      }
    }

    async function getProfit() {
      let results;
      try {
        results = await axios({
          method: "post",
          url: apiURL + "/transaction/getAccountProfit",
          headers: { Authorization: "Bearer " + token },
        });
        setProfitDetails(results.data);
      } catch (err) {
        console.error(err);
      }
    }
    getProfit();
    getNetworth();
  }, [token]);
  return (
    <div>
      <div className="md:mx-[15%]">
        <Navbar />
        <div className="flex flex-col justify-start mx-6 md:mx-0">
          <div className="my-4 ">
            <RouterComponent />
          </div>

          <div>
            <Networth data={details} profitDetails={profitDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}
