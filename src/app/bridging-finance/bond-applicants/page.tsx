import { Metadata } from "next";
import { Container, Hero, Stats, Process, FAQ, CTA } from "@/components";

export const metadata: Metadata = {
  title: "Bond Applicant Bridging Finance | Access Funds Before Registration | TBSG",
  description: "Taking a new bond, further loan, or switching banks? Access your approved funds before registration. Fast approval, transparent fees.",
};

const stats = [
  { value: "Fast", label: "Approval Process" },
  { value: "Flexible", label: "Advance Amounts" },
  { value: "R0", label: "Initiation Fee" },
  { value: "10+", label: "Years Experience" },
];

const useCases = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "New Bond / First-Time Buyer",
    description: "Your bond is approved but won't register for weeks. Need funds now for deposits, moving costs, or other expenses.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    title: "Further Loan / Second Bond",
    description: "Accessing additional equity from your property? Bridge the gap between approval and registration.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Bond Switch",
    description: "Switching to a better rate at another bank? Access the difference or cover costs while the switch processes.",
  },
];

const processSteps = [
  { number: 1, title: "Apply Online", description: "Tell us about your approved bond and what you need." },
  { number: 2, title: "Submit Approval Letter", description: "Provide your bank approval letter and supporting documents." },
  { number: 3, title: "Get Approved", description: "We assess your application and confirm your advance." },
  { number: 4, title: "Receive Funds", description: "Funds transferred to your account before bond registration." },
];

const faqs = [
  {
    question: "What types of bonds can I bridge?",
    answer: "We can assist with new purchase bonds, further loans/second bonds, and bond switches. The key requirement is that you have bank approval in place.",
  },
  {
    question: "How much can I advance?",
    answer: "The advance amount depends on your specific situation\u2014the bond amount, property value, and other factors. Contact us for a personalised assessment.",
  },
  {
    question: "Do I need bank approval first?",
    answer: "Yes, you need to have your bond approved by the bank before we can provide bridging. The approval letter is a key document for our assessment.",
  },
  {
    question: "How long until my bond registers?",
    answer: "Bond registration typically takes 4-8 weeks from approval, depending on the bank and attorneys. You only pay for the actual days until registration.",
  },
  {
    question: "What are the costs?",
    answer: "We charge a daily fee on the amount advanced. There are no initiation fees. Contact us for a quote based on your specific situation.",
  },
];

export default function BondApplicantsPage() {
  return (
    <>
      <Hero
        badge="For Bond Applicants"
        title="Access Your Approved Bond Funds\u2014Before Registration"
        subtitle="Your bond is approved but won't register for weeks. Whether it's a new bond, further loan, or switch\u2014we can help you access funds sooner."
        primaryCTA={{ text: "Apply Now", href: "/contact" }}
        secondaryCTA={{ text: "Contact Us", href: "/contact" }}
        variant="gradient"
      />

      <Stats stats={stats} variant="light" />

      {/* Use Cases */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              When Bond Applicant Bridging Helps
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              Different situations, same solution&mdash;access your approved funds faster
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-tbsg-primary/10 rounded-xl flex items-center justify-center mb-6 text-tbsg-primary">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-tbsg-charcoal mb-3">
                  {useCase.title}
                </h3>
                <p className="text-tbsg-charcoal/70">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Process
        title="How to Apply"
        steps={processSteps}
        variant="horizontal"
      />

      <FAQ
        title="Bond Applicant FAQs"
        items={faqs}
      />

      <CTA
        title="Need Bond Applicant Bridging?"
        subtitle="Contact us to discuss your specific situation"
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
