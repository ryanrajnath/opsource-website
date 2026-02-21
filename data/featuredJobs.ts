export interface FeaturedJob {
  id: string;
  title: string;
  location: string;
  payRange: string;
  shift: string;
  urgent?: boolean;
}

export const featuredJobs: FeaturedJob[] = [
  { id: "1", title: "Forklift Operator", location: "Spartanburg, SC", payRange: "$17-20/hr", shift: "1st Shift", urgent: true },
  { id: "2", title: "Warehouse Associate", location: "Greenville, SC", payRange: "$15-17/hr", shift: "2nd Shift", urgent: true },
  { id: "3", title: "CNC Machine Operator", location: "Anderson, SC", payRange: "$22-26/hr", shift: "1st Shift" },
  { id: "4", title: "Welder - MIG/TIG", location: "Spartanburg, SC", payRange: "$24-30/hr", shift: "1st Shift", urgent: true },
  { id: "5", title: "Production Assembler", location: "Greenwood, SC", payRange: "$15-18/hr", shift: "3rd Shift" },
  { id: "6", title: "Maintenance Technician", location: "Columbia, SC", payRange: "$22-28/hr", shift: "1st Shift" },
];
