<script lang="ts">
  import { UserPlus, ClipboardCheck, TrendingUp, Wallet } from 'lucide-svelte';
  
  const steps = [
    {
      icon: UserPlus,
      step: '01',
      title: 'Daftar Akun',
      description: 'Buat akun gratis dalam hitungan detik. Tidak perlu dokumen rumit.'
    },
    {
      icon: ClipboardCheck,
      step: '02',
      title: 'Isi Profil Risiko',
      description: 'Jawab beberapa pertanyaan sederhana untuk menentukan profil investasi Anda.'
    },
    {
      icon: TrendingUp,
      step: '03',
      title: 'Dapatkan Rekomendasi',
      description: 'Sistem kami akan memberikan rekomendasi investasi emas yang sesuai dengan profil Anda.'
    },
    {
      icon: Wallet,
      step: '04',
      title: 'Mulai Investasi',
      description: 'Ikuti rekomendasi dan pantau perkembangan investasi Anda secara real-time.'
    }
  ];
</script>

<section class="py-20 bg-dark-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-black text-white mb-4">
        Cara <span class="text-gold-500">Kerja</span>
      </h2>
      <p class="text-xl text-gray-400 max-w-2xl mx-auto">
        Mulai investasi emas dalam 4 langkah sederhana
      </p>
    </div>
    
    <!-- Steps -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each steps as step, index}
        <div class="relative">
          <!-- Connector Line (except last) -->
          {#if index < steps.length - 1}
            <div class="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gold-500/50 to-transparent -translate-x-1/2"></div>
          {/if}
          
          <div class="relative bg-gradient-to-br from-dark-200 to-dark-300 border border-gold-500/20 rounded-2xl p-8 text-center h-full">
            <!-- Step Number -->
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-gold-600 to-gold-500 text-black text-sm font-black rounded-full">
              {step.step}
            </div>
            
            <!-- Icon -->
            <div class="flex items-center justify-center w-20 h-20 mx-auto mb-6 mt-4 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 border-2 border-gold-500/30">
              <svelte:component this={step.icon} class="w-10 h-10 text-gold-500" />
            </div>
            
            <!-- Title -->
            <h3 class="text-xl font-bold text-white mb-3">
              {step.title}
            </h3>
            
            <!-- Description -->
            <p class="text-gray-400 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
