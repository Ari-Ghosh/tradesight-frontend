import TopMoversItem from "./TopMoversItem";

export default function TopMoversColumn(data: any) {
  const TOP_GAINERS: Array<object> = data.data.TOP_GAINERS.items;
  const TOP_LOSERS: Array<object> = data.data.TOP_LOSERS.items;

  return (
    <div className="flex flex-col justify-end">
      {/* Top Gainers Section */}
      <h1 className="text-base md:text-lg green-text">Top Gainers</h1>
      <div className="border-2 border-green-500 p-3 rounded-lg my-3">
        {TOP_GAINERS.map((item: any) => (
          <div
            key={item.symbol}
            className="flex flex-col justify-between transition-all hover:scale-[1.02] hover:shadow-lg hover:border hover:border-green-500 rounded-lg p-2"
          >
            <TopMoversItem data={item} />
          </div>
        ))}
      </div>

      {/* Top Losers Section */}
      <h1 className="text-base md:text-lg red-text">Top Losers</h1>
      <div className="border-2 border-red-500 p-3 rounded-lg my-3">
        {TOP_LOSERS.map((item: any) => (
          <div
            key={item.symbol}
            className="flex flex-col justify-between transition-all hover:scale-[1.02] hover:shadow-lg hover:border hover:border-red-500 rounded-lg p-2"
          >
            <TopMoversItem data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
