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
    icon: <MessageSquare size={24} />,
    title: "Knowledge Assistant",
    subtitle: "Capability & Case Study Finder",
    desc: "Ask anything about our capabilities, delivery experience, or case studies.",
    placeholder: "Ask about our capabilities...",
    sampleQuestions: [
      "Can you support a multi-site Cisco wireless rollout?",
      "What intelligent automation solutions do you offer?",
      "Can you deliver endpoint security for a large enterprise?",
      "How do you work with channel partners?",
      "Which service would you like to explore?",
    ],
  },
  {
    id: "network",
    icon: <Activity size={24} />,
    title: "Network Assessment",
    subtitle: "Infrastructure Discovery",
    desc: "Run a real-time diagnostic of your current network performance, latency, and routing path.",
  },
  {
    id: "security",
    icon: <ShieldCheck size={24} />,
    title: "Security Posture Review",
    subtitle: "Threat & Risk Analysis",
    desc: "Perform a live audit of your current browser security, privacy headers, and device fingerprints.",
  },
];
