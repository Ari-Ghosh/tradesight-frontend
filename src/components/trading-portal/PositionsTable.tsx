import { Position, Order } from "./types";
import { RefreshCw } from 'lucide-react';

interface PositionsTableProps {
  positions: Position[];
  orders: Order[];
}

export function PositionsTable({ positions, orders }: PositionsTableProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-black">Positions</h2>
          <div className="flex items-center gap-4">
            <select className="border p-2 rounded-lg bg-white text-black hover:bg-gray-100 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Trade Simulator</option>
            </select>
            <select className="border p-2 rounded-lg bg-white text-black hover:bg-gray-100 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Long</option>
            </select>
            <select className="border p-2 rounded-lg bg-white text-black hover:bg-gray-100 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All positions</option>
            </select>
            <button className="text-blue-500 bg-white hover:bg-blue-50 px-3 py-1 rounded-lg flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Clear Filter
            </button>
          </div>
        </div>

        {positions.map((position, index) => (
          <div key={index} className="border-b p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <span className="font-medium text-black">{position.pair}</span>
                <span className={`px-2 py-1 rounded ${
                  position.status === 'Complete' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {position.status}
                </span>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-right">
                  <div className="text-sm text-gray-500">Entry Price</div>
                  <div className="text-black">{position.entryPrice}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Margin (Isolated)</div>
                  <div className="text-black">{position.marginIsolated}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Margin (Usage)</div>
                  <div className="text-black">{position.marginUsage}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-black">
              <th className="pb-2">Time</th>
              <th className="pb-2">Type</th>
              <th className="pb-2">Price</th>
              <th className="pb-2">Av. price</th>
              <th className="pb-2">Amount (USDT)</th>
              <th className="pb-2">Filling (USDT)</th>
              <th className="pb-2">Post only</th>
              <th className="pb-2">Active conditions</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-t">
                <td className="py-3 text-black">{order.time}</td>
                <td className="py-3 text-black">{order.type}</td>
                <td className="py-3 text-black">{order.price}</td>
                <td className="py-3 text-black">{order.avgPrice}</td>
                <td className="py-3 text-black">{order.amount}</td>
                <td className="py-3 text-black">{order.filling}</td>
                <td className="py-3 text-black">{order.postOnly ? 'Yes' : 'No'}</td>
                <td className="py-3 text-black">{order.activeConditions}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded ${
                    order.status === 'Filled' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
