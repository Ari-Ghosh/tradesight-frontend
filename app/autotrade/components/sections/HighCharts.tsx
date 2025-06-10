import { useEffect, useState } from "react";
import DailyChart from "../charts/DailyCharts";
import WeeklyChart from "../charts/WeeklyCharts";
import MonthlyChart from "../charts/MonthlyCharts";
import YearlyChart from "../charts/YearlyCharts";
import axios from "axios";
import { apiURL } from "@/app/components/apiURL";
import NoStockData from "./NoStockData";
import Autotrade from "./AutoTrade";

interface HighChartProps {
    symbol: string;
}

export default function HighChart({ symbol }: HighChartProps) {
    const [display, setDisplay] = useState("DAILY");
    const [dailyCandlesData, setDailyCandlesData] = useState([]);
    const [weeklyCandlesData, setWeeklyCandlesData] = useState([]);
    const [monthlyCandlesData, setMonthlyCandlesData] = useState([]);
    const [yearlyCandlesData, setYearlyCandlesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [haveCandleData, setHaveCandleData] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);

        async function getCandlesData() {
            try {
                const response = await axios.post(`${apiURL}/getCandles`, {
                    symbol: btoa(symbol),
                });

                const daily = response?.data?.dailyCandles?.data?.candles ?? [];
                const weekly = response?.data?.weeklyCandles?.data?.candles ?? [];
                const monthly = response?.data?.monthlyCandles?.data?.candles ?? [];
                const yearly = response?.data?.yearlyCandles?.data?.candles ?? [];

                const hasData = daily.length > 0;

                setDailyCandlesData(daily);
                setWeeklyCandlesData(weekly);
                setMonthlyCandlesData(monthly);
                setYearlyCandlesData(yearly);
                setHaveCandleData(hasData);
            } catch (err) {
                console.error("Error fetching candle data:", err);
                setHaveCandleData(false);
            } finally {
                setLoading(false);
            }
        }

        getCandlesData();
    }, [symbol]);

    const renderChart = () => {
        switch (display) {
            case "DAILY":
                return <DailyChart data={dailyCandlesData} />;
            case "WEEKLY":
                return <WeeklyChart data={weeklyCandlesData} />;
            case "MONTHLY":
                return <MonthlyChart data={monthlyCandlesData} />;
            case "YEARLY":
                return <YearlyChart data={yearlyCandlesData} />;
            default:
                return null;
        }
    };

    return (
        <div>
            {loading ? (
                <div className="flex flex-col items-center justify-center py-8">
                    <div className="relative w-16 h-16">
                        <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent animate-spin"></div>
                        <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                        </div>
                    </div>
                    <p className="mt-4 text-gray-500 text-sm animate-pulse">Fetching stock chart data...</p>
                </div>

            ) : !haveCandleData ? (
                <NoStockData />
            ) : (
                <>
                    {renderChart()}
                    <div className="flex text-sm flex-row justify-center mt-4">
                        {["DAILY", "WEEKLY", "MONTHLY", "YEARLY"].map((interval) => (
                            <button
                                key={interval}
                                className={`p-1 px-3 mx-2 rounded-2xl ${display === interval
                                    ? "bg-white text-black border border-[#037a68]"
                                    : "border border-[#858585]"
                                    }`}
                                onClick={() => setDisplay(interval)}
                            >
                                {interval === "DAILY" ? "1D" :
                                    interval === "WEEKLY" ? "1W" :
                                        interval === "MONTHLY" ? "1M" : "1Y"}
                            </button>
                        ))}
                    </div>
                    <Autotrade ticker={symbol} />
                    <div className="flex justify-center mt-4">
                        <span className="text-gray-500 text-sm">Auto Trading Feed</span>
                    </div>
                    <div className="flex justify-center mt-2">
                        <span className="text-gray-500 text-sm">Powered by AI</span>
                    </div>
                    <div className="flex justify-center mt-2">
                        <span className="text-gray-500 text-sm">Disclaimer: This is a demo version. Please use it at your own risk.</span>
                    </div>
                </>
            )}
        </div>
    );
}
