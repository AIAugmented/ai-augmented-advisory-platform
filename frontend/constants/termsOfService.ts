export interface TermsSection {
  id: string;
  title: string;
  content: string | string[];
  subsections?: TermsSubsection[];
}

export interface TermsSubsection {
  id: string;
  title: string;
  content?: string | string[];
  items?: TermsItem[];
  table?: TermsTable;
  afterContent?: string;
}

export interface TermsItem {
  label?: string;
  text?: string;
  items?: TermsItem[];
  example?: TermsItem;
  type?: "check" | "cross" | "bullet";
}

export interface TermsTable {
  headers: string[];
  rows: string[][];
}

export const TERMS_META = {
  effectiveDate: "October 19, 2025",
  company: "AI-Augmented",
  service: 'AI-Augmented Platform (The "Service")',
  contact: "info@aiaugmented.io",
  lastUpdated: "October 19, 2025",
  nextReview: "October 19, 2026",
};

export const TABLE_OF_CONTENTS: { id: string; title: string }[] = [
  { id: "1", title: "Acceptance of Terms" },
  { id: "2", title: "Service Description" },
  { id: "3", title: "User Eligibility and Account Registration" },
  { id: "4", title: "Subscription and Billing" },
  { id: "5", title: "User Responsibilities and Acceptable Use" },
  { id: "6", title: "Prohibited Activities" },
  { id: "7", title: "Intellectual Property Rights" },
  { id: "8", title: "User Content Ownership" },
  { id: "9", title: "Your Use of Our Agents" },
  { id: "10", title: "Privacy and Data Security" },
  { id: "11", title: "Termination of Service" },
  { id: "12", title: "Disclaimers and Limitation of Liability" },
  { id: "13", title: "Data Export and Portability" },
  { id: "14", title: "Governing Law and Dispute Resolution" },
  { id: "15", title: "Changes to These Terms" },
  { id: "16", title: "Contact Information" },
];

