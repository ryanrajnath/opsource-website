export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  ctaText: string;
  ctaUrl: string;
}

export const services: Service[] = [
  {
    id: "traditional",
    title: "Traditional Staffing",
    shortDescription: "Flexible temporary and temp-to-hire staffing solutions to meet your fluctuating workforce demands.",
    longDescription: "Our traditional staffing solutions provide the flexibility your business needs. Whether you require temporary workers for seasonal peaks, temp-to-hire arrangements to evaluate candidates, or on-site management, we deliver qualified professionals ready to contribute from day one.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    ctaText: "View Open Positions",
    ctaUrl: "http://jobs.opsourcestaffing.com",
  },
  {
    id: "skilled-trades",
    title: "Skilled Trades",
    shortDescription: "Qualified tradespeople for manufacturing, construction, and industrial positions across the region.",
    longDescription: "Our skilled trades division specializes in placing qualified tradespeople across manufacturing, construction, and industrial sectors. From welders and electricians to CNC operators and maintenance technicians, we connect experienced professionals with employers who value their expertise.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    ctaText: "Browse Trades Jobs",
    ctaUrl: "http://jobs.opsourcestaffing.com",
  },
  {
    id: "direct-hire",
    title: "Direct Hire",
    shortDescription: "Full-cycle recruitment to find permanent team members who perfectly match your company culture and needs.",
    longDescription: "When you need to find the perfect permanent addition to your team, our direct hire division delivers. We handle the full recruitment cycle — from sourcing and screening to interviewing and offer negotiation — ensuring every candidate aligns with your company culture and long-term goals.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    ctaText: "Learn More",
    ctaUrl: "https://www.opsourcedirect.com",
  },
  {
    id: "payroll",
    title: "Payroll Services",
    shortDescription: "Streamlined payroll processing so you can focus on what matters — growing your business.",
    longDescription: "Let us handle the complexity of payroll so you can focus on growing your business. Our payroll services include processing, tax filing, compliance management, and reporting — all streamlined to save you time and reduce administrative burden.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    ctaText: "Get Started",
    ctaUrl: "/contact",
  },
];
