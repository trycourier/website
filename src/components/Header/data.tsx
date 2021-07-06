import {
  documentation,
  blog,
  pricing,
  apiReference,
  discord,
  status,
  help,
  providers,
} from "constants/urls";

export default [
  // {
  //     title: "Features",
  //     link: "/",
  // },
  {
    title: "Providers",
    link: providers,
  },
  {
    title: "Developers",
    items: [
      {
        title: "Documentation",
        link: documentation,
        isExternalLink: true,
        icon: "DocumentationIcon",
        className: "documentationIcon",
      },
      {
        title: "API Reference",
        link: apiReference,
        isExternalLink: true,
        icon: "APIReferenceIcon",
        className: "apiReferenceIcon",
      },
      {
        title: "Community",
        link: discord,
        isExternalLink: true,
        icon: "CommunityIcon",
        className: "communityIcon",
      },
      {
        title: "Status",
        link: status,
        isExternalLink: true,
        icon: "StatusIcon",
        className: "statusIcon",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Blog", link: blog, icon: "BlogIcon", className: "blogIcon" },
      {
        title: "Help Center",
        link: help,
        isExternalLink: true,
        icon: "HelpCenterIcon",
        className: "helpIcon",
      },
    ],
  },
  {
    title: "Pricing",
    link: pricing,
  },
];
