import { Metadata } from "next";
import { Container, Hero, Stats, CTA, Team } from "@/components";

export const metadata: Metadata = {
  title: "About TBSG | Our Story | The Bridging Solutions Group",
  description: "Learn about TBSG - a father-son partnership founded in 2016. 10+ years helping South African property professionals with bridging finance and home loans.",
};

const stats = [
  { value: "2016", label: "Founded" },
  { value: "10+", label: "Years Experience" },
  { value: "BFASA", label: "Member" },
  { value: "NCR", label: "Registered" },
];

const values = [
  {
    title: "Transparency",
    description: "No hidden fees, no surprises. We believe in clear pricing and honest communication. You'll always know exactly what you're paying and why.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Speed",
    description: "Time matters in property transactions. We've built our processes to move fast—as little as 6 hours for bridging finance when you need it most.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Relationships",
    description: "We're not a faceless corporation. We're real people who build real relationships. When you call, you talk to someone who knows your name.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description: "We're committed to doing things right. From compliance to customer service, we hold ourselves to a high standard—and we keep raising the bar.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const milestones = [
  { year: "2016", event: "TBSG founded as a father-son partnership" },
  { year: "2017", event: "Expanded bridging finance offerings" },
  { year: "2018", event: "Launched bond origination services" },
  { year: "2020", event: "Navigated COVID-19, supporting clients through uncertainty" },
  { year: "2022", event: "Expanded commercial finance capabilities" },
  { year: "2024", event: "Continued growth and technology investment" },
  { year: "2025", event: "Launched new digital platform and expanded services" },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        badge="About TBSG"
        title="Property Finance With a Personal Touch"
        subtitle="We're The Bridging Solutions Group—a family business helping South African property professionals move faster and earn more since 2016."
        variant="gradient"
      />

      <Stats stats={stats} variant="light" />

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-6 text-center">
              Our Story
            </h2>

            <div className="prose prose-lg max-w-none text-tbsg-charcoal/80">
              <p>
                TBSG was founded in 2016 as a father-son partnership with a simple belief:
                property finance should be fast, transparent, and personal.
              </p>

              <p>
                We saw too many property professionals—sellers waiting months for their proceeds,
                agents struggling with cash flow between deals, and buyers confused by the bond process—
                being let down by slow, impersonal service.
              </p>

              <p>
                So we built something different. A company where decisions are made quickly,
                where you talk to real people who know your name, and where transparency isn&apos;t
                just a marketing word—it&apos;s how we operate every day.
              </p>

              <p>
                Today, we&apos;re proud to be one of South Africa&apos;s trusted bridging finance and
                bond origination partners. We&apos;re BFASA members, NCR registered, and committed
                to the same values we started with: speed, transparency, and genuine relationships.
              </p>

              <p>
                We&apos;re still a small team—and that&apos;s intentional. It means when you work with us,
                you&apos;re not a number in a system. You&apos;re a client we genuinely want to help succeed.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <Team
        title="Meet the Team"
        subtitle="A small team that delivers big results"
      />

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-tbsg-light">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              The values that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-14 h-14 bg-tbsg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-tbsg-primary">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-tbsg-charcoal mb-2">
                    {value.title}
                  </h3>
                  <p className="text-tbsg-charcoal/70">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-12 text-center">
              Our Journey
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-tbsg-primary/20 -translate-x-1/2" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-tbsg-primary rounded-full -translate-x-1/2 z-10" />

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <span className="inline-block px-3 py-1 bg-tbsg-primary text-white text-sm font-bold rounded-full mb-2">
                        {milestone.year}
                      </span>
                      <p className="text-tbsg-charcoal/80">
                        {milestone.event}
                      </p>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Compliance */}
      <section className="py-16 lg:py-20 bg-tbsg-primary">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
              Compliance & Credentials
            </h2>
            <p className="text-lg text-white/80 mb-8">
              We take compliance seriously. When you work with TBSG, you&apos;re working with a
              registered, regulated, and reputable partner.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  BFASA Member
                </h3>
                <p className="text-white/70 text-sm">
                  Member of the Bridging Finance Association of South Africa.
                  We adhere to the industry body&apos;s code of conduct and best practices.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  NCR Registered
                </h3>
                <p className="text-white/70 text-sm">
                  Registered with the National Credit Regulator.
                  Fully compliant with South African credit legislation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Ready to Work With Us?"
        subtitle="Get in touch and experience property finance done differently."
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
        secondaryCTA={{ text: "Apply Now", href: "/bridging-finance/sellers" }}
        variant="gradient"
      />
    </>
  );
}
