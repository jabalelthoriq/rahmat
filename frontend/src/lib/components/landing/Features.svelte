<script lang="ts">
  import { TrendingUp, Shield, BarChart3, Calculator, Bell, Zap, Sparkles, Cpu, Globe, ArrowRight } from 'lucide-svelte';
  
  const features = [
    {
      icon: TrendingUp,
      title: 'Harga Real-time',
      description: 'Pantau harga emas Antam secara real-time dengan update setiap detik. Tidak pernah ketinggalan informasi.',
      color: 'gold',
      gradient: 'from-gold-500/20 to-gold-600/20',
      border: 'border-gold-500/40',
      text: 'text-gold-400',
      shadow: 'shadow-gold',
      badge: 'Live'
    },
    {
      icon: Shield,
      title: 'Rekomendasi Personal',
      description: 'Dapatkan rekomendasi investasi yang disesuaikan dengan profil risiko dan tujuan finansial Anda.',
      color: 'cyan',
      gradient: 'from-cyan-500/20 to-cyan-600/20',
      border: 'border-cyan-500/40',
      text: 'text-cyan-400',
      shadow: 'shadow-neon',
      badge: 'AI'
    },
    {
      icon: BarChart3,
      title: 'Analisis Mendalam',
      description: 'Grafik interaktif, moving average, dan indikator teknikal untuk membantu keputusan investasi.',
      color: 'purple',
      gradient: 'from-purple-500/20 to-purple-600/20',
      border: 'border-purple-500/40',
      text: 'text-purple-400',
      shadow: 'shadow-purple',
      badge: 'Pro'
    },
    {
      icon: Calculator,
      title: 'Kalkulator DCA',
      description: 'Simulasikan strategi Dollar Cost Averaging dan lihat potensi keuntungan investasi Anda.',
      color: 'gold',
      gradient: 'from-gold-500/20 to-amber-600/20',
      border: 'border-amber-500/40',
      text: 'text-amber-400',
      shadow: 'shadow-gold',
      badge: 'Smart'
    },
    {
      icon: Bell,
      title: 'Alert Harga',
      description: 'Atur notifikasi saat harga mencapai target Anda. Jangan lewatkan momen terbaik untuk investasi.',
      color: 'cyan',
      gradient: 'from-cyan-500/20 to-blue-600/20',
      border: 'border-blue-500/40',
      text: 'text-blue-400',
      shadow: 'shadow-neon',
      badge: 'Auto'
    },
    {
      icon: Zap,
      title: 'Performa Tinggi',
      description: 'Dibangun dengan teknologi modern untuk pengalaman yang cepat, responsif, dan tanpa lag.',
      color: 'purple',
      gradient: 'from-purple-500/20 to-pink-600/20',
      border: 'border-pink-500/40',
      text: 'text-pink-400',
      shadow: 'shadow-purple',
      badge: 'Fast'
    }
  ];
</script>

<section id="features" class="relative py-32 overflow-hidden">
  <!-- Background Effects -->
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gold-500/10 rounded-full blur-[128px]"></div>
  <div class="absolute bottom-0 left-1/4 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[128px]"></div>
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <!-- Header -->
    <div class="text-center mb-20">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-futuristic mb-6 animate-float">
        <Sparkles class="w-4 h-4 text-gold-400" />
        <span class="text-sm font-semibold text-gold-300 uppercase tracking-wide">Fitur Unggulan</span>
      </div>
      
      <h2 class="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
        Teknologi <span class="gradient-text text-transparent bg-clip-text">Masa Depan</span>
        <br />
        <span class="text-3xl md:text-5xl text-gray-400 font-bold mt-2 block">Untuk Investasi Anda</span>
      </h2>
      
      <p class="text-xl text-gray-300 max-w-3xl mx-auto glass-futuristic inline-block px-8 py-4 rounded-2xl">
        Semua yang Anda butuhkan untuk investasi emas yang cerdas dan profitable, 
        didukung oleh teknologi terkini dan analisis mendalam.
      </p>
    </div>
    
    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each features as feature, index}
        <div 
          class="group relative perspective"
          style="animation: float 6s ease-in-out infinite; animation-delay: {index * 0.5}s;"
        >
          <!-- Glow Effect Behind Card -->
          <div class="absolute inset-0 bg-gradient-to-br {feature.gradient} rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
          
          <!-- Main Card -->
          <div class="relative glass-card rounded-3xl p-8 h-full transition-all duration-500 hover:scale-[1.02] hover:border-opacity-60 neon-border scanline">
            <!-- Badge -->
            <div class="absolute top-6 right-6">
              <span class="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full glass-futuristic {feature.text} border {feature.border}">
                {feature.badge}
              </span>
            </div>
            
            <!-- Icon with Animated Container -->
            <div class="flex items-center justify-center w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br {feature.gradient} border {feature.border} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 {feature.shadow}">
              <svelte:component this={feature.icon} class="w-8 h-8 {feature.text}" />
            </div>
            
            <!-- Title -->
            <h3 class="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-500">
              {feature.title}
            </h3>
            
            <!-- Description -->
            <p class="text-gray-400 leading-relaxed mb-6">
              {feature.description}
            </p>
            
            <!-- Learn More Link -->
            <div class="flex items-center gap-2 text-sm font-semibold {feature.text} opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              <span>Pelajari lebih lanjut</span>
              <ArrowRight class="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
            
            <!-- Corner Accent -->
            <div class="absolute bottom-0 right-0 w-20 h-20 overflow-hidden rounded-br-3xl">
              <div class="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br {feature.gradient} opacity-50 blur-xl"></div>
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <!-- Bottom CTA Section -->
    <div class="mt-20 text-center">
      <div class="glass-futuristic rounded-3xl p-12 relative overflow-hidden neon-border">
        <!-- Background Animation -->
        <div class="absolute inset-0 holographic opacity-30"></div>
        
        <div class="relative z-10">
          <Cpu class="w-16 h-16 mx-auto mb-6 text-gold-400 animate-pulse-slow" />
          <h3 class="text-3xl md:text-4xl font-black text-white mb-4">
            Siap Memulai <span class="gradient-text text-transparent bg-clip-text">Investasi Masa Depan?</span>
          </h3>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan investor cerdas yang telah menggunakan platform kami.
          </p>
          <a 
            href="/auth/register"
            class="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-black font-bold rounded-2xl hover:scale-105 transition-all duration-300 neon-border"
          >
            <Globe class="w-5 h-5" />
            Mulai Sekarang - Gratis
            <ArrowRight class="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
