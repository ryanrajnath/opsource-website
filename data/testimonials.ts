export interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
  type: "employer" | "candidate";
}

export const testimonials: Testimonial[] = [
  {
    text: "My experience with OpSource has been wonderful! They've become an essential part of our business operations, helping us run smoothly and efficiently. Their team truly understands our needs.",
    author: "Sarah M.",
    role: "Operations Director",
    company: "Manufacturing Firm, Greenville SC",
    type: "employer",
  },
  {
    text: "It is very important to me that we hire the best candidates for open positions. OpSource never disappoints! They consistently deliver top-tier talent that fits our culture perfectly.",
    author: "David R.",
    role: "HR Manager",
    company: "Distribution Company, Spartanburg SC",
    type: "employer",
  },
  {
    text: "OpSource provides quality service and timely responses to any questions we may have on any given day. Their responsiveness sets them apart from every other staffing agency we've worked with.",
    author: "Jennifer K.",
    role: "Plant Manager",
    company: "Industrial Facility, Anderson SC",
    type: "employer",
  },
  {
    text: "We have been using OpSource to support our rapidly growing business staffing needs, and they have taken the time to get to know our overall business, becoming a true partner in our success.",
    author: "Michael T.",
    role: "CEO",
    company: "Growing Business, Columbia SC",
    type: "employer",
  },
  {
    text: "Year after year, OpSource is a top performer and is always willing to go above and beyond as a true business partner. Their dedication to quality staffing solutions is unmatched in the region.",
    author: "Lisa W.",
    role: "VP of Operations",
    company: "Corporate Client, Charleston SC",
    type: "employer",
  },
  {
    text: "I walked in on a Monday and was working by Wednesday. They treated me like a person, not just a number. Best staffing agency I've ever worked with.",
    author: "Marcus T.",
    role: "Forklift Operator",
    company: "Greenville, SC",
    type: "candidate",
  },
  {
    text: "OpSource helped me go from temp to permanent in 6 weeks. Now I have benefits and a career, not just a job. I tell everyone to come here.",
    author: "Jessica R.",
    role: "Warehouse Associate",
    company: "Spartanburg, SC",
    type: "candidate",
  },
  {
    text: "Other agencies would ghost me after placing me. OpSource checks in every week. When I had an issue with my schedule, they fixed it the same day.",
    author: "Carlos M.",
    role: "Welder",
    company: "Anderson, SC",
    type: "candidate",
  },
  {
    text: "Started as a temp assembler, now I'm a lead. OpSource saw my potential and fought for me to get hired on. Forever grateful.",
    author: "Tamika J.",
    role: "Production Lead",
    company: "Columbia, SC",
    type: "candidate",
  },
  {
    text: "The pay was better than what I found on Indeed, and I didn't have to wait 3 weeks for a callback. Applied Tuesday, started Friday.",
    author: "Robert H.",
    role: "Maintenance Tech",
    company: "Charleston, SC",
    type: "candidate",
  },
];
