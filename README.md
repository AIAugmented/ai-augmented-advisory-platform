# AI-Augmented Advisory Platform

A premium multi-agent executive advisory system designed to be a personal "mini McKinsey" for C-suite professionals making high-stakes decisions.

## 🎯 Overview

AI-Augmented provides personalized strategic guidance through 5 specialized AI advisors orchestrated by a Chief of Staff agent. The platform learns from user interactions, identifies decision patterns and blindspots, and delivers insights that make users feel heard, challenged, and empowered.

## ✨ Key Features

### Multi-Agent Advisory System
- **Market Compass**: Market intelligence, competitive analysis, and timing signals
- **Financial Guardian**: Financial modeling, runway analysis, and unit economics
- **Strategy Analyst**: Strategic frameworks, assumption testing, and blindspot detection
- **People Advisor**: Organizational dynamics, team capability, and cultural fit
- **Execution Architect**: Timeline estimation, resource planning, and execution reality
- **Chief of Staff (Orchestrator)**: Synthesizes all perspectives, identifies tensions, and reframes decisions

### Visual Decision Canvas
- Interactive mind map of decisions and insights
- AI-powered semantic relationship detection
- Auto-layout with domain clustering
- Export to reports and presentations

### Intelligent Memory System
- 5-layer memory architecture (Identity, Interaction, Blindspot, Outcome, Growth)
- Learns user expertise, decision style, and thinking patterns
- Tracks decision outcomes and improves over time
- Personalized advisor responses based on user profile

### Executive Reporting
- AI-generated professional reports
- Customizable insights and metrics
- Visual data representations
- PDF/Email/WhatsApp export

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Next.js 14, React, Tailwind CSS, React Flow
- **Backend**: Django REST Framework, Python 3.11+
- **AI Orchestration**: LangGraph
- **LLMs**: Claude (Sonnet/Opus), Gemini 2.0 Pro, GPT-4
- **Database**: Firestore (primary), Pinecone (vector search)
- **Deployment**: Google Cloud Platform

### System Design
```
User Question
    ↓
Behavioral Context Analysis (emotion, expertise, urgency)
    ↓
Question Classification & Routing
    ↓
Parallel Agent Execution (5 specialized agents)
    ↓
Orchestrator Synthesis (tensions, constraints, reframing)
    ↓
Quality Gates Validation (9-point system)
    ↓
Streaming Response with Confidence Marking
    ↓
Memory Update & Pattern Learning
```

## 🚀 Getting Started

### Prerequisites
- Python 3.11+
- Node.js 18+
- Firebase account
- API keys for: Anthropic, Google AI, OpenAI

## 🔒 Security & Privacy

- JWT-based authentication with secure token management
- User data isolation and privacy-first design
- API rate limiting and request validation
- Secure credential storage with environment variables
- HTTPS enforcement in production

## 📊 Quality Gates

Every advisor response passes through a 9-point quality validation:
1. Understands context
2. Addresses actual question
3. Provides evidence
4. Shows clear reasoning
5. Identifies assumptions
6. Acknowledges uncertainty
7. Empowers user decision
8. Meets response time targets
9. Achieves user satisfaction

## 🎓 Core Principles

**Ultimate User Outcomes:**
- ✅ Heard: "You understand my situation"
- ✅ Challenged: "You pushed my thinking"
- ✅ Personalized: "You remember me"
- ✅ Validated: "My instincts were right"
- ✅ Smarter: "I see what I was missing"
- ✅ Empowered: "I know what to decide"
- ✅ Less Imposter Syndrome: "I am not fake"

## 🤝 Contributing

This is a private commercial project. For collaboration inquiries, please contact the project owner.

## 📄 License

Proprietary - All rights reserved

## 👥 Team

- **Product Owner**: Celeste
- **Lead Engineer**: Destiny

## 📧 Contact

For inquiries: celeste.fcp@gmail.com

---

Built with ❤️ for strategic thinkers who want a thinking partner, not just an AI assistant.
