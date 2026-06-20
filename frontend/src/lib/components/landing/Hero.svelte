<script lang="ts">
  import { TrendingUp, Shield, BarChart3, Sparkles, Zap, Globe } from 'lucide-svelte';
  
  // Particle data for background animation - Gold only
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2
  }));
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
  <!-- Animated Background Grid - Gold -->
  <div class="absolute inset-0 cyber-grid opacity-30"></div>
  
  <!-- Gradient Orbs - Gold Only -->
  <div class="absolute top-1/4 -left-1/4 w-96 h-96 bg-gold-500/15 rounded-full blur-[128px] animate-pulse-slow"></div>
  <div class="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-[128px] animate-pulse-slow" style="animation-delay: 1.5s"></div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-700/5 rounded-full blur-[128px] animate-pulse-slow" style="animation-delay: 3s"></div>
  
  <!-- Floating Particles - Gold -->
  <div class="absolute inset-0 particle-bg">
    {#each particles as particle}
      <div 
        class="glow-point"
        style="left: {particle.left}%; top: {particle.top}%; width: {particle.size}px; height: {particle.size}px; animation-duration: {particle.duration}s; animation-delay: {particle.delay}s;"
      ></div>
    {/each}
  </div>
  
  <!-- Scanning Line Effect - Gold -->
  <div class="absolute inset-0 scanline pointer-events-none"></div>
  
  <!-- Content -->
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="text-center">
      <!-- Futuristic Badge - Gold -->
      <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-futuristic mb-8 animate-float metallic-border">
        <div class="flex items-center justify-center w-3 h-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 animate-pulse shadow-gold">
          <Sparkles class="w-2 h-2 text-black" />
        </div>
        <span class="text-sm font-semibold text-gold-300 tracking-wide uppercase">Platform Investasi Emas Masa Depan</span>
      </div>
      
      <!-- Main Heading with Gold Neon Effect -->
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-tight">
        <span class="block text-white drop-shadow-2xl">Investasi Emas</span>
        <span class="block mt-4 gradient-text-metallic text-transparent bg-clip-text drop-shadow-lg glitch-text" data-text="Lebih Cerdas & Futuristik">
          Lebih Cerdas & Futuristik
        </span>
      </h1>
      
      <!-- Subheading -->
      <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed glass-premium inline-block px-8 py-4 rounded-2xl corner-accent">
        Dapatkan rekomendasi investasi emas Antam yang dipersonalisasi dengan AI. 
        <span class="text-gold-400 font-semibold text-shadow-gold">Pantau harga real-time</span> dan buat keputusan investasi yang tepat dengan teknologi terkini.
      </p>
      
      <!-- CTA Buttons - Gold Theme -->
      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
        <a 
          href="/auth/register"
          class="group relative px-10 py-5 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-black font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-gold-2xl neon-border neon-border-glow"
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
          class="group px-10 py-5 glass-premium text-gold-300 font-bold rounded-2xl border border-gold-500/30 hover:border-gold-500/60 transition-all duration-300 hover:scale-105 hover:bg-gold-500/10 hover:shadow-gold-lg flex items-center gap-3 metallic-border"
        >
          <Globe class="w-5 h-5 group-hover:rotate-12 transition-transform" />
          Pelajari Lebih Lanjut
        </a>
      </div>
      
      <!-- Enhanced Stats Cards - Gold Only -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div class="group glass-premium rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:border-gold-500/50 hover:shadow-gold-2xl neon-border corner-accent">
          <div class="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 border border-gold-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-gold-lg">
            <TrendingUp class="w-10 h-10 text-gold-400 group-hover:text-gold-300 transition-colors" />
          </div>
          <div class="text-4xl font-black gradient-text mb-3">Real-time</div>
          <div class="text-sm text-gray-400 font-medium">Harga Emas Live Update</div>
          <div class="mt-4 flex items-center justify-center gap-2">
            <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-gold"></div>
            <span class="text-xs text-green-400">Active</span>
          </div>
        </div>
        
        <div class="group glass-premium rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:border-gold-500/50 hover:shadow-gold-2xl neon-border corner-accent">
          <div class="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 border border-gold-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-gold-lg">
            <Shield class="w-10 h-10 text-gold-400 group-hover:text-gold-300 transition-colors" />
          </div>
          <div class="text-4xl font-black gradient-text-metallic mb-3">AI Powered</div>
          <div class="text-sm text-gray-400 font-medium">Rekomendasi Personal</div>
          <div class="mt-4 flex items-center justify-center gap-2">
            <div class="w-2 h-2 rounded-full bg-gold-500 animate-pulse shadow-gold"></div>
            <span class="text-xs text-gold-400">Smart</span>
          </div>
        </div>
        
        <div class="group glass-premium rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:border-gold-500/50 hover:shadow-gold-2xl neon-border corner-accent">
          <div class="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 border border-gold-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-gold-lg">
            <BarChart3 class="w-10 h-10 text-gold-400 group-hover:text-gold-300 transition-colors" />
          </div>
          <div class="text-4xl font-black gradient-text mb-3">Analytics</div>
          <div class="text-sm text-gray-400 font-medium">Grafik & Analisis Lengkap</div>
          <div class="mt-4 flex items-center justify-center gap-2">
            <div class="w-2 h-2 rounded-full bg-gold-500 animate-pulse shadow-gold"></div>
            <span class="text-xs text-gold-400">Pro</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Bottom Glow Line - Gold -->
  <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>
</section>
