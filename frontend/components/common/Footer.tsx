import Link from "next/link";

import Logo from "@/components/common/Logo";

import { CONTACT_LINKS, QUICK_LINKS, SOCIAL_LINKS } from "@/constants";
import { ROUTES } from "@/routes";

export function Footer() {
  // Reusable link styling for footer navigation links
  const linkClasses =
    "text-muted-foreground transition-colors duration-300 hover:text-foreground";

  return (
    <footer className="w-full border-t border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/5">
      <div className="container-width space-y-10 py-10">
        {/* Main Footer Content Grid */}
        <div className="grid gap-5 border-b border-border pb-10 md:grid-cols-4 md:gap-10">
          {/* Brand and Company Description Section */}
          <div className="space-y-5 md:col-span-2">
            {/* Logo and Brand Link - matches Header styling */}
            <Logo href={ROUTES.home} />

            {/* Company tagline and mission statement */}
            <p className="leading-relaxed text-muted-foreground">
              Amplifying human wisdom with AI intelligence to deliver
              unassailable strategic advantage for leaders who must be certain
              in a world of constant ambiguity.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-5">
            <h6 className="font-semibold">Quick Links</h6>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={linkClasses}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-5">
            <h6 className="font-semibold">Contact</h6>
            <ul className="space-y-2.5">
              {CONTACT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={linkClasses}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom - Copyright and Social Links */}
        <div className="flex flex-col items-center justify-between gap-5 text-muted-foreground md:flex-row">
          {/* Copyright notice */}
          <p className="text-sm">© 2025 AI-Augmented. All rights reserved.</p>

          {/* Social Media Links */}
          <ul className="flex items-center gap-5">
            {SOCIAL_LINKS.map(({ icon: Icon, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses}
                  aria-label={`Visit AI-Augmented on external social media`}
                >
                  <Icon className="h-5 w-5 transition-transform duration-300 hover:scale-110" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
