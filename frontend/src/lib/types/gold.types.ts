export interface GoldPrice {
  weight: number; // gram
  buyPrice: number; // harga beli
  sellPrice: number; // harga buyback
  timestamp: Date;
  change?: number; // persentase perubahan
  trend?: 'up' | 'down' | 'stable';
}

export interface GoldHistory {
  date: string;
  prices: GoldPrice[];
}

export interface Recommendation {
  type: 'buy' | 'hold' | 'wait';
  reason: string;
  confidence: number; // 0-100
}
