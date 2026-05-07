export type AIChatCard = {
  type: "category" | "service" | "details";
  tag?: string;
  title: string;
  desc?: string;
  bullets?: string[];
};

export type AIChatMessage = {
  role: "user" | "ai";
  text?: string;
  cards?: AIChatCard[];
  options?: string[];
};

export type MatrixService = {
  title: string;
  desc?: string;
  bullets: string[];
};

const matrices: Record<string, MatrixService[]> = {
  "Connectivity Services": [
    {
      title: "Network Services",
      bullets: [
        "Network Design",
        "Network Architecture",
        "Network Infrastructure Surveys",
        "Network Assessments",
        "Network Audits & Health checks",
        "Network Testing & Verification",
        "Network Performance Optimisation",
        "Network Device Configuration",
        "Network Troubleshooting",
        "Hardware & Software Deployment",
      ],
    },
    {
      title: "Network Infrastructure",
      bullets: [
        "Network Infrastructure as a Service (aaS)",
        "Local Area Networks (LAN)",
        "Wide Area Networks (WAN)",
        "Metropolitan Area Networks (MAN)",
        "Virtual Private Networks (VPN)",
        "Campus Area Networks (CAN)",
        "SD-WAN (Software Defined WAN)",
        "Network Routing",
        "Network Switching",
        "Network Firewalls",
        "Network Racking & Stacking",
      ],
    },
    {
      title: "Wireless Infrastructure",
      bullets: [
        "Wireless Surveys & Design (Ekahau)",
        "Wireless Architecture",
        "Wireless Performance Optimisation",
        "Wireless Troubleshooting",
        "802.11 Wi-Fi 4 to Wi-Fi 7",
        "PTP/PtMP",
        "Teragraph & Zigbee",
        "Wireless access point installation (Internal & External)",
        "Wireless Controllers",
        "Working at Heights",
      ],
    },
    {
      title: "Satellite & Cellular",
      bullets: [
        "Full stack including provision of data services (monthly recurring subscription)",
        "Satellite: GEO (Viasat), MEO (SESnet), LEO (Starlink), HTS (Viasat-3 / Starlink) combination services",
        "Cellular: 2G to 5G new radio",
        "DAS Distributed augmentation",
        "LTE (Long Term Evolution)",
        "mmWave (Millimeter Wave)",
        "MIMO (Multiple input Multiple Output)",
        "Antenna Services",
        "Working at Heights",
      ],
    },
    {
      title: "Fibre & Copper Cabling",
      bullets: [
        "Fibre Cabling: Single & Multimode, PON Fibre cabling, GPON - from OS1 to OM5, Dark Fibre, Campus",
        "Copper Cabling: Data & Audio transmission, Ethernet Cat6, Cat6A, and Cat7, Coax/AV - RG-6, RG-11, RG-58, RG-59, RG-213",
      ],
    },
  ],
  "Security Services": [
    {
      title: "Evaluation Services",
      desc: "A full range of evaluation services to protect your organisation:",
      bullets: [
        "Vulnerability Scans",
        "Risk Assessments",
        "Remediation Recommendations",
        "Infrastructure Penetration Testing (Pen Testing)",
        "Compliance & Risk Gap Analysis",
        "Periodic Reviews",
      ],
    },
    {
      title: "Network Security",
      desc: "Protecting the network from unauthorised access & cyber threats:",
      bullets: [
        "Firewall configuration, monitoring & controls",
        "Intrusion Detection (IDS)",
        "Network Access Control (NAC)",
        "Anti-Virus & Anti Malware",
        "Security Information & Event Management (SIEM)",
        "Encryption",
        "Network Segmentation",
      ],
    },
    {
      title: "Endpoint Security",
      desc: "Securing individual devices that connect to the network:",
      bullets: [
        "Endpoint Protection, Detection & Response (EDR)",
        "Intrusion Detection (IDS/IPS)",
        "Mobile Device Management (MDM)",
        "Data Loss Prevention (DLP)",
        "Security Information & Event Management (SIEM)",
        "Encryption",
        "Zero Trust Security",
      ],
    },
    {
      title: "Cloud Security",
      desc: "Ensuring safety measures are in place for cloud-based storage & services:",
      bullets: [
        "Identity & Access Management (IAM)",
        "Data Protection",
        "Network Security",
        "Threat Detection",
        "Disaster Recovery",
        "Backup & recovery",
        "Business Continuity",
        "Compliance & Regulatory Services",
      ],
    },
    {
      title: "Application Security",
      desc: "Identifying and mitigating vulnerabilities in applications:",
      bullets: [
        "Full Microsoft Stack Services",
        "Vulnerability Scans",
        "Application Penetration Testing (Pen Testing)",
        "Security Testing",
        "Periodic Reviews",
        "Compliance & Regulatory Services",
      ],
    },
    {
      title: "Physical Security",
      desc: "Protecting the people, property, & assets from physical threats:",
      bullets: [
        "Surveillance (CCTV) Consultancy",
        "Solution Design",
        "Vendor Selection",
        "Project Management",
        "Implementation",
        "Managed Services",
        "Access Control",
      ],
    },
  ],
  "Cloud Services": [
    {
      title: "Cloud Security",
      desc: "Ensuring safety measures are in place for cloud-based services:",
      bullets: [
        "Identity & Access Management",
        "Data Protection",
        "Network Security",
        "Application Penetration Testing",
        "Infrastructure Penetration Testing",
        "Threat Detection",
        "Disaster Recovery - Backup & Recovery",
        "Business Continuity",
      ],
    },
    {
      title: "Cloud Infrastructure",
      desc: "Implementation Services for Cloud based Infrastructure:",
      bullets: [
        "Public Cloud Implementations (Azure, AWS, Google, Microsoft 365)",
        "Cloud Server build",
        "Cloud Desktop build",
        "Managed Private Cloud",
        "Dedicated Cloud",
        "Backup & Data Recovery",
      ],
    },
    {
      title: "Cloud Connectivity",
      desc: "Implementation Services for Cloud Connectivity:",
      bullets: [
        "Cloud Interconnections",
        "PaaS, IaaS, SaaS Connectivity",
        "Public Internet connectivity",
        "Cloud Connect (Dedicated)",
        "Virtual Private Network (VPN)",
        "SD-WAN",
        "Hybrid Connect",
        "Edge Computing Connectivity",
      ],
    },
    {
      title: "Virtualisation",
      desc: "Virtualisation Services within Cloud based Infrastructure:",
      bullets: [
        "Server Consolidation",
        "Desktop Virtualization",
        "Cloud Migration",
        "Application Virtualization",
        "Storage Virtualization",
        "Data Virtualisation",
        "Network Virtualization",
        "Backup and Disaster Recovery",
      ],
    },
    {
      title: "UC & Collaboration",
      desc: "UC & Collaboration Services in Cloud Environments:",
      bullets: [
        "Assessment & Strategy development",
        "Vendor selection & evaluation",
        "Implementation & deployment",
        "User training & adoption support",
        "System management & maintenance",
        "Customisation & integration",
        "Network optimization",
      ],
    },
  ],
  "Data Centre & Compute": [
    {
      title: "Installation & Configuration",
      bullets: [
        "Racking & Stacking",
        "Electrical & Data Cabling",
        "Access control & surveillance",
        "Operating system installation",
        "Network configuration",
        "Installing & configuring management software (DCIM)",
        "Implementing security policies and firewalls",
        "Testing and Validation - Performance monitoring & optimization",
      ],
    },
    {
      title: "Virtualisation",
      desc: "Technical Services to deliver Virtualisation Services within Datacentres:",
      bullets: [
        "Server Consolidation",
        "Desktop Virtualization",
        "Cloud Migration",
        "Application Virtualization",
        "Storage Virtualization",
        "Data Virtualisation",
        "Network Virtualization",
        "Backup & Disaster Recovery",
      ],
    },
    {
      title: "Hybrid Cloud",
      desc: "Consulting & Technical Services to manage hybrid cloud environments:",
      bullets: [
        "Migration Strategy",
        "Workload Optimization",
        "Security Architecture Design",
        "Cost Optimisation",
        "Security Configuration",
        "Connectivity management",
      ],
    },
    {
      title: "High Performance Computing",
      desc: "Consulting & Technical Services to build and manage HPC environments:",
      bullets: [
        "Consultancy and Design",
        "System architecture Design",
        "Customisation & Integration",
        "Implementation and Deployment",
        "Performance optimization",
        "Cloud integration",
        "Training and support",
      ],
    },
    {
      title: "Backup & Recovery",
      desc: "Consulting & Technical Services to create and store data backups within a data centre:",
      bullets: [
        "Data backup strategy development",
        "Backup software implementation & management",
        "Data deduplication and compression",
        "Backup testing and validation",
        "Disaster recovery planning",
      ],
    },
  ],
  "Endpoint Infrastructure": [
    {
      title: "Personal Compute Devices",
      bullets: [
        "EUC build & Imaging",
        "Deployment & rollout",
        "Telephony & CTI",
        "Staging",
        "Laptop & Desktop Device Build",
        "Data backup & transfer Health Checks",
        "Securing devices",
        "Troubleshooting",
        "User Training handover",
      ],
    },
    {
      title: "Mobile Devices",
      bullets: [
        "Racking & Stacking",
        "Mobile Device Management (MDM)",
        "Device Configuration",
        "Monitoring devices status and compliance",
        "Enforcing polices on devices",
        "Microsoft Intune",
        "Mobile Security",
      ],
    },
    {
      title: "(IoT) Devices",
      bullets: [
        "Solution Design",
        "Deployment & rollout of sensors and Services",
        "Gateway Installation",
        "Staging",
        "LoRaWAN",
        "Energy Sensors and Monitoring",
      ],
    },
    {
      title: "AV & Media Services",
      bullets: [
        "Solution Design",
        "Racking and Stacking",
        "Electrical & Data Cabling",
        "Digital Signage",
        "Video Conferencing",
        "Interactive Whiteboards",
        "Projectors",
        "Interactive Sound Bars",
      ],
    },
    {
      title: "CCTV",
      bullets: [
        "Access Control",
        "Surveillance (CCTV)",
        "Consultancy",
        "Solution Design",
        "Vendor Selection",
        "Project Management",
        "Implementation",
        "Integrations",
        "Managed Services",
      ],
    },
  ],
  "Engagement Models & Associated Capabilities": [
    {
      title: "End to End Project Ownership",
      bullets: [
        "Discovery Services",
        "Solution Design/Architecture",
        "Programme Management",
        "Project Management",
        "Service Delivery",
        "PMO Service (end to end project lifecycle)",
        "Account Management",
      ],
    },
    {
      title: "Technical Consultancy",
      bullets: [
        "Digital Transformation",
        "IT Strategy",
        "Network Strategy",
        "Technical Discovery & Pre Sales",
        "IT Infrastructure Design & Solutioning",
        "Solution Design",
        "Technical Project Oversight",
        "Technical Vendor Selection",
      ],
    },
    {
      title: "Flexible Resourcing",
      bullets: [
        "Resource Augmentation",
        "Embedded (retained)",
        "On Demand (rapid response)",
        "Intermittent Utilisation (non-continuous)",
        "Security clearances including: NPPV3, BPSS, SC, DV (Police, Gov, Defence), EDBS (Education)",
      ],
    },
    {
      title: "Managed Services",
      bullets: [
        "Helpdesk and Technical Support",
        "Presales as a Service",
        "2nd/3rd line Support as a Service",
        "Network & Infrastructure Management",
        "Performance Monitoring & Reporting",
        "Proactive Monitoring",
        "CCTV Managed Services",
        "Engineering on demand (UK Nationwide Coverage)",
      ],
    },
  ],
  "Complimentary Services": [
    {
      title: "Discovery Services",
      bullets: [
        "Inventory & Asset Identification",
        "Network Discovery",
        "Infrastructure Audits",
        "End to end Surveys",
        "Configuration and Infrastructure Discovery",
        "Compliance and Security Discovery & Audits",
        "Software & Application Discovery",
        "Vulnerability Assessments",
        "Infrastructure Health Checks",
        "Technical Pre-Sales Discovery",
      ],
    },
    {
      title: "Testing & Verification",
      bullets: [
        "Connectivity Testing & Verification",
        "Performance Testing & Verification",
        "Customization and Configuration Testing",
        "Compliance Testing",
        "Functionality Testing",
        "In-house Testing & Verification Equipment: Fluke DSX Cable Analyzer’s, OTDR / OLTS / DTX 8000, Fibre VisiFault & Siretta Network Analysers, Ekahau Sidekick 1 & 2",
      ],
    },
    {
      title: "IT Governance",
      desc: "Ensuring IT systems and processes comply with relevant laws and regulations:",
      bullets: [
        "ITIL",
        "ISO 9001/27001",
        "SOC1 & SOC2",
        "NIST",
        "Cyber Essentials (and plus)",
        "PCI-DSS",
        "Internal & External Audits",
        "Compliance Audits",
        "Vulnerability Assessments",
      ],
    },
    {
      title: "Field Services",
      bullets: [
        "Rapid response engineer to site",
        "BAU Services - agreed date and time",
        "Infrastructure Installation Services (across all technologies)",
        "Troubleshooting & resolution",
        "Scalable services to meet demand",
        "Compliance & safety aligned delivery",
        "Leveraging advanced tools & technologies",
        "Working at Heights (IPAF & PASMA trained Engineers)",
        "Site Safety Plus aligned (CSCS, SSSTS, SMSTS) (UK&I, Europe & US)",
      ],
    },
    {
      title: "Ethical Asset Disposal",
      bullets: [
        "IT Asset Disposal (ITAD): Environmentally Compliant, Data Security, Asset Recovery, Comprehensive Support, Certification",
        "Data Disposal: Environmentally Responsible, NIST compliant Secure Data disposal",
      ],
    },
  ],
};

