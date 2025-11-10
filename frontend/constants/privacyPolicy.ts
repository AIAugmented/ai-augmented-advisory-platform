export interface PolicySection {
  id: string;
  title: string;
  content: string | string[];
  subsections?: PolicySubsection[];
}

export interface PolicySubsection {
  id: string;
  title: string;
  content?: string | string[];
  items?: PolicyItem[];
  example?: PolicyItem;
  table?: PolicyTable;
  afterContent?: string;
}

export interface PolicyItem {
  label?: string;
  text?: string;
  items?: PolicyItem[];
  example?: PolicyItem;
  type?: "check" | "cross" | "bullet";
}

export interface PolicyTable {
  headers: string[];
  rows: string[][];
}

export const PRIVACY_POLICY_META = {
  effectiveDate: "October 19, 2025",
  company: "AI-Augmented",
  service: 'AI-Augmented (The "Platform")',
  contact: "info@aiaugmented.io",
  lastUpdated: "October 19, 2025",
  nextReview: "October 19, 2026",
};

export const PRIVACY_POLICY_INTRO = {
  title: "Our Core Commitment",
  paragraphs: [
    "Your strategic thinking is yours. Your proprietary content stays protected. Your decisions remain confidential.",
    "We use AI to help you think sharply. We improve our AI responsibly. We never compromise your privacy in the process.",
    "This privacy policy explains exactly how we do that.",
  ],
};

