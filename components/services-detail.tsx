"use client";

import { useState } from "react";
import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

const services = [{
    id: 1,
    title: "Strategic Discovery & Business Alignment",
    subtitle: "Validating the Opportunity and Defining Core Value",
    description: "We initiate with a deep-dive Product Discovery phase to validate market fit, technical feasibility, and business viability. This goes beyond simple requirement gathering, focusing on outcome-driven objectives and clear Success Metrics (OKRs/KPIs). We identify the Minimal Viable Product (MVP) scope to accelerate time-to-market.",
    duration: "1-2 weeks (Iterative)",
    icon: (<svg className="fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
        <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
    </svg>),
    deliverables: ["Business Case & Value Proposition Document", "Target Audience Personas & Journey Maps", "High-Level System Context Diagram", "Technical Feasibility Assessment & Constraint Identification", "Initial Project Scope (MVP Definition) & Success Metrics (KPIs/OKRs)"],
    benefits: ["Validated product-market fit, minimizing rework risk", "Clear, measurable business outcomes and goals", "Stakeholder alignment via detailed value mapping", "Informed technology decisions based on feasibility"]
}, {
    id: 2,
    title: "Advanced Requirements Engineering",
    subtitle: "From Epics to Testable User Stories",
    description: "We transition from high-level vision to detailed, unambiguous specifications. Utilizing workshops like Event Storming or Specification by Example, we capture all Functional, Non-Functional, and Compliance Requirements. Requirements are documented as structured User Stories with clear Acceptance Criteria, feeding directly into the backlog.",
    duration: "2-3 weeks (Per major release cycle)",
    icon: (<svg className="fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
        <path
            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
    </svg>),
    deliverables: ["Comprehensive Software Requirements Specification (SRS)", "Prioritized Backlog with Epics and User Stories", "Detailed Acceptance Criteria (Gherkin format, if applicable)", "Non-Functional Requirements (Performance, Security, Scalability)", "System Interface Specifications"],
    benefits: ["Complete clarity on every feature before development", "Traceability matrix linking requirements to business goals", "Reduced ambiguity, minimizing development cycles and bugs", "Early identification of integration and non-functional risks"]
}, {
    id: 3,
    title: "Technical Planning & Risk Mitigation",
    subtitle: "Creating the Execution and Mitigation Strategy",
    description: "This phase involves sophisticated project management planning and risk-driven prioritization. We choose the optimal Agile/Hybrid methodology, define the CI/CD pipeline strategy, and perform a deep Risk Analysis. Deliverables include the final project roadmap, detailed resource allocation, and a structured risk response plan.",
    duration: "1-2 weeks (Continuous Refinement)",
    icon: (<svg className="fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
        <path
            d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
    </svg>),
    deliverables: ["Detailed Project Roadmap (Phases, Sprints, Milestones)", "DevOps and CI/CD Strategy Document", "Comprehensive Risk Register with Mitigation/Contingency Plans", "Finalized Budget, Resource Matrix, and Cost Breakdown Structure (CBS)", "Technology Stack and Tooling Decision Report"],
    benefits: ["Predictable delivery timeline and cost management", "Proactive identification and mitigation of major project risks", "Efficient team structure and clear role accountability", "Governance model for scope, change, and quality control"]
}, {
    id: 4,
    title: "System & Data Architecture Design",
    subtitle: "Designing Scalable, Secure, and Resilient Systems",
    description: "Our certified architects design a modern, decoupled system using principles like Microservices or Domain-Driven Design (DDD). We create multi-layered security architecture, model data with high performance in mind, and select the optimal cloud infrastructure. This results in the complete System Design Document (SDD).",
    duration: "2-4 weeks",
    icon: (<svg className="fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
    </svg>),
    deliverables: ["System Design Document (SDD) covering High-Level & Low-Level Design", "Detailed API Specifications (e.g., OpenAPI/Swagger)", "Cloud Infrastructure Design (IaaS/PaaS) and DevOps Blueprints", "Data Model (ER Diagrams, Database Schemas) and Access Strategy", "UI/UX Prototypes and Design System documentation"],
    benefits: ["Future-proof, highly scalable, and maintainable architecture", "Optimized data performance and integrity", "Built-in security and compliance from the ground up (Security by Design)", "Faster development due to clear, modular technical guidance"]
}, {
    id: 5,
    title: "Agile Development & CI/CD Implementation",
    subtitle: "Delivering Working Software in Incremental Sprints",
    description: "We employ eXtreme Programming (XP) and Scrum practices, including Test-Driven Development (TDD) and Pair Programming, to write clean, secure, and highly efficient code. Code is continuously integrated, automatically tested, and deployed to staging environments via a robust CI/CD Pipeline with feature flagging capabilities.",
    duration: "8-16 weeks (Ongoing Sprints)",
    icon: (<svg className="fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
        <path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
    </svg>),
    deliverables: ["Working Software Increments (per Sprint)", "High-Quality, Peer-Reviewed Source Code", "Automated Unit and Integration Tests", "Functional CI/CD Pipeline and Automation Scripts", "Release Notes and Sprint Review/Demo Recordings"],
    benefits: ["High-quality, resilient code with minimal technical debt", "Rapid feedback cycles and full transparency via demos", "Increased code coverage and stability through TDD", "Continuous delivery readiness at the end of every sprint"]
}, {
    id: 6,
    title: "Integrated Quality Assurance & Validation",
    subtitle: "Verification, Validation, and Performance Benchmarking",
    description: "Quality is embedded throughout the SDLC (Shift-Left Testing). We conduct comprehensive testing: Automated Regression, Load/Performance Testing, and critical Penetration Testing (Pen-Test) by security experts. The goal is a signed-off User Acceptance Testing (UAT) and a system validated against all non-functional requirements.",
    duration: "3-4 weeks (Concurrent with Development)",
    icon: (<svg className="fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
        <path
            d="M19.79 15.41C20.74 13.24 20.74 10.75 19.79 8.59l-4.25 4.25 2.46 2.57zM13 7.5l3.53-3.53c-2.16-.95-4.65-.95-6.81 0L13 7.5zm-2 2L7.5 13l3.5 3.5 3.5-3.5L11 9.5zm-1.5-2L4.21 4.21C3.26 6.38 3.26 8.87 4.21 11.03l4.25-4.25-1.96-1.78zM7.5 13 4.21 19.79c2.16.95 4.65.95 6.81 0L7.5 13z"/>
    </svg>),
    deliverables: ["Full Test Strategy and Traceability Matrix", "Detailed Performance Benchmark Reports (Load/Stress Testing)", "Final Security Penetration Test Report and Remediation Plan", "Signed-off User Acceptance Testing (UAT) documentation", "Defect Density and Code Quality Metrics"],
    benefits: ["Guaranteed performance under peak load conditions", "Verified security against common and complex vulnerabilities", "Formal client sign-off ensuring satisfaction and compliance", "Significantly lower post-release defect rate"]
}, {
    id: 7,
    title: "Automated Deployment & Production Handover",
    subtitle: "Zero-Downtime Release and Observability Setup",
    description: "Leveraging Infrastructure as Code (IaC) and DevOps automation, we execute a reliable, zero-downtime deployment. We implement a robust Observability Stack (logging, metrics, tracing) for real-time monitoring. The phase culminates in the final transition of operational responsibilities to your team or our managed services.",
    duration: "1-2 weeks (Pre-launch activities & execution)",
    icon: (<svg className="fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
        <path
            d="M2.81 14.12 5.64 11.3 8.46 14.12 7.05 15.53 6.05 14.53 6.05 21 5.05 21 5.05 14.53 4.05 15.53 2.81 14.12ZM15.54 14.12 12.71 11.3 9.89 14.12 11.3 15.53 12.3 14.53 12.3 21 13.3 21 13.3 14.53 14.3 15.53 15.54 14.12ZM12 2 7 7 8.41 8.41 11 5.83 11 13 13 13 13 5.83 15.59 8.41 17 7 12 2Z"/>
    </svg>),
    deliverables: ["Infrastructure as Code (IaC) Scripts (Terraform/CloudFormation)", "Automated Observability Stack (Prometheus, Grafana, ELK/Cloud-specific tools)", "Comprehensive Deployment Runbook (including rollback procedures)", "Successful Data Migration and Integrity Verification Report", "Formal Production Handover Documentation"],
    benefits: ["Flawless, repeatable, and automated deployment process", "Real-time insight into system health and performance (Observability)", "Minimized risk of data loss or service disruption during go-live", "Clear documentation for immediate post-launch support"]
}, {
    id: 8,
    title: "Continuous Operations & L3 Support",
    subtitle: "Monitoring, Incident Response, and Optimization",
    description: "Our partnership continues with proactive monitoring of application performance, security, and infrastructure. We provide dedicated Level 3 (L3) support for complex issues, managed incident response, and regular application patching. This ensures peak operational health and maximum system availability.",
    duration: "Ongoing",
    icon: (<svg className="fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
        <path
            d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
    </svg>),
    deliverables: ["24/7/365 System Monitoring and Alerting", "Formal Incident Management and Resolution Reports (SLAs)", "Regular Security Patching and Vulnerability Management", "Application Performance Monitoring (APM) Insights", "Quarterly Technical Debt Assessment Reports"],
    benefits: ["Guaranteed system availability and quick incident resolution (SLA-driven)", "Proactive security posture and compliance maintenance", "Deep operational insights for future planning", "Focus on preventing technical debt and maximizing ROI"]
}, {
    id: 9,
    title: "Product Evolution & Value Iteration",
    subtitle: "Data-Driven Feature Enhancement and Strategic Growth",
    description: "The final, and continuous, phase is focused on maximizing business value. We analyze real-world usage data, perform A/B Testing, and conduct regular Product Retrospectives with stakeholders. This leads to a data-driven roadmap for new features, strategic optimizations, and a high-impact product evolution path.",
    duration: "Optional",
    icon: (<svg className="fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
    </svg>),
    deliverables: ["Data Analytics and User Behavior Reports", "Validated A/B Testing Results and Optimization Recommendations", "Prioritized Feature Enhancement Roadmap (Next Quarter/Year)", "Market/Competitive Landscape Analysis Updates", "Quarterly Business Value Review and Planning Sessions"],
    benefits: ["Continuous business growth driven by real user data", "High user adoption and satisfaction from targeted improvements", "The product remains competitive and technologically modern", "Direct link between new features and increased ROI/Value"]
}];

