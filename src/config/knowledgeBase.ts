export type ChatCard = {
  type: "capability" | "case-study" | "discovery";
  tag: string;
  title: string;
  desc: string;
  bullets?: string[];
  stat?: string;
  statDesc?: string;
};

export type ChatMessage = {
  role: "user" | "ai";
  text: string;
  cards?: ChatCard[];
  options?: string[];
};

export function getBotResponse(q: string): ChatMessage {
  const norm = q.toLowerCase();

  if (
    norm.includes("cisco wireless rollout") ||
    norm.includes("sectors have you deployed cisco") ||
    norm.includes("multi-site cisco rollouts")
  ) {
    return {
      role: "ai",
      text: "Yes — Cisco deployments are a core capability across our Connectivity practice. We have extensive experience with Cisco wireless, switching, routing, and SD-WAN solutions across complex multi-site environments.",
      cards: [
        {
          type: "capability",
          tag: "CAPABILITY",
          title: "Cisco Delivery Capability",
          desc: "Our network engineering teams deliver Cisco solutions from design through to post-deployment optimisation. We support the full lifecycle including site surveys, HLD/LLD, deployment, configuration, and ongoing optimisation.",
          bullets: [
            "Cisco wireless (Wi-Fi 6/6E) design and deployment",
            "Cisco Catalyst and Meraki switching",
            "Cisco SD-WAN and routing architecture",
            "Multi-site rollouts with PMO coordination",
          ],
        },
        {
          type: "case-study",
          tag: "CASE STUDY",
          title: "NHS Hospital Trust — Wireless Transformation",
          desc: "We delivered a full wireless network refresh for an NHS Hospital Trust across multiple sites, including Cisco wireless infrastructure supporting 3,000+ concurrent devices with zero downtime during migration.",
          stat: "3,000+",
          statDesc: "Concurrent devices supported",
        },
      ],
      options: [
        "What sectors have you deployed Cisco solutions in?",
        "Can you handle multi-site Cisco rollouts?",
        "What's your approach to wireless design?",
      ],
    };
  }

  if (
    norm.includes("approach to wireless design") ||
    norm.includes("hospital wireless deployments") ||
    norm.includes("retail wireless solutions")
  ) {
    return {
      role: "ai",
      text: "Wireless network design and deployment is one of our strongest capabilities. We specialise in complex wireless environments across healthcare, retail, education, and hospitality sectors.",
      cards: [
        {
          type: "capability",
          tag: "CAPABILITY",
          title: "Wireless Expertise",
          desc: "Our team delivers bespoke wireless network solutions from initial site surveys and predictive design through to deployment, validation, and post-deployment optimisation.",
          bullets: [
            "Predictive and on-site wireless surveys",
            "High-density design for clinical and retail environments",
            "Wi-Fi 6/6E migration and refresh programmes",
            "IoT device integration and management",
            "Post-deployment optimisation and tuning",
          ],
        },
        {
          type: "case-study",
          tag: "CASE STUDY",
          title: "Hospital Trust Wireless Refresh",
          desc: "We delivered a complete wireless network transformation for an NHS Hospital Trust, achieving 100% coverage across all clinical areas with zero downtime during migration.",
          stat: "100%",
          statDesc: "Coverage across clinical areas",
        },
      ],
      options: [
        "Can you support hospital wireless deployments?",
        "What about retail wireless solutions?",
        "How do you handle IoT device connectivity?",
      ],
    };
  }

  return {
    role: "ai",
    text: "Thank you for your question. Collective IP delivers end-to-end IT infrastructure services across six core practices: Connectivity, Security, Cloud, Datacentre & Compute, Endpoint Infrastructure, and Intelligent Automation.",
    cards: [
      {
        type: "discovery",
        tag: "DISCOVERY",
        title: "Let Me Help You Explore",
        desc: "I can provide detailed information about any of our capabilities, delivery approach, or how we work with partners. Try asking about a specific area:",
        bullets: [
          "Network and wireless deployments (including Cisco)",
          "Security solutions and compliance",
          "Cloud migration and hybrid infrastructure",
          "HPC and datacentre solutions",
          "Intelligent automation capabilities",
          "Partner enablement and commercial models",
        ],
      },
    ],
    options: [
      "Can you support a Cisco wireless rollout?",
      "What intelligent automation solutions do you offer?",
      "How do you work with channel partners?",
    ],
  };
}
