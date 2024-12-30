import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaChartLine } from "react-icons/fa";
import { Loader2 } from "lucide-react";

interface StockData {
  symbol: string;
  price: number;
  change_percent: number;
}

export function PortfolioTracking() {
  const [portfolioItems, setPortfolioItems] = useState<StockData[]>([]);
  const [investmentAmount, setInvestmentAmount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGainers = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/top_gainers");
        if (!response.ok) {
          throw new Error("Failed to fetch top gainers");
        }

        const data = await response.json();
        if (data.status === "success") {
          const randomGainers = data.data
            .sort(() => 0.5 - Math.random())
            .slice(0, 5);
          setPortfolioItems(randomGainers);

          // Generate random investment amount between 1L to 2L
          const investment = Math.floor(Math.random() * (200000 - 100000 + 1)) + 100000;
          setInvestmentAmount(investment);
        } else {
          throw new Error(data.message || "Failed to fetch top gainers");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGainers();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  const stockDetails = portfolioItems.map((stock) => {
    const amountInvested = investmentAmount / 5;
    const quantityBought = Math.floor(amountInvested / stock.price);
    const totalInvestedInStock = quantityBought * stock.price;
    const gain = (quantityBought * stock.price * stock.change_percent) / 100;
    return {
      ...stock,
      amountInvested: totalInvestedInStock,
      quantityBought,
      gainPercent: stock.change_percent,
      gainAmount: gain,
    };
  });

  const totalGain = stockDetails.reduce((acc, stock) => acc + stock.gainAmount, 0);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid gap-16 md:grid-cols-1 md:gap-12">
        <div>
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">Track your portfolio</h2>
          <p className="mb-8 text-muted-foreground">
            Monitor your investments in real-time with our comprehensive portfolio tracking system. Get instant updates on performance, trends, and market movements.
          </p>
          <div className="relative rounded-xl shadow-2xl shadow-blue-300">
            <div className="bg-white rounded-lg shadow-md">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-t-lg">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-5">
                <div className="mb-4 text-lg font-medium flex justify-between">
                  <p>
                    Total Investment: <span className="font-bold">₹{investmentAmount.toLocaleString()}</span>
                  </p>
                  <p className={` ${totalGain >= 0 ? "text-green-500" : "text-red-500"}`}>
                    Total {totalGain >= 0 ? "Gain" : "Loss"}: ₹{Math.abs(totalGain).toLocaleString()} 
                    ({totalGain >= 0 ? `+${((totalGain / investmentAmount) * 100).toFixed(2)}%` : `-${((Math.abs(totalGain) / investmentAmount) * 100).toFixed(2)}%`})
                  </p>
                </div>
                <div className="mb-8 overflow-hidden rounded-lg border">
                  <table className="w-full">
                    <thead className="border-b bg-muted/50">
                      <tr>
                        <th className="p-4 text-left font-medium">Company</th>
                        <th className="p-4 text-right font-medium">Price</th>
                        <th className="p-4 text-right font-medium">Quantity</th>
                        <th className="p-4 text-right font-medium">Invested</th>
                        <th className="p-4 text-right font-medium">Gain (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stockDetails.map((stock) => (
                        <tr key={stock.symbol} className="border-b last:border-0">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <FaChartLine className="h-5 w-5 text-blue-500" />
                              <span className="font-medium">{stock.symbol}</span>
                            </div>
                          </td>
                          <td className="p-4 text-right">₹{stock.price.toFixed(2)}</td>
                          <td className="p-4 text-right">{stock.quantityBought}</td>
                          <td className="p-4 text-right">₹{stock.amountInvested.toFixed(2)}</td>
                          <td className="p-4 text-right text-green-500">
                            +{stock.gainPercent.toFixed(2)}% 
                            ({stock.gainAmount >= 0 ? `+₹${stock.gainAmount.toFixed(2)}` : `-₹${Math.abs(stock.gainAmount).toFixed(2)}`})
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
