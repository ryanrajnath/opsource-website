export const SITE_NAME = "OpSource Staffing";
export const SITE_TAGLINE = "Your Source of Opportunity";
export const SITE_DESCRIPTION = "Connecting businesses with exceptional talent across the Southeast. Whether you're looking for your next career move or need reliable workforce solutions, OpSource is your trusted partner.";

export const EXTERNAL_URLS = {
  jobPortal: "http://jobs.opsourcestaffing.com",
  employeePortal: "http://mcigo.net/",
  directHire: "https://www.opsourcedirect.com",
  facebook: "https://facebook.com/OpSourceStaffing",
  linkedin: "https://linkedin.com/company/operational-resources-inc-opsource-",
  logo: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/New+OpSource+Logo+Full+Color-1965a756-1920w.png",
  badge: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/OpSource+Badge-32acb8af-1920w.png",
} as const;

export const ANIMATION = {
  staggerIncrement: 50,
  easeOutExpo: [0.16, 1, 0.3, 1] as const,
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.7,
  },
} as const;