export const TERMS_OF_SERVICE_SECTIONS: TermsSection[] = [
  {
    id: "1",
    title: "Acceptance of Terms",
    content: "",
    subsections: [
      {
        id: "acceptance",
        title: "By using AI-Augmented, you accept these Terms of Service",
        content:
          "When you access or use our Service, you agree to be bound by these Terms. If you do not agree to any part of these Terms, you may not use the Service.",
      },
      {
        id: "acknowledgment",
        title: "Your use of the Service constitutes your acknowledgment that",
        content: "",
        items: [
          {
            text: "You have read and understood these Terms",
            type: "bullet",
          },
          {
            text: "You agree to be legally bound by them",
            type: "bullet",
          },
          {
            text: "You have authority to enter this agreement",
            type: "bullet",
          },
          {
            text: "You will comply with all applicable laws",
            type: "bullet",
          },
        ],
      },
      {
        id: "organization-use",
        title:
          "If you're using this Service on behalf of a company or organization",
        content: "",
        items: [
          {
            text: "You represent that you have authority to bind that organization",
            type: "bullet",
          },
          {
            text: '"You" refers to both the individual and the organization',
            type: "bullet",
          },
          {
            text: "The organization agrees to indemnify us for breaches",
            type: "bullet",
          },
        ],
      },
      {
        id: "continued-use",
        title: "Continued Use",
        content:
          "Continued use after modifications means you accept updated Terms.",
      },
    ],
  },
  {
    id: "2",
    title: "Service Description",
    content: "",
    subsections: [
      {
        id: "what-is-ai-augmented",
        title: "What AI-Augmented Is",
        content:
          "AI-Augmented is a platform that helps business leaders and executives make better strategic decisions by:",
        items: [
          {
            text: "Synthesizing market, financial, and competitive intelligence",
            type: "bullet",
          },
          {
            text: "Testing decisions from multiple analytical angles",
            type: "bullet",
          },
          {
            text: "Organizing your thinking in the Decision Canvas",
            type: "bullet",
          },
          {
            text: "Maintaining a permanent record of your strategic decisions",
            type: "bullet",
          },
          {
            text: "Providing agent-driven analysis across five specialized domains",
            type: "bullet",
          },
        ],
      },
      {
        id: "what-is-not",
        title: "What AI-Augmented Is NOT",
        content: "",
        items: [
          {
            label: "Not guaranteed accuracy",
            text: "Agents provide analysis based on available data. You verify all outputs.",
          },
          {
            label: "Not legal advice",
            text: "Never use for legal decisions without consulting lawyers.",
          },
          {
            label: "Not financial advice",
            text: "Never use for investment advice without consulting advisors.",
          },
          {
            label: "Not medical advice",
            text: "Never use for health decisions without consulting professionals.",
          },
          {
            label: "Not automation",
            text: "You always make the final decision. Agents inform; you decide.",
          },
        ],
      },
      {
        id: "subscription-includes",
        title: "Your Subscription Includes",
        content: "",
        items: [
          {
            text: "Unlimited Strategic Decisions (no monthly query limits)",
            type: "bullet",
          },
          {
            text: "Five Specialized Agents (Market Compass, Financial Guardian, Strategy Analyst, People Advisor, Action Architect)",
            type: "bullet",
          },
          {
            text: "Decision Canvas (unlimited creation, editing, saving, exporting)",
            type: "bullet",
          },
          {
            text: "Executive-Grade Reports (unlimited generation and export)",
            type: "bullet",
          },
          {
            text: "Permanent Strategic Memory (all decisions retained indefinitely)",
            type: "bullet",
          },
          {
            text: "Priority Support (direct access to our team)",
            type: "bullet",
          },
          {
            text: "Roadmap Influence (your feedback shapes future agents)",
            type: "bullet",
          },
          {
            text: "Early Access to New Agents (beta testing before public release)",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "User Eligibility and Account Registration",
    content: "",
    subsections: [
      {
        id: "who-can-use",
        title: "Who Can Use This Service",
        content: "",
        items: [
          {
            text: "Must be at least 18 years old",
            type: "bullet",
          },
          {
            text: "Must be a business professional or authorized organizational representative",
            type: "bullet",
          },
          {
            text: "Must have authority to enter into this agreement",
            type: "bullet",
          },
          {
            text: "Must comply with all applicable laws and regulations",
            type: "bullet",
          },
        ],
      },
      {
        id: "account-registration",
        title: "Account Registration",
        content: "By creating an account, you agree to:",
        items: [
          {
            text: "Provide accurate, complete, and current information",
            type: "bullet",
          },
          {
            text: "Update information if it changes",
            type: "bullet",
          },
          {
            text: "Keep your password confidential and secure",
            type: "bullet",
          },
          {
            text: "Be responsible for all activity under your account",
            type: "bullet",
          },
          {
            text: "Notify us immediately of unauthorized access",
            type: "bullet",
          },
        ],
      },
      {
        id: "your-responsibility",
        title: "You Are Responsible For",
        content: "",
        items: [
          {
            text: "Maintaining confidentiality of login credentials",
            type: "bullet",
          },
          {
            text: "All activity conducted through your account",
            type: "bullet",
          },
          {
            text: "All decisions made using your account",
            type: "bullet",
          },
          {
            text: "All Strategic Content uploaded to your account",
            type: "bullet",
          },
        ],
      },
      {
        id: "account-security",
        title: "Account Security",
        content: "To maintain account security:",
        items: [
          {
            text: "Use a strong, unique password",
            type: "bullet",
          },
          {
            text: "Do not share credentials with unauthorized people",
            type: "bullet",
          },
          {
            text: "Enable multi-factor authentication if available",
            type: "bullet",
          },
          {
            text: "Log out after sessions on shared devices",
            type: "bullet",
          },
          {
            text: "Notify us of suspected unauthorized access immediately",
            type: "bullet",
          },
        ],
      },
      {
        id: "not-responsible",
        title: "We Are Not Responsible For Unauthorized Access Due To",
        content: "",
        items: [
          {
            text: "Compromised credentials you shared",
            type: "bullet",
          },
          {
            text: "Weak passwords you chose",
            type: "bullet",
          },
          {
            text: "Devices you failed to secure",
            type: "bullet",
          },
          {
            text: "Your negligence in protecting access",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Subscription and Billing",
    content: "",
    subsections: [
      {
        id: "subscription-plan",
        title: "Subscription Plan",
        content: "Strategic Authority Plan - $149/month",
      },
      {
        id: "billing",
        title: "Billing",
        content: "",
        items: [
          {
            text: "Monthly subscription charged on same day each month",
            type: "bullet",
          },
          {
            text: "Annual option: $1,490/year (save $298, 2-month discount)",
            type: "bullet",
          },
          {
            text: "Charged to payment method on file",
            type: "bullet",
          },
          {
            text: "First charge on day of signup",
            type: "bullet",
          },
          {
            text: "Subsequent charges on anniversary date",
            type: "bullet",
          },
        ],
      },
      {
        id: "payment-methods",
        title: "Payment Methods",
        content: "We accept:",
        items: [
          {
            text: "Major credit cards (Visa, Mastercard, American Express)",
            type: "bullet",
          },
          {
            text: "Bank transfers (ACH in USA, wire internationally)",
            type: "bullet",
          },
          {
            text: "Other payment methods displayed at checkout",
            type: "bullet",
          },
        ],
      },
      {
        id: "failed-payments",
        title: "Failed Payments",
        content: "If payment fails:",
        items: [
          {
            text: "We notify you and provide 5 days to update payment method",
            type: "bullet",
          },
          {
            text: "If not updated, your access is suspended (not terminated)",
            type: "bullet",
          },
          {
            text: "After 30 days, your account may be deleted",
            type: "bullet",
          },
          {
            text: "You remain responsible for all charges incurred",
            type: "bullet",
          },
        ],
      },
      {
        id: "taxes",
        title: "Taxes",
        content: "",
        items: [
          {
            text: "You are responsible for all applicable taxes",
            type: "bullet",
          },
          {
            text: "Sales tax calculated based on your billing address",
            type: "bullet",
          },
          {
            text: "International users responsible for VAT/GST",
            type: "bullet",
          },
          {
            text: "We'll provide invoice/receipt for your records",
            type: "bullet",
          },
        ],
      },
      {
        id: "billing-disputes",
        title: "Billing Disputes",
        content: "",
        items: [
          {
            text: "Notify us within 30 days of charge",
            type: "bullet",
          },
          {
            text: "Provide specific dispute reason",
            type: "bullet",
          },
          {
            text: "We investigate within 10 business days",
            type: "bullet",
          },
          {
            text: "Dispute doesn't prevent normal billing (you can cancel separately)",
            type: "bullet",
          },
        ],
      },
      {
        id: "founding-rate-lock",
        title: "Founding User Rate Lock",
        content: "",
        items: [
          {
            text: "Your $149/month rate is locked indefinitely",
            type: "bullet",
          },
          {
            text: "Even after we exit beta and raise pricing to $299+",
            type: "bullet",
          },
          {
            text: "This guarantee survives acquisition (new owner honors it)",
            type: "bullet",
          },
          {
            text: "If acquired, you'll be notified; you can cancel instead of transfer",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "User Responsibilities and Acceptable Use",
    content: "",
    subsections: [
      {
        id: "your-content",
        title: "Your Content",
        content: "",
        items: [
          {
            text: "Everything you upload is your responsibility",
            type: "bullet",
          },
          {
            text: "You must have rights to all content you provide",
            type: "bullet",
          },
          {
            text: "You warrant you own or have permission for all data",
            type: "bullet",
          },
          {
            text: "You are responsible for compliance with data protection laws",
            type: "bullet",
          },
        ],
      },
      {
        id: "your-decisions",
        title: "Your Decisions",
        content: "",
        items: [
          {
            text: "All decisions using AI-Augmented are ultimately YOUR decisions",
            type: "bullet",
          },
          {
            text: "Agents provide analysis; you decide",
            type: "bullet",
          },
          {
            text: "We don't guarantee outcomes or accuracy",
            type: "bullet",
          },
          {
            text: "You alone bear responsibility for decisions you make",
            type: "bullet",
          },
        ],
      },
      {
        id: "your-data",
        title: "Your Data",
        content: "",
        items: [
          {
            text: "You maintain copies of your important Strategic Content",
            type: "bullet",
          },
          {
            text: "Backups are for disaster recovery, not permanent storage",
            type: "bullet",
          },
          {
            text: "You can export data anytime (Section 13)",
            type: "bullet",
          },
          {
            text: "We're not responsible for data loss from your side",
            type: "bullet",
          },
        ],
      },
      {
        id: "compliance",
        title: "Compliance",
        content: "",
        items: [
          {
            text: "You ensure your use complies with all laws",
            type: "bullet",
          },
          {
            text: "You follow all workplace policies of your organization",
            type: "bullet",
          },
          {
            text: "You don't violate any third-party rights",
            type: "bullet",
          },
          {
            text: "You comply with export control laws if applicable",
            type: "bullet",
          },
        ],
      },
      {
        id: "third-party-content",
        title: "Third-Party Content",
        content: "",
        items: [
          {
            text: "You don't upload personal data of others without consent",
            type: "bullet",
          },
          {
            text: "You don't upload confidential information you don't control",
            type: "bullet",
          },
          {
            text: "You don't upload data protected by NDAs",
            type: "bullet",
          },
          {
            text: "You indemnify us if you violate these restrictions",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Prohibited Activities",
    content: "You May NOT:",
    subsections: [
      {
        id: "illegal-activities",
        title: "Illegal Activities",
        content: "",
        items: [
          {
            text: "Use the Service for any illegal purpose or activity",
            type: "bullet",
          },
          {
            text: "Violate any local, state, national, or international law",
            type: "bullet",
          },
          {
            text: "Help others commit illegal activities",
            type: "bullet",
          },
          {
            text: "Use for fraud, deception, or misrepresentation",
            type: "bullet",
          },
          {
            text: "Use to evade law enforcement",
            type: "bullet",
          },
        ],
      },
      {
        id: "competing-ai",
        title: "Competing AI/Model Training",
        content: "",
        items: [
          {
            text: "Do NOT extract our agents' outputs at scale to train your own models",
            type: "bullet",
          },
          {
            text: "Do NOT reverse-engineer our platform or agents",
            type: "bullet",
          },
          {
            text: "Do NOT use in bulk to create competing products",
            type: "bullet",
          },
          {
            text: "Do NOT use to build derivative AI systems",
            type: "bullet",
          },
          {
            text: "Do NOT scrape or automate large-scale extraction",
            type: "bullet",
          },
        ],
      },
      {
        id: "data-misuse",
        title: "Data Misuse",
        content: "",
        items: [
          {
            text: "Do NOT upload personal data of others without proper authorization",
            type: "bullet",
          },
          {
            text: "Do NOT upload data protected by non-disclosure agreements",
            type: "bullet",
          },
          {
            text: "Do NOT upload classified or government-restricted information",
            type: "bullet",
          },
          {
            text: "Do NOT use to process data you don't have rights to",
            type: "bullet",
          },
          {
            text: "Do NOT share confidential data from your organization",
            type: "bullet",
          },
        ],
      },
      {
        id: "unauthorized-access",
        title: "Unauthorized Access",
        content: "",
        items: [
          {
            text: "Do NOT attempt to access others' accounts",
            type: "bullet",
          },
          {
            text: "Do NOT try to bypass security measures",
            type: "bullet",
          },
          {
            text: "Do NOT hack, crack, or exploit vulnerabilities",
            type: "bullet",
          },
          {
            text: "Do NOT test security without written permission",
            type: "bullet",
          },
          {
            text: "Do NOT access data not belonging to you",
            type: "bullet",
          },
        ],
      },
      {
        id: "platform-abuse",
        title: "Platform Abuse",
        content: "",
        items: [
          {
            text: "Do NOT overwhelm the platform with excessive queries designed to disrupt service",
            type: "bullet",
          },
          {
            text: "Do NOT intentionally cause performance degradation",
            type: "bullet",
          },
          {
            text: "Do NOT spam, flood, or bombard the platform",
            type: "bullet",
          },
          {
            text: "Do NOT use automated tools to scrape or extract data",
            type: "bullet",
          },
          {
            text: "Do NOT conduct denial-of-service attacks",
            type: "bullet",
          },
        ],
      },
      {
        id: "ip-violation",
        title: "Intellectual Property Violation",
        content: "",
        items: [
          {
            text: "Do NOT infringe copyright, trademark, or patent rights",
            type: "bullet",
          },
          {
            text: "Do NOT use third-party IP without permission",
            type: "bullet",
          },
          {
            text: "Do NOT plagiarize or improperly attribute",
            type: "bullet",
          },
          {
            text: "Do NOT misrepresent ownership of content",
            type: "bullet",
          },
        ],
      },
      {
        id: "deceptive-practices",
        title: "Deceptive Practices",
        content: "",
        items: [
          {
            text: "Do NOT misrepresent yourself or your organization",
            type: "bullet",
          },
          {
            text: "Do NOT create false accounts",
            type: "bullet",
          },
          {
            text: "Do NOT impersonate others",
            type: "bullet",
          },
          {
            text: "Do NOT use misleading information",
            type: "bullet",
          },
          {
            text: "Do NOT conduct phishing or social engineering",
            type: "bullet",
          },
        ],
      },
      {
        id: "harmful-content",
        title: "Harmful Content",
        content: "",
        items: [
          {
            text: "Do NOT upload content containing hate speech",
            type: "bullet",
          },
          {
            text: "Do NOT upload content promoting violence",
            type: "bullet",
          },
          {
            text: "Do NOT upload harassment or cyberbullying content",
            type: "bullet",
          },
          {
            text: "Do NOT upload content sexualizing minors",
            type: "bullet",
          },
          {
            text: "Do NOT upload content designed to harm others",
            type: "bullet",
          },
        ],
      },
      {
        id: "commercial-misuse",
        title: "Commercial Misuse",
        content: "",
        items: [
          {
            text: "Do NOT resell access to the Service",
            type: "bullet",
          },
          {
            text: "Do NOT offer the Service to others without authorization",
            type: "bullet",
          },
          {
            text: "Do NOT use for commercial purposes beyond your own business",
            type: "bullet",
          },
          {
            text: "Do NOT create competing service using our infrastructure",
            type: "bullet",
          },
          {
            text: "Do NOT use for third-party consulting without authorization",
            type: "bullet",
          },
        ],
      },
      {
        id: "regulatory-violation",
        title: "Regulatory/Compliance Violation",
        content: "",
        items: [
          {
            text: "Do NOT use for decisions regulated by law without proper advisors",
            type: "bullet",
          },
          {
            text: "Do NOT rely solely on our agents for regulated decisions",
            type: "bullet",
          },
          {
            text: "Do NOT claim our agents provide licensed advice",
            type: "bullet",
          },
          {
            text: "Do NOT use to make medical, legal, or financial decisions without professionals",
            type: "bullet",
          },
          {
            text: "Do NOT bypass required compliance procedures",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "7",
    title: "Intellectual Property Rights",
    content: "",
    subsections: [
      {
        id: "we-own",
        title: "We Own",
        content: "",
        items: [
          {
            text: "All platform code, design, and architecture",
            type: "bullet",
          },
          {
            text: "All agent logic and AI models",
            type: "bullet",
          },
          {
            text: "All algorithms and processes",
            type: "bullet",
          },
          {
            text: "All proprietary methods and techniques",
            type: "bullet",
          },
          {
            text: "All trademarks, logos, and branding",
            type: "bullet",
          },
          {
            text: "All documentation and materials",
            type: "bullet",
          },
        ],
      },
      {
        id: "your-rights",
        title: "Your Rights",
        content: "",
        items: [
          {
            text: "Limited license to use the Service for your personal strategic decisions",
            type: "bullet",
          },
          {
            text: "License terminates when your subscription ends",
            type: "bullet",
          },
          {
            text: "You may not sublicense, transfer, or share",
            type: "bullet",
          },
          {
            text: "You may not reverse-engineer or extract",
            type: "bullet",
          },
          {
            text: "You may not use commercially beyond your own organization",
            type: "bullet",
          },
        ],
      },
      {
        id: "no-warranty",
        title: "No Warranty of Accuracy",
        content: "Our agents:",
        items: [
          {
            text: "Provide analysis based on available data",
            type: "bullet",
          },
          {
            text: "May contain errors, omissions, or outdated information",
            type: "bullet",
          },
          {
            text: "Are not guaranteed to be accurate or complete",
            type: "bullet",
          },
          {
            text: "Should be independently verified",
            type: "bullet",
          },
          {
            text: "Should not be sole basis for important decisions",
            type: "bullet",
          },
        ],
      },
      {
        id: "patent-notice",
        title: "Patent/IP Notice",
        content: "If you believe we infringe your IP:",
        items: [
          {
            text: 'Email: info@aiaugmented.io with "IP Infringement Notice"',
            type: "bullet",
          },
          {
            text: "Include: specific claim, evidence, your contact info",
            type: "bullet",
          },
          {
            text: "We respond within 10 business days",
            type: "bullet",
          },
          {
            text: "We may remove allegedly infringing content",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "8",
    title: "User Content Ownership",
    content: "",
    subsections: [
      {
        id: "what-we-dont-own",
        title: "What We Don't Own",
        content: "",
        items: [
          {
            text: "Your strategic inputs and questions",
            type: "bullet",
          },
          {
            text: "Your Decision Canvas and analysis",
            type: "bullet",
          },
          {
            text: "Your uploaded documents and files",
            type: "bullet",
          },
          {
            text: "Your conversation history with agents",
            type: "bullet",
          },
          {
            text: "Your generated reports and outputs",
            type: "bullet",
          },
        ],
      },
      {
        id: "what-you-own",
        title: "What You Own",
        content: "",
        items: [
          {
            text: "You retain full ownership of all Strategic Content",
            type: "bullet",
          },
          {
            text: "You can export, download, or delete anytime",
            type: "bullet",
          },
          {
            text: "You can use outputs in any way you choose",
            type: "bullet",
          },
          {
            text: "You can share outputs with others",
            type: "bullet",
          },
          {
            text: "You grant us no ownership rights",
            type: "bullet",
          },
        ],
      },
      {
        id: "processing-content",
        title: "Processing Your Content",
        content: "",
        items: [
          {
            text: "We process it solely to provide the Service",
            type: "bullet",
          },
          {
            text: "We maintain it in your account",
            type: "bullet",
          },
          {
            text: "We use it to serve your requests",
            type: "bullet",
          },
          {
            text: "We don't train models on your specific content",
            type: "bullet",
          },
          {
            text: "We don't share it with third parties (except as disclosed in Privacy Policy)",
            type: "bullet",
          },
        ],
      },
      {
        id: "pattern-learning",
        title: "Pattern Learning (Tier 2 - Optional)",
        content: "",
        items: [
          {
            text: "We analyze anonymized usage patterns",
            type: "bullet",
          },
          {
            text: "You consent by using the Service",
            type: "bullet",
          },
          {
            text: "You can opt-out at any time",
            type: "bullet",
          },
          {
            text: "Your specific content is never included",
            type: "bullet",
          },
          {
            text: "You benefit from smarter agents",
            type: "bullet",
          },
        ],
      },
      {
        id: "legal-requests",
        title: "Legal Requests",
        content: "",
        items: [
          {
            text: "If required by law, we may disclose your content",
            type: "bullet",
          },
          {
            text: "We'll notify you first (when legally permitted)",
            type: "bullet",
          },
          {
            text: "You have right to object or challenge",
            type: "bullet",
          },
        ],
      },
      {
        id: "upon-termination",
        title: "Upon Termination",
        content: "",
        items: [
          {
            label: "Your Responsibility:",
            text: "",
            items: [
              {
                text: "Export your Strategic Content within 30 days",
                type: "bullet",
              },
              {
                text: "After 30 days, content may be deleted per retention schedule",
                type: "bullet",
              },
            ],
          },
          {
            label: "We Will:",
            text: "",
            items: [
              {
                text: "Retain content per Privacy Policy (Section 22)",
                type: "bullet",
              },
              {
                text: "Honor your deletion requests",
                type: "bullet",
              },
              {
                text: "Provide deletion certificate if requested",
                type: "bullet",
              },
              {
                text: "Keep anonymized patterns for improvement",
                type: "bullet",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "9",
    title: "Your Use of Our Agents",
    content: "",
    subsections: [
      {
        id: "what-agents-do",
        title: "What Agents Do",
        content: "Our specialized agents:",
        items: [
          {
            text: "Market Compass: Analyzes market trends and competitive landscape",
            type: "bullet",
          },
          {
            text: "Financial Guardian: Evaluates financial implications and scenarios",
            type: "bullet",
          },
          {
            text: "Strategy Analyst: Tests strategic options against frameworks",
            type: "bullet",
          },
          {
            text: "People Advisor: Assesses organizational and personnel impacts",
            type: "bullet",
          },
          {
            text: "Action Architect: Plans implementation and execution",
            type: "bullet",
          },
        ],
      },
      {
        id: "agents-are-not",
        title: "Agents Are NOT",
        content: "",
        items: [
          {
            text: "Guaranteed accurate",
            type: "bullet",
          },
          {
            text: "Real-time data sources (may have delays)",
            type: "bullet",
          },
          {
            text: "Substitutes for professional advisors",
            type: "bullet",
          },
          {
            text: "Legal, financial, or medical experts",
            type: "bullet",
          },
          {
            text: "Replacement for human judgment",
            type: "bullet",
          },
        ],
      },
      {
        id: "agents-can",
        title: "Agents CAN",
        content: "",
        items: [
          {
            text: "Synthesize available information",
            type: "bullet",
          },
          {
            text: "Test decisions from multiple angles",
            type: "bullet",
          },
          {
            text: "Identify potential blindspots",
            type: "bullet",
          },
          {
            text: "Organize your thinking",
            type: "bullet",
          },
          {
            text: "Suggest frameworks and considerations",
            type: "bullet",
          },
        ],
      },
      {
        id: "verification-responsibility",
        title: "Verification Responsibility",
        content: "",
        items: [
          {
            label: "You Must:",
            text: "",
            items: [
              {
                text: "Independently verify all agent outputs",
                type: "bullet",
              },
              {
                text: "Cross-check data from primary sources",
                type: "bullet",
              },
              {
                text: "Consult professionals for regulated decisions",
                type: "bullet",
              },
              {
                text: "Use your judgment to evaluate recommendations",
                type: "bullet",
              },
              {
                text: "Make your own final decisions",
                type: "bullet",
              },
            ],
          },
          {
            label: "We Will NOT:",
            text: "",
            items: [
              {
                text: "Guarantee accuracy of any analysis",
                type: "bullet",
              },
              {
                text: "Compensate for decisions based on agent output",
                type: "bullet",
              },
              {
                text: "Provide liability protection if analysis is wrong",
                type: "bullet",
              },
              {
                text: "Accept responsibility for decision outcomes",
                type: "bullet",
              },
            ],
          },
        ],
      },
      {
        id: "data-quality",
        title: "Data Quality",
        content: "",
        items: [
          {
            text: "Agents rely on data quality from external sources",
            type: "bullet",
          },
          {
            text: "We're not responsible for third-party data accuracy",
            type: "bullet",
          },
          {
            text: "Missing or incomplete data affects analysis quality",
            type: "bullet",
          },
          {
            text: "You should verify external data independently",
            type: "bullet",
          },
          {
            text: "Recent events may not be immediately reflected",
            type: "bullet",
          },
        ],
      },
      {
        id: "updates-changes",
        title: "Updates and Changes",
        content: "",
        items: [
          {
            text: "Agent logic and algorithms change over time",
            type: "bullet",
          },
          {
            text: "Same question may receive different responses",
            type: "bullet",
          },
          {
            text: "We continuously improve agents based on patterns",
            type: "bullet",
          },
          {
            text: "Changes are not guaranteed to improve accuracy",
            type: "bullet",
          },
          {
            text: "You should re-verify if decisions were made on old analysis",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "10",
    title: "Limitation of Liability and Disclaimers",
    content: "",
    subsections: [
      {
        id: "disclaimer-warranties",
        title: "DISCLAIMER OF WARRANTIES",
        content: 'The Service is provided "AS-IS" and "AS-AVAILABLE"',
        items: [
          {
            label: "We make NO warranties, express or implied, regarding:",
            text: "",
            items: [
              {
                text: "Accuracy or completeness of agent analysis",
                type: "bullet",
              },
              {
                text: "Merchantability or fitness for a particular purpose",
                type: "bullet",
              },
              {
                text: "Non-infringement of third-party rights",
                type: "bullet",
              },
              {
                text: "Reliability or availability of the Service",
                type: "bullet",
              },
              {
                text: "Security or data protection",
                type: "bullet",
              },
            ],
          },
        ],
        afterContent: "You use the Service at your own risk.",
      },
      {
        id: "limitation-liability",
        title: "LIMITATION OF LIABILITY",
        content: "We are NOT liable for:",
      },
      {
        id: "direct-damages",
        title: "Direct Damages",
        content: "",
        items: [
          {
            text: "Lost profits or revenue",
            type: "bullet",
          },
          {
            text: "Lost data or access",
            type: "bullet",
          },
          {
            text: "Business interruption",
            type: "bullet",
          },
          {
            text: "Loss of competitive advantage",
            type: "bullet",
          },
          {
            text: "Reputational harm",
            type: "bullet",
          },
        ],
      },
      {
        id: "indirect-damages",
        title: "Indirect Damages",
        content: "",
        items: [
          {
            text: "Consequential damages",
            type: "bullet",
          },
          {
            text: "Incidental damages",
            type: "bullet",
          },
          {
            text: "Special damages",
            type: "bullet",
          },
          {
            text: "Punitive damages",
            type: "bullet",
          },
          {
            text: "Any damages arising from your use",
            type: "bullet",
          },
        ],
      },
      {
        id: "exceptions",
        title: "Exceptions (Where Applicable by Law)",
        content: "",
        items: [
          {
            text: "Gross negligence or willful misconduct",
            type: "bullet",
          },
          {
            text: "Data breaches due to our security negligence",
            type: "bullet",
          },
          {
            text: "Violations of privacy laws through our actions",
            type: "bullet",
          },
          {
            text: "Fraud or illegal conduct",
            type: "bullet",
          },
        ],
      },
      {
        id: "liability-caps",
        title: "Liability Caps",
        content: "Our maximum liability to you is:",
        items: [
          {
            text: "The amount you paid in the 12 months preceding the claim",
            type: "bullet",
          },
          {
            text: "For free tier users: $0 (no liability)",
            type: "bullet",
          },
          {
            text: "For paid users: maximum 12 months of subscription fees",
            type: "bullet",
          },
        ],
        afterContent:
          "This applies even if we've been advised of possibility of damages, the limit seems unreasonable, or any remedy fails in its essential purpose.",
      },
      {
        id: "accept-limitations",
        title: "You Accept These Limitations",
        content: "By using the Service, you:",
        items: [
          {
            text: "Accept these liability limitations",
            type: "bullet",
          },
          {
            text: "Acknowledge they are reasonable",
            type: "bullet",
          },
          {
            text: "Agree to use only at your own risk",
            type: "bullet",
          },
          {
            text: "Will not hold us liable for any loss or damage",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "11",
    title: "Indemnification",
    content:
      "You agree to indemnify, defend, and hold harmless AI-Augmented from:",
    subsections: [
      {
        id: "ip-infringement-claims",
        title: "IP Infringement Claims",
        content: "",
        items: [
          {
            text: "Claims that your content infringes third-party IP",
            type: "bullet",
          },
          {
            text: "Claims of copyright, trademark, or patent violation",
            type: "bullet",
          },
          {
            text: "Claims of misappropriation based on your content",
            type: "bullet",
          },
        ],
      },
      {
        id: "your-violations",
        title: "Your Violations",
        content: "",
        items: [
          {
            text: "Your violation of these Terms",
            type: "bullet",
          },
          {
            text: "Your violation of any law or regulation",
            type: "bullet",
          },
          {
            text: "Your violation of third-party rights",
            type: "bullet",
          },
          {
            text: "Your violation of your organization's policies",
            type: "bullet",
          },
        ],
      },
      {
        id: "your-data-breaches",
        title: "Your Data Breaches",
        content: "",
        items: [
          {
            text: "Claims arising from your upload of third-party data without authorization",
            type: "bullet",
          },
          {
            text: "Claims from data you had no right to share",
            type: "bullet",
          },
          {
            text: "Claims from data protected by NDA",
            type: "bullet",
          },
        ],
      },
      {
        id: "your-illegal-activity",
        title: "Your Illegal Activity",
        content: "",
        items: [
          {
            text: "Claims arising from your illegal use",
            type: "bullet",
          },
          {
            text: "Claims from fraud or deception you committed",
            type: "bullet",
          },
          {
            text: "Claims from regulatory violations you caused",
            type: "bullet",
          },
        ],
      },
      {
        id: "your-decisions",
        title: "Your Decisions",
        content: "",
        items: [
          {
            text: "Claims arising from decisions you made using the Service",
            type: "bullet",
          },
          {
            text: "Claims from financial losses based on our analysis",
            type: "bullet",
          },
          {
            text: "Claims from outcomes of decisions you implemented",
            type: "bullet",
          },
          {
            text: "Claims that you relied solely on our agents",
            type: "bullet",
          },
        ],
      },
      {
        id: "indemnification-process",
        title: "Indemnification Process",
        content: "",
        items: [
          {
            text: "Notice - You're notified of claim within 10 days",
            type: "bullet",
          },
          {
            text: "Defense - You assume defense of the claim",
            type: "bullet",
          },
          {
            text: "Control - We approve settlement terms",
            type: "bullet",
          },
          {
            text: "Cooperation - You keep us informed of progress",
            type: "bullet",
          },
          {
            text: "Resolution - You pay any judgment or settlement",
            type: "bullet",
          },
        ],
      },
      {
        id: "our-reserved-rights",
        title: "We Reserve Right To",
        content: "",
        items: [
          {
            text: "Participate in defense with our counsel",
            type: "bullet",
          },
          {
            text: "Approve settlement terms (not to be unreasonably withheld)",
            type: "bullet",
          },
          {
            text: "Retain separate counsel at your expense if conflict exists",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "12",
    title: "Service Availability and Support",
    content: "",
    subsections: [
      {
        id: "uptime-commitment",
        title: "Uptime Commitment",
        content: "We commit to 99.5% uptime measured monthly.",
      },
      {
        id: "uptime-definition",
        title: "Uptime Definition",
        content: "",
        items: [
          {
            text: "Service is accessible to authenticated users",
            type: "bullet",
          },
          {
            text: "Core agent functionality is operational",
            type: "bullet",
          },
          {
            text: "Data is retrievable from your account",
            type: "bullet",
          },
        ],
      },
      {
        id: "excluded-downtime",
        title: "Excluded Downtime",
        content: "",
        items: [
          {
            text: "Scheduled maintenance (4 hours/month, with notice)",
            type: "bullet",
          },
          {
            text: "Force majeure events",
            type: "bullet",
          },
          {
            text: "Third-party provider outages beyond our control",
            type: "bullet",
          },
          {
            text: "User-caused outages (misuse, attacks)",
            type: "bullet",
          },
        ],
      },
      {
        id: "service-maintenance",
        title: "Service Maintenance",
        content: "",
        items: [
          {
            label: "We perform:",
            text: "",
            items: [
              {
                text: "Regular security updates",
                type: "bullet",
              },
              {
                text: "Performance optimization",
                type: "bullet",
              },
              {
                text: "Infrastructure maintenance",
                type: "bullet",
              },
              {
                text: "Database optimization",
                type: "bullet",
              },
            ],
          },
          {
            label: "We notify you:",
            text: "",
            items: [
              {
                text: "7 days in advance for planned maintenance",
                type: "bullet",
              },
              {
                text: "Immediately for emergency maintenance",
                type: "bullet",
              },
              {
                text: "Via email and platform banner",
                type: "bullet",
              },
            ],
          },
        ],
      },
      {
        id: "maintenance-windows",
        title: "Maintenance Windows",
        content: "",
        items: [
          {
            text: "Typically scheduled during low-usage hours",
            type: "bullet",
          },
          {
            text: "Minimized to reduce impact",
            type: "bullet",
          },
          {
            text: "Emergency maintenance may happen anytime",
            type: "bullet",
          },
          {
            text: "Duration typically under 4 hours",
            type: "bullet",
          },
        ],
      },
      {
        id: "no-liability-downtime",
        title: "No Liability for Downtime",
        content: "We're not liable for:",
        items: [
          {
            text: "Loss of data or access during outages",
            type: "bullet",
          },
          {
            text: "Missed deadlines due to downtime",
            type: "bullet",
          },
          {
            text: "Business losses from unavailability",
            type: "bullet",
          },
          {
            text: "Any damages from service interruptions",
            type: "bullet",
          },
        ],
      },
      {
        id: "maximum-remedy",
        title: "Maximum Remedy",
        content: "",
        items: [
          {
            text: "Service credit up to 1 month subscription",
            type: "bullet",
          },
          {
            text: "Prorated credit for uptime below 99.5%",
            type: "bullet",
          },
          {
            text: "Sole remedy for availability issues",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "13",
    title: "End-of-Life and Service Discontinuation",
    content: "In the unlikely event we discontinue the Service, we commit to:",
    subsections: [
      {
        id: "discontinuation-notification",
        title: "Notification",
        content: "",
        items: [
          {
            text: "90 days advance notice via email",
            type: "bullet",
          },
          {
            text: "Notice also posted on website and in-app",
            type: "bullet",
          },
          {
            text: "Clear explanation of reason (optional)",
            type: "bullet",
          },
          {
            text: "Alternative solutions (if any) recommended",
            type: "bullet",
          },
        ],
      },
      {
        id: "data-access-export",
        title: "Data Access and Export",
        content: "During the 90-day wind-down period:",
        items: [
          {
            text: "Your account remains fully functional",
            type: "bullet",
          },
          {
            text: "You can export all Strategic Content",
            type: "bullet",
          },
          {
            text: "Export in standard formats (CSV, JSON, PDF, ZIP)",
            type: "bullet",
          },
          {
            text: "No charge for exports during wind-down",
            type: "bullet",
          },
          {
            text: "We'll assist with technical issues",
            type: "bullet",
          },
        ],
      },
      {
        id: "wind-down-timeline",
        title: "Timeline",
        content: "",
        items: [
          {
            text: "Days 1-30: Full access, encourage exports",
            type: "bullet",
          },
          {
            text: "Days 31-60: Full access, final reminder emails",
            type: "bullet",
          },
          {
            text: "Days 61-90: Full access, final export window",
            type: "bullet",
          },
          {
            text: "Day 91: Service shutdown, data may be deleted",
            type: "bullet",
          },
        ],
      },
      {
        id: "refunds",
        title: "Refunds",
        content: "If we discontinue:",
        items: [
          {
            text: "Prorated refund for unused portion of current month",
            type: "bullet",
          },
          {
            text: "Calculate: (Days remaining / Days in month) × monthly fee",
            type: "bullet",
          },
          {
            text: "Refunds processed within 30 days",
            type: "bullet",
          },
          {
            text: "Applied to original payment method",
            type: "bullet",
          },
        ],
      },
      {
        id: "migration-assistance",
        title: "Migration Assistance",
        content: "",
        items: [
          {
            label: "We will:",
            text: "",
            items: [
              {
                text: "Provide technical documentation for data migration",
                type: "bullet",
              },
              {
                text: "Assist with export troubleshooting (2-week support window)",
                type: "bullet",
              },
              {
                text: "Answer questions about data formats",
                type: "bullet",
              },
              {
                text: "NOT guarantee compatibility with other services",
                type: "bullet",
              },
            ],
          },
          {
            label: "We Will NOT:",
            text: "",
            items: [
              {
                text: "Provide data conversion services (user's responsibility)",
                type: "bullet",
              },
              {
                text: "Pay for migration to competitor services",
                type: "bullet",
              },
              {
                text: "Guarantee timeline for export completion",
                type: "bullet",
              },
              {
                text: "Support other services' import processes",
                type: "bullet",
              },
            ],
          },
        ],
      },
      {
        id: "catastrophic-failure",
        title: "Exceptional Circumstances",
        content:
          "If We Face Catastrophic Failure (bankruptcy, major security breach, etc.):",
        items: [
          {
            text: "We'll notify users as soon as legally possible",
            type: "bullet",
          },
          {
            text: "Data will be deleted per Privacy Policy retention schedule",
            type: "bullet",
          },
          {
            text: "No refunds possible if assets exhausted",
            type: "bullet",
          },
          {
            text: "Users indemnify us for data loss",
            type: "bullet",
          },
        ],
      },
      {
        id: "your-discontinuation-responsibility",
        title: "Your Responsibility",
        content: "",
        items: [
          {
            label: "You should:",
            text: "",
            items: [
              {
                text: "Regularly export your Strategic Content",
                type: "bullet",
              },
              {
                text: "Maintain your own backups",
                type: "bullet",
              },
              {
                text: "Don't rely solely on our backups",
                type: "bullet",
              },
              {
                text: "Plan for service discontinuation risk",
                type: "bullet",
              },
            ],
          },
          {
            label: "We are not liable for:",
            text: "",
            items: [
              {
                text: "Data loss during wind-down period",
                type: "bullet",
              },
              {
                text: "Inability to export if export fails",
                type: "bullet",
              },
              {
                text: "Loss of access if wind-down date missed",
                type: "bullet",
              },
              {
                text: "Any damages from service discontinuation",
                type: "bullet",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "14",
    title: "Rate Limiting and Usage Restrictions",
    content:
      "To ensure fair access for all users, we enforce the following limits:",
    subsections: [
      {
        id: "account-usage-limits",
        title: "Account Usage Limits",
        content: "",
        table: {
          headers: ["Resource", "Limit", "Exceeded Behavior"],
          rows: [
            ["File Upload", "100MB per file", "Rejected with error message"],
            [
              "Total Storage",
              "50GB per account",
              "Warning at 80%; blocked at 100%",
            ],
            ["Projects/Canvas", "Unlimited", "No limit"],
            [
              "Agents per Query",
              "All 5 agents",
              "Can't disable individual agents",
            ],
            [
              "Simultaneous Queries",
              "5 concurrent",
              "Additional queries queued",
            ],
            [
              "Query Rate",
              "60 queries/hour",
              "Additional requests throttled (wait time)",
            ],
            [
              "Export Frequency",
              "10 exports/day",
              "Subsequent requests throttled",
            ],
            [
              "File Count",
              "1,000 files per account",
              "Warning at 900; blocks new uploads at 1,000",
            ],
            ["Reports Generated", "Unlimited", "No limit"],
            [
              "API Calls",
              "100 requests/minute",
              "429 (Too Many Requests) response",
            ],
          ],
        },
      },
      {
        id: "file-upload-exceeded",
        title: "File Upload Exceeded",
        content: "",
        items: [
          {
            text: "Immediate rejection",
            type: "bullet",
          },
          {
            text: 'Error message: "File exceeds 100MB limit"',
            type: "bullet",
          },
          {
            text: "Suggestions: Compress, split into smaller files, contact support",
            type: "bullet",
          },
        ],
      },
      {
        id: "storage-exceeded",
        title: "Storage Exceeded",
        content: "",
        items: [
          {
            text: "At 80%: Warning email sent",
            type: "bullet",
          },
          {
            text: "At 100%: New uploads blocked; error message displayed",
            type: "bullet",
          },
          {
            text: "To resume: Delete old files or request upgrade (if available)",
            type: "bullet",
          },
        ],
      },
      {
        id: "query-rate-exceeded",
        title: "Query Rate Exceeded",
        content: "",
        items: [
          {
            text: "Queries automatically queued",
            type: "bullet",
          },
          {
            text: "Wait time shown to user",
            type: "bullet",
          },
          {
            text: "Processed in order (FIFO - First In, First Out)",
            type: "bullet",
          },
          {
            text: "Typical wait: 5-60 seconds depending on queue",
            type: "bullet",
          },
        ],
      },
      {
        id: "api-rate-limit-exceeded",
        title: "API Rate Limit Exceeded",
        content: "",
        items: [
          {
            text: "HTTP 429 response returned",
            type: "bullet",
          },
          {
            text: "Retry-After header indicates wait time",
            type: "bullet",
          },
          {
            text: "Automatic retry recommended (exponential backoff)",
            type: "bullet",
          },
          {
            text: "Email alert after 3 consecutive rate limit hits",
            type: "bullet",
          },
        ],
      },
      {
        id: "monitoring-alerts",
        title: "Monitoring and Alerts",
        content: "We monitor for:",
        items: [
          {
            text: "Unusual query patterns (possible automation)",
            type: "bullet",
          },
          {
            text: "Bulk export attempts (possible data scraping)",
            type: "bullet",
          },
          {
            text: "Rapid file uploads (possible data dump)",
            type: "bullet",
          },
          {
            text: "API pattern analysis (possible abuse)",
            type: "bullet",
          },
        ],
      },
      {
        id: "abuse-detected",
        title: "If Abuse Detected",
        content: "",
        items: [
          {
            text: "Account temporarily rate-limited",
            type: "bullet",
          },
          {
            text: "Email notification sent",
            type: "bullet",
          },
          {
            text: "Review of activity conducted",
            type: "bullet",
          },
          {
            text: "If intentional abuse: account suspension (Section 14)",
            type: "bullet",
          },
        ],
      },
      {
        id: "upgrading-limits",
        title: "Upgrading Limits",
        content: "",
        items: [
          {
            label: "Currently:",
            text: "",
            items: [
              {
                text: "No higher tiers available during Beta",
                type: "bullet",
              },
              {
                text: "All users have same limits",
                type: "bullet",
              },
            ],
          },
          {
            label: "In Future:",
            text: "",
            items: [
              {
                text: "Enterprise plans may have higher limits",
                type: "bullet",
              },
              {
                text: "Contact info@aiaugmented.io for enterprise options",
                type: "bullet",
              },
              {
                text: "Custom arrangements may be negotiable",
                type: "bullet",
              },
            ],
          },
        ],
      },
      {
        id: "enterprise-rate-limits",
        title: "Enterprise Rate Limits (If Available)",
        content: "For enterprise customers, limits may be negotiated:",
        items: [
          {
            text: "Higher storage (100GB-1TB)",
            type: "bullet",
          },
          {
            text: "Higher query rates (unlimited)",
            type: "bullet",
          },
          {
            text: "Higher API limits (1,000 requests/minute)",
            type: "bullet",
          },
          {
            text: "Terms: Custom DPA, SLA agreements",
            type: "bullet",
          },
        ],
      },
      {
        id: "your-rate-limit-responsibility",
        title: "Your Responsibility",
        content: "You agree to:",
        items: [
          {
            text: "Not circumvent rate limits",
            type: "bullet",
          },
          {
            text: "Not use automation to bypass limits",
            type: "bullet",
          },
          {
            text: "Not attempt to exploit API",
            type: "bullet",
          },
          {
            text: "Not use for purposes outside platform design",
            type: "bullet",
          },
        ],
      },
      {
        id: "rate-limit-enforcement",
        title: "Enforcement",
        content: "If we detect circumvention:",
        items: [
          {
            text: "Automated throttling applies",
            type: "bullet",
          },
          {
            text: "Account may be flagged for review",
            type: "bullet",
          },
          {
            text: "Repeated attempts: suspension/termination",
            type: "bullet",
          },
          {
            text: "We may revoke API access",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "15",
    title: "Beta Status and Early-Stage Features",
    content: "",
    subsections: [
      {
        id: "acknowledge-beta",
        title: "You Acknowledge This Service Is In Beta",
        content:
          "AI-Augmented is in active development. By using the Service, you accept:",
      },
      {
        id: "what-beta-means",
        title: "What Beta Means",
        content: "",
        items: [
          {
            text: "Features may change without notice",
            type: "bullet",
          },
          {
            text: "Agents may be significantly improved or altered",
            type: "bullet",
          },
          {
            text: "Behavior of agents may change between updates",
            type: "bullet",
          },
          {
            text: "Data loss is possible (though unlikely)",
            type: "bullet",
          },
          {
            text: "Performance may vary",
            type: "bullet",
          },
          {
            text: "Bugs and errors will occur",
            type: "bullet",
          },
          {
            text: "API may not be stable",
            type: "bullet",
          },
          {
            text: "No backwards compatibility guaranteed",
            type: "bullet",
          },
        ],
      },
      {
        id: "agent-behavior-changes",
        title: "Agent Behavior",
        content: "",
        items: [
          {
            text: "Agents continuously improve",
            type: "bullet",
          },
          {
            text: "Same question may produce different output",
            type: "bullet",
          },
          {
            text: "Agent priorities may shift",
            type: "bullet",
          },
          {
            text: "New analysis frameworks may be added",
            type: "bullet",
          },
          {
            text: "Old analysis methods may be deprecated",
            type: "bullet",
          },
        ],
      },
      {
        id: "platform-features-changes",
        title: "Platform Features",
        content: "",
        items: [
          {
            text: "UI/UX may change dramatically",
            type: "bullet",
          },
          {
            text: "Features may be added, removed, or modified",
            type: "bullet",
          },
          {
            text: "Decision Canvas may be redesigned",
            type: "bullet",
          },
          {
            text: "Report format may change",
            type: "bullet",
          },
          {
            text: "Export formats may change",
            type: "bullet",
          },
        ],
      },
      {
        id: "api-changes",
        title: "API (If Available)",
        content: "",
        items: [
          {
            text: "API endpoints may be modified",
            type: "bullet",
          },
          {
            text: "Response formats may change",
            type: "bullet",
          },
          {
            text: "Authentication methods may change",
            type: "bullet",
          },
          {
            text: "Rate limits may be adjusted",
            type: "bullet",
          },
          {
            text: "Deprecation notice: minimum 30 days",
            type: "bullet",
          },
        ],
      },
      {
        id: "data-backups-beta",
        title: "Data and Backups",
        content: "During Beta:",
        items: [
          {
            text: "Backups not guaranteed",
            type: "bullet",
          },
          {
            text: "Data loss possible (though we work to prevent it)",
            type: "bullet",
          },
          {
            text: "Recovery SLA: best-effort, not guaranteed",
            type: "bullet",
          },
          {
            text: "You should export regularly",
            type: "bullet",
          },
          {
            text: "You maintain own backups",
            type: "bullet",
          },
        ],
      },
      {
        id: "no-warranty-beta",
        title: "No Warranty During Beta",
        content: "",
        items: [
          {
            text: 'Service provided "AS-IS"',
            type: "bullet",
          },
          {
            text: "Continued development: not guaranteed",
            type: "bullet",
          },
          {
            text: "Feature completion: not guaranteed",
            type: "bullet",
          },
          {
            text: "Performance stability: not guaranteed",
            type: "bullet",
          },
          {
            text: "Security: we maintain standards but issues may emerge",
            type: "bullet",
          },
        ],
      },
      {
        id: "beta-feedback",
        title: "Beta Feedback",
        content: "",
        items: [
          {
            text: "We welcome bug reports and suggestions",
            type: "bullet",
          },
          {
            text: "Report to: info@aiaugmented.io",
            type: "bullet",
          },
          {
            text: "Include: specific issue, steps to reproduce, expected vs. actual behavior",
            type: "bullet",
          },
          {
            text: "Response time: 48 hours for critical bugs",
            type: "bullet",
          },
          {
            text: "No compensation for testing",
            type: "bullet",
          },
        ],
      },
      {
        id: "exit-beta",
        title: "Exit From Beta",
        content: "When we exit Beta:",
        items: [
          {
            text: "Service stability guaranteed (per Section 12 SLA)",
            type: "bullet",
          },
          {
            text: "Agent behavior will stabilize",
            type: "bullet",
          },
          {
            text: 'API becomes "stable"',
            type: "bullet",
          },
          {
            text: "30-day deprecation notice for changes",
            type: "bullet",
          },
          {
            text: "This ToS may be updated",
            type: "bullet",
          },
        ],
      },
      {
        id: "waive-beta-claims",
        title: "You Waive Claims Related to Beta Status",
        content: "You will NOT:",
        items: [
          {
            text: "Claim damages for data loss during Beta",
            type: "bullet",
          },
          {
            text: "Sue for feature changes",
            type: "bullet",
          },
          {
            text: "Demand compensation for bugs",
            type: "bullet",
          },
          {
            text: "Claim breach if agents behave unexpectedly",
            type: "bullet",
          },
          {
            text: "Require rollback to previous agent version",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "16",
    title: "Competitive Use and Acceptable Restrictions",
    content: "You Cannot Use This Service For:",
    subsections: [
      {
        id: "model-training-ai",
        title: "Model Training and AI Development",
        content: "",
        items: [
          {
            text: "You may NOT extract our agent outputs in bulk to train your own models",
            type: "bullet",
          },
          {
            text: "You may NOT use this Service to reverse-engineer our agents",
            type: "bullet",
          },
          {
            text: "You may NOT collect outputs systematically to build competing products",
            type: "bullet",
          },
          {
            text: "You may NOT use outputs to develop derivative AI systems",
            type: "bullet",
          },
          {
            text: "You may NOT analyze our agent behavior to create clones",
            type: "bullet",
          },
        ],
      },
      {
        id: "specific-prohibitions",
        title: "Specific Prohibitions",
        content: "",
        table: {
          headers: ["Activity", "Allowed?", "Why"],
          rows: [
            ["Use agents for your own decisions", "✅ Yes", "Intended use"],
            ["Get analysis for one decision", "✅ Yes", "Intended use"],
            ["Export a report", "✅ Yes", "Your content"],
            ["Regular competitive benchmark", "✅ Yes", "Legitimate use"],
            [
              "Extract 1,000 outputs/day systematically",
              "❌ No",
              "Bulk extraction",
            ],
            ["Automate queries to collect datasets", "❌ No", "Training data"],
            ["Reverse-engineer agent logic", "❌ No", "IP theft"],
            [
              "Publish agent vulnerabilities",
              "⚠️ Ask Us",
              "Coordinated disclosure needed",
            ],
            ["Resell access to other companies", "❌ No", "License violation"],
            ["Use to build competing service", "❌ No", "IP theft"],
          ],
        },
      },
      {
        id: "what-you-can-do",
        title: "What You CAN Do",
        content: "",
        items: [
          {
            text: "Use for your own strategic decisions ✅",
            type: "bullet",
          },
          {
            text: "Export individual reports ✅",
            type: "bullet",
          },
          {
            text: "Share reports with colleagues ✅",
            type: "bullet",
          },
          {
            text: 'Publish review/comparison ("I tested this vs. ChatGPT and found...") ✅',
            type: "bullet",
          },
          {
            text: "Cite us in research ✅",
            type: "bullet",
          },
          {
            text: "Benchmark performance (limited, transparent) ✅",
            type: "bullet",
          },
          {
            text: "Provide feedback on platform ✅",
            type: "bullet",
          },
        ],
      },
      {
        id: "what-you-cannot-do",
        title: "What You CANNOT Do",
        content: "",
        items: [
          {
            text: "Bulk extraction: >100 queries/day with intent to collect data",
            type: "bullet",
          },
          {
            text: "Automation: Scripts, bots, or tools to bypass our UI",
            type: "bullet",
          },
          {
            text: "Scraping: Automated extraction of outputs",
            type: "bullet",
          },
          {
            text: "Reverse engineering: Attempting to understand agent architecture",
            type: "bullet",
          },
          {
            text: "Cloning: Creating similar service based on our outputs",
            type: "bullet",
          },
          {
            text: "Competing use: Building product that competes with us using our platform",
            type: "bullet",
          },
          {
            text: "Reselling: Offering access to others",
            type: "bullet",
          },
          {
            text: "Undisclosed comparison: Publishing internal tests claiming to represent our capabilities",
            type: "bullet",
          },
        ],
      },
      {
        id: "detection-enforcement",
        title: "Detection and Enforcement",
        content: "We monitor for:",
        items: [
          {
            text: "Unusual query patterns (>60 queries/hour, consistently)",
            type: "bullet",
          },
          {
            text: "Automated API calls (same prompt repeated)",
            type: "bullet",
          },
          {
            text: "Bulk exports (multiple gigabytes in short period)",
            type: "bullet",
          },
          {
            text: "Reverse-engineering attempts (specific input patterns)",
            type: "bullet",
          },
          {
            text: "Competitor platform scraping (identifiable patterns)",
            type: "bullet",
          },
        ],
      },
      {
        id: "violation-detected",
        title: "If Violation Detected",
        content: "",
        items: [
          {
            text: "Automated throttling applied",
            type: "bullet",
          },
          {
            text: "Email notification sent explaining suspected violation",
            type: "bullet",
          },
          {
            text: "10-day cure period to cease activity",
            type: "bullet",
          },
          {
            text: "If continued: Account suspension",
            type: "bullet",
          },
          {
            text: "If severe/repeated: Account termination + potential legal action",
            type: "bullet",
          },
        ],
      },
      {
        id: "legal-recourse",
        title: "Legal Recourse",
        content: "If you violate competitive use terms:",
        items: [
          {
            text: "We may seek injunctive relief",
            type: "bullet",
          },
          {
            text: "We may pursue copyright/trade secret claims",
            type: "bullet",
          },
          {
            text: "You indemnify us for enforcement costs",
            type: "bullet",
          },
          {
            text: "You waive defense that terms were unclear",
            type: "bullet",
          },
        ],
      },
      {
        id: "researcher-exception",
        title: "Researcher Exception",
        content: "",
        items: [
          {
            label: "Academic/Research Use:",
            text: "",
            items: [
              {
                text: "Limited competitive analysis allowed for published research",
                type: "bullet",
              },
              {
                text: "Must cite us properly",
                type: "bullet",
              },
              {
                text: "Results must be honestly represented",
                type: "bullet",
              },
              {
                text: "Not-for-profit use preferred",
                type: "bullet",
              },
              {
                text: "Contact us: info@aiaugmented.io for formal research agreement",
                type: "bullet",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "17",
    title: "Support and Response SLAs",
    content: "",
    subsections: [
      {
        id: "support-availability",
        title: "Support Availability",
        content: "",
        items: [
          {
            text: "Email: info@aiaugmented.io",
            type: "bullet",
          },
          {
            text: "Support hours: Monday-Friday, 9am-5pm PT",
            type: "bullet",
          },
          {
            text: "Response times: Per severity below",
            type: "bullet",
          },
          {
            text: "Holidays: US federal holidays + major international holidays",
            type: "bullet",
          },
          {
            text: "Emergency support: For critical production issues",
            type: "bullet",
          },
        ],
      },
      {
        id: "support-severity-levels",
        title: "Support Severity Levels",
        content: "",
        table: {
          headers: ["Severity", "Definition", "Response SLA", "Resolution SLA"],
          rows: [
            [
              "Critical",
              "Service completely down; data loss; security breach",
              "1 hour",
              "4 hours (best-effort)",
            ],
            [
              "High",
              "Core feature broken; significant degradation; data at risk",
              "4 hours",
              "24 hours (best-effort)",
            ],
            [
              "Medium",
              "Feature partially broken; workaround available; minor impact",
              "8 hours",
              "48 hours (best-effort)",
            ],
            [
              "Low",
              "General inquiries; questions; feature requests; cosmetic issues",
              "24 hours",
              "5 business days (best-effort)",
            ],
          ],
        },
      },
      {
        id: "response-sla-definition",
        title: "Response SLA Definition",
        content: "",
        items: [
          {
            text: "Time from your support request to initial response from us",
            type: "bullet",
          },
          {
            text: "Response: acknowledgment + initial troubleshooting",
            type: "bullet",
          },
        ],
      },
      {
        id: "resolution-sla-definition",
        title: "Resolution SLA Definition",
        content: "",
        items: [
          {
            text: "Time from your request to issue fully resolved/fixed",
            type: "bullet",
          },
          {
            text: '"Best-effort" means we work on it but don\'t guarantee completion',
            type: "bullet",
          },
          {
            text: "Complex issues may take longer with your permission",
            type: "bullet",
          },
        ],
      },
      {
        id: "included-in-support",
        title: "What's Included in Support",
        content: "",
        items: [
          {
            text: "Technical troubleshooting",
            type: "check",
          },
          {
            text: "Account access issues",
            type: "check",
          },
          {
            text: "Data export assistance",
            type: "check",
          },
          {
            text: "General questions about Service",
            type: "check",
          },
          {
            text: "Bug reporting and tracking",
            type: "check",
          },
          {
            text: "Performance investigation",
            type: "check",
          },
        ],
      },
      {
        id: "not-included-in-support",
        title: "What's NOT Included",
        content: "",
        items: [
          {
            text: "Custom development/coding",
            type: "cross",
          },
          {
            text: "Integration with third-party services",
            type: "cross",
          },
          {
            text: "Data migration assistance",
            type: "cross",
          },
          {
            text: "Consulting on strategy decisions",
            type: "cross",
          },
          {
            text: "Training or educational services",
            type: "cross",
          },
          {
            text: "Legal or compliance advice",
            type: "cross",
          },
        ],
      },
      {
        id: "outside-support-hours",
        title: "Outside Support Hours",
        content: "",
        items: [
          {
            text: "Requests received after 5pm PT will be responded to next business day",
            type: "bullet",
          },
          {
            text: 'Urgent issues: note "CRITICAL" in subject line',
            type: "bullet",
          },
          {
            text: "We'll prioritize critical issues on next business day",
            type: "bullet",
          },
        ],
      },
      {
        id: "escalation",
        title: "Escalation",
        content: "If not satisfied with support response:",
        items: [
          {
            text: 'Reply with "ESCALATION" in subject line',
            type: "bullet",
          },
          {
            text: "Explain why response was insufficient",
            type: "bullet",
          },
          {
            text: "We assign senior support within 24 hours",
            type: "bullet",
          },
          {
            text: "Senior support reviews and responds within 2 business days",
            type: "bullet",
          },
        ],
      },
      {
        id: "service-credit-sla-breach",
        title: "Service Credit for SLA Breach",
        content: "If we miss SLA:",
        items: [
          {
            text: "Critical SLA miss: 5 days free service",
            type: "bullet",
          },
          {
            text: "High SLA miss: 3 days free service",
            type: "bullet",
          },
          {
            text: "Medium/Low: No credit (best-effort basis)",
            type: "bullet",
          },
        ],
      },
      {
        id: "claim-service-credit",
        title: "How to Claim Credit",
        content: "",
        items: [
          {
            text: "Document SLA miss with timestamps",
            type: "bullet",
          },
          {
            text: "Request credit within 30 days of incident",
            type: "bullet",
          },
          {
            text: "We validate and process credit (10 business days)",
            type: "bullet",
          },
          {
            text: "Credit applied to next billing period",
            type: "bullet",
          },
        ],
      },
      {
        id: "support-during-incidents",
        title: "Support During Incidents",
        content: "During major incidents:",
        items: [
          {
            text: "We publish status page: https://status.aiaugmented.io",
            type: "bullet",
          },
          {
            text: "Updates every 30 minutes (during incident)",
            type: "bullet",
          },
          {
            text: "Email notifications to affected users",
            type: "bullet",
          },
          {
            text: "Post-incident report within 48 hours",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "18",
    title: "Enterprise/GDPR Data Processing Agreement Reference",
    content: "",
    subsections: [
      {
        id: "enterprise-customers",
        title: "For Enterprise Customers",
        content:
          "If your organization is subject to GDPR, CCPA, PDPA, or similar regulations, this section applies.",
      },
      {
        id: "dpa-acknowledgment",
        title: "Data Processing Agreement (DPA)",
        content: "By using this Service, you acknowledge:",
        items: [
          {
            text: "Our Privacy Policy (Section 10) describes enterprise compliance options",
            type: "bullet",
          },
          {
            text: "We are prepared to execute a formal Data Processing Agreement",
            type: "bullet",
          },
          {
            text: "DPA governs how we process your personal data as a processor",
            type: "bullet",
          },
        ],
      },
      {
        id: "when-dpa-required",
        title: "When DPA is Required",
        content: "You should request a DPA if:",
        items: [
          {
            text: "Your organization is in EU/UK/EEA",
            type: "bullet",
          },
          {
            text: "You process personal data of EU residents",
            type: "bullet",
          },
          {
            text: "Your organization is regulated (financial, healthcare, etc.)",
            type: "bullet",
          },
          {
            text: "Your company policy requires DPA",
            type: "bullet",
          },
          {
            text: "You want explicit GDPR Article 28 commitments",
            type: "bullet",
          },
        ],
      },
      {
        id: "what-dpa-includes",
        title: "What DPA Includes",
        content: "",
        items: [
          {
            text: "Our obligations as data processor",
            type: "bullet",
          },
          {
            text: "Your obligations as data controller",
            type: "bullet",
          },
          {
            text: "Standard Contractual Clauses (SCCs)",
            type: "bullet",
          },
          {
            text: "Sub-processor list and notification rights",
            type: "bullet",
          },
          {
            text: "Data subject rights procedures",
            type: "bullet",
          },
          {
            text: "Audit rights (2x annually)",
            type: "bullet",
          },
          {
            text: "Incident response obligations",
            type: "bullet",
          },
          {
            text: "Data transfer safeguards",
            type: "bullet",
          },
          {
            text: "Termination and data deletion",
            type: "bullet",
          },
        ],
      },
      {
        id: "request-dpa",
        title: "How to Request DPA",
        content: "",
        items: [
          {
            label: "Email: info@aiaugmented.io",
            text: "Include:",
            items: [
              {
                text: "Your company name",
                type: "bullet",
              },
              {
                text: "Your data protection officer (if you have one)",
                type: "bullet",
              },
              {
                text: "Jurisdictions involved",
                type: "bullet",
              },
              {
                text: "Data subjects involved",
                type: "bullet",
              },
              {
                text: "Data categories",
                type: "bullet",
              },
              {
                text: "Processing purposes",
                type: "bullet",
              },
            ],
          },
          {
            text: "We respond with DPA template within 5 business days.",
            type: "bullet",
          },
        ],
      },
      {
        id: "dpa-standard-terms",
        title: "DPA Standard Terms",
        content: "Our DPA includes:",
        items: [
          {
            text: "GDPR Article 28 processor obligations",
            type: "bullet",
          },
          {
            text: "GDPR Article 32 security requirements",
            type: "bullet",
          },
          {
            text: "GDPR Article 33 breach notification",
            type: "bullet",
          },
          {
            text: "SCCs for international transfers",
            type: "bullet",
          },
          {
            text: "Sub-processor change notification (15 days)",
            type: "bullet",
          },
          {
            text: "Audit rights and certifications",
            type: "bullet",
          },
          {
            text: "Incident response SLA (24 hours)",
            type: "bullet",
          },
        ],
      },
      {
        id: "audit-rights",
        title: "Audit Rights",
        content: "Under our DPA:",
        items: [
          {
            text: "Right to 2 audits per calendar year",
            type: "bullet",
          },
          {
            text: "Third-party auditor permitted",
            type: "bullet",
          },
          {
            text: "30-day advance notice required",
            type: "bullet",
          },
          {
            text: "Auditor signs NDA",
            type: "bullet",
          },
          {
            text: "Reasonable cost sharing",
            type: "bullet",
          },
          {
            text: "Findings confidential",
            type: "bullet",
          },
        ],
      },
      {
        id: "certifications-maintained",
        title: "Certifications We Maintain",
        content: "",
        items: [
          {
            text: "SOC 2 Type II (annual audit)",
            type: "bullet",
          },
          {
            text: "ISO 27001 (if pursued)",
            type: "bullet",
          },
          {
            text: "GDPR compliance attestation",
            type: "bullet",
          },
          {
            text: "We'll provide upon request",
            type: "bullet",
          },
        ],
      },
      {
        id: "sub-processors",
        title: "Sub-processors",
        content: "We notify you of:",
        items: [
          {
            text: "Current sub-processor list",
            type: "bullet",
          },
          {
            text: "Changes within 15 days",
            type: "bullet",
          },
          {
            text: "Right to object to new sub-processors",
            type: "bullet",
          },
          {
            text: "Alternative arrangement if you object",
            type: "bullet",
          },
        ],
      },
      {
        id: "article-28-obligations",
        title: "Article 28 Obligations",
        content: "We commit to:",
        items: [
          {
            text: "Process data only per your instructions",
            type: "bullet",
          },
          {
            text: "Ensure persons authorized are confidential",
            type: "bullet",
          },
          {
            text: "Not process for own purposes",
            type: "bullet",
          },
          {
            text: "Assist with data subject rights requests",
            type: "bullet",
          },
          {
            text: "Delete/return data upon termination",
            type: "bullet",
          },
          {
            text: "Demonstrate compliance upon request",
            type: "bullet",
          },
          {
            text: "Cooperate with authorities (with notice to you)",
            type: "bullet",
          },
        ],
      },
      {
        id: "gdpr-data-transfer-safeguards",
        title: "GDPR Data Transfer Safeguards",
        content: "For transfers outside EU/EEA:",
        items: [
          {
            text: "We rely on Standard Contractual Clauses (SCCs)",
            type: "bullet",
          },
          {
            text: "Adequacy decisions (where applicable)",
            type: "bullet",
          },
          {
            text: "Binding Corporate Rules (if applicable)",
            type: "bullet",
          },
          {
            text: "Model clause annexes included in DPA",
            type: "bullet",
          },
        ],
      },
      {
        id: "dispute-resolution",
        title: "Dispute Resolution",
        content: "If dispute over DPA terms:",
        items: [
          {
            text: "Informal resolution first (30 days)",
            type: "bullet",
          },
          {
            text: "Escalate to Data Protection Officers",
            type: "bullet",
          },
          {
            text: "Arbitration (if negotiation fails)",
            type: "bullet",
          },
          {
            text: "Per Section 15 of this ToS",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "19",
    title: "Regulated Industries Disclaimer and Restrictions",
    content:
      "IMPORTANT: This Service Is NOT Intended For Regulated Decisions. If you work in a regulated industry, you MUST read this section.",
    subsections: [
      {
        id: "regulated-definition",
        title: 'What Counts as "Regulated"',
        content: "",
        items: [
          {
            label: "Financial Services:",
            text: "",
            items: [
              {
                text: "Investment decisions",
                type: "bullet",
              },
              {
                text: "Lending/credit decisions",
                type: "bullet",
              },
              {
                text: "Insurance underwriting",
                type: "bullet",
              },
              {
                text: "Portfolio management",
                type: "bullet",
              },
              {
                text: "Trading strategies",
                type: "bullet",
              },
              {
                text: "Compliance decisions",
                type: "bullet",
              },
            ],
          },
          {
            label: "Healthcare:",
            text: "",
            items: [
              {
                text: "Diagnosis recommendations",
                type: "bullet",
              },
              {
                text: "Treatment planning",
                type: "bullet",
              },
              {
                text: "Patient care decisions",
                type: "bullet",
              },
              {
                text: "Drug interactions",
                type: "bullet",
              },
              {
                text: "Medical device approval",
                type: "bullet",
              },
            ],
          },
          {
            label: "Legal:",
            text: "",
            items: [
              {
                text: "Legal strategy",
                type: "bullet",
              },
              {
                text: "Contract interpretation",
                type: "bullet",
              },
              {
                text: "Risk assessment for lawsuits",
                type: "bullet",
              },
              {
                text: "Regulatory compliance decisions",
                type: "bullet",
              },
            ],
          },
          {
            label: "Government/Military:",
            text: "",
            items: [
              {
                text: "National security decisions",
                type: "bullet",
              },
              {
                text: "Foreign policy",
                type: "bullet",
              },
              {
                text: "Defense strategy",
                type: "bullet",
              },
              {
                text: "Classification determinations",
                type: "bullet",
              },
            ],
          },
          {
            label: "Energy/Utilities:",
            text: "",
            items: [
              {
                text: "Safety decisions",
                type: "bullet",
              },
              {
                text: "Regulatory compliance",
                type: "bullet",
              },
              {
                text: "System reliability",
                type: "bullet",
              },
            ],
          },
          {
            label: "Other Regulated Industries:",
            text: "",
            items: [
              {
                text: "Pharmaceutical development",
                type: "bullet",
              },
              {
                text: "Aerospace",
                type: "bullet",
              },
              {
                text: "Transportation",
                type: "bullet",
              },
              {
                text: "Environmental compliance",
                type: "bullet",
              },
              {
                text: "Privacy/data protection decisions",
                type: "bullet",
              },
            ],
          },
        ],
      },
      {
        id: "our-commitment",
        title: "Our Commitment",
        content: "We explicitly state:",
        items: [
          {
            text: "This Service CANNOT provide legal advice",
            type: "bullet",
          },
          {
            text: "This Service CANNOT provide financial advice",
            type: "bullet",
          },
          {
            text: "This Service CANNOT provide medical advice",
            type: "bullet",
          },
          {
            text: "This Service CANNOT provide regulatory advice",
            type: "bullet",
          },
          {
            text: "Use ONLY as general informational tool",
            type: "bullet",
          },
        ],
      },
      {
        id: "your-obligation",
        title: "Your Obligation",
        content: "If using in regulated industry:",
        items: [
          {
            label: "You MUST:",
            text: "",
            items: [
              {
                text: "Consult licensed professionals (lawyer, doctor, advisor)",
                type: "check",
              },
              {
                text: "Verify all outputs independently",
                type: "check",
              },
              {
                text: "Conduct own due diligence",
                type: "check",
              },
              {
                text: "Follow regulatory requirements",
                type: "check",
              },
              {
                text: "Document your compliance process",
                type: "check",
              },
              {
                text: "Take responsibility for final decision",
                type: "check",
              },
            ],
          },
          {
            label: "You CANNOT:",
            text: "",
            items: [
              {
                text: "Rely solely on our agents for regulated decisions",
                type: "cross",
              },
              {
                text: "Claim we provided professional advice",
                type: "cross",
              },
              {
                text: "Cite us as licensed advisor",
                type: "cross",
              },
              {
                text: "Delegate decision to our platform",
                type: "cross",
              },
              {
                text: "Skip professional consultation",
                type: "cross",
              },
            ],
          },
        ],
      },
      {
        id: "liability-exclusion-regulated",
        title: "Liability Exclusion for Regulated Use",
        content: "We are NOT liable if:",
        items: [
          {
            text: "You use in regulated industry without professional advisors",
            type: "bullet",
          },
          {
            text: "You rely solely on our analysis for regulated decision",
            type: "bullet",
          },
          {
            text: "You skip required compliance procedures",
            type: "bullet",
          },
          {
            text: "Regulatory authority rejects our analysis",
            type: "bullet",
          },
          {
            text: "Your organization is fined due to our outputs",
            type: "bullet",
          },
          {
            text: "Loss occurs from regulated decision using our platform",
            type: "bullet",
          },
        ],
      },
      {
        id: "indemnify-regulated",
        title: "You indemnify us if:",
        content: "",
        items: [
          {
            text: "Regulator alleges we provided unlicensed professional services",
            type: "bullet",
          },
          {
            text: "You made regulated decision based on our analysis alone",
            type: "bullet",
          },
          {
            text: "Your industry penalties result from our outputs",
            type: "bullet",
          },
          {
            text: "Claims arise from using our platform for regulated purpose",
            type: "bullet",
          },
        ],
      },
      {
        id: "compliance-officer-recommendation",
        title: "Compliance Officer Recommendation",
        content: "If in regulated industry:",
        items: [
          {
            text: "Assign internal compliance officer",
            type: "bullet",
          },
          {
            text: 'Create internal policy: "How AI-Augmented fits in our process"',
            type: "bullet",
          },
          {
            text: "Document professional review process",
            type: "bullet",
          },
          {
            text: "Train staff on limitations",
            type: "bullet",
          },
          {
            text: "Maintain audit trail of decisions",
            type: "bullet",
          },
        ],
      },
      {
        id: "examples-what-not-to-do",
        title: "Examples - What NOT To Do",
        content: "",
        items: [
          {
            label: "Financial Services:",
            text: "",
            items: [
              {
                text: "Use agent output as investment recommendation to client",
                type: "cross",
              },
              {
                text: "Skip compliance review",
                type: "cross",
              },
              {
                text: "Rely on our analysis for regulatory filing",
                type: "cross",
              },
              {
                text: "Use as initial research, then engage advisor",
                type: "check",
              },
            ],
          },
          {
            label: "Healthcare:",
            text: "",
            items: [
              {
                text: "Provide to patient as medical opinion",
                type: "cross",
              },
              {
                text: "Use instead of diagnosis from doctor",
                type: "cross",
              },
              {
                text: "Skip regulatory review",
                type: "cross",
              },
              {
                text: "Use to research topics, then verify with doctor",
                type: "check",
              },
            ],
          },
          {
            label: "Legal:",
            text: "",
            items: [
              {
                text: "Use as legal advice to client",
                type: "cross",
              },
              {
                text: "Skip lawyer review",
                type: "cross",
              },
              {
                text: "File with regulatory body",
                type: "cross",
              },
              {
                text: "Use to research, then verify with lawyer",
                type: "check",
              },
            ],
          },
        ],
      },
      {
        id: "remediation-request",
        title: "Remediation Request",
        content: "If regulator or auditor questions our use:",
        items: [
          {
            text: "Document your use case",
            type: "bullet",
          },
          {
            text: "Show professional review process",
            type: "bullet",
          },
          {
            text: "Demonstrate compliance procedures",
            type: "bullet",
          },
          {
            text: "Contact us: info@aiaugmented.io",
            type: "bullet",
          },
          {
            text: "We'll provide attestation of limitations",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "20",
    title: "Account Limits and Resource Allocation",
    content: "",
    subsections: [
      {
        id: "Account-limits",
        title: "Account-Level Limits",
        content:
          "To ensure fair platform performance for all users, we enforce account-level limits",
      },
      {
        id: "storage-limits",
        title: "Storage Limits",
        content: "",
        table: {
          headers: ["Item", "Limit", "Notes"],
          rows: [
            [
              "Total Account Storage",
              "50GB",
              "Includes files, Canvas, reports, history",
            ],
            ["Single File Upload", "100MB", "Maximum size per upload"],
            ["File Count", "1,000 files", "Maximum files per account"],
            ["Project/Canvas Count", "Unlimited", "No limit on projects"],
            ["Decision History", "Indefinite", "Kept per retention schedule"],
          ],
        },
      },
      {
        id: "query-limits",
        title: "Query Limits",
        content: "",
        table: {
          headers: ["Item", "Limit", "Notes"],
          rows: [
            ["Queries per Hour", "60 queries", "Rate limit applies after 60"],
            [
              "Concurrent Queries",
              "5 simultaneous",
              "Additional queries queued",
            ],
            ["Query Timeout", "30 seconds", "Queries auto-terminate after 30s"],
            ["Daily Queries", "Unlimited", "No daily cap"],
            ["Monthly Queries", "Unlimited", "No monthly cap"],
          ],
        },
      },
      {
        id: "report-generation",
        title: "Report Generation",
        content: "",
        table: {
          headers: ["Item", "Limit", "Notes"],
          rows: [
            ["Reports per Day", "Unlimited", "No limit"],
            ["Report File Size", "50MB", "Maximum report size"],
            ["Export Frequency", "10 per day", "Throttled after 10"],
          ],
        },
      },
      {
        id: "at-capacity-storage",
        title: "When you reach storage limit (50GB)",
        content: "",
        items: [
          {
            text: "Warning email sent at 80% capacity",
            type: "bullet",
          },
          {
            text: "Error message at 100% capacity",
            type: "bullet",
          },
          {
            text: "New uploads rejected",
            type: "bullet",
          },
          {
            text: "Options: Delete old files, request upgrade",
            type: "bullet",
          },
        ],
      },
      {
        id: "at-capacity-rate-limit",
        title: "When you hit rate limit (60/hour)",
        content: "",
        items: [
          {
            text: "Subsequent queries automatically queued",
            type: "bullet",
          },
          {
            text: '"Waiting..." message shown',
            type: "bullet",
          },
          {
            text: "Processed in order (FIFO)",
            type: "bullet",
          },
          {
            text: "Typical wait: 5-60 seconds",
            type: "bullet",
          },
        ],
      },
      {
        id: "query-timeout-exceeded",
        title: "When you exceed query timeout",
        content: "",
        items: [
          {
            text: "Query terminated",
            type: "bullet",
          },
          {
            text: "Partial results returned (if any)",
            type: "bullet",
          },
          {
            text: 'Error message: "Query exceeded time limit"',
            type: "bullet",
          },
          {
            text: "Retry recommended with simpler query",
            type: "bullet",
          },
        ],
      },
      {
        id: "monitoring-auto-remediation",
        title: "Monitoring and Auto-Remediation",
        content: "We monitor for:",
        items: [
          {
            text: "Storage approaching limit (email at 75%)",
            type: "bullet",
          },
          {
            text: "Rapid rate limiting (email alert after 3rd incident)",
            type: "bullet",
          },
          {
            text: "Potential abuse patterns",
            type: "bullet",
          },
        ],
      },
      {
        id: "abuse-detected-limits",
        title: "If Abuse Detected",
        content: "",
        items: [
          {
            text: "Account temporarily limited",
            type: "bullet",
          },
          {
            text: "Email notification with details",
            type: "bullet",
          },
          {
            text: "Review conducted (5 business days)",
            type: "bullet",
          },
          {
            text: "If intentional abuse: suspension/termination",
            type: "bullet",
          },
        ],
      },
      {
        id: "exceed-limits-intentionally",
        title: "Exceeding Limits Intentionally",
        content: "If you deliberately attempt to:",
        items: [
          {
            text: "Bypass rate limits with scripts/bots",
            type: "bullet",
          },
          {
            text: "Circumvent storage limits with workarounds",
            type: "bullet",
          },
          {
            text: "Overflow servers with massive queries",
            type: "bullet",
          },
        ],
      },
      {
        id: "exceed-limits-consequences",
        title: "We Will",
        content: "",
        items: [
          {
            text: "Terminate query immediately",
            type: "bullet",
          },
          {
            text: "Throttle account permanently",
            type: "bullet",
          },
          {
            text: "Suspend account (if pattern continues)",
            type: "bullet",
          },
          {
            text: "You forfeit service credit/refund rights",
            type: "bullet",
          },
        ],
      },
      {
        id: "upgrade-path",
        title: "Upgrade Path",
        content: "",
        items: [
          {
            label: "Currently:",
            text: "All users have same limits (Beta)",
          },
          {
            label: "In Future",
            text: "Enterprise plans may offer:",
            items: [
              {
                text: "Higher storage (100GB - 1TB)",
                type: "bullet",
              },
              {
                text: "Higher rates (custom)",
                type: "bullet",
              },
              {
                text: "Dedicated resources",
                type: "bullet",
              },
              {
                text: "Custom limits",
                type: "bullet",
              },
              {
                text: "Contact: info@aiaugmented.io for inquiries",
                type: "bullet",
              },
            ],
          },
        ],
      },
      {
        id: "your-responsibility-limits",
        title: "Your Responsibility",
        content: "You agree:",
        items: [
          {
            text: "Not to exceed limits intentionally",
            type: "bullet",
          },
          {
            text: "Not to use workarounds/circumvention",
            type: "bullet",
          },
          {
            text: "To respect rate limits",
            type: "bullet",
          },
          {
            text: "To manage your storage",
            type: "bullet",
          },
          {
            text: "That limits are reasonable",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "21",
    title: "Content Removal and Moderation",
    content: "",
    subsections: [
      {
        id: "content-we-may-remove",
        title: "Content We May Remove",
        content:
          "We reserve right to remove, modify, or restrict any user content that:",
        items: [
          {
            label: "Violates Terms:",
            text: "",
            items: [
              {
                text: "Illegal content",
                type: "bullet",
              },
              {
                text: "Hate speech or harassment",
                type: "bullet",
              },
              {
                text: "Violence or threats",
                type: "bullet",
              },
              {
                text: "Spam or malware",
                type: "bullet",
              },
              {
                text: "IP infringement",
                type: "bullet",
              },
              {
                text: "Privacy violation (personal data of others)",
                type: "bullet",
              },
            ],
          },
        ],
      },
      {
        id: "removal-process",
        title: "Removal Process",
        content: "",
        items: [
          {
            text: "Detection: Automated systems or user report",
            type: "bullet",
          },
          {
            text: "Review: Manual review (24-48 hours)",
            type: "bullet",
          },
          {
            text: "Decision: Remove, restrict, or allow",
            type: "bullet",
          },
          {
            text: "Notification: Email to account owner (if removed)",
            type: "bullet",
          },
          {
            text: "Appeal: 10-day appeal window (Section 14)",
            type: "bullet",
          },
        ],
      },
      {
        id: "notification-removed",
        title: "Notification When Removed",
        content: "If we remove content, we notify:",
        items: [
          {
            text: "What was removed (specific file/report)",
            type: "bullet",
          },
          {
            text: "Why it was removed (reason)",
            type: "bullet",
          },
          {
            text: "Date removed",
            type: "bullet",
          },
          {
            text: "How to appeal",
            type: "bullet",
          },
          {
            text: "Data preservation (we keep for 30 days for appeal)",
            type: "bullet",
          },
        ],
      },
      {
        id: "appeal-process",
        title: "Appeal Process",
        content: "If content removed:",
        items: [
          {
            text: 'Email: info@aiaugmented.io with "CONTENT APPEAL"',
            type: "bullet",
          },
          {
            text: "Explain why removal was wrong",
            type: "bullet",
          },
          {
            text: "Provide supporting evidence",
            type: "bullet",
          },
          {
            text: "We review within 10 business days",
            type: "bullet",
          },
          {
            text: "Appeal decision is final",
            type: "bullet",
          },
        ],
      },
      {
        id: "preservation-during-appeal",
        title: "Preservation During Appeal",
        content: "",
        items: [
          {
            text: "Content preserved for 30 days during appeal",
            type: "bullet",
          },
          {
            text: "Not accessible to you during appeal",
            type: "bullet",
          },
          {
            text: "Restored if appeal successful",
            type: "bullet",
          },
          {
            text: "Deleted if appeal fails",
            type: "bullet",
          },
        ],
      },
      {
        id: "your-moderation-responsibility",
        title: "Your Responsibility",
        content: "You are responsible for:",
        items: [
          {
            text: "Not uploading prohibited content",
            type: "bullet",
          },
          {
            text: "Understanding what's prohibited (Section 6)",
            type: "bullet",
          },
          {
            text: "Monitoring your account for violations",
            type: "bullet",
          },
          {
            text: "Appealing if you disagree with removal",
            type: "bullet",
          },
        ],
      },
      {
        id: "no-liability-removal",
        title: "No Liability for Removal",
        content: "We are not liable for:",
        items: [
          {
            text: "Removal of content (per our discretion)",
            type: "bullet",
          },
          {
            text: "Business loss from removed content",
            type: "bullet",
          },
          {
            text: "Appeal delays",
            type: "bullet",
          },
          {
            text: "Accidental removal",
            type: "bullet",
          },
          {
            text: "Third-party claims about removal",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "22",
    title: "User Feedback and Suggestions Ownership",
    content: "",
    subsections: [
      {
        id: "feedback-you-provide",
        title: "Feedback You Provide",
        content: "Any feedback, suggestions, ideas, or comments you provide:",
        items: [
          {
            text: "You grant us perpetual, royalty-free license to use",
            type: "bullet",
          },
          {
            text: "We own all rights to suggestions",
            type: "bullet",
          },
          {
            text: "We may implement without crediting you",
            type: "bullet",
          },
          {
            text: "We may publish in roadmap/announcements",
            type: "bullet",
          },
          {
            text: "You retain no ownership in suggestions",
            type: "bullet",
          },
          {
            text: "You're not entitled to compensation",
            type: "bullet",
          },
        ],
      },
      {
        id: "examples-of-feedback",
        title: "Examples of Feedback",
        content: "",
        items: [
          {
            text: 'Feature requests ("Add ability to...")',
            type: "bullet",
          },
          {
            text: 'Bug reports ("I found that...")',
            type: "bullet",
          },
          {
            text: 'Enhancement ideas ("It would be better if...")',
            type: "bullet",
          },
          {
            text: "UI/UX suggestions",
            type: "bullet",
          },
          {
            text: "Process improvements",
            type: "bullet",
          },
          {
            text: "Agent logic ideas",
            type: "bullet",
          },
          {
            text: "Report format requests",
            type: "bullet",
          },
        ],
      },
      {
        id: "what-we-do-feedback",
        title: "What We Do With Feedback",
        content: "We may:",
        items: [
          {
            text: "Implement your suggestion",
            type: "check",
          },
          {
            text: "Share with team/investors",
            type: "check",
          },
          {
            text: "Publish in public roadmap",
            type: "check",
          },
          {
            text: "Share with contractors",
            type: "check",
          },
          {
            text: 'Use in marketing ("Users requested...")',
            type: "check",
          },
          {
            text: "Modify or improve your idea",
            type: "check",
          },
          {
            text: "Never compensate you",
            type: "check",
          },
        ],
      },
      {
        id: "your-feedback-obligation",
        title: "Your Obligation",
        content: "By providing feedback:",
        items: [
          {
            text: "You agree to terms above",
            type: "bullet",
          },
          {
            text: "You grant us all rights",
            type: "bullet",
          },
          {
            text: "You make no claims of ownership",
            type: "bullet",
          },
          {
            text: "You understand we're under no obligation to implement",
            type: "bullet",
          },
        ],
      },
      {
        id: "feedback-confidential-info",
        title: "If Feedback Contains Confidential Info",
        content: "",
        items: [
          {
            text: "You're responsible for redacting",
            type: "bullet",
          },
          {
            text: "We'll assume any feedback is non-confidential",
            type: "bullet",
          },
          {
            text: 'If you mark "CONFIDENTIAL," we\'ll treat appropriately',
            type: "bullet",
          },
          {
            text: "But we won't guarantee confidentiality",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "23",
    title: "Account Inactivity and Cleanup",
    content: "",
    subsections: [
      {
        id: "inactive-accounts",
        title: "Inactive Accounts",
        content: "If your account is inactive for 24 months:",
        items: [
          {
            text: "We may delete the account",
            type: "bullet",
          },
          {
            text: "We'll send warning email (30 days before)",
            type: "bullet",
          },
          {
            text: "Email sent to account address on file",
            type: "bullet",
          },
          {
            text: "You can prevent deletion by logging in",
            type: "bullet",
          },
        ],
      },
      {
        id: "before-deletion",
        title: "Before Deletion",
        content: "We send:",
        items: [
          {
            text: '1. Email at 23 months: "Your account will be deleted in 30 days"',
            type: "bullet",
          },
          {
            text: "2. Include: Link to export data, instructions to reactivate",
            type: "bullet",
          },
          {
            text: "3. Reactivation: Simply log in (cancels deletion)",
            type: "bullet",
          },
        ],
      },
      {
        id: "during-deletion-warning",
        title: "During 30-Day Warning",
        content: "You can:",
        items: [
          {
            text: "Log in to prevent deletion",
            type: "bullet",
          },
          {
            text: "Export all your Strategic Content",
            type: "bullet",
          },
          {
            text: "Download Decision Canvas, reports, files",
            type: "bullet",
          },
          {
            text: "Restore account with single login",
            type: "bullet",
          },
        ],
      },
      {
        id: "upon-deletion",
        title: "Upon Deletion",
        content: "",
        items: [
          {
            text: "Account permanently closed",
            type: "bullet",
          },
          {
            text: "Strategic Content deleted",
            type: "bullet",
          },
          {
            text: "Billing stopped",
            type: "bullet",
          },
          {
            text: "Cannot be recovered",
            type: "bullet",
          },
          {
            text: "Data per Privacy Policy retention (Section 22) deleted/anonymized",
            type: "bullet",
          },
        ],
      },
      {
        id: "inactivity-your-responsibility",
        title: "Your Responsibility",
        content: "",
        items: [
          {
            text: "Log in at least once per 24 months to keep account active",
            type: "bullet",
          },
          {
            text: "Export data regularly (backup your work)",
            type: "bullet",
          },
          {
            text: "Provide current email address (for notification)",
            type: "bullet",
          },
          {
            text: "Check email for deletion warnings",
            type: "bullet",
          },
        ],
      },
      {
        id: "enterprise-inactivity",
        title: "Enterprise Accounts",
        content: "",
        items: [
          {
            text: "Same policy applies",
            type: "bullet",
          },
          {
            text: "Contact info@aiaugmented.io if extended absence needed",
            type: "bullet",
          },
          {
            text: "We may grant extension for business reasons",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "24",
    title: "Backups and Data Recovery",
    content: "",
    subsections: [
      {
        id: "our-backup-practices",
        title: "Our Backup Practices",
        content: "We maintain:",
        items: [
          {
            text: "Real-time backups during normal operations",
            type: "bullet",
          },
          {
            text: "90-day backup retention for disaster recovery",
            type: "bullet",
          },
          {
            text: "Encrypted backups in multiple locations",
            type: "bullet",
          },
          {
            text: "Regular backup testing",
            type: "bullet",
          },
        ],
      },
      {
        id: "recovery-guarantees",
        title: "Recovery Guarantees",
        content: "We commit to:",
        items: [
          {
            text: "Best-effort recovery if data loss occurs",
            type: "check",
          },
          {
            text: "Recovery within 24 hours (most cases)",
            type: "check",
          },
          {
            text: "Notification if recovery not possible",
            type: "check",
          },
          {
            text: "NO guarantee of recovery",
            type: "cross",
          },
          {
            text: "NO liability if data cannot be recovered",
            type: "cross",
          },
        ],
      },
      {
        id: "backup-recovery-process",
        title: "Backup Recovery Process",
        content: "If you experience data loss:",
        items: [
          {
            text: "Report immediately: info@aiaugmented.io",
            type: "bullet",
          },
          {
            text: "Include: Specific data lost, last time accessed, impact",
            type: "bullet",
          },
          {
            text: "We investigate: Check backups within 4 hours",
            type: "bullet",
          },
          {
            text: "We notify: Recovery possible/impossible within 24 hours",
            type: "bullet",
          },
          {
            text: "If possible: Data restored within 48 hours",
            type: "bullet",
          },
          {
            text: "If impossible: Sincere apology, investigation into cause",
            type: "bullet",
          },
        ],
      },
      {
        id: "when-recovery-possible",
        title: "When Recovery Is Possible",
        content: "",
        items: [
          {
            text: "User accidentally deleted file (usually recoverable)",
            type: "bullet",
          },
          {
            text: "Data lost due to platform bug (usually recoverable)",
            type: "bullet",
          },
          {
            text: "Brief data loss window (last 90 days)",
            type: "bullet",
          },
        ],
      },
      {
        id: "when-recovery-not-possible",
        title: "When Recovery Is NOT Possible",
        content: "",
        items: [
          {
            text: "Data deletion >90 days ago (outside retention)",
            type: "bullet",
          },
          {
            text: "User error: deleted and backup window passed",
            type: "bullet",
          },
          {
            text: "Catastrophic event: all backups lost",
            type: "bullet",
          },
          {
            text: "Encrypted attacks: backups themselves compromised",
            type: "bullet",
          },
          {
            text: "User account deleted: data per retention schedule",
            type: "bullet",
          },
        ],
      },
      {
        id: "backup-your-responsibility",
        title: "Your Responsibility",
        content: "",
        items: [
          {
            label: "You should:",
            text: "",
            items: [
              {
                text: "Maintain own local backups",
                type: "bullet",
              },
              {
                text: "Export Strategic Content regularly",
                type: "bullet",
              },
              {
                text: "Don't rely solely on our backups",
                type: "bullet",
              },
              {
                text: "Understand backup is not guaranteed",
                type: "bullet",
              },
            ],
          },
          {
            label: "We recommend:",
            text: "",
            items: [
              {
                text: "Export monthly or after major updates",
                type: "bullet",
              },
              {
                text: "Store exports in multiple locations",
                type: "bullet",
              },
              {
                text: "Test your backups periodically",
                type: "bullet",
              },
            ],
          },
        ],
      },
      {
        id: "backup-frequency",
        title: "Backup Frequency",
        content: "",
        items: [
          {
            text: "Real-time sync: Continuous (within minutes)",
            type: "bullet",
          },
          {
            text: "Backup snapshot: Daily (once per day)",
            type: "bullet",
          },
          {
            text: "Retention: 90 days of backups",
            type: "bullet",
          },
          {
            text: "Archive: Long-term (indefinite, per Privacy Policy)",
            type: "bullet",
          },
        ],
      },
      {
        id: "no-liability-data-loss",
        title: "No Liability for Data Loss",
        content: "We are not liable for:",
        items: [
          {
            text: "Data loss from user error",
            type: "bullet",
          },
          {
            text: "Data loss >90 days old",
            type: "bullet",
          },
          {
            text: "Backups outside our systems",
            type: "bullet",
          },
          {
            text: "Failure to export by user",
            type: "bullet",
          },
          {
            text: "Recovery failure despite our efforts",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "25",
    title: "Third-Party Integrations and Webhooks",
    content: "",
    subsections: [
      {
        id: "if-we-offer-integrations",
        title: "If We Offer Integrations",
        content:
          "Third-party services (Zapier, Make, webhooks, APIs, etc.) may be available.",
      },
      {
        id: "important-disclaimers",
        title: "Important Disclaimers",
        content: "We are NOT responsible for:",
        items: [
          {
            text: "Third-party service availability",
            type: "bullet",
          },
          {
            text: "Third-party data handling",
            type: "bullet",
          },
          {
            text: "Third-party security",
            type: "bullet",
          },
          {
            text: "Third-party API changes",
            type: "bullet",
          },
          {
            text: "Integration failures",
            type: "bullet",
          },
          {
            text: "Data loss in transit",
            type: "bullet",
          },
        ],
      },
      {
        id: "third-party-services",
        title: "Third-Party Services",
        content: "",
        items: [
          {
            text: "Subject to their own terms",
            type: "bullet",
          },
          {
            text: "Subject to their own privacy policies",
            type: "bullet",
          },
          {
            text: "May have different security standards",
            type: "bullet",
          },
          {
            text: "May be discontinued by them anytime",
            type: "bullet",
          },
          {
            text: "We don't endorse or guarantee",
            type: "bullet",
          },
        ],
      },
      {
        id: "your-integration-responsibility",
        title: "Your Responsibility",
        content: "You are responsible for:",
        items: [
          {
            text: "Reading third-party terms",
            type: "bullet",
          },
          {
            text: "Understanding their data handling",
            type: "bullet",
          },
          {
            text: "Managing your API keys/tokens",
            type: "bullet",
          },
          {
            text: "Securing your credentials",
            type: "bullet",
          },
          {
            text: "Monitoring integrations",
            type: "bullet",
          },
        ],
      },
      {
        id: "api-keys-tokens",
        title: "API Keys and Tokens",
        content: "",
        items: [
          {
            text: "Generate keys in account settings",
            type: "bullet",
          },
          {
            text: "Treat as passwords (keep secret)",
            type: "bullet",
          },
          {
            text: "Never share or embed in code",
            type: "bullet",
          },
          {
            text: "Rotate regularly (recommended: quarterly)",
            type: "bullet",
          },
          {
            text: "Revoke if suspected compromised",
            type: "bullet",
          },
          {
            text: "We're not liable if you leak your key",
            type: "bullet",
          },
        ],
      },
      {
        id: "integration-failures",
        title: "Integration Failures",
        content: "If integration fails:",
        items: [
          {
            text: "Check third-party service status first",
            type: "bullet",
          },
          {
            text: "Check your configuration",
            type: "bullet",
          },
          {
            text: "Email us: info@aiaugmented.io",
            type: "bullet",
          },
          {
            text: "We'll troubleshoot within 24 hours",
            type: "bullet",
          },
          {
            text: "We'll help identify issue (may not be us)",
            type: "bullet",
          },
        ],
      },
      {
        id: "data-in-transit",
        title: "Data in Transit",
        content: "Data between our platform and integrations:",
        items: [
          {
            text: "Encrypted in transit (TLS)",
            type: "bullet",
          },
          {
            text: "Encrypted at destination (third-party's responsibility)",
            type: "bullet",
          },
          {
            text: "We're not liable for interception",
            type: "bullet",
          },
          {
            text: "You're responsible for ensuring destination security",
            type: "bullet",
          },
        ],
      },
      {
        id: "webhook-data",
        title: "Webhook Data",
        content: "If using webhooks:",
        items: [
          {
            text: "Verify webhook authenticity (signature verification)",
            type: "bullet",
          },
          {
            text: "Don't trust unverified webhooks",
            type: "bullet",
          },
          {
            text: "Implement timeout/retry logic",
            type: "bullet",
          },
          {
            text: "Handle errors gracefully",
            type: "bullet",
          },
          {
            text: "Log all webhook activity",
            type: "bullet",
          },
          {
            text: "Secure your webhook endpoints",
            type: "bullet",
          },
        ],
      },
      {
        id: "integration-deprecation",
        title: "Deprecation",
        content: "If we deprecate an integration:",
        items: [
          {
            text: "30-day notice provided",
            type: "bullet",
          },
          {
            text: "Time to migrate to alternative",
            type: "bullet",
          },
          {
            text: "No new integrations created",
            type: "bullet",
          },
          {
            text: "Existing integrations continue (best-effort)",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "26",
    title: "Benchmarking and Competitive Analysis",
    content: "",
    subsections: [
      {
        id: "what-you-can-benchmark",
        title: "What You CAN Do",
        content: "Benchmarking is permitted:",
        items: [
          {
            text: "Test our platform against competitors",
            type: "bullet",
          },
          {
            text: "Publish neutral benchmark results",
            type: "bullet",
          },
          {
            text: 'Compare features ("Platform A has X, Platform B has Y")',
            type: "bullet",
          },
          {
            text: 'Share honest review ("I tested and found...")',
            type: "bullet",
          },
          {
            text: 'Cite performance metrics ("Response time was X seconds")',
            type: "bullet",
          },
          {
            text: 'Document limitations ("Couldn\'t do X")',
            type: "bullet",
          },
        ],
      },
      {
        id: "benchmark-examples",
        title: "Examples",
        content: "",
        items: [
          {
            text: '"I benchmarked AI-Augmented vs. ChatGPT for financial analysis"',
            type: "check",
          },
          {
            text: '"Here\'s a comparison of accuracy on 100 test cases"',
            type: "check",
          },
          {
            text: '"Response time was 3 seconds on average"',
            type: "check",
          },
          {
            text: '"The platform lacks X feature but excels at Y"',
            type: "check",
          },
        ],
      },
      {
        id: "what-you-cannot-claim-benchmark",
        title: "What You CANNOT Claim",
        content: "",
        items: [
          {
            text: "That you represent us officially (unless licensed partner)",
            type: "cross",
          },
          {
            text: "That we endorse your benchmark",
            type: "cross",
          },
          {
            text: "That your benchmark is definitive",
            type: "cross",
          },
          {
            text: "That we provided specific support/data for benchmark",
            type: "cross",
          },
          {
            text: "That results are certified/official",
            type: "cross",
          },
        ],
      },
      {
        id: "publication-guidelines",
        title: "Publication Guidelines",
        content: "If publishing benchmark results:",
        items: [
          {
            text: "Be accurate: Report what you actually tested",
            type: "bullet",
          },
          {
            text: "Be transparent: Explain methodology",
            type: "bullet",
          },
          {
            text: "Be fair: Include strengths AND weaknesses",
            type: "bullet",
          },
          {
            text: "Be honest: Don't misrepresent findings",
            type: "bullet",
          },
          {
            text: 'Disclose limitations: "This test used X data" / "Only tested Y scenario"',
            type: "bullet",
          },
        ],
      },
      {
        id: "not-benchmarking",
        title: "NOT Benchmarking",
        content: "If your goal is NOT benchmarking but rather:",
        items: [
          {
            text: "Competitive intelligence to build clone",
            type: "cross",
          },
          {
            text: "Data extraction for model training",
            type: "cross",
          },
          {
            text: "Reverse-engineering our agents",
            type: "cross",
          },
          {
            text: "Testing our security",
            type: "cross",
          },
        ],
        afterContent: "These violate Section 16 (Competitive Use).",
      },
      {
        id: "benchmark-results-ownership",
        title: "Benchmark Results",
        content: "",
        items: [
          {
            text: "You own your benchmark report",
            type: "bullet",
          },
          {
            text: "You can publish freely",
            type: "bullet",
          },
          {
            text: "We may respond publicly with our perspective",
            type: "bullet",
          },
          {
            text: "We may provide data if you ask (optional)",
            type: "bullet",
          },
          {
            text: "We won't sue for honest benchmarks",
            type: "bullet",
          },
        ],
      },
      {
        id: "if-benchmark-wrong",
        title: "What If Benchmark Is Wrong?",
        content: "If your benchmark contains errors:",
        items: [
          {
            text: "We may publicly correct",
            type: "bullet",
          },
          {
            text: "We'll provide factual clarification",
            type: "bullet",
          },
          {
            text: "We won't demand takedown",
            type: "bullet",
          },
          {
            text: "We reserve right to dispute methodology",
            type: "bullet",
          },
          {
            text: "Honest errors are OK",
            type: "bullet",
          },
        ],
      },
      {
        id: "benchmark-attribution",
        title: "Attribution",
        content: "If mentioning us in benchmark:",
        items: [
          {
            text: 'Name us accurately: "AI-Augmented"',
            type: "check",
          },
          {
            text: "Link to our website: https://aiaugmented.io",
            type: "check",
          },
          {
            text: 'Describe accurately: "An AI-powered strategic decision platform"',
            type: "check",
          },
          {
            text: "Don't misname or misrepresent",
            type: "cross",
          },
        ],
      },
    ],
  },
  {
    id: "27",
    title: "Audit Trail and Account Activity Logging",
    content: "",
    subsections: [
      {
        id: "we-maintain-audit-logs",
        title: "We Maintain Audit Logs",
        content:
          "For enterprise accounts and multi-user access, we maintain audit logs of:",
      },
      {
        id: "what-we-log",
        title: "What We Log",
        content: "",
        items: [
          {
            text: "User login attempts (success/failure)",
            type: "bullet",
          },
          {
            text: "Data exports (when, what files)",
            type: "bullet",
          },
          {
            text: "Report generation (time, type)",
            type: "bullet",
          },
          {
            text: "Decision Canvas creation/modification",
            type: "bullet",
          },
          {
            text: "File uploads and deletions",
            type: "bullet",
          },
          {
            text: "Account settings changes",
            type: "bullet",
          },
          {
            text: "Permission changes (multi-user)",
            type: "bullet",
          },
          {
            text: "API calls (if applicable)",
            type: "bullet",
          },
        ],
      },
      {
        id: "log-retention",
        title: "Log Retention",
        content: "",
        items: [
          {
            text: "Stored for 12 months",
            type: "bullet",
          },
          {
            text: "Searchable by date/user/action",
            type: "bullet",
          },
          {
            text: "Encrypted at rest",
            type: "bullet",
          },
          {
            text: "Backed up with other system data",
            type: "bullet",
          },
        ],
      },
      {
        id: "who-can-access-logs",
        title: "Who Can Access Logs",
        content: "",
        items: [
          {
            text: "Enterprise customers: Can request audit logs",
            type: "bullet",
          },
          {
            text: "You personally: Can view your own activities",
            type: "bullet",
          },
          {
            text: "Law enforcement: With valid legal process",
            type: "bullet",
          },
          {
            text: "Support team: For troubleshooting (with authorization)",
            type: "bullet",
          },
        ],
      },
      {
        id: "request-audit-logs",
        title: "How to Request Audit Logs",
        content: "",
        items: [
          {
            text: "Email: info@aiaugmented.io",
            type: "bullet",
          },
          {
            label: "Include:",
            text: "",
            items: [
              {
                text: "Date range (specific dates)",
                type: "bullet",
              },
              {
                text: "Type of activity (logins, exports, etc.)",
                type: "bullet",
              },
              {
                text: "User (if multi-user account)",
                type: "bullet",
              },
            ],
          },
          {
            text: "Response: Within 10 business days",
            type: "bullet",
          },
        ],
      },
      {
        id: "compliance-use-logs",
        title: "Compliance Use",
        content: "Audit logs provided for:",
        items: [
          {
            text: "Internal audit/compliance",
            type: "check",
          },
          {
            text: "Investigation of suspected abuse",
            type: "check",
          },
          {
            text: "Legal discovery (with warrant)",
            type: "check",
          },
          {
            text: "Regulatory compliance",
            type: "check",
          },
        ],
      },
      {
        id: "log-limitations",
        title: "Limitations",
        content: "",
        items: [
          {
            text: "Logs don't include content of decisions",
            type: "bullet",
          },
          {
            text: "Logs don't include file contents",
            type: "bullet",
          },
          {
            text: "Logs show actions, not thinking process",
            type: "bullet",
          },
          {
            text: "Logs may not be 100% complete (technical limitations)",
            type: "bullet",
          },
        ],
      },
      {
        id: "log-authenticity",
        title: "Log Authenticity",
        content: "Logs are maintained but:",
        items: [
          {
            text: "Not cryptographically signed (upon request for extra security)",
            type: "bullet",
          },
          {
            text: "Not certified notarized (can be upon request)",
            type: "bullet",
          },
          {
            text: "Acceptable for internal audit",
            type: "bullet",
          },
          {
            text: "May require external audit for legal proceedings",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "28",
    title: "Platform Features and API Stability",
    content: "",
    subsections: [
      {
        id: "agent-stability",
        title: "Agent Stability",
        content: "",
        items: [
          {
            label: "During Beta:",
            text: "",
            items: [
              {
                text: "Agents may be updated frequently",
                type: "bullet",
              },
              {
                text: "Behavior may change between versions",
                type: "bullet",
              },
              {
                text: "New analysis frameworks may be introduced",
                type: "bullet",
              },
              {
                text: "Output format may change",
                type: "bullet",
              },
              {
                text: "No guarantee of backwards compatibility",
                type: "bullet",
              },
            ],
          },
          {
            label: "Post-Beta (When Service Exits Beta):",
            text: "",
            items: [
              {
                text: "Agent behavior will be documented",
                type: "bullet",
              },
              {
                text: "Breaking changes require 30-day notice",
                type: "bullet",
              },
              {
                text: "Alternative agents provided if one changes",
                type: "bullet",
              },
              {
                text: "API responses will be stable (within reason)",
                type: "bullet",
              },
            ],
          },
        ],
      },
      {
        id: "api-stability",
        title: "API Stability (If API Provided)",
        content: "",
        items: [
          {
            label: "During Beta:",
            text: "",
            items: [
              {
                text: "API endpoints subject to change",
                type: "bullet",
              },
              {
                text: "Request/response formats may change",
                type: "bullet",
              },
              {
                text: "Rate limits may change",
                type: "bullet",
              },
              {
                text: "Authentication may change",
                type: "bullet",
              },
              {
                text: "No guarantee of backwards compatibility",
                type: "bullet",
              },
            ],
          },
          {
            label: "Post-Beta:",
            text: "",
            items: [
              {
                text: "API versioning: v1, v2, etc.",
                type: "bullet",
              },
              {
                text: "Old versions supported minimum 12 months",
                type: "bullet",
              },
              {
                text: "Deprecation notice: 6 months before removal",
                type: "bullet",
              },
              {
                text: "Migration guide provided",
                type: "bullet",
              },
              {
                text: "Support for migration",
                type: "bullet",
              },
            ],
          },
        ],
      },
      {
        id: "feature-deprecation",
        title: "Feature Deprecation Process",
        content: "If we deprecate a feature:",
        items: [
          {
            text: "Announcement: Public notice in-app and email",
            type: "bullet",
          },
          {
            text: "Timeline: Minimum 30 days for standard features",
            type: "bullet",
          },
          {
            text: "Migration: Alternative provided (if applicable)",
            type: "bullet",
          },
          {
            text: "Support: Help available during transition",
            type: "bullet",
          },
          {
            text: "Removal: Feature goes offline after timeline",
            type: "bullet",
          },
        ],
      },
      {
        id: "performance-commitment",
        title: "Performance",
        content: "We commit to:",
        items: [
          {
            text: "Average response time <5 seconds for queries",
            type: "bullet",
          },
          {
            text: "Peak response time <30 seconds",
            type: "bullet",
          },
          {
            text: "99.5% uptime per Section 12",
            type: "bullet",
          },
          {
            text: "No guarantee for all use cases",
            type: "bullet",
          },
        ],
      },
      {
        id: "new-features",
        title: "New Features",
        content: "When we launch new features:",
        items: [
          {
            text: 'Beta features marked as "Beta"',
            type: "bullet",
          },
          {
            text: "May be unstable",
            type: "bullet",
          },
          {
            text: "May be removed if unsuccessful",
            type: "bullet",
          },
          {
            text: "May change significantly",
            type: "bullet",
          },
          {
            text: "No liability if beta feature fails",
            type: "bullet",
          },
        ],
      },
      {
        id: "breaking-changes",
        title: "Breaking Changes",
        content: "We try to avoid breaking changes, but:",
        items: [
          {
            text: "May be necessary for security",
            type: "bullet",
          },
          {
            text: "May be necessary for compliance",
            type: "bullet",
          },
          {
            text: "May be necessary for major improvements",
            type: "bullet",
          },
          {
            text: "30-day notice provided",
            type: "bullet",
          },
          {
            text: "Migration path offered",
            type: "bullet",
          },
        ],
      },
      {
        id: "billing-cycle",
        title: "Billing Cycle",
        content: "",
        items: [
          {
            text: "Monthly plan: charges every 30 days",
            type: "bullet",
          },
          {
            text: "Annual plan: charges every 365 days",
            type: "bullet",
          },
          {
            text: "Charged on same day of month (or nearest day)",
            type: "bullet",
          },
          {
            text: "First charge immediately upon signup",
            type: "bullet",
          },
          {
            text: "Subsequent charges on anniversary date",
            type: "bullet",
          },
        ],
      },
      {
        id: "renewal",
        title: "Renewal",
        content: "Your subscription automatically renews unless you cancel.",
      },
      {
        id: "cancellation",
        title: "Cancellation",
        content: "You can cancel anytime:",
        items: [
          {
            text: "Via account settings (immediate)",
            type: "bullet",
          },
          {
            text: "Via email to info@aiaugmented.io",
            type: "bullet",
          },
          {
            text: "No questions asked, no penalties",
            type: "bullet",
          },
        ],
      },
      {
        id: "when-cancellation-effective",
        title: "When Cancellation Effective",
        content: "",
        items: [
          {
            text: "Immediate after you submit cancellation",
            type: "bullet",
          },
          {
            text: "Access continues until end of current billing period",
            type: "bullet",
          },
          {
            text: "After that date, account access terminates",
            type: "bullet",
          },
        ],
      },
      {
        id: "cancellation-example",
        title: "Example",
        content: "",
        items: [
          {
            text: "Signup: January 15",
            type: "bullet",
          },
          {
            text: "Billing date: 15th of each month",
            type: "bullet",
          },
          {
            text: "Cancel: March 20",
            type: "bullet",
          },
          {
            text: "Last day of access: April 14",
            type: "bullet",
          },
          {
            text: "Next billing date (avoided): April 15",
            type: "bullet",
          },
        ],
      },
      {
        id: "refunds-policy",
        title: "Refunds",
        content: "We do NOT offer refunds for:",
        items: [
          {
            text: "Unused portions of subscription",
            type: "bullet",
          },
          {
            text: "Change of mind",
            type: "bullet",
          },
          {
            text: "Insufficient use",
            type: "bullet",
          },
          {
            text: "Switching to lower tier",
            type: "bullet",
          },
          {
            text: "Dissatisfaction with Service",
            type: "bullet",
          },
        ],
      },
      {
        id: "refund-exceptions",
        title: "Exceptions (We Will Refund)",
        content: "",
        items: [
          {
            text: "Within 14 days of signup if not used",
            type: "bullet",
          },
          {
            text: "Service not delivered due to our fault",
            type: "bullet",
          },
          {
            text: "Duplicate charge due to our error",
            type: "bullet",
          },
        ],
      },
      {
        id: "refund-process",
        title: "Refund Process",
        content: "",
        items: [
          {
            text: "Request within 30 days of charge",
            type: "bullet",
          },
          {
            text: "Email: info@aiaugmented.io with details",
            type: "bullet",
          },
          {
            text: "We respond within 10 business days",
            type: "bullet",
          },
          {
            text: "Refunds processed within 5-10 business days",
            type: "bullet",
          },
        ],
      },
      {
        id: "reactivation",
        title: "Reactivation",
        content: "If you cancel and want to reactivate:",
        items: [
          {
            text: "Log in and restart subscription",
            type: "bullet",
          },
          {
            text: "Choose same plan or different plan",
            type: "bullet",
          },
          {
            text: "Founding user rate applies (if still founding user)",
            type: "bullet",
          },
          {
            text: "New billing cycle begins",
            type: "bullet",
          },
        ],
      },
      {
        id: "free-trial",
        title: "Free Trial (If Offered)",
        content: "Some promotions include trial periods:",
        items: [
          {
            text: "Full feature access during trial",
            type: "bullet",
          },
          {
            text: "Trial converts to paid subscription automatically",
            type: "bullet",
          },
          {
            text: "We notify you before charging",
            type: "bullet",
          },
          {
            text: "You can cancel before charge date",
            type: "bullet",
          },
          {
            text: "No refund if canceled after charge",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "29",
    title: "Suspension and Termination",
    content: "",
    subsections: [
      {
        id: "suspension-definition",
        title: "Suspension (Temporary Access Removal)",
        content: "We may suspend your account if:",
      },
      {
        id: "suspension-non-payment",
        title: "Non-Payment",
        content: "",
        items: [
          {
            text: "Payment fails and isn't updated within 5 days",
            type: "bullet",
          },
          {
            text: "Account remains suspended until payment received",
            type: "bullet",
          },
          {
            text: "After 30 days, account may be deleted",
            type: "bullet",
          },
        ],
      },
      {
        id: "suspension-violation",
        title: "Violation of Terms",
        content: "",
        items: [
          {
            text: "Prohibited activities (Section 6)",
            type: "bullet",
          },
          {
            text: "Abuse of platform resources",
            type: "bullet",
          },
          {
            text: "Attempts to circumvent security",
            type: "bullet",
          },
          {
            text: "Misuse or harassment",
            type: "bullet",
          },
        ],
      },
      {
        id: "suspension-legal",
        title: "Legal Obligation",
        content: "",
        items: [
          {
            text: "Court order or law enforcement request",
            type: "bullet",
          },
          {
            text: "Regulatory investigation",
            type: "bullet",
          },
          {
            text: "National security concern",
            type: "bullet",
          },
          {
            text: "Export control violation",
            type: "bullet",
          },
        ],
      },
      {
        id: "during-suspension",
        title: "During Suspension",
        content: "",
        items: [
          {
            text: "You cannot access the Service",
            type: "bullet",
          },
          {
            text: "Your Strategic Content is retained",
            type: "bullet",
          },
          {
            text: "No charges occur during suspension",
            type: "bullet",
          },
          {
            text: "You can request restoration if issue resolved",
            type: "bullet",
          },
        ],
      },
      {
        id: "suspension-notice",
        title: "Suspension Notice",
        content: "",
        items: [
          {
            text: "We notify you via email",
            type: "bullet",
          },
          {
            text: "Include reason for suspension",
            type: "bullet",
          },
          {
            text: "Include how to appeal or resolve",
            type: "bullet",
          },
          {
            text: "Appeal process within 10 business days",
            type: "bullet",
          },
        ],
      },
      {
        id: "termination-definition",
        title: "Termination (Permanent Account Deletion)",
        content: "We may terminate your account if:",
      },
      {
        id: "termination-repeated-violations",
        title: "Repeated Violations",
        content: "",
        items: [
          {
            text: "Multiple suspensions for same violation",
            type: "bullet",
          },
          {
            text: "Pattern of misconduct",
            type: "bullet",
          },
          {
            text: "Refusal to comply after notice",
            type: "bullet",
          },
        ],
      },
      {
        id: "termination-severe",
        title: "Severe Violations",
        content: "",
        items: [
          {
            text: "Illegal activity",
            type: "bullet",
          },
          {
            text: "Fraud or deception",
            type: "bullet",
          },
          {
            text: "IP theft or hacking",
            type: "bullet",
          },
          {
            text: "Data of others uploaded without consent",
            type: "bullet",
          },
          {
            text: "Harm to platform or other users",
            type: "bullet",
          },
        ],
      },
      {
        id: "termination-your-request",
        title: "Your Request",
        content: "",
        items: [
          {
            text: "You can request deletion anytime",
            type: "bullet",
          },
          {
            text: "We delete within 30 days",
            type: "bullet",
          },
          {
            text: "Strategic Content deleted per Privacy Policy",
            type: "bullet",
          },
          {
            text: "Account permanently closed",
            type: "bullet",
          },
        ],
      },
      {
        id: "upon-termination",
        title: "Upon Termination",
        content: "",
        items: [
          {
            text: "You have 7 days to export Strategic Content",
            type: "bullet",
          },
          {
            text: "After 7 days, content may be deleted",
            type: "bullet",
          },
          {
            text: "You can request deletion certificate",
            type: "bullet",
          },
          {
            text: "Anonymized patterns retained for improvement",
            type: "bullet",
          },
        ],
      },
      {
        id: "termination-notice",
        title: "Termination Notice",
        content: "",
        items: [
          {
            text: "We notify you via email",
            type: "bullet",
          },
          {
            text: "Include reason if termination by us",
            type: "bullet",
          },
          {
            text: "Include appeal process (if applicable)",
            type: "bullet",
          },
          {
            text: "Include data export instructions",
            type: "bullet",
          },
        ],
      },
      {
        id: "appeal-suspension-termination",
        title: "Appeal Process",
        content: "If we suspend or terminate:",
        items: [
          {
            text: 'Email us - info@aiaugmented.io with "APPEAL"',
            type: "bullet",
          },
          {
            text: "Provide context - Explain why decision was wrong",
            type: "bullet",
          },
          {
            text: "We review - Independent reviewer (not original decision-maker)",
            type: "bullet",
          },
          {
            text: "Timeline - Response within 10 business days",
            type: "bullet",
          },
          {
            text: "Final decision - Binding (unless law requires otherwise)",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "30",
    title: "Dispute Resolution and Governing Law",
    content: "",
    subsections: [
      {
        id: "governing-law",
        title: "Governing Law",
        content:
          "These Terms are governed by the laws of the jurisdiction where AI-Augmented is incorporated, without regard to conflict-of-law principles.",
      },
      {
        id: "informal-resolution",
        title: "Informal Resolution",
        content: "Before legal action, both parties agree to:",
        items: [
          {
            text: "Attempt informal resolution",
            type: "bullet",
          },
          {
            text: "Contact each other in good faith",
            type: "bullet",
          },
          {
            text: "Provide written explanation of dispute",
            type: "bullet",
          },
          {
            text: "Allow 30 days for response and resolution",
            type: "bullet",
          },
          {
            text: "Escalate to senior management if needed",
            type: "bullet",
          },
        ],
        afterContent: "Contact for disputes: info@aiaugmented.io",
      },
      {
        id: "arbitration",
        title: "Arbitration (Where Applicable)",
        content: "If we cannot resolve informally:",
        items: [
          {
            text: "Disputes will be resolved by binding arbitration",
            type: "bullet",
          },
          {
            text: "Administered by American Arbitration Association (AAA)",
            type: "bullet",
          },
          {
            text: "Single arbitrator (except complex cases may need three)",
            type: "bullet",
          },
          {
            text: "Held in English language",
            type: "bullet",
          },
          {
            text: "Each party bears own costs unless arbitrator awards differently",
            type: "bullet",
          },
        ],
      },
      {
        id: "arbitration-exceptions",
        title: "Arbitration Exceptions",
        content: "",
        items: [
          {
            text: "Either party may seek injunctive relief in court",
            type: "bullet",
          },
          {
            text: "IP infringement claims may go to court",
            type: "bullet",
          },
          {
            text: "Small claims court is available for small disputes",
            type: "bullet",
          },
          {
            text: "Either party may appeal arbitration award",
            type: "bullet",
          },
        ],
      },
      {
        id: "class-action-waiver",
        title: "Class Action Waiver",
        content: "You and AI-Augmented agree:",
        items: [
          {
            text: "No class action lawsuits",
            type: "bullet",
          },
          {
            text: "No representative actions",
            type: "bullet",
          },
          {
            text: "No consolidated proceedings",
            type: "bullet",
          },
          {
            text: "Each dispute handled individually",
            type: "bullet",
          },
          {
            text: "Unless law prohibits this waiver",
            type: "bullet",
          },
        ],
      },
      {
        id: "jury-trial-waiver",
        title: "Jury Trial Waiver",
        content: "You waive your right to:",
        items: [
          {
            text: "Jury trial (where permitted by law)",
            type: "bullet",
          },
          {
            text: "Public court proceedings",
            type: "bullet",
          },
          {
            text: "Judge trial if arbitration applies",
            type: "bullet",
          },
        ],
      },
      {
        id: "available-remedies",
        title: "Remedies",
        content: "Available remedies:",
        items: [
          {
            text: "Damages (limited per Section 10)",
            type: "bullet",
          },
          {
            text: "Specific performance (injunctive relief)",
            type: "bullet",
          },
          {
            text: "Declaratory judgment",
            type: "bullet",
          },
          {
            text: "NOT punitive damages or attorney fees (except court awards)",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "31",
    title: "Modifications to Terms",
    content: "",
    subsections: [
      {
        id: "we-may-update-terms",
        title: "We May Update These Terms",
        content: "We may modify these Terms at any time, effective:",
        items: [
          {
            text: "30 days after notification to you",
            type: "bullet",
          },
          {
            text: "Or sooner if required by law",
            type: "bullet",
          },
        ],
      },
      {
        id: "how-we-notify",
        title: "How We Notify",
        content: "",
        items: [
          {
            text: "Email to your registered address",
            type: "bullet",
          },
          {
            text: "In-app notification",
            type: "bullet",
          },
          {
            text: "Website banner",
            type: "bullet",
          },
          {
            text: "We provide summary of changes",
            type: "bullet",
          },
        ],
      },
      {
        id: "your-options-changes",
        title: "Your Options",
        content: "",
        items: [
          {
            text: "Accept new Terms by continued use",
            type: "bullet",
          },
          {
            text: "Reject new Terms by canceling subscription",
            type: "bullet",
          },
          {
            text: "Cancellation must occur before new Terms take effect",
            type: "bullet",
          },
          {
            text: "No penalty for cancellation due to change",
            type: "bullet",
          },
        ],
      },
      {
        id: "material-changes",
        title: "Material Changes",
        content:
          "For material changes (liability, payment terms, or features):",
        items: [
          {
            text: "30-day notice minimum",
            type: "bullet",
          },
          {
            text: "Opportunity to cancel without penalty",
            type: "bullet",
          },
          {
            text: "Can cancel up to end of current billing period",
            type: "bullet",
          },
        ],
      },
      {
        id: "minor-changes",
        title: "Minor Changes",
        content: "For clarifications or non-material updates:",
        items: [
          {
            text: "May take effect immediately",
            type: "bullet",
          },
          {
            text: "Still announced to users",
            type: "bullet",
          },
          {
            text: "Won't materially reduce your rights",
            type: "bullet",
          },
        ],
      },
      {
        id: "privacy-policy-changes",
        title: "Privacy Policy Changes",
        content:
          "Changes to our Privacy Policy may have different timelines (see Privacy Policy Section 16).",
      },
    ],
  },
  {
    id: "32",
    title: "Entire Agreement and Severability",
    content: "",
    subsections: [
      {
        id: "entire-agreement",
        title: "Entire Agreement",
        content:
          "These Terms, together with our Privacy Policy, constitute the entire agreement between you and AI-Augmented regarding the Service.",
      },
      {
        id: "supersedes-prior",
        title: "Supersedes Prior",
        content: "",
        items: [
          {
            text: "All previous agreements",
            type: "bullet",
          },
          {
            text: "All prior negotiations and understandings",
            type: "bullet",
          },
          {
            text: "All prior writings",
            type: "bullet",
          },
          {
            text: "Any oral representations or promises",
            type: "bullet",
          },
        ],
      },
      {
        id: "order-of-precedence",
        title: "Order of Precedence",
        content: "",
        items: [
          {
            text: "These Terms of Service (primary)",
            type: "bullet",
          },
          {
            text: "Privacy Policy (data-specific items)",
            type: "bullet",
          },
          {
            text: "Supplemental agreements (if any)",
            type: "bullet",
          },
          {
            text: "Promotional terms (if applicable)",
            type: "bullet",
          },
        ],
      },
      {
        id: "severability",
        title: "Severability",
        content: "If any provision is found unenforceable:",
        items: [
          {
            text: "That provision is severed",
            type: "bullet",
          },
          {
            text: "Remaining provisions continue in effect",
            type: "bullet",
          },
          {
            text: "Court may modify severed provision to make enforceable",
            type: "bullet",
          },
          {
            text: "Intent of agreement is preserved",
            type: "bullet",
          },
        ],
      },
      {
        id: "waiver",
        title: "Waiver",
        content: "",
        items: [
          {
            text: "No waiver of any provision by failure to enforce",
            type: "bullet",
          },
          {
            text: "Waiver must be in writing and signed",
            type: "bullet",
          },
          {
            text: "Waiver of one provision doesn't waive others",
            type: "bullet",
          },
          {
            text: "No waiver of future breaches",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "33",
    title: "Contact Information",
    content: "",
    subsections: [
      {
        id: "for-all-inquiries",
        title: "For All Inquiries",
        content: "Email: info@aiaugmented.io",
        items: [
          {
            label: "Include:",
            text: "",
            items: [
              {
                text: "Your name and account email",
                type: "bullet",
              },
              {
                text: "Subject of inquiry",
                type: "bullet",
              },
              {
                text: "Specific details and reference numbers",
                type: "bullet",
              },
              {
                text: "Preferred contact method",
                type: "bullet",
              },
            ],
          },
        ],
      },
      {
        id: "response-times",
        title: "Response Times",
        content: "",
        items: [
          {
            text: "Billing inquiries: 5 business days",
            type: "bullet",
          },
          {
            text: "Technical support: 2 business days",
            type: "bullet",
          },
          {
            text: "Privacy/legal inquiries: 10 business days",
            type: "bullet",
          },
          {
            text: "Abuse/violation reports: 48 hours",
            type: "bullet",
          },
        ],
      },
      {
        id: "mailing-address",
        title: "Mailing Address",
        content: "",
        items: [
          {
            text: "AI-Augmented",
            type: "bullet",
          },
          {
            text: "Legal Department",
            type: "bullet",
          },
          {
            text: "[Your physical address when you have one]",
            type: "bullet",
          },
        ],
      },
      {
        id: "online-support",
        title: "Online Support",
        content: "",
        items: [
          {
            text: "Knowledge base: https://aiaugmented.io/help",
            type: "bullet",
          },
          {
            text: "Status page: https://status.aiaugmented.io",
            type: "bullet",
          },
          {
            text: "Community forum: https://community.aiaugmented.io",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "34",
    title: "Acknowledgments and Agreements",
    content: "By using AI-Augmented, you acknowledge and agree that:",
    subsections: [
      {
        id: "acknowledgments",
        title: "Key Acknowledgments",
        content: "",
        items: [
          {
            text: "You have read and understand these Terms",
            type: "check",
          },
          {
            text: "You are legally bound by these Terms",
            type: "check",
          },
          {
            text: "You are responsible for your use of the Service",
            type: "check",
          },
          {
            text: "Agents provide analysis, not guarantees",
            type: "check",
          },
          {
            text: "You make final decisions, not our agents",
            type: "check",
          },
          {
            text: "You've been warned of liability limitations",
            type: "check",
          },
          {
            text: "You indemnify us for your violations",
            type: "check",
          },
          {
            text: "You will not engage in prohibited activities",
            type: "check",
          },
          {
            text: "You understand IP ownership",
            type: "check",
          },
          {
            text: "You accept all disclaimers",
            type: "check",
          },
        ],
      },
      {
        id: "disputes-acknowledgment",
        title: "Dispute Resolution",
        content:
          "Disputes will be resolved per Section 30 (Arbitration/Governing Law)",
      },
    ],
  },
  {
    id: "35",
    title: "Definitions",
    content: "",
    subsections: [
      {
        id: "key-definitions",
        title: "Key Terms Defined",
        content: "",
        items: [
          {
            label: '"Service"',
            text: "The AI-Augmented platform, agents, features, and all related services",
          },
          {
            label: '"Strategic Content"',
            text: "Your inputs, Decision Canvas, reports, uploaded files, and conversation history",
          },
          {
            label: '"Agents"',
            text: "The five specialized AI agents: Market Compass, Financial Guardian, Strategy Analyst, People Advisor, Action Architect",
          },
          {
            label: '"Account"',
            text: "Your user account with login credentials and associated data",
          },
          {
            label: '"Subscription"',
            text: "Your paid access to the Service",
          },
          {
            label: '"Terms"',
            text: "These Terms of Service",
          },
          {
            label: '"Privacy Policy"',
            text: "Our Privacy Policy available at info@aiaugmented.io",
          },
          {
            label: '"You/User"',
            text: "The individual or organization using the Service",
          },
          {
            label: '"We/Us/Company"',
            text: "AI-Augmented and all affiliated entities",
          },
          {
            label: '"Third Party"',
            text: "Any person or entity other than you or us",
          },
          {
            label: '"Force Majeure"',
            text: "Events beyond reasonable control (acts of God, war, natural disasters, etc.)",
          },
        ],
      },
    ],
  },
  {
    id: "36",
    title: "Severability and Survival",
    content: "",
    subsections: [
      {
        id: "surviving-provisions",
        title: "Surviving Provisions",
        content: "The following sections survive termination:",
        items: [
          {
            text: "Section 7 (Intellectual Property Rights)",
            type: "bullet",
          },
          {
            text: "Section 8 (User Content Ownership)",
            type: "bullet",
          },
          {
            text: "Section 10 (Limitation of Liability)",
            type: "bullet",
          },
          {
            text: "Section 11 (Indemnification)",
            type: "bullet",
          },
          {
            text: "Section 30 (Dispute Resolution)",
            type: "bullet",
          },
          {
            text: "Section 16-20 (General provisions)",
            type: "bullet",
          },
        ],
      },
      {
        id: "survival-applies",
        title: "Survival Applies",
        content: "",
        items: [
          {
            text: "After account termination",
            type: "bullet",
          },
          {
            text: "After subscription cancellation",
            type: "bullet",
          },
          {
            text: "After service discontinuation",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "37",
    title: "Third-Party Links and Services",
    content: "",
    subsections: [
      {
        id: "we-may-link",
        title: "We May Link To Third Parties",
        content:
          "The Service may contain links to third-party websites and services:",
        items: [
          {
            text: "We don't control third-party content",
            type: "bullet",
          },
          {
            text: "We're not responsible for third-party services",
            type: "bullet",
          },
          {
            text: "Links don't imply endorsement",
            type: "bullet",
          },
          {
            text: "Your use of third-party services is your responsibility",
            type: "bullet",
          },
        ],
      },
      {
        id: "third-party-terms",
        title: "Third-Party Terms",
        content: "",
        items: [
          {
            text: "You agree to third-party terms separately",
            type: "bullet",
          },
          {
            text: "We're not liable for third-party conduct",
            type: "bullet",
          },
          {
            text: "Disputes with third parties are between you and them",
            type: "bullet",
          },
          {
            text: "We're not responsible for third-party data collection",
            type: "bullet",
          },
        ],
      },
      {
        id: "data-sharing-third-parties",
        title: "Data Sharing With Third Parties",
        content: "Per our Privacy Policy:",
        items: [
          {
            text: "We share minimal context for real-time intelligence",
            type: "bullet",
          },
          {
            text: "We don't share your proprietary content",
            type: "bullet",
          },
          {
            text: "Third parties are bound by data protection agreements",
            type: "bullet",
          },
          {
            text: "You control what gets shared (via your inputs)",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "38",
    title: "Accessibility",
    content: "",
    subsections: [
      {
        id: "commitment-accessibility",
        title: "Commitment to Accessibility",
        content:
          "We work to make the Service accessible to all users, including those with disabilities.",
      },
      {
        id: "if-accessibility-issues",
        title: "If You Have Accessibility Issues",
        content: "",
        items: [
          {
            text: "Contact: info@aiaugmented.io",
            type: "bullet",
          },
          {
            text: "Describe the specific issue",
            type: "bullet",
          },
          {
            text: "Include assistive technology you're using",
            type: "bullet",
          },
          {
            text: "We'll work to accommodate your needs",
            type: "bullet",
          },
        ],
      },
      {
        id: "accessibility-standards",
        title: "Accessibility Standards",
        content: "",
        items: [
          {
            text: "We follow WCAG 2.1 guidelines where feasible",
            type: "bullet",
          },
          {
            text: "We continue to improve accessibility",
            type: "bullet",
          },
          {
            text: "We welcome feedback on accessibility barriers",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "39",
    title: "Export Controls",
    content: "",
    subsections: [
      {
        id: "export-compliance",
        title: "Export Compliance",
        content:
          "If you're in a restricted jurisdiction or subject to export controls:",
        items: [
          {
            text: "You may not use the Service",
            type: "bullet",
          },
          {
            text: "You're responsible for determining applicability",
            type: "bullet",
          },
          {
            text: "You comply with all export laws",
            type: "bullet",
          },
        ],
      },
      {
        id: "restricted-jurisdictions",
        title: "Restricted Jurisdictions",
        content: "We cannot provide service to:",
        items: [
          {
            text: "Countries under U.S. sanctions (OFAC list)",
            type: "bullet",
          },
          {
            text: "Designated terrorist organizations",
            type: "bullet",
          },
          {
            text: "Individuals on restricted lists",
            type: "bullet",
          },
        ],
      },
      {
        id: "export-your-responsibility",
        title: "Your Responsibility",
        content: "",
        items: [
          {
            text: "Comply with export control laws",
            type: "bullet",
          },
          {
            text: "Don't share access with restricted parties",
            type: "bullet",
          },
          {
            text: "Notify us of any compliance concerns",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "40",
    title: "Government Use",
    content: "",
    subsections: [
      {
        id: "us-federal-government",
        title: "U.S. Federal Government",
        content: "If you're using this on behalf of the U.S. Government:",
        items: [
          {
            text: 'The Service is "commercial computer software"',
            type: "bullet",
          },
          {
            text: "Usage is subject to restricted rights",
            type: "bullet",
          },
          {
            text: "Commercial licenses apply",
            type: "bullet",
          },
          {
            text: "See FAR 12.212 and DFARS 227.7202",
            type: "bullet",
          },
        ],
      },
      {
        id: "non-us-governments",
        title: "Non-U.S. Governments",
        content: "Different terms may apply depending on jurisdiction.",
        items: [
          {
            text: "Contact: info@aiaugmented.io for government-specific terms.",
          },
        ],
      },
    ],
  },
  {
    id: "41",
    title: "QUICK REFERENCE: KEY POINTS",
    content: "Summary of essential terms and policies:",
    subsections: [
      {
        id: "key-points-table",
        title: "Key Points Summary",
        content: "",
        table: {
          headers: ["Item", "Policy"],
          rows: [
            ["Cost", "$149/month (founding rate locked indefinitely)"],
            ["Billing", "Auto-renews monthly; cancel anytime"],
            [
              "Refund Policy",
              "No refunds for unused time (except 14-day trial)",
            ],
            ["Your Data", "You own it; we don't train models on it"],
            ["Our IP", "We own all platform, agents, algorithms"],
            ["Accuracy", "No guarantees; you must verify independently"],
            ["Liability", "Limited to 12 months of fees paid"],
            ["Uptime", "99.5% monthly commitment"],
            ["Suspension", "We can suspend for violations or non-payment"],
            ["Disputes", "Binding arbitration (Section 30)"],
            ["Changes", "30-day notice for material changes"],
            [
              "Cancellation",
              "Immediate; access continues through billing period",
            ],
          ],
        },
      },
    ],
  },
];
