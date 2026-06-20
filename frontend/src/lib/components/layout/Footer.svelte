<script lang="ts">
  import { Mail, Phone, MapPin } from 'lucide-svelte';
</script>

<footer class="bg-black border-t border-gold-500/20 py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Brand -->
      <div class="md:col-span-2">
        <div class="flex items-center gap-2 mb-4">
          <div class="w-10 h-10 bg-gradient-to-br from-gold-600 to-gold-500 rounded-xl flex items-center justify-center">
            <span class="text-black font-black text-xl">G</span>
          </div>
          <span class="text-xl font-black text-white">
            Gold<span class="text-gold-500">Premium</span>
          </span>
        </div>
        <p class="text-gray-400 mb-4 max-w-md">
          Platform investasi emas cerdas dengan rekomendasi personal berdasarkan profil risiko Anda.
        </p>
      </div>
      
      <!-- Links -->
      <div>
        <h3 class="text-white font-bold mb-4">Navigasi</h3>
        <ul class="space-y-2">
          <li><a href="/" class="text-gray-400 hover:text-gold-500 transition-colors">Dashboard</a></li>
          <li><a href="/riwayat" class="text-gray-400 hover:text-gold-500 transition-colors">Riwayat Harga</a></li>
          <li><a href="/kalkulator" class="text-gray-400 hover:text-gold-500 transition-colors">Kalkulator</a></li>
        </ul>
      </div>
      
      <!-- Contact -->
      <div>
        <h3 class="text-white font-bold mb-4">Kontak</h3>
        <ul class="space-y-3">
          <li class="flex items-center gap-2 text-gray-400">
            <Mail class="w-4 h-4 text-gold-500" />
            <span>info@goldpremium.com</span>
          </li>
          <li class="flex items-center gap-2 text-gray-400">
            <Phone class="w-4 h-4 text-gold-500" />
            <span>+62 812 3456 7890</span>
          </li>
          <li class="flex items-center gap-2 text-gray-400">
            <MapPin class="w-4 h-4 text-gold-500" />
            <span>Jakarta, Indonesia</span>
          </li>
        </ul>
      </div>
    </div>
    
    <!-- Bottom -->
    <div class="mt-12 pt-8 border-t border-gold-500/20 text-center">
      <p class="text-gray-500 text-sm">
        © 2026 Gold Premium. All rights reserved.
      </p>
    </div>
  </div>
</footer>
