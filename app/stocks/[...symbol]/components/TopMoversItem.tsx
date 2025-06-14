import { NavTransition } from "@/app/components/navbar/NavTransition";
import Link from "next/link";

export default function TopMoversItem(data: any) {
  const nseScriptCode = data.data.company.nseScriptCode;
  const ltp = data.data.stats.ltp.toFixed(2);
  const dayChange = data.data.stats.dayChange.toFixed(2);
  const dayChangePerc = data.data.stats.dayChangePerc.toFixed(2);
  return (
    <NavTransition
      href={`/stocks/${encodeURIComponent(nseScriptCode)}`}
      className=""
    >
      <div className="w-full  p-1 ">
        <div className="flex w-full flex-row justify-between my-1">
          <div className="mr-2 md:mr-12 justify-center items-center text-sm md:text-sm font-bolder ml-2 ">
            {nseScriptCode}
          </div>
          <div className="flex flex-row items-end">
            <p className="mr-2 text-sm md:text-sm">{ltp}</p>
            <p
              className={`${
                dayChange >= 0 ? "green-text text-sm" : "red-text text-sm"
              } "font-bold text-sm"`}
            >
              {dayChange}
            </p>
            <p
              className={
                dayChange >= 0 ? "green-text text-sm" : "red-text text-sm"
              }
            >
              ({dayChangePerc >= 0 ? "+" : ""}
              {dayChangePerc}%)
            </p>
          </div>
        </div>
      </div>
    </NavTransition>
  );
}
