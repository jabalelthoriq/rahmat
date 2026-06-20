<script lang="ts">
  import { Home, TrendingUp, History, Settings, LogOut } from 'lucide-svelte';
  import { goto } from '$app/navigation';
  import { logout } from '$lib/stores/auth.store';
  
  let expanded = $state(false);
  
  const menus = [
    { icon: Home, text: "Dashboard", path: "/dashboard", active: true },
    { icon: TrendingUp, text: "Rekomendasi Jual Beli", path: "/rekomendasi" },
    { icon: History, text: "History Rekomendasi", path: "/history" },
    { icon: Settings, text: "Pengaturan Akun", path: "/pengaturan" },
  ];
  
  function handleNavigation(path: string) {
    goto(path);
  }
  
  function handleLogout() {
    logout();
    goto('/landing');
  }
</script>

<aside
  class="sidebar-container"
  class:expanded
  onmouseenter={() => expanded = true}
  onmouseleave={() => expanded = false}
>
  <div class="sidebar-content">
    <!-- Logo Section -->
    <div class="logo-section">
      <div class="logo-wrapper">
        <div class="logo-icon">
          <span class="logo-letter">G</span>
        </div>
      </div>
      
      <div class="logo-text">
        <h1 class="logo-title">
          <span class="gold-text">Gold</span>
          <span class="white-text">Premium</span>
        </h1>
        <p class="logo-subtitle">Investasi Emas Masa Depan</p>
      </div>
    </div>

    <!-- Navigation Menu -->
    <nav class="nav-menu">
      {#each menus as item}
        <button
          class="nav-item"
          class:active={item.active}
          onclick={() => handleNavigation(item.path)}
        >
          <div class="nav-icon-wrapper">
            <svelte:component this={item.icon} size={22} />
          </div>
          
          <span class="nav-text">{item.text}</span>
          
          {#if item.active}
            <div class="active-indicator"></div>
          {/if}
        </button>
      {/each}
    </nav>

    <!-- Bottom Section -->
    <div class="bottom-section">
      <button
        class="logout-btn"
        onclick={handleLogout}
      >
        <div class="nav-icon-wrapper">
          <LogOut size={22} />
        </div>
        
        <span class="nav-text">Logout</span>
      </button>
    </div>
  </div>
</aside>

<style>
  .sidebar-container {
    position: fixed;
    left: 20px;
    top: 20px;
    height: calc(100vh - 40px);
    width: 90px;
    z-index: 9999;
    overflow: hidden;
    border-radius: 32px;
    background: linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%);
    border: 1px solid rgba(212, 175, 55, 0.2);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    box-shadow: 
      0 10px 40px rgba(0, 0, 0, 0.8),
      inset 0 0 60px rgba(212, 175, 55, 0.03),
      0 0 0 1px rgba(212, 175, 55, 0.1);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .sidebar-container:hover,
  .sidebar-container.expanded {
    width: 300px;
    border-color: rgba(212, 175, 55, 0.4);
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.9),
      inset 0 0 80px rgba(212, 175, 55, 0.05),
      0 0 30px rgba(212, 175, 55, 0.15),
      0 0 0 1px rgba(212, 175, 55, 0.2);
  }
  
  .sidebar-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 24px 16px;
  }
  
  /* Logo Section */
  .logo-section {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    padding: 0 8px;
  }
  
  .logo-wrapper {
    flex-shrink: 0;
    width: 72px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.05) 100%);
    border-radius: 20px;
    border: 1px solid rgba(212, 175, 55, 0.3);
    box-shadow: 
      0 8px 32px rgba(212, 175, 55, 0.2),
      inset 0 0 20px rgba(212, 175, 55, 0.1);
    position: relative;
    overflow: hidden;
  }
  
  .logo-wrapper::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, rgba(212, 175, 55, 0.2), transparent);
    animation: shimmer 3s linear infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .logo-icon {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #d4af37 0%, #f3e47a 50%, #c49b2d 100%);
    border-radius: 16px;
    font-size: 32px;
    font-weight: 900;
    color: #000;
    position: relative;
    z-index: 1;
    box-shadow: 0 4px 20px rgba(212, 175, 55, 0.4);
  }
  
  .logo-text {
    margin-left: 16px;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
  }
  
  .sidebar-container:hover .logo-text,
  .sidebar-container.expanded .logo-text {
    opacity: 1;
    transform: translateX(0);
  }
  
  .logo-title {
    font-size: 28px;
    font-weight: 900;
    letter-spacing: -1px;
    line-height: 1;
    margin-bottom: 4px;
  }
  
  .gold-text {
    background: linear-gradient(135deg, #f3e47a 0%, #d4af37 50%, #c49b2d 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .white-text {
    color: #fff;
  }
  
  .logo-subtitle {
    font-size: 9px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  
  /* Navigation Menu */
  .nav-menu {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .nav-item {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 56px;
    padding: 0 8px;
    border-radius: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: rgba(255, 255, 255, 0.6);
    overflow: visible;
  }
  
  .nav-item:hover {
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%);
    color: #fff;
    border: 1px solid rgba(212, 175, 55, 0.2);
  }
  
  .nav-item.active {
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.25) 0%, rgba(212, 175, 55, 0.15) 100%);
    color: #fff;
    border: 1px solid rgba(212, 175, 55, 0.4);
    box-shadow: 
      0 4px 20px rgba(212, 175, 55, 0.3),
      inset 0 0 20px rgba(212, 175, 55, 0.1);
  }
  
  .nav-item.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 60%;
    background: linear-gradient(180deg, #f3e47a, #d4af37, #c49b2d);
    border-radius: 0 4px 4px 0;
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.6);
  }
  
  .nav-icon-wrapper {
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    min-width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    transition: all 0.3s ease;
  }
  
  .nav-item:hover .nav-icon-wrapper {
    color: #d4af37;
    transform: scale(1.1);
  }
  
  .nav-item.active .nav-icon-wrapper {
    color: #f3e47a;
  }
  
  .nav-text {
    margin-left: 12px;
    font-size: 15px;
    font-weight: 600;
    white-space: nowrap;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: inherit;
  }
  
  .sidebar-container:hover .nav-text,
  .sidebar-container.expanded .nav-text {
    opacity: 1;
    transform: translateX(0);
  }
  
  .active-indicator {
    position: absolute;
    right: 16px;
    width: 8px;
    height: 8px;
    background: #d4af37;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.8), 0 0 20px rgba(212, 175, 55, 0.4);
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s ease;
  }
  
  .sidebar-container:hover .active-indicator,
  .sidebar-container.expanded .active-indicator {
    opacity: 1;
    transform: scale(1);
  }
  
  /* Bottom Section */
  .bottom-section {
    padding-top: 16px;
    border-top: 1px solid rgba(212, 175, 55, 0.15);
  }
  
  .logout-btn {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 56px;
    padding: 0 8px;
    border-radius: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: rgba(239, 68, 68, 0.7);
  }
  
  .logout-btn:hover {
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
    box-shadow: 0 4px 20px rgba(239, 68, 68, 0.2);
  }
  
  .logout-btn .nav-icon-wrapper {
    color: inherit;
  }
  
  .logout-btn:hover .nav-icon-wrapper {
    color: #ef4444;
    transform: scale(1.1);
  }
  
  .logout-btn .nav-text {
    color: inherit;
  }
</style>
