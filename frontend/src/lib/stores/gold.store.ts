import { writable, derived } from 'svelte/store';
import type { GoldPrice, Recommendation } from '$lib/types/gold.types';

// Store untuk harga live
export const livePrice = writable<GoldPrice | null>(null);

// Store untuk koneksi status
export const connectionStatus = writable<'connecting' | 'connected' | 'disconnected'>('connecting');

// Derived store untuk rekomendasi sederhana
export const recommendation = derived(livePrice, ($price) => {
  if (!$price) return null;

  const spread = (($price.buyPrice - $price.sellPrice) / $price.buyPrice) * 100;
  
  if (spread > 8) {
    return {
      type: 'wait' as const,
      reason: 'Spread terlalu tinggi (>8%), tunggu spread menurun',
      confidence: 75
    };
  } else if ($price.trend === 'up' && spread < 5) {
    return {
      type: 'buy' as const,
      reason: 'Tren naik dengan spread rendah, waktu yang baik untuk beli',
      confidence: 80
    };
  } else {
    return {
      type: 'hold' as const,
      reason: 'Kondisi stabil, pertimbangkan untuk hold',
      confidence: 60
    };
  }
});

// Mock data untuk development (hapus saat connect ke Go)
export function initializeMockData() {
  let basePrice = 1350000;
  
  const interval = setInterval(() => {
    const change = (Math.random() - 0.5) * 20000; // Random change ±10k
    basePrice += change;
    
    const spread = basePrice * 0.07; // 7% spread
    
    livePrice.set({
      weight: 1,
      buyPrice: Math.round(basePrice),
      sellPrice: Math.round(basePrice - spread),
      timestamp: new Date(),
      change: (change / basePrice) * 100,
      trend: change > 0 ? 'up' : change < 0 ? 'down' : 'stable'
    });
    
    connectionStatus.set('connected');
  }, 2000); // Update setiap 2 detik
  
  return () => clearInterval(interval);
}
