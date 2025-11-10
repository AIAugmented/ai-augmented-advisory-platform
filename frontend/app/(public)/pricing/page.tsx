"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { WAITLIST_URL } from "@/constants";
import { ROUTES } from "@/routes";

export default function Pricing() {
  return (
    <div className="container-width space-y-48 bg-gradient-to-b from-background via-background to-muted/5 py-32">
      {/* Premium Hero Section */}
      <section className="space-y-6">
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
            <span className="text-uppercase">Premium Access</span>
            <span className="text-primary/40">•</span>
            <span className="text-xs text-foreground/70">
              Founding Member Pricing
            </span>
          </div>
          <h1>
            <span className="text-yellow-800/95">Better Decisions,</span>
            <br />
            <span>
              Without Outsourcing Your <br /> Authority
            </span>
          </h1>
        </motion.div>
        <motion.p
          className="text-large"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Strategic consulting that keeps{" "}
          <span className="font-semibold text-foreground">
            your judgment central.
          </span>
          <br />
          Not a chatbot. Not a consultant. A thinking partner that makes you
          sharper.
        </motion.p>
      </section>

      {/* One Plan Section */}
      <section className="space-y-12">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="space-y-2">
            <p className="text-uppercase">The Founding Plan</p>
            <h2>
              One Plan. One Price.{" "}
              <span className="text-yellow-800/95">Forever.</span>
            </h2>
          </div>
          <p className="text-large">
            Your rate locks in now. When pricing increases, yours doesn't. Ever.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Main Pricing Card - Premium Design */}
          <div className="group relative">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 blur-xl transition-all duration-300 group-hover:blur-2xl" />

            <div className="space-y-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-background/80 to-background/40 p-12 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-primary/50">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-uppercase">Strategic Authority Plan</p>
                  <div className="flex items-end gap-1">
                    <div className="text-6xl font-bold tracking-tight text-yellow-800/95 md:text-7xl">
                      $149
                    </div>
                    <span className="text-lg leading-relaxed text-foreground">
                      / month, billed monthly
                    </span>
                  </div>
                </div>

                <div className="border-t border-primary/10 pt-8">
                  <p className="text-lg leading-relaxed text-foreground">
                    Or{" "}
                    <span className="font-semibold text-yellow-800/95">
                      $1,490/year
                    </span>{" "}
                    – Save <span className="text-yellow-800/95">$298</span>.
                    Locked in for life.
                  </p>
                </div>
              </div>

              <div className="space-y-6 border-t border-primary/10 pt-8">
                <h3>What's Included</h3>
                <ul className="space-y-4">
                  <li className="group/item flex gap-4">
                    <span className="flex-shrink-0 text-lg font-semibold">
                      ✓
                    </span>
                    <span className="leading-relaxed">
                      <span className="font-semibold">
                        Unlimited Strategic Decisions
                      </span>{" "}
                      – No monthly limits, no credit games.
                    </span>
                  </li>
                  <li className="group/item flex gap-4">
                    <span className="flex-shrink-0 text-lg font-semibold">
                      ✓
                    </span>
                    <span className="leading-relaxed">
                      <span className="font-semibold">
                        Five Specialized Agents
                      </span>{" "}
                      – Market Compass, Financial Guardian, Strategy Analyst,
                      People Advisor, Action Architect.
                    </span>
                  </li>
                  <li className="group/item flex gap-4">
                    <span className="flex-shrink-0 text-lg font-semibold">
                      ✓
                    </span>
                    <span className="leading-relaxed">
                      <span className="font-semibold">The Decision Canvas</span>{" "}
                      – Unlimited creation, editing, saving, and exporting.
                    </span>
                  </li>
                  <li className="group/item flex gap-4">
                    <span className="flex-shrink-0 text-lg font-semibold">
                      ✓
                    </span>
                    <span className="leading-relaxed">
                      <span className="font-semibold">
                        Executive-Grade Reports
                      </span>{" "}
                      – Export-ready. No watermarks. Present with full
                      authority.
                    </span>
                  </li>
                  <li className="group/item flex gap-4">
                    <span className="flex-shrink-0 text-lg font-semibold">
                      ✓
                    </span>
                    <span className="leading-relaxed">
                      <span className="font-semibold">
                        Permanent Strategic Memory
                      </span>{" "}
                      – Every decision stays in your account forever.
                    </span>
                  </li>
                  <li className="group/item flex gap-4">
                    <span className="flex-shrink-0 text-lg font-semibold">
                      ✓
                    </span>
                    <span className="leading-relaxed">
                      <span className="font-semibold">Priority Support</span> –
                      Direct access to our team.
                    </span>
                  </li>
                  <li className="group/item flex gap-4">
                    <span className="flex-shrink-0 text-lg font-semibold">
                      ✓
                    </span>
                    <span className="leading-relaxed">
                      <span className="font-semibold">Shape the Roadmap</span> –
                      Your feedback influences what we build next.
                    </span>
                  </li>
                  <li className="group/item flex gap-4">
                    <span className="flex-shrink-0 text-lg font-semibold">
                      ✓
                    </span>
                    <span className="leading-relaxed">
                      <span className="font-semibold">
                        Beta Access to New Agents
                      </span>{" "}
                      – Early access before public release.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-8 border-t border-primary/10 pt-8">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-primary/80 py-6 text-base shadow-lg transition-all duration-300 hover:from-primary/90 hover:to-primary/70 hover:shadow-xl"
                >
                  <Link
                    href={WAITLIST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Beta Access
                  </Link>
                </Button>
                <p className="text-small text-center">
                  14-day money-back guarantee. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Founding User Benefits Section */}
      <section className="space-y-12">
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-uppercase">Why Founding Members</p>
          <h2>
            Premium{" "}
            <span className="text-yellow-800/95">Founding Benefits</span>
          </h2>
        </motion.div>

        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Locked-In Pricing for Life",
              text: "Your monthly rate stays at $149/month forever. When we raise pricing, yours doesn't change.",
            },
            {
              title: "Direct Input on Roadmap",
              text: "Your voice shapes what we build next. You're a founding partner, not just a customer.",
            },
            {
              title: "Early Access to Capabilities",
              text: "Beta features and new agents. Help us refine them before public release.",
            },
            {
              title: "14-Day Money-Back Guarantee",
              text: "No questions asked. If it doesn't work, we refund completely. Your investment shouldn't come with risk.",
            },
            {
              title: "Founding User Recognition",
              text: "A badge in your account marking you as part of the mission from the beginning.",
            },
            {
              title: "Your Authority Always Yours",
              text: "You stay in command. You're sharpening your thinking, not outsourcing it.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="group relative flex"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 blur-xl transition-all duration-300 group-hover:blur-2xl" />
              <div className="relative h-full space-y-4 rounded-2xl border border-primary/40 bg-gradient-to-br from-white/60 to-slate-50/40 p-8 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20 dark:from-slate-900/60 dark:to-slate-950/40">
                <h4>{card.title}</h4>
                <p className="text-small">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why This Price Section */}
      <section className="space-y-12">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="space-y-2">
            <p className="text-uppercase">Value Positioning</p>
            <h2>
              Why <span className="text-yellow-800/95">$149/Month?</span>
            </h2>
          </div>
          <p className="text-large">
            It's not about being the cheapest. It's about being worth more than
            you pay.
          </p>
        </motion.div>

        <div className="grid w-full gap-6 md:grid-cols-3">
          <motion.div
            className="space-y-4 rounded-2xl border border-primary/30 bg-gradient-to-br from-white/50 to-slate-50/30 p-8 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg dark:from-slate-900/50 dark:to-slate-950/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-4xl font-bold text-amber-500/80">$0-50</div>
            <h4>Cheap Tools</h4>
            <p className="text-small">
              Generic. Commoditized. Takes your time. Leaves you less confident,
              not more.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4 rounded-2xl border border-primary/30 bg-gradient-to-br from-white/50 to-slate-50/30 p-8 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg dark:from-slate-900/50 dark:to-slate-950/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-4xl font-bold text-amber-500/80">$15-50K</div>
            <h4>Expensive Consultants</h4>
            <p className="text-small">
              Takes weeks. Leaves you dependent. You own less of your thinking.
            </p>
          </motion.div>

          <motion.div
            className="group relative space-y-4 rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/15 to-primary/5 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative space-y-4">
              <div className="text-4xl font-bold text-yellow-800/95">$149</div>
              <h4>
                This: <span className="text-yellow-800/95">Our Platform</span>
              </h4>
              <p className="text-sm leading-relaxed font-medium">
                Answers in hours. Keeps your judgment central. Your thinking
                stays yours and gets sharper.
              </p>
              <div className="text-sm font-semibold">✓ The Best Choice</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-12">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="space-y-2">
            <p className="text-uppercase">Questions Answered</p>
            <h2>Frequently Asked Questions</h2>
          </div>
          <p className="text-large">
            Everything you need to know about your founding membership.
          </p>
        </motion.div>

        <div className="w-full space-y-3">
          {[
            {
              question: "Do I need to commit to annual billing?",
              answer:
                "No. Monthly is $149/month. Annual is $1,490/year (equivalent to $124/month if paid upfront). Both lock in your founding rate forever.",
              order: "1",
            },
            {
              question: "What if I need to cancel?",
              answer:
                "You can cancel anytime. If you're in your first 14 days, you get a full refund. After that, your subscription ends at the end of the current billing period. No penalties. No hassle.",
              order: "2",
            },
            {
              question: "Will my rate go up?",
              answer:
                "No. As a founding user, your rate stays locked at $149/month forever. When we raise pricing to $299/month or higher (and we will), yours doesn't change.",
              order: "3",
            },
            {
              question: "What happens to my data if I cancel?",
              answer:
                "Your Decision Canvas and all your strategic work stays in your account for 60 days. You can export everything. Your thinking is always yours.",
              order: "4",
            },
            {
              question: "Can I upgrade or downgrade my plan?",
              answer:
                "We only have one plan right now. If you need team/organizational access, contact us – we're building that next.",
              order: "5",
            },
            {
              question: "Do you offer annual discounts?",
              answer:
                "Yes. Annual billing is $1,490/year instead of $1,788 (monthly × 12). That's $298 in savings plus you lock in founding pricing for a full year upfront.",
              order: "6",
            },
            {
              question: "What if this doesn't work for my decision?",
              answer:
                "14-day money-back guarantee. Try it on a real decision you're facing. If it doesn't work, email us. We refund within 48 hours. Your investment shouldn't come with risk.",
              order: "7",
            },
            {
              question: "Is this only for founders/CEOs?",
              answer:
                "No. This is for anyone making high-stakes strategic decisions under time pressure. That could be a founder, a CFO, a CMO, a director, or anyone else steering organizational direction. If you're making a decision that affects $500K+ in resources, this is for you.",
              order: "8",
            },
            {
              question: "How is this different from ChatGPT?",
              answer:
                "ChatGPT gives you information. AI-Augmented gives you a decision you can defend. ChatGPT makes you feel like you're outsourcing your thinking. AI-Augmented keeps you sharp. ChatGPT is free. AI-Augmented costs because it saves you weeks and keeps your cognitive authority intact.",
              order: "9",
            },
            {
              question: "Will my pricing increase during beta?",
              answer:
                "No. Your founding rate is locked in. When we exit beta and raise pricing, yours stays the same.",
              order: "10",
            },
          ].map((faq, idx) => (
            <motion.details
              key={idx}
              className="group overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-white/50 to-slate-50/30 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 dark:from-slate-900/50 dark:to-slate-950/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <summary className="flex cursor-pointer items-center justify-between px-8 py-5 text-base font-semibold transition-colors duration-200 hover:bg-primary/10">
                <div className="flex items-center gap-4">
                  <span>{faq.question}</span>
                </div>
                <span className="flex-shrink-0 text-primary/60 transition-transform group-open:rotate-180 dark:text-primary/50">
                  ▼
                </span>
              </summary>
              <div className="space-y-3 border-t border-primary/20 bg-white/30 px-8 py-5 dark:bg-slate-900/30">
                <p className="text">{faq.answer}</p>
              </div>
            </motion.details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="space-y-6 border-t border-primary/10 pt-32">
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2>Ready to Make Better Decisions?</h2>
        </motion.div>
        <motion.p
          className="text-large"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          You've got decisions to make. You know what's at stake. Your private
          executive team is ready to help you think sharper.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 py-6 text-base shadow-lg transition-all duration-300 hover:from-primary/90 hover:to-primary/70 hover:shadow-xl"
            >
              <Link
                href={WAITLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Secure Your Invitation
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 py-6 text-base transition-colors hover:border-primary/50"
            >
              <Link href={ROUTES.agents}>See All Features</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Commitment Section */}
      <section className="space-y-6 border-t border-primary/10 pt-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our Commitment to You
        </motion.h2>
        <motion.p
          className="text-large"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We're building this for leaders who want to move faster without
          outsourcing their thinking. Who want their judgment amplified, not
          replaced.
        </motion.p>
        <motion.p
          className="text-large"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          We're committed to listening to your feedback and improving
          relentlessly. We'll fix what needs fixing. We'll build what you need
          next.
        </motion.p>
        <motion.p
          className="text-lg font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Thank you for being part of building something real.
        </motion.p>

        <motion.div
          className="relative z-10 flex items-center gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="relative h-25 w-25 rounded-full border bg-white">
            <Image
              src="/images/signature.png"
              alt="Celeste Farm Signature"
              fill
              unoptimized
              quality={100}
              className="rounded-full object-contain"
            />
          </div>
          <div>
            <h4>Celeste Farm</h4>
            <p className="text-foreground/70">Founder, AI-Augmented</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
