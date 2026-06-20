<script lang="ts">
  import { livePrice, connectionStatus } from '$lib/stores/gold.store';
  import PriceCard from '$lib/components/ui/PriceCard.svelte';
  import TrendBadge from '$lib/components/ui/TrendBadge.svelte';
  import { formatTime } from '$lib/utils/formatter';
  
  // Constant object
  const statusConfig = {
    connected: { color: 'bg-green-500', glow: 'shadow-green-500/50', text: 'LIVE' },
    connecting: { color: 'bg-yellow-500', glow: 'shadow-yellow-500/50', text: 'CONNECTING' },
    disconnected: { color: 'bg-red-500', glow: 'shadow-red-500/50', text: 'OFFLINE' }
  };
  
  // Gunakan $derived karena bergantung pada store $connectionStatus
  const currentStatus = $derived(statusConfig[$connectionStatus]);
</script>

<div class="relative">
  <!-- Background Glow -->
  <div class="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent rounded-3xl blur-3xl"></div>
  
  <!-- Card -->
  <div class="relative bg-gradient-to-br from-dark-200 to-dark-300 border border-gold-500/20 rounded-3xl shadow-2xl overflow-hidden">
    <!-- Gold Accent Line -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600"></div>
    
    <div class="p-6 md:p-8 space-y-6">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div>
          <div class="flex items-center gap-3 mb-2">
            <h2 class="text-2xl md:text-3xl font-black text-white tracking-tight">
              Emas Antam
            </h2>
            <span class="px-3 py-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-black text-xs font-black rounded-full">
              1 GRAM
            </span>
          </div>
          
          <!-- Status Indicator -->
          <div class="flex items-center gap-2">
            <div class="relative">
              <div class="w-2.5 h-2.5 rounded-full {currentStatus.color} {currentStatus.glow} shadow-lg"></div>
              <div class="absolute inset-0 w-2.5 h-2.5 rounded-full {currentStatus.color} animate-ping opacity-75"></div>
            </div>
            <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">
              {currentStatus.text}
              {#if $livePrice}
                <span class="text-gray-500 ml-2">• {formatTime($livePrice.timestamp)}</span>
              {/if}
            </span>
          </div>
        </div>
        
        {#if $livePrice?.change !== undefined && $livePrice?.trend}
          <TrendBadge change={$livePrice.change} trend={$livePrice.trend} />
        {/if}
      </div>
      
      <!-- Price Cards -->
      {#if $livePrice}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PriceCard 
            label="Harga Beli" 
            price={$livePrice.buyPrice} 
            variant="buy"
          />
          <PriceCard 
            label="Harga Buyback" 
            price={$livePrice.sellPrice} 
            variant="sell"
          />
        </div>
      {:else}
        <!-- Loading Skeleton -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="h-32 bg-dark-300 rounded-2xl animate-pulse"></div>
          <div class="h-32 bg-dark-300 rounded-2xl animate-pulse"></div>
        </div>
      {/if}
    </div>
  </div>
</div>
