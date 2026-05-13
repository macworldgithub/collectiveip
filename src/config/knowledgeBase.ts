import { getAIBotResponse } from "./aiMatrixKnowledge";

export type ChatCard = {
  type: "capability" | "case-study" | "discovery" | "approach";
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

  const aiResp = getAIBotResponse(q);
  if (!aiResp.text?.includes("couldn't find a direct match")) {
    return {
      role: "ai",
      text: aiResp.text || "",
      options: aiResp.options,
      cards: aiResp.cards?.map(c => ({
        type: "capability",
        tag: "SERVICE DETAILS",
        title: c.title,
        desc: c.desc || "",
        bullets: c.bullets
      }))
    };
  }

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

  if (
    norm.includes("automation implementation") ||
    norm.includes("intelligent automation solutions") ||
    norm.includes("what outcomes can automation deliver")
  ) {
    return {
      role: "ai",
      text: "Our Intelligent Automation practice delivers practical, outcome-driven solutions that reduce cost, accelerate delivery, and transform operations. We focus on real business problems with measurable outcomes.",
      cards: [
        {
          type: "capability",
          tag: "CAPABILITY",
          title: "Intelligent Automation Services",
          desc: "We deliver automation solutions that integrate with your existing infrastructure and deliver value from day one.",
          bullets: [
            "Automated network operations and monitoring",
            "Intelligent process automation",
            "Predictive analytics and insights",
            "Digital front door / knowledge systems",
            "Custom solutions for specific use cases",
          ],
        },
        {
          type: "approach",
          tag: "OUR APPROACH",
          title: "Our Approach",
          desc: "We follow a phased approach: Discovery & Assessment, Solution Design, Delivery & Integration, and Optimisation & Scale. Each phase proves value before moving to the next.",
        },
      ],
      options: [
        "What outcomes can automation deliver?",
        "Can you build a custom knowledge system?",
        "How do you approach automation implementation?",
      ],
    };
  }

  if (
    norm.includes("endpoint security") ||
    norm.includes("large enterprise") ||
    norm.includes("can you deliver endpoint security")
  ) {
    return {
      role: "ai",
      text: "Our Security practice delivers end-to-end solutions across network, endpoint, cloud, IoT, and data centre environments. We help organisations protect critical assets and reduce attack surfaces.",
      cards: [
        {
          type: "capability",
          tag: "CAPABILITY",
          title: "Security Services",
          desc: "We advise, design, and implement security solutions tailored to your specific threat landscape and compliance requirements.",
          bullets: [
            "Global threat analysis and vulnerability assessments",
            "Endpoint security deployment and management",
            "Network security architecture",
            "Cloud security posture management",
            "Compliance and policy enforcement",
          ],
        },
        {
          type: "case-study",
          tag: "CASE STUDY",
          title: "Aerospace — Endpoint Security Deployment",
          desc: "We deployed comprehensive endpoint security for a major aerospace manufacturer, achieving a 95% reduction in security incidents with unified visibility across 5,000+ endpoints.",
          stat: "95%",
          statDesc: "Reduction in security incidents",
        },
      ],
      options: [
        "What compliance standards do you support?",
        "Can you help with endpoint security?",
        "What about cloud security?",
      ],
    };
  }

  if (
    norm.includes("channel partners") ||
    norm.includes("commercial model") ||
    norm.includes("white-label your services")
  ) {
    return {
      role: "ai",
      text: "We exist to enable our channel partners. Everything we do is designed to help you expand your services portfolio, win more business, and deliver with confidence — without competing with your brand.",
      cards: [
        {
          type: "capability",
          tag: "CAPABILITY",
          title: "Partner Enablement",
          desc: "We support partners across four key areas to drive mutual growth and success.",
          bullets: [
            "Expanding your services portfolio and creating new white space",
            "Reducing fixed cost base through flexible specialist resource",
            "Extending security services capabilities",
            "Driving annuity revenue through value-added services",
          ],
        },
        {
          type: "approach",
          tag: "OUR APPROACH",
          title: "How We Work",
          desc: "We operate as an extension of your team — white-labelled, aligned to your brand, and focused on making you look good. Our experts bring deep technical capability without the overhead of permanent headcount.",
        },
      ],
      options: [
        "How do you protect our customer relationships?",
        "What does the commercial model look like?",
        "Can you white-label your services?",
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
