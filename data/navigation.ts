export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About OpSource", href: "/about" },
      { label: "Mission & Values", href: "/about#values" },
      { label: "Our Leadership", href: "/about#leadership" },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
    children: [
      { label: "All Locations", href: "/locations" },
      { label: "Anderson, SC", href: "/locations#anderson" },
      { label: "Arden, NC", href: "/locations#arden" },
      { label: "Charleston, SC", href: "/locations#charleston" },
      { label: "Columbia, SC", href: "/locations#columbia" },
      { label: "Gaffney, SC", href: "/locations#gaffney" },
      { label: "Greenwood, SC", href: "/locations#greenwood" },
      { label: "Greenville, SC", href: "/locations#greenville" },
      { label: "Kingsport, TN", href: "/locations#kingsport" },
      { label: "Spartanburg, SC", href: "/locations#spartanburg" },
      { label: "Summerville, SC", href: "/locations#summerville" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Traditional Staffing", href: "/services#traditional" },
      { label: "Skilled Trades", href: "/services#skilled-trades" },
      { label: "Direct Hire", href: "/services#direct-hire" },
      { label: "Payroll Services", href: "/services#payroll" },
    ],
  },
  { label: "Job Portal", href: "https://jobs.opsourcestaffing.com", external: true },
  { label: "Employee Portal", href: "https://mcigo.net/", external: true },
];
