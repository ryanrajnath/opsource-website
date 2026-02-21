export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 3, suffix: " Days", label: "Average Time to Placement" },
  { value: 1000, suffix: "+", label: "People Placed Annually" },
  { value: 87, suffix: "%", label: "Temp-to-Perm Conversion Rate" },
  { value: 10, suffix: "+", label: "Locations Across the Southeast" },
];
