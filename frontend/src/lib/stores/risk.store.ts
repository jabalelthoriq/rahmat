import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface RiskAssessment {
  age: number;
  investmentHorizon: 'short' | 'medium' | 'long';
  riskTolerance: 'low' | 'medium' | 'high';
  investmentExperience: 'beginner' | 'intermediate' | 'advanced';
  monthlyIncome: number;
  currentSavings: number;
}

export const riskAssessment = writable<RiskAssessment | null>(null);

// Load from localStorage
if (browser) {
  const stored = localStorage.getItem('riskAssessment');
  if (stored) {
    riskAssessment.set(JSON.parse(stored));
  }
}

export function saveRiskAssessment(assessment: RiskAssessment) {
  riskAssessment.set(assessment);
  
  if (browser) {
    localStorage.setItem('riskAssessment', JSON.stringify(assessment));
  }
}

export function calculateRiskProfile(assessment: RiskAssessment): 'conservative' | 'moderate' | 'aggressive' {
  let score = 0;
  
  // Age factor
  if (assessment.age < 30) score += 2;
  else if (assessment.age < 50) score += 1;
  
  // Investment horizon
  if (assessment.investmentHorizon === 'long') score += 2;
  else if (assessment.investmentHorizon === 'medium') score += 1;
  
  // Risk tolerance
  if (assessment.riskTolerance === 'high') score += 2;
  else if (assessment.riskTolerance === 'medium') score += 1;
  
  // Experience
  if (assessment.investmentExperience === 'advanced') score += 2;
  else if (assessment.investmentExperience === 'intermediate') score += 1;
  
  // Determine profile
  if (score >= 6) return 'aggressive';
  if (score >= 3) return 'moderate';
  return 'conservative';
}
