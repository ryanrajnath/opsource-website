export interface TeamMember {
  name: string;
  title: string;
  image: string;
  tier: "owner" | "executive" | "coordinator" | "manager";
}

export const team: TeamMember[] = [
  { name: "William Renfrow", title: "Owner", image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/_ARP1286-1920w.jpg", tier: "owner" },
  { name: "Jesse Sprinkle", title: "Owner", image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/_ARP1277-1920w.jpg", tier: "owner" },
  { name: "Andrew Franseen", title: "Chief Executive Officer", image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-43-1920w.jpg", tier: "executive" },
  { name: "Dagan Rainey", title: "Director of Operations", image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-57-1920w.jpg", tier: "executive" },
  { name: "Will J. Sprinkle", title: "Director of Business", image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-47-1920w.jpg", tier: "executive" },
  { name: "Lindsey Sebastian", title: "Operations Coordinator", image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-63-1920w.png", tier: "coordinator" },
  { name: "Mandy Goodwin", title: "Operations Coordinator", image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-58-b972b5c2-1920w.jpg", tier: "coordinator" },
  { name: "Dawn Grigg", title: "Business Development Manager", image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-20-4ed3d7a8-1920w.png", tier: "manager" },
  { name: "Jonathan Ryan", title: "Business Development Manager", image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-13-58fa3724-1920w.png", tier: "manager" },
  { name: "Josh Threatt", title: "Skilled Trades Branch Manager", image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-62-1920w.jpg", tier: "manager" },
  { name: "Trent Dover", title: "Direct Hire Branch Manager", image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-19-66a140c9-1920w.png", tier: "manager" },
  { name: "Lisa Stafford", title: "Spartanburg & Gaffney Branch Manager", image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-26-9dfcb8c0-1920w.png", tier: "manager" },
  { name: "Rachel Touchet", title: "Greenville Branch Manager", image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-15-d36bb0b3-1920w.png", tier: "manager" },
  { name: "Xavier Urgell", title: "Summerville Branch Manager", image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-24-8340d28f-1920w.png", tier: "manager" },
  { name: "Tina Miller", title: "Area Manager - Market Development", image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-23-583bf330-1920w.png", tier: "manager" },
];

export const owners = team.filter((m) => m.tier === "owner");
export const executives = team.filter((m) => m.tier === "executive");
export const coordinators = team.filter((m) => m.tier === "coordinator");
export const managers = team.filter((m) => m.tier === "manager");
