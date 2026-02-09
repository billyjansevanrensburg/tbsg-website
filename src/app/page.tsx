import {
  Hero,
  Stats,
  Services,
  Audiences,
  WhyUs,
  Process,
  Testimonials,
  TrustBadges,
  ReferPromo,
  CTA
} from "@/components";
import { OrganizationJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";

// Icons for services
const BridgingIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const HomeLoansIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

// Stats data
const stats = [
  { value: "10+", label: "Years Track Record" },
  { value: "6hr", label: "Bridging Turnaround" },
  { value: "80%", label: "Seller Advance", highlight: true },
  { value: "0.95%", label: "Better Bond Rates", highlight: true },
];

// Services data
const services = [
  {
    icon: <BridgingIcon />,
    title: "Bridging Finance",
    description: "Fast, transparent bridging finance for property sellers, estate agents, and bond originators. Get funds in as little as 6 hours.",
    features: [
      "Up to 80% advance for sellers",
      "Up to 85% advance for agent commissions",
      "As fast as 6-hour turnaround",
      "Zero initiation fees",
      "No minimum loan period",
    ],
    href: "/bridging-finance",
    ctaText: "Explore Bridging Finance",
  },
  {
    icon: <HomeLoansIcon />,
    title: "Home Loans",
    description: "We submit your application to all major banks, negotiate the best rates, and guide you through to registration. Free service.",
    features: [
      "Submit to all major SA banks",
      "Average 0.95% better interest rate",
      "Free pre-approval in minutes",
      "Dedicated consultant support",
      "Commercial loans available",
    ],
    href: "/home-loans",
    ctaText: "Explore Home Loans",
  },
];

// Audience cards data
const audiences = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Property Sellers",
    description: "Need funds before transfer? Bridge up to 80% of your proceeds in as little as 6 hours.",
    href: "/bridging-finance/sellers",
    color: "primary" as const,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Estate Agents",
    description: "Advance up to 85% of your commission and earn referral fees on home loan applications.",
    href: "/bridging-finance/agents",
    color: "secondary" as const,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Home Buyers",
    description: "Get pre-approved for free. We submit to all banks and negotiate better rates for you.",
    href: "/home-loans/get-preapproved",
    color: "green" as const,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    title: "Attorneys",
    description: "Partner with us to help your clients with bridging finance. Fast, reliable, compliant.",
    href: "/partners/attorneys",
    color: "orange" as const,
  },
];

// Why Us features
const whyUsFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "10+ Years Track Record",
    description: "A decade of experience helping South African property professionals move faster and earn more.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "6-Hour Turnaround",
    description: "Get bridging funds in as little as 6 hours. We move when you need us to.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Fully Transparent",
    description: "No hidden fees, no surprises. Clear pricing and honest communication every step of the way.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Zero Initiation Fees",
    description: "Unlike competitors, we charge no upfront fees. You only pay for the days you use.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "All Major Banks",
    description: "We submit your bond application to all major SA banks and negotiate the best rates for you.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Dedicated Support",
    description: "Personal consultant assigned to your application. Real people, real answers, real fast.",
  },
];

// Process steps
const processSteps = [
  {
    number: 1,
    title: "Apply Online",
    description: "Complete our simple online application. It takes just a few minutes and we'll guide you through every step."
  },
  {
    number: 2,
    title: "Quick Assessment",
    description: "Our team reviews your application and gets back to you within hours\u2014often the same day."
  },
  {
    number: 3,
    title: "Get Approved",
    description: "Once approved, we handle the paperwork and coordinate with all parties involved."
  },
  {
    number: 4,
    title: "Receive Funds",
    description: "Funds are transferred directly to your account. For bridging, this can be as fast as 6 hours."
  },
];

