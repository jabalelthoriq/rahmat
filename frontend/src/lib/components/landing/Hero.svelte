<script lang="ts">
  import { TrendingUp, Shield, BarChart3, Sparkles, Zap, Globe } from 'lucide-svelte';
  
  // Particle data for background animation
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2
  }));
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
  <!-- Animated Background Grid -->
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
  
  <!-- Gradient Orbs -->
  <div class="absolute top-1/4 -left-1/4 w-96 h-96 bg-gold-500/20 rounded-full blur-[128px] animate-pulse-slow"></div>
  <div class="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] animate-pulse-slow" style="animation-delay: 1.5s"></div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[128px] animate-pulse-slow" style="animation-delay: 3s"></div>
  
  <!-- Floating Particles -->
  <div class="absolute inset-0 particle-bg">
    {#each particles as particle}
      <div 
        class="glow-point"
        style="left: {particle.left}%; top: {particle.top}%; width: {particle.size}px; height: {particle.size}px; animation-duration: {particle.duration}s; animation-delay: {particle.delay}s;"
      ></div>
    {/each}
  </div>
  
  <!-- Scanning Line Effect -->
  <div class="absolute inset-0 scanline pointer-events-none"></div>
  
  <!-- Content -->
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="text-center">
      <!-- Futuristic Badge -->
      <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-futuristic mb-8 animate-float">
        <div class="flex items-center justify-center w-3 h-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 animate-pulse">
          <Sparkles class="w-2 h-2 text-black" />
        </div>
        <span class="text-sm font-semibold text-gold-300 tracking-wide uppercase">Platform Investasi Emas Masa Depan</span>
      </div>
      
      <!-- Main Heading with Neon Effect -->
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-tight">
        <span class="block text-white drop-shadow-2xl">Investasi Emas</span>
        <span class="block mt-4 gradient-text text-transparent bg-clip-text drop-shadow-lg">
          Lebih Cerdas & Futuristik
        </span>
      </h1>
      
      <!-- Subheading -->
      <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed glass-futuristic inline-block px-8 py-4 rounded-2xl">
        Dapatkan rekomendasi investasi emas Antam yang dipersonalisasi dengan AI. 
        <span class="text-gold-400 font-semibold">Pantau harga real-time</span> dan buat keputusan investasi yang tepat dengan teknologi terkini.
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
        <a 
          href="/auth/register"
          class="group relative px-10 py-5 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-black font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-gold-xl neon-border"
        >
          <span class="relative z-10 flex items-center gap-3">
            <Zap class="w-5 h-5" />
            Mulai Investasi Sekarang
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </a>
        
        <a 
          href="#features"
          class="group px-10 py-5 glass-futuristic text-gold-300 font-bold rounded-2xl border border-gold-500/30 hover:border-gold-500/60 transition-all duration-300 hover:scale-105 hover:bg-gold-500/10 flex items-center gap-3"
        >
          <Globe class="w-5 h-5 group-hover:rotate-12 transition-transform" />
          Pelajari Lebih Lanjut
        </a>
      </div>
      
      <!-- Enhanced Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div class="group glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:border-gold-500/50 hover:shadow-gold-lg neon-border">
          <div class="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 border border-gold-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-gold">
            <TrendingUp class="w-10 h-10 text-gold-400 group-hover:text-gold-300 transition-colors" />
          </div>
          <div class="text-4xl font-black gradient-text mb-3">Real-time</div>
          <div class="text-sm text-gray-400 font-medium">Harga Emas Live Update</div>
          <div class="mt-4 flex items-center justify-center gap-2">
            <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span class="text-xs text-green-400">Active</span>
          </div>
        </div>
        
        <div class="group glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-neon neon-border">
          <div class="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-neon">
            <Shield class="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
          </div>
          <div class="text-4xl font-black gradient-text-neon mb-3">AI Powered</div>
          <div class="text-sm text-gray-400 font-medium">Rekomendasi Personal</div>
          <div class="mt-4 flex items-center justify-center gap-2">
            <div class="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <span class="text-xs text-cyan-400">Smart</span>
          </div>
        </div>
        
        <div class="group glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:border-purple-500/50 hover:shadow-purple neon-border">
          <div class="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-purple">
            <BarChart3 class="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors" />
          </div>
          <div class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 animate-gradient mb-3">Analytics</div>
          <div class="text-sm text-gray-400 font-medium">Grafik & Analisis Lengkap</div>
          <div class="mt-4 flex items-center justify-center gap-2">
            <div class="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
            <span class="text-xs text-purple-400">Pro</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Bottom Glow Line -->
  <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>
</section>
