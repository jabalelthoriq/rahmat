<script lang="ts">
  import { Mail, Lock, Loader2 } from 'lucide-svelte';
  import { login } from '$lib/stores/auth.store';
  import { goto } from '$app/navigation';
  
  let email = '';
  let password = '';
  let loading = false;
  let error = '';
  
  async function handleSubmit() {
    error = '';
    loading = true;
    
    try {
      await login(email, password);
      goto('/');
    } catch (err) {
      error = 'Email atau password salah';
    } finally {
      loading = false;
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-dark-900 to-black px-4">
  <div class="max-w-md w-full">
    <!-- Header -->
    <div class="text-center mb-8">
      <h1 class="text-4xl font-black text-white mb-2">
        Selamat <span class="text-gold-500">Datang</span>
      </h1>
      <p class="text-gray-400">Masuk ke akun Anda untuk melanjutkan</p>
    </div>
    
    <!-- Form -->
    <form on:submit|preventDefault={handleSubmit} class="space-y-6">
      {#if error}
        <div class="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
          {error}
        </div>
      {/if}
      
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
            placeholder="••••••••"
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
          <span>Masuk</span>
        {/if}
      </button>
    </form>
    
    <!-- Footer -->
    <div class="mt-8 text-center">
      <p class="text-gray-400">
        Belum punya akun?
        <a href="/auth/register" class="text-gold-500 font-semibold hover:text-gold-400 transition-colors">
          Daftar Sekarang
        </a>
      </p>
    </div>
  </div>
</div>
