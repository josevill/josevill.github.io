export const site = {
  name: "José Manuel Viloria Martín",
  shortName: "José Viloria",
  title: "José Manuel Viloria Martín",
  description:
    "Simple site for a guy who breaks and rebuilds code at will, yelling at clouds and proud homelab owner.",
  author: "José Manuel Viloria Martín",
  email: "josevill.linuxusr@gmail.com",
  profileImage: "/img/profile.jpg",
  location: "Ireland",
  role: "Technical Services - Partners at MongoDB",
};

export const navigation = [
  { href: "#interests", label: "Interests" },
  { href: "#whoami", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
];

/** Site-level links shown after the resume TOC (not in-page anchors). */
export const siteLinks = [{ href: "/blog/", label: "Blog" }];

export const blogNavigation = [
  { href: "/", label: "Home" },
  { href: "/blog/", label: "Blog" },
  { href: "/blog/tags/", label: "Tags" },
  { href: "/rss.xml", label: "RSS" },
];

export const socialLinks = [
  { href: "https://www.linkedin.com/in/kbono", label: "LinkedIn" },
  { href: "https://github.com/josevill", label: "GitHub" },
  { href: "https://twitter.com/anotherspanish", label: "Twitter" },
  { href: "https://unsplash.com/@josekbono", label: "Unsplash" },
  { href: "https://cursor.com/@jose", label: "Cursor" },
];

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  /** Intro prose before the achievement list (optional). */
  summary?: string;
  achievements: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Technical Services - Partners",
    company: "MongoDB",
    period: "April 2025 - Present",
    summary: `Built internal tooling so anyone can sync local case notes to our Confluence and Jira instances, keeping customer knowledge, escalations, and architectural decisions shared and easy to find.`,
    achievements: [
      "Validated and published 3 internal partner integrations with AWS, showing how to extend MongoDB Atlas with Kinesis/Data Firehose, Glue ETL, and AgentCore (vectors and vector indexes managed by Atlas) without high cost, downtime, or maintenance overhead.",
      "Delivered internal and partner-facing tooling and architectures across several units to cut case-reproduction effort and give teams a way to implement common scenarios.",
      "Handled partner-specific cases where keeping the full context of what the customer is doing has been paramount to succeed.",
      "Presented to the global Technical Services audience and directors on leveraging LLMs for rapid prototyping and shipping MVPs fast with tools like Claude Code, Cursor, or OpenCode with OpenRouter.",
      "Handled escalations with hyperscalers like AWS or Azure for P1 incidents, plus proactive engagements to prevent end-user impact.",
      "Drove internal tooling and enablement for LLM usage, mostly on the agents side — architecting agentic systems.",
    ],
  },
  {
    title: "Technical Account Manager",
    company: "Amazon Web Services",
    period: "September 2022 - September 2024",
    achievements: [
      "Provided architectural guidance for complex distributed systems spanning AWS, on-prem, and Azure.",
      "Ran Well-Architected reviews that improved security posture and resilience and cut failed requests by 80%.",
      "Brought serverless (Lambda/Step Functions/API Gateway) spend down to 30% of its previous total by deprecating heavy ECS workloads and modernizing to event-driven architectures on Lambda and Step Functions.",
      "Designed billing-analysis automation on CUR + Athena + QuickSight (Cloud Intelligence Dashboards) as the single source of truth for workload and business-critical metrics, feeding reports to the C-suite and the Cloud Center of Excellence (CCoE).",
      "Prevented several large-scale incidents that would have affected thousands of customers through proactive architectural assessments and code reviews with service teams.",
      "Led cross-team initiatives to improve AWS services based on customer feedback and technical requirements.",
      "Rewrote the entire CI/CD on AWS workshop (https://catalog.workshops.aws/cicdonaws/en-US/contributors) — delivered via Account teams or by customers themselves — moving it from legacy frontend and container tech to Vite/Rollup and CDK-based container builds and deployment.",
      "Served as DRI (Designated Responsible Individual) for AWS DeepRacer in Ireland: vehicle maintenance, workshop infrastructure, and new features to track, showcase, and manage per-racer metrics.",
    ],
  },
  {
    title: "Cloud Support Engineer II - Deployments Domain",
    company: "AWS, Ireland",
    period: "July 2021 - September 2022",
    achievements: [
      "Designed and implemented multi-account, cross-region architectures for enterprise customers during weeks-long engagements.",
      "Became global AWS CDK point of contact, designing, developing and delivering internal training programs (150+ attendees).",
      "Led the effort to cut internal security incident response time from 10 minutes to 30 seconds on average through automation built on several internal tools and ML models.",
      "Created self-service troubleshooting mechanisms to improve customer experience through Systems Manager and public-facing workshops.",
    ],
  },
  {
    title: "Technical Leader",
    company: "Gelt, Spain",
    period: "October 2020 - July 2021",
    summary: `Managed hiring and built a team of 4 engineers (1 full stack, 1 backend, 1 iOS and 1 Android engineers), led several cloud-native application development and infrastructure initiatives:`,
    achievements: [
      "Architected and implemented ML-based systems using Python and Golang to OCR supermarket receipts and extract their data.",
      "Designed end-to-end CICD pipelines to deploy against AWS ECS, AWS Elastic Beanstalk, Amazon Lambda and Amazon EC2.",
      "Led technical architecture decisions and implementation strategies reporting directly to CTO and CEO.",
      "Managed infrastructure costs through optimisation efforts and security compliance against standards requirements to the organisation.",
    ],
  },
  {
    title: "Software Engineer",
    company: "IECISA, Spain (NPR21 Consultant)",
    period: "June 2019 - October 2020",
    achievements: [
      "Led a project using the Wacom STU-430 & STU-530 tablets to gather biometric footprint data for digitally signing public-sector PDF documents; owned the orchestration, infrastructure design, and extension of an ECM platform leveraging several AWS services, and mentored two developers into the project.",
      "Architected and developed a hybrid application (Web and Mobile) for the Madrid state government enabling officers to sign documents from anywhere during the pandemic, reusing the previously implemented solution — now fully online and modular.",
    ],
  },
  {
    title: "FullStack Developer",
    company: "Worten, Spain/Portugal",
    period: "September 2017 - June 2019",
    summary: `Modernized legacy apps and implemented cloud integrations:`,
    achievements: [
      "Maintained legacy Perl, io.js 0.10, and Node 4 codebases and migrated all projects to Node 6, implementing new features for both Worten.es and Worten.pt while leveraging AWS services for the new infrastructure.",
      "Designed and implemented internal APIs in Golang integrating Worten Iberia with third parties such as Amazon Marketplaces, eBay, and Salesforce Marketing Cloud. The entire integration layer was written in Node.js or Golang.",
      "Assisted the DevOps team with Rundeck setup for automated tasks leveraging AWS ECS.",
    ],
  },
  {
    title: "Developer",
    company: "Oru_code (Venezuela)",
    period: "October 2015 - May 2017",
    summary: `As a freelance agency, I developed new solutions to fit each customer's needs and target market. Most of the development was in PHP on top of existing platforms like Yii2, PrestaShop, and WordPress + WooCommerce, so projects could start from a boilerplate and ship faster.`,
    achievements: [
      "Developed web applications using industry-adopted frameworks like WordPress and Yii2.",
      "Managed and maintained the infrastructure hosting customer applications.",
    ],
  },
  {
    title: "Video Game Development - Freelance",
    company: "Self",
    period: "January 2005 - Present",
    summary: `Started in 2005 running private game servers to learn Windows and Linux sysadmin and low-level Java and C++ coding, for games like World of Warcraft, Lineage II, and Ragnarök Online. It never really stopped: players I met years ago still come back to me to host, modify, and maintain their own private servers, including custom features that pair server-side modifications with client-side reverse engineering to work around client limitations.`,
    achievements: [],
  },
];

