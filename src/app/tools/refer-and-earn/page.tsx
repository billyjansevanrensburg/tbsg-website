import { Metadata } from "next";
import { Container, Hero, Stats, FAQ, Card } from "@/components";
import { BookMeetingForm, ReferBuyerForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Refer & Earn | Earn Up to R75,000 Per Referral | TBSG",
  description: "Refer home buyers to TBSG and earn commission when their bond registers. Up to 0.69% on residential bonds, 0.2% on commercial. Start earning today.",
};

const stats = [
  { value: "0.69%", label: "Residential Commission", highlight: true },
  { value: "0.2%", label: "Commercial Commission", highlight: true },
  { value: "R75K+", label: "Max Per Referral" },
  { value: "Daily", label: "Progress Updates" },
];

const howItWorks = [
  {
    number: 1,
    title: "Quick Intro Call",
    description: "We have a quick call to explain everything step-by-step and answer any questions you have.",
  },
  {
    number: 2,
    title: "Sign Agreement",
    description: "You sign our simple referral commission agreement so everything is clear and documented.",
  },
  {
    number: 3,
    title: "Get Set Up",
    description: "We set up your account on our system so we know who to pay when bonds register.",
  },
  {
    number: 4,
    title: "Get Your Links",
    description: "You receive your personal Pre-Approval & Home Loan links that automatically track your referrals.",
  },
  {
    number: 5,
    title: "Stay Updated",
    description: "You get daily progress updates on each application and weekly summary reports.",
  },
  {
    number: 6,
    title: "Get Paid",
    description: "When the bond registers, we pay your commission. Simple as that.",
  },
];

const faqs = [
  {
    question: "How much can I earn per referral?",
    answer: "For residential home loans, you earn up to 0.69% of the bond amount. For commercial loans, you earn up to 0.2%. On a R2 million residential bond, that's up to R13,800. On larger bonds, you could earn R75,000 or more.",
  },
  {
    question: "When do I get paid?",
    answer: "You get paid when the bond registers at the Deeds Office. This typically happens 4-8 weeks after the buyer's loan is approved. We pay within 7 days of registration.",
  },
  {
    question: "Do I need to be registered or licensed?",
    answer: "No special registration is required. Anyone can refer buyers—estate agents, attorneys, financial advisors, or simply friends and family who know people buying property.",
  },
  {
    question: "How do I track my referrals?",
    answer: "You'll receive daily progress updates on each application via email, plus weekly summary reports. We keep you informed every step of the way.",
  },
  {
    question: "What if the buyer doesn't qualify?",
    answer: "Not every application will be approved, and that's okay. You don't owe us anything if a referral doesn't proceed. You only earn commission on successful registrations.",
  },
  {
    question: "Can I refer multiple buyers?",
    answer: "Absolutely! There's no limit to how many buyers you can refer. The more successful referrals, the more you earn.",
  },
  {
    question: "Do I get a portal or login?",
    answer: "Currently, referrers receive updates via email (daily per application, weekly summaries) rather than a portal login. This keeps things simple while ensuring you're always informed.",
  },
];

const commissionExamples = [
  { bondAmount: 1000000, residential: 6900, commercial: 2000 },
  { bondAmount: 1500000, residential: 10350, commercial: 3000 },
  { bondAmount: 2000000, residential: 13800, commercial: 4000 },
  { bondAmount: 3000000, residential: 20700, commercial: 6000 },
  { bondAmount: 5000000, residential: 34500, commercial: 10000 },
  { bondAmount: 10000000, residential: 69000, commercial: 20000 },
];

export default function ReferAndEarnPage() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <>
      {/* Hero */}
      <Hero
        badge="Refer & Earn Programme"
        title="Earn Up to R75,000 Per Home Loan Referral"
        subtitle="Refer buyers to TBSG and earn commission when their bond registers. Residential bonds pay up to 0.69%, commercial bonds up to 0.2%. No limits, no catches."
        variant="gradient"
      />

      <Stats stats={stats} variant="light" />

      {/* Commission Table */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              What You Could Earn
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              Commission is calculated as a percentage of the bond amount
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-tbsg-primary">
                  <th className="text-left py-4 px-4 font-heading font-bold text-tbsg-charcoal">
                    Bond Amount
                  </th>
                  <th className="text-right py-4 px-4 font-heading font-bold text-tbsg-charcoal">
                    Residential (0.69%)
                  </th>
                  <th className="text-right py-4 px-4 font-heading font-bold text-tbsg-charcoal">
                    Commercial (0.2%)
                  </th>
                </tr>
              </thead>
              <tbody>
                {commissionExamples.map((example, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-tbsg-light/50">
                    <td className="py-4 px-4 text-tbsg-charcoal">
                      {formatCurrency(example.bondAmount)}
                    </td>
                    <td className="py-4 px-4 text-right font-medium text-tbsg-green">
                      {formatCurrency(example.residential)}
                    </td>
                    <td className="py-4 px-4 text-right font-medium text-tbsg-secondary">
                      {formatCurrency(example.commercial)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-tbsg-charcoal/60 mt-6">
            Commission rates are up to the stated percentages. Actual commission may vary based on deal specifics.
          </p>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-tbsg-light">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              Getting started is simple—here&apos;s the process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {howItWorks.map((step) => (
              <div key={step.number} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 bg-tbsg-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-heading font-bold">{step.number}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-tbsg-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-tbsg-charcoal/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Forms Section */}
      <section className="py-16 lg:py-24" id="forms">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              Get Started
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              Want to learn more? Book a meeting. Ready to refer? Submit your buyer&apos;s details.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Book Meeting Form */}
            <Card padding="lg" className="h-fit">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-tbsg-secondary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-tbsg-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-tbsg-charcoal">
                    Book a Meeting
                  </h3>
                  <p className="text-sm text-tbsg-charcoal/60">
                    Learn more about the programme
                  </p>
                </div>
              </div>
              <BookMeetingForm />
            </Card>

            {/* Refer Buyer Form */}
            <Card padding="lg" className="h-fit">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-tbsg-green/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-tbsg-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-tbsg-charcoal">
                    Refer a Buyer Now
                  </h3>
                  <p className="text-sm text-tbsg-charcoal/60">
                    Submit your referral details
                  </p>
                </div>
              </div>
              <ReferBuyerForm />
            </Card>
          </div>
        </Container>
      </section>

      {/* What You Get */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-tbsg-green to-emerald-600">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              What You Get as a Referrer
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                ),
                title: "Personal Referral Link",
                description: "Your own link that tracks all referrals automatically",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
                title: "Daily Updates",
                description: "Progress updates on each application, every day",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: "Weekly Reports",
                description: "Summary of all your referrals and their status",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Fast Payment",
                description: "Commission paid within 7 days of bond registration",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQ
        title="Refer & Earn FAQs"
        items={faqs}
      />

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-tbsg-primary">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Ready to Start Earning?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Book a quick call to learn more, or submit your first referral right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#forms"
                className="inline-flex items-center justify-center px-8 py-4 bg-tbsg-orange text-white font-heading font-semibold rounded-lg hover:bg-orange-600 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-heading font-semibold rounded-lg hover:bg-white hover:text-tbsg-primary transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
