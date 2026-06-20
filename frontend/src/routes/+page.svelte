<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation';
  import { isAuthenticated } from '$lib/stores/auth.store';
  import Sidebar from '$lib/components/layout/Sidebar.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import LivePriceCard from '$lib/components/dashboard/LivePriceCard.svelte';
  import RecommendationPanel from '$lib/components/dashboard/RecommendationPanel.svelte';
  import StatsCard from '$lib/components/dashboard/StatsCard.svelte';
  import { initializeMockData } from '$lib/stores/gold.store';
  
  let cleanup: (() => void) | null = null;
  
  onMount(() => {
    // Redirect to landing if not authenticated
    if (!$isAuthenticated) {
      goto('/landing');
      return;
    }
    
    cleanup = initializeMockData();
  });
  
  onDestroy(() => {
    if (cleanup) cleanup();
  });
</script>

{#if $isAuthenticated}
  <div class="min-h-screen bg-black">
    <Sidebar />
    
    <!-- Main Content Area with left margin for sidebar -->
    <div class="pl-[340px] pt-8 pb-12 pr-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-black text-white mb-2">
          Dashboard <span class="gradient-text">Emas</span>
        </h1>
        <p class="text-gray-400">
          Pantau harga emas real-time dan dapatkan rekomendasi investasi
        </p>
      </div>
      
      <!-- Main Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div class="lg:col-span-2 space-y-6">
          <LivePriceCard />
          
          <!-- Chart Placeholder -->
          <div class="relative group glass-premium rounded-3xl p-6 md:p-8 scanline corner-accent">
            <h3 class="text-xl font-black text-white mb-6">
              Grafik Harga
            </h3>
            
            <div class="h-80 bg-dark-400 rounded-2xl border border-gold-500/20 flex items-center justify-center">
              <p class="text-gray-500">TradingView Charts akan ditampilkan di sini</p>
            </div>
          </div>
        </div>
        
        <div class="space-y-6">
          <RecommendationPanel />
          
          <div class="grid grid-cols-1 gap-4">
            <StatsCard title="Tertinggi Hari Ini" value="Rp 1.365.000" icon="📈" trend="up" />
            <StatsCard title="Terendah Hari Ini" value="Rp 1.340.000" icon="📉" trend="down" />
            <StatsCard title="Volume Transaksi" value="1,234" icon="💎" />
          </div>
        </div>
      </div>
    </div>
    
    <Footer />
  </div>
{/if}
