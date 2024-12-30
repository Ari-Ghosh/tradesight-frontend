import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaChartLine } from "react-icons/fa";
import { PiChartLineDownBold } from "react-icons/pi";
import { Loader2 } from "lucide-react";

interface StockData {
    symbol: string;
    change_percent: number;
    price: number;
}

interface ApiResponse {
    data: StockData[];
    status: string;
}

export function StockPerformers() {
    const [topGainers, setTopGainers] = useState<StockData[]>([]);
    const [topLosers, setTopLosers] = useState<StockData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setError(false);
            try {
                const [gainersResponse, losersResponse] = await Promise.all([
                    fetch("http://localhost:8080/api/top_gainers"),
                    fetch("http://localhost:8080/api/top_losers"),
                ]);

                const gainersData: ApiResponse = await gainersResponse.json();
                const losersData: ApiResponse = await losersResponse.json();

                if (gainersData.status === "success" && losersData.status === "success") {
                    setTopGainers(gainersData.data.slice(0, 5));
                    setTopLosers(losersData.data.slice(0, 5));
                } else {
                    setError(true);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const renderStockList = (stocks: StockData[], title: string, isGainer: boolean) => (
        <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
            {stocks.length ? (
                <div className="grid gap-4">
                    {stocks.map(({ symbol, price, change_percent }) => (
                        <div
                            key={symbol}
                            className="flex items-center justify-between gap-3 rounded-lg border p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                            <div className="flex items-center gap-3">
                                {isGainer ? (
                                    <FaChartLine className="h-5 w-5 text-green-500" />
                                ) : (
                                    <PiChartLineDownBold className="h-5 w-5 text-red-500" />
                                )}
                                <span className="text-sm font-medium">{symbol}</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-sm font-semibold">₹{price.toFixed(2)}</span>
                                <span
                                    className={`text-xs font-semibold ${
                                        isGainer ? "text-green-600" : "text-red-600"
                                    }`}
                                >
                                    {isGainer ? "+" : ""}
                                    {change_percent.toFixed(2)}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-muted-foreground">No data available</p>
            )}
        </div>
    );

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-red-500">Failed to load data. Please try again later.</p>
            </div>
        );
    }

    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
                Top Performers
            </h2>
            <p className="mx-auto mb-12 max-w-[600px] text-center text-muted-foreground">
                Stay updated with the best-performing and underperforming stocks in real-time
            </p>
            <div className="flex flex-wrap -mx-2 mb-8">
                {renderStockList(topGainers, "Top Gainers", true)}
                {renderStockList(topLosers, "Top Losers", false)}
            </div>
        </section>
    );
}
