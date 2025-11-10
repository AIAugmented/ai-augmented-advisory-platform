"use client";

import { Suspense, useEffect, useState } from "react";

import { motion } from "framer-motion";
import { ArrowDown, Ban, CircleQuestionMark, Zap } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import OrbitalAnimation from "@/components/animations/OrbitalAnimation";
import { Button } from "@/components/ui/button";

import { WAITLIST_URL } from "@/constants";

// Dynamically import ThreeJsOrbitAnimation with lazy loading
const ThreeJsOrbitAnimation = dynamic(
  () => import("@/components/animations/ThreeJsOrbitAnimation"),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/10" />
    ),
  },
);

// Simple loading placeholder component
function HeroLoadingPlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-muted/10">
      <div className="space-y-4 text-center">
        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
        <p className="text-sm text-muted-foreground">Loading animation...</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    // Delay loading the heavy animation by 1 second to prioritize content
    const timer = setTimeout(() => {
      if (!mediaQuery.matches) {
        setIsHeroVisible(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Section with Three.js Animation */}
      <section className="relative h-[calc(100vh-var(--header-height))] w-full overflow-hidden">
        {/* Three.js Animation Background - Lazy loaded */}
        {isHeroVisible && !prefersReducedMotion ? (
          <Suspense fallback={<HeroLoadingPlaceholder />}>
            <ThreeJsOrbitAnimation />
          </Suspense>
        ) : (
          <HeroLoadingPlaceholder />
        )}

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-5">
          {/* Text Layout - matching the image design */}
          <div className="flex w-full items-center justify-between gap-10 px-[15vw]">
            {/* Left Text */}
            <motion.div
              className="w-fit text-center"
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -50 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-2xl font-bold tracking-widest whitespace-nowrap text-foreground md:text-4xl">
                HUMAN
              </h1>
              <h1 className="text-2xl font-bold tracking-widest whitespace-nowrap text-foreground md:text-4xl">
                COMPETENCE
              </h1>
            </motion.div>

            {/* Right Text */}
            <motion.div
              className="w-fit text-center"
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 50 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-2xl font-bold tracking-widest whitespace-nowrap text-foreground md:text-4xl">
                AI CORE
              </h1>
              <h1 className="text-2xl font-bold tracking-widest whitespace-nowrap text-foreground md:text-4xl">
                INTELLIGENCE
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container-width space-y-48 bg-gradient-to-b from-background via-background to-muted/5 py-32">
        {/* After Hero Section */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <p className="text-uppercase">The Decision Problem</p>
            <h1>Human Wisdom. AI Intelligence.</h1>
          </div>

          <p className="text-large">
            The decision partner for leaders who trust their instincts but need
            to move faster. <br /> Speed and certainty without losing authority.
          </p>
        </motion.section>

        {/* Trust Your Judgment Section */}
        <section className="space-y-6">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-uppercase">Your Challenge</p>
            <h2>The Decision You Can't Slow Down Anymore</h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-4">
                <p className="text-large">
                  You know what needs to happen. You saw it before anyone else
                  did. But you're also the one who has to defend it when it
                  doesn't work. So you gather more opinions. You pull in the
                  team. You request another analysis. You run it past your peer
                  group.
                </p>

                <p className="text-large">
                  And somewhere in that process, the window closes.
                </p>

                <p className="text-large">
                  The decision was right three weeks ago. Now it's just late.
                </p>

                <div className="border-l-4 border-primary py-4 pl-8">
                  <p className="text-lg font-semibold text-foreground/85">
                    This isn't about confidence. You have that. It's about the
                    gap between what you know and what you can prove in a room
                    full of people who are as smart as you but have different
                    incentives.
                  </p>
                </div>
              </div>

              <Button size="lg" className="gradient-button">
                <Link
                  href={WAITLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join the Waiting List
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <OrbitalAnimation />
            </motion.div>
          </div>
        </section>

        {/* Confidence Problem Section */}
        <section className="space-y-6">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-uppercase">The Cost</p>
            <h2>The Real Cost of Delay</h2>
          </motion.div>
          <motion.p
            className="text-large"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Every day you wait to move, the window shrinks. Here's what delay
            actually costs.
          </motion.p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Left column items */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Item 1 */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 [box-shadow:0_0_20px_rgba(203,213,225,0.3),_inset_0_0_15px_rgba(226,232,240,0.3)] dark:bg-slate-900 dark:[box-shadow:0_0_20px_rgba(30,41,59,0.8),_inset_0_0_15px_rgba(15,23,42,0.9)]">
                  <Ban className="size-5 text-slate-600 [text-shadow:0_0_10px_rgba(100,116,139,0.6)] dark:text-slate-400" />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-foreground">
                    Market Timing Lost
                  </p>
                  <p className="text">
                    Your competitor moves while you're aligning.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 [box-shadow:0_0_20px_rgba(203,213,225,0.3),_inset_0_0_15px_rgba(226,232,240,0.3)] dark:bg-slate-900 dark:[box-shadow:0_0_20px_rgba(30,41,59,0.8),_inset_0_0_15px_rgba(15,23,42,0.9)]">
                  <ArrowDown className="size-5 text-slate-600 [text-shadow:0_0_10px_rgba(100,116,139,0.6)] dark:text-slate-400" />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-foreground">
                    Decisiveness Questioned
                  </p>
                  <p className="text">
                    Your best people start questioning your leadership
                    conviction.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right column items */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Item 3 */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 [box-shadow:0_0_20px_rgba(203,213,225,0.3),_inset_0_0_15px_rgba(226,232,240,0.3)] dark:bg-slate-900 dark:[box-shadow:0_0_20px_rgba(30,41,59,0.8),_inset_0_0_15px_rgba(15,23,42,0.9)]">
                  <CircleQuestionMark className="size-5 text-slate-600 [text-shadow:0_0_10px_rgba(100,116,139,0.6)] dark:text-slate-400" />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-foreground">
                    Board Narrative Shifts
                  </p>
                  <p className="text">
                    From "why did you do this?" to "why didn't you sooner?"
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 [box-shadow:0_0_20px_rgba(203,213,225,0.3),_inset_0_0_15px_rgba(226,232,240,0.3)] dark:bg-slate-900 dark:[box-shadow:0_0_20px_rgba(30,41,59,0.8),_inset_0_0_15px_rgba(15,23,42,0.9)]">
                  <Zap className="size-5 text-slate-600 [text-shadow:0_0_10px_rgba(100,116,139,0.6)] dark:text-slate-400" />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-foreground">
                    Political Capital Spent
                  </p>
                  <p className="text">
                    Defending delay instead of defending your decision.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Chatbots vs Consultants Section */}
        <section className="space-y-6">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-uppercase">The Problem</p>
            <h2>The Actual Problem</h2>
          </motion.div>
          <motion.p
            className="text-large"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            You don't need smarter analysis. You need conviction that lets you
            move faster. Right now, you're alone in that gap.
          </motion.p>

          <div className="mx-auto max-w-4xl space-y-6">
            <motion.p
              className="text-large"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your team mirrors your certainty. Consultants take weeks. Data
              doesn't resolve judgment calls, it just gives you more ways to
              second-guess.
            </motion.p>

            <motion.div
              className="gradient-card space-y-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>What Changes When You Can Validate in Minutes</h3>

              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <span className="flex-shrink-0 text-lg font-bold text-slate-600 dark:text-slate-400">
                    →
                  </span>
                  <p className="text-large">
                    You move when the moment is real, not when it's already
                    passed.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 text-lg font-bold text-slate-600 dark:text-slate-400">
                    →
                  </span>
                  <span className="text-large">
                    Your team executes with the conviction you actually feel,
                    not the hedged version you present.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 text-lg font-bold text-slate-600 dark:text-slate-400">
                    →
                  </span>
                  <span className="text-large">
                    You win on timing, not just strategy.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 text-lg font-bold text-slate-600 dark:text-slate-400">
                    →
                  </span>
                  <span className="text-large">
                    The conversations shift from "We're still deciding" to "We
                    decided and we're executing."
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.p
              className="text-center text-lg font-bold text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              That's the outcome that actually matters to you and your business.
            </motion.p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="space-y-12">
          <div className="space-y-6">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-uppercase">Your Team</span>
              <h2>Here's How It Works</h2>
            </motion.div>

            {/* Main tagline */}
            <motion.p
              className="text-xl font-semibold text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Your Own Private Executive Team. On Demand.
            </motion.p>

            {/* Supporting text */}
            <motion.p
              className="text-large"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              This is the difference: We're not here to think for you. We're
              here to think with you.
            </motion.p>
          </div>

          {/* AI Chief of Staff */}
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>The AI Chief of Staff</h3>
              <p className="text-large">
                Orchestrates specialized intelligence, market data, financial
                modeling, competitive analysis, risk scenarios and presents it
                through your lens, not ours.
              </p>
            </motion.div>
            <motion.div
              className="relative h-80 rounded-lg border border-amber-300/50 bg-gradient-to-br from-amber-100/40 to-slate-100/60 shadow-lg transition-all duration-300 hover:border-amber-300/70 hover:from-amber-100/60 hover:to-slate-100/80 hover:shadow-amber-200/20 dark:border-amber-400/40 dark:from-amber-950/40 dark:to-slate-900/60 dark:hover:border-amber-400/70 dark:hover:from-amber-950/60 dark:hover:to-slate-900/80 dark:hover:shadow-amber-400/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/agent.png"
                alt="AI Agent"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                priority={false}
                className="rounded-lg object-cover"
              />
            </motion.div>
          </div>

          {/* Decision Canvas */}
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              className="relative order-2 h-80 rounded-lg border border-blue-300/50 bg-gradient-to-br from-blue-100/40 to-slate-100/60 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-blue-300/70 hover:from-blue-100/60 hover:to-slate-100/80 hover:shadow-blue-200/20 lg:order-1 dark:border-blue-400/40 dark:from-blue-950/40 dark:to-slate-900/60 dark:hover:border-blue-400/70 dark:hover:from-blue-950/60 dark:hover:to-slate-900/80 dark:hover:shadow-blue-400/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/canvas.png"
                alt="Decision Canvas"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                priority={false}
                className="rounded-lg object-cover"
              />
            </motion.div>
            <motion.div
              className="order-1 space-y-6 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-3">
                <h3>The Decision Canvas</h3>
              </div>
              <p className="text-large">
                Turns the chaos into clarity. You and the AI co-create a visual
                map of your strategy. Every critical insight is documented,
                connected, and defensible.
              </p>
              <p className="text-large">
                When you walk into that boardroom, you own the thinking because
                you actually did the thinking.
              </p>
            </motion.div>
          </div>

          {/* Executive Summary */}
          <div className="grid gap-12 pt-12 lg:grid-cols-2">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>The Executive Summary</h3>
              <p className="text-large">
                Translates your vision into a cohesive, presentable strategy.
              </p>
              <p className="text-large">
                Not generic advice. Your strategy. Ready to defend.
              </p>
            </motion.div>

            <motion.div
              className="relative h-80 rounded-lg border border-amber-300/50 bg-gradient-to-br from-amber-100/40 to-slate-100/60 shadow-lg transition-all duration-300 hover:border-amber-300/70 hover:from-amber-100/60 hover:to-slate-100/80 hover:shadow-amber-200/20 dark:border-amber-400/40 dark:from-amber-950/40 dark:to-slate-900/60 dark:hover:border-amber-400/70 dark:hover:from-amber-950/60 dark:hover:to-slate-900/80 dark:hover:shadow-amber-400/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/report.png"
                alt="Executive Summary"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                priority={false}
                className="rounded-lg object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* What Changes Section */}
        <section className="space-y-12">
          <div className="space-y-6">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-uppercase">The Transformation</p>
              <h2>Here's What Changes</h2>
            </motion.div>
            <motion.p
              className="text-large"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              The equation that transforms conviction into action.
            </motion.p>
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
                {/* Element 1 - Your Intelligence */}
                <motion.div
                  className="space-y-3 text-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-uppercase whitespace-nowrap">
                    Your Intelligence
                  </p>
                  <p className="text">Vision, Instinct, Experience</p>
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

                {/* Element 2 - AI Intelligence */}
                <motion.div
                  className="space-y-3 text-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <p className="text-uppercase whitespace-nowrap">
                    AI Intelligence
                  </p>
                  <p className="text">Data, Scenarios, Risk Modeling</p>
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

                {/* Element 3 - Strategic Outcome */}
                <motion.div
                  className="space-y-3 text-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <p className="text-uppercase whitespace-nowrap !text-amber-400/70">
                    Strategic Outcome
                  </p>
                  <p className="text font-semibold !text-foreground">
                    Conviction You Can Defend
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Transformation Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Before State */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-2">
                <p className="text-uppercase text-red-400">Without This</p>
                <h3>The Uncertainty Loop</h3>
              </div>
              <div className="space-y-4 rounded-lg border border-red-400/20 bg-red-500/5 p-6">
                <p className="text-muted-foreground italic">
                  &quot;I think this is right, but what if I&apos;m wrong?&quot;
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 text-red-400">✕</span>
                    <span>You second-guess yourself repeatedly</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 text-red-400">✕</span>
                    <span>Team mirrors your hedging</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 text-red-400">✕</span>
                    <span>Moment passes while you align</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* After State */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-2">
                <p className="text-uppercase text-green-400">With This</p>
                <h3>The Conviction Framework</h3>
              </div>
              <div className="space-y-4 rounded-lg border border-green-400/20 bg-green-500/5 p-6">
                <p className="text-muted-foreground italic">
                  &quot;I know this is right because I&apos;ve tested it against
                  these variables.&quot;
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 text-green-400">✓</span>
                    <span>You move with tested confidence</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 text-green-400">✓</span>
                    <span>Team executes with your full conviction</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 text-green-400">✓</span>
                    <span>You win on timing, not just strategy</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.p
            className="mx-auto max-w-2xl text-center leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            The anxiety doesn&apos;t disappear. It transforms into{" "}
            <span className="font-semibold text-foreground">
              productive clarity
            </span>{" "}
            the kind that lets you move decisively, own your decisions, and
            execute with full force.
          </motion.p>
        </section>

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
            Ready to Decide with Conviction?
          </motion.h2>
          <motion.p
            className="text-large"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get your strategic question answered in minutes, not weeks. Your
            private executive team is ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" className="gradient-button">
              <Link
                href={WAITLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reserve Your Spot
              </Link>
            </Button>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}
