import { Metadata } from "next";
import { Container, Hero, Stats, Process, FAQ, Card, Button } from "@/components";

export const metadata: Metadata = {
  title: "Commercial Property Finance South Africa | TBSG",
  description: "Specialist commercial property finance for South African businesses. Commercial, industrial, agricultural, and development loans. Expert structuring and lender matching.",
};

const stats = [
  { value: "R5M+", label: "To R500M+" },
  { value: "50-90%", label: "Typical LTV" },
  { value: "5-15yr", label: "Loan Terms" },
  { value: "10+", label: "Lender Partners" },
];

const audiences = [
  {
    title: "Small & Medium Business Owners",
    turnover: "R0 \u2013 R60 million",
    description: "Looking to buy your own premises instead of renting, expand into new locations, or refinance existing property to free up working capital.",
    needs: "Guidance through the process and help presenting the deal to the right lender.",
  },
  {
    title: "Property Investors & Commercial Landlords",
    turnover: "Various",
    description: "Buying office, retail, industrial or mixed-use investment properties. Portfolio-level thinking, refinancing, equity release.",
    needs: "Creative structures, higher LTV options, and portfolio financing.",
  },
  {
    title: "Developers & Project Sponsors",
    turnover: "Various",
    description: "Need development finance, construction facilities and \u2018mother bond\u2019 structures that cover land plus build.",
    needs: "Milestone-based drawdowns, interest-only during construction, clear exit strategies.",
  },
  {
    title: "Agricultural Operators & Agribusiness",
    turnover: "Various",
    description: "Commercial farmers and agribusinesses buying farms, production units or agribusiness properties.",
    needs: "Longer terms, seasonal repayment structures, specialist agricultural funding.",
  },
];

const solutions = [
  {
    title: "Commercial Property Finance",
    description: "For income-generating business and investment properties: offices, retail centres, mixed-use, and similar.",
    features: [
      "Typical LTV: 50\u201390% depending on property type, tenant strength, location",
      "Terms usually up to 10 years (shorter than residential)",
      "Rates generally 1\u20133% above prime, reflecting commercial risk",
      "Suits owner-occupiers and investors buying or refinancing",
    ],
  },
  {
    title: "Industrial Property Finance",
    description: "For warehouses, factories and logistics facilities supporting manufacturing and supply chains.",
    features: [
      "LTV typically 50\u201390% depending on property, leases and location",
      "Terms around 5\u201310 years",
      "Often asset-backed with property (and sometimes equipment) as security",
      "Focus on tenant quality, covenant strength, and operational suitability",
    ],
  },
  {
    title: "Agricultural Property Finance",
    description: "For farms, production units and agribusiness properties.",
    features: [
      "Longer repayment terms (often 10\u201315 years negotiable)",
      "Seasonal or flexible repayment options aligned to harvest/income cycles",
      "Ability to combine property, equipment and operational funding",
      "May access specialist or government-linked financing channels",
    ],
  },
  {
    title: "Development Finance",
    description: "Short-term funding for new developments, major renovations or conversions.",
    features: [
      "Short-term (typically 6\u201324 months) aligned with build programme",
      "Progressive / milestone-based drawdowns",
      "Interest normally charged on drawn funds only",
      "Clear expectation of exit: sale, refinance or term loan conversion",
    ],
  },
];

const businessSegments = [
  {
    segment: "Small Business",
    turnover: "\u00B1R0\u2013R5 million",
    needs: "First business premises, moving from renting to owning, smaller investment deals",
    approach: [
      "Simplified guidance and education through the process",
      "More support with documentation and preparing the application",
      "Often \u00B170\u201375% LTV with 25\u201330% deposit",
      "May require personal guarantees or additional security",
    ],
  },
  {
    segment: "Medium Business",
    turnover: "\u00B1R5\u2013R60 million",
    needs: "Expansion, multiple branches, larger investment properties, sophisticated capital planning",
    approach: [
      "Tailored structures (e.g. term loans plus facilities)",
      "Higher potential LTV (up to around 80% for strong deals)",
      "More competitive pricing based on strength of financials",
      "Options like asset-based and cash-flow lending, portfolio financing",
    ],
  },
  {
    segment: "Large Enterprise",
    turnover: "\u00B1R60 million+",
    needs: "Portfolio financing, large development projects, complex structures with multiple entities",
    approach: [
      "Complex deal structuring: multiple tranches, syndications, offshore funding",
      "Single facilities covering multiple properties or portfolios",
      "Integration with treasury, cash management and banking relationships",
      "Robust modelling, structuring and negotiation",
    ],
  },
];

