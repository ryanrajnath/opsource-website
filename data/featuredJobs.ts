export type JobType = "warehouse" | "manufacturing" | "skilled-trades";

export interface FeaturedJob {
  id: string;
  title: string;
  location: string;
  payRange: string;
  shift: string;
  type: JobType;
  urgent?: boolean;
}

export const featuredJobs: FeaturedJob[] = [
  // Warehouse
  { id: "1", title: "Forklift Operator", location: "Spartanburg, SC", payRange: "$17-20/hr", shift: "1st Shift", type: "warehouse", urgent: true },
  { id: "2", title: "Warehouse Associate", location: "Greenville, SC", payRange: "$15-17/hr", shift: "2nd Shift", type: "warehouse", urgent: true },
  { id: "3", title: "Shipping & Receiving Clerk", location: "Columbia, SC", payRange: "$16-19/hr", shift: "1st Shift", type: "warehouse" },
  // Manufacturing
  { id: "4", title: "Production Assembler", location: "Greenwood, SC", payRange: "$15-18/hr", shift: "3rd Shift", type: "manufacturing" },
  { id: "5", title: "Quality Inspector", location: "Anderson, SC", payRange: "$18-22/hr", shift: "1st Shift", type: "manufacturing" },
  { id: "6", title: "Machine Operator", location: "Greer, SC", payRange: "$16-20/hr", shift: "2nd Shift", type: "manufacturing", urgent: true },
  // Skilled Trades
  { id: "7", title: "CNC Machine Operator", location: "Anderson, SC", payRange: "$22-26/hr", shift: "1st Shift", type: "skilled-trades" },
  { id: "8", title: "Welder - MIG/TIG", location: "Spartanburg, SC", payRange: "$24-30/hr", shift: "1st Shift", type: "skilled-trades", urgent: true },
  { id: "9", title: "Maintenance Technician", location: "Columbia, SC", payRange: "$22-28/hr", shift: "1st Shift", type: "skilled-trades" },
];
