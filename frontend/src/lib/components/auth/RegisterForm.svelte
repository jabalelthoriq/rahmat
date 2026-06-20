<script lang="ts">
  import { User, Mail, Lock, Loader2 } from 'lucide-svelte';
  import { register } from '$lib/stores/auth.store';
  import { goto } from '$app/navigation';
  
  let name = '';
  let email = '';
  let password = '';
  let confirmPassword = '';
  let loading = false;
  let error = '';
  
  async function handleSubmit() {
    error = '';
    
    if (password !== confirmPassword) {
      error = 'Password tidak cocok';
      return;
    }
    
    if (password.length < 6) {
      error = 'Password minimal 6 karakter';
      return;
    }
    
    loading = true;
    
    try {
      await register(name, email, password);
      goto('/risk-assessment');
    } catch (err) {
      error = 'Gagal mendaftar. Silakan coba lagi.';
    } finally {
      loading = false;
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-dark-900 to-black px-4 py-12">
  <div class="max-w-md w-full">
    <!-- Header -->
    <div class="text-center mb-8">
      <h1 class="text-4xl font-black text-white mb-2">
        Buat <span class="text-gold-500">Akun</span>
      </h1>
      <p class="text-gray-400">Mulai perjalanan investasi emas Anda</p>
    </div>
    
    <!-- Form -->
    <form on:submit|preventDefault={handleSubmit} class="space-y-6">
      {#if error}
        <div class="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
          {error}
        </div>
      {/if}
      
      <!-- Name -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
          Nama Lengkap
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <User class="w-5 h-5 text-gray-500" />
          </div>
          <input
            id="name"
            type="text"
            bind:value={name}
            required
            class="w-full pl-12 pr-4 py-3 bg-dark-200 border border-gold-500/20 rounded-xl text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all"
            placeholder="John Doe"
          />
        </div>
      </div>
      
      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail class="w-5 h-5 text-gray-500" />
          </div>
          <input
            id="email"
            type="email"
            bind:value={email}
            required
            class="w-full pl-12 pr-4 py-3 bg-dark-200 border border-gold-500/20 rounded-xl text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all"
            placeholder="nama@email.com"
          />
        </div>
      </div>
      
      <!-- Password -->
      <div>
        <label for="password" class="block text-sm font-medium text-gray-300 mb-2">
          Password
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Lock class="w-5 h-5 text-gray-500" />
          </div>
          <input
            id="password"
            type="password"
            bind:value={password}
            required
            class="w-full pl-12 pr-4 py-3 bg-dark-200 border border-gold-500/20 rounded-xl text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all"
            placeholder="Minimal 6 karakter"
          />
        </div>
      </div>
      
      <!-- Confirm Password -->
      <div>
        <label for="confirmPassword" class="block text-sm font-medium text-gray-300 mb-2">
          Konfirmasi Password
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Lock class="w-5 h-5 text-gray-500" />
          </div>
          <input
            id="confirmPassword"
            type="password"
            bind:value={confirmPassword}
            required
            class="w-full pl-12 pr-4 py-3 bg-dark-200 border border-gold-500/20 rounded-xl text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all"
            placeholder="Ulangi password"
          />
        </div>
      </div>
      
      <!-- Submit -->
      <button
        type="submit"
        disabled={loading}
        class="w-full py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-black font-bold rounded-xl hover:scale-[1.02] hover:shadow-gold-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {#if loading}
          <Loader2 class="w-5 h-5 animate-spin" />
          <span>Memproses...</span>
        {:else}
          <span>Daftar</span>
        {/if}
      </button>
    </form>
    
    <!-- Footer -->
    <div class="mt-8 text-center">
      <p class="text-gray-400">
        Sudah punya akun?
        <a href="/auth/login" class="text-gold-500 font-semibold hover:text-gold-400 transition-colors">
          Masuk di sini
        </a>
      </p>
    </div>
  </div>
</div>
