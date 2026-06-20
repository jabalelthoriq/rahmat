<script lang="ts">
  import Hero from '$lib/components/landing/Hero.svelte';
  import Features from '$lib/components/landing/Features.svelte';
  import HowItWorks from '$lib/components/landing/HowItWorks.svelte';
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
</script>

<svelte:head>
  <title>Gold Premium - Platform Investasi Emas Cerdas</title>
  <meta name="description" content="Dapatkan rekomendasi investasi emas Antam yang dipersonalisasi berdasarkan profil risiko Anda." />
</svelte:head>

<div class="min-h-screen bg-black">
  <Navbar />
  <Hero />
  <Features />
  <HowItWorks />
  <Footer />
</div>
