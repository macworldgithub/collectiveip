import { MessageSquare, Activity, ShieldCheck } from "lucide-react";
import React from "react";

export type Tool = {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  desc: string;
  placeholder?: string;
  sampleQuestions?: string[];
  fields?: {
    label: string;
    type: "select" | "text" | "number";
    options?: string[];
  }[];
};

export const tools: Tool[] = [
  {
    id: "knowledge",
    icon: <MessageSquare size={18} />,
    title: "Knowledge Assistant",
    subtitle: "Capability & Case Study Finder",
    desc: "Ask anything about our capabilities, delivery experience, or case studies.",
    placeholder: "Ask about our capabilities...",
    sampleQuestions: [
      "Can you support a multi-site Cisco wireless rollout?",
      "How do you approach automation implementation?",
      "What's your approach to wireless design?",
      "How do you work with channel partners?",
    ],
  },
  {
    id: "network",
    icon: <Activity size={18} />,
    title: "Network Assessment",
    subtitle: "Infrastructure Discovery",
    desc: "Answer a few questions about your network environment to receive tailored recommendations.",
    fields: [
      {
        label: "Number of sites",
        type: "select",
        options: ["1", "2–5", "6–20", "21–50", "50+"],
      },
      {
        label: "Primary concern",
        type: "select",
        options: [
          "Performance",
          "Security",
          "Reliability",
          "Cost",
          "Scalability",
        ],
      },
      {
        label: "Current infrastructure age",
        type: "select",
        options: ["Less than 2 years", "2–5 years", "5–10 years", "10+ years"],
      },
      {
        label: "Approximate device count",
        type: "select",
        options: [
          "Under 100",
          "100–500",
          "500–2,000",
          "2,000–10,000",
          "10,000+",
        ],
      },
    ],
  },
  {
    id: "security",
    icon: <ShieldCheck size={18} />,
    title: "Security Posture Review",
    subtitle: "Threat & Risk Analysis",
    desc: "Get a rapid assessment of your current security posture based on industry frameworks.",
    fields: [
      {
        label: "Industry sector",
        type: "select",
        options: [
          "Healthcare",
          "Finance",
          "Manufacturing",
          "Education",
          "Retail",
          "Other",
        ],
      },
      {
        label: "Endpoint management",
        type: "select",
        options: [
          "Fully managed (MDM/UEM)",
          "Partially managed",
          "Unmanaged",
          "Unknown",
        ],
      },
      {
        label: "Last security assessment",
        type: "select",
        options: [
          "Within 12 months",
          "1–2 years ago",
          "2–3 years ago",
          "Never / Unknown",
        ],
      },
      {
        label: "Primary security concern",
        type: "select",
        options: [
          "Ransomware",
          "Data breach",
          "Insider threat",
          "Compliance",
          "All of the above",
        ],
      },
    ],
  },
];