const topLevelCategories = Object.keys(matrices);

export function getAIBotResponse(q: string): AIChatMessage {
  const norm = q.toLowerCase().trim();

  // If user typed a category
  const matchingCategory = topLevelCategories.find(c => c.toLowerCase() === norm);
  if (matchingCategory) {
    const services = matrices[matchingCategory as keyof typeof matrices];
    return {
      role: "ai",
      text: `Here is the knowledge base content for **${matchingCategory}**. What specific service are you interested in?`,
      options: services.map(s => s.title),
    };
  }

  // If user typed a specific service
  for (const cat of topLevelCategories) {
    const services = matrices[cat as keyof typeof matrices];
    const match = services.find(s => s.title.toLowerCase() === norm);
    if (match) {
      return {
        role: "ai",
        text: `Here are the details for **${match.title}** within ${cat}:`,
        cards: [
          {
            type: "details",
            title: match.title,
            desc: match.desc,
            bullets: match.bullets,
          }
        ],
        options: ["Back to main categories", ...services.map(s => s.title).filter(t => t !== match.title)],
      };
    }
  }

  if (norm === "back to main categories" || norm === "hello" || norm === "hi" || norm === "" || norm.includes("which service would you like to explore")) {
    return {
      role: "ai",
      text: "Hello! I am the AI Knowledge Base assistant. I can provide details on our various service matrices. Please select a category below:",
      options: topLevelCategories,
    };
  }

  // Fallback search
  const results: string[] = [];
  for (const cat of topLevelCategories) {
    const services = matrices[cat as keyof typeof matrices];
    for (const s of services) {
      if (s.title.toLowerCase().includes(norm) || (s.desc && s.desc.toLowerCase().includes(norm)) || s.bullets.some(b => b.toLowerCase().includes(norm))) {
        if (!results.includes(s.title)) {
          results.push(s.title);
        }
      }
    }
  }

  if (results.length > 0) {
    return {
      role: "ai",
      text: `I found some services matching "${q}". Which one would you like to explore?`,
      options: results.slice(0, 5),
    };
  }

  return {
    role: "ai",
    text: "I couldn't find a direct match. Please explore our main knowledge base categories:",
    options: topLevelCategories,
  };
}
