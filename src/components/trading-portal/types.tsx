export interface Position {
    pair: string
    type: 'Short' | 'Long'
    size: number
    entryPrice: number
    marginIsolated: number
    marginUsage: string
    status: 'Complete' | 'Open'
  }
  
  export interface Order {
    time: string
    type: 'Market'
    price: number
    avgPrice: number
    amount: string
    filling: string
    postOnly: boolean
    activeConditions: string
    status: 'Filled' | 'Close'
  }
  
  