export const PRIVACY_POLICY_SECTIONS: PolicySection[] = [
  {
    id: "1",
    title: "The Proprietary Content Protection Pledge",
    content: "",
    subsections: [
      {
        id: "what-we-promise",
        title: "What We Promise",
        content:
          "Your strategic inputs, decisions, and proprietary business content will NEVER be used to train, fine-tune, or improve our core AI models.",
      },
      {
        id: "specifically",
        title: "Specifically",
        items: [
          {
            text: "Your strategic questions and decision frameworks stay private",
            type: "bullet",
          },
          {
            text: "Your Decision Canvas and analysis outputs are yours alone",
            type: "bullet",
          },
          {
            text: "Your uploaded documents and context files are protected",
            type: "bullet",
          },
          {
            text: "Your competitive analysis remains confidential",
            type: "bullet",
          },
          {
            text: "Your thinking process is never exposed to external parties",
            type: "bullet",
          },
        ],
      },
      {
        id: "how-we-keep-promise",
        title: "How We Keep This Promise",
        content:
          "Your proprietary content is processed in isolation. It is used exclusively to:",
        items: [
          {
            text: "Generate the insights and analysis you request",
            type: "bullet",
          },
          {
            text: "Maintain your Permanent Memory within your account",
            type: "bullet",
          },
          {
            text: "Improve your personal user experience (within your account only)",
            type: "bullet",
          },
        ],
        afterContent:
          "Your content does NOT feed into our model training pipeline. Your competitors' agents don't learn from your strategic insights. Ever.",
      },
    ],
  },
  {
    id: "2",
    title: "How We Collect and Use Data",
    content: [
      "Three Tiers of Data",
      "To build trust, we're transparent about what data we collect and why.",
    ],
    subsections: [
      {
        id: "tier-1",
        title: "TIER 1: PROPRIETARY CONTENT (Your Strategic Thinking)",
        content: "",
        items: [
          {
            label: "What We Collect",
            items: [
              {
                text: "Strategic questions and decision requests",
                type: "bullet",
              },
              { text: "Your inputs to the Decision Canvas", type: "bullet" },
              {
                text: "Business documents you upload for context",
                type: "bullet",
              },
              {
                text: "Conversation history with The Chief of Staff",
                type: "bullet",
              },
              {
                text: "Generated outputs and reports you create",
                type: "bullet",
              },
            ],
          },
          {
            label: "Why We Collect It",
            text: "To provide the core service: analyzing your decisions from multiple angles and maintaining your strategic memory.",
          },
          {
            label: "How We Use It",
            items: [
              {
                text: "To generate insights specific to your requests",
                type: "check",
              },
              {
                text: "To maintain your Permanent Memory feature",
                type: "check",
              },
              {
                text: "To improve your personal experience on the platform",
                type: "check",
              },
            ],
          },
          {
            label: "What We DO NOT Do",
            items: [
              { text: "Train our AI models on your content", type: "cross" },
              {
                text: "Share your content with competitors or external parties",
                type: "cross",
              },
              { text: "Expose your thinking process to anyone", type: "cross" },
              {
                text: "Use your proprietary context for any purpose outside serving your requests",
                type: "cross",
              },
            ],
          },
          {
            label: "Your Control",
            items: [
              { text: "You own all content in your account", type: "bullet" },
              {
                text: "You can export, delete, or modify content anytime",
                type: "bullet",
              },
              {
                text: "Upon account deletion, your content is permanently removed within 30 days",
                type: "bullet",
              },
              {
                text: "You have the right to access everything we have on you",
                type: "bullet",
              },
            ],
          },
          {
            label: "Legal Basis (GDPR/CCPA/PDPA)",
            items: [
              {
                text: "Service provision (contractual necessity)",
                type: "bullet",
              },
              { text: "Your explicit consent", type: "bullet" },
              { text: "Your user control over your own data", type: "bullet" },
            ],
          },
        ],
      },
      {
        id: "tier-2",
        title: "TIER 2: INTERACTION PATTERNS (How You Use AI-Augmented)",
        content: "",
        items: [
          {
            label: "What We Collect",
            items: [
              {
                text: "Which types of decisions users find most valuable",
                type: "bullet",
              },
              {
                text: "Which agent combinations generate the strongest insights",
                type: "bullet",
              },
              {
                text: "How different strategic frameworks perform",
                type: "bullet",
              },
              {
                text: "Language patterns that improve agent responses",
                type: "bullet",
              },
              {
                text: "Aggregate decision outcomes (anonymized)",
                type: "bullet",
              },
            ],
          },
          {
            label: "Why We Collect It",
            text: "To make our agents smarter for you and all users. Your experience improves as the platform learns.",
          },
          {
            label: "How We Use It",
            items: [
              {
                text: "Improve agent intelligence and accuracy",
                type: "check",
              },
              {
                text: "Understand which decision types work best",
                type: "check",
              },
              {
                text: "Optimize the platform for better outcomes",
                type: "check",
              },
              { text: "Identify patterns that help all users", type: "check" },
            ],
          },
          {
            label: "The Anonymization Standard",
            items: [
              {
                text: "All proprietary content is removed before analysis",
                type: "bullet",
              },
              {
                text: "User identity is tokenized (cannot be reverse-engineered)",
                type: "bullet",
              },
              {
                text: "Company context is stripped away",
                type: "bullet",
              },
              {
                text: "We analyze only the interaction pattern, not the business context",
                type: "bullet",
              },
            ],
            example: {
              label: "Example",
              items: [
                {
                  text: `We see: "Financial analysis + Competitive intelligence + Risk modeling produces strong strategic outcomes"`,
                  type: "check",
                },
                {
                  text: `We never see: "TechCorp is acquiring FinanceStart" or "User X works at Y company"`,
                  type: "cross",
                },
              ],
            },
          },
          {
            label: "Your Consent & Control",
            text: `By using AI-Augmented, you consent to this pattern-learning approach. 
            
            If you prefer we do NOT use your anonymized interaction patterns to improve our platform:`,
            items: [
              {
                text: "Email us at info@aiaugmented.io to opt-out",
                type: "bullet",
              },
              {
                text: `Reference: "Opt-out of Pattern Learning"`,
                type: "bullet",
              },
              {
                text: "We'll flag your account for opt-out",
                type: "bullet",
              },
              { text: "You can opt back in anytime", type: "bullet" },
              {
                text: "Your experience may be slightly less optimized, but your preference is respected",
                type: "bullet",
              },
            ],
          },
          {
            label: "Legal Basis (GDPR/CCPA/PDPA)",
            items: [
              {
                text: "Legitimate business interest (improving service quality)",
                type: "bullet",
              },
              { text: "Your informed consent", type: "bullet" },
              {
                text: 'Right to opt-out (CCPA: "Right to Opt-Out of Sale or Sharing")',
                type: "bullet",
              },
            ],
          },
        ],
      },
      {
        id: "tier-3",
        title: "TIER 3: TECHNICAL DATA (Platform Operations)",
        content: "",
        items: [
          {
            label: "What We Collect",
            items: [
              {
                text: "Login information and account activity",
                type: "bullet",
              },
              { text: "IP addresses and device information", type: "bullet" },
              { text: "Query timestamps and response times", type: "bullet" },
              { text: "System performance metrics", type: "bullet" },
              { text: "Error logs and debugging information", type: "bullet" },
              { text: "Billing and subscription data", type: "bullet" },
            ],
          },
          {
            label: "Why We Collect It",
            text: "To operate the platform safely, prevent fraud, and maintain security and performance.",
          },
          {
            label: "How We Use It",
            items: [
              { text: "Maintain platform availability", type: "check" },
              { text: "Prevent unauthorized access and fraud", type: "check" },
              { text: "Debug technical issues", type: "check" },
              { text: "Monitor system performance", type: "check" },
              { text: "Comply with legal obligations", type: "check" },
            ],
          },
          {
            label: "Your Control",
            items: [
              {
                text: "You can request access to your technical data",
                type: "bullet",
              },
              {
                text: "You can request deletion of certain technical logs (within legal limits)",
                type: "bullet",
              },
              {
                text: "We retain technical data for 12 months for security purposes, then delete",
                type: "bullet",
              },
            ],
          },
          {
            label: "Legal Basis (GDPR/CCPA/PDPA)",
            items: [
              {
                text: "Legitimate business interest (security and operations)",
                type: "bullet",
              },
              { text: "Legal compliance obligation", type: "bullet" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Data Retention and Deletion",
    content: "",
    subsections: [
      {
        id: "retention-table",
        title: "For Strategic Authority Plan (Paid Users)",
        content: "",
        table: {
          headers: ["Data Category", "Retention", "Purpose"],
          rows: [
            [
              "Proprietary Content",
              "Permanent (until you delete)",
              "Your Permanent Memory feature",
            ],
            [
              "Interaction Patterns",
              "Indefinite (anonymized)",
              "Platform improvement",
            ],
            ["Technical Data", "12 months", "Security and operations"],
            ["Account Data", "Until account deletion", "Service management"],
          ],
        },
      },
      {
        id: "account-deletion",
        title: "Upon Account Deletion",
        content: "",
        items: [
          {
            text: "Your proprietary content is permanently deleted within 30 days",
            type: "bullet",
          },
          { text: "Your account data is removed", type: "bullet" },
          {
            text: "Anonymized interaction patterns remain (cannot be traced to you)",
            type: "bullet",
          },
          {
            text: "Technical logs are deleted after 12 months",
            type: "bullet",
          },
        ],
      },
      {
        id: "data-export",
        title: "Data Export",
        content: "",
        items: [
          {
            text: "You can export all your Strategic Content anytime",
            type: "bullet",
          },
          {
            text: "Download your Decision Canvas, reports, and conversation history",
            type: "bullet",
          },
          { text: "Take your thinking with you, in full", type: "bullet" },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "How We Keep Your Data Secure",
    content: "",
    subsections: [
      {
        id: "encryption",
        title: "Encryption Standards",
        content: "",
        items: [
          {
            text: "Data in transit: Industry-standard TLS encryption",
            type: "bullet",
          },
          {
            text: "Data at rest: Enterprise-grade encryption protocols",
            type: "bullet",
          },
          {
            text: "Access controls: Role-based access, strict internal policies",
            type: "bullet",
          },
        ],
      },
      {
        id: "third-party",
        title: "Third-Party Processors",
        content: "We work with trusted partners for specific functions:",
        items: [
          {
            text: "Cloud hosting and infrastructure",
            type: "bullet",
          },
          {
            text: "Payment processing",
            type: "bullet",
          },
          {
            text: "Data backup and recovery",
            type: "bullet",
          },
        ],
        afterContent:
          "All third-party processors are bound by strict data protection agreements and process data only as directed by us.",
      },
      {
        id: "proprietary-protection",
        title: "Proprietary Protection",
        content:
          "Our technical architecture, anonymization methods, and security protocols are proprietary and subject to change without notice.",
      },
    ],
  },
  {
    id: "5",
    title: "Data Security Incidents and Breach Notification",
    content: "",
    subsections: [
      {
        id: "commitment",
        title: "Our Commitment",
        content:
          "In the event of a data breach or security incident, we are committed to transparency and timely notification.",
      },
      {
        id: "what-well-do",
        title: "What We'll Do",
        content: "If a security incident affects your data, we will:",
        items: [
          {
            text: "Investigate immediately - Determine what data was affected, how, and when",
            type: "bullet",
          },
          {
            text: 'Notify you promptly - Within 72 hours under GDPR; "without unreasonable delay" under CCPA',
            type: "bullet",
          },
          {
            text: "Provide details - What data was involved, scope of incident, steps taken to contain it",
            type: "bullet",
          },
          {
            text: "Explain next steps - What you should do to protect yourself",
            type: "bullet",
          },
          {
            text: "Maintain transparency - Ongoing updates on incident status and remediation",
            type: "bullet",
          },
        ],
      },
      {
        id: "notification-content",
        title: "Your Notification Will Include",
        content: "",
        items: [
          { text: "Nature of the security incident", type: "bullet" },
          {
            text: "Data that may have been affected (categories and approximate amount)",
            type: "bullet",
          },
          { text: "How the incident occurred", type: "bullet" },
          {
            text: "Steps we've taken to secure your data",
            type: "bullet",
          },
          {
            text: "Steps you should take to protect yourself (e.g., password reset)",
            type: "bullet",
          },
          { text: "Our incident response actions", type: "bullet" },
          { text: "Contact information for questions", type: "bullet" },
        ],
      },
      {
        id: "data-we-process",
        title: "Data We Process (Impact Assessment)",
        content:
          "We assess which data is most sensitive and prioritize protection:",
      },
      {
        id: "high-priority",
        title: "High-Priority (Immediate Notification)",
        content: "",
        items: [
          {
            text: "Personal identifying information + Strategic Content",
            type: "bullet",
          },
          { text: "Account credentials", type: "bullet" },
          { text: "Payment information", type: "bullet" },
        ],
      },
      {
        id: "medium-priority",
        title: "Medium Priority (Notification within 72 hours)",
        content: "",
        items: [
          {
            text: "Usage patterns",
            type: "bullet",
          },
          { text: "Technical logs", type: "bullet" },
          { text: "IP addresses", type: "bullet" },
        ],
      },
      {
        id: "security-incident-response-team",
        title: "Our Security Incident Response Team",
        content: "",
        items: [
          {
            text: "Response initiated within 1 hour of discovery",
            type: "bullet",
          },
          { text: "Investigation completed within 72 hours", type: "bullet" },
          {
            text: "External security firm may be engaged for serious incidents",
            type: "bullet",
          },
          { text: "Law enforcement notified if required", type: "bullet" },
        ],
      },
      {
        id: "report-vulnerability",
        title: "Report a Security Vulnerability",
        content: "If you discover a security vulnerability in our platform:",
        items: [
          { text: "Email: info@aiaugmented.io", type: "bullet" },
          { text: "We respond within 48 hours.", type: "bullet" },
          { text: "We handle responsibly and professionally.", type: "bullet" },
          {
            text: "Do not publicly disclose until we've had opportunity to fix.",
            type: "bullet",
          },
        ],
      },
      {
        id: "transparency-report",
        title: "Transparency Report",
        content: "We publish an annual report on:",
        items: [
          { text: "Security incidents (if any)", type: "bullet" },
          {
            text: "Data requests received from authorities",
            type: "bullet",
          },
          { text: "Our responses and compliance", type: "bullet" },
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Third-Party Data in User Uploads",
    content: "",
    subsections: [
      {
        id: "your-responsibility",
        title: "Your Responsibility",
        content:
          "You are responsible for ensuring that any data you upload to AI-Augmented complies with applicable law.",
      },
      {
        id: "specifically",
        title: "Specifically",
        content: "Do NOT upload:",
        items: [
          {
            text: "Personal data of employees without consent",
            type: "bullet",
          },
          {
            text: "Emails or names of individuals not affiliated with your organization",
            type: "bullet",
          },
          {
            text: "Confidential health, financial, or personal information about others",
            type: "bullet",
          },
          {
            text: "Data protected by non-disclosure agreements (unless you own/control it)",
            type: "bullet",
          },
        ],
      },
      {
        id: "why-this-matters",
        title: "Why This Matters",
        content:
          "If you upload personal data of third parties, we may be jointly responsible for protecting it. By uploading, you represent that:",
        items: [
          {
            text: "You have the right to share this data with us",
            type: "bullet",
          },
          {
            text: "The data subject has consented (if required)",
            type: "bullet",
          },
          {
            text: "You comply with applicable data protection laws",
            type: "bullet",
          },
        ],
      },
      {
        id: "accidental-upload",
        title: "If You Accidentally Upload Third-Party Data",
        content:
          "If we discover personal data of individuals not part of your organization:",
        items: [
          { text: "We will flag it to you", type: "bullet" },
          {
            text: "We will not use it beyond service provision",
            type: "bullet",
          },
          { text: "We may ask you to delete it", type: "bullet" },
          {
            text: "Upon your request, we will delete it immediately",
            type: "bullet",
          },
          {
            text: "If required by law, we may need to retain for legal reasons",
            type: "bullet",
          },
        ],
      },
      {
        id: "your-indemnification",
        title: "Your Indemnification",
        content:
          "You indemnify AI-Augmented against any claims arising from your upload of third-party personal data without proper authorization.",
      },
    ],
  },
  {
    id: "7",
    title: "Government Requests and Law Enforcement",
    content: "",
    subsections: [
      {
        id: "transparency",
        title: "Transparency on Data Requests",
        content:
          "We may receive requests from governments, law enforcement, regulators, or courts to disclose your data.",
      },
      {
        id: "our-policy",
        title: "Our Policy",
      },
      {
        id: "always",
        title: "We Will Always",
        content: "",
        items: [
          {
            text: "Require a valid legal process (warrant, subpoena, court order)",
            type: "bullet",
          },
          {
            text: "Evaluate the request for legality and legitimacy",
            type: "bullet",
          },
          {
            text: "Notify you of the request when legally permitted to do so",
            type: "bullet",
          },
          {
            text: "Provide you opportunity to challenge the request",
            type: "bullet",
          },
        ],
      },
      {
        id: "resist",
        title: "We Will Resist",
        content: "",
        items: [
          { text: "Overly broad or vague requests", type: "bullet" },
          { text: "Requests that appear legally invalid", type: "bullet" },
          {
            text: "Requests that exceed the scope of lawful authority",
            type: "bullet",
          },
        ],
      },
      {
        id: "comply",
        title: "We Will Comply With",
        content: "",
        items: [
          { text: "Valid court orders and warrants", type: "bullet" },
          { text: "Subpoenas that meet legal standards", type: "bullet" },
          {
            text: "Emergency requests if life/safety is at imminent risk",
            type: "bullet",
          },
        ],
      },
      {
        id: "timeline",
        title: "Timeline",
        content: "",
        items: [
          {
            text: "If legally permitted, we notify you before disclosure (minimum 10 days unless court prohibits)",
            type: "bullet",
          },
          {
            text: "We provide you opportunity to seek judicial review",
            type: "bullet",
          },
          {
            text: "We disclose only the minimum data legally required",
            type: "bullet",
          },
        ],
      },
      {
        id: "what-well-tell-you",
        title: "What We'll Tell You",
        content: "When notifying you of a government request, we'll include:",
        items: [
          { text: "Nature of the request", type: "bullet" },
          { text: "Type of authority making the request", type: "bullet" },
          {
            text: "Type of legal process (warrant, subpoena, etc.)",
            type: "bullet",
          },
          { text: "Deadline for compliance", type: "bullet" },
          { text: "Scope of data requested", type: "bullet" },
          { text: "Your rights to challenge", type: "bullet" },
        ],
      },
      {
        id: "exceptions",
        title: "Exceptions",
        content: "We may NOT notify you if:",
        items: [
          {
            text: "The government obtains a court order prohibiting notification",
            type: "bullet",
          },
          {
            text: "Notification would interfere with ongoing investigation",
            type: "bullet",
          },
          {
            text: "The matter involves child safety or national security",
            type: "bullet",
          },
        ],
        afterContent:
          "In these cases, we delay notification and notify you as soon as legally permitted",
      },
      {
        id: "annual-transparency-report",
        title: "Annual Transparency Report",
        content: "We publish a Government Requests Report including:",
        items: [
          { text: "Number of requests received", type: "bullet" },
          {
            text: "Types of requests (warrants, subpoenas, etc.)",
            type: "bullet",
          },
          { text: "Jurisdictions making requests", type: "bullet" },
          { text: "Requests we complied with", type: "bullet" },
          { text: "Requests we challenged", type: "bullet" },
          {
            text: "Data disclosed (categories only, not specific information)",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "8",
    title: "Sensitive Personal Data Handling",
    content: "",
    subsections: [
      {
        id: "recognizing",
        title: "Recognizing Sensitive Data",
        content:
          "You may inadvertently upload documents containing sensitive personal data, including:",
        items: [
          { text: "Health information", type: "bullet" },
          { text: "Financial/banking details", type: "bullet" },
          { text: "Government ID numbers", type: "bullet" },
          { text: "Racial or ethnic origin", type: "bullet" },
          { text: "Religious or political beliefs", type: "bullet" },
          { text: "Biometric information", type: "bullet" },
          { text: "Union membership", type: "bullet" },
          { text: "Criminal history", type: "bullet" },
          { text: "Sexual orientation", type: "bullet" },
        ],
      },
      {
        id: "our-approach",
        title: "Our Approach",
        content:
          "While we provide robust protection for all your Strategic Content, sensitive personal data receives additional safeguards. If You Upload Sensitive Data:",
        items: [
          {
            text: "Acknowledge responsibility - You are responsible for having consent/authorization",
            type: "bullet",
          },
          {
            text: "Limited access - Only accessed by AI-Augmented systems to serve your request, never by human staff",
            type: "bullet",
          },
          {
            text: "Enhanced encryption - Applies same encryption standards as all data",
            type: "bullet",
          },
          {
            text: "Immediate flagging - System flags as sensitive for additional care",
            type: "bullet",
          },
          {
            text: "No pattern learning - Sensitive data patterns are excluded from Tier 2 learning",
            type: "bullet",
          },
        ],
      },
      {
        id: "our-policy",
        title: "Our Policy",
        content: "We recommend:",
        items: [
          {
            text: "Redacting sensitive information from documents before upload",
            type: "bullet",
          },
          {
            text: "Using generic placeholders instead of specific data",
            type: "bullet",
          },
          {
            text: "Uploading summaries rather than raw data",
            type: "bullet",
          },
        ],
      },
      {
        id: "if-you-prefer",
        title: "If You Prefer Maximum Sensitivity",
        content:
          "Email: info@aiaugmented.io with 'Sensitive Data Protocol Request' and We can:",
        items: [
          {
            text: "Enable additional encryption layers",
            type: "bullet",
          },
          {
            text: "Restrict access further",
            type: "bullet",
          },
          {
            text: "Exclude your data from any improvement learning",
            type: "bullet",
          },
          {
            text: "Provide audit trails for your data access",
            type: "bullet",
          },
        ],
      },
      {
        id: "data-protection-agreement",
        title: "Data Protection Agreement",
        content: "For enterprise customers processing sensitive data:",
        items: [
          {
            text: "We can execute a Data Processing Agreement (DPA)",
            type: "bullet",
          },
          {
            text: "Includes additional responsibilities and obligations",
            type: "bullet",
          },
          {
            text: "Contact: info@aiaugmented.io",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "9",
    title: "Business Transfer, Acquisition, or Merger",
    content: "",
    subsections: [
      {
        id: "what-happens",
        title: "What Happens to Your Data",
        content:
          "If AI-Augmented is acquired, merged, or undergoes a significant business change, your data may be transferred as part of that transaction.",
      },
      {
        id: "your-rights",
        title: "Your Rights",
        content: "If we are acquired or merge with another company:",
      },
      {
        id: "before-transfer",
        title: "Before Transfer",
        content: "",
        items: [
          {
            text: "You will be notified at your registered email",
            type: "bullet",
          },
          {
            text: "Notification will occur before data transfer when legally possible",
            type: "bullet",
          },
          {
            text: "You will have the opportunity to request deletion of your Strategic Content",
            type: "bullet",
          },
          {
            text: "You have 30 days to export all your data",
            type: "bullet",
          },
        ],
      },
      {
        id: "your-options",
        title: "Your Options",
        content: "In the event of a business transfer:",
        items: [
          {
            text: "Continue - Accept the new privacy policy under the acquiring company",
            type: "bullet",
          },
          {
            text: "Delete - Request permanent deletion of your data before transfer",
            type: "bullet",
          },
          {
            text: "Opt-out - Withdraw from the service and request data deletion",
            type: "bullet",
          },
        ],
      },
      {
        id: "protections-during-transfer",
        title: "Protections During Transfer",
        content: "",
        items: [
          {
            text: `Your Strategic Content remains subject to "No-Training Pledge" during transfer`,
            type: "bullet",
          },
          {
            text: "Acquiring company must honor existing privacy commitments (minimum)",
            type: "bullet",
          },
          {
            text: "Your data will not be sold separately from the acquisition",
            type: "bullet",
          },
        ],
      },
      {
        id: "if-you-disagree",
        title: "If You Disagree:",
        content: "",
        items: [
          {
            text: "You can request deletion instead of transfer",
            type: "bullet",
          },
          {
            text: "We will permanently delete your Strategic Content within 30 days",
            type: "bullet",
          },
          {
            text: "You will have received access to export before deletion",
            type: "bullet",
          },
        ],
      },
      {
        id: "exceptions-to-notification",
        title: "Exceptions to Notification:",
        content:
          "In rare cases, we may not be able to notify you before transfer:",
        items: [
          {
            text: "Court order prohibits notification",
            type: "bullet",
          },
          {
            text: "Acquiring company requires confidentiality during due diligence",
            type: "bullet",
          },
          {
            text: "Asset sale to prevent company failure",
            type: "bullet",
          },
        ],
        afterContent:
          "In these cases, we notify you as soon as legally permitted and provide same opt-out rights.",
      },
      {
        id: "data-controller-change",
        title: "Data Controller Change",
        content: "If acquired:",
        items: [
          {
            text: "New company becomes data controller for account data",
            type: "bullet",
          },
          {
            text: "You may have different privacy policies",
            type: "bullet",
          },
          {
            text: "You have right to review and accept/reject new terms",
            type: "bullet",
          },
          {
            text: "Right to delete if you don't accept",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "10",
    title: "Enterprise Audit and Compliance",
    content: "",
    subsections: [
      {
        id: "enterprise-overview",
        title: "For Enterprise Customers",
        content:
          "Organizations processing sensitive or strategic data may require compliance verification.",
      },
      {
        id: "available-services",
        title: "Available to Enterprise Customers",
        content: "",
        items: [
          {
            label: "1. Data Processing Agreement (DPA)",
            items: [
              {
                text: "Formal contractual terms beyond this privacy policy",
                type: "bullet",
              },
              {
                text: "Defines roles, responsibilities, and data handling",
                type: "bullet",
              },
              {
                text: "Includes standard clauses for GDPR and other frameworks",
                type: "bullet",
              },
              {
                text: "Custom terms available for negotiation",
                type: "bullet",
              },
            ],
          },
          {
            label: "2. Security Certifications",
            text: "",
            items: [
              {
                text: "SOC 2 Type II audit (available upon request)",
                type: "bullet",
              },
              {
                text: "Regular third-party security assessments",
                type: "bullet",
              },
              {
                text: "Penetration testing results (executive summary)",
                type: "bullet",
              },
              {
                text: "Compliance roadmap for emerging standards",
                type: "bullet",
              },
            ],
          },
          {
            label: "3. Audit Rights",
            text: "",
            items: [
              {
                text: "Right to audit our data processing practices",
                type: "bullet",
              },
              {
                text: "Limited to 2 audits per year",
                type: "bullet",
              },
              {
                text: "Conducted by third-party auditor at your expense (or mutually agreed)",
                type: "bullet",
              },
              {
                text: "30-day advance notice required",
                type: "bullet",
              },
              {
                text: "Auditor must sign confidentiality agreement",
                type: "bullet",
              },
            ],
          },
          {
            label: "4. Subprocessor Visibility",
            text: "",
            items: [
              {
                text: "Request current list of subprocessors",
                type: "bullet",
              },
              {
                text: "15-day notification of subprocessor changes",
                type: "bullet",
              },
              {
                text: "Right to object to new subprocessors",
                type: "bullet",
              },
              {
                text: "Alternative arrangements if you object",
                type: "bullet",
              },
            ],
          },
          {
            label: "5. Data Processing Transparency",
            text: "",
            items: [
              {
                text: "Regular reports on data processing",
                type: "bullet",
              },
              {
                text: "Quarterly compliance certifications",
                type: "bullet",
              },
              {
                text: "Annual data handling summaries",
                type: "bullet",
              },
              {
                text: "Response to compliance questionnaires",
                type: "bullet",
              },
            ],
          },
          {
            label: "6. Incident Response SLA",
            text: "",
            items: [
              {
                text: "Priority handling of your security incidents",
                type: "bullet",
              },
              {
                text: "4-hour initial response",
                type: "bullet",
              },
              {
                text: "24-hour incident assessment",
                type: "bullet",
              },
              {
                text: "Daily updates until resolution",
                type: "bullet",
              },
            ],
          },
          {
            label: "7. Data Residency Options",
            text: "",
            items: [
              {
                text: "Data storage in specific regions (if available)",
                type: "bullet",
              },
              {
                text: "Compliance with data localization requirements",
                type: "bullet",
              },
              {
                text: "Contractual guarantees of data location",
                type: "bullet",
              },
            ],
          },
        ],
      },
      {
        id: "request-enterprise-compliance",
        title: "How to Request Enterprise Compliance",
        content: "Email: info@aiaugmented.io, including:",
        items: [
          {
            text: "Company name and size",
            type: "bullet",
          },
          {
            text: "Compliance requirements (GDPR, HIPAA, SOC 2, etc.)",
            type: "bullet",
          },
          {
            text: "Data volume and sensitivity",
            type: "bullet",
          },
          {
            text: "Required SLAs and support level",
            type: "bullet",
          },
          {
            text: "Timeline for implementation",
            type: "bullet",
          },
        ],
      },
      {
        id: "response-timeline",
        title: "Response Timeline",
        content: "We respond within 5 business days with:",
        items: [
          {
            text: "Available compliance options",
            type: "bullet",
          },
          {
            text: "Custom DPA template",
            type: "bullet",
          },
          {
            text: "Security documentation",
            type: "bullet",
          },
          {
            text: "Pricing for enterprise tier",
            type: "bullet",
          },
        ],
      },
      {
        id: "standard-enterprise-agreement",
        title: "Standard Enterprise Agreement Includes",
        content: "",
        items: [
          {
            text: "Data Processing Agreement (GDPR compliant)",
            type: "bullet",
          },
          {
            text: "Security certifications (SOC 2 Type II)",
            type: "bullet",
          },
          {
            text: "Priority support (24/7 available)",
            type: "bullet",
          },
          {
            text: "Audit rights (2x annually)",
            type: "bullet",
          },
          {
            text: "Subprocessor notifications",
            type: "bullet",
          },
          {
            text: "Incident response SLA",
            type: "bullet",
          },
          {
            text: "99.9% uptime guarantee",
            type: "bullet",
          },
          {
            text: "Data residency (if needed)",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "11",
    title: "Third-Party Agents and Data Processing",
    content: "",
    subsections: [
      {
        id: "real-time-intelligence",
        title: "Real-Time Intelligence Integration",
        content:
          "Our specialized agents access real-time data from external sources (market data, competitive intelligence, financial information) to provide you comprehensive analysis.",
      },
      {
        id: "data-handling",
        title: "Data Handling",
        content: "",
        items: [
          {
            text: "We transmit minimal, anonymized context to enable real-time intelligence retrieval",
            type: "bullet",
          },
          {
            text: "Your specific proprietary inputs are NEVER included in third-party requests",
            type: "bullet",
          },
          {
            text: "Third-party providers receive only the necessary context to fulfill your request, not your business identity",
            type: "bullet",
          },
          {
            text: "All responses are pulled back into your private account",
            type: "bullet",
          },
        ],
        example: {
          label: "Example",
          items: [
            {
              text: 'We send: "Analyze market trends in AI infrastructure for a 2025 evaluation"',
              type: "check",
            },
            {
              text: 'We never send: "For Company X\'s Series B decision regarding AI infrastructure"',
              type: "cross",
            },
          ],
        },
      },
      {
        id: "third-party-agreements",
        title: "Third-Party Agreements",
        content:
          "Our relationships with data and intelligence providers are confidential business partnerships. We maintain strict contractual terms ensuring your data is handled responsibly.",
      },
    ],
  },
  {
    id: "12",
    title: "Your Data Protection Rights",
    content:
      "We respect your privacy rights under GDPR, UK Data Protection Act, CCPA/CPRA, and PDPA. To exercise any of these rights, contact us at info@aiaugmented.io.",
    subsections: [
      {
        id: "right-of-access",
        title: "Right of Access",
        content: "",
        items: [
          {
            text: "Request a copy of all your personal data and Strategic Content",
            type: "bullet",
          },
          {
            text: "We'll provide it in a portable format within 30 days",
            type: "bullet",
          },
        ],
      },
      {
        id: "right-to-rectification",
        title: "Right to Rectification",
        content: "",
        items: [
          {
            text: "Request correction of inaccurate or incomplete information",
            type: "bullet",
          },
          {
            text: "We'll update within 10 business days",
            type: "bullet",
          },
        ],
      },
      {
        id: "right-to-erasure",
        title: 'Right to Erasure ("Right to be Forgotten")',
        content: "",
        items: [
          {
            text: "Request deletion of your personal data and Strategic Content",
            type: "bullet",
          },
          {
            text: "We'll delete within 30 days",
            type: "bullet",
          },
          {
            text: "Some data may be retained for legal or security obligations",
            type: "bullet",
          },
        ],
      },
      {
        id: "right-to-data-portability",
        title: "Right to Data Portability",
        content: "",
        items: [
          {
            text: "Request your Strategic Content and data in a portable format",
            type: "bullet",
          },
          {
            text: "Export your Decision Canvas, conversation history, and analysis anytime",
            type: "bullet",
          },
          {
            text: "You own your thinking",
            type: "bullet",
          },
        ],
      },
      {
        id: "right-to-restrict",
        title: "Right to Restrict Processing",
        content: "",
        items: [
          {
            text: "Request that we limit how we use your data",
            type: "bullet",
          },
          {
            text: "We'll comply while maintaining core service functionality",
            type: "bullet",
          },
        ],
      },
      {
        id: "right-to-object",
        title: "Right to Object / Opt-Out",
        content: "",
        items: [
          {
            text: "Object to pattern learning (Tier 2 data)",
            type: "bullet",
          },
          {
            text: "Opt-out of any non-essential data processing",
            type: "bullet",
          },
          {
            text: "Request we stop using your anonymized patterns to improve agents",
            type: "bullet",
          },
          {
            text: 'Email: info@aiaugmented.io with "Privacy Opt-Out Request"',
            type: "bullet",
          },
        ],
      },
      {
        id: "right-to-complaint",
        title: "Right to Lodge a Complaint",
        content: "",
        items: [
          {
            text: "File a complaint with your local data protection authority:",
            type: "bullet",
          },
          {
            text: "UK: Information Commissioner's Office (ICO)",
            type: "bullet",
          },
          {
            text: "EU/EEA: Your national data protection authority",
            type: "bullet",
          },
          {
            text: "Singapore/SEA: Personal Data Protection Commission (PDPC)",
            type: "bullet",
          },
          {
            text: "USA (CCPA): California Attorney General",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "13",
    title: "International Data Transfers",
    content: "",
    subsections: [
      {
        id: "global-data-processing",
        title: "Global Data Processing",
        content:
          "AI-Augmented processes data across multiple jurisdictions. By using our Service, you consent to the transfer and processing of your data internationally.",
      },
      {
        id: "legal-safeguards",
        title: "Legal Safeguards",
        content: "",
        items: [
          {
            text: "Where required by law (e.g., GDPR), we rely on Standard Contractual Clauses (SCCs) or equivalent mechanisms",
            type: "bullet",
          },
          {
            text: "All data transfers meet global data protection standards",
            type: "bullet",
          },
          {
            text: "We maintain compliance with GDPR, UK DPA, CCPA, and PDPA",
            type: "bullet",
          },
        ],
      },
      {
        id: "no-data-sale",
        title: "No Data Sale to Competitors",
        content:
          "We do NOT sell your Strategic Content or Personal Data to any third party.",
      },
      {
        id: "anonymized-insights",
        title: "Anonymized Insights",
        content:
          "We MAY use anonymized, aggregated insights for business intelligence purposes (understanding user behavior patterns across the platform). This data cannot be traced to you or your company.",
      },
    ],
  },
  {
    id: "14",
    title: "Cookies and Tracking",
    content: "",
    subsections: [
      {
        id: "how-we-use-cookies",
        title: "How We Use Cookies",
        content: "",
        items: [
          {
            text: "Essential cookies: To maintain your login session and provide core platform functionality",
            type: "bullet",
          },
          {
            text: "Analytics cookies: To understand how users interact with the platform (anonymized)",
            type: "bullet",
          },
          {
            text: "Preference cookies: To remember your settings",
            type: "bullet",
          },
        ],
      },
      {
        id: "your-control",
        title: "Your Control",
        content: "",
        items: [
          {
            text: "You can disable non-essential cookies in your browser",
            type: "bullet",
          },
          {
            text: "Some platform features may not work properly without essential cookies",
            type: "bullet",
          },
        ],
      },
      {
        id: "do-not-track",
        title: "Do Not Track",
        content:
          'If your browser sends a "Do Not Track" signal, we respect it for analytics purposes (though essential cookies remain to operate the platform).',
      },
    ],
  },
  {
    id: "15",
    title: "Children and Minors",
    content: "",
    subsections: [
      {
        id: "age-requirement",
        title: "Age Requirement",
        content:
          "AI-Augmented is designed for business professionals and is not intended for users under 18.",
      },
      {
        id: "data-collection",
        title: "Data Collection",
        content:
          "We do not knowingly collect personal information from anyone under 18. If we discover we have inadvertently collected such information, we will delete it promptly.",
      },
      {
        id: "parental-concerns",
        title: "Parental Concerns",
        content:
          "Parents or guardians concerned about a minor's data: Contact us at info@aiaugmented.io.",
      },
    ],
  },
  {
    id: "16",
    title: "Beta Status and Policy Updates",
    content: "",
    subsections: [
      {
        id: "understanding-beta",
        title: "Understanding Beta",
        content:
          "AI-Augmented is in active development. While our core commitment to protecting your data remains constant, some features and policies may evolve as we improve the platform.",
      },
      {
        id: "policy-changes",
        title: "Policy Changes",
        content: "",
        items: [
          {
            text: "Major privacy changes require your explicit consent",
            type: "bullet",
          },
          {
            text: "Updates will be communicated via email",
            type: "bullet",
          },
          {
            text: "If you disagree with changes, you can delete your account",
            type: "bullet",
          },
          {
            text: "Changes take effect 30 days after notification (unless legally required sooner)",
            type: "bullet",
          },
        ],
      },
      {
        id: "data-policy-stability",
        title: "Data Policy Stability",
        content: "Our core promises remain stable:",
        items: [
          {
            text: "Your proprietary content stays protected",
            type: "bullet",
          },
          {
            text: "We never train models on your specific inputs",
            type: "bullet",
          },
          {
            text: "You own your Strategic Content",
            type: "bullet",
          },
          {
            text: "Your deletion requests are honored",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "17",
    title: "Data Subject Rights Request Procedure",
    content: "",
    subsections: [
      {
        id: "submitting-data-request",
        title: "Submitting a Data Request",
        content:
          "You have the right to request access, correction, deletion, portability, or restriction of your data under GDPR, CCPA, PDPA, and other data protection laws.",
      },
      {
        id: "how-to-submit",
        title: "How to Submit a Request",
        content: "Email: info@aiaugmented.io",
        items: [
          {
            label: "Include the following information:",
            text: "",
            items: [
              {
                text: "Your full name",
                type: "bullet",
              },
              {
                text: "Email address associated with your account",
                type: "bullet",
              },
              {
                text: "Type of request (Access, Delete, Correct, Portability, Opt-Out, etc.)",
                type: "bullet",
              },
              {
                text: "Specific details about what you're requesting",
                type: "bullet",
              },
              {
                text: "Proof of authorization (if requesting on behalf of someone else)",
                type: "bullet",
              },
            ],
          },
        ],
      },
      {
        id: "request-types-slas",
        title: "Request Types and SLAs",
        content: "",
        table: {
          headers: ["Request Type", "Legal Basis", "Response SLA", "Format"],
          rows: [
            [
              "Right of Access",
              "GDPR Art. 15, CCPA § 1798.100, PDPA § 21",
              "30 days",
              "Electronic copy",
            ],
            [
              "Right to Rectification",
              "GDPR Art. 16, CCPA § 1798.106",
              "10 days",
              "Confirmation",
            ],
            [
              "Right to Erasure",
              "GDPR Art. 17, CCPA § 1798.105",
              "30 days",
              "Confirmation + Certificate",
            ],
            [
              "Right to Data Portability",
              "GDPR Art. 20, CCPA § 1798.100",
              "30 days",
              "Machine-readable format (CSV/JSON)",
            ],
            [
              "Right to Opt-Out (CCPA)",
              "CCPA § 1798.120",
              "45 days",
              "Confirmation",
            ],
            [
              "Right to Restrict Processing",
              "GDPR Art. 18",
              "10 days",
              "Confirmation",
            ],
            [
              "Right to Object",
              "GDPR Art. 21, CCPA § 1798.120",
              "10 days",
              "Confirmation",
            ],
          ],
        },
      },
      {
        id: "verification-process",
        title: "Verification Process",
        content:
          "We verify all data requests to protect your privacy. Verification typically includes:",
        items: [
          {
            label: "Email Verification",
            text: "We confirm ownership of email address",
          },
          {
            label: "Account Verification",
            text: "We verify you can access your account",
          },
          {
            label: "Identity Verification",
            text: "For sensitive requests, we may request:",
            items: [
              {
                text: "Last 4 digits of payment method",
                type: "bullet",
              },
              {
                text: "Account creation date",
                type: "bullet",
              },
              {
                text: "Recent login history",
                type: "bullet",
              },
              {
                text: "Other account-specific information",
                type: "bullet",
              },
            ],
          },
        ],
      },
      {
        id: "sensitive-requests",
        title: "Sensitive Requests Verification",
        content:
          "Sensitive requests (deletion, portability of all Strategic Content) may require additional verification:",
        items: [
          {
            text: "Government-issued ID (not required, but may be requested)",
            type: "bullet",
          },
          {
            text: "Video verification call (for requests over 1GB of data)",
            type: "bullet",
          },
          {
            text: "Notarized statement (for authorized representatives)",
            type: "bullet",
          },
        ],
      },
      {
        id: "timeline-extensions",
        title: "Timeline Extensions",
        content: "We may extend response timelines by 60 additional days if:",
        items: [
          {
            text: "The request is complex or voluminous",
            type: "bullet",
          },
          {
            text: "Multiple clarifications are needed",
            type: "bullet",
          },
          {
            text: "System limitations require additional time",
            type: "bullet",
          },
        ],
        afterContent:
          "We'll notify you of any extension and explain the reason.",
      },
      {
        id: "authorization-agent",
        title: "Authorization/Agent Requests",
        content:
          "You may authorize someone else to submit requests on your behalf (CCPA § 1798.100(d)):",
        items: [
          {
            text: "Submit power of attorney or notarized authorization",
            type: "bullet",
          },
          {
            text: "Include authorized agent's contact information",
            type: "bullet",
          },
          {
            text: "We verify both the authorization and agent identity",
            type: "bullet",
          },
        ],
      },
      {
        id: "fees",
        title: "Fees",
        content:
          "We process all data requests at no cost to you. We charge fees ONLY if:",
        items: [
          {
            text: "Requests are manifestly unfounded or excessive (and legal permits)",
            type: "bullet",
          },
          {
            text: "Additional copies are requested beyond first copy",
            type: "bullet",
          },
        ],
        afterContent:
          "Fee: reasonable amount reflecting administrative cost (capped at legal limits). We notify you of any fee BEFORE processing.",
      },
      {
        id: "denial-of-requests",
        title: "Denial of Requests",
        content: "We may deny requests if:",
        items: [
          {
            text: "We cannot verify your identity",
            type: "bullet",
          },
          {
            text: "The request is manifestly unfounded or malicious",
            type: "bullet",
          },
          {
            text: "The request would violate someone else's rights",
            type: "bullet",
          },
          {
            text: "The request conflicts with legal obligations (e.g., litigation hold)",
            type: "bullet",
          },
        ],
      },
      {
        id: "if-denied",
        title: "If We Deny Your Request",
        content: "We'll provide:",
        items: [
          {
            text: "Reason for denial",
            type: "bullet",
          },
          {
            text: "Legal basis for denial",
            type: "bullet",
          },
          {
            text: "Right to appeal",
            type: "bullet",
          },
          {
            text: "Contact information for appeal process",
            type: "bullet",
          },
          {
            text: "Right to lodge complaint with regulator",
            type: "bullet",
          },
        ],
      },
      {
        id: "appeal-process",
        title: "Appeal Process",
        content: "If we deny your request, you can appeal:",
      },
      {
        id: "appeal-submission",
        title: "Appeal Submission",
        content:
          'Email: info@aiaugmented.io with "PRIVACY REQUEST APPEAL" in subject',
        items: [
          {
            text: "Include original request and our denial letter",
            type: "bullet",
          },
          {
            text: "Explain why you believe we should comply",
            type: "bullet",
          },
          {
            text: "Provide additional information or clarification",
            type: "bullet",
          },
        ],
      },
      {
        id: "appeal-review",
        title: "Appeal Review",
        content: "",
        items: [
          {
            text: "Independent reviewer (not involved in original decision)",
            type: "bullet",
          },
          {
            text: "Response within 10 business days",
            type: "bullet",
          },
          {
            text: "Final determination provided in writing",
            type: "bullet",
          },
        ],
      },
      {
        id: "escalation",
        title: "Escalation",
        content:
          "If appeal is also denied, you have right to lodge complaint with:",
        items: [
          {
            text: "UK/EU: Information Commissioner's Office (ICO)",
            type: "bullet",
          },
          {
            text: "California: California Attorney General",
            type: "bullet",
          },
          {
            text: "Singapore: Personal Data Protection Commission (PDPC)",
            type: "bullet",
          },
        ],
      },
      {
        id: "certificate-deletion",
        title: "Certificate of Deletion",
        content: "Upon request, we provide written confirmation of deletion:",
        items: [
          {
            text: "Includes data categories deleted",
            type: "bullet",
          },
          {
            text: "Deletion date",
            type: "bullet",
          },
          {
            text: "Systems from which deleted",
            type: "bullet",
          },
          {
            text: "Authorized signature",
            type: "bullet",
          },
          {
            text: "Certificate retained in our records for 3 years (for audit purposes)",
            type: "bullet",
          },
        ],
      },
      {
        id: "data-export-formats",
        title: "Data Export Format Specifications",
        content:
          "Right to Data Portability includes export in machine-readable format:",
      },
      {
        id: "format-options",
        title: "Format Options",
        content: "Choose one:",
        items: [
          {
            text: "CSV - Spreadsheet format, all Strategic Content",
            type: "bullet",
          },
          {
            text: "JSON - Structured data format",
            type: "bullet",
          },
          {
            text: "PDF - Human-readable with formatting",
            type: "bullet",
          },
          {
            text: "ZIP - All formats combined",
            type: "bullet",
          },
        ],
      },
      {
        id: "export-includes",
        title: "Export Includes",
        content: "",
        items: [
          {
            text: "All Strategic Content (inputs, Decision Canvas, reports)",
            type: "bullet",
          },
          {
            text: "Conversation history",
            type: "bullet",
          },
          {
            text: "Account metadata",
            type: "bullet",
          },
          {
            text: "Generated outputs",
            type: "bullet",
          },
        ],
      },
      {
        id: "export-excludes",
        title: "Export Does NOT Include",
        content: "",
        items: [
          {
            text: "Raw system logs (available separately for enterprise)",
            type: "bullet",
          },
          {
            text: "Encrypted backups",
            type: "bullet",
          },
          {
            text: "Deleted data (already purged per retention policy)",
            type: "bullet",
          },
        ],
      },
      {
        id: "export-timeline",
        title: "Export Timeline",
        content: "",
        items: [
          {
            text: "Small export (< 100MB): 5 business days",
            type: "bullet",
          },
          {
            text: "Medium export (100MB-1GB): 10 business days",
            type: "bullet",
          },
          {
            text: "Large export (> 1GB): 30 business days",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "18",
    title: "CCPA-Specific Privacy Rights (California Residents)",
    content: "",
    subsections: [
      {
        id: "ccpa-intro",
        title: "For California Consumers",
        content:
          "If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA). This section summarizes those rights.",
      },
      {
        id: "right-to-know",
        title: "1. Right to Know",
        content:
          "You have the right to know what personal information we collect, use, and share.",
        items: [
          {
            label: "What we collect:",
            text: "Name, email, IP address, device info, Strategic Content, usage patterns",
          },
          {
            label: "How we use it:",
            text: "Provide service, improve platform, prevent fraud, comply with law",
          },
          {
            label: "Who we share it with:",
            text: "Service providers (hosting, payment), agents improve agents (anonymized)",
          },
          {
            label: "Request method:",
            text: 'Email info@aiaugmented.io with "California Right to Know Request"',
          },
          {
            label: "SLA:",
            text: "45 days",
          },
        ],
      },
      {
        id: "right-to-delete",
        title: "2. Right to Delete",
        content:
          "You have the right to request we delete your personal information.",
        items: [
          {
            label: "What we delete:",
            text: "Your Strategic Content, account data, personal identifiers",
          },
          {
            label: "What we keep:",
            text: "Anonymized patterns (cannot be traced to you), legal holds",
          },
          {
            label: "Exception:",
            text: "Information necessary to provide service if you continue using platform",
          },
          {
            label: "Request method:",
            text: 'Email info@aiaugmented.io with "California Deletion Request"',
          },
          {
            label: "SLA:",
            text: "45 days",
          },
        ],
      },
      {
        id: "right-to-correct",
        title: "3. Right to Correct",
        content:
          "You have the right to correct inaccurate personal information.",
        items: [
          {
            label: "How:",
            text: "Update profile information directly in account settings",
          },
          {
            label: "Dispute process:",
            text: "Email info@aiaugmented.io if you believe information is inaccurate",
          },
          {
            label: "Our response:",
            text: "Correct within 10 days or provide reason for not correcting",
          },
          {
            label: "SLA:",
            text: "10 days",
          },
        ],
      },
      {
        id: "right-to-opt-out",
        title: "4. Right to Opt-Out (Do Not Sell/Share)",
        content:
          'You have the right to opt-out of "sale" or "sharing" of personal information.',
        items: [
          {
            label: "Important clarification:",
            text: "",
            items: [
              {
                text: "We do NOT currently sell personal information",
                type: "bullet",
              },
              {
                text: "We do NOT currently share personal information for cross-context behavioral advertising",
                type: "bullet",
              },
              {
                text: "We MAY use anonymized patterns for platform improvement (non-personal, cannot identify you)",
                type: "bullet",
              },
            ],
          },
          {
            label: "To opt-out of any future sharing:",
            text: 'Email info@aiaugmented.io with "California Opt-Out Request"',
          },
        ],
      },
      {
        id: "right-to-limit-use",
        title: "5. Right to Limit Use and Disclosure (CPRA)",
        content:
          "You have the right to limit how we use sensitive personal information.",
        items: [
          {
            label: "Sensitive Personal Information includes:",
            text: "",
            items: [
              {
                text: "Social Security numbers, government IDs",
                type: "bullet",
              },
              {
                text: "Financial account information",
                type: "bullet",
              },
              {
                text: "Precise geolocation",
                type: "bullet",
              },
              {
                text: "Racial/ethnic origin, religious beliefs, sexual orientation, health data",
                type: "bullet",
              },
            ],
          },
          {
            label: "How we limit use:",
            text: "",
            items: [
              {
                text: "We only process sensitive data when necessary for service provision",
                type: "bullet",
              },
              {
                text: "We exclude sensitive data from pattern learning (Tier 2)",
                type: "bullet",
              },
              {
                text: "We apply enhanced encryption",
                type: "bullet",
              },
              {
                text: "We limit staff access",
                type: "bullet",
              },
            ],
          },
          {
            label: "To limit use:",
            text: 'Email info@aiaugmented.io with "Sensitive Information Limit Use Request"',
          },
        ],
      },
      {
        id: "ccpa-data-portability",
        title: "6. Right to Data Portability",
        content:
          "You have the right to receive your personal information in portable, machine-readable format.",
        items: [
          {
            label: "Format:",
            text: "CSV, JSON, or PDF (your choice)",
          },
          {
            label: "Includes:",
            text: "All Strategic Content, account data, decision history",
          },
          {
            label: "SLA:",
            text: "30 days",
          },
          {
            label: "Method:",
            text: 'Email info@aiaugmented.io with "Data Portability Request"',
          },
        ],
      },
      {
        id: "right-to-non-discrimination",
        title: "7. Right to Non-Discrimination",
        content:
          "You have the right NOT to be discriminated against for exercising your privacy rights.",
        items: [
          {
            label: "We will NOT:",
            text: "",
            items: [
              {
                text: "Deny you service or charge different prices for exercising your rights",
                type: "bullet",
              },
              {
                text: "Provide lower-quality service",
                type: "bullet",
              },
              {
                text: "Penalize you for opting out",
                type: "bullet",
              },
              {
                text: "Discriminate in any other way",
                type: "bullet",
              },
            ],
          },
          {
            label: "The only exception:",
            text: "We may charge a fee for manifestly unfounded/excessive requests (capped by law)",
          },
        ],
      },
      {
        id: "authorize-agent-ccpa",
        title: "Your Right to Authorize an Agent",
        content:
          "You may authorize someone to submit requests on your behalf. To do this:",
        items: [
          {
            text: "Provide notarized power of attorney",
            type: "bullet",
          },
          {
            text: "Include agent's contact information",
            type: "bullet",
          },
          {
            text: "We verify both authorization and agent identity",
            type: "bullet",
          },
        ],
      },
      {
        id: "verifiable-consumer-requests",
        title: "Verifiable Consumer Requests",
        content: "",
        items: [
          {
            text: "We verify your identity before responding to requests",
            type: "bullet",
          },
          {
            text: "Verification typically includes email confirmation + account login",
            type: "bullet",
          },
          {
            text: "For sensitive requests, we may request government ID",
            type: "bullet",
          },
        ],
      },
      {
        id: "do-not-sell-signal",
        title: '"Do Not Sell/Share" Opt-Out Signal',
        content:
          'If your browser sends a "Do Not Sell or Share My Personal Information" signal:',
        items: [
          {
            text: "We honor this signal",
            type: "bullet",
          },
          {
            text: "We treat it as request to opt-out",
            type: "bullet",
          },
          {
            text: "This applies even if we don't currently have opt-out page visible",
            type: "bullet",
          },
        ],
      },
      {
        id: "ccpa-right-to-know-details",
        title: "California Consumer Right to Know (CCPA § 1798.100)",
        content: 'If you make a "Right to Know" request, we\'ll provide:',
        items: [
          {
            label: "In the past 12 months:",
            text: "",
            items: [
              {
                text: "Categories of personal information collected about you",
                type: "bullet",
              },
              {
                text: "Sources of personal information",
                type: "bullet",
              },
              {
                text: "Purposes for collecting personal information",
                type: "bullet",
              },
              {
                text: "Categories of third parties we share information with",
                type: "bullet",
              },
              {
                text: "Specific pieces of personal information we have about you (upon request)",
                type: "bullet",
              },
            ],
          },
        ],
      },
      {
        id: "shine-the-light",
        title: "Shine the Light (California Civil Code § 1798.83)",
        content:
          "If you're a California resident, you may request information about personal information we've shared with third parties for their direct marketing purposes.",
        items: [
          {
            label: "How to request:",
            text: 'Email info@aiaugmented.io with "California Shine the Light Request"',
          },
          {
            label: "What we'll provide:",
            text: "List of third parties and types of information shared (or statement that we don't share)",
          },
          {
            label: "SLA:",
            text: "30 days (once per calendar year)",
          },
        ],
      },
      {
        id: "cpra-updates",
        title: "California Privacy Rights Act (CPRA) Updates",
        content:
          "The CPRA significantly expands California privacy rights (effective January 1, 2023):",
        items: [
          {
            text: "More control over sensitive data",
            type: "bullet",
          },
          {
            text: "Right to correct inaccurate data",
            type: "bullet",
          },
          {
            text: "Right to limit use",
            type: "bullet",
          },
          {
            text: "Right to opt-out of automated decision-making",
            type: "bullet",
          },
        ],
        afterContent:
          "These rights are summarized above and fully implemented in this policy",
      },
      {
        id: "ccpa-complaint",
        title: "Lodging a Complaint",
        content: "",
        items: [
          {
            text: "California Attorney General: privacy@ag.ca.gov",
            type: "bullet",
          },
          {
            text: "California Privacy Protection Agency (when established)",
            type: "bullet",
          },
          {
            text: "Private right of action for data breaches: Yes, under certain conditions",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "19",
    title: "Right to Withdraw Consent",
    content: "",
    subsections: [
      {
        id: "withdraw-anytime",
        title: "You Can Withdraw Consent Anytime",
        content:
          "Since much of our data processing relies on your consent (particularly for Strategic Content processing and pattern learning), you have the right to withdraw that consent at any time.",
      },
      {
        id: "how-to-withdraw",
        title: "How to Withdraw Consent",
        content: "Email: info@aiaugmented.io",
        items: [
          {
            label: "Subject:",
            text: '"Consent Withdrawal"',
          },
          {
            label: "Specify which consent(s) you're withdrawing:",
            text: "",
            items: [
              {
                text: "Strategic Content Processing - Withdraw consent for us to process your inputs",
                type: "bullet",
              },
              {
                text: "Pattern Learning (Tier 2) - Withdraw consent for anonymized usage analysis",
                type: "bullet",
              },
              {
                text: "Marketing Communications - Withdraw consent for promotional emails",
                type: "bullet",
              },
              {
                text: "All Consents - Withdraw all non-essential processing",
                type: "bullet",
              },
            ],
          },
        ],
      },
      {
        id: "withdraw-strategic-content",
        title: "Withdraw Strategic Content Processing",
        content: "When you withdraw consent for Strategic Content processing:",
        items: [
          {
            text: "We stop processing your new inputs",
            type: "bullet",
          },
          {
            text: "Your existing Strategic Content remains in your account",
            type: "bullet",
          },
          {
            text: "You can still view past decisions",
            type: "bullet",
          },
          {
            text: "You cannot create new decisions/analyses",
            type: "bullet",
          },
          {
            text: "Account remains active but limited to read-only",
            type: "bullet",
          },
        ],
      },
      {
        id: "withdraw-pattern-learning",
        title: "Withdraw Pattern Learning",
        content: "When you withdraw consent for pattern learning (Tier 2):",
        items: [
          {
            text: "We exclude your anonymized patterns from future agent improvements",
            type: "bullet",
          },
          {
            text: "Your existing interactions still improve your personal experience",
            type: "bullet",
          },
          {
            text: "Agents don't learn from YOUR usage patterns",
            type: "bullet",
          },
          {
            text: "Your account functionality is NOT affected",
            type: "bullet",
          },
        ],
      },
      {
        id: "withdraw-marketing",
        title: "Withdraw Marketing Communications",
        content: "When you withdraw consent for marketing communications:",
        items: [
          {
            text: "We immediately stop sending promotional emails",
            type: "bullet",
          },
          {
            text: "You still receive transactional emails (account changes, security alerts, etc.)",
            type: "bullet",
          },
        ],
      },
      {
        id: "withdraw-all-consents",
        title: "Withdraw All Consents",
        content: "When you withdraw all non-essential processing:",
        items: [
          {
            text: "Same as withdrawing Strategic Content Processing",
            type: "bullet",
          },
          {
            text: "You can browse platform but cannot create new decisions",
            type: "bullet",
          },
          {
            text: "To resume: contact us to re-establish consent",
            type: "bullet",
          },
        ],
      },
      {
        id: "withdrawal-effect",
        title: "Effect of Withdrawal",
        content: "",
        items: [
          {
            text: "Withdrawal is effective immediately",
            type: "bullet",
          },
          {
            text: "No penalty or retaliation",
            type: "bullet",
          },
          {
            text: "You can re-consent anytime by email",
            type: "bullet",
          },
        ],
      },
      {
        id: "what-doesnt-change",
        title: "What Doesn't Change",
        content: "When you withdraw consent:",
        items: [
          {
            text: "We continue to process data we've already collected (until you request deletion)",
            type: "bullet",
          },
          {
            text: "Legal obligations still apply",
            type: "bullet",
          },
          {
            text: "Data protection remains in place",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "20",
    title: "Anti-Discrimination and Non-Retaliation",
    content: "",
    subsections: [
      {
        id: "no-discrimination",
        title:
          "You Cannot Be Discriminated Against for Exercising Privacy Rights",
        content:
          "Under CCPA, GDPR, PDPA and other data protection laws, we cannot:",
      },
      {
        id: "prohibited-discrimination",
        title: "Prohibited",
        content: "",
        items: [
          {
            text: "Deny you goods or services",
            type: "bullet",
          },
          {
            text: "Charge you different prices or rates",
            type: "bullet",
          },
          {
            text: "Provide you lower-quality service or support",
            type: "bullet",
          },
          {
            text: "Charge you fees for exercising rights (except limited circumstances)",
            type: "bullet",
          },
          {
            text: "Treat you differently based on your privacy choices",
            type: "bullet",
          },
          {
            text: "Retaliate against you in any way",
            type: "bullet",
          },
        ],
      },
      {
        id: "allowed-discrimination",
        title: "Allowed (with limits)",
        content: "",
        items: [
          {
            text: "We MAY charge a reasonable fee for manifestly unfounded, excessive, or repetitive requests (capped by law and disclosed in advance)",
            type: "bullet",
          },
          {
            text: "We MAY charge a reasonable fee for additional copies beyond the first copy (capped by law)",
            type: "bullet",
          },
        ],
      },
      {
        id: "rights-protected",
        title: "Your Rights are Protected",
        content: "",
        items: [
          {
            text: "Exercising any privacy right does NOT affect your service access",
            type: "bullet",
          },
          {
            text: "You maintain full account functionality regardless of opt-outs or deletions",
            type: "bullet",
          },
          {
            text: "No hidden penalties or service degradation",
            type: "bullet",
          },
        ],
      },
      {
        id: "experience-discrimination",
        title: "If You Experience Discrimination",
        content: "",
        items: [
          {
            text: "Contact us immediately: info@aiaugmented.io",
            type: "bullet",
          },
          {
            text: "We investigate within 10 business days",
            type: "bullet",
          },
          {
            text: "We remediate any discrimination found",
            type: "bullet",
          },
          {
            text: "You have right to lodge complaint with regulator",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "21",
    title: "Data Subject Rights - Right to Restriction of Processing",
    content: "",
    subsections: [
      {
        id: "restrict-processing-intro",
        title: "You Can Request We Restrict Processing of Your Data",
        content:
          "Under GDPR Article 18 and similar international laws, you have the right to restrict how we process your data.",
      },
      {
        id: "when-restrict",
        title: "When You Can Request Restriction",
        content: "",
        items: [
          {
            text: "If you contest accuracy - While we verify disputed facts",
            type: "bullet",
          },
          {
            text: "If processing is unlawful - You request restriction instead of deletion",
            type: "bullet",
          },
          {
            text: "If we no longer need the data - But you need it for legal claim",
            type: "bullet",
          },
          {
            text: "If you object to processing - While we determine if our interest overrides yours",
            type: "bullet",
          },
        ],
      },
      {
        id: "how-to-request-restriction",
        title: "How to Request",
        content: "Email: info@aiaugmented.io",
        items: [
          {
            label: "Subject:",
            text: '"Restrict Processing Request"',
          },
          {
            label: "Include:",
            text: "",
            items: [
              {
                text: "Your account details",
                type: "bullet",
              },
              {
                text: "Which data you want restricted",
                type: "bullet",
              },
              {
                text: "Reason for restriction",
                type: "bullet",
              },
              {
                text: "Relevant legal basis",
                type: "bullet",
              },
            ],
          },
        ],
      },
      {
        id: "what-restricted-means",
        title: 'What "Restricted Processing" Means',
        content: "When restricted:",
        items: [
          {
            text: "We keep the data in storage",
            type: "bullet",
          },
          {
            text: "We don't actively process it",
            type: "bullet",
          },
          {
            text: "We don't share it (except with legal authorization)",
            type: "bullet",
          },
          {
            text: "We only process if: you consent, legal claim, protect someone's rights, or public interest",
            type: "bullet",
          },
          {
            text: "We'll notify you before we lift restrictions",
            type: "bullet",
          },
        ],
      },
      {
        id: "effect-on-account",
        title: "Effect on Your Account",
        content: "",
        items: [
          {
            text: "You can still access restricted data",
            type: "bullet",
          },
          {
            text: "Your Decision Canvas and reports remain available",
            type: "bullet",
          },
          {
            text: "New processing is limited (you'll be notified of limitations)",
            type: "bullet",
          },
          {
            text: "You can request deletion at any time",
            type: "bullet",
          },
        ],
      },
      {
        id: "restriction-duration",
        title: "How Long Restriction Lasts",
        content: "",
        items: [
          {
            text: "Until you withdraw the request",
            type: "bullet",
          },
          {
            text: "Until we verify the disputed fact",
            type: "bullet",
          },
          {
            text: "Until legal claim is resolved",
            type: "bullet",
          },
          {
            text: "Until 2 years passes (we'll follow up then)",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "22",
    title: "Data Retention Schedule (Detailed)",
    content: "",
    subsections: [
      {
        id: "retention-timeline",
        title: "Specific Data Retention Timeline",
        content:
          "We retain data as follows based on purpose. When retention period ends, data is securely deleted.",
        table: {
          headers: [
            "Data Category",
            "Retention Period",
            "Purpose",
            "Legal Basis",
          ],
          rows: [
            [
              "Strategic Content (Your Decisions)",
              "Until account deletion + 30 days",
              "Permanent Memory feature",
              "Service contract",
            ],
            [
              "Decision Canvas",
              "Until account deletion + 30 days",
              "Your strategic records",
              "Service contract",
            ],
            [
              "Conversation History",
              "Until account deletion + 30 days",
              "Context and memory",
              "Service contract",
            ],
            [
              "Account Information",
              "Until account deletion + 2 years",
              "Legal compliance",
              "Legal obligation",
            ],
            [
              "Login/Activity Logs",
              "12 months",
              "Security and fraud detection",
              "Legitimate interest",
            ],
            [
              "Technical Error Logs",
              "6 months",
              "Platform debugging",
              "Legitimate interest",
            ],
            [
              "IP Address Logs",
              "6 months",
              "Security and DDoS prevention",
              "Legitimate interest",
            ],
            [
              "Payment Information",
              "Until payment obligation complete + 7 years",
              "Tax/accounting requirements",
              "Legal obligation",
            ],
            [
              "Anonymized Usage Patterns",
              "Indefinite",
              "Platform improvement",
              "Legitimate interest",
            ],
            [
              "Cookies (Essential)",
              "Until browser closed",
              "Session management",
              "Service provision",
            ],
            [
              "Cookies (Analytics)",
              "12 months",
              "Platform analytics",
              "Legitimate interest",
            ],
            [
              "Interaction Patterns (Tier 2)",
              "Indefinite (anonymized)",
              "Agent improvement",
              "Legitimate interest",
            ],
            [
              "Deleted Account Data",
              "30 days in backups, then permanent delete",
              "Account deletion compliance",
              "User right",
            ],
            [
              "Backup Copies",
              "90 days after deletion from primary systems",
              "Disaster recovery",
              "Business continuity",
            ],
            [
              "Legal Holds",
              "Until legal matter resolved + 3 years",
              "Legal compliance",
              "Legal obligation",
            ],
            [
              "Deletion Records",
              "3 years",
              "Audit trail for GDPR/CCPA compliance",
              "Legal obligation",
            ],
          ],
        },
      },
      {
        id: "early-deletion",
        title: "Early Deletion Options",
        content: "",
        items: [
          {
            text: "You can request deletion of any data category anytime",
            type: "bullet",
          },
          {
            text: "We delete within 30 days (except where legal hold applies)",
            type: "bullet",
          },
          {
            text: "Some data may be anonymized instead of deleted (cannot identify you)",
            type: "bullet",
          },
        ],
      },
      {
        id: "backup-recovery",
        title: "Backup and Recovery",
        content: "",
        items: [
          {
            text: "Production data deleted per schedule above",
            type: "bullet",
          },
          {
            text: "Backup copies retained 90 days for disaster recovery",
            type: "bullet",
          },
          {
            text: "Backups subject to same access controls as production",
            type: "bullet",
          },
          {
            text: "Backups permanently deleted after retention period",
            type: "bullet",
          },
        ],
      },
      {
        id: "legal-holds",
        title: "Legal Holds",
        content: "",
        items: [
          {
            text: "If you're involved in legal proceeding, relevant data may be held indefinitely",
            type: "bullet",
          },
          {
            text: "We'll notify you of legal hold when appropriate",
            type: "bullet",
          },
          {
            text: "Data is retained only as required by legal process",
            type: "bullet",
          },
          {
            text: "After legal matter resolves, normal retention schedule applies",
            type: "bullet",
          },
        ],
      },
      {
        id: "anonymized-data",
        title: "Anonymized Data",
        content: "",
        items: [
          {
            text: "Data that is fully anonymized (cannot be traced to you) is retained indefinitely",
            type: "bullet",
          },
          {
            text: "Used for platform improvement and analytics",
            type: "bullet",
          },
          {
            text: "Cannot be connected back to you",
            type: "bullet",
          },
          {
            text: "Your opt-out of pattern learning (Tier 2) excludes your usage data from anonymized retention",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "23",
    title: "Right to Restrict Automated Decision-Making",
    content: "",
    subsections: [
      {
        id: "automated-decisions-intro",
        title: "You Have Rights Regarding Automated Decisions",
        content:
          "Under GDPR Article 22 and CPRA, you have protections regarding automated decision-making.",
      },
      {
        id: "what-this-means",
        title: "What This Means",
        content:
          'An "automated decision" is when we make a decision about you using only automated means (no human review).',
      },
      {
        id: "current-status",
        title: "Current Status",
        content: "Our agents provide:",
        items: [
          {
            text: "Analysis and insights",
            type: "bullet",
          },
          {
            text: "Recommendations",
            type: "bullet",
          },
          {
            text: "Data synthesis",
            type: "bullet",
          },
        ],
      },
      {
        id: "not-autonomous",
        title: "These are NOT autonomous decisions about you because",
        content: "",
        items: [
          {
            text: "YOU make the final decision",
            type: "bullet",
          },
          {
            text: "We don't automatically approve/deny anything",
            type: "bullet",
          },
          {
            text: "All decisions are reviewed by you",
            type: "bullet",
          },
          {
            text: "We don't use automated profiling to classify or segment you",
            type: "bullet",
          },
        ],
      },
      {
        id: "if-automated-decisions",
        title: "If We Ever Implement Automated Decisions",
        content: "We would provide:",
        items: [
          {
            text: "Right to request human review",
            type: "bullet",
          },
          {
            text: "Right to explain the decision",
            type: "bullet",
          },
          {
            text: "Right to contest the decision",
            type: "bullet",
          },
          {
            text: "Meaningful information about logic involved",
            type: "bullet",
          },
        ],
      },
      {
        id: "request-human-review",
        title: "Right to Request Human Review",
        content:
          "If you believe an automated decision significantly affects you:",
        items: [
          {
            text: "Email: info@aiaugmented.io",
            type: "bullet",
          },
          {
            text: "Include specific decision in question",
            type: "bullet",
          },
          {
            text: "Request manual review by human staff",
            type: "bullet",
          },
          {
            text: "We provide human review within 20 business days",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "24",
    title: "Right to Lodge a Complaint",
    content: "",
    subsections: [
      {
        id: "complaint-intro",
        title: "You Have Right to File Formal Complaints",
        content:
          "If you believe your privacy rights have been violated, you can lodge a formal complaint with data protection authorities.",
      },
      {
        id: "by-jurisdiction",
        title: "By Jurisdiction",
        content: "",
        items: [
          {
            label: "European Union / UK",
            text: "",
            items: [
              {
                label: "Information Commissioner's Office (ICO) - UK",
                text: "",
                items: [
                  {
                    text: "Website: https://ico.org.uk/",
                    type: "bullet",
                  },
                  {
                    text: "Email: casework@ico.org.uk",
                    type: "bullet",
                  },
                  {
                    text: "Phone: +44(0)303 123 1113",
                    type: "bullet",
                  },
                ],
              },
              {
                label: "National DPAs - Other EU countries",
                text: "",
                items: [
                  {
                    text: "Austria: https://www.dsb.gv.at/",
                    type: "bullet",
                  },
                  {
                    text: "France: https://www.cnil.fr/",
                    type: "bullet",
                  },
                  {
                    text: "Germany: https://www.bfdi.bund.de/",
                    type: "bullet",
                  },
                  {
                    text: "Complete list available from EU Commission",
                    type: "bullet",
                  },
                ],
              },
            ],
          },
          {
            label: "United States (California)",
            text: "",
            items: [
              {
                label: "California Attorney General",
                text: "",
                items: [
                  {
                    text: "Website: https://oag.ca.gov/",
                    type: "bullet",
                  },
                  {
                    text: "Email: privacy@ag.ca.gov",
                    type: "bullet",
                  },
                ],
              },
              {
                label:
                  "California Privacy Protection Agency (when operational)",
                text: "",
                items: [
                  {
                    text: "Website: https://cppa.ca.gov/",
                    type: "bullet",
                  },
                ],
              },
            ],
          },
          {
            label: "Singapore / ASEAN",
            text: "",
            items: [
              {
                label: "Personal Data Protection Commission (PDPC)",
                text: "",
                items: [
                  {
                    text: "Website: https://www.pdpc.gov.sg/",
                    type: "bullet",
                  },
                  {
                    text: "Email: enquiries@pdpc.gov.sg",
                    type: "bullet",
                  },
                  {
                    text: "Phone: +65 6377 3131",
                    type: "bullet",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "before-filing",
        title: "Before Filing",
        content: "We recommend contacting us first to resolve the issue:",
        items: [
          {
            text: "Email: info@aiaugmented.io",
            type: "bullet",
          },
          {
            text: "We'll investigate within 10 business days",
            type: "bullet",
          },
          {
            text: "We'll work to resolve the concern",
            type: "bullet",
          },
        ],
        afterContent:
          "You Have Right to Complain Even If You Haven't Contacted Us. You don't need to resolve with us first - you have right to go directly to authorities.",
      },
    ],
  },
  {
    id: "25",
    title: "Purpose Limitation and Data Minimization",
    content: "",
    subsections: [
      {
        id: "only-stated-purposes",
        title: "We Only Use Data for Stated Purposes",
        content:
          "We collect data exclusively for the purposes disclosed in this policy:",
        items: [
          {
            text: "Providing the Service",
            type: "bullet",
          },
          {
            text: "Improving the platform",
            type: "bullet",
          },
          {
            text: "Preventing fraud and security threats",
            type: "bullet",
          },
          {
            text: "Complying with legal obligations",
            type: "bullet",
          },
        ],
      },
      {
        id: "we-do-not",
        title: "We Do Not",
        content: "",
        items: [
          {
            text: "Use data for purposes not disclosed here without your consent",
            type: "bullet",
          },
          {
            text: '"Repurpose" data for unrelated uses',
            type: "bullet",
          },
          {
            text: "Sell personal data for purposes different from those stated",
            type: "bullet",
          },
          {
            text: "Use Strategic Content for any purpose other than serving your requests",
            type: "bullet",
          },
        ],
      },
      {
        id: "minimize-collection",
        title: "We Minimize Data Collection",
        content: "We collect only the data necessary:",
        items: [
          {
            text: 'No "just in case" data collection',
            type: "bullet",
          },
          {
            text: "No excessive monitoring",
            type: "bullet",
          },
          {
            text: "No collection of data you don't provide",
            type: "bullet",
          },
          {
            text: "No inference of data we don't collect",
            type: "bullet",
          },
        ],
      },
      {
        id: "change-data-use",
        title: "If We Change How We Use Data",
        content: "",
        items: [
          {
            text: "We notify you in advance",
            type: "bullet",
          },
          {
            text: "We obtain explicit consent for new uses",
            type: "bullet",
          },
          {
            text: "You have right to opt-out",
            type: "bullet",
          },
          {
            text: "Major changes trigger policy update (30-day notice)",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "26",
    title: "Verification and Third-Party Authorization",
    content: "",
    subsections: [
      {
        id: "verifying-identity",
        title: "Verifying Data Subject Identity",
        content:
          "When you request access to personal data or exercise privacy rights, we verify your identity to protect your privacy.",
      },
      {
        id: "standard-verification",
        title: "Standard Verification (for access/portability requests)",
        content: "",
        items: [
          {
            text: "Email verification",
            type: "bullet",
          },
          {
            text: "Account login verification",
            type: "bullet",
          },
          {
            text: "Security question verification",
            type: "bullet",
          },
        ],
      },
      {
        id: "enhanced-verification-deletion",
        title: "Enhanced Verification (for sensitive requests like deletion)",
        content: "",
        items: [
          {
            text: "Email + login + account security questions",
            type: "bullet",
          },
          {
            text: "Last 4 digits of payment method",
            type: "bullet",
          },
          {
            text: "Account creation date",
            type: "bullet",
          },
          {
            text: "Recent login locations",
            type: "bullet",
          },
        ],
      },
      {
        id: "enhanced-verification-export",
        title: "Enhanced Verification (for large data exports >1GB)",
        content: "",
        items: [
          {
            text: "All above plus",
            type: "bullet",
          },
          {
            text: "Video verification call (optional)",
            type: "bullet",
          },
          {
            text: "Notarized request (optional)",
            type: "bullet",
          },
        ],
      },
      {
        id: "authorization-behalf",
        title: "Authorization to Act on Your Behalf",
        content: "You may authorize someone else to submit requests:",
        items: [
          {
            label: "Requirements:",
            text: "",
            items: [
              {
                text: "Submit notarized Power of Attorney (POA) or authorization letter",
                type: "bullet",
              },
              {
                text: "Include authorized agent's full name and email",
                type: "bullet",
              },
              {
                text: "Include scope of authorization (specific request types or all requests)",
                type: "bullet",
              },
              {
                text: "We verify both your authorization and agent's identity",
                type: "bullet",
              },
            ],
          },
        ],
      },
      {
        id: "ccpa-representative",
        title: "CCPA § 1798.100(d) Authorized Representative",
        content: "We accept authorized representatives for California requests",
        items: [
          {
            text: "Must have valid POA/authorization",
            type: "bullet",
          },
          {
            text: "We contact you to verify authorization (unless you've previously consented)",
            type: "bullet",
          },
        ],
      },
      {
        id: "verification-timeline",
        title: "Verification Timeline",
        content: "",
        items: [
          {
            text: "Standard: Same day to 2 business days",
            type: "bullet",
          },
          {
            text: "Enhanced: 2-5 business days",
            type: "bullet",
          },
          {
            text: "Authorization: 3-5 business days (includes verification of both parties)",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "27",
    title: "Transparency Reporting",
    content: "",
    subsections: [
      {
        id: "transparency-intro",
        title: "We Publish Transparency Reports",
        content:
          "To demonstrate our commitment to your privacy, we publish regular reports.",
      },
      {
        id: "annual-security-report",
        title: "Annual Security and Privacy Report (Published Quarterly)",
        content: "Includes:",
        items: [
          {
            text: "Number of data breach incidents",
            type: "bullet",
          },
          {
            text: "Security incidents reported",
            type: "bullet",
          },
          {
            text: "Incidents by severity (critical, high, medium, low)",
            type: "bullet",
          },
          {
            text: "Resolution time for incidents",
            type: "bullet",
          },
          {
            text: "Patches deployed",
            type: "bullet",
          },
          {
            text: "Third-party security audits completed",
            type: "bullet",
          },
        ],
      },
      {
        id: "government-requests",
        title: "Annual Government Requests Report",
        content: "Includes:",
        items: [
          {
            text: "Number of government requests received",
            type: "bullet",
          },
          {
            text: "By jurisdiction",
            type: "bullet",
          },
          {
            text: "Types of requests (warrants, subpoenas, national security)",
            type: "bullet",
          },
          {
            text: "Requests we complied with",
            type: "bullet",
          },
          {
            text: "Requests we challenged",
            type: "bullet",
          },
          {
            text: "Total records disclosed (aggregate, no personal details)",
            type: "bullet",
          },
          {
            text: "Countries/agencies making requests",
            type: "bullet",
          },
        ],
      },
      {
        id: "privacy-compliance-report",
        title: "Annual Privacy Compliance Report",
        content: "Includes:",
        items: [
          {
            text: "Data subject requests received (by request type)",
            type: "bullet",
          },
          {
            text: "Requests completed on time",
            type: "bullet",
          },
          {
            text: "Requests denied (by reason)",
            type: "bullet",
          },
          {
            text: "Complaints received",
            type: "bullet",
          },
          {
            text: "Complaints resolved",
            type: "bullet",
          },
          {
            text: "Privacy policy updates",
            type: "bullet",
          },
        ],
      },
      {
        id: "data-processing-report",
        title: "Annual Data Processing Report",
        content: "Includes:",
        items: [
          {
            text: "Data retention compliance metrics",
            type: "bullet",
          },
          {
            text: "Anonymization processes applied",
            type: "bullet",
          },
          {
            text: "Data minimization improvements",
            type: "bullet",
          },
          {
            text: "Third-party processor updates",
            type: "bullet",
          },
          {
            text: "Security certifications maintained",
            type: "bullet",
          },
        ],
      },
      {
        id: "where-published",
        title: "Where We Publish",
        content: "",
        items: [
          {
            text: "Website: https://aiaugmented.io/privacy/transparency",
            type: "bullet",
          },
          {
            text: "Available: By end of Q1 each year",
            type: "bullet",
          },
          {
            text: "Format: PDF report + executive summary",
            type: "bullet",
          },
        ],
      },
      {
        id: "historical-reports",
        title: "Historical Reports",
        content: "All prior years' reports available for comparison",
        items: [
          {
            text: "Shows trend over time",
            type: "bullet",
          },
        ],
      },
    ],
  },
  {
    id: "28",
    title: "Complaints, Inquiries, and Support",
    content: "",
    subsections: [
      {
        id: "privacy-team-contact",
        title: "Privacy Team Contact",
        content: "For all privacy matters:",
        table: {
          headers: ["Request Type", "Email", "Response Time"],
          rows: [
            ["Privacy inquiries", "info@aiaugmented.io", "5 business days"],
            ["Data requests", "info@aiaugmented.io", "Per SLA (30-45 days)"],
            ["Security issues", "info@aiaugmented.io", "48 hours"],
            ["Complaints", "info@aiaugmented.io", "10 business days"],
            ["Enterprise compliance", "info@aiaugmented.io", "5 business days"],
            ["Withdrawal of consent", "info@aiaugmented.io", "24 hours"],
          ],
        },
      },
      {
        id: "dpo-contact",
        title: "Data Protection Officer (DPO)",
        content: "For complex data protection matters requiring escalation:",
        items: [
          {
            text: "Email: info@aiaugmented.io",
            type: "bullet",
          },
          {
            text: "We ensure DPO is independent and impartial",
            type: "bullet",
          },
          {
            text: "Response within 10 business days",
            type: "bullet",
          },
        ],
      },
      {
        id: "privacy-escalation",
        title: "Privacy Escalation",
        content: "If you're not satisfied with response:",
        items: [
          {
            text: 'Reply to original email with "ESCALATION" in subject',
            type: "bullet",
          },
          {
            text: "We assign independent reviewer (not involved in original response)",
            type: "bullet",
          },
          {
            text: "Response within 20 business days",
            type: "bullet",
          },
        ],
      },
      {
        id: "all-requests-include",
        title: "All Requests Include",
        content: "",
        items: [
          {
            text: "Confirmation of receipt",
            type: "bullet",
          },
          {
            text: "Request reference number",
            type: "bullet",
          },
          {
            text: "Status updates if the processing time is long",
            type: "bullet",
          },
          {
            text: "Final response with reasoning",
            type: "bullet",
          },
        ],
      },
      {
        id: "privacy-questions",
        title: "Privacy Questions, Requests, or Concerns",
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
                text: 'Description of your request (e.g., "Data Access Request," "Deletion Request," "Opt-Out Request")',
                type: "bullet",
              },
              {
                text: "Specific content or timeframe if relevant",
                type: "bullet",
              },
            ],
          },
          {
            label: "Response Timeline:",
            text: "",
            items: [
              {
                text: "We respond to all requests within 10 business days",
                type: "bullet",
              },
              {
                text: "Complex requests may take up to 30 days",
                type: "bullet",
              },
              {
                text: "We'll notify you if we need additional information",
                type: "bullet",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "29",
    title: "Summary: What You Should Know",
    content: "",
    subsections: [
      {
        id: "we-protect",
        title: "We Protect",
        content: "",
        items: [
          {
            text: "Your proprietary content and decision-making process",
            type: "check",
          },
          {
            text: "Your business confidentiality and competitive advantage",
            type: "check",
          },
          {
            text: "Your right to delete all your data anytime",
            type: "check",
          },
          {
            text: "Your right to export your thinking anytime",
            type: "check",
          },
          {
            text: "Your privacy rights globally",
            type: "check",
          },
        ],
      },
      {
        id: "we-improve",
        title: "We Improve",
        content: "",
        items: [
          {
            text: "Our agents by learning from anonymized usage patterns",
            type: "check",
          },
          {
            text: "Your experience on the platform",
            type: "check",
          },
          {
            text: "Our service quality continuously",
            type: "check",
          },
        ],
      },
      {
        id: "we-respect",
        title: "We Respect",
        content: "",
        items: [
          {
            text: "Your data ownership",
            type: "check",
          },
          {
            text: "Your opt-out preferences",
            type: "check",
          },
          {
            text: "Your privacy rights",
            type: "check",
          },
          {
            text: "Your competitive advantage",
            type: "check",
          },
        ],
      },
      {
        id: "we-never",
        title: "We Never",
        content: "",
        items: [
          {
            text: "Train models on your specific proprietary content",
            type: "cross",
          },
          {
            text: "Expose your business identity to third parties",
            type: "cross",
          },
          {
            text: "Sell your personal or Strategic Content",
            type: "cross",
          },
          {
            text: "Compete with you using your insights",
            type: "cross",
          },
          {
            text: "Compromise your data protection for profit",
            type: "cross",
          },
        ],
      },
    ],
  },
  {
    id: "30",
    title: "Definitions",
    content: "",
    subsections: [
      {
        id: "ai-augmented-definition",
        title: 'AI-Augmented / "We," "Us," "The Company"',
        content:
          "AI-Augmented and all affiliated entities operating the Platform.",
      },
      {
        id: "strategic-content-definition",
        title: "Strategic Content Data",
        content:
          "Your inputs, decisions, business context, uploaded documents, Decision Canvas, conversation history, and generated outputs. You are the data controller. We are the processor.",
      },
      {
        id: "interaction-patterns-definition",
        title: "Interaction Patterns",
        content:
          "Anonymized, aggregated data about how you use the platform. Used to improve service quality and agent intelligence.",
      },
      {
        id: "technical-data-definition",
        title: "Technical Data",
        content:
          "IP addresses, device information, login times, system performance metrics, error logs. Used for operations and security.",
      },
      {
        id: "personal-data-definition",
        title: "Personal Data",
        content:
          "Name, email address, billing information. Used for account management.",
      },
      {
        id: "anonymization-definition",
        title: "Anonymization",
        content:
          "The process of removing identifying information so data cannot be traced back to you. Includes tokenization, removal of company context, and stripping proprietary content.",
      },
      {
        id: "permanent-memory-definition",
        title: "Permanent Memory",
        content:
          "The feature that stores your Strategic Content indefinitely in your account for future reference and context.",
      },
      {
        id: "chief-of-staff-definition",
        title: "The Chief of Staff",
        content:
          "Our specialized AI orchestrator that routes your questions to relevant agents and synthesizes insights.",
      },
      {
        id: "proprietary-architecture-definition",
        title: "Proprietary Architecture",
        content:
          "Our technical implementation, model details, anonymization methods, and security protocols are proprietary. Implementation details may change without notice.",
      },
    ],
  },
  {
    id: "31",
    title: "Additional Information",
    content: "",
    subsections: [
      {
        id: "policy-applies-to",
        title: "This Policy Applies To",
        content: "",
        items: [
          {
            text: "Our web platform and any future applications",
            type: "bullet",
          },
          {
            text: "All features including agents, Decision Canvas, reports",
            type: "bullet",
          },
          {
            text: "All data collection methods (direct input, file uploads, API usage)",
            type: "bullet",
          },
        ],
      },
      {
        id: "changes-to-policy",
        title: "Changes to This Policy",
        content: "",
        items: [
          {
            text: "We review and update this policy regularly",
            type: "bullet",
          },
          {
            text: "Major changes require 30 days' notice and your consent",
            type: "bullet",
          },
          {
            text: "Minor clarifications may be made without notice",
            type: "bullet",
          },
          {
            text: "Your continued use means you accept the policy",
            type: "bullet",
          },
        ],
      },
      {
        id: "governing-law",
        title: "Governing Law",
        content: "",
        items: [
          {
            text: "This policy is governed by applicable data protection laws globally",
            type: "bullet",
          },
          {
            text: "For disputes, the terms of service will govern",
            type: "bullet",
          },
        ],
      },
    ],
  },
];
