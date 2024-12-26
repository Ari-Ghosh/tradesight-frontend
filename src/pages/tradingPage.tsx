import { Sidebar } from '../components/trading-portal/Sidebar'
import { Header } from '../components/trading-portal/Header'
import { PositionsTable } from '../components/trading-portal/PositionsTable'

const mockPositions = [
  {
    pair: 'Apple Inc. - AAPL',
    type: 'Long',
    size: 50.00,
    entryPrice: 145.30,
    marginIsolated: 7250.00,
    marginUsage: '15.45%',
    status: 'Complete'
  },
  {
    pair: 'Tesla Inc. - TSLA',
    type: 'Short',
    size: 30.00,
    entryPrice: 250.25,
    marginIsolated: 7500.00,
    marginUsage: '20.12%',
    status: 'Active'
  },
  {
    pair: 'Microsoft Corporation - MSFT',
    type: 'Long',
    size: 40.00,
    entryPrice: 320.50,
    marginIsolated: 12820.00,
    marginUsage: '10.35%',
    status: 'Complete'
  },
  {
    pair: 'Amazon.com Inc. - AMZN',
    type: 'Short',
    size: 25.00,
    entryPrice: 1450.50,
    marginIsolated: 3626.25,
    marginUsage: '18.75%',
    status: 'Active'
  },
  {
    pair: 'Alphabet Inc. - GOOGL',
    type: 'Long',
    size: 35.00,
    entryPrice: 2800.75,
    marginIsolated: 9802.62,
    marginUsage: '12.75%',
    status: 'Complete'
  }
] as const;

const mockOrders = [
  {
    time: '2022-09-14 20:12',
    type: 'Market',
    price: 1906.00,
    avgPrice: 1.86,
    amount: '2.6K',
    filling: '5.3K / 88%',
    postOnly: false,
    activeConditions: '-',
    status: 'Filled'
  },
  {
    time: '2023-01-10 10:45',
    type: 'Limit',
    price: 145.50,
    avgPrice: 145.30,
    amount: '500',
    filling: '500 / 100%',
    postOnly: true,
    activeConditions: 'Price reached target',
    status: 'Filled'
  },
  {
    time: '2023-05-18 14:30',
    type: 'Stop Loss',
    price: 250.00,
    avgPrice: 245.80,
    amount: '200',
    filling: '150 / 75%',
    postOnly: false,
    activeConditions: 'Triggered at 245.50',
    status: 'Partially Filled'
  },
  {
    time: '2023-08-22 16:25',
    type: 'Market',
    price: 320.75,
    avgPrice: 320.50,
    amount: '100',
    filling: '100 / 100%',
    postOnly: false,
    activeConditions: '-',
    status: 'Filled'
  },
  {
    time: '2023-09-01 09:00',
    type: 'Limit',
    price: 1450.00,
    avgPrice: 1451.25,
    amount: '300',
    filling: '300 / 100%',
    postOnly: true,
    activeConditions: 'Price exceeded target',
    status: 'Filled'
  }
] as const;

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          <PositionsTable positions={mockPositions} orders={mockOrders} />
        </main>
      </div>
    </div>
  )
}

export default App;