const whyTBSG = [
  {
    title: "Better Structures, Not Just Better Rates",
    description: "We focus on getting the structure right for your business\u2014LTV, terms, covenants\u2014not just chasing the lowest rate.",
  },
  {
    title: "Higher Approval Probability",
    description: "Correct packaging and lender selection significantly increases your chances of approval.",
  },
  {
    title: "Time Saved",
    description: "Deal with one expert partner instead of approaching multiple banks yourself.",
  },
  {
    title: "Expert Guidance",
    description: "We advise on LTV, terms, covenants and conditions that fit your business reality.",
  },
  {
    title: "End-to-End Support",
    description: "From early feasibility assessment through to payout and beyond.",
  },
];

const eligibilityCriteria = [
  "Trading history and financial track record of the business",
  "Quality of financial statements, management accounts and cash-flow projections",
  "Credit history of the business and key individuals",
  "Property fundamentals: type, location, condition, and income profile",
  "Debt service coverage and affordability",
  "Structure: who owns the property, who operates the business, security arrangements",
];

const processSteps = [
  { number: 1, title: "Discovery & Feasibility", description: "Understand your business, the property and your objectives. High-level sense-check of affordability, structure and likely funding route." },
  { number: 2, title: "Documentation & Preparation", description: "Help you compile the right financial and property information. Package the opportunity in a way that speaks the lender\u2019s language." },
  { number: 3, title: "Lender Matching & Structuring", description: "Identify the most suitable banks/specialist lenders for your deal. Agree on proposed LTV, terms, covenants and repayment structure." },
  { number: 4, title: "Submission & Negotiation", description: "Submit, motivate and engage with lenders on your behalf. Help negotiate terms and deal with conditions or information requests." },
  { number: 5, title: "Approval, Signing & Payout", description: "Support through approval, legal and signing process. Coordinate with attorneys and other parties to disbursement." },
];

const faqs = [
  {
    question: "What's the difference between commercial and residential property finance?",
    answer: "Commercial loans typically have shorter terms (5-10 years vs 20-30 years), higher interest rates (1-3% above prime), stricter income verification requirements, and more focus on the property's income-generating ability. They also require larger deposits (usually 10-50% vs 0-10% for residential).",
  },
  {
    question: "How much deposit do I typically need for a commercial property?",
    answer: "Typically 10-50% depending on the property type, your business strength, and the lender. Strong deals with quality tenants and good financials may achieve up to 90% LTV. We can sometimes access specialist lenders that go even higher with additional security.",
  },
  {
    question: "Can my business buy the property while another entity operates from it?",
    answer: "Yes, this is common. We help structure deals with property-holding companies (PropCos) separate from operating companies (OpCos). The key is demonstrating that the rental income or lease arrangement can service the debt.",
  },
  {
    question: "How long does a commercial loan typically take to approve and register?",
    answer: "Approval typically takes 2-6 weeks depending on complexity and documentation readiness. Registration adds another 4-8 weeks. Development finance can take longer due to additional due diligence.",
  },
  {
    question: "Can I refinance an existing commercial property to access equity?",
    answer: "Yes. If your property has increased in value or your debt has reduced, you may be able to refinance to a higher amount and access the difference. We can assess your situation and identify the best refinancing options.",
  },
  {
    question: "Do you only work with certain banks or lenders?",
    answer: "No. We work with all major banks plus specialist commercial and development lenders. We match your deal to the most appropriate lender based on property type, loan size, your business profile, and specific requirements.",
  },
  {
    question: "Is there a cost to engage TBSG, and how are you paid?",
    answer: "Our consultation and application service is free. We're paid by the lender when your loan is approved and drawn. In some complex cases, there may be structuring fees\u2014we'll always be upfront about any costs.",
  },
];

