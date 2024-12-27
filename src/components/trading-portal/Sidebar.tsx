import { Home, BarChart2, Wallet, BanknoteIcon as Bank, Database, Layout, Settings, HelpCircle } from 'lucide-react'
import { AiOutlineStock } from "react-icons/ai";

interface NavItem {
  icon: React.ReactNode
  label: string
  count?: number
}

export function Sidebar() {
  const navItems: NavItem[] = [
    { icon: <BarChart2 className="w-5 h-5" />, label: 'Markets', count: 1 },
    { icon: <Layout className="w-5 h-5" />, label: 'Trading', count: 1 },
    { icon: <Wallet className="w-5 h-5" />, label: 'Wallet', count: 1 },
    { icon: <Bank className="w-5 h-5" />, label: 'Loans', count: 1 },
    { icon: <Database className="w-5 h-5" />, label: 'Vaults', count: 1 },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings' },
    { icon: <HelpCircle className="w-5 h-5" />, label: 'Help' },
  ];

  return (
    <div className="w-64 bg-white border-r h-screen p-4">
      <div className="flex items-center gap-2 mb-8">
        <AiOutlineStock className="w-8 h-8 bg-red-500 rounded-lg p-2 text-white" />
        <span className="text-xl font-bold text-black">Trade Sight</span>
      </div>
      
      <div className="space-y-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-4 w-full p-3 rounded-lg bg-white text-gray-700 hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {item.icon}
            <span className="text-lg">{item.label}</span>
            {item.count && (
              <span className="ml-auto bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {item.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
