import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import CompanyDetails from './companyDetails';
import PriceDetails from './PriceDetails';
import InvestorsDetails from './InvestorsDetails';

declare global {
  interface Window {
    TradingView: any;
  }
}

export function ChartPage() {
  const { symbol } = useParams<{ symbol: string }>();
  const [formattedSymbol,setFormattedSymbol]=useState('')
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (containerRef.current && symbol) {
        setFormattedSymbol(symbol.replace('.NS', '').toLowerCase())

        new window.TradingView.widget({
          autosize: true,
          symbol: `${formattedSymbol}`,
          interval: "D",
          timezone: "Asia/Kolkata",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: containerRef.current.id,
          exchange: "NSE",
          width: "100%",
          hide_side_toolbar: false,
          studies: [
            "MASimple@tv-basicstudies",
            "Volume@tv-basicstudies"
          ]
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [symbol]);

  // Format the display symbol by removing .NS
  const displaySymbol = symbol?.replace('.NS', '') || '';

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 mx-10 overflow-y-auto max-h-[calc(100vh-100px)] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-200">
          <h1 className="text-3xl font-bold mb-6 mt-5">{displaySymbol} Stock Details</h1>
            <div id="tradingview_widget" ref={containerRef} className="w-full h-[calc(100vh-200px)]" />
            {formattedSymbol && (
              <>
              <div className="mt-6">
                <PriceDetails companyName={formattedSymbol} />
              </div>
              <div className="mt-6">
                <CompanyDetails companyName={formattedSymbol} />
              </div>
              <div className="mt-6">
                <InvestorsDetails companyName={formattedSymbol} />
              </div>
              </>
            )}
        </main>
      </div>
    </div>
  );
}

