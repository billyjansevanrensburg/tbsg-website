import { Metadata } from "next";
import { Container, Hero, Card, Button, Stats } from "@/components";

export const metadata: Metadata = {
  title: "Partner With TBSG | Attorneys & Estate Agents | TBSG",
  description: "Partner with TBSG to offer bridging finance and home loans to your clients. Fast, reliable, compliant solutions for attorneys and estate agents.",
};

const stats = [
  { value: "10+", label: "Years Track Record" },
  { value: "6hr", label: "Fastest Payout" },
  { value: "BFASA", label: "Member" },
  { value: "NCR", label: "Registered" },
];

const partners = [
  {
    title: "For Attorneys",
    description: "Help your clients access bridging finance to clear rates arrears, pay levies, or fund deposits—keeping transfers moving smoothly.",
    benefits: [
      "Speed up transfers by clearing rates arrears",
      "Help clients fund deposits on next purchases",
      "Compliant, BFASA-member partner",
      "Direct payment to municipalities available",
      "Dedicated attorney liaison team",
    ],
    href: "/partners/attorneys",
    cta: "Learn More",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "For Estate Agents & Agencies",
    description: "Advance your commission faster, earn referral fees on home loans, and give your clients access to bridging finance and better bond rates.",
    benefits: [
      "Advance up to 85% of commission",
      "Earn 0.69% on home loan referrals",
      "Help sellers with bridging finance",
      "Agency-level commission advances",
      "Daily updates on all referrals",
    ],
    href: "/partners/agents",
    cta: "Learn More",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function PartnersPage() {
  return (
    <>
      <Hero
        badge="Partner With TBSG"
        title="Grow Your Business With Property Finance Solutions"
        subtitle="Whether you're an attorney facilitating transfers or an estate agent closing deals, we're here to help you serve your clients better and earn more."
        primaryCTA={{ text: "For Attorneys", href: "/partners/attorneys" }}
        secondaryCTA={{ text: "For Agents", href: "/partners/agents" }}
        variant="gradient"
      />

      <Stats stats={stats} variant="light" />

      {/* Partner Cards */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <Card key={index} padding="lg" hover className="flex flex-col">
                <div className="w-16 h-16 bg-tbsg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-tbsg-primary">
                  {partner.icon}
                </div>

                <h2 className="text-2xl font-heading font-bold text-tbsg-charcoal mb-3">
                  {partner.title}
                </h2>

                <p className="text-tbsg-charcoal/70 mb-6">
                  {partner.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {partner.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-tbsg-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-tbsg-charcoal/80">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="secondary" href={partner.href} className="w-full">
                  {partner.cta}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 lg:py-24 bg-tbsg-light">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-6">
              Why Partner With TBSG?
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 mb-8">
              We&apos;ve been helping property professionals for over a decade. Our partnerships are built on
              reliability, transparency, and a shared commitment to excellent client service.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: "Reliable",
                  description: "10+ years track record. We do what we say, when we say it.",
                },
                {
                  title: "Compliant",
                  description: "BFASA member, NCR registered. You can trust us with your clients.",
                },
                {
                  title: "Responsive",
                  description: "Dedicated support team. Real answers, not automated responses.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-heading font-bold text-lg text-tbsg-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-tbsg-charcoal/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-tbsg-primary">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Ready to Partner?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Get in touch to discuss how we can work together to serve your clients better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