export default function CommercialLoansPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        badge="Specialist Commercial Finance Partner"
        title="Commercial Property Finance for South African Businesses"
        subtitle="End-to-end structuring, packaging and placement of commercial, industrial, agricultural and development finance\u2014tailored to your business, not the bank\u2019s template."
        primaryCTA={{ text: "Request a Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Download Checklist", href: "/contact" }}
        variant="gradient"
      />

      <Stats stats={stats} variant="light" />

      {/* Who This Is For */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              Who This Is For
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              We work with businesses across the spectrum&mdash;from first-time commercial buyers to large portfolio investors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {audiences.map((audience, index) => (
              <Card key={index} padding="lg" hover>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-tbsg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-heading font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-tbsg-charcoal mb-1">
                      {audience.title}
                    </h3>
                    <p className="text-sm text-tbsg-secondary font-medium mb-3">
                      {audience.turnover}
                    </p>
                    <p className="text-tbsg-charcoal/70 mb-3">
                      {audience.description}
                    </p>
                    <p className="text-sm text-tbsg-charcoal/60 italic">
                      <strong>Need:</strong> {audience.needs}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Solutions */}
      <section className="py-16 lg:py-24 bg-tbsg-light">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              Commercial Finance Solutions
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              We structure and place finance across all commercial property types
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="font-heading font-bold text-xl text-tbsg-charcoal mb-3">
                  {solution.title}
                </h3>
                <p className="text-tbsg-charcoal/70 mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-tbsg-charcoal/80">
                      <svg className="w-4 h-4 text-tbsg-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Business Size Segmentation */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              Tailored to Your Business Size
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              We match funding structures to business size and complexity, not just property type
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {businessSegments.map((segment, index) => (
              <Card key={index} padding="lg" className="flex flex-col">
                <div className="mb-4">
                  <h3 className="font-heading font-bold text-xl text-tbsg-charcoal">
                    {segment.segment}
                  </h3>
                  <p className="text-tbsg-secondary font-medium">
                    {segment.turnover} turnover
                  </p>
                </div>
                <p className="text-sm text-tbsg-charcoal/70 mb-4">
                  <strong>Typical needs:</strong> {segment.needs}
                </p>
                <div className="flex-grow">
                  <p className="text-sm font-medium text-tbsg-charcoal mb-2">Our approach:</p>
                  <ul className="space-y-2">
                    {segment.approach.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-tbsg-charcoal/70">
                        <svg className="w-4 h-4 text-tbsg-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-tbsg-secondary/10 rounded-xl text-center">
            <p className="text-tbsg-charcoal">
              <strong>Note:</strong> We can access specialist lenders that in some cases go up to very high LTV (even near 100%) when the deal warrants it and additional security is provided.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 lg:py-24 bg-tbsg-primary text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Why Work With a Specialist Partner?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We focus on getting you the right structure, not just any approval
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyTBSG.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What Lenders Look At */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
                What Lenders Look At
              </h2>
              <p className="text-lg text-tbsg-charcoal/70">
                Exact requirements vary by lender, but we guide you through all of these
              </p>
            </div>

            <div className="bg-tbsg-light rounded-2xl p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-6">
                {eligibilityCriteria.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-tbsg-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-tbsg-charcoal/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-tbsg-charcoal/70 italic">
                  &ldquo;Not sure if you qualify? We&rsquo;ll help you assess your position and explore realistic funding options.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Process
        title="Our Process"
        subtitle="From initial discussion to funds in your account"
        steps={processSteps}
        variant="vertical"
      />

      <FAQ
        title="Commercial Finance FAQs"
        subtitle="Common questions about commercial property finance"
        items={faqs}
      />

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-tbsg-primary to-tbsg-secondary">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Get Commercial Finance That&apos;s Structured Around Your Business
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Not the other way round.
            </p>
            <ul className="flex flex-wrap justify-center gap-4 mb-8 text-white/80">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Specialist commercial finance expertise
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Multiple lenders, one expert partner
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Support from assessment to payout
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">
                Book a Commercial Finance Consultation
              </Button>
            </div>
            <p className="text-sm text-white/60 mt-4">
              No-obligation &bull; Confidential
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
