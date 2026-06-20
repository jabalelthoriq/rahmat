<script lang="ts">
  import { isAuthenticated, user, logout } from '$lib/stores/auth.store';
  import { LogOut, User } from 'lucide-svelte';
  import { goto } from '$app/navigation';
  
  function handleLogout() {
    logout();
    goto('/landing');
  }
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gold-500/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2">
        <div class="w-10 h-10 bg-gradient-to-br from-gold-600 to-gold-500 rounded-xl flex items-center justify-center">
          <span class="text-black font-black text-xl">G</span>
        </div>
        <span class="text-xl font-black text-white">
          Gold<span class="text-gold-500">Premium</span>
        </span>
      </a>
      
      <!-- Menu -->
      <div class="hidden md:flex items-center gap-8">
        <a href="/" class="text-gray-300 hover:text-gold-500 transition-colors font-medium">
          Dashboard
        </a>
        <a href="/riwayat" class="text-gray-300 hover:text-gold-500 transition-colors font-medium">
          Riwayat
        </a>
        <a href="/kalkulator" class="text-gray-300 hover:text-gold-500 transition-colors font-medium">
          Kalkulator
        </a>
      </div>
      
      <!-- User Menu -->
      <div class="flex items-center gap-4">
        {#if $isAuthenticated}
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-2 px-4 py-2 bg-dark-200 rounded-xl border border-gold-500/20">
              <User class="w-5 h-5 text-gold-500" />
              <span class="text-white font-medium text-sm">{$user?.name}</span>
            </div>
            <button
              on:click={handleLogout}
              class="p-2 text-gray-400 hover:text-gold-500 transition-colors"
              title="Logout"
            >
              <LogOut class="w-5 h-5" />
            </button>
          </div>
        {:else}
          <a
            href="/auth/login"
            class="px-6 py-2 border-2 border-gold-500/30 text-gold-400 font-bold rounded-xl hover:border-gold-500 hover:bg-gold-500/10 transition-all"
          >
            Masuk
          </a>
        {/if}
      </div>
    </div>
  </div>
</nav>
