import {
  pricing,
  documentation,
  blog,
  careers,
  help,
  discord,
  updates,
  status,
  apiReference,
  providers,
  libraries,
} from "constants/urls";

export default [
  {
    title: "Product",
    items: [
      { title: "Pricing", link: pricing },
      { title: "Providers", link: providers },
    ],
  },
  {
    title: "Developers",
    items: [
      { title: "Documentation", link: documentation, linkType: "external" },
      { title: "API", link: apiReference },
      { title: "Libraries", link: libraries, linkType: "external" },
      { title: "Status", link: status, linkType: "external" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Blog", link: blog },
      { title: "Help Center", link: help, linkType: "external" },
      { title: "Community", link: discord, linkType: "external" },
      { title: "Product Updates", link: updates, linkType: "external" },
    ],
  },
  {
    title: "Company",
    items: [{ title: "Careers", link: careers, linkType: "external" }],
  },
];
