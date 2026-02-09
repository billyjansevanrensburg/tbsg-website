import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Button, Card, FAQ } from "@/components";

export const metadata: Metadata = {
  title: "Welcome AIDA, ERA & Realty 1 Agents | TBSG Partnership",
  description: "Exclusive partnership announcement: Earn up to 0.69% on home loan referrals, 0.2% on commercial bonds, and access commission advances up to 85%. TBSG is now your official finance partner.",
  robots: {
    index: false,
    follow: false,
  },
};

const partnerLogos = [
  { name: "AIDA", src: "/images/partners/aida.png" },
  { name: "ERA", src: "/images/partners/era.png" },
  { name: "Realty 1", src: "/images/partners/realty1.png" },
];

const stats = [
  { value: "0.69%", label: "Residential Referral Fee", highlight: true },
  { value: "0.2%", label: "Commercial Referral Fee", highlight: true },
  { value: "85%", label: "Commission Advance" },
  { value: "6hrs", label: "Fastest Payout" },
];

const earningExamples = [
  { bondAmount: "R1,000,000", residential: "R6,900", commercial: "R2,000" },
  { bondAmount: "R1,500,000", residential: "R10,350", commercial: "R3,000" },
  { bondAmount: "R2,000,000", residential: "R13,800", commercial: "R4,000" },
  { bondAmount: "R3,000,000", residential: "R20,700", commercial: "R6,000" },
  { bondAmount: "R5,000,000", residential: "R34,500", commercial: "R10,000" },
  { bondAmount: "R10,000,000", residential: "R69,000", commercial: "R20,000" },
];

