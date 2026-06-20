<script lang="ts">
  import { TrendingUp, Shield, BarChart3 } from 'lucide-svelte';
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
  <!-- Background -->
  <div class="absolute inset-0 bg-gradient-to-br from-black via-dark-900 to-black"></div>
  
  <!-- Animated Gold Lines -->
  <div class="absolute inset-0 opacity-20">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent animate-pulse"></div>
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent animate-pulse" style="animation-delay: 1s"></div>
  </div>
  
  <!-- Content -->
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="text-center">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-sm mb-8">
        <div class="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></div>
        <span class="text-sm font-medium text-gold-400">Platform Investasi Emas Terpercaya</span>
      </div>
      
      <!-- Heading -->
      <h1 class="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
        Investasi Emas
        <span class="block mt-2 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
          Lebih Cerdas
        </span>
      </h1>
      
      <!-- Subheading -->
      <p class="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
        Dapatkan rekomendasi investasi emas Antam yang dipersonalisasi berdasarkan profil risiko Anda. 
        Pantau harga real-time dan buat keputusan investasi yang tepat.
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a 
          href="/auth/register"
          class="group relative px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-black font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-gold-xl"
        >
          <span class="relative z-10">Mulai Investasi Sekarang</span>
          <div class="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </a>
        
        <a 
          href="#features"
          class="px-8 py-4 border-2 border-gold-500/30 text-gold-400 font-bold rounded-xl hover:border-gold-500 hover:bg-gold-500/10 transition-all duration-300"
        >
          Pelajari Lebih Lanjut
        </a>
      </div>
      
      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
        <div class="text-center">
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 border border-gold-500/30">
            <TrendingUp class="w-8 h-8 text-gold-500" />
          </div>
          <div class="text-3xl font-black text-white mb-2">Real-time</div>
          <div class="text-sm text-gray-400">Harga Emas Live</div>
        </div>
        
        <div class="text-center">
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 border border-gold-500/30">
            <Shield class="w-8 h-8 text-gold-500" />
          </div>
          <div class="text-3xl font-black text-white mb-2">Personalized</div>
          <div class="text-sm text-gray-400">Rekomendasi Sesuai Profil</div>
        </div>
        
        <div class="text-center">
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 border border-gold-500/30">
            <BarChart3 class="w-8 h-8 text-gold-500" />
          </div>
          <div class="text-3xl font-black text-white mb-2">Analytics</div>
          <div class="text-sm text-gray-400">Grafik & Analisis Lengkap</div>
        </div>
      </div>
    </div>
  </div>
</section>
