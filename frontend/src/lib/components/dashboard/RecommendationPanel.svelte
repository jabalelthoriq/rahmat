<script lang="ts">
  import { recommendation } from '$lib/stores/gold.store';
  
  // Constant object, tidak perlu $derived
  const config = {
    buy: { 
      gradient: 'from-green-900/30 via-green-800/20 to-transparent',
      border: 'border-green-500/40',
      glow: 'shadow-green-500/30',
      icon: '💰', 
      label: 'WAKTU BELI',
      accent: 'text-green-400'
    },
    hold: { 
      gradient: 'from-blue-900/30 via-blue-800/20 to-transparent',
      border: 'border-blue-500/40',
      glow: 'shadow-blue-500/30',
      icon: '⏸️', 
      label: 'HOLD',
      accent: 'text-blue-400'
    },
    wait: { 
      gradient: 'from-orange-900/30 via-orange-800/20 to-transparent',
      border: 'border-orange-500/40',
      glow: 'shadow-orange-500/30',
      icon: '⏳', 
      label: 'TUNGGU',
      accent: 'text-orange-400'
    }
  };
  
  // Gunakan $derived karena bergantung pada store $recommendation
  const currentConfig = $derived($recommendation ? config[$recommendation.type] : null);
</script>

{#if $recommendation && currentConfig}
  <div class="relative group">
    <!-- Background Glow -->
    <div class="absolute inset-0 bg-gradient-to-br {currentConfig.gradient} rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
    
    <!-- Card -->
    <div class="relative bg-gradient-to-br from-dark-200 to-dark-300 border-2 {currentConfig.border} rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-gold-lg">
      <!-- Gold Accent Line -->
      <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600"></div>
      
      <div class="p-6 md:p-8">
        <!-- Header -->
        <div class="flex items-start gap-4 mb-6">
          <div class="text-5xl">{currentConfig.icon}</div>
          <div class="flex-1">
            <div class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              Rekomendasi
            </div>
            <h3 class="text-2xl font-black {currentConfig.accent} mb-2">
              {currentConfig.label}
            </h3>
            <p class="text-sm text-gray-300 leading-relaxed">
              {$recommendation.reason}
            </p>
          </div>
        </div>
        
        <!-- Confidence Bar -->
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Confidence Level
            </span>
            <span class="text-lg font-black {currentConfig.accent}">
              {$recommendation.confidence}%
            </span>
          </div>
          
          <div class="relative w-full bg-dark-400 rounded-full h-3 overflow-hidden border border-gray-700/50">
            <div 
              class="absolute inset-y-0 left-0 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 rounded-full transition-all duration-1000 ease-out shadow-gold"
              style="width: {$recommendation.confidence}%"
            >
              <!-- Shimmer Effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
