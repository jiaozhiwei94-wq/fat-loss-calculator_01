export type Gender = 'male' | 'female';

export interface UserInfo {
  name: string;
  gender: Gender;
  age: number;
  height: number; // cm
  weight: number; // kg
  activityMultiplier: number;
}

export interface FatLossGoal {
  currentBodyFat: number;
  targetBodyFat: number;
  planLevel: 'comfort' | 'standard' | 'strict' | 'manual';
  manualDays?: number;
}

export interface CalculationResult {
  bmi: number;
  bmr: number;
  tdee: number;
  leanBodyMass: number;
  targetWeight: number;
  weightToLose: number;
  totalCalorieDeficit: number;
  plannedDays: number;
  dailyDeficit: number;
  dailyCalorieIntake: number;
  evaluation: {
    intensity: string;
    impact: string;
    notes: string;
    motivation: string;
  };
}
