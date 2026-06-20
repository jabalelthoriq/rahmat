import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface User {
  id: string;
  email: string;
  name: string;
  riskProfile?: 'conservative' | 'moderate' | 'aggressive';
}

export const user = writable<User | null>(null);
export const isAuthenticated = writable(false);

// Load user from localStorage on init
if (browser) {
  const stored = localStorage.getItem('user');
  if (stored) {
    const userData = JSON.parse(stored);
    user.set(userData);
    isAuthenticated.set(true);
  }
}

export function login(email: string, password: string): Promise<User> {
  return new Promise((resolve, reject) => {
    // Mock login - ganti dengan API call ke Go backend
    setTimeout(() => {
      if (email && password) {
        const mockUser: User = {
          id: '1',
          email,
          name: email.split('@')[0],
          riskProfile: undefined
        };
        
        user.set(mockUser);
        isAuthenticated.set(true);
        
        if (browser) {
          localStorage.setItem('user', JSON.stringify(mockUser));
        }
        
        resolve(mockUser);
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
}

export function register(name: string, email: string, password: string): Promise<User> {
  return new Promise((resolve, reject) => {
    // Mock register - ganti dengan API call ke Go backend
    setTimeout(() => {
      if (name && email && password) {
        const mockUser: User = {
          id: '1',
          email,
          name,
          riskProfile: undefined
        };
        
        user.set(mockUser);
        isAuthenticated.set(true);
        
        if (browser) {
          localStorage.setItem('user', JSON.stringify(mockUser));
        }
        
        resolve(mockUser);
      } else {
        reject(new Error('Invalid data'));
      }
    }, 1000);
  });
}

export function logout() {
  user.set(null);
  isAuthenticated.set(false);
  
  if (browser) {
    localStorage.removeItem('user');
  }
}

export function setRiskProfile(profile: 'conservative' | 'moderate' | 'aggressive') {
  user.update(u => {
    if (u) {
      const updated = { ...u, riskProfile: profile };
      if (browser) {
        localStorage.setItem('user', JSON.stringify(updated));
      }
      return updated;
    }
    return u;
  });
}
