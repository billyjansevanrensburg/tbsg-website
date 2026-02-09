import { Metadata } from "next";
import { Container, Hero, Card, Button } from "@/components";

export const metadata: Metadata = {
  title: "Property Finance Tools & Calculators | TBSG",
  description: "Free property finance calculators. Calculate bridging finance costs, home loan affordability, and monthly repayments. Plan your property purchase with confidence.",
};

const tools = [
  {
    title: "Bridging Calculator",
    description: "Calculate how much you could advance and estimate your bridging finance costs based on sale price, existing bond, and expected transfer time.",
    href: "/tools/bridging-calculator",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "primary",
  },
  {
    title: "Affordability Calculator",
    description: "Find out how much home you can afford based on your income, expenses, and deposit. Get an instant estimate before you start house hunting.",
    href: "/tools/affordability-calculator",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: "green",
  },
  {
    title: "Repayment Calculator",
    description: "Calculate your monthly home loan repayments based on loan amount, interest rate, and term. See how rate changes affect your payments.",
    href: "/tools/repayment-calculator",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: "secondary",
  },
  {
    title: "Refer & Earn",
    description: "Refer home buyers to TBSG and earn up to 0.69% commission on residential bonds and 0.2% on commercial bonds when they register.",
    href: "/tools/refer-and-earn",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "orange",
  },
];

const colorClasses = {
  primary: "bg-tbsg-primary/10 text-tbsg-primary",
  secondary: "bg-tbsg-secondary/10 text-tbsg-secondary",
  green: "bg-tbsg-green/10 text-tbsg-green",
  orange: "bg-tbsg-orange/10 text-tbsg-orange",
};

export default function ToolsPage() {
  return (
    <>
      <Hero
        badge="Free Tools"
        title="Property Finance Calculators"
        subtitle="Plan your property purchase with our free calculators. Get instant estimates for bridging finance, home loan affordability, and monthly repayments."
        variant="gradient"
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} hover padding="lg" className="flex flex-col">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${colorClasses[tool.color as keyof typeof colorClasses]}`}>
                  {tool.icon}
                </div>
                <h2 className="text-2xl font-heading font-bold text-tbsg-charcoal mb-3">
                  {tool.title}
                </h2>
                <p className="text-tbsg-charcoal/70 mb-6 flex-grow">
                  {tool.description}
                </p>
                <Button variant="secondary" href={tool.href} className="w-full">
                  Use {tool.title}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
