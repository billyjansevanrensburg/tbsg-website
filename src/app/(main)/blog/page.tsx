import { Metadata } from "next";
import { Container, Hero, Card, Button } from "@/components";

export const metadata: Metadata = {
  title: "Blog | Property Finance Insights | TBSG",
  description: "Insights, guides, and news about bridging finance, home loans, and the South African property market from TBSG.",
};

// Placeholder posts - these would come from a CMS in production
const placeholderPosts = [
  {
    title: "Understanding Bridging Finance: A Complete Guide",
    excerpt: "Everything you need to know about bridging finance in South Africa—what it is, how it works, and when to use it.",
    category: "Bridging Finance",
    date: "Coming Soon",
    image: null,
  },
  {
    title: "How to Get the Best Home Loan Rate in 2025",
    excerpt: "Tips and strategies for securing the lowest possible interest rate on your South African home loan.",
    category: "Home Loans",
    date: "Coming Soon",
    image: null,
  },
  {
    title: "Estate Agent's Guide to Commission Advances",
    excerpt: "How to improve your cash flow as an estate agent using commission advances—without the stress.",
    category: "For Agents",
    date: "Coming Soon",
    image: null,
  },
  {
    title: "Commercial Property Finance: What You Need to Know",
    excerpt: "A comprehensive overview of commercial property finance options for South African businesses.",
    category: "Commercial",
    date: "Coming Soon",
    image: null,
  },
];

export default function BlogPage() {
  return (
    <>
      <Hero
        badge="TBSG Blog"
        title="Property Finance Insights"
        subtitle="Guides, tips, and news to help you navigate bridging finance, home loans, and the South African property market."
        variant="gradient"
      />

      <section className="py-16 lg:py-24">
        <Container>
          {/* Coming Soon Notice */}
          <div className="max-w-2xl mx-auto text-center mb-12 p-8 bg-tbsg-light rounded-2xl">
            <div className="w-16 h-16 bg-tbsg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-tbsg-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 className="font-heading font-bold text-2xl text-tbsg-charcoal mb-2">
              Blog Coming Soon
            </h2>
            <p className="text-tbsg-charcoal/70 mb-6">
              We&apos;re working on helpful content about bridging finance, home loans, and property investment.
              Check back soon or contact us if you have questions in the meantime.
            </p>
            <Button variant="primary" href="/contact">
              Contact Us Instead
            </Button>
          </div>

          {/* Preview Posts */}
          <div className="max-w-5xl mx-auto">
            <h3 className="font-heading font-bold text-xl text-tbsg-charcoal mb-6 text-center">
              Coming Up
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {placeholderPosts.map((post, index) => (
                <Card key={index} padding="md" className="opacity-60">
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="inline-block px-2 py-1 bg-tbsg-light text-tbsg-charcoal/60 text-xs rounded mb-2">
                    {post.category}
                  </span>
                  <h4 className="font-heading font-bold text-lg text-tbsg-charcoal mb-2">
                    {post.title}
                  </h4>
                  <p className="text-sm text-tbsg-charcoal/60 mb-4">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-tbsg-charcoal/40">
                    {post.date}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter Signup Placeholder */}
      <section className="py-16 lg:py-20 bg-tbsg-primary">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Get Notified When We Launch
            </h2>
            <p className="text-white/80 mb-8">
              Be the first to know when our blog goes live. We&apos;ll also send you our best
              property finance tips and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
                disabled
              />
              <Button variant="primary" disabled className="opacity-50 cursor-not-allowed">
                Coming Soon
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
