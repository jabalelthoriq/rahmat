<script lang="ts">
  import { TrendingUp, Shield, BarChart3, Calculator, Bell, Zap } from 'lucide-svelte';
  
  const features = [
    {
      icon: TrendingUp,
      title: 'Harga Real-time',
      description: 'Pantau harga emas Antam secara real-time dengan update setiap detik. Tidak pernah ketinggalan informasi.'
    },
    {
      icon: Shield,
      title: 'Rekomendasi Personal',
      description: 'Dapatkan rekomendasi investasi yang disesuaikan dengan profil risiko dan tujuan finansial Anda.'
    },
    {
      icon: BarChart3,
      title: 'Analisis Mendalam',
      description: 'Grafik interaktif, moving average, dan indikator teknikal untuk membantu keputusan investasi.'
    },
    {
      icon: Calculator,
      title: 'Kalkulator DCA',
      description: 'Simulasikan strategi Dollar Cost Averaging dan lihat potensi keuntungan investasi Anda.'
    },
    {
      icon: Bell,
      title: 'Alert Harga',
      description: 'Atur notifikasi saat harga mencapai target Anda. Jangan lewatkan momen terbaik untuk investasi.'
    },
    {
      icon: Zap,
      title: 'Performa Tinggi',
      description: 'Dibangun dengan teknologi modern untuk pengalaman yang cepat, responsif, dan tanpa lag.'
    }
  ];
</script>

<section id="features" class="py-20 bg-gradient-to-b from-black to-dark-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-black text-white mb-4">
        Fitur <span class="text-gold-500">Unggulan</span>
      </h2>
      <p class="text-xl text-gray-400 max-w-2xl mx-auto">
        Semua yang Anda butuhkan untuk investasi emas yang cerdas dan profitable
      </p>
    </div>
    
    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each features as feature}
        <div class="group relative">
          <div class="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="relative bg-gradient-to-br from-dark-200 to-dark-300 border border-gold-500/20 rounded-2xl p-8 h-full transition-all duration-300 hover:border-gold-500/40 hover:shadow-gold">
            <!-- Icon -->
            <div class="flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 border border-gold-500/30 group-hover:scale-110 transition-transform duration-300">
              <svelte:component this={feature.icon} class="w-7 h-7 text-gold-500" />
            </div>
            
            <!-- Title -->
            <h3 class="text-xl font-bold text-white mb-3">
              {feature.title}
            </h3>
            
            <!-- Description -->
            <p class="text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
