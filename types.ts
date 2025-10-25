
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

export interface HealthStat {
  label: string;
  value: string;
  unit: string;
  change: string;
  changeType: 'increase' | 'decrease';
}

export interface Goal {
    id: number;
    title: string;
    progress: number;
    target: number;
    unit: string;
}
