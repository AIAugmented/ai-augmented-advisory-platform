import { Linkedin } from "lucide-react";

import { ROUTES } from "@/routes";

export const NAV_LINKS = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "Agents", href: ROUTES.agents },
  { label: "Pricing", href: ROUTES.pricing },
];

export const QUICK_LINKS = [
  { label: "Privacy Policy", href: ROUTES.privacyPolicy },
  { label: "Terms of Service", href: ROUTES.termsOfService },
];

export const CONTACT_LINKS = [
  {
    label: "info@aiaugmented.io",
    href: "mailto:info@aiaugmented.io",
  },
  {
    label: "+44 774196 4682 (UK)",
    href: "tel:+447741964682",
  },
  {
    label: "+65 8091 1633 (SG)",
    href: "tel:+6580911633",
  },
];

export const SOCIAL_LINKS = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/ai-augmented" },
];

export const WAITLIST_URL = "https://forms.gle/kiwvJeXqWRMZXVgw5";
