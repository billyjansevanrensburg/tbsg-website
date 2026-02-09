import { Metadata } from "next";
import { Container, Hero, Stats, Process, FAQ, CTA, Button, Card } from "@/components";

export const metadata: Metadata = {
  title: "Apply for a Home Loan | All Major Banks | TBSG",
  description: "Apply for your home loan with TBSG. We submit to all major South African banks and negotiate the best rates. Free service, dedicated support.",
};

const stats = [
  { value: "All", label: "Major Banks" },
  { value: "0.95%", label: "Average Savings", highlight: true },
  { value: "Free", label: "Service" },
  { value: "24-48hr", label: "Initial Response" },
];

const processSteps = [
  { number: 1, title: "Complete Application", description: "Fill in your details, property information, and upload required documents." },
  { number: 2, title: "We Submit to All Banks", description: "Your application goes to ABSA, FNB, Nedbank, Standard Bank, Capitec, Investec, and more." },
  { number: 3, title: "Banks Compete", description: "Banks know they're competing. We negotiate the best rates and terms for you." },
  { number: 4, title: "Choose Your Offer", description: "We present all offers and help you choose the best one for your situation." },
  { number: 5, title: "We Handle the Rest", description: "Coordinate with attorneys, manage conditions, and support you to registration." },
];

const applicationTypes = [
  {
    title: "Buying a Property",
    description: "You've found your dream home and need a bond to purchase it.",
    href: "https://www.kaptain.co.za/tbsg",
    cta: "Apply for Purchase",
    features: ["New purchase", "First-time buyer", "Second property"],
  },
  {
    title: "Refinancing / Switch",
    description: "You want to get a better rate or switch banks on your existing property.",
    href: "https://www.kaptain.co.za/tbsg",
    cta: "Apply to Refinance",
    features: ["Better rate", "Access equity", "Switch banks"],
  },
  {
    title: "Building Loan",
    description: "You're building a new home and need construction finance.",
    href: "/contact",
    cta: "Enquire About Building",
    features: ["New construction", "Progress payments", "Vacant land"],
  },
  {
    title: "Commercial Property",
    description: "Offices, industrial, retail, agricultural, or development finance.",
    href: "/home-loans/commercial",
    cta: "Commercial Loans",
    features: ["Commercial", "Industrial", "Agricultural", "Development"],
  },
];

const faqs = [
  {
    question: "How long does the application process take?",
    answer: "From application to approval typically takes 5-10 working days, depending on the banks and complexity of your application. Registration takes an additional 4-8 weeks.",
  },
  {
    question: "What documents do I need to apply?",
    answer: "Typically: SA ID, 3 months payslips (or 2 years financials if self-employed), 3 months bank statements, signed Offer to Purchase, and proof of residence. We'll provide a detailed checklist.",
  },
  {
    question: "Can I apply if I'm self-employed?",
    answer: "Yes! Self-employed applications require more documentation (2 years financials, tax clearance, etc.) but we work with self-employed buyers every day.",
  },
  {
    question: "What if I have a bad credit score?",
    answer: "We work with all credit profiles. A lower score may affect your rate or deposit requirements, but doesn't automatically mean rejection. Let's discuss your specific situation.",
  },
  {
    question: "Do you charge any fees?",
    answer: "No. Our service is completely free to you. Banks pay us a commission when your bond registers.",
  },
];

export default function ApplyPage() {
  return (
    <>
      <Hero
        badge="Free Service \u2022 All Major Banks"
        title="Apply for Your Home Loan"
        subtitle="One application, all major banks competing for your business. We negotiate the best rates and guide you through to registration."
        primaryCTA={{ text: "Start Application", href: "https://www.kaptain.co.za/tbsg" }}
        secondaryCTA={{ text: "Get Pre-Approved First", href: "/home-loans/get-preapproved" }}
        variant="gradient"
      />

      <Stats stats={stats} variant="light" />

      {/* Application Types */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              What Are You Looking For?
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              Choose the application type that matches your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {applicationTypes.map((type, index) => (
              <Card key={index} hover padding="lg" className="flex flex-col">
                <h3 className="text-xl font-heading font-bold text-tbsg-charcoal mb-3">
                  {type.title}
                </h3>
                <p className="text-tbsg-charcoal/70 mb-4">
                  {type.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {type.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-tbsg-light text-tbsg-charcoal text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button
                  variant="secondary"
                  href={type.href}
                  external={type.href.startsWith("http")}
                  className="w-full mt-auto"
                >
                  {type.cta}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <Process
        title="What Happens After You Apply"
        steps={processSteps}
        variant="vertical"
      />

      {/* Document Checklist */}
      <section className="py-16 lg:py-20 bg-tbsg-light">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
                What You&apos;ll Need
              </h2>
              <p className="text-lg text-tbsg-charcoal/70">
                Gather these documents before you start (we&apos;ll help if anything&apos;s missing)
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="font-heading font-bold text-lg text-tbsg-charcoal mb-4">
                  For Employed Applicants
                </h3>
                <ul className="space-y-3">
                  {[
                    "SA ID document (both sides)",
                    "Latest 3 months payslips",
                    "Latest 3 months bank statements",
                    "Proof of residence (not older than 3 months)",
                    "Signed Offer to Purchase",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-tbsg-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-tbsg-charcoal/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="font-heading font-bold text-lg text-tbsg-charcoal mb-4">
                  For Self-Employed Applicants
                </h3>
                <ul className="space-y-3">
                  {[
                    "SA ID document (both sides)",
                    "2 years audited/reviewed financials",
                    "Latest 6 months business bank statements",
                    "SARS Tax Clearance Certificate",
                    "Company registration documents",
                    "Signed Offer to Purchase",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-tbsg-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-tbsg-charcoal/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FAQ
        title="Application FAQs"
        items={faqs}
      />

      <CTA
        title="Ready to Apply?"
        subtitle="Start your application now and let us find you the best rate"
        primaryCTA={{ text: "Start Application", href: "https://www.kaptain.co.za/tbsg" }}
        secondaryCTA={{ text: "Contact Us", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