const services = [
  {
    title: "Home Loan Referrals",
    subtitle: "Earn up to 0.69% per bond",
    description: "Refer your buyers for home loans and earn commission when their bond registers. We submit to all major banks to get your clients the best rates.",
    features: [
      "0.69% commission on residential bonds",
      "0.2% commission on commercial bonds",
      "Personal tracking link provided",
      "Daily progress updates on each application",
      "Paid within 7 days of bond registration",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "green",
    cta: { text: "Start Earning", href: "/tools/refer-and-earn" },
  },
  {
    title: "Commission Advances",
    subtitle: "Get up to 85% of your commission early",
    description: "Why wait months for your commission? Access up to 85% of your net commission within 24 hours of approval. Only pay for the days you use.",
    features: [
      "Up to 85% of net commission advanced",
      "Funds typically within 24 hours",
      "Zero initiation fees",
      "No minimum loan period",
      "Repaid automatically at transfer",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "primary",
    cta: { text: "Advance My Commission", href: "/bridging-finance/agents" },
  },
  {
    title: "Seller Bridging Finance",
    subtitle: "Help your sellers access up to 80%",
    description: "Your sellers can access up to 80% of their sale proceeds before transfer. Help them clear rates, pay deposits, or bridge to their next purchase.",
    features: [
      "Up to 80% of net proceeds advanced",
      "Funds in as little as 6 hours",
      "Clear rates arrears quickly",
      "Help with deposit on next property",
      "Happy sellers = more referrals",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: "secondary",
    cta: { text: "Learn More", href: "/bridging-finance/sellers" },
  },
];

const steps = [
  {
    number: 1,
    title: "Quick Intro Call",
    description: "We\u2019ll explain the partnership, answer your questions, and show you how to maximize your earnings.",
  },
  {
    number: 2,
    title: "Sign Up",
    description: "Complete a simple registration. Takes less than 5 minutes.",
  },
  {
    number: 3,
    title: "Get Your Personal Link",
    description: "Receive your unique referral link that tracks all your submissions automatically.",
  },
  {
    number: 4,
    title: "Start Referring",
    description: "Send buyers to us for home loans. We handle everything and keep you updated daily.",
  },
  {
    number: 5,
    title: "Get Paid",
    description: "Earn 0.69% (residential) or 0.2% (commercial) when bonds register. Paid within 7 days.",
  },
];

const faqs = [
  {
    question: "What is this partnership about?",
    answer: "Your agency head office has partnered with TBSG to give you exclusive access to our referral programme and finance services. This means you can now earn additional income by referring your buyers for home loans, while also accessing commission advances and helping your sellers with bridging finance.",
  },
  {
    question: "How much can I earn per referral?",
    answer: "You earn 0.69% of the bond amount on residential home loans, and 0.2% on commercial property loans. For example, on a R2 million residential bond, you\u2019d earn R13,800. On larger bonds, you could earn R69,000 or more. There\u2019s no cap on how many referrals you can make.",
  },
  {
    question: "When do I get paid?",
    answer: "You get paid within 7 days of the bond registering at the Deeds Office. We\u2019ll keep you updated throughout the process with daily status updates on each application.",
  },
  {
    question: "Do I need special registration or licensing?",
    answer: "No special registration is required. As part of this partnership, you simply sign up with us and we\u2019ll provide you with your personal referral link to track your submissions.",
  },
  {
    question: "How do I track my referrals?",
    answer: "You\u2019ll receive daily email updates on each home loan application you\u2019ve referred, plus weekly summary reports. Your personal referral link automatically tracks everything.",
  },
  {
    question: "What about commission advances?",
    answer: "Separately from the referral programme, you can also advance up to 85% of your sales commission before transfer. This helps with cash flow between deals. You only pay for the days you use the funds.",
  },
  {
    question: "Is TBSG a legitimate company?",
    answer: "Absolutely. TBSG has been operating since 2016 and is a BFASA (Bridging Finance Association of South Africa) member and NCR (National Credit Regulator) registered. Your head office has vetted us as a trusted partner.",
  },
  {
    question: "How do I get started?",
    answer: "Click the \u2018Book Intro Call\u2019 button on this page and we\u2019ll schedule a quick call to get you set up. Or you can go directly to our Refer & Earn page to sign up.",
  },
];

export default function PartnershipLandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-tbsg-primary via-tbsg-primary to-tbsg-secondary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <Container>
          <div className="relative">
            {/* Partnership Badge */}
            <div className="text-center mb-8">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 text-white text-sm font-semibold backdrop-blur-sm">
                Official Partnership Announcement
              </span>
            </div>

            {/* Partner Logos */}
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 mb-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              {partnerLogos.map((logo, index) => (
                <div key={logo.name} className="flex items-center">
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={160}
                      height={80}
                      className="h-16 lg:h-20 w-auto object-contain"
                    />
                  </div>
                  {index < partnerLogos.length - 1 && (
                    <span className="hidden lg:block text-white/40 text-4xl font-light mx-6">&times;</span>
                  )}
                </div>
              ))}
              <div className="flex items-center">
                <span className="hidden lg:block text-white/40 text-4xl font-light mr-6">&times;</span>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <Image
                    src="/images/logos/tbsg-logo.png"
                    alt="TBSG"
                    width={160}
                    height={80}
                    className="h-16 lg:h-20 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Your Agency Just Unlocked a New Income Stream
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-4 font-medium">
                Earn up to <span className="text-tbsg-orange font-bold">R75,000+</span> per home loan referral
              </p>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                AIDA, ERA &amp; Realty 1 have partnered with TBSG to give you exclusive access to our
                referral programme. Refer your buyers for home loans and earn 0.69% of every bond that registers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" href="/tools/refer-and-earn">
                  Start Earning Now
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  href="/contact"
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  Book Intro Call
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-10 lg:py-12 bg-tbsg-light">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className={`text-4xl lg:text-5xl font-heading font-bold mb-2 ${
                  stat.highlight ? "text-tbsg-green" : "text-tbsg-primary"
                }`}>
                  {stat.value}
                </p>
                <p className="text-sm lg:text-base font-medium text-tbsg-charcoal/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What's In It For You */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              Three Ways to Earn More
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              As part of this partnership, you now have access to multiple income streams
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} padding="lg" hover className="flex flex-col h-full">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  service.color === "green" ? "bg-tbsg-green/10 text-tbsg-green" :
                  service.color === "primary" ? "bg-tbsg-primary/10 text-tbsg-primary" :
                  "bg-tbsg-secondary/10 text-tbsg-secondary"
                }`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-heading font-bold text-tbsg-charcoal mb-2">
                  {service.title}
                </h3>
                <p className={`text-lg font-semibold mb-4 ${
                  service.color === "green" ? "text-tbsg-green" :
                  service.color === "primary" ? "text-tbsg-primary" :
                  "text-tbsg-secondary"
                }`}>
                  {service.subtitle}
                </p>
                <p className="text-tbsg-charcoal/70 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-tbsg-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-tbsg-charcoal/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={service.color === "green" ? "primary" : "secondary"}
                  href={service.cta.href}
                  className="w-full"
                >
                  {service.cta.text}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Earnings Table */}
      <section className="py-16 lg:py-24 bg-tbsg-light">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
                See What You Could Earn
              </h2>
              <p className="text-lg text-tbsg-charcoal/70">
                Real examples of referral commissions based on bond amounts
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-tbsg-primary text-white">
                      <th className="px-6 py-4 text-left font-heading font-bold">Bond Amount</th>
                      <th className="px-6 py-4 text-right font-heading font-bold">
                        <span className="block">Residential</span>
                        <span className="text-sm font-normal text-white/70">(0.69%)</span>
                      </th>
                      <th className="px-6 py-4 text-right font-heading font-bold">
                        <span className="block">Commercial</span>
                        <span className="text-sm font-normal text-white/70">(0.2%)</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {earningExamples.map((example, index) => (
                      <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                        <td className="px-6 py-4 font-semibold text-tbsg-charcoal">
                          {example.bondAmount}
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-tbsg-green text-lg">
                          {example.residential}
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-tbsg-secondary text-lg">
                          {example.commercial}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-6 bg-gradient-to-r from-tbsg-green/10 to-tbsg-green/5 border-t border-tbsg-green/20">
                <p className="text-center text-tbsg-charcoal">
                  <span className="font-bold">No limits.</span> Refer as many buyers as you want.
                  Every bond that registers = commission in your pocket.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              How to Get Started
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              Five simple steps to start earning
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Vertical Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-[calc(100%-5rem)] bg-tbsg-primary/20" />
                )}

                <div className="w-16 h-16 bg-tbsg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl font-heading font-bold text-white">
                    {step.number}
                  </span>
                </div>

                <div className="pt-3">
                  <h3 className="font-heading font-bold text-xl text-tbsg-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-tbsg-charcoal/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="primary" size="lg" href="/tools/refer-and-earn">
              Get Started Now
            </Button>
          </div>
        </Container>
      </section>

      {/* Trust Section */}
      <section className="py-12 lg:py-16 bg-tbsg-charcoal">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-6">
              Why Your Head Office Chose TBSG
            </h2>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">BFASA Member</h3>
                <p className="text-white/70 text-sm">Industry body regulated</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">NCR Registered</h3>
                <p className="text-white/70 text-sm">Fully compliant</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">Since 2016</h3>
                <p className="text-white/70 text-sm">10+ years trusted service</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-8">
              <Image
                src="/images/compliance/bfasa.png"
                alt="BFASA Member"
                width={100}
                height={60}
                className="h-12 w-auto brightness-0 invert opacity-70"
              />
              <Image
                src="/images/compliance/ncr.png"
                alt="NCR Registered"
                width={100}
                height={60}
                className="h-12 w-auto brightness-0 invert opacity-70"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <FAQ title="Frequently Asked Questions" items={faqs} />

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-tbsg-green to-emerald-600">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-white/90 mb-4">
              Join your colleagues who are already earning with TBSG
            </p>
            <p className="text-lg text-white/80 mb-10">
              Every buyer you refer is money in your pocket. No limits. No catches.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/tools/refer-and-earn">
                Start Earning Now
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="/contact"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Book Intro Call First
              </Button>
            </div>

            <p className="text-white/60 text-sm mt-8">
              Questions? Call us directly: <a href="tel:+27120042868" className="text-white underline">012 004 2868</a>
            </p>
          </div>
        </Container>
      </section>

      {/* Simple Footer for Landing Page */}
      <footer className="py-8 bg-tbsg-charcoal">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logos/tbsg-logo-white.png"
                alt="TBSG"
                width={120}
                height={35}
                className="h-8 w-auto"
              />
              <span className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} The Bridging Solutions Group
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="tel:+27120042868" className="hover:text-white transition-colors">
                012 004 2868
              </a>
              <a href="mailto:info@tbsg.co.za" className="hover:text-white transition-colors">
                info@tbsg.co.za
              </a>
              <Link href="/" className="hover:text-white transition-colors">
                Main Site
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
