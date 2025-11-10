"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { AgentTreeAnimation } from "@/components/animations/AgentTreeAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { WAITLIST_URL } from "@/constants";

export default function Agents() {
  return (
    <div className="container-width space-y-48 bg-gradient-to-b from-background via-background to-muted/5 py-32">
      {/* Hero Section */}
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
          <p className="text-uppercase">Strategic Intelligence</p>
          <h1>
            Five Specialized Minds,
            <br />
            One Integrated Team
          </h1>
        </motion.div>

        <motion.p
          className="text-large"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Strategic certainty in minutes, not weeks. Your five specialized
          agents <br /> stress-test your thinking, surface blind spots, and
          crystallize conviction.
        </motion.p>

        <motion.div
          className="mx-auto w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <AgentTreeAnimation />
        </motion.div>

        {/* Quick Value Props */}
        <div className="grid w-full gap-4 pt-6 md:grid-cols-3">
          <div className="flex h-full flex-col rounded-lg border border-blue-900/20 bg-gradient-to-br from-blue-900/5 to-transparent p-6">
            <p className="text-lg font-semibold text-foreground">
              Minutes not Weeks
            </p>
            <p className="mt-2 text-sm text-foreground/75">
              Get strategic answers fast
            </p>
          </div>
          <div className="flex h-full flex-col rounded-lg border border-blue-900/20 bg-gradient-to-br from-blue-900/5 to-transparent p-6">
            <p className="text-lg font-semibold text-foreground">
              Your Authority
            </p>
            <p className="mt-2 text-sm text-foreground/75">
              You decide, not them
            </p>
          </div>
          <div className="flex h-full flex-col rounded-lg border border-blue-900/20 bg-gradient-to-br from-blue-900/5 to-transparent p-6">
            <p className="text-lg font-semibold text-foreground">
              5 Perspectives
            </p>
            <p className="mt-2 text-sm text-foreground/75">
              All angles covered
            </p>
          </div>
        </div>
      </motion.section>

      {/* How It Works - Visual Equation */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-2">
          <p className="text-uppercase">The Framework</p>
          <h2>How It Works Together</h2>
        </div>

        {/* Main Formula Card */}
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glow-frame relative overflow-hidden rounded-lg border border-amber-400/20 bg-transparent p-12 backdrop-blur-sm transition-colors duration-300 hover:border-amber-400/50">
            {/* Glow accent lines */}
            <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent transition-opacity duration-300 group-hover:opacity-100"></div>

            <div className="grid gap-3 lg:grid-cols-5 lg:items-center">
              {/* Element 1 - Your Judgment */}
              <motion.div
                className="space-y-3 text-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="text-uppercase whitespace-nowrap">
                  Your Judgment
                </p>
                <p className="text">Vision, Instinct, Authority</p>
              </motion.div>

              {/* Plus Sign */}
              <motion.div
                className="flex h-20 items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="text-3xl font-light text-amber-400/70">+</div>
              </motion.div>

              {/* Element 2 - 5 Specialized Agents */}
              <motion.div
                className="space-y-3 text-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p className="text-uppercase whitespace-nowrap">
                  5 Specialized Agents
                </p>
                <p className="text">Rapid intelligence from every angle</p>
              </motion.div>

              {/* Equals Sign */}
              <motion.div
                className="flex h-20 items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className="text-3xl font-light text-amber-400/70">=</div>
              </motion.div>

              {/* Element 3 - Immediate Certainty */}
              <motion.div
                className="space-y-3 text-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <p className="text-uppercase whitespace-nowrap !text-amber-400/70">
                  Immediate Certainty
                </p>
                <p className="text font-semibold !text-foreground">
                  to decide and execute
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <p className="text-large text-center">
          You remain the decision-maker. AI sharpens your thinking, not replaces
          it.
        </p>
      </motion.section>

      {/* The Five Agents - Detailed Expanded Cards */}
      <section className="space-y-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-uppercase">Your Five Agents</p>
            <h2>The Five Pillars</h2>
          </div>
          <p className="text-large">
            Specialized intelligence from every critical angle. Each agent is
            designed to <br /> stress-test your judgment from a unique
            perspective, surfacing what you need to <br /> decide with
            conviction.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {/* Market Compass */}
          <AccordionItem
            value="market-compass"
            className="overflow-hidden rounded-lg border border-primary/10 bg-muted/10"
          >
            <AccordionTrigger className="px-6 py-4 transition-colors hover:bg-muted/15">
              <div className="flex w-full items-center gap-3 text-left">
                <div className="flex-1">
                  <p className="font-semibold">The Market Compass</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Real-time market intelligence and trend detection
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">
                    The Problem It Solves
                  </p>
                  <p className="text-sm text-muted-foreground">
                    You have conviction about a market opportunity. But what if
                    the trend is already peaking? What if a shift is happening
                    that makes your strategy obsolete? What blindspots are you
                    missing?
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">
                    What It Actually Does
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Scans global trends, industry disruption signals, emerging
                    opportunities, and market sentiment in real-time. Analyzes
                    competitive positioning shifts, customer migration patterns,
                    and technology adoption curves. Identifies the inflection
                    points happening right now, not last quarter.
                  </p>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-muted/40 bg-muted/30 p-4">
                    <p className="mb-2 font-semibold">Key Capabilities</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Trend velocity analysis</li>
                      <li>• Market timing signals</li>
                      <li>• Competitive disruption alerts</li>
                      <li>• Emerging opportunity mapping</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-muted/40 bg-muted/30 p-4">
                    <p className="mb-2 font-semibold">The Result</p>
                    <p className="text-sm text-muted-foreground">
                      Strategy rooted in what's actually happening. Conviction
                      based on real market signals, not assumptions. Move ahead
                      of competitors, not behind them.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="mb-2 font-semibold text-primary">
                    How AI and Human Collaborate
                  </p>
                  <p className="text-sm text-muted-foreground">
                    AI surfaces trends and patterns at scale. You synthesize
                    what matters for your context. AI scans global signals 24/7.
                    You make the strategic call about when and how to act.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Financial Guardian */}
          <AccordionItem
            value="financial-guardian"
            className="overflow-hidden rounded-lg border border-primary/10 bg-muted/10"
          >
            <AccordionTrigger className="px-6 py-4 transition-colors hover:bg-muted/15">
              <div className="flex w-full items-center gap-3 text-left">
                <div className="flex-1">
                  <p className="font-semibold">The Financial Guardian</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Bulletproof financial clarity and scenario modeling
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">
                    The Problem It Solves
                  </p>
                  <p className="text-sm text-muted-foreground">
                    You feel this investment makes sense. Your gut says go. But
                    can you defend it? What if board challenges your
                    assumptions? What if market conditions shift? Do your
                    numbers actually hold up under scrutiny?
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">
                    What It Actually Does
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Models complex financial scenarios with precision. Runs
                    stress tests on your assumptions, best case, worst case, and
                    realistic scenarios. Calculates ROI, NPV, payback periods,
                    and financial impact across multiple dimensions. Identifies
                    hidden risks and sensitivity points before they become
                    problems.
                  </p>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-muted/40 bg-muted/30 p-4">
                    <p className="mb-2 font-semibold">Key Capabilities</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Multi-scenario modeling</li>
                      <li>• Sensitivity analysis</li>
                      <li>• Risk quantification</li>
                      <li>• Financial impact forecasting</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-muted/40 bg-muted/30 p-4">
                    <p className="mb-2 font-semibold">The Result</p>
                    <p className="text-sm text-muted-foreground">
                      Walk into the boardroom with defensible numbers. No
                      hand-waving. No "trust me." Just rigorous financial
                      clarity that withstands pressure.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="mb-2 font-semibold text-primary">
                    How AI and Human Collaborate
                  </p>
                  <p className="text-sm text-muted-foreground">
                    AI runs infinite scenarios and stress tests instantly. You
                    interpret which risks matter and what trade-offs make sense.
                    AI surfaces financial blind spots. You own the investment
                    thesis and defend it.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Strategy Analyst */}
          <AccordionItem
            value="strategy-analyst"
            className="overflow-hidden rounded-lg border border-primary/10 bg-muted/10"
          >
            <AccordionTrigger className="px-6 py-4 transition-colors hover:bg-muted/15">
              <div className="flex w-full items-center gap-3 text-left">
                <div className="flex-1">
                  <p className="font-semibold">The Strategy Analyst</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Competitive intelligence and market blind spot detection
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">
                    The Problem It Solves
                  </p>
                  <p className="text-sm text-muted-foreground">
                    You're executing your strategy. But what if your competitor
                    just made a move that changes everything? What if customer
                    sentiment is shifting and you don't see it coming? What
                    blind spots could sink your strategy?
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">
                    What It Actually Does
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Tracks competitor activity in real-time. Analyzes customer
                    sentiment across thousands of sources. Identifies market
                    blind spots before they become existential threats. Maps the
                    entire competitive landscape, positioning, capabilities,
                    weaknesses, strategic moves. Surfaces what your rivals are
                    doing while you're focused on execution.
                  </p>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-muted/40 bg-muted/30 p-4">
                    <p className="mb-2 font-semibold">Key Capabilities</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Competitive move tracking</li>
                      <li>• Sentiment analysis</li>
                      <li>• Blind spot detection</li>
                      <li>• Strategic positioning mapping</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-muted/40 bg-muted/30 p-4">
                    <p className="mb-2 font-semibold">The Result</p>
                    <p className="text-sm text-muted-foreground">
                      Know your competitive landscape better than your rivals
                      know theirs. Threats become visible before they
                      materialize. Opportunities are clear when they emerge.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="mb-2 font-semibold text-primary">
                    How AI and Human Collaborate
                  </p>
                  <p className="text-sm text-muted-foreground">
                    AI monitors thousands of signals across competitors and
                    markets continuously. You evaluate strategic implications
                    and decide what changes your approach. AI detects patterns
                    at scale. You prioritize which threats and opportunities
                    matter most to your strategy.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* People Advisor */}
          <AccordionItem
            value="people-advisor"
            className="overflow-hidden rounded-lg border border-primary/10 bg-muted/10"
          >
            <AccordionTrigger className="px-6 py-4 transition-colors hover:bg-muted/15">
              <div className="flex w-full items-center gap-3 text-left">
                <div className="flex-1">
                  <p className="font-semibold">The People Advisor</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Organizational alignment and change management
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">
                    The Problem It Solves
                  </p>
                  <p className="text-sm text-muted-foreground">
                    You've made a brilliant strategic decision. But when you
                    communicate it to your team, something gets lost.
                    Misalignment emerges. People nod but don't own it. The
                    strategy dies in translation. Execution becomes friction.
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">
                    What It Actually Does
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Translates your vision into communication that your team
                    trusts and executes. Generates tailored communication
                    blueprints for different audiences. Builds alignment
                    frameworks that create shared understanding. Provides change
                    management guidance so strategy doesn't just get
                    announced—it gets owned.
                  </p>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-muted/40 bg-muted/30 p-4">
                    <p className="mb-2 font-semibold">Key Capabilities</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Communication blueprints</li>
                      <li>• Alignment framework building</li>
                      <li>• Change management planning</li>
                      <li>• Stakeholder narrative crafting</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-muted/40 bg-muted/30 p-4">
                    <p className="mb-2 font-semibold">The Result</p>
                    <p className="text-sm text-muted-foreground">
                      Your team doesn't just understand your strategy. They're
                      aligned with it. They execute it. They own it completely.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="mb-2 font-semibold text-primary">
                    How AI and Human Collaborate
                  </p>
                  <p className="text-sm text-muted-foreground">
                    AI crafts multiple communication approaches for different
                    audiences. You choose which resonates with your team's
                    culture. AI identifies potential misalignments. You navigate
                    relationships and ensure adoption. AI generates frameworks.
                    You drive the conversations.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Action Architect */}
          <AccordionItem
            value="action-architect"
            className="overflow-hidden rounded-lg border border-primary/10 bg-muted/10"
          >
            <AccordionTrigger className="px-6 py-4 transition-colors hover:bg-muted/15">
              <div className="flex w-full items-center gap-3 text-left">
                <div className="flex-1">
                  <p className="font-semibold">The Action Architect</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Strategy execution and project orchestration
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">
                    The Problem It Solves
                  </p>
                  <p className="text-sm text-muted-foreground">
                    You have clarity on what to do. Strategy is solid. But
                    execution is where great strategies go to die. The path from
                    vision to action is murky. Resources are undefined. Timeline
                    is vague. Nothing moves. Momentum dies in complexity.
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">
                    What It Actually Does
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Converts strategy into detailed execution plans in hours,
                    not weeks. Builds project roadmaps with clear phases and
                    dependencies. Calculates resource requirements and
                    timelines. Creates milestone tracking and identifies
                    bottlenecks before they slow you down. Turns "what to do"
                    into "exactly how to do it."
                  </p>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-muted/40 bg-muted/30 p-4">
                    <p className="mb-2 font-semibold">Key Capabilities</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Roadmap generation</li>
                      <li>• Resource calculation</li>
                      <li>• Milestone tracking setup</li>
                      <li>• Bottleneck identification</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-muted/40 bg-muted/30 p-4">
                    <p className="mb-2 font-semibold">The Result</p>
                    <p className="text-sm text-muted-foreground">
                      Transition from thinking to doing without losing momentum.
                      Your vision becomes reality. Execution starts immediately
                      with clarity and confidence.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="mb-2 font-semibold text-primary">
                    How AI and Human Collaborate
                  </p>
                  <p className="text-sm text-muted-foreground">
                    AI generates detailed execution plans and identifies
                    dependencies instantly. You adjust based on reality,
                    constraints, and priorities you understand. AI handles
                    complexity and scenario modeling. You make judgment calls
                    about what's feasible and what matters most.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* The Process - Elegant Minimalist Flow */}
      <section className="space-y-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-uppercase">Your Journey</p>
            <h2>The Process</h2>
          </div>
          <p className="text-large">
            Intelligent routing. Integrated analysis. Your command. From
            question to certainty in one integrated flow.
          </p>
        </div>

        {/* Desktop Flow - Sophisticated Color Gradient */}
        <div className="hidden lg:block">
          <div className="space-y-6">
            {/* Step 1-3 */}
            <div className="flex items-center justify-between gap-6">
              {/* Input */}
              <div className="flex-1">
                <div className="space-y-3">
                  <p className="text-uppercase">Input</p>
                  <div className="relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-transparent p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/5 opacity-0" />
                    <div className="relative">
                      <p className="font-semibold text-indigo-900 dark:text-indigo-100">
                        Your Question
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Frame your strategic challenge
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle Connector */}
              <div className="mt-10 flex items-center">
                <div className="h-px w-8 bg-gradient-to-r from-indigo-500/30 to-transparent" />
                <div className="text-xs font-semibold text-indigo-500/50">
                  →
                </div>
                <div className="h-px w-8 bg-gradient-to-l from-cyan-500/30 to-transparent" />
              </div>

              {/* Processing */}
              <div className="flex-1">
                <div className="space-y-3">
                  <p className="text-uppercase">Processing</p>
                  <div className="relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent p-6">
                    <div className="relative">
                      <p className="font-semibold text-cyan-900 dark:text-cyan-100">
                        Chief of Staff Routes
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Determines which agents activate
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle Connector */}
              <div className="mt-10 flex items-center">
                <div className="h-px w-8 bg-gradient-to-r from-cyan-500/30 to-transparent" />
                <div className="text-xs font-semibold text-cyan-500/50">→</div>
                <div className="h-px w-8 bg-gradient-to-l from-violet-500/30 to-transparent" />
              </div>

              {/* Analysis */}
              <div className="flex-1">
                <div className="space-y-3">
                  <p className="text-uppercase">Analysis</p>
                  <div className="relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-br from-violet-500/10 via-violet-500/5 to-transparent p-6">
                    <div className="relative">
                      <p className="font-semibold text-violet-900 dark:text-violet-100">
                        Insights Emerge
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        5 perspectives, multiple dimensions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent px-4 py-0">
              <div className="border-t border-muted/40" />
            </div>

            {/* Step 4-6 */}
            <div className="flex items-center justify-between gap-6">
              {/* Synthesis */}
              <div className="flex-1">
                <div className="space-y-3">
                  <p className="text-uppercase">Synthesis</p>
                  <div className="relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-br from-rose-500/10 via-rose-500/5 to-transparent p-6">
                    <div className="relative">
                      <p className="font-semibold text-rose-900 dark:text-rose-100">
                        Conflicts Surface
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Different angles point to tensions worth exploring
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle Connector */}
              <div className="mt-10 flex items-center">
                <div className="h-px w-8 bg-gradient-to-r from-rose-500/30 to-transparent" />
                <div className="text-xs font-semibold text-rose-500/50">→</div>
                <div className="h-px w-8 bg-gradient-to-l from-amber-500/30 to-transparent" />
              </div>

              {/* Integration */}
              <div className="flex-1">
                <div className="space-y-3">
                  <p className="text-uppercase">Integration</p>
                  <div className="relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent p-6">
                    <div className="relative">
                      <p className="font-semibold text-amber-900 dark:text-amber-100">
                        You Evaluate
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Which insights matter most for your context
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle Connector */}
              <div className="mt-10 flex items-center">
                <div className="h-px w-8 bg-gradient-to-r from-amber-500/30 to-transparent" />
                <div className="text-xs font-semibold text-amber-500/50">→</div>
                <div className="h-px w-8 bg-gradient-to-l from-emerald-500/30 to-transparent" />
              </div>

              {/* Outcome */}
              <div className="flex-1">
                <div className="space-y-3">
                  <p className="text-uppercase">Outcome</p>
                  <div className="relative overflow-hidden rounded-lg border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 via-emerald-500/8 to-transparent p-6 shadow-lg shadow-emerald-500/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 opacity-50" />
                    <div className="relative">
                      <p className="font-semibold text-emerald-900 dark:text-emerald-100">
                        You Decide
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Fully informed. Your authority. Your command.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet/Mobile - Vertical Flow */}
        <div className="lg:hidden">
          <div className="space-y-4">
            {/* Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-transparent p-5">
                <p className="text-uppercase">Input</p>
                <p className="mt-2 font-semibold text-indigo-900 dark:text-indigo-100">
                  Your Question
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Frame your strategic challenge
                </p>
              </div>
              <div className="flex justify-center py-2">
                <div className="h-6 w-px bg-gradient-to-b from-indigo-500/30 to-transparent" />
              </div>
            </motion.div>

            {/* Processing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent p-5">
                <p className="text-uppercase">Processing</p>
                <p className="mt-2 font-semibold text-cyan-900 dark:text-cyan-100">
                  Chief of Staff Routes
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Determines which agents activate
                </p>
              </div>
              <div className="flex justify-center py-2">
                <div className="h-6 w-px bg-gradient-to-b from-cyan-500/30 to-transparent" />
              </div>
            </motion.div>

            {/* Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-br from-violet-500/10 via-violet-500/5 to-transparent p-5">
                <p className="text-uppercase">Analysis</p>
                <p className="mt-2 font-semibold text-violet-900 dark:text-violet-100">
                  Insights Emerge
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  5 perspectives, multiple dimensions
                </p>
              </div>
              <div className="flex justify-center py-2">
                <div className="h-6 w-px bg-gradient-to-b from-violet-500/30 to-transparent" />
              </div>
            </motion.div>

            {/* Synthesis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-br from-rose-500/10 via-rose-500/5 to-transparent p-5">
                <p className="text-uppercase">Synthesis</p>
                <p className="mt-2 font-semibold text-rose-900 dark:text-rose-100">
                  Conflicts Surface
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Different angles point to tensions worth exploring
                </p>
              </div>
              <div className="flex justify-center py-2">
                <div className="h-6 w-px bg-gradient-to-b from-rose-500/30 to-transparent" />
              </div>
            </motion.div>

            {/* Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent p-5">
                <p className="text-uppercase">Integration</p>
                <p className="mt-2 font-semibold text-amber-900 dark:text-amber-100">
                  You Evaluate
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Which insights matter most for your context
                </p>
              </div>
              <div className="flex justify-center py-2">
                <div className="h-6 w-px bg-gradient-to-b from-amber-500/30 to-transparent" />
              </div>
            </motion.div>

            {/* Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-lg border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 via-emerald-500/8 to-transparent p-5 shadow-lg shadow-emerald-500/10">
                <p className="text-uppercase">Outcome</p>
                <p className="mt-2 font-semibold text-emerald-900 dark:text-emerald-100">
                  You Decide
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fully informed. Your authority. Your command.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Summary Statement */}
        <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-muted/90 bg-muted/60 p-8 text-center">
          <p className="text">
            You don't delegate your thinking. You amplify it. Every agent is
            designed to stress-test your judgment, surface blind spots, and
            crystallize conviction. Not replace your command.
          </p>
        </div>
      </section>

      {/* What You Get - Elegant Comparison */}
      <motion.section
        className="space-y-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="space-y-2">
            <p className="text-uppercase">Your Outcomes</p>
            <h2>What You Get</h2>
          </div>
          <p className="text-large">
            The tangible outcomes of decisive intelligence. Speed and certainty
            without dependency.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* What You Avoid */}
          <div className="space-y-4">
            <h3>What You Avoid</h3>
            <div className="space-y-3">
              {[
                "Incomplete information paralysis",
                "Anxiety from blind spots",
                "Erosion of confidence",
                "Strategies that never execute",
                "Tool dependency",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-lg border border-transparent bg-gradient-to-br from-slate-500/8 to-transparent p-4"
                >
                  <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What You Gain */}
          <div className="space-y-4">
            <h3>What You Gain</h3>
            <div className="space-y-3">
              {[
                "Certainty grounded in analysis",
                "Validated judgment",
                "Speed + precision",
                "Authority from thinking",
                "Independent capability",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-lg border border-transparent bg-gradient-to-br from-amber-500/8 to-transparent p-4"
                >
                  <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Who This Is For & Is Not - Elegant Accordion */}
      <motion.section
        className="space-y-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="space-y-2">
            <p className="text-uppercase">Is This Right?</p>
            <h2>Is This For You?</h2>
          </div>
          <p className="text-large">
            Designed for leaders who make strategic decisions and want to do it
            faster with more conviction.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Who This Is For */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3>Perfect Fit</h3>
              <p className="text">
                You're making strategic decisions under time pressure
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  title: "Entrepreneurs",
                  desc: "Validating market expansion or funding strategy",
                },
                {
                  title: "Financial Decision-Makers",
                  desc: "Modeling major scenarios for board presentations",
                },
                {
                  title: "Initiative Leaders",
                  desc: "Launching products, rebranding, entering markets",
                },
                {
                  title: "Strategy Executives",
                  desc: "Pivoting strategy with conviction before announcing",
                },
                {
                  title: "Product Leaders",
                  desc: "Roadmap decisions with market validation",
                },
              ].map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`for-${idx}`}
                  className="overflow-hidden rounded-lg border border-transparent bg-gradient-to-br from-amber-500/8 to-transparent"
                >
                  <AccordionTrigger className="p-4 text-base font-medium transition-colors hover:bg-amber-500/5">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-4 text-sm text-muted-foreground">
                    {item.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* What This Is Not */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3>Not a Fit</h3>
              <p className="text">When AI-Augmented won't serve you well</p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  title: "Learning Platforms",
                  desc: "Want to become an expert? Get a course or mentor.",
                },
                {
                  title: "Crisis Response",
                  desc: "In emergency? You need intuition and speed first.",
                },
                {
                  title: "Operational Decisions",
                  desc: "Daily tactical execution (it's for 2-12 week horizons)",
                },
                {
                  title: "No Domain Knowledge",
                  desc: "Entering completely new industry? Use as stress-test, not foundation.",
                },
                {
                  title: "Pre-Made Decisions",
                  desc: "Looking for validation only? Be ready to be challenged.",
                },
              ].map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`not-${idx}`}
                  className="overflow-hidden rounded-lg border border-transparent bg-gradient-to-br from-slate-500/8 to-transparent"
                >
                  <AccordionTrigger className="p-4 text-base font-medium transition-colors hover:bg-slate-500/5">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-4 text-sm text-muted-foreground">
                    {item.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </motion.section>

      {/* DIY vs AI-Augmented - Unified Comparison */}
      <motion.section
        className="space-y-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="space-y-2">
            <p className="text-uppercase">The Advantage</p>
            <h2>Why AI-Augmented Wins</h2>
          </div>
          <p className="text-large">
            The strategic advantage in every dimension. Faster decisions.
            Sharper thinking. Complete authority.
          </p>
        </motion.div>

        {/* Comparison Table - Elegant */}
        <div className="space-y-4">
          {[
            {
              dimension: "Speed",
              diy: "Weeks to months",
              ours: "Hours to minutes",
              why: "No hiring, onboarding, or coordination delays",
            },
            {
              dimension: "Cost",
              diy: "$150-300K annually",
              ours: "Fraction of traditional spend",
              why: "No salaries, benefits, or opportunity costs",
            },
            {
              dimension: "Perspective",
              diy: "Single consultant bias",
              ours: "5 integrated viewpoints",
              why: "Market, financial, competitive, people, execution",
            },
            {
              dimension: "Your Role",
              diy: "Passive recipient",
              ours: "Active commander",
              why: "You decide, fully informed and in control",
            },
            {
              dimension: "Dependency",
              diy: "High - you're dependent on them",
              ours: "Low - you own the methodology",
              why: "Sharper thinking, stronger authority over time",
            },
            {
              dimension: "Cognitive Impact",
              diy: "Outsources your thinking",
              ours: "Amplifies your thinking",
              why: "Stress-tests judgment, surfaces blind spots",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="grid gap-4 rounded-lg border border-muted/30 bg-muted/10 p-6 md:grid-cols-2 lg:grid-cols-4"
            >
              <div>
                <p className="text-uppercase">{item.dimension}</p>
              </div>
              <div className="space-y-1">
                <p className="text-uppercase">DIY Approach</p>
                <p className="text-sm text-muted-foreground line-through">
                  {item.diy}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-uppercase">AI-Augmented</p>
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  {item.ours}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-uppercase">Why It Matters</p>
                <p className="text-sm text-muted-foreground">{item.why}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent p-8 text-center shadow-lg shadow-emerald-500/10">
          <p className="font-semibold text-emerald-900 dark:text-emerald-100">
            The Bottom Line
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            You get decisions in hours instead of weeks, at a fraction of the
            cost, without surrendering your thinking. Your authority expands
            instead of eroding.
          </p>
        </div>
      </motion.section>

      {/* CTA - Compact */}
      {/* CTA Section */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ready to Decide Today?
        </motion.h2>
        <motion.p
          className="text-large"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          You have a strategic decision to make. Your private executive team is
          ready. Get started in minutes.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" className="gradient-button">
            <Link href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
              Secure Your Invitation
            </Link>
          </Button>
        </motion.div>
      </motion.section>
    </div>
  );
}
