import Link from "next/link";
import { NavTransition } from "./components/navbar/NavTransition";
import Navbar from "./components/navbar/Navbar";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="text-center md:text-start flex flex-col md:mx-[15%]">
        <Navbar logStatus={false} />
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-6 text-center bg-gradient-to-b from-white to-gray-100">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 blue-text">
            Master the Market with Paper Trading
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience real-time market dynamics without the risk. AlgoTrade Advisor
            brings you a comprehensive paper trading platform to hone your
            skills.
          </p>
          <NavTransition
            href="/signup"
            className="px-6 py-3 text-white bg-[#4169e1] rounded-md hover:bg-[#1e3a8a] transition transition-all-0.5s text-lg font-semibold"
          >
            Start Trading Now
            <svg
              className="ml-2 h-4 w-4 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </NavTransition>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-[#1e3a8a]">
          <h2 className="text-3xl font-bold text-center mb-12 white-text">
            Powerful Features at Your Fingertips
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <FeatureCard
              icon={<span className="text-blue-text">📊</span>}
              title="Live Data for 2000+ Stocks"
              description="Access real-time data for a wide range of stocks, ensuring you're always up-to-date with the market."
            />
            <FeatureCard
              icon={<span className="text-blue-text">👁️</span>}
              title="Advanced Charting"
              description="Visualize stock performance with our charting, helping you make informed decisions."
            />
            <FeatureCard
              icon={<span className="text-blue-text">📈</span>}
              title="Paper Trading Portfolio"
              description="Build and manage your virtual portfolio, testing strategies without risking real money."
            />
            <FeatureCard
              icon={<span className="text-blue-text">📊</span>}
              title="Customizable Watchlists"
              description="Create and monitor personalized watchlists to keep track of your favorite stocks."
            />
            <FeatureCard
              icon={<span className="text-blue-text">🔻</span>}
              title="Live Top Movers"
              description="Stay informed with real-time data on top gainers, losers, and most active stocks across all market caps."
            />
            <FeatureCard
              icon={<span className="text-blue-text">💻</span>}
              title="All Open Source"
              description="Zenvest is an open-source project, built for aspiring traders."
            />
          </div>
        </section>

        {/* Zenvest Experience Section */}
        <section className="py-16 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-12 blue-text">
            Experience the Power of AlgoTrade Advisor
          </h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            <Card
              title="Intuitive Dashboard"
              description="Get a comprehensive view of the market and your portfolio at a glance."
              image="/StockPage.jpg"
            />
            <Card
              title="Detailed Portfolio Analysis"
              description="Track your performance with in-depth portfolio analytics and insights."
              image="/Portfolio.jpg"
            />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-6 text-center bg-[#1e3a8a]">
          <h2 className="text-3xl font-bold mb-4 white-text">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-xl white-text mb-8 max-w-2xl mx-auto">
            Join traders who are honing their skills with AlgoTrade Advisor. Sign up
            today and take your first step towards mastering the market.
          </p>
          <NavTransition
            href="/signup"
            className="px-6 py-3 blue-text bg-[#FFFFFF] rounded-md hover:bg-[#D3D3D3] transition transition-all-0.5s text-lg font-semibold"
          >
            Create Your Free Account
            <svg
              className="ml-2 h-4 w-4 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </NavTransition>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="py-6 px-6 bg-white border-t text-center text-sm text-gray-600">
        <p>&copy; 2025. All rights reserved.</p>
      </footer>
    </div>
  );
}

// FeatureCard component
function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="border rounded-lg p-6 shadow-lg bg-white/20 backdrop-blur-lg border-white/30 transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="mb-2">{icon}</div>
      <h3 className="text-lg font-bold white-text">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

// Card component
function Card({ title, description, image }: any) {
  return (
    <div className="border rounded-lg p-6 shadow-lg bg-gray-300/40 backdrop-blur-lg border-white/30 transition-all duration-300 ease-in-out transform hover:scale-105">
      <h3 className="text-lg font-bold blue-text">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <img
        src={image}
        alt={`${title} Screenshot`}
        className="rounded-lg shadow-md w-full"
      />
    </div>
  );
}
