import { Metadata } from "next";
import { Container, Hero, Stats, Process, FAQ, CTA, WhyUs, Button } from "@/components";

export const metadata: Metadata = {
  title: "Estate Agent Commission Advance | Up to 85% | TBSG",
  description: "Stop waiting for your commission. Advance up to 85% of your estate agent commission within 24 hours. Plus earn referral fees on home loan applications.",
};

const stats = [
  { value: "85%", label: "Commission Advance", highlight: true },
  { value: "24hr", label: "Typical Payout" },
  { value: "0.69%", label: "Bond Referral Fee", highlight: true },
  { value: "R0", label: "Initiation Fee" },
];

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Get Paid Faster",
    description: "Why wait 2-3 months for commission? Access up to 85% within 24 hours of approval.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    title: "Earn Referral Fees",
    description: "Refer your buyers to us for home loans and earn up to 0.69% of the bond amount when it registers.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Simple Process",
    description: "Quick online application, minimal paperwork. We handle the coordination with attorneys.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Agency Advances Too",
    description: "Need to advance the full agency commission? We offer agency-level bridging as well.",
  },
];

const processSteps = [
  {
    number: 1,
    title: "Apply Online",
    description: "Submit your details and the sale information. Takes about 5 minutes."
  },
  {
    number: 2,
    title: "Upload Documents",
    description: "OTP, commission agreement, ID. We'll tell you exactly what's needed."
  },
  {
    number: 3,
    title: "Quick Approval",
    description: "We review your application and get back to you\u2014usually same day."
  },
  {
    number: 4,
    title: "Get Your Commission",
    description: "Funds transferred within 24 hours of approval. Focus on selling, not surviving."
  },
];

const faqs = [
  {
    question: "How much of my commission can I advance?",
    answer: "You can advance up to 85% of your net commission (after VAT and agency split). The exact amount depends on the specifics of your deal.",
  },
  {
    question: "How do I earn referral fees on home loans?",
    answer: "When you refer a buyer to us for their home loan, you earn up to 0.69% of the bond amount when it registers. We provide you with a personal referral link and track everything automatically. You receive daily progress updates and weekly summary reports.",
  },
  {
    question: "Can my agency apply instead of me personally?",
    answer: "Yes! We offer agency-level commission advances. This is useful when the principal wants to manage cash flow at the agency level.",
  },
  {
    question: "What documents do I need?",
    answer: "Typically: signed Offer to Purchase, your commission mandate/agreement, ID document, and bank details. We may request additional documents depending on the transaction.",
  },
  {
    question: "How long until the property transfers?",
    answer: "Most transfers take 2-4 months from OTP signing. You only pay for the actual days until transfer registers and we release the balance to you.",
  },
  {
    question: "What happens if the sale falls through?",
    answer: "This is rare, but if it happens, we work with you and the attorneys to resolve the situation. Our underwriting process accounts for transaction risk.",
  },
];

export default function AgentsPage() {
  return (
    <>
      <Hero
        badge="For Estate Agents"
        title="Stop Waiting Months for Your Commission"
        subtitle="Advance up to 85% of your commission within 24 hours. Plus earn up to 0.69% on every home loan you refer. Focus on selling, not surviving."
        primaryCTA={{ text: "Apply for Commission Advance", href: "https://tbsg.azurewebsites.net/pages/external-transaction-create/create/propertyagentcommission" }}
        secondaryCTA={{ text: "Learn About Referral Fees", href: "/tools/refer-and-earn" }}
        variant="gradient"
      />

      <Stats stats={stats} variant="light" />

      {/* Value Proposition */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-6">
                Two Ways to Earn More
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-tbsg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-heading font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-tbsg-charcoal mb-2">
                      Commission Advance
                    </h3>
                    <p className="text-tbsg-charcoal/70">
                      Don&apos;t wait 2-3 months for your hard-earned commission. Advance up to 85% within 24 hours
                      and only pay for the days until transfer. Zero initiation fees.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-tbsg-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-heading font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-tbsg-charcoal mb-2">
                      Bond Referral Fees
                    </h3>
                    <p className="text-tbsg-charcoal/70">
                      Refer your buyers to us for their home loan and earn up to 0.69% of the bond amount
                      (up to R75,000+ on larger bonds). We give you a personal link and handle everything.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-tbsg-light rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-tbsg-charcoal mb-6">
                Example: R2 Million Sale
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-tbsg-charcoal/70">Sale Price</span>
                  <span className="font-heading font-bold text-tbsg-charcoal">R2,000,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-tbsg-charcoal/70">Your Commission (5%)</span>
                  <span className="font-heading font-bold text-tbsg-charcoal">R100,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-tbsg-charcoal/70">Advance (85%)</span>
                  <span className="font-heading font-bold text-tbsg-green">R85,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-tbsg-charcoal/70">Bond Referral (0.69% of R1.6M bond)</span>
                  <span className="font-heading font-bold text-tbsg-green">R11,040</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-heading font-bold text-tbsg-charcoal">Total Potential Earnings</span>
                  <span className="font-heading font-bold text-xl text-tbsg-primary">R111,040</span>
                </div>
              </div>

              <p className="text-sm text-tbsg-charcoal/60 mt-6">
                *Example only. Actual amounts depend on commission rates, bond amounts, and bridging period.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <WhyUs
        title="Why Agents Choose TBSG"
        features={benefits}
        columns={4}
      />

      <Process
        title="How to Get Your Commission Advance"
        steps={processSteps}
        variant="horizontal"
      />

      <FAQ
        title="Agent FAQs"
        items={faqs}
      />

      {/* Application Options */}
      <section className="py-16 lg:py-20 bg-tbsg-light">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              Ready to Apply?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-heading font-bold text-tbsg-charcoal mb-3">
                Individual Agent
              </h3>
              <p className="text-tbsg-charcoal/70 mb-6">
                Advance your personal commission on a sale.
              </p>
              <Button
                variant="primary"
                href="https://tbsg.azurewebsites.net/pages/external-transaction-create/create/propertyagentcommission"
                external
                className="w-full"
              >
                Apply as Agent
              </Button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-heading font-bold text-tbsg-charcoal mb-3">
                Agency / Principal
              </h3>
              <p className="text-tbsg-charcoal/70 mb-6">
                Advance the full agency commission on a sale.
              </p>
              <Button
                variant="secondary"
                href="https://tbsg.azurewebsites.net/pages/external-transaction-create/create/propertyagency"
                external
                className="w-full"
              >
                Apply as Agency
              </Button>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-tbsg-charcoal/70 mb-4">Want to earn referral fees on home loans?</p>
            <Button variant="ghost" href="/tools/refer-and-earn">
              Learn About Refer &amp; Earn &rarr;
            </Button>
          </div>
        </Container>
      </section>

      <CTA
        title="Questions? We're Here to Help"
        subtitle="Our team works with agents every day"
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
        variant="primary"
      />
    </>
  );
}