// Testimonials data
const testimonials = [
  {
    quote: "Thank you for the excellent service.",
    author: "Estelle Rall",
    role: "Secretary - Real Estate",
    company: "Cliffe Dekker Hofmeyr Inc",
  },
  {
    quote: "Ons bedank julle vir die vriendelike diens. Die aansoek was pynloos en maklik. (Thank you for the friendly service. The application was painless and easy.)",
    author: "Anica Rudman",
    role: "Senior Conveyancing Secretary",
    company: "Snyman de Jager",
  },
  {
    quote: "I am thrilled that we have worked together. I am most certainly going to chat to you guys again about sellers bridging and also bond origination.",
    author: "Sandy Graham",
    role: "Property Agent",
  },
  {
    quote: "Thank you very much for your email, confirmation and prompt payments \u2013 your level of service and assistance is truly impeccable. TBSG has been a lifesaver these past two months.",
    author: "Happy Client",
    role: "Property Professional",
  },
  {
    quote: "The bridging really assisted us greatly. Thank you again for you and Nicole\u2019s great service and assistance in this matter.",
    author: "Satisfied Customer",
    role: "Property Seller",
  },
  {
    quote: "We have been working with TBSG company over the last few years and they are highly recommended.",
    author: "Long-term Partner",
    role: "Industry Professional",
  },
];

export default function Home() {
  return (
    <>
      <OrganizationJsonLd type="LocalBusiness" />
      <ServiceJsonLd
        name="Bridging Finance"
        description="Fast bridging finance for property sellers and estate agents. Up to 80% advance in as little as 6 hours."
        url="https://tbsg.co.za/bridging-finance"
      />
      <ServiceJsonLd
        name="Home Loans"
        description="Home loan origination with access to all major South African banks. Average 0.95% better rates."
        url="https://tbsg.co.za/home-loans"
      />

      {/* Hero Section */}
      <Hero
        badge="South Africa's Most Transparent Property Finance Partner"
        title="Bridging Finance & Home Loans That Move at Your Speed"
        subtitle="Whether you're a property seller needing funds fast, an agent waiting on commission, or a buyer looking for the best home loan rate\u2014we're here to help you move forward."
        primaryCTA={{ text: "Apply for Bridging", href: "/bridging-finance/sellers" }}
        secondaryCTA={{ text: "Get Pre-Approved", href: "/home-loans/get-preapproved" }}
        variant="gradient"
      />

      {/* Trust Badges */}
      <TrustBadges title="Trusted Partner \u2022 BFASA Member \u2022 Submitting to All Major Banks" />

      {/* Stats Section */}
      <Stats stats={stats} variant="light" />

      {/* Services Section */}
      <Services
        title="What We Do"
        subtitle="Two powerful services designed to help property professionals and buyers move faster"
        services={services}
      />

      {/* Audience Cards */}
      <Audiences
        title="How Can We Help You?"
        subtitle="Select your situation to see how we can assist"
        audiences={audiences}
      />

      {/* Why TBSG */}
      <WhyUs
        title="Why Choose TBSG?"
        subtitle="A decade of experience, thousands of satisfied clients, and a commitment to transparency"
        features={whyUsFeatures}
        columns={3}
      />

      {/* Process Section */}
      <Process
        title="How It Works"
        subtitle="Getting started is simple"
        steps={processSteps}
        variant="horizontal"
      />

      {/* Refer & Earn Promo */}
      <ReferPromo />

      {/* Testimonials */}
      <Testimonials
        title="What Our Clients Say"
        subtitle="Trusted by property professionals across South Africa"
        testimonials={testimonials}
      />

      {/* Final CTA */}
      <CTA
        title="Ready to Get Started?"
        subtitle="Apply now and get a response within hours. Our team is standing by to help you move forward."
        primaryCTA={{ text: "Apply for Bridging", href: "/bridging-finance/sellers" }}
        secondaryCTA={{ text: "Get Pre-Approved", href: "/home-loans/get-preapproved" }}
        variant="gradient"
      />
    </>
  );
}
