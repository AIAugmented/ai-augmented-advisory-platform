"use client";

import { motion } from "framer-motion";
import { Ban, Globe, Lightbulb, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { WAITLIST_URL } from "@/constants";

export default function About() {
  return (
    <div className="container-width space-y-48 bg-gradient-to-b from-background via-background to-muted/5 py-32">
      {/* About AI-Augmented Section */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-uppercase">About</p>
          <h1>AI-Augmented</h1>
        </motion.div>

        <motion.p
          className="text-large"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your judgment is sharp. Your instincts are right more often than
          they're wrong. But the system has changed.
        </motion.p>

        <div className="space-y-4">
          <motion.p
            className="text-large"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Every decision now requires more validation, more alignment, more
            data to justify. You know what needs to happen. By the time
            consensus is built, the window closes.
          </motion.p>

          <motion.p
            className="text-large"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Your team feels the hesitation. The board notices the delay. And
            you're left wondering if your instincts are still as good as they
            used to be.
          </motion.p>

          <motion.p
            className="text-large font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            They are. The system just won't let you trust them.
          </motion.p>

          <motion.div
            className="border-l-4 border-primary py-4 pl-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-lg font-semibold text-foreground/85">
              The cost is clear: what used to take days now takes weeks. What
              used to move decisively now moves hedged. Your competitive edge
              isn't gone. It's trapped behind consensus-building.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* How I Built the Solution Title */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-uppercase">My Story</p>
          <h2>How I Built the Solution</h2>
        </motion.div>
        <motion.p
          className="text-large"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A strategist's journey from dependency to restored authority. <br />
          How I discovered the real problem and built something different.
        </motion.p>

        {/* Hero Section with Founder */}
        <div className="grid gap-12 lg:grid-cols-3 lg:items-center">
          <motion.div
            className="flex h-[250px] items-center justify-center overflow-hidden rounded-lg border border-blue-300/40 bg-gradient-to-br from-blue-100/5 to-transparent lg:col-span-1 dark:border-blue-900/30 dark:from-blue-900/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/celeste.png"
              alt="Celeste Farm, Founder"
              width={250}
              height={250}
              className="object-contain"
            />
          </motion.div>
          <motion.div
            className="space-y-6 lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-3">
              <h3>Built by a Strategist, For Strategists</h3>
              <p className="text-large">
                I'm Celeste Farm, founder of AI-Augmented. I didn't start out to
                build a product. I started out trying to solve my own problem.
              </p>
            </div>

            <div className="space-y-4 border-l-4 border-primary py-4 pl-8">
              <p className="text-lg leading-relaxed text-foreground/80">
                I realized I'd fallen into a trap that every senior leader
                faces: the more tools and consultants I used to validate my
                instinct, the less I trusted myself to make decisions
                independently.
              </p>
              <p className="text-lg leading-relaxed text-foreground/85">
                I wasn't alone in this. Every leader I talked to experienced the
                same thing, dressed up in different language, but the same core
                problem.
              </p>
            </div>

            <Link href="http://www.linkedin.com/in/celestefarm" target="_blank">
              <div className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80">
                <span className="text-sm font-semibold">
                  Connect on LinkedIn
                </span>
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={18}
                  height={18}
                />
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* My Journey - Key Realizations */}
      <motion.section
        className="space-y-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-uppercase">The Discovery</p>
          <h2>The Problem Revealed Itself</h2>
        </motion.div>

        {/* Timeline of Realizations */}
        <div className="space-y-6">
          {/* Realization 1 */}
          <motion.div
            className="space-y-4 rounded-lg border border-blue-300/40 bg-gradient-to-br from-blue-100/5 to-transparent p-8 dark:border-blue-900/30 dark:from-blue-900/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 [box-shadow:0_0_20px_rgba(203,213,225,0.3),_inset_0_0_15px_rgba(226,232,240,0.3)] dark:bg-slate-900 dark:[box-shadow:0_0_20px_rgba(30,41,59,0.8),_inset_0_0_15px_rgba(15,23,42,0.9)]">
                <Ban className="size-5 text-slate-600 [text-shadow:0_0_10px_rgba(100,116,139,0.6)] dark:text-slate-400" />
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-lg font-semibold text-foreground">
                  The Dependency Trap
                </p>
                <p className="text">
                  I discovered I'd become dependent on external validation for
                  decisions I used to make with confidence. More tools didn't
                  help, they made me question my own judgment more.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Realization 2 */}
          <motion.div
            className="space-y-4 rounded-lg border border-blue-300/40 bg-gradient-to-br from-blue-100/5 to-transparent p-8 dark:border-blue-900/30 dark:from-blue-900/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 [box-shadow:0_0_20px_rgba(203,213,225,0.3),_inset_0_0_15px_rgba(226,232,240,0.3)] dark:bg-slate-900 dark:[box-shadow:0_0_20px_rgba(30,41,59,0.8),_inset_0_0_15px_rgba(15,23,42,0.9)]">
                <Globe className="size-5 text-slate-600 [text-shadow:0_0_10px_rgba(100,116,139,0.6)] dark:text-slate-400" />
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-lg font-semibold text-foreground">
                  It's Universal
                </p>
                <p className="text">
                  Every senior leader I spoke with experienced the same trap,
                  using different language: "analysis paralysis," "decision
                  fatigue," "overthinking." The core issue: external support
                  erodes internal authority.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Realization 3 */}
          <motion.div
            className="space-y-4 rounded-lg border border-blue-300/40 bg-gradient-to-br from-blue-100/5 to-transparent p-8 dark:border-blue-900/30 dark:from-blue-900/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 [box-shadow:0_0_20px_rgba(203,213,225,0.3),_inset_0_0_15px_rgba(226,232,240,0.3)] dark:bg-slate-900 dark:[box-shadow:0_0_20px_rgba(30,41,59,0.8),_inset_0_0_15px_rgba(15,23,42,0.9)]">
                <Target className="size-5 text-slate-600 [text-shadow:0_0_10px_rgba(100,116,139,0.6)] dark:text-slate-400" />
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-lg font-semibold text-foreground">
                  The Real Pattern
                </p>
                <p className="text">
                  MIT research confirmed it: When we outsource validation, we
                  atrophy the decision-making muscles that made us effective.
                  More data doesn't increase confidence, it increases complexity
                  and hesitation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Realization 4 - The Key Insight */}
          <motion.div
            className="space-y-4 rounded-lg border border-primary bg-gradient-to-br from-primary/10 to-transparent p-8 dark:border-primary dark:from-primary/10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 [box-shadow:0_0_20px_rgba(203,213,225,0.3),_inset_0_0_15px_rgba(226,232,240,0.3)] dark:bg-slate-900 dark:[box-shadow:0_0_20px_rgba(30,41,59,0.8),_inset_0_0_15px_rgba(15,23,42,0.9)]">
                <Lightbulb className="size-5 text-slate-600 [text-shadow:0_0_10px_rgba(100,116,139,0.6)] dark:text-slate-400" />
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-lg font-semibold text-foreground">
                  The Real Solution
                </p>
                <p className="text">
                  The bottleneck wasn't intelligence or speed. It was leaders
                  who could make high-stakes decisions with conviction while
                  staying in command of their own thinking. That didn't exist.
                  So I built it.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* What I Learned - Key Takeaways */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-uppercase">The Learning</p>
          <h2>What This Taught Me</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-lg border border-blue-300/40 bg-gradient-to-br from-blue-100/5 to-transparent p-6 dark:border-blue-900/30 dark:from-blue-900/5">
            <h4>Speed Comes from Clarity</h4>
            <p className="text">
              Decision velocity isn't about faster processing. It's about
              clearer thinking under pressure. The best leaders make decisions
              decisively because they've learned to trust their refined
              judgment.
            </p>
          </div>

          <div className="space-y-4 rounded-lg border border-blue-300/40 bg-gradient-to-br from-blue-100/5 to-transparent p-6 dark:border-blue-900/30 dark:from-blue-900/5">
            <h4>Authority Comes First</h4>
            <p className="text">
              Leaders don't need more support, they need their authority
              restored. Tools should stress-test thinking, not replace it.
              Confidence comes from knowing you own your decisions.
            </p>
          </div>

          <div className="space-y-4 rounded-lg border border-blue-300/40 bg-gradient-to-br from-blue-100/5 to-transparent p-6 dark:border-blue-900/30 dark:from-blue-900/5">
            <h4>Rigor Without Dependency</h4>
            <p className="text">
              Rigorous analysis and independent decision-making aren't
              opposites. The sharpest leaders move decisively and think clearly
              simultaneously. Intelligence amplifies judgment, it doesn't
              replace it.
            </p>
          </div>

          <div className="space-y-4 rounded-lg border border-blue-300/40 bg-gradient-to-br from-blue-100/5 to-transparent p-6 dark:border-blue-900/30 dark:from-blue-900/5">
            <h4>Execution Starts with Conviction</h4>
            <p className="text">
              When you move with full conviction, your team executes with full
              force. Hesitation cascades. Authority cascades. The difference is
              whether you're commanding or consulting.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Vision & Mission Section */}
      <motion.section
        className="space-y-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-uppercase">Vision & Mission</p>
            <h2>Our Vision: Restore Decision Authority</h2>
          </div>

          <p className="text-large">
            Leaders who refuse to be slowed by unnecessary consensus. Who move
            when the moment is real. Who execute with conviction. Who strengthen
            their thinking instead of weakening it through dependency.
          </p>
        </div>

        <div className="space-y-6 border-l-4 border-primary py-4 pl-8">
          <h3>Our Mission</h3>
          <p className="text-lg font-semibold text-foreground/85">
            Restore decision velocity by keeping you in command of your own
            judgment in high-stakes environments.
          </p>

          <p className="text-lg font-semibold text-foreground/85">
            Every insight remains unmistakably yours. Grounded in your pattern
            recognition. Backed by rigorous analysis. Defensible under pressure.
            Never dependent on the system.
          </p>
        </div>

        <div className="space-y-6">
          <h3>The Outcome</h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-lg font-bold text-primary">•</span>
              <span className="text-lg text-foreground/80">
                Leaders who move decisively in days, not weeks, without becoming
                dependent on external validation.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-lg font-bold text-primary">•</span>
              <span className="text-lg text-foreground/80">
                Decision velocity that creates competitive advantage because it
                comes from sharpened thinking, not faster processing.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-lg font-bold text-primary">•</span>
              <span className="text-lg text-foreground/80">
                Authority to act on conviction without needing permission from
                consensus.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-lg font-bold text-primary">•</span>
              <p className="text-lg leading-relaxed text-foreground/80">
                When you move with full conviction, your team executes with the
                certainty their leader actually feels, not a diluted version.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-lg font-bold text-primary">•</span>
              <span className="text-lg text-foreground/80">
                Professional authority earned through independent thinking, not
                outsourced judgment.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-lg font-bold text-primary">•</span>
              <span className="text-lg text-foreground/80">
                The speed and decisiveness you had when you first built your
                reputation.
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3>What We Believe</h3>

          {/* Collapsible Cycle Infographic */}
          <div className="space-y-4">
            {[
              {
                title: "Speed and Rigor Aren't Opposites",
                description:
                  "The sharpest leaders move decisively and think clearly. We help you do both simultaneously.",
                order: "1",
              },
              {
                title: "Your Judgment Is Your Competitive Advantage",
                description:
                  "Not your access to data. Not your network. Your ability to see patterns others miss and move before the market catches up.",
                order: "2",
              },
              {
                title: "Dependency Is the Enemy of Decisiveness",
                description:
                  "Tools that make you dependent on them weaken you. We're designed to strengthen you. We're the opposite of that.",
                order: "3",
              },
              {
                title: "Decisiveness Is Contagious",
                description:
                  "When you move with conviction, your team executes with conviction. We ensure you're the one moving with conviction, not hesitation.",
                order: "4",
              },
              {
                title: "Authority Isn't Given. It's Earned.",
                description:
                  "By making decisions that are right, defensible, and made at the right moment. Not by seeking consensus.",
                order: "5",
              },
            ].map((belief, idx) => (
              <details
                key={idx}
                className="group overflow-hidden rounded-lg border border-slate-300/40 bg-gradient-to-br from-slate-100/5 to-transparent transition-all hover:border-slate-400/40 dark:border-primary/20 dark:from-primary/5 dark:hover:border-primary/40"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-semibold text-foreground transition-colors hover:bg-slate-100/5 dark:hover:bg-primary/5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-300/40 text-sm font-bold text-slate-700 dark:bg-primary/20 dark:text-primary">
                      {belief.order}
                    </div>
                    <span>{belief.title}</span>
                  </div>
                  <span className="text-slate-700 transition-transform group-open:rotate-180 dark:text-primary">
                    ▼
                  </span>
                </summary>
                <div className="space-y-3 border-t border-slate-300/40 bg-slate-100/3 px-6 py-4 dark:border-primary/20 dark:bg-primary/3">
                  <p className="text">{belief.description}</p>
                </div>
              </details>
            ))}

            {/* Cycle indicator */}
            <div className="pt-4 text-center">
              <div className="inline-block rounded-full border border-slate-300/40 bg-slate-100/5 px-6 py-3 dark:border-primary/30 dark:bg-primary/5">
                <p className="text-sm font-semibold text-slate-700 dark:text-primary">
                  The cycle repeats - each belief strengthens the next
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-2">
          <p className="text-uppercase">Our Core</p>
          <h2>Our values</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="group space-y-4 rounded-xl border border-blue-300/40 bg-gradient-to-br from-blue-100/5 to-transparent p-8 transition-all hover:border-blue-400/40 dark:border-blue-900/30 dark:from-blue-900/5 dark:hover:border-blue-700/40">
            <h4>Amplification Over Replacement</h4>
            <p className="text">
              We believe AI's job is to make you sharper, not softer. Every
              feature exists to strengthen your thinking, not substitute for it.
            </p>
          </div>

          <div className="group space-y-4 rounded-xl border border-blue-300/40 bg-gradient-to-br from-blue-100/5 to-transparent p-8 transition-all hover:border-blue-400/40 dark:border-blue-900/30 dark:from-blue-900/5 dark:hover:border-blue-700/40">
            <h4>Human Judgment as Sacred</h4>
            <p className="text">
              Your ethics, intuition, and strategic vision are non-negotiable.
              We protect them fiercely.
            </p>
          </div>

          <div className="group space-y-4 rounded-xl border border-blue-300/40 bg-gradient-to-br from-blue-100/5 to-transparent p-8 transition-all hover:border-blue-400/40 dark:border-blue-900/30 dark:from-blue-900/5 dark:hover:border-blue-700/40">
            <h4>Defensible Decisions</h4>
            <p className="text">
              Every choice you make through AI-Augmented is unmistakably yours,
              grounded in your thinking, backed by rigorous analysis, ready to
              defend.
            </p>
          </div>

          <div className="group space-y-4 rounded-xl border border-blue-300/40 bg-gradient-to-br from-blue-100/5 to-transparent p-8 transition-all hover:border-blue-400/40 dark:border-blue-900/30 dark:from-blue-900/5 dark:hover:border-blue-700/40">
            <h4>Cognitive Integrity</h4>
            <p className="text">
              We reject the slow corrosion of critical thinking. We build
              systems that strengthen independent thought, not weaken it.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Strategic Symbiosis Section */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-2">
          <p className="text-uppercase">How It Works</p>
          <h2>Strategic Symbiosis</h2>
        </div>

        <div className="my-12 space-y-6 rounded-xl border border-blue-300/40 bg-gradient-to-br from-blue-100/5 to-transparent p-10 dark:border-blue-900/30 dark:from-blue-900/5">
          <div className="space-y-6">
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
              <div className="flex-1 space-y-2 text-right">
                <p className="text-lg font-semibold text-foreground">
                  Your Strategic Intuition
                </p>
                <p className="text-sm text-foreground/70">
                  Pattern recognition, market instinct, ethical framework
                </p>
              </div>
              <div className="text-3xl text-slate-500/70 dark:text-amber-400/70">
                +
              </div>
              <div className="flex-1 space-y-2 text-left">
                <p className="text-lg font-semibold text-foreground">
                  Our Analytical Rigor
                </p>
                <p className="text-sm text-foreground/70">
                  Stress-testing, complexity synthesis, rigorous analysis
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-center">
                <span className="text-4xl font-bold text-slate-500/70 dark:text-amber-400/70">
                  =
                </span>
                <p>Authority Without Compromise</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-blue-300/40 pt-6 dark:border-blue-900/30">
            <div className="space-y-3">
              <p className="text-lg leading-relaxed text-foreground/85">
                But here's the difference:{" "}
                <span className="font-semibold">You stay in command.</span>
              </p>
              <p className="text-lg leading-relaxed text-foreground/85">
                <span className="font-semibold">
                  You remain the decision variable.
                </span>{" "}
                We never replace your thinking. We force you to stay sharper by
                challenging it.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-blue-300/40 bg-gradient-to-r from-blue-100/5 to-transparent p-6 dark:border-blue-900/30 dark:from-blue-900/5">
              <p className="text-lg leading-relaxed text-foreground/85">
                <span className="font-semibold">
                  You think clearer under pressure.
                </span>{" "}
                You move faster.{" "}
                <span className="font-semibold">
                  The decision is unmistakably yours
                </span>{" "}
                and defensible everywhere it matters.
              </p>
            </div>
          </div>
        </div>

        <p className="text-large">
          The platform ensures you remain the most competent variable in every
          equation.
        </p>
        <Button size="lg" className="gradient-button">
          <Link href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
            Be the First to Experience It
          </Link>
        </Button>
      </motion.section>

      {/* Why I'm Building This Section */}
      <motion.section
        className="space-y-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-uppercase">Personal Conviction</p>
            <h2>Why I'm Building This</h2>
          </div>
          <p className="text-large max-w-3xl">
            What started as solving my own problem became a mission to solve it
            for every strategic leader facing the same trap.
          </p>
        </div>

        {/* The Journey - Vertical Timeline */}
        <div className="max-w-3xl space-y-6">
          {/* Stage 1 */}
          <div className="relative border-l-2 pb-8 pl-8 dark:border-primary/10">
            <div className="absolute top-0 -left-[13px] h-6 w-6 rounded-full border-4 border-background bg-primary"></div>
            <div className="space-y-3">
              <h4>I Noticed the Pattern</h4>
              <p className="text">
                Brilliant leaders becoming hesitant. More tools making them
                slower. External validation eroding their authority. I wasn't
                alone in this experience.
              </p>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="relative border-l-2 pb-8 pl-8 dark:border-primary/10">
            <div className="absolute top-0 -left-[13px] h-6 w-6 rounded-full border-4 border-background bg-primary"></div>
            <div className="space-y-3">
              <h4>I Studied the Research</h4>
              <p className="text">
                MIT research confirmed it. Cognitive outsourcing doesn't amplify
                judgment, it erodes it. Every additional tool, every
                consultation layer was weakening decision-making, not
                strengthening it.
              </p>
            </div>
          </div>

          {/* Stage 3 */}
          <div className="relative border-l-2 pb-8 pl-8 dark:border-primary/10">
            <div className="absolute top-0 -left-[13px] h-6 w-6 rounded-full border-4 border-background bg-primary"></div>
            <div className="space-y-3">
              <h4>I Saw the Gap</h4>
              <p className="text">
                Every tool being built was deepening the trap, not breaking free
                from it. No one was building for leaders who wanted to
                strengthen their thinking, not replace it. That gap was massive.
              </p>
            </div>
          </div>

          {/* Stage 4 - The Answer */}
          <div className="relative border-l-2 border-primary pl-8">
            <div className="absolute top-0 -left-[13px] h-6 w-6 rounded-full border-4 border-background bg-primary"></div>
            <div className="space-y-4 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent p-8">
              <h4>I Built the Solution</h4>
              <p className="text-lg leading-relaxed text-foreground/80">
                A platform designed to amplify your thinking, surface blind
                spots, and crystallize conviction. One that keeps you in command
                of your own mind while leveraging AI's analytical power.
              </p>
              <div className="border-t border-primary/20 pt-4">
                <p className="text-lg font-semibold text-primary">
                  You remain the decision variable. You remain in authority.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Core Belief */}
        <div className="space-y-6 rounded-xl border border-blue-300/40 bg-gradient-to-br from-blue-100/5 to-transparent p-12 dark:border-blue-900/30 dark:from-blue-900/5">
          <h3>What I Believe</h3>
          <div className="flex gap-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20">
              <span className="text-lg font-bold text-primary">1</span>
            </div>
            <div>
              <p className="mb-2 font-semibold text-foreground">
                Speed and rigor aren't opposites
              </p>
              <p className="text-foreground/75">
                The sharpest leaders move decisively and think clearly at the
                same time.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20">
              <span className="text-lg font-bold text-primary">2</span>
            </div>
            <div>
              <p className="mb-2 font-semibold text-foreground">
                Dependency is the enemy of decisiveness
              </p>
              <p className="text-foreground/75">
                Tools that strengthen you never make you dependent on them. They
                make you stronger without them.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20">
              <span className="text-lg font-bold text-primary">3</span>
            </div>
            <div>
              <p className="mb-2 font-semibold text-foreground">
                Authority comes from confidence, not consensus
              </p>
              <p className="text-foreground/75">
                When you move with conviction, your team executes with
                conviction. Hesitation cascades. Authority cascades.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Statement */}
        <div className="relative space-y-8 overflow-hidden rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-primary/8 to-transparent p-12">
          <div className="absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-primary/5"></div>
          <div className="absolute bottom-0 left-0 -mb-32 -ml-32 h-48 w-48 rounded-full bg-primary/5"></div>

          <div className="relative z-10 space-y-6">
            <p className="text-2xl leading-relaxed font-bold text-foreground">
              I'm building this because every leader deserves the chance to
              reclaim the authority that made them effective. To think sharper
              under pressure. To move decisively without needing permission.
            </p>

            <p className="text-lg leading-relaxed text-foreground/80">
              You didn't build your reputation by seeking consensus. You built
              it by trusting your judgment and moving. We're here to restore
              that.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-6 border-t border-primary/20 pt-8">
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
          </div>
        </div>
      </motion.section>
    </div>
  );
}
