import React from "react";

export const plans = {
  free: {
    name: "Developer",
    price: "Free Forever",
    included: (
      <>
        10k messages<small>/mo</small>
      </>
    ),
    overage: <>&mdash;</>,
  },
  good: {
    name: "Starter",
    price: (
      <>
        <small>From</small> $99<small>/mo</small>
      </>
    ),
    included: (
      <>
        10k messages<small>/mo</small>
      </>
    ),
    overage: (
      <>
        +$0.005<small>/additional</small>
      </>
    ),
  },
  better: {
    name: "Business",
    price: (
      <>
        <small>From</small> $2,000<small>/mo</small>
      </>
    ),
    included: (
      <>
        10k messages<small>/mo</small>
      </>
    ),
    overage: (
      <>
        +$0.001<small>/additional</small>
      </>
    ),
  },
};

export const features = [
  {
    label: "",
    developer: "SIGN_UP",
    pro: "SIGN_UP",
    business: "SIGN_UP",
  },
  {
    label: "Team Members",
    developer: "Unlimited",
    pro: "Unlimited",
    business: "Unlimited",
  },
  {
    label: "Channel Integrations",
    developer: "Unlimited",
    pro: "Unlimited",
    business: "Unlimited",
  },
  {
    label: "Templates",
    developer: "Unlimited",
    pro: "Unlimited",
    business: "Unlimited",
  },
  {
    label: "Brands",
    developer: "10",
    pro: "Unlimited",
    business: "Unlimited",
  },
  {
    label: "Delayed & Recurring Messages",
    developer: "",
    pro: "Yes",
    business: "Yes",
  },
  {
    label: "Message Fan-out (Topics)",
    developer: "",
    pro: "Yes",
    business: "Yes",
  },
  {
    label: "Message Batching (Digest)",
    developer: "",
    pro: "Yes",
    business: "Yes",
  },
  {
    label: "Service Level Agreement",
    developer: "",
    pro: "",
    business: "Yes",
  },
  {
    label: "Log Retention",
    developer: "72 Hours",
    pro: "7 Days",
    business: "30 Days",
  },
  {
    label: "",
    developer: "SIGN_UP",
    pro: "SIGN_UP",
    business: "SIGN_UP",
  },
  {
    label: "Support",
    developer: (
      <a href="https://community.courier.com/" target="_blank">
        Community
      </a>
    ),
    pro: (
      <a href="https://community.courier.com/" target="_blank">
        Community
      </a>
    ),
    business: "Customer Success",
  },
  {
    label: "Onboarding",
    developer: "Self-Service",
    pro: "Self-Service",
    business: "Customer Success",
  },
  {
    label: "Compliance Reports",
    developer: "",
    pro: "",
    business: "SOC 2, Pentest",
  },
  {
    label: "Data Privacy",
    developer: "GDPR, CCPA",
    pro: "GDPR, CCPA",
    business: "GDPR (with DPA), CCPA",
  },
  {
    label: "Data Encryption",
    developer: "In-flight & at-rest",
    pro: "In-flight & at-rest",
    business: "In-flight & at-rest",
  },
  {
    label: "SSO",
    developer: "Google, Github",
    pro: "Google, Github",
    business: "Google, Github",
  },
  {
    label: "Two-Factor Authentication",
    developer: "Yes",
    pro: "Yes",
    business: "Yes",
  },
  {
    label: "Roles & Permissions",
    developer: "",
    pro: "",
    business: "Yes",
  },
];
