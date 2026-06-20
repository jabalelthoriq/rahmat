<script lang="ts">
  import { formatRupiah } from '$lib/utils/formatter';
  
  interface Props {
    label: string;
    price: number;
    variant?: 'buy' | 'sell';
  }
  
  let { label, price, variant = 'buy' }: Props = $props();
  
  const isBuy = $derived(variant === 'buy');
  const gradientClass = $derived(isBuy 
    ? 'from-gold-900/20 via-gold-800/10 to-transparent'
    : 'from-gray-800/30 via-gray-700/20 to-transparent');
  const borderClass = $derived(isBuy 
    ? 'border-gold-500/30 hover:border-gold-500/50'
    : 'border-gray-600/30 hover:border-gray-500/50');
  const icon = $derived(isBuy ? '💎' : '💰');
</script>

<div class="relative group">
  <!-- Glow Effect -->
  <div class="absolute inset-0 bg-gradient-to-br {gradientClass} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
  
  <!-- Card -->
  <div class="relative bg-gradient-to-br from-dark-200 to-dark-300 border-2 {borderClass} rounded-2xl p-5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-gold">
    <!-- Icon & Label -->
    <div class="flex items-center gap-2 mb-3">
      <span class="text-2xl">{icon}</span>
      <div class="text-xs font-bold text-gray-400 uppercase tracking-wider">
        {label}
      </div>
    </div>
    
    <!-- Price -->
    <div class="text-3xl font-black text-white mb-1 tracking-tight" data-testid="price">
      {formatRupiah(price)}
    </div>
    
    <!-- Subtitle -->
    <div class="text-xs text-gray-500">
      {isBuy ? 'Harga pembelian saat ini' : 'Harga buyback / jual kembali'}
    </div>
  </div>
</div>