export const education = [
  {
    institution: "University of Carabobo",
    degree: "Computer Science",
    description:
      "Studied core CS fundamentals before leaving the programme as the situation in Venezuela made continuing untenable.",
    period: "July 2011 - Apr 2014",
  },
  {
    institution: "University of Carabobo",
    degree: "Telecommunications Engineering",
    description:
      "Started in telecoms, then switched into Computer Science once software became the clearer path.",
    period: "Jan 2011 - June 2011",
  },
];

export const about = {
  firstName: "José Manuel",
  lastName: "Viloria Martín",
  lead: `People normally call me Joe, as it seems easier than "Jose" for most of the folks I interact with.
  I've been into programming since I have memory — I learned English through video games (Hello, Final Fantasy).
  These days I am heavily invested in **systems design, architecture, and helping people out**.
  **Right now** I lead tough & interesting customer scenarios for my team along with Partner Integrations at MongoDB, based in **Ireland**.
  Obviously with a sprinkle of development for internal tooling and automation, thanks to the current overlords (**LLMs**).`,
};

export const interests = [
  `Besides software development & yelling at clouds, I enjoy most of my free time walking the streets of my current town, taking pictures (a hobby I should take back up), going to pubs and drinking a good pint of Guinness.`,
  `I'm really into foreign languages: I am polishing my somewhat broken Portuguese 🇵🇹 and learning Irish 🇮🇪.`,
  `Used to play Ultimate Frisbee and practice the piano, and I still blast **Power Metal** (Rhapsody, Sonata Arctica, Stratovarius, Visions of Atlantis, Helloween) — or, when the mood strikes, trance (Armin Van Buuren, Dimitri Vegas, Mark Sixma, Super8 & Tab).`,
  `Last but not least: **Tetris** 👾 — I used to play it a bunch on Nintendo Switch. Fight me!`,
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Cloud & platforms",
    items: ["AWS", "MongoDB Atlas", "Azure", "Homelab / self-hosting"],
  },
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "SQL", "Bash"],
  },
  {
    category: "Infrastructure & delivery",
    items: ["AWS CDK", "ECS", "Lambda", "Step Functions", "CI/CD", "Docker"],
  },
  {
    category: "Architecture & practices",
    items: [
      "Well-Architected reviews",
      "Event-driven systems",
      "Partner integrations",
      "Observability",
      "Cost optimisation",
    ],
  },
  {
    category: "Tooling",
    items: [
      "Cursor",
      "Claude Code",
      "Git",
      "Prometheus",
      "Athena",
      "QuickSight",
    ],
  },
];
