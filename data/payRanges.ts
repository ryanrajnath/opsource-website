export interface PayRange {
  role: string;
  min: number;
  max: number;
  suffix: string; // "/hr"
}

export const payRanges: PayRange[] = [
  { role: "Warehouse & General Labor", min: 14, max: 18, suffix: "/hr" },
  { role: "Forklift Operators", min: 16, max: 20, suffix: "/hr" },
  { role: "Manufacturing & Assembly", min: 15, max: 22, suffix: "/hr" },
  { role: "Welders & Fabricators", min: 22, max: 30, suffix: "/hr" },
  { role: "CNC & Machine Operators", min: 18, max: 28, suffix: "/hr" },
  { role: "Maintenance Technicians", min: 20, max: 32, suffix: "/hr" },
];
