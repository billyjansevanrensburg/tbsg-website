import { Metadata } from "next";
import { Container, Hero, Stats, Process, FAQ, Card, Button, PreferredPartners } from "@/components";

export const metadata: Metadata = {
  title: "Partner With TBSG | For Attorneys & Conveyancers | TBSG",
  description: "Help your clients access bridging finance to clear rates arrears, pay levies, or fund deposits. BFASA member, fast turnaround, compliant partner.",
};

const stats = [
  { value: "6hr", label: "Fastest Payout" },
  { value: "80%", label: "Max Seller Advance" },
  { value: "BFASA", label: "Member" },
  { value: "10+", label: "Years Track Record" },
];

const howWeHelp = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Clear Rates Arrears",
    description: "When municipal arrears are blocking transfer, we can advance funds to clear them—often paying the municipality directly.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Fund Levy Arrears",
    description: "Sectional title levy arrears holding up your transfer? We can help your clients clear them quickly.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Bridge to Next Purchase",
    description: "Your client is buying another property but needs funds for the deposit? We can bridge against their sale proceeds.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Keep Transfers Moving",
    description: "When cash flow issues threaten to delay a transfer, bridging finance can keep everything on track.",
  },
];

const processSteps = [
  {
    number: 1,
    title: "Identify the Need",
    description: "Your client needs funds before transfer—rates arrears, deposit, or other expenses."
  },
  {
    number: 2,
    title: "Refer to TBSG",
    description: "Send us the client's details or have them apply directly. We'll take it from there."
  },
  {
    number: 3,
    title: "Quick Assessment",
    description: "We assess the application and provide a quote—usually within hours."
  },
  {
    number: 4,
    title: "Funds Released",
    description: "Once approved, funds are released directly to the client or to pay arrears."
  },
  {
    number: 5,
    title: "Repayment at Transfer",
    description: "The advance is repaid from sale proceeds at transfer. Simple."
  },
];

const faqs = [
  {
    question: "How does TBSG coordinate with our office?",
    answer: "We assign a dedicated contact for attorney partnerships. You'll have direct access via phone and email, and we can work within your existing processes and communication preferences.",
  },
  {
    question: "Can you pay municipalities directly?",
    answer: "Yes. If the bridging is specifically for rates arrears, we can pay the municipality directly and provide you with proof of payment for your file.",
  },
  {
    question: "What if the transfer is delayed?",
    answer: "The client pays only for the days the bridging is in place. If the transfer takes longer than expected, the daily fee continues but there are no penalties. We understand that delays happen.",
  },
  {
    question: "Is there a minimum or maximum amount?",
    answer: "We're flexible on amounts. Typical advances range from R50,000 to several million rand, depending on the transaction. Contact us to discuss your client's specific situation.",
  },
  {
    question: "Are you compliant and registered?",
    answer: "Yes. TBSG is a BFASA (Bridging Finance Association of South Africa) member and NCR registered. We've been operating for over 10 years with a strong compliance track record.",
  },
  {
    question: "How do our clients apply?",
    answer: "They can apply online at tbsg.co.za, or you can send us their details and we'll reach out to them directly. We're happy to work in whatever way suits your practice.",
  },
];

const testimonials = [
  {
    quote: "Thank you for the excellent service.",
    author: "Estelle Rall",
    role: "Secretary - Real Estate",
    company: "Cliffe Dekker Hofmeyr Inc",
  },
  {
    quote: "Ons bedank julle vir die vriendelike diens. Die aansoek was pynloos en maklik.",
    author: "Anica Rudman",
    role: "Senior Conveyancing Secretary",
    company: "Snyman de Jager",
  },
];

export default function AttorneysPage() {
  return (
    <>
      <Hero
        badge="For Attorneys & Conveyancers"
        title="Keep Transfers Moving With Bridging Finance"
        subtitle="When your clients need funds before transfer—to clear rates arrears, pay levies, or fund a deposit—TBSG can help. Fast, compliant, reliable."
        primaryCTA={{ text: "Partner With Us", href: "/contact" }}
        secondaryCTA={{ text: "Refer a Client", href: "/bridging-finance/sellers" }}
        variant="gradient"
      />

      <Stats stats={stats} variant="light" />

      {/* How We Help */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              How We Help Your Clients
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              Common situations where bridging finance keeps your transfers on track
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {howWeHelp.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-14 h-14 bg-tbsg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-tbsg-primary">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-tbsg-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-tbsg-charcoal/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why TBSG */}
      <section className="py-16 lg:py-24 bg-tbsg-light">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
                Why Attorneys Choose TBSG
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "BFASA Member",
                  description: "We adhere to the industry body's code of conduct and best practices.",
                },
                {
                  title: "NCR Registered",
                  description: "Fully compliant with National Credit Regulator requirements.",
                },
                {
                  title: "10+ Years Track Record",
                  description: "A decade of reliable service to the property industry.",
                },
                {
                  title: "Direct Municipality Payments",
                  description: "We can pay arrears directly and provide proof for your file.",
                },
                {
                  title: "Fast Turnaround",
                  description: "Funds released in as little as 6 hours for urgent matters.",
                },
                {
                  title: "Dedicated Support",
                  description: "A real person you can call, not a call centre queue.",
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

      {/* Process */}
      <Process
        title="How It Works"
        subtitle="A simple process designed to fit into your workflow"
        steps={processSteps}
        variant="vertical"
      />

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-tbsg-light">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              What Legal Professionals Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} padding="lg">
                <svg className="w-10 h-10 text-tbsg-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg text-tbsg-charcoal mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="font-heading font-bold text-tbsg-charcoal">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-tbsg-charcoal/60">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Preferred Attorney Partners */}
      <PreferredPartners
        type="attorneys"
        title="Preferred Attorney Partners"
        subtitle="We work closely with leading conveyancing firms"
      />

      <FAQ
        title="Attorney Partner FAQs"
        items={faqs}
      />

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-tbsg-primary to-tbsg-secondary">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Ready to Partner?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let&apos;s discuss how we can support your practice and your clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">
                Contact Us
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="/bridging-finance/sellers"
                className="border-white text-white hover:bg-white hover:text-tbsg-primary"
              >
                Refer a Client Now
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
