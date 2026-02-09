import { Metadata } from "next";
import { Container, Hero, Stats, Process, FAQ, CTA, WhyUs, Button } from "@/components";

export const metadata: Metadata = {
  title: "Bond Originator Commission Advance | Up to 35% Pipeline | TBSG",
  description: "Manage your pipeline cash flow better. Advance up to 35% of your instructed commission pipeline. Same-day payment, apply twice weekly, no bank impact.",
};

const stats = [
  { value: "35%", label: "Pipeline Advance", highlight: true },
  { value: "Same Day", label: "Payment Available" },
  { value: "2x", label: "Weekly Applications" },
  { value: "R0", label: "Initiation Fee" },
];

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Scale Your Business",
    description: "Use advanced capital to invest in marketing, staff, or expansion without waiting for registrations.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Smooth Cash Flow",
    description: "No more feast-and-famine cycles. Predictable cash flow even when registrations are delayed.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "No Bank Impact",
    description: "Our bridging doesn't affect your relationships with the banks you originate for.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Same-Day Payment",
    description: "Apply and receive funds on the same day. We run payment batches at 10am and 2pm.",
  },
];

const processSteps = [
  { number: 1, title: "Apply Online", description: "Submit your pipeline details\u2014minimum 5 instructed deals within 6 months." },
  { number: 2, title: "Verify Pipeline", description: "We verify your instructed bonds with the relevant banks/attorneys." },
  { number: 3, title: "Get Approved", description: "Approval based on your pipeline value and track record." },
  { number: 4, title: "Receive Funds", description: "Same-day payment available. Apply up to twice weekly." },
];

const faqs = [
  {
    question: "How much of my pipeline can I advance?",
    answer: "You can advance up to 35% of your instructed commission pipeline. The minimum requirement is 5 instructed deals within a 6-month period.",
  },
  {
    question: "What counts as 'instructed'?",
    answer: "Instructed means the bond application has been submitted to the bank and you have a reference number. We verify this with the relevant parties.",
  },
  {
    question: "How often can I apply?",
    answer: "You can apply up to twice per week as your pipeline grows. This gives you flexibility to manage cash flow as new deals come in.",
  },
  {
    question: "Does this affect my bank relationships?",
    answer: "No. Our bridging facility is completely separate from your origination relationships. The banks don't need to know or approve.",
  },
  {
    question: "What happens when bonds register?",
    answer: "When a bond in your advanced pipeline registers, we deduct the advanced portion from your commission payout and release any balance to you.",
  },
  {
    question: "What if a deal falls through?",
    answer: "We manage portfolio risk across your pipeline. Individual deal fallout is expected and accounted for in our underwriting. Consistent high fallout rates may affect future advances.",
  },
];

export default function BondOriginatorsPage() {
  return (
    <>
      <Hero
        badge="For Bond Originators"
        title="Advance Up to 35% of Your Instructed Pipeline"
        subtitle="Your pipeline is your capital. Don't wait months for registrations\u2014access up to 35% of your instructed commission pipeline with same-day payment."
        primaryCTA={{ text: "Apply Now", href: "https://tbsg.azurewebsites.net/pages/external-transaction-create/create/bondoriginatorbridgingfinance" }}
        secondaryCTA={{ text: "Contact Us", href: "/contact" }}
        variant="gradient"
      />

      <Stats stats={stats} variant="light" />

      {/* Value Proposition */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-6">
                Your Pipeline is Your Capital
              </h2>
              <p className="text-lg text-tbsg-charcoal/70 mb-6">
                As a bond originator, you&apos;ve done the hard work&mdash;sourcing clients, submitting applications,
                getting approvals. But your commission only arrives when bonds register, often months later.
              </p>
              <p className="text-lg text-tbsg-charcoal/70 mb-8">
                TBSG lets you unlock the value in your instructed pipeline today. Use it to grow your
                business, smooth out cash flow, or invest in new opportunities&mdash;without waiting for registrations.
              </p>

              <div className="bg-tbsg-light rounded-xl p-6">
                <h3 className="font-heading font-bold text-lg text-tbsg-charcoal mb-4">Requirements:</h3>
                <ul className="space-y-2">
                  {[
                    "Minimum 5 instructed deals within 6 months",
                    "Valid originator registration/credentials",
                    "Bank reference numbers for instructed bonds",
                    "Standard KYC documentation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-tbsg-charcoal/80">
                      <svg className="w-4 h-4 text-tbsg-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-tbsg-primary to-tbsg-secondary rounded-2xl p-8 text-white">
              <h3 className="font-heading font-bold text-2xl mb-6">
                Example Pipeline Advance
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span className="text-white/80">Instructed Pipeline Value</span>
                  <span className="font-heading font-bold">R15,000,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span className="text-white/80">Expected Commission (1%)</span>
                  <span className="font-heading font-bold">R150,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span className="text-white/80">Available Advance (35%)</span>
                  <span className="font-heading font-bold text-xl">R52,500</span>
                </div>
                <div className="pt-2">
                  <p className="text-white/70 text-sm">
                    Access up to R52,500 today instead of waiting months for registrations.
                  </p>
                </div>
              </div>

              <Button
                variant="primary"
                href="https://tbsg.azurewebsites.net/pages/external-transaction-create/create/bondoriginatorbridgingfinance"
                external
                className="w-full mt-8"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <WhyUs
        title="Why Originators Choose TBSG"
        features={benefits}
        columns={4}
      />

      <Process
        title="How Pipeline Advances Work"
        steps={processSteps}
        variant="horizontal"
      />

      <FAQ
        title="Bond Originator FAQs"
        items={faqs}
      />

      <CTA
        title="Ready to Unlock Your Pipeline?"
        subtitle="Apply now and get same-day payment"
        primaryCTA={{ text: "Apply Now", href: "https://tbsg.azurewebsites.net/pages/external-transaction-create/create/bondoriginatorbridgingfinance" }}
        secondaryCTA={{ text: "Contact Us", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
