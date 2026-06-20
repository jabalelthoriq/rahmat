<script lang="ts">
  import { formatRupiah } from '$lib/utils/formatter';
  import { TrendingUp, TrendingDown, Sparkles } from 'lucide-svelte';
  
  interface Props {
    label: string;
    price: number;
    variant?: 'buy' | 'sell';
    change?: number;
  }
  
  let { label, price, variant = 'buy', change = 2.5 }: Props = $props();
  
  const isBuy = $derived(variant === 'buy');
  const isPositive = $derived(change >= 0);
  
  // Dynamic classes based on variant
  const cardGradient = $derived(isBuy 
    ? 'from-gold-500/10 via-amber-500/5 to-transparent'
    : 'from-slate-500/10 via-gray-500/5 to-transparent');
  const borderColor = $derived(isBuy 
    ? 'border-gold-500/40 hover:border-gold-500/70'
    : 'border-slate-500/40 hover:border-slate-500/70');
  const glowColor = $derived(isBuy ? 'shadow-gold' : 'shadow-purple');
  const accentColor = $derived(isBuy ? 'text-gold-400' : 'text-slate-400');
  const badgeBg = $derived(isBuy 
    ? 'bg-gradient-to-r from-gold-500/20 to-amber-500/20'
    : 'bg-gradient-to-r from-slate-500/20 to-gray-500/20');
</script>

<div class="relative group perspective">
  <!-- Animated Glow Behind Card -->
  <div class="absolute inset-0 bg-gradient-to-br {cardGradient} rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-pulse-slow"></div>
  
  <!-- Scanning Line Effect -->
  <div class="absolute inset-0 scanline rounded-3xl overflow-hidden pointer-events-none"></div>
  
  <!-- Main Card -->
  <div class="relative glass-card rounded-3xl p-6 transition-all duration-500 hover:scale-[1.03] hover:border-opacity-70 {borderColor} {glowColor} neon-border">
    <!-- Corner Decorations -->
    <div class="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-3xl">
      <div class="absolute -top-12 -right-12 w-24 h-24 rounded-full {badgeBg} opacity-50 blur-xl"></div>
    </div>
    
    <!-- Header Section -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-3">
        <!-- Animated Icon Container -->
        <div class="relative flex items-center justify-center w-12 h-12 rounded-2xl {badgeBg} border {borderColor} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 {glowColor}">
          {#if isBuy}
            <Sparkles class="w-6 h-6 {accentColor}" />
          {:else}
            <TrendingDown class="w-6 h-6 {accentColor}" />
          {/if}
        </div>
        
        <div>
          <div class="text-xs font-bold text-gray-400 uppercase tracking-wider">
            {label}
          </div>
          <div class="text-xs text-gray-500">
            {isBuy ? 'Harga Pembelian' : 'Harga Buyback'}
          </div>
        </div>
      </div>
      
      <!-- Change Badge -->
      <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full {badgeBg} border {borderColor}">
        {#if isPositive}
          <TrendingUp class="w-3.5 h-3.5 text-green-400" />
          <span class="text-xs font-bold text-green-400">+{change}%</span>
        {:else}
          <TrendingDown class="w-3.5 h-3.5 text-red-400" />
          <span class="text-xs font-bold text-red-400">{change}%</span>
        {/if}
      </div>
    </div>
    
    <!-- Price Display -->
    <div class="relative">
      <div class="text-4xl font-black gradient-text tracking-tight mb-2" data-testid="price">
        {formatRupiah(price)}
      </div>
      
      <!-- Price Update Indicator -->
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-1.5">
          <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span class="text-xs text-green-400 font-semibold">Live</span>
        </div>
        <span class="text-xs text-gray-500">• Updated just now</span>
      </div>
    </div>
    
    <!-- Bottom Accent Line -->
    <div class="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-{isBuy ? 'gold-500' : 'slate-500'} to-transparent opacity-50"></div>
  </div>
</div>
