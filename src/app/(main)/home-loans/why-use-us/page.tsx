import { Metadata } from "next";
import { Container, Hero, Stats, FAQ, CTA, WhyUs, Testimonials, Button } from "@/components";

export const metadata: Metadata = {
  title: "Why Use TBSG for Your Home Loan | Better Rates, Free Service",
  description: "Why use a bond originator? We submit to all banks, negotiate better rates, and guide you through to registration. Free service that saves you money.",
};

const stats = [
  { value: "0.95%", label: "Average Rate Savings", highlight: true },
  { value: "All", label: "Major Banks" },
  { value: "Free", label: "Our Service" },
  { value: "10+", label: "Years Experience" },
];

const comparisons = [
  {
    category: "Bank Applications",
    directToBank: "Submit separately to each bank",
    withTBSG: "One application to all banks simultaneously",
  },
  {
    category: "Rate Negotiation",
    directToBank: "Accept the rate offered",
    withTBSG: "Banks compete, we negotiate the best rate",
  },
  {
    category: "Average Interest Rate",
    directToBank: "Bank's standard rate",
    withTBSG: "0.95% better on average",
  },
  {
    category: "Time Investment",
    directToBank: "Multiple applications, multiple follow-ups",
    withTBSG: "One application, one point of contact",
  },
  {
    category: "Cost to You",
    directToBank: "Free (but higher rates)",
    withTBSG: "Free (and lower rates)",
  },
  {
    category: "Support to Registration",
    directToBank: "Bank's standard process",
    withTBSG: "Dedicated consultant throughout",
  },
];

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Competition Drives Better Rates",
    description: "When banks know they're competing, they offer better rates. We create that competition by submitting to all banks simultaneously.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Save Time",
    description: "One application instead of many. One point of contact instead of chasing multiple banks. We handle the admin so you don't have to.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "Expert Guidance",
    description: "We've processed thousands of applications. We know what banks look for and how to present your application for the best outcome.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Support to Registration",
    description: "We don't disappear after approval. Your consultant guides you through conditions, coordinates with attorneys, and supports you to registration.",
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

const faqs = [
  {
    question: "How do you make money if your service is free?",
    answer: "Banks pay originators a commission when a bond registers. This is built into the banking system\u2014whether you use an originator or not, the bank has budgeted for it. So you get our service free, and you get better rates too.",
  },
  {
    question: "Can't I negotiate my own rate directly with a bank?",
    answer: "You can try, but banks know that going direct means they're not competing. Our clients consistently get better rates because banks know they're competing against other banks for your business.",
  },
  {
    question: "Will using an originator slow down my application?",
    answer: "No, quite the opposite. Because we submit to all banks simultaneously and have established relationships, applications often process faster. We also chase up on your behalf.",
  },
  {
    question: "What if I already have a relationship with a bank?",
    answer: "Great! We can still include them in the process. They'll need to compete with other banks, which often results in them offering you a better rate than they would otherwise.",
  },
];

export default function WhyUseUsPage() {
  return (
    <>
      <Hero
        badge="Free Service That Saves You Money"
        title="Why Use TBSG for Your Home Loan?"
        subtitle="Better rates, less hassle, expert guidance\u2014all at no cost to you. Here's why thousands of South Africans trust us with their home loans."
        primaryCTA={{ text: "Get Pre-Approved", href: "/home-loans/get-preapproved" }}
        secondaryCTA={{ text: "Apply Now", href: "/home-loans/apply" }}
        variant="gradient"
      />

      <Stats stats={stats} variant="light" />

      {/* Comparison Table */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              Direct vs. With TBSG
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              See the difference when banks compete for your business
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-tbsg-primary">
                  <th className="text-left py-4 px-4 font-heading font-bold text-tbsg-charcoal"></th>
                  <th className="text-left py-4 px-4 font-heading font-bold text-tbsg-charcoal">Going Direct to Bank</th>
                  <th className="text-left py-4 px-4 font-heading font-bold text-tbsg-primary">With TBSG</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-tbsg-charcoal">{row.category}</td>
                    <td className="py-4 px-4 text-tbsg-charcoal/70">{row.directToBank}</td>
                    <td className="py-4 px-4 text-tbsg-green font-medium">{row.withTBSG}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <WhyUs
        title="The TBSG Advantage"
        features={benefits}
        columns={2}
      />

      {/* Savings Calculator Preview */}
      <section className="py-16 lg:py-20 bg-tbsg-light">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
                  What Does 0.95% Actually Save You?
                </h2>
                <p className="text-lg text-tbsg-charcoal/70 mb-6">
                  On a R2 million bond over 20 years, 0.95% lower interest rate saves you:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-tbsg-green/10 rounded-full flex items-center justify-center">
                      <span className="text-tbsg-green font-bold">R</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-2xl text-tbsg-charcoal">R1,200+</p>
                      <p className="text-tbsg-charcoal/70">Per month on repayments</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-tbsg-green/10 rounded-full flex items-center justify-center">
                      <span className="text-tbsg-green font-bold">R</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-2xl text-tbsg-charcoal">R290,000+</p>
                      <p className="text-tbsg-charcoal/70">Over the life of the loan</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-heading font-bold text-xl text-tbsg-charcoal mb-6">
                  Want to See Your Savings?
                </h3>
                <p className="text-tbsg-charcoal/70 mb-6">
                  Use our affordability calculator to see how much you could save with a better rate.
                </p>
                <Button variant="secondary" href="/tools/affordability-calculator" className="w-full">
                  Calculate Your Savings
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Testimonials
        title="What Our Clients Say"
        testimonials={testimonials}
      />

      <FAQ
        title="Common Questions"
        items={faqs}
      />

      <CTA
        title="Ready to Get a Better Rate?"
        subtitle="Let us show you what banks will offer when they have to compete"
        primaryCTA={{ text: "Get Pre-Approved", href: "/home-loans/get-preapproved" }}
        secondaryCTA={{ text: "Apply Now", href: "/home-loans/apply" }}
        variant="gradient"
      />
    </>
  );
}
