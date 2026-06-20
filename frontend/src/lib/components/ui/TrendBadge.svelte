<script lang="ts">
  import { formatPercent } from '$lib/utils/formatter';
  
  interface Props {
    change: number;
    trend: 'up' | 'down' | 'stable';
  }
  
  // Svelte 5: Gunakan $props() untuk menerima properti
  let { change, trend }: Props = $props();
  
  // Svelte 5: Gunakan $derived() untuk reactive values
  const colorClass = $derived(
    trend === 'up' 
      ? 'bg-gradient-to-r from-green-900/50 to-green-800/50 text-green-400 border-green-500/30' 
      : trend === 'down' 
      ? 'bg-gradient-to-r from-red-900/50 to-red-800/50 text-red-400 border-red-500/30' 
      : 'bg-gradient-to-r from-gray-800/50 to-gray-700/50 text-gray-400 border-gray-500/30'
  );
  
  const icon = $derived(trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→');
  const glowClass = $derived(trend === 'up' ? 'shadow-green-500/20' : trend === 'down' ? 'shadow-red-500/20' : '');
</script>

<span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border {colorClass} {glowClass} shadow-lg backdrop-blur-sm transition-all duration-300">
  <span class="text-sm">{icon}</span>
  <span>{formatPercent(change)}</span>
</span>
