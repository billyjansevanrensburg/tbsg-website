import { Metadata } from "next";
import { Container, Hero, Stats, Process, FAQ, Card, Button, Testimonials } from "@/components";

export const metadata: Metadata = {
  title: "Partner With TBSG | For Estate Agents & Agencies | TBSG",
  description: "Commission advances up to 85%, referral fees up to 0.69%, and bridging finance for your sellers. Multiple ways to earn more as a TBSG partner.",
};

const stats = [
  { value: "85%", label: "Commission Advance", highlight: true },
  { value: "0.69%", label: "Referral Commission", highlight: true },
  { value: "80%", label: "Seller Advance" },
  { value: "24hr", label: "Typical Payout" },
];

const earningOpportunities = [
  {
    title: "Commission Advance",
    description: "Why wait months for your commission? Advance up to 85% within 24 hours of approval.",
    features: [
      "Up to 85% of your net commission",
      "Funds within 24 hours",
      "Zero initiation fees",
      "Pay only for days used",
    ],
    cta: "Apply for Advance",
    href: "/bridging-finance/agents",
    color: "primary",
  },
  {
    title: "Refer & Earn",
    description: "Refer your buyers for home loans and earn up to 0.69% of the bond amount when it registers.",
    features: [
      "Up to 0.69% on residential bonds",
      "Up to 0.2% on commercial bonds",
      "Personal tracking link",
      "Daily progress updates",
    ],
    cta: "Start Earning",
    href: "/tools/refer-and-earn",
    color: "green",
  },
  {
    title: "Seller Bridging",
    description: "Help your sellers access up to 80% of their proceeds before transfer. Happy sellers = more referrals.",
    features: [
      "Up to 80% of net proceeds",
      "Clear rates arrears quickly",
      "6-hour turnaround possible",
      "You look good to your clients",
    ],
    cta: "Learn More",
    href: "/bridging-finance/sellers",
    color: "secondary",
  },
];

const agencyBenefits = [
  {
    title: "Agency-Level Advances",
    description: "Principals can advance the full agency commission, not just individual agent portions.",
  },
  {
    title: "Volume Referral Agreements",
    description: "High-volume agencies may qualify for enhanced referral rates and dedicated support.",
  },
  {
    title: "Training & Onboarding",
    description: "We can train your team on our products so they know how to help clients and earn more.",
  },
  {
    title: "Co-Marketing Opportunities",
    description: "Joint marketing initiatives, collateral, and lead generation for active partners.",
  },
];

const processSteps = [
  {
    number: 1,
    title: "Choose Your Opportunity",
    description: "Commission advance? Refer & earn? Help your sellers? All three? Pick what works for you."
  },
  {
    number: 2,
    title: "Quick Setup",
    description: "Sign up takes minutes. For Refer & Earn, we'll give you your personal tracking link."
  },
  {
    number: 3,
    title: "Start Earning",
    description: "Apply for commission advances as you close deals. Refer buyers. Help sellers."
  },
  {
    number: 4,
    title: "Get Paid",
    description: "Commission advances within 24 hours. Referral fees when bonds register."
  },
];

const faqs = [
  {
    question: "Can I earn from multiple products?",
    answer: "Absolutely! Many agents advance their commission AND earn referral fees on home loans AND refer their sellers for bridging. They're separate products—earn from all of them.",
  },
  {
    question: "How do I track my referral earnings?",
    answer: "You'll receive daily updates on each home loan application you've referred, plus weekly summary reports. When a bond registers, you'll know exactly what you've earned.",
  },
  {
    question: "Can my agency sign up instead of me personally?",
    answer: "Yes. We offer agency-level commission advances and referral agreements. This can be useful for managing cash flow and referral tracking at the agency level.",
  },
  {
    question: "What's the difference between commission advance and Refer & Earn?",
    answer: "Commission advance lets you access your existing commission faster (before transfer). Refer & Earn is an additional income stream—you earn a percentage of the bond amount when you refer buyers for home loans.",
  },
  {
    question: "Is there a minimum number of referrals?",
    answer: "No minimum. Refer one buyer or 100—you earn on every successful registration. Of course, the more you refer, the more you earn.",
  },
  {
    question: "How do I help my sellers with bridging?",
    answer: "Simply tell them about TBSG or send us their details. When they apply, they'll mention you as the agent. It helps your sellers and builds goodwill.",
  },
];

