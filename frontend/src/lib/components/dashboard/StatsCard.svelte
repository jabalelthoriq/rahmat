<script lang="ts">
  interface Props {
    title: string;
    value: string;
    icon: string;
    trend?: 'up' | 'down';
  }
  
  let { title, value, icon, trend }: Props = $props();
  
  const trendColor = $derived(trend === 'up' ? 'text-green-400' : trend === 'down' ? 'text-red-400' : '');
  const trendIcon = $derived(trend === 'up' ? '↑' : trend === 'down' ? '↓' : '');
</script>

<div class="relative group">
  <div class="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  
  <div class="relative bg-gradient-to-br from-dark-200 to-dark-300 border border-gold-500/20 rounded-2xl p-5 transition-all duration-300 hover:border-gold-500/40 hover:shadow-gold">
    <div class="flex items-center justify-between mb-3">
      <span class="text-2xl">{icon}</span>
      {#if trend}
        <span class="text-sm font-bold {trendColor}">{trendIcon}</span>
      {/if}
    </div>
    
    <div class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
      {title}
    </div>
    
    <div class="text-2xl font-black text-white">
      {value}
    </div>
  </div>
</div>