export default function ServicesDetail() {
    const [activeService, setActiveService] = useState(0);

    return (<section className="relative">
        {/* Background illustrations */}
        <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2"
            aria-hidden="true"
        >
            <Image
                className="max-w-none"
                src={BlurredShapeGray}
                width={760}
                height={668}
                alt="Blurred shape"
            />
        </div>
        <div
            className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-[120%] opacity-50"
            aria-hidden="true"
        >
            <Image
                className="max-w-none"
                src={BlurredShape}
                width={760}
                height={668}
                alt="Blurred shape"
            />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div
                className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
                {/* Section header */}
                <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
                    <div
                        className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent before:to-indigo-200/50">
                            <span
                                className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                                Our Advanced Methodology
                            </span>
                    </div>
                    <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                        The Value-Driven Consultation & Software Engineering Lifecycle
                    </h2>
                    <p className="text-lg text-indigo-200/65">
                        We implement a comprehensive, proven, and Agile-first methodology, integrating modern
                        DevOps and Security-by-Design principles to ensure your project’s long-term success,
                        scalability, and performance.
                    </p>
                </div>

                {/* Services navigation */}
                <div className="mb-12 md:mb-16">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (<button
                            key={service.id}
                            onClick={() => setActiveService(index)}
                            className={`group relative rounded-2xl p-5 text-left transition-all ${activeService === index ? "bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-indigo-500),var(--color-indigo-400))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "bg-gray-800/40 hover:bg-gray-800/60"}`}
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className={`shrink-0 rounded-lg p-2 ${activeService === index ? "bg-indigo-500/10" : "bg-gray-700/50"}`}>
                                    {service.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="mb-1 flex items-center justify-between">
                                        <h3 className="font-nacelle text-base font-semibold text-gray-200">
                                            {service.title}
                                        </h3>
                                        <svg
                                            className={`ml-2 h-5 w-5 shrink-0 fill-current transition-transform ${activeService === index ? "rotate-180 text-indigo-500" : "text-gray-600"}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 12l-6-6h12z"/>
                                        </svg>
                                    </div>
                                    <p className="text-sm text-indigo-200/65">{service.subtitle}</p>
                                </div>
                            </div>
                        </button>))}
                    </div>
                </div>

                {/* Active service details */}
                <div
                    className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] md:p-8">
                    <div className="mb-6 flex items-start justify-between">
                        <div>
                            <h3 className="mb-2 font-nacelle text-2xl font-semibold text-gray-200 md:text-3xl">
                                {services[activeService].title}
                            </h3>
                            <p className="mb-4 text-lg text-indigo-200/65">
                                {services[activeService].description}
                            </p>
                            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-2">
                                <svg
                                    className="h-4 w-4 fill-indigo-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z"/>
                                </svg>
                                <span className="text-sm font-medium text-indigo-200">
                                        Duration: {services[activeService].duration}
                                    </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Deliverables */}
                        <div>
                            <h4 className="mb-4 flex items-center gap-2 font-nacelle text-lg font-semibold text-gray-200">
                                <svg
                                    className="h-5 w-5 fill-indigo-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2zM5 9l2-2 2 2 4-4 2 2-6 6-4-4z"/>
                                </svg>
                                Key Deliverables
                            </h4>
                            <ul className="space-y-3">
                                {services[activeService].deliverables.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <svg
                                            className="mt-0.5 h-5 w-5 shrink-0 fill-indigo-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                                        </svg>
                                        <span className="text-indigo-200/65"
                                              dangerouslySetInnerHTML={{__html: item}}/>
                                    </li>))}
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                            <h4 className="mb-4 flex items-center gap-2 font-nacelle text-lg font-semibold text-gray-200">
                                <svg
                                    className="h-5 w-5 fill-indigo-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z"/>
                                </svg>
                                Client Benefits
                            </h4>
                            <ul className="space-y-3">
                                {services[activeService].benefits.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <svg
                                            className="mt-0.5 h-5 w-5 shrink-0 fill-indigo-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                        </svg>
                                        <span className="text-indigo-200/65">{item}</span>
                                    </li>))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Process Timeline - CORRECTED FOR TREE LAYOUT WITH CENTERED TEXT */}
                <div className="mt-12 md:mt-16">
                    <h3 className="mb-8 text-center font-nacelle text-2xl font-semibold text-gray-200">
                        Complete Development Journey
                    </h3>
                    <div className="relative">
                        {/* Timeline line */}
                        <div
                            className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-linear-to-b from-indigo-500 via-indigo-500/50 to-transparent md:block"/>

                        <div className="space-y-12">
                            {services.map((service, index) => (<div
                                key={service.id}
                                // Reverting to the alternating layout classes
                                className={`relative flex items-center gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                            >
                                {/* Timeline dot */}
                                <div
                                    className="absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-indigo-500 bg-gray-950 md:block"/>

                                {/* Content - Removed width classes to let the flex-1 handle it */}
                                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                    {/* Inner Box: Key change is adding text-center and centering inner flex items for Phase/Duration */}
                                    <div
                                        className="rounded-xl bg-gray-800/40 p-4 transition-colors text-center hover:bg-gray-800/60 shadow-xl shadow-indigo-900/10 hover:shadow-indigo-900/20">

                                        {/* Phase and Duration: Must be justified to center the content within the row */}
                                        <div
                                            className="mb-2 flex items-center gap-2 text-sm text-indigo-400 justify-center">
                                            <span className="font-semibold">Phase {index + 1}</span>
                                            <span className="text-gray-600">•</span>
                                            <span className="text-indigo-200/65">{service.duration}</span>
                                        </div>

                                        {/* Title */}
                                        <h4 className="font-nacelle text-lg font-semibold text-gray-200">
                                            {service.title}
                                        </h4>

                                        {/* Subtitle */}
                                        <p className="mt-1 text-sm text-indigo-200/65">
                                            {service.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer column to maintain alternating layout structure */}
                                <div className="hidden flex-1 md:block"/>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}