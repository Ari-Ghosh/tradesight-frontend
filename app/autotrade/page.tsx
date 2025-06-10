"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import RouterComponent from "../components/RouterComponent";
import SearchComponent from "./components/sections/SearchComponent";
import HighChart from "./components/sections/HighCharts";
import { Loader2 } from "lucide-react";
import Link from "next/link";


const AutoTradePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [stocks, setStocks] = useState<{ symbol: string; signal: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const res = await fetch("/api/v1/predict/all"); // Adjust base URL if needed
        const data = await res.json();
        if (data && data.data) {
          // Transform backend data to array
          const stocksArr = Object.entries(data.data)
            .filter(([_, v]: any) => v && !v.error)
            .map(([symbol, v]: any) => ({
              symbol,
              signal: v.Signal,
            }));
          setStocks(stocksArr);
        } else {
          setError("No data received from backend.");
        }
      } catch (err) {
        setError("Failed to fetch stock predictions.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchStocks();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const getSignalStyles = (signal: string) => {
    switch (signal) {
      case "BUY":
        return "bg-green-500 text-white animate-pulse";
      case "SELL":
        return "bg-red-500 text-white animate-pulse";
      case "HOLD":
        return "bg-yellow-400 text-black animate-pulse";
      default:
        return "";
    }
  };

  const filteredStocks = stocks.filter((stock) =>
    stock.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="md:mx-[15%]">
        <Navbar />
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-64 space-y-4">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
            <div className="text-lg font-medium text-gray-700 animate-pulse">
              Fetching Model Data...
            </div>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center h-64 space-y-4">
            <div className="text-lg font-medium text-red-500">{error}</div>
          </div>
        ) : (
          <div className="flex flex-col justify-start mx-6 md:mx-0">
            <div className="my-4 flex justify-center">
              <div className="w-full max-w-md">
                <SearchComponent
                  onSearch={handleSearch}
                  searchTerm={searchQuery}
                  setSearchTerm={setSearchQuery}
                />
                {searchQuery && (
                  <div className="ml-2 text-sm text-gray-500">
                    Searching for: <strong>{searchQuery}</strong>
                  </div>
                )}
              </div>
            </div>

            {searchQuery ? (
              <div className="my-6">
                <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredStocks.length > 0 ? (
                    filteredStocks.map((stock, index) => (
                      <Link
                        key={index}
                        href={`/stocks/${encodeURIComponent(stock.symbol)}`}
                        className="flex justify-between items-center p-4 rounded-lg border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        <div className="text-lg font-medium">{stock.symbol}</div>
                        <div
                          className={`px-3 py-1 rounded-full font-semibold ${getSignalStyles(
                            stock.signal
                          )}`}
                        >
                          {stock.signal}
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-gray-500">No matching stocks found</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="my-6">
                <h2 className="text-2xl font-semibold mb-4">Nifty 50 Signals</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {stocks.map((stock, index) => (
                    <Link
                      key={index}
                      href={`/stocks/${encodeURIComponent(stock.symbol)}`}
                      className="flex justify-between items-center p-4 rounded-lg border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-lg font-medium">{stock.symbol}</div>
                      <div
                        className={`px-3 py-1 rounded-full font-semibold ${getSignalStyles(
                          stock.signal
                        )}`}
                      >
                        {stock.signal}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col items-center">
              {searchQuery && (
                <div className="w-full mt-4">
                  <HighChart symbol={searchQuery.toUpperCase()} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoTradePage;
