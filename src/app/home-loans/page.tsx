import { Metadata } from "next";
import { Container, Hero, Stats, Process, FAQ, CTA, Card, Button, WhyUs } from "@/components";

export const metadata: Metadata = {
  title: "Home Loans South Africa | Best Rates Guaranteed | TBSG",
  description: "Get the best home loan rates in South Africa. We submit to all major banks and negotiate on your behalf. Free pre-approval. Average 0.95% better rates.",
};

const stats = [
  { value: "0.95%", label: "Better Rates on Average", highlight: true },
  { value: "All", label: "Major SA Banks" },
  { value: "Free", label: "Pre-Approval" },
  { value: "10+", label: "Years Experience" },
];

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "All Major Banks",
    description: "We submit your application to ABSA, FNB, Nedbank, Standard Bank, Capitec, Investec, and more. One application, multiple offers.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Better Rates",
    description: "Our clients save an average of 0.95% on their interest rate compared to going directly to a bank or private banker.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fast Pre-Approval",
    description: "Get pre-approved in minutes, not days. Know exactly what you can afford before you start house hunting.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Dedicated Support",
    description: "Your own consultant guides you from application to registration. Real people, real answers, real fast.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Completely Free",
    description: "Our service costs you nothing. Banks pay us when your bond registers\u2014you get better rates at no cost.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Commercial Too",
    description: "Beyond residential, we're specialists in commercial property finance\u2014offices, industrial, retail, agricultural, and development.",
  },
];

const processSteps = [
  { number: 1, title: "Get Pre-Approved", description: "Quick online application tells you exactly what you can afford." },
  { number: 2, title: "Find Your Property", description: "House hunt with confidence knowing your budget is locked in." },
  { number: 3, title: "We Submit to All Banks", description: "One application goes to every major bank. We negotiate the best offer." },
  { number: 4, title: "Choose Your Best Offer", description: "Compare rates and terms. We help you pick the right one." },
  { number: 5, title: "We Handle Registration", description: "We coordinate with attorneys and the bank until your bond registers." },
];

const faqs = [
  {
    question: "Is your service really free?",
    answer: "Yes, completely free to you. Banks pay us a commission when your bond registers. You get better rates and service at no cost.",
  },
  {
    question: "How do you get better rates than going direct?",
    answer: "We submit to multiple banks simultaneously, creating competition for your business. Banks know they're competing, so they offer better rates. We also have established relationships and volume that gives us negotiating power.",
  },
  {
    question: "What documents do I need?",
    answer: "Typically: ID, proof of income (3 months payslips or financials for self-employed), 3 months bank statements, and proof of residence. We'll guide you through exactly what's needed for your situation.",
  },
  {
    question: "How long does pre-approval take?",
    answer: "Online pre-approval takes minutes. Full bank pre-approval typically takes 24-48 hours once we have your documents.",
  },
  {
    question: "Do you handle commercial property loans?",
    answer: "Yes! We're one of the few originators specialising in commercial property finance at scale in South Africa. This includes offices, retail, industrial, agricultural, and development finance.",
  },
];

export default function HomeLoansPage() {
  return (
    <>
      <Hero
        badge="Free Service \u2022 All Major Banks \u2022 Better Rates"
        title="Home Loans That Actually Save You Money"
        subtitle="We submit your application to every major South African bank and negotiate the best rates on your behalf. Our clients save an average of 0.95% on their interest rate. And it's completely free."
        primaryCTA={{ text: "Get Pre-Approved", href: "/home-loans/get-preapproved" }}
        secondaryCTA={{ text: "Apply for Home Loan", href: "/home-loans/apply" }}
        variant="gradient"
      />

      <Stats stats={stats} variant="light" />

      <WhyUs
        title="Why Use TBSG for Your Home Loan?"
        subtitle="Better rates, less hassle, zero cost"
        features={benefits}
        columns={3}
      />

      {/* Loan Types */}
      <section className="py-16 lg:py-24 bg-tbsg-light">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              Home Loan Solutions
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              Whether you&apos;re buying your first home or financing a commercial property portfolio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "First-Time Buyers",
                description: "Get on the property ladder with expert guidance and the best rates.",
                href: "/home-loans/get-preapproved",
              },
              {
                title: "Moving Home",
                description: "Upgrade, downsize, or relocate. We make switching easy.",
                href: "/home-loans/apply",
              },
              {
                title: "Refinancing",
                description: "Lower your rate or access equity from your current property.",
                href: "/home-loans/apply",
              },
              {
                title: "Commercial Loans",
                description: "Offices, industrial, retail, agricultural, and development finance.",
                href: "/home-loans/commercial",
              },
            ].map((item, index) => (
              <Card key={index} hover padding="md">
                <h3 className="text-lg font-heading font-bold text-tbsg-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-tbsg-charcoal/70 mb-4">
                  {item.description}
                </p>
                <Button variant="ghost" size="sm" href={item.href}>
                  Learn More &rarr;
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <Process
        title="How It Works"
        subtitle="From pre-approval to keys in hand"
        steps={processSteps}
        variant="vertical"
      />

      <FAQ
        title="Home Loan FAQs"
        items={faqs}
      />

      <CTA
        title="Ready to Get Started?"
        subtitle="Get pre-approved in minutes and start house hunting with confidence"
        primaryCTA={{ text: "Get Pre-Approved", href: "/home-loans/get-preapproved" }}
        secondaryCTA={{ text: "Contact Us", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