const testimonials = [
  {
    quote: "I am thrilled that we have worked together. I am most certainly going to chat to you guys again about sellers bridging and also bond origination.",
    author: "Sandy Graham",
    role: "Property Agent",
  },
  {
    quote: "We have been working with TBSG company over the last few years and they are highly recommended.",
    author: "Long-term Partner",
    role: "Industry Professional",
  },
];

export default function AgentsPartnerPage() {
  return (
    <>
      <Hero
        badge="For Estate Agents & Agencies"
        title="Multiple Ways to Earn More With TBSG"
        subtitle="Advance your commission faster. Earn referral fees on home loans. Help your sellers with bridging. Partner with us and grow your income."
        primaryCTA={{ text: "Advance Commission", href: "/bridging-finance/agents" }}
        secondaryCTA={{ text: "Start Referring", href: "/tools/refer-and-earn" }}
        variant="gradient"
      />

      <Stats stats={stats} variant="light" />

      {/* Earning Opportunities */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              Three Ways to Earn
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              Pick one, two, or all three—each is a separate opportunity to increase your income
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {earningOpportunities.map((opportunity, index) => (
              <Card key={index} padding="lg" hover className="flex flex-col">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white ${
                  opportunity.color === "primary" ? "bg-tbsg-primary" :
                  opportunity.color === "green" ? "bg-tbsg-green" :
                  "bg-tbsg-secondary"
                }`}>
                  <span className="font-heading font-bold text-xl">{index + 1}</span>
                </div>

                <h3 className="text-xl font-heading font-bold text-tbsg-charcoal mb-3">
                  {opportunity.title}
                </h3>

                <p className="text-tbsg-charcoal/70 mb-4">
                  {opportunity.description}
                </p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {opportunity.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-tbsg-charcoal/80">
                      <svg className="w-4 h-4 text-tbsg-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={opportunity.color === "green" ? "primary" : "secondary"}
                  href={opportunity.href}
                  className="w-full"
                >
                  {opportunity.cta}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Example Earnings */}
      <section className="py-16 lg:py-24 bg-tbsg-light">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
                Example: R2 Million Sale
              </h2>
              <p className="text-lg text-tbsg-charcoal/70">
                See how an agent could earn on a single transaction
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-tbsg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-heading font-bold text-tbsg-primary">1</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-tbsg-charcoal mb-2">
                    Your Commission
                  </h3>
                  <p className="text-3xl font-heading font-bold text-tbsg-charcoal mb-1">
                    R100,000
                  </p>
                  <p className="text-sm text-tbsg-charcoal/60">5% of R2M sale</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-tbsg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-heading font-bold text-tbsg-primary">2</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-tbsg-charcoal mb-2">
                    Commission Advance
                  </h3>
                  <p className="text-3xl font-heading font-bold text-tbsg-primary mb-1">
                    R85,000
                  </p>
                  <p className="text-sm text-tbsg-charcoal/60">85% advanced within 24hrs</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-tbsg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-heading font-bold text-tbsg-green">3</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-tbsg-charcoal mb-2">
                    Bond Referral Fee
                  </h3>
                  <p className="text-3xl font-heading font-bold text-tbsg-green mb-1">
                    R11,040
                  </p>
                  <p className="text-sm text-tbsg-charcoal/60">0.69% of R1.6M bond</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                <p className="text-tbsg-charcoal/70 mb-2">Total potential from this single deal:</p>
                <p className="text-4xl font-heading font-bold text-tbsg-charcoal">
                  R111,040
                </p>
                <p className="text-sm text-tbsg-charcoal/60 mt-2">
                  Commission + referral fee (bridging costs are separate)
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Agency Benefits */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              For Agencies & Principals
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              Additional benefits for estate agencies who want to partner at the company level
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {agencyBenefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 p-6 bg-tbsg-light rounded-xl">
                <div className="w-10 h-10 bg-tbsg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-tbsg-charcoal mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-tbsg-charcoal/70">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Process
        title="Getting Started"
        steps={processSteps}
        variant="horizontal"
      />

      {/* Testimonials */}
      <Testimonials
        title="What Agents Say"
        testimonials={testimonials}
      />

      <FAQ
        title="Agent Partner FAQs"
        items={faqs}
      />

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-tbsg-green to-emerald-600">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Ready to Earn More?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Start with commission advances, referrals, or both—whatever works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/bridging-finance/agents">
                Advance My Commission
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="/tools/refer-and-earn"
                className="border-white text-white hover:bg-white hover:text-tbsg-green"
              >
                Start Referring
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
