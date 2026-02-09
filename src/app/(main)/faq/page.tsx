import { Metadata } from "next";
import { Container, Hero, FAQ, Button } from "@/components";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | TBSG",
  description: "Find answers to common questions about bridging finance, home loans, and TBSG's services. Can't find what you're looking for? Contact us.",
};

const bridgingFAQs = [
  {
    question: "What is bridging finance?",
    answer: "Bridging finance is a short-term loan that 'bridges' the gap between when you need funds and when you receive them. For property sellers, this means accessing your sale proceeds before the transfer registers. For agents, it means getting your commission before the deal closes.",
  },
  {
    question: "How fast can I get bridging funds?",
    answer: "For straightforward applications with all documents in order, we can release funds in as little as 6 hours. Most applications are processed within 24 hours. We run payment batches at 10am and 2pm daily.",
  },
  {
    question: "How much can I advance as a property seller?",
    answer: "You can advance up to 80% of your net proceeds (sale price minus bond, agent commission, and transfer costs). The exact amount depends on your specific transaction.",
  },
  {
    question: "How much can I advance as an estate agent?",
    answer: "You can advance up to 85% of your net commission (after VAT and agency split). The exact amount depends on the specifics of your deal.",
  },
  {
    question: "What are your bridging fees?",
    answer: "We charge a daily fee calculated on the amount advanced. There are zero initiation fees and no minimum loan period—you only pay for the days you use the funds. Contact us for a personalised quote.",
  },
  {
    question: "What happens if my transfer is delayed?",
    answer: "The client pays only for the days the bridging is in place. If the transfer takes longer than expected, the daily fee continues but there are no penalties. We understand that delays happen.",
  },
];

const homeLoanFAQs = [
  {
    question: "Is your home loan service really free?",
    answer: "Yes, completely free to you. Banks pay us a commission when your bond registers. You get better rates and service at no cost.",
  },
  {
    question: "How do you get better rates than going directly to a bank?",
    answer: "We submit to multiple banks simultaneously, creating competition for your business. Banks know they're competing, so they offer better rates. We also have established relationships and volume that gives us negotiating power.",
  },
  {
    question: "What documents do I need for a home loan?",
    answer: "Typically: SA ID, 3 months payslips (or 2 years financials if self-employed), 3 months bank statements, signed Offer to Purchase, and proof of residence. We'll provide a detailed checklist.",
  },
  {
    question: "How long does pre-approval take?",
    answer: "Online pre-approval takes minutes. Full bank pre-approval typically takes 24-48 hours once we have your documents.",
  },
  {
    question: "Do you handle commercial property loans?",
    answer: "Yes! We're specialists in commercial property finance—offices, industrial, retail, agricultural, and development finance. We structure and place deals from R5 million to R500 million+.",
  },
];

const referEarnFAQs = [
  {
    question: "How much can I earn per referral?",
    answer: "For residential home loans, you earn up to 0.69% of the bond amount. For commercial loans, you earn up to 0.2%. On a R2 million residential bond, that's up to R13,800. On larger bonds, you could earn R75,000 or more.",
  },
  {
    question: "When do I get paid for referrals?",
    answer: "You get paid when the bond registers at the Deeds Office. This typically happens 4-8 weeks after the buyer's loan is approved. We pay within 7 days of registration.",
  },
  {
    question: "Do I need to be registered or licensed to refer?",
    answer: "No special registration is required. Anyone can refer buyers—estate agents, attorneys, financial advisors, or simply friends and family who know people buying property.",
  },
  {
    question: "How do I track my referrals?",
    answer: "You'll receive daily updates on each home loan application you've referred, plus weekly summary reports via email.",
  },
];

const generalFAQs = [
  {
    question: "Is TBSG registered and compliant?",
    answer: "Yes. TBSG is a BFASA (Bridging Finance Association of South Africa) member and NCR (National Credit Regulator) registered. We've been operating for over 10 years with a strong compliance track record.",
  },
  {
    question: "Where are you based?",
    answer: "We're based in Pretoria, Gauteng, but we serve clients across South Africa. Most of our processes are digital, so location is rarely a barrier.",
  },
  {
    question: "How do I contact TBSG?",
    answer: "You can call us on 012 004 2868, email info@tbsg.co.za, or use the contact form on our website. We typically respond within 24 hours, often much sooner.",
  },
  {
    question: "What are your office hours?",
    answer: "Monday to Friday, 8am to 5pm. We process bridging applications during business hours with payment runs at 10am and 2pm daily. Email support is available outside these hours.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Hero
        badge="Help Centre"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services. Can't find what you're looking for? Get in touch—we're happy to help."
        variant="gradient"
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Quick Nav */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <a href="#bridging" className="px-4 py-2 bg-tbsg-light rounded-full text-tbsg-charcoal hover:bg-tbsg-primary hover:text-white transition-colors">
                Bridging Finance
              </a>
              <a href="#home-loans" className="px-4 py-2 bg-tbsg-light rounded-full text-tbsg-charcoal hover:bg-tbsg-primary hover:text-white transition-colors">
                Home Loans
              </a>
              <a href="#refer-earn" className="px-4 py-2 bg-tbsg-light rounded-full text-tbsg-charcoal hover:bg-tbsg-primary hover:text-white transition-colors">
                Refer & Earn
              </a>
              <a href="#general" className="px-4 py-2 bg-tbsg-light rounded-full text-tbsg-charcoal hover:bg-tbsg-primary hover:text-white transition-colors">
                General
              </a>
            </div>

            {/* Bridging FAQs */}
            <div id="bridging" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-heading font-bold text-tbsg-charcoal mb-6 pb-4 border-b border-gray-100">
                Bridging Finance
              </h2>
              <FAQ items={bridgingFAQs} />
            </div>

            {/* Home Loan FAQs */}
            <div id="home-loans" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-heading font-bold text-tbsg-charcoal mb-6 pb-4 border-b border-gray-100">
                Home Loans
              </h2>
              <FAQ items={homeLoanFAQs} />
            </div>

            {/* Refer & Earn FAQs */}
            <div id="refer-earn" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-heading font-bold text-tbsg-charcoal mb-6 pb-4 border-b border-gray-100">
                Refer & Earn
              </h2>
              <FAQ items={referEarnFAQs} />
            </div>

            {/* General FAQs */}
            <div id="general" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-heading font-bold text-tbsg-charcoal mb-6 pb-4 border-b border-gray-100">
                General
              </h2>
              <FAQ items={generalFAQs} />
            </div>
          </div>
        </Container>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 lg:py-20 bg-tbsg-light">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-tbsg-charcoal mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 mb-8">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="/contact">
                Contact Us
              </Button>
              <Button variant="ghost" href="tel:+27120042868">
                Call 012 004 2868
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
