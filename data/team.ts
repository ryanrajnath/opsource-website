export interface TeamMember {
  name: string;
  slug: string;
  title: { en: string; es: string };
  image: string;
  tier: "owner" | "executive" | "coordinator" | "manager";
  bio?: { en: string; es: string };
  location?: string;
  email?: string;
  linkedin?: string;
  specialties?: { en: string; es: string }[];
}

export const team: TeamMember[] = [
  {
    name: "William Renfrow",
    slug: "william-renfrow",
    title: { en: "Owner", es: "Propietario" },
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/_ARP1286-1920w.jpg",
    tier: "owner",
    bio: {
      en: "William Renfrow co-founded OpSource Staffing with a vision to create a staffing company that genuinely puts people first. With over two decades of experience in the workforce solutions industry, William has built OpSource from the ground up into one of the Southeast's most trusted staffing partners. His hands-on leadership style and commitment to integrity have shaped the company's culture and guided its growth across multiple states. William believes that the right job can transform a person's life, and he's dedicated to making those connections happen every day.",
      es: "William Renfrow cofundó OpSource Staffing con la visión de crear una empresa de personal que realmente pone a las personas primero. Con más de dos décadas de experiencia en la industria de soluciones laborales, William ha construido OpSource desde cero hasta convertirla en una de las empresas de personal más confiables del Sureste. Su estilo de liderazgo práctico y su compromiso con la integridad han moldeado la cultura de la empresa y guiado su crecimiento en múltiples estados. William cree que el trabajo correcto puede transformar la vida de una persona, y se dedica a hacer esas conexiones todos los días.",
    },
    location: "Spartanburg, SC",
    specialties: [
      { en: "Strategic Leadership", es: "Liderazgo Estratégico" },
      { en: "Business Development", es: "Desarrollo de Negocios" },
      { en: "Workforce Solutions", es: "Soluciones Laborales" },
      { en: "Client Relations", es: "Relaciones con Clientes" },
    ],
  },
  {
    name: "Jesse Sprinkle",
    slug: "jesse-sprinkle",
    title: { en: "Owner", es: "Propietario" },
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/_ARP1277-1920w.jpg",
    tier: "owner",
    bio: {
      en: "Jesse Sprinkle co-founded OpSource Staffing with a passion for connecting hardworking people with meaningful employment. His entrepreneurial drive and deep understanding of the industrial and manufacturing sectors have been instrumental in building OpSource into a multi-state operation. Jesse is known for his relationship-first approach — taking the time to understand both client needs and candidate goals. Under his leadership, OpSource has maintained a reputation for reliability, transparency, and results that speak for themselves.",
      es: "Jesse Sprinkle cofundó OpSource Staffing con una pasión por conectar personas trabajadoras con empleos significativos. Su impulso emprendedor y profundo conocimiento de los sectores industrial y manufacturero han sido fundamentales para construir OpSource como una operación multi-estatal. Jesse es conocido por su enfoque de relaciones primero — tomándose el tiempo para entender tanto las necesidades del cliente como las metas del candidato. Bajo su liderazgo, OpSource ha mantenido una reputación de confiabilidad, transparencia y resultados que hablan por sí mismos.",
    },
    location: "Spartanburg, SC",
    specialties: [
      { en: "Operations Strategy", es: "Estrategia de Operaciones" },
      { en: "Industrial Staffing", es: "Personal Industrial" },
      { en: "Partnership Development", es: "Desarrollo de Alianzas" },
      { en: "Growth Management", es: "Gestión de Crecimiento" },
    ],
  },
  {
    name: "Andrew Franseen",
    slug: "andrew-franseen",
    title: { en: "Chief Executive Officer", es: "Director Ejecutivo" },
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-43-1920w.jpg",
    tier: "executive",
    bio: {
      en: "As Chief Executive Officer, Andrew Franseen leads OpSource Staffing's day-to-day operations and long-term strategic direction. Andrew brings a wealth of experience in staffing operations, team building, and client management. His leadership focuses on scaling OpSource's impact while maintaining the personal touch that sets the company apart. Andrew is passionate about developing talent — both within the OpSource team and among the thousands of workers placed each year. He drives a culture of accountability, innovation, and servant leadership across every branch.",
      es: "Como Director Ejecutivo, Andrew Franseen lidera las operaciones diarias y la dirección estratégica a largo plazo de OpSource Staffing. Andrew aporta una amplia experiencia en operaciones de personal, formación de equipos y gestión de clientes. Su liderazgo se enfoca en escalar el impacto de OpSource mientras mantiene el toque personal que distingue a la empresa. Andrew es apasionado por desarrollar talento — tanto dentro del equipo de OpSource como entre los miles de trabajadores colocados cada año. Impulsa una cultura de responsabilidad, innovación y liderazgo de servicio en cada sucursal.",
    },
    location: "Spartanburg, SC",
    specialties: [
      { en: "Executive Leadership", es: "Liderazgo Ejecutivo" },
      { en: "Operational Excellence", es: "Excelencia Operativa" },
      { en: "Team Development", es: "Desarrollo de Equipos" },
      { en: "Strategic Planning", es: "Planificación Estratégica" },
    ],
  },
  {
    name: "Dagan Rainey",
    slug: "dagan-rainey",
    title: { en: "Director of Operations", es: "Director de Operaciones" },
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-57-1920w.jpg",
    tier: "executive",
    bio: {
      en: "Dagan Rainey serves as Director of Operations, overseeing the day-to-day performance of OpSource's branch network across the Southeast. With a sharp eye for process improvement and a commitment to operational excellence, Dagan ensures that every branch delivers consistent, high-quality service. He works closely with branch managers to optimize workflows, maintain compliance, and drive results. Dagan's hands-on management style and deep industry knowledge make him a trusted resource for both the internal team and OpSource's client partners.",
      es: "Dagan Rainey se desempeña como Director de Operaciones, supervisando el rendimiento diario de la red de sucursales de OpSource en el Sureste. Con un ojo agudo para la mejora de procesos y un compromiso con la excelencia operativa, Dagan asegura que cada sucursal entregue un servicio consistente y de alta calidad. Trabaja estrechamente con los gerentes de sucursal para optimizar flujos de trabajo, mantener el cumplimiento y generar resultados. Su estilo de gestión práctico y profundo conocimiento de la industria lo convierten en un recurso confiable tanto para el equipo interno como para los socios clientes de OpSource.",
    },
    location: "Spartanburg, SC",
    specialties: [
      { en: "Operations Management", es: "Gestión de Operaciones" },
      { en: "Process Improvement", es: "Mejora de Procesos" },
      { en: "Compliance", es: "Cumplimiento" },
      { en: "Branch Performance", es: "Rendimiento de Sucursales" },
    ],
  },
  {
    name: "Will J. Sprinkle",
    slug: "will-j-sprinkle",
    title: { en: "Director of Business", es: "Director de Negocios" },
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-47-1920w.jpg",
    tier: "executive",
    bio: {
      en: "Will J. Sprinkle serves as Director of Business, leading OpSource's growth initiatives and client acquisition strategy. Will combines a natural talent for relationship building with a data-driven approach to market expansion. He identifies new opportunities across the Southeast, forging partnerships with manufacturers, distributors, and industrial employers who share OpSource's commitment to quality. Will's energy and vision have been key to opening new markets and strengthening OpSource's position as a go-to staffing partner in the region.",
      es: "Will J. Sprinkle se desempeña como Director de Negocios, liderando las iniciativas de crecimiento y la estrategia de adquisición de clientes de OpSource. Will combina un talento natural para construir relaciones con un enfoque basado en datos para la expansión del mercado. Identifica nuevas oportunidades en el Sureste, forjando alianzas con fabricantes, distribuidores y empleadores industriales que comparten el compromiso de OpSource con la calidad. La energía y visión de Will han sido clave para abrir nuevos mercados y fortalecer la posición de OpSource como socio de personal preferido en la región.",
    },
    location: "Spartanburg, SC",
    specialties: [
      { en: "Business Development", es: "Desarrollo de Negocios" },
      { en: "Market Expansion", es: "Expansión de Mercado" },
      { en: "Client Acquisition", es: "Adquisición de Clientes" },
      { en: "Strategic Partnerships", es: "Alianzas Estratégicas" },
    ],
  },
  {
    name: "Lindsey Sebastian",
    slug: "lindsey-sebastian",
    title: { en: "Operations Coordinator", es: "Coordinadora de Operaciones" },
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-63-1920w.png",
    tier: "coordinator",
    bio: {
      en: "Lindsey Sebastian keeps OpSource running smoothly as an Operations Coordinator. She manages critical administrative processes, coordinates between branches, and ensures that internal operations support the company's rapid growth. Lindsey is known for her meticulous attention to detail, organizational skills, and ability to juggle multiple priorities without missing a beat. Her behind-the-scenes work is essential to delivering the seamless experience that OpSource's clients and workers have come to expect.",
      es: "Lindsey Sebastian mantiene a OpSource funcionando sin problemas como Coordinadora de Operaciones. Gestiona procesos administrativos críticos, coordina entre sucursales y asegura que las operaciones internas apoyen el rápido crecimiento de la empresa. Lindsey es conocida por su meticulosa atención al detalle, habilidades organizativas y capacidad para manejar múltiples prioridades sin perder el ritmo. Su trabajo tras bambalinas es esencial para entregar la experiencia fluida que los clientes y trabajadores de OpSource esperan.",
    },
    location: "Spartanburg, SC",
    specialties: [
      { en: "Operations Coordination", es: "Coordinación de Operaciones" },
      { en: "Administrative Management", es: "Gestión Administrativa" },
      { en: "Cross-Branch Support", es: "Apoyo Inter-Sucursales" },
      { en: "Process Organization", es: "Organización de Procesos" },
    ],
  },
  {
    name: "Mandy Goodwin",
    slug: "mandy-goodwin",
    title: { en: "Operations Coordinator", es: "Coordinadora de Operaciones" },
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-58-b972b5c2-1920w.jpg",
    tier: "coordinator",
    bio: {
      en: "Mandy Goodwin is an Operations Coordinator who plays a vital role in keeping OpSource's operations running efficiently. From coordinating onboarding processes to supporting branch teams with day-to-day logistics, Mandy ensures nothing falls through the cracks. Her positive attitude, strong communication skills, and dedication to her colleagues make her a cornerstone of the OpSource support team. Mandy takes pride in helping both the internal team and external workers have the best possible experience.",
      es: "Mandy Goodwin es una Coordinadora de Operaciones que juega un papel vital en mantener las operaciones de OpSource funcionando eficientemente. Desde coordinar procesos de incorporación hasta apoyar a los equipos de sucursal con la logística diaria, Mandy asegura que nada se escape. Su actitud positiva, fuertes habilidades de comunicación y dedicación a sus colegas la convierten en un pilar del equipo de apoyo de OpSource. Mandy se enorgullece de ayudar tanto al equipo interno como a los trabajadores externos a tener la mejor experiencia posible.",
    },
    location: "Spartanburg, SC",
    specialties: [
      { en: "Onboarding Coordination", es: "Coordinación de Incorporación" },
      { en: "Logistics Support", es: "Apoyo Logístico" },
      { en: "Team Communication", es: "Comunicación de Equipo" },
      { en: "Worker Experience", es: "Experiencia del Trabajador" },
    ],
  },
  {
    name: "Dawn Grigg",
    slug: "dawn-grigg",
    title: { en: "Business Development Manager", es: "Gerente de Desarrollo de Negocios" },
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-20-4ed3d7a8-1920w.png",
    tier: "manager",
    bio: {
      en: "Dawn Grigg is a Business Development Manager focused on building and maintaining strong client relationships across OpSource's service territory. With deep roots in the staffing industry, Dawn excels at understanding employer needs and matching them with tailored workforce solutions. She's known for her consultative approach, follow-through, and genuine care for the businesses she serves. Dawn is a key driver of new business growth and client retention for OpSource.",
      es: "Dawn Grigg es Gerente de Desarrollo de Negocios enfocada en construir y mantener relaciones sólidas con clientes en todo el territorio de servicio de OpSource. Con raíces profundas en la industria de personal, Dawn destaca en entender las necesidades de los empleadores y emparejarlas con soluciones laborales personalizadas. Es conocida por su enfoque consultivo, seguimiento y genuino interés por las empresas que atiende. Dawn es un motor clave del crecimiento de nuevos negocios y retención de clientes para OpSource.",
    },
    location: "Upstate SC",
    specialties: [
      { en: "Client Relations", es: "Relaciones con Clientes" },
      { en: "Business Development", es: "Desarrollo de Negocios" },
      { en: "Workforce Consulting", es: "Consultoría Laboral" },
      { en: "Account Management", es: "Gestión de Cuentas" },
    ],
  },
  {
    name: "Jonathan Ryan",
    slug: "jonathan-ryan",
    title: { en: "Business Development Manager", es: "Gerente de Desarrollo de Negocios" },
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-13-58fa3724-1920w.png",
    tier: "manager",
    bio: {
      en: "Jonathan Ryan drives new business opportunities as a Business Development Manager at OpSource. His ability to connect with decision-makers and understand their unique workforce challenges has made him a valued partner to employers throughout the Southeast. Jonathan thrives on building relationships from the ground up and delivering staffing solutions that make a real difference. His proactive approach and industry expertise keep OpSource's client pipeline strong and growing.",
      es: "Jonathan Ryan impulsa nuevas oportunidades de negocio como Gerente de Desarrollo de Negocios en OpSource. Su capacidad para conectar con tomadores de decisiones y entender sus desafíos laborales únicos lo ha convertido en un socio valioso para empleadores en todo el Sureste. Jonathan prospera construyendo relaciones desde cero y entregando soluciones de personal que marcan una diferencia real. Su enfoque proactivo y experiencia en la industria mantienen el flujo de clientes de OpSource fuerte y en crecimiento.",
    },
    location: "Southeast US",
    specialties: [
      { en: "New Business Development", es: "Desarrollo de Nuevos Negocios" },
      { en: "Client Partnerships", es: "Alianzas con Clientes" },
      { en: "Manufacturing Staffing", es: "Personal de Manufactura" },
      { en: "Market Strategy", es: "Estrategia de Mercado" },
    ],
  },
  {
    name: "Josh Threatt",
    slug: "josh-threatt",
    title: { en: "Skilled Trades Branch Manager", es: "Gerente de Sucursal de Oficios Especializados" },
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-62-1920w.jpg",
    tier: "manager",
    bio: {
      en: "Josh Threatt leads OpSource's Skilled Trades division, specializing in placing welders, electricians, pipefitters, and other skilled tradespeople with top employers. Josh brings firsthand knowledge of the trades industry, allowing him to understand both the technical requirements of each role and the career goals of skilled workers. Under his leadership, the Skilled Trades branch has become a go-to resource for employers seeking reliable, certified tradespeople across the region.",
      es: "Josh Threatt lidera la división de Oficios Especializados de OpSource, especializándose en colocar soldadores, electricistas, plomeros y otros profesionales de oficios con los mejores empleadores. Josh aporta conocimiento de primera mano de la industria de oficios, lo que le permite entender tanto los requisitos técnicos de cada puesto como las metas profesionales de los trabajadores especializados. Bajo su liderazgo, la sucursal de Oficios Especializados se ha convertido en un recurso preferido para empleadores que buscan profesionales confiables y certificados en la región.",
    },
    location: "Spartanburg, SC",
    specialties: [
      { en: "Skilled Trades Staffing", es: "Personal de Oficios Especializados" },
      { en: "Welding & Fabrication", es: "Soldadura y Fabricación" },
      { en: "Industrial Trades", es: "Oficios Industriales" },
      { en: "Workforce Placement", es: "Colocación de Personal" },
    ],
  },
  {
    name: "Trent Dover",
    slug: "trent-dover",
    title: { en: "Direct Hire Branch Manager", es: "Gerente de Sucursal de Contratación Directa" },
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-19-66a140c9-1920w.png",
    tier: "manager",
    bio: {
      en: "Trent Dover manages OpSource's Direct Hire division, focusing on permanent placement solutions for employers seeking long-term talent. Trent takes a thorough, consultative approach to recruitment — carefully screening candidates to ensure the right fit for both the role and the company culture. His expertise in direct hire recruiting has helped dozens of companies build stronger teams with lasting hires. Trent is passionate about matching top talent with career-defining opportunities.",
      es: "Trent Dover gestiona la división de Contratación Directa de OpSource, enfocándose en soluciones de colocación permanente para empleadores que buscan talento a largo plazo. Trent adopta un enfoque exhaustivo y consultivo para el reclutamiento — evaluando cuidadosamente a los candidatos para asegurar el ajuste correcto tanto para el puesto como para la cultura de la empresa. Su experiencia en reclutamiento de contratación directa ha ayudado a docenas de empresas a construir equipos más fuertes con contrataciones duraderas. Trent es apasionado por emparejar el mejor talento con oportunidades que definen carreras.",
    },
    location: "Spartanburg, SC",
    specialties: [
      { en: "Direct Hire Recruiting", es: "Reclutamiento de Contratación Directa" },
      { en: "Permanent Placement", es: "Colocación Permanente" },
      { en: "Candidate Screening", es: "Evaluación de Candidatos" },
      { en: "Culture Fit Assessment", es: "Evaluación de Ajuste Cultural" },
    ],
  },
  {
    name: "Lisa Stafford",
    slug: "lisa-stafford",
    title: { en: "Spartanburg & Gaffney Branch Manager", es: "Gerente de Sucursal Spartanburg y Gaffney" },
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-26-9dfcb8c0-1920w.png",
    tier: "manager",
    bio: {
      en: "Lisa Stafford manages the Spartanburg and Gaffney branches, serving as a trusted point of contact for employers and workers across the Upstate SC region. Lisa's strong community ties and deep understanding of the local labor market allow her to connect the right people with the right opportunities quickly and effectively. She leads her team with a service-first mindset, ensuring every client and candidate receives personalized attention and support.",
      es: "Lisa Stafford gestiona las sucursales de Spartanburg y Gaffney, sirviendo como punto de contacto confiable para empleadores y trabajadores en la región de Upstate SC. Los fuertes lazos comunitarios de Lisa y su profundo conocimiento del mercado laboral local le permiten conectar a las personas correctas con las oportunidades correctas de manera rápida y efectiva. Lidera su equipo con una mentalidad de servicio primero, asegurando que cada cliente y candidato reciba atención y apoyo personalizado.",
    },
    location: "Spartanburg & Gaffney, SC",
    specialties: [
      { en: "Branch Management", es: "Gestión de Sucursal" },
      { en: "Community Relations", es: "Relaciones Comunitarias" },
      { en: "Local Market Expertise", es: "Experiencia en Mercado Local" },
      { en: "Team Leadership", es: "Liderazgo de Equipo" },
    ],
  },
  {
    name: "Rachel Touchet",
    slug: "rachel-touchet",
    title: { en: "Greenville Branch Manager", es: "Gerente de Sucursal Greenville" },
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-15-d36bb0b3-1920w.png",
    tier: "manager",
    bio: {
      en: "Rachel Touchet leads the Greenville branch, one of OpSource's key locations in the booming Upstate SC market. Rachel is known for her hands-on management style, strong recruiter instincts, and ability to build lasting relationships with both clients and workers. She oversees all aspects of branch operations — from recruitment and onboarding to client service and compliance. Rachel's dedication has made the Greenville branch a top performer in the OpSource network.",
      es: "Rachel Touchet lidera la sucursal de Greenville, una de las ubicaciones clave de OpSource en el próspero mercado de Upstate SC. Rachel es conocida por su estilo de gestión práctico, fuertes instintos de reclutadora y capacidad para construir relaciones duraderas tanto con clientes como con trabajadores. Supervisa todos los aspectos de las operaciones de la sucursal — desde reclutamiento e incorporación hasta servicio al cliente y cumplimiento. La dedicación de Rachel ha convertido a la sucursal de Greenville en una de las de mejor rendimiento en la red de OpSource.",
    },
    location: "Greenville, SC",
    specialties: [
      { en: "Branch Operations", es: "Operaciones de Sucursal" },
      { en: "Recruitment", es: "Reclutamiento" },
      { en: "Client Service", es: "Servicio al Cliente" },
      { en: "Upstate SC Market", es: "Mercado Upstate SC" },
    ],
  },
  {
    name: "Xavier Urgell",
    slug: "xavier-urgell",
    title: { en: "Summerville Branch Manager", es: "Gerente de Sucursal Summerville" },
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-24-8340d28f-1920w.png",
    tier: "manager",
    bio: {
      en: "Xavier Urgell manages the Summerville branch, serving the greater Charleston and Lowcountry area. Xavier brings strong leadership skills and a genuine passion for helping people find meaningful work. He has built a well-organized, high-performing branch team that consistently delivers for clients in the manufacturing, distribution, and industrial sectors. Xavier's bilingual capabilities and cultural awareness further strengthen OpSource's ability to serve a diverse workforce in the region.",
      es: "Xavier Urgell gestiona la sucursal de Summerville, atendiendo el área metropolitana de Charleston y Lowcountry. Xavier aporta fuertes habilidades de liderazgo y una genuina pasión por ayudar a las personas a encontrar trabajo significativo. Ha construido un equipo de sucursal bien organizado y de alto rendimiento que entrega consistentemente para clientes en los sectores de manufactura, distribución e industria. Las capacidades bilingües y conciencia cultural de Xavier fortalecen aún más la capacidad de OpSource para servir a una fuerza laboral diversa en la región.",
    },
    location: "Summerville, SC",
    specialties: [
      { en: "Branch Management", es: "Gestión de Sucursal" },
      { en: "Lowcountry Market", es: "Mercado Lowcountry" },
      { en: "Bilingual Services", es: "Servicios Bilingües" },
      { en: "Industrial Staffing", es: "Personal Industrial" },
    ],
  },
  {
    name: "Tina Miller",
    slug: "tina-miller",
    title: { en: "Area Manager - Market Development", es: "Gerente de Área - Desarrollo de Mercado" },
    image: "https://lirp.cdn-website.com/89d3ed85/dms3rep/multi/opt/ARP_OPSHeadshots2025-23-583bf330-1920w.png",
    tier: "manager",
    bio: {
      en: "Tina Miller serves as Area Manager for Market Development, playing a critical role in expanding OpSource's footprint into new territories. Tina identifies high-potential markets, builds local business relationships, and lays the groundwork for new branch openings. Her combination of strategic thinking and grassroots business development has been instrumental in OpSource's geographic expansion. Tina is driven by the opportunity to bring OpSource's proven staffing model to new communities across the Southeast.",
      es: "Tina Miller se desempeña como Gerente de Área para Desarrollo de Mercado, jugando un papel crítico en la expansión de la presencia de OpSource en nuevos territorios. Tina identifica mercados de alto potencial, construye relaciones comerciales locales y sienta las bases para la apertura de nuevas sucursales. Su combinación de pensamiento estratégico y desarrollo de negocios desde las bases ha sido instrumental en la expansión geográfica de OpSource. Tina es motivada por la oportunidad de llevar el modelo probado de personal de OpSource a nuevas comunidades en el Sureste.",
    },
    location: "Southeast US",
    specialties: [
      { en: "Market Development", es: "Desarrollo de Mercado" },
      { en: "Territory Expansion", es: "Expansión de Territorio" },
      { en: "New Branch Setup", es: "Apertura de Nuevas Sucursales" },
      { en: "Strategic Growth", es: "Crecimiento Estratégico" },
    ],
  },
];

export const owners = team.filter((m) => m.tier === "owner");
export const executives = team.filter((m) => m.tier === "executive");
export const coordinators = team.filter((m) => m.tier === "coordinator");
export const managers = team.filter((m) => m.tier === "manager");

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
