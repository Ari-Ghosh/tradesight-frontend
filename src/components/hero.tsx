import { Button } from "@/components/ui/button";
import { TbNumber50Small } from "react-icons/tb";
import { FaCoins } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { useEffect, useState } from "react";

interface IndexData {
  name: string;
  change: number;
}

export function Hero() {
  const [indicesData, setIndicesData] = useState<IndexData[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/indices-data")
      .then((response) => response.json())
      .then((data) => {
        setIndicesData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const getIcon = (name: string) => {
    switch (name) {
      case "NIFTY 50":
        return <TbNumber50Small className="h-6 w-6 text-blue-500" />;
      case "BANKNIFTY":
        return <FaCoins className="h-6 w-6 text-green-500" />;
      case "SENSEX":
        return <AiOutlineStock className="h-6 w-6 text-red-500" />;
      default:
        return <TbNumber50Small className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <section className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-[800px] text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          Make Better Investment Decisions With Alternative Data
        </h1>
        <p className="mb-8 text-lg text-muted-foreground md:text-xl">
          Track your portfolio performance and get real-time insights with our comprehensive investment analytics platform
        </p>
        <Button size="lg" className="bg-[#0066FF] hover:bg-[#0052CC] h-12 px-8">
          Get Started
        </Button>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mx-auto max-w-4xl">
        {indicesData.map((index, idx) => (
          <div key={idx} className="flex items-center justify-between gap-3 rounded-lg border p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
            {getIcon(index.name)}
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium">{index.name}</span>
              <span
                className={`text-xs font-semibold ${
                  index.change >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {index.change >= 0 ? "+" : ""}
                {index.change.toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}