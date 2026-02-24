export interface TeamMember {
  name: string;
  slug: string;
  title: string;
  image: string;
  tier: "owner" | "executive" | "coordinator" | "manager";
  bio?: string;
  location?: string;
  email?: string;
  linkedin?: string;
  specialties?: string[];
}

export const team: TeamMember[] = [
  {
    name: "William Renfrow",
    slug: "william-renfrow",
    title: "Owner",
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/_ARP1286-1920w.jpg",
    tier: "owner",
    bio: "William Renfrow co-founded OpSource Staffing with a vision to create a staffing company that genuinely puts people first. With over two decades of experience in the workforce solutions industry, William has built OpSource from the ground up into one of the Southeast's most trusted staffing partners. His hands-on leadership style and commitment to integrity have shaped the company's culture and guided its growth across multiple states. William believes that the right job can transform a person's life, and he's dedicated to making those connections happen every day.",
    location: "Spartanburg, SC",
    specialties: ["Strategic Leadership", "Business Development", "Workforce Solutions", "Client Relations"],
  },
  {
    name: "Jesse Sprinkle",
    slug: "jesse-sprinkle",
    title: "Owner",
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/_ARP1277-1920w.jpg",
    tier: "owner",
    bio: "Jesse Sprinkle co-founded OpSource Staffing with a passion for connecting hardworking people with meaningful employment. His entrepreneurial drive and deep understanding of the industrial and manufacturing sectors have been instrumental in building OpSource into a multi-state operation. Jesse is known for his relationship-first approach — taking the time to understand both client needs and candidate goals. Under his leadership, OpSource has maintained a reputation for reliability, transparency, and results that speak for themselves.",
    location: "Spartanburg, SC",
    specialties: ["Operations Strategy", "Industrial Staffing", "Partnership Development", "Growth Management"],
  },
  {
    name: "Andrew Franseen",
    slug: "andrew-franseen",
    title: "Chief Executive Officer",
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-43-1920w.jpg",
    tier: "executive",
    bio: "As Chief Executive Officer, Andrew Franseen leads OpSource Staffing's day-to-day operations and long-term strategic direction. Andrew brings a wealth of experience in staffing operations, team building, and client management. His leadership focuses on scaling OpSource's impact while maintaining the personal touch that sets the company apart. Andrew is passionate about developing talent — both within the OpSource team and among the thousands of workers placed each year. He drives a culture of accountability, innovation, and servant leadership across every branch.",
    location: "Spartanburg, SC",
    specialties: ["Executive Leadership", "Operational Excellence", "Team Development", "Strategic Planning"],
  },
  {
    name: "Dagan Rainey",
    slug: "dagan-rainey",
    title: "Director of Operations",
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-57-1920w.jpg",
    tier: "executive",
    bio: "Dagan Rainey serves as Director of Operations, overseeing the day-to-day performance of OpSource's branch network across the Southeast. With a sharp eye for process improvement and a commitment to operational excellence, Dagan ensures that every branch delivers consistent, high-quality service. He works closely with branch managers to optimize workflows, maintain compliance, and drive results. Dagan's hands-on management style and deep industry knowledge make him a trusted resource for both the internal team and OpSource's client partners.",
    location: "Spartanburg, SC",
    specialties: ["Operations Management", "Process Improvement", "Compliance", "Branch Performance"],
  },
  {
    name: "Will J. Sprinkle",
    slug: "will-j-sprinkle",
    title: "Director of Business",
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-47-1920w.jpg",
    tier: "executive",
    bio: "Will J. Sprinkle serves as Director of Business, leading OpSource's growth initiatives and client acquisition strategy. Will combines a natural talent for relationship building with a data-driven approach to market expansion. He identifies new opportunities across the Southeast, forging partnerships with manufacturers, distributors, and industrial employers who share OpSource's commitment to quality. Will's energy and vision have been key to opening new markets and strengthening OpSource's position as a go-to staffing partner in the region.",
    location: "Spartanburg, SC",
    specialties: ["Business Development", "Market Expansion", "Client Acquisition", "Strategic Partnerships"],
  },
  {
    name: "Lindsey Sebastian",
    slug: "lindsey-sebastian",
    title: "Operations Coordinator",
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-63-1920w.png",
    tier: "coordinator",
    bio: "Lindsey Sebastian keeps OpSource running smoothly as an Operations Coordinator. She manages critical administrative processes, coordinates between branches, and ensures that internal operations support the company's rapid growth. Lindsey is known for her meticulous attention to detail, organizational skills, and ability to juggle multiple priorities without missing a beat. Her behind-the-scenes work is essential to delivering the seamless experience that OpSource's clients and workers have come to expect.",
    location: "Spartanburg, SC",
    specialties: ["Operations Coordination", "Administrative Management", "Cross-Branch Support", "Process Organization"],
  },
  {
    name: "Mandy Goodwin",
    slug: "mandy-goodwin",
    title: "Operations Coordinator",
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-58-b972b5c2-1920w.jpg",
    tier: "coordinator",
    bio: "Mandy Goodwin is an Operations Coordinator who plays a vital role in keeping OpSource's operations running efficiently. From coordinating onboarding processes to supporting branch teams with day-to-day logistics, Mandy ensures nothing falls through the cracks. Her positive attitude, strong communication skills, and dedication to her colleagues make her a cornerstone of the OpSource support team. Mandy takes pride in helping both the internal team and external workers have the best possible experience.",
    location: "Spartanburg, SC",
    specialties: ["Onboarding Coordination", "Logistics Support", "Team Communication", "Worker Experience"],
  },
  {
    name: "Dawn Grigg",
    slug: "dawn-grigg",
    title: "Business Development Manager",
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-20-4ed3d7a8-1920w.png",
    tier: "manager",
    bio: "Dawn Grigg is a Business Development Manager focused on building and maintaining strong client relationships across OpSource's service territory. With deep roots in the staffing industry, Dawn excels at understanding employer needs and matching them with tailored workforce solutions. She's known for her consultative approach, follow-through, and genuine care for the businesses she serves. Dawn is a key driver of new business growth and client retention for OpSource.",
    location: "Upstate SC",
    specialties: ["Client Relations", "Business Development", "Workforce Consulting", "Account Management"],
  },
  {
    name: "Jonathan Ryan",
    slug: "jonathan-ryan",
    title: "Business Development Manager",
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-13-58fa3724-1920w.png",
    tier: "manager",
    bio: "Jonathan Ryan drives new business opportunities as a Business Development Manager at OpSource. His ability to connect with decision-makers and understand their unique workforce challenges has made him a valued partner to employers throughout the Southeast. Jonathan thrives on building relationships from the ground up and delivering staffing solutions that make a real difference. His proactive approach and industry expertise keep OpSource's client pipeline strong and growing.",
    location: "Southeast US",
    specialties: ["New Business Development", "Client Partnerships", "Manufacturing Staffing", "Market Strategy"],
  },
  {
    name: "Josh Threatt",
    slug: "josh-threatt",
    title: "Skilled Trades Branch Manager",
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-62-1920w.jpg",
    tier: "manager",
    bio: "Josh Threatt leads OpSource's Skilled Trades division, specializing in placing welders, electricians, pipefitters, and other skilled tradespeople with top employers. Josh brings firsthand knowledge of the trades industry, allowing him to understand both the technical requirements of each role and the career goals of skilled workers. Under his leadership, the Skilled Trades branch has become a go-to resource for employers seeking reliable, certified tradespeople across the region.",
    location: "Spartanburg, SC",
    specialties: ["Skilled Trades Staffing", "Welding & Fabrication", "Industrial Trades", "Workforce Placement"],
  },
  {
    name: "Trent Dover",
    slug: "trent-dover",
    title: "Direct Hire Branch Manager",
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-19-66a140c9-1920w.png",
    tier: "manager",
    bio: "Trent Dover manages OpSource's Direct Hire division, focusing on permanent placement solutions for employers seeking long-term talent. Trent takes a thorough, consultative approach to recruitment — carefully screening candidates to ensure the right fit for both the role and the company culture. His expertise in direct hire recruiting has helped dozens of companies build stronger teams with lasting hires. Trent is passionate about matching top talent with career-defining opportunities.",
    location: "Spartanburg, SC",
    specialties: ["Direct Hire Recruiting", "Permanent Placement", "Candidate Screening", "Culture Fit Assessment"],
  },
  {
    name: "Lisa Stafford",
    slug: "lisa-stafford",
    title: "Spartanburg & Gaffney Branch Manager",
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-26-9dfcb8c0-1920w.png",
    tier: "manager",
    bio: "Lisa Stafford manages the Spartanburg and Gaffney branches, serving as a trusted point of contact for employers and workers across the Upstate SC region. Lisa's strong community ties and deep understanding of the local labor market allow her to connect the right people with the right opportunities quickly and effectively. She leads her team with a service-first mindset, ensuring every client and candidate receives personalized attention and support.",
    location: "Spartanburg & Gaffney, SC",
    specialties: ["Branch Management", "Community Relations", "Local Market Expertise", "Team Leadership"],
  },
  {
    name: "Rachel Touchet",
    slug: "rachel-touchet",
    title: "Greenville Branch Manager",
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-15-d36bb0b3-1920w.png",
    tier: "manager",
    bio: "Rachel Touchet leads the Greenville branch, one of OpSource's key locations in the booming Upstate SC market. Rachel is known for her hands-on management style, strong recruiter instincts, and ability to build lasting relationships with both clients and workers. She oversees all aspects of branch operations — from recruitment and onboarding to client service and compliance. Rachel's dedication has made the Greenville branch a top performer in the OpSource network.",
    location: "Greenville, SC",
    specialties: ["Branch Operations", "Recruitment", "Client Service", "Upstate SC Market"],
  },
  {
    name: "Xavier Urgell",
    slug: "xavier-urgell",
    title: "Summerville Branch Manager",
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-24-8340d28f-1920w.png",
    tier: "manager",
    bio: "Xavier Urgell manages the Summerville branch, serving the greater Charleston and Lowcountry area. Xavier brings strong leadership skills and a genuine passion for helping people find meaningful work. He has built a well-organized, high-performing branch team that consistently delivers for clients in the manufacturing, distribution, and industrial sectors. Xavier's bilingual capabilities and cultural awareness further strengthen OpSource's ability to serve a diverse workforce in the region.",
    location: "Summerville, SC",
    specialties: ["Branch Management", "Lowcountry Market", "Bilingual Services", "Industrial Staffing"],
  },
  {
    name: "Tina Miller",
    slug: "tina-miller",
    title: "Area Manager - Market Development",
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-23-583bf330-1920w.png",
    tier: "manager",
    bio: "Tina Miller serves as Area Manager for Market Development, playing a critical role in expanding OpSource's footprint into new territories. Tina identifies high-potential markets, builds local business relationships, and lays the groundwork for new branch openings. Her combination of strategic thinking and grassroots business development has been instrumental in OpSource's geographic expansion. Tina is driven by the opportunity to bring OpSource's proven staffing model to new communities across the Southeast.",
    location: "Southeast US",
    specialties: ["Market Development", "Territory Expansion", "New Branch Setup", "Strategic Growth"],
  },
];

export const owners = team.filter((m) => m.tier === "owner");
export const executives = team.filter((m) => m.tier === "executive");
export const coordinators = team.filter((m) => m.tier === "coordinator");
export const managers = team.filter((m) => m.tier === "manager");

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
