<script lang="ts">
  import { goto } from '$app/navigation';
  import { saveRiskAssessment, calculateRiskProfile } from '$lib/stores/risk.store';
  import { setRiskProfile } from '$lib/stores/auth.store';
  import { ArrowRight, Loader2 } from 'lucide-svelte';
  
  let step = 1;
  let loading = false;
  
  let age = 25;
  let investmentHorizon: 'short' | 'medium' | 'long' = 'medium';
  let riskTolerance: 'low' | 'medium' | 'high' = 'medium';
  let investmentExperience: 'beginner' | 'intermediate' | 'advanced' = 'beginner';
  let monthlyIncome = 5000000;
  let currentSavings = 10000000;
  
  async function handleSubmit() {
    loading = true;
    
    const assessment = {
      age,
      investmentHorizon,
      riskTolerance,
      investmentExperience,
      monthlyIncome,
      currentSavings
    };
    
    saveRiskAssessment(assessment);
    
    const profile = calculateRiskProfile(assessment);
    setRiskProfile(profile);
    
    setTimeout(() => {
      goto('/');
    }, 1000);
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-black via-dark-900 to-black py-12 px-4">
  <div class="max-w-3xl mx-auto">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-black text-white mb-4">
        Profil <span class="text-gold-500">Risiko</span>
      </h1>
      <p class="text-xl text-gray-400">
        Bantu kami memahami profil investasi Anda untuk rekomendasi yang lebih personal
      </p>
    </div>
    
    <!-- Progress Bar -->
    <div class="mb-8">
      <div class="flex justify-between text-sm text-gray-400 mb-2">
        <span>Langkah {step} dari 3</span>
        <span>{Math.round((step / 3) * 100)}%</span>
      </div>
      <div class="w-full bg-dark-300 rounded-full h-2">
        <div 
          class="bg-gradient-to-r from-gold-600 to-gold-500 h-2 rounded-full transition-all duration-500"
          style="width: {(step / 3) * 100}%"
        ></div>
      </div>
    </div>
    
    <!-- Form -->
    <div class="bg-gradient-to-br from-dark-200 to-dark-300 border border-gold-500/20 rounded-2xl p-8">
      {#if step === 1}
        <!-- Step 1: Basic Info -->
        <div class="space-y-6">
          <div>
            <label class="block text-lg font-bold text-white mb-4">
              Berapa usia Anda?
            </label>
            <input
              type="number"
              bind:value={age}
              min="17"
              max="100"
              class="w-full px-4 py-3 bg-dark-300 border border-gold-500/20 rounded-xl text-white focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
            />
          </div>
          
          <div>
            <label class="block text-lg font-bold text-white mb-4">
              Berapa pendapatan bulanan Anda?
            </label>
            <input
              type="number"
              bind:value={monthlyIncome}
              min="0"
              step="500000"
              class="w-full px-4 py-3 bg-dark-300 border border-gold-500/20 rounded-xl text-white focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
            />
          </div>
          
          <button
            on:click={() => step = 2}
            class="w-full py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-black font-bold rounded-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            <span>Lanjut</span>
            <ArrowRight class="w-5 h-5" />
          </button>
        </div>
        
      {:else if step === 2}
        <!-- Step 2: Investment Preferences -->
        <div class="space-y-6">
          <div>
            <label class="block text-lg font-bold text-white mb-4">
              Berapa lama Anda berencana investasi?
            </label>
            <div class="grid grid-cols-3 gap-3">
              <button
                on:click={() => investmentHorizon = 'short'}
                class="p-4 rounded-xl border-2 transition-all {investmentHorizon === 'short' ? 'border-gold-500 bg-gold-500/10' : 'border-gold-500/20 hover:border-gold-500/40'}"
              >
                <div class="text-white font-bold mb-1">&lt; 1 tahun</div>
                <div class="text-xs text-gray-400">Jangka Pendek</div>
              </button>
              <button
                on:click={() => investmentHorizon = 'medium'}
                class="p-4 rounded-xl border-2 transition-all {investmentHorizon === 'medium' ? 'border-gold-500 bg-gold-500/10' : 'border-gold-500/20 hover:border-gold-500/40'}"
              >
                <div class="text-white font-bold mb-1">1-5 tahun</div>
                <div class="text-xs text-gray-400">Jangka Menengah</div>
              </button>
              <button
                on:click={() => investmentHorizon = 'long'}
                class="p-4 rounded-xl border-2 transition-all {investmentHorizon === 'long' ? 'border-gold-500 bg-gold-500/10' : 'border-gold-500/20 hover:border-gold-500/40'}"
              >
                <div class="text-white font-bold mb-1">&gt; 5 tahun</div>
                <div class="text-xs text-gray-400">Jangka Panjang</div>
              </button>
            </div>
          </div>
          
          <div>
            <label class="block text-lg font-bold text-white mb-4">
              Bagaimana toleransi risiko Anda?
            </label>
            <div class="grid grid-cols-3 gap-3">
              <button
                on:click={() => riskTolerance = 'low'}
                class="p-4 rounded-xl border-2 transition-all {riskTolerance === 'low' ? 'border-gold-500 bg-gold-500/10' : 'border-gold-500/20 hover:border-gold-500/40'}"
              >
                <div class="text-white font-bold mb-1">Rendah</div>
                <div class="text-xs text-gray-400">Main Aman</div>
              </button>
              <button
                on:click={() => riskTolerance = 'medium'}
                class="p-4 rounded-xl border-2 transition-all {riskTolerance === 'medium' ? 'border-gold-500 bg-gold-500/10' : 'border-gold-500/20 hover:border-gold-500/40'}"
              >
                <div class="text-white font-bold mb-1">Sedang</div>
                <div class="text-xs text-gray-400">Balanced</div>
              </button>
              <button
                on:click={() => riskTolerance = 'high'}
                class="p-4 rounded-xl border-2 transition-all {riskTolerance === 'high' ? 'border-gold-500 bg-gold-500/10' : 'border-gold-500/20 hover:border-gold-500/40'}"
              >
                <div class="text-white font-bold mb-1">Tinggi</div>
                <div class="text-xs text-gray-400">Aggressive</div>
              </button>
            </div>
          </div>
          
          <div class="flex gap-3">
            <button
              on:click={() => step = 1}
              class="flex-1 py-3 border-2 border-gold-500/30 text-gold-400 font-bold rounded-xl hover:border-gold-500 hover:bg-gold-500/10 transition-all"
            >
              Kembali
            </button>
            <button
              on:click={() => step = 3}
              class="flex-1 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-black font-bold rounded-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Lanjut</span>
              <ArrowRight class="w-5 h-5" />
            </button>
          </div>
        </div>
        
      {:else if step === 3}
        <!-- Step 3: Experience -->
        <div class="space-y-6">
          <div>
            <label class="block text-lg font-bold text-white mb-4">
              Berapa pengalaman investasi Anda?
            </label>
            <div class="grid grid-cols-3 gap-3">
              <button
                on:click={() => investmentExperience = 'beginner'}
                class="p-4 rounded-xl border-2 transition-all {investmentExperience === 'beginner' ? 'border-gold-500 bg-gold-500/10' : 'border-gold-500/20 hover:border-gold-500/40'}"
              >
                <div class="text-white font-bold mb-1">Pemula</div>
                <div class="text-xs text-gray-400">&lt; 1 tahun</div>
              </button>
              <button
                on:click={() => investmentExperience = 'intermediate'}
                class="p-4 rounded-xl border-2 transition-all {investmentExperience === 'intermediate' ? 'border-gold-500 bg-gold-500/10' : 'border-gold-500/20 hover:border-gold-500/40'}"
              >
                <div class="text-white font-bold mb-1">Menengah</div>
                <div class="text-xs text-gray-400">1-3 tahun</div>
              </button>
              <button
                on:click={() => investmentExperience = 'advanced'}
                class="p-4 rounded-xl border-2 transition-all {investmentExperience === 'advanced' ? 'border-gold-500 bg-gold-500/10' : 'border-gold-500/20 hover:border-gold-500/40'}"
              >
                <div class="text-white font-bold mb-1">Berpengalaman</div>
                <div class="text-xs text-gray-400">&gt; 3 tahun</div>
              </button>
            </div>
          </div>
          
          <div>
            <label class="block text-lg font-bold text-white mb-4">
              Berapa tabungan Anda saat ini?
            </label>
            <input
              type="number"
              bind:value={currentSavings}
              min="0"
              step="1000000"
              class="w-full px-4 py-3 bg-dark-300 border border-gold-500/20 rounded-xl text-white focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
            />
          </div>
          
          <div class="flex gap-3">
            <button
              on:click={() => step = 2}
              class="flex-1 py-3 border-2 border-gold-500/30 text-gold-400 font-bold rounded-xl hover:border-gold-500 hover:bg-gold-500/10 transition-all"
            >
              Kembali
            </button>
            <button
              on:click={handleSubmit}
              disabled={loading}
              class="flex-1 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-black font-bold rounded-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {#if loading}
                <Loader2 class="w-5 h-5 animate-spin" />
                <span>Memproses...</span>
              {:else}
                <span>Selesai</span>
              {/if}
            </button>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
