import Link from "next/link";
import Scrip from "../Scrip";

export default function TopGainers(props: { type: string; apiData: any }) {
  let topGainers = props.apiData;

  return (
    <div className="mb-12 my-4">
      <Link href="/topmovers">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Top{" "}
          <span
            className={
              props.type === "Gainers"
                ? "green-text"
                : props.type === "Losers"
                ? "red-text"
                : "text-black"
            }
          >
            {props.type}
          </span>{" "}
          this week
        </h1>
      </Link>

      <div className="p-6 rounded-2xl backdrop-blur-md bg-gray-200/30 shadow-lg">
        <div className="grid gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {topGainers?.map((scrip: any, index: number) => (
            <div
              key={index}
              className="transition-transform transform rounded-xl p-2 border-2 border-[#037a68] hover:scale-105 hover:shadow-2xl rounded-xl p-2"
            >
              <Scrip
                title={scrip.company.companyName}
                ltp={scrip.stats.ltp}
                symbol={scrip.company.nseScriptCode}
                change={scrip.stats.dayChange.toFixed(2)}
                changePercent={scrip.stats.dayChangePerc.toFixed(2)}
                opening={scrip.stats.high}
                closing={scrip.stats.close}
                equityType={scrip.company.equityType}
                yearlyHigh={scrip.stats.yearHighPrice}
                yearlyLow={scrip.stats.yearLowPrice}
                marketCap={scrip.company.marketCap}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
