import { Metadata } from "next";
import { Container, Hero, Card } from "@/components";
import { ContactForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Contact Us | TBSG",
  description: "Get in touch with TBSG. We're here to help with bridging finance, home loans, and commercial property finance. Call, email, or send us a message.",
};

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Phone",
    content: "012 004 2868",
    href: "tel:+27120042868",
    description: "Mon-Fri 8am-5pm",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    content: "info@tbsg.co.za",
    href: "mailto:info@tbsg.co.za",
    description: "We respond within 24hrs",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Office",
    content: "Pretoria, Gauteng",
    href: "#",
    description: "South Africa",
  },
];

const quickLinks = [
  { label: "Apply for Bridging Finance", href: "/bridging-finance/sellers" },
  { label: "Get Pre-Approved for Home Loan", href: "/home-loans/get-preapproved" },
  { label: "Commercial Finance Enquiry", href: "/home-loans/commercial" },
  { label: "Refer & Earn Programme", href: "/tools/refer-and-earn" },
  { label: "Partner With Us", href: "/partners" },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        badge="Get In Touch"
        title="We're Here to Help"
        subtitle="Have a question about bridging finance, home loans, or our services? Get in touch and we'll respond within 24 hours—usually much sooner."
        variant="gradient"
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="font-heading font-bold text-2xl text-tbsg-charcoal mb-6">
                Contact Details
              </h2>

              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="flex items-start gap-4 p-4 bg-tbsg-light rounded-xl hover:bg-tbsg-primary/5 transition-colors group"
                >
                  <div className="w-12 h-12 bg-tbsg-primary/10 rounded-lg flex items-center justify-center text-tbsg-primary group-hover:bg-tbsg-primary group-hover:text-white transition-colors">
                    {method.icon}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-tbsg-charcoal">
                      {method.title}
                    </p>
                    <p className="text-tbsg-primary font-medium">
                      {method.content}
                    </p>
                    <p className="text-sm text-tbsg-charcoal/60">
                      {method.description}
                    </p>
                  </div>
                </a>
              ))}

              {/* Quick Links */}
              <div className="pt-6 border-t border-gray-100">
                <h3 className="font-heading font-bold text-lg text-tbsg-charcoal mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-tbsg-charcoal/70 hover:text-tbsg-primary transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card padding="lg">
                <h2 className="font-heading font-bold text-2xl text-tbsg-charcoal mb-2">
                  Send Us a Message
                </h2>
                <p className="text-tbsg-charcoal/70 mb-8">
                  Fill in the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <ContactForm />
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Office Hours */}
      <section className="py-12 bg-tbsg-light">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-xl text-tbsg-charcoal mb-4">
              Office Hours
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-tbsg-charcoal/70">
              <div>
                <p className="font-medium text-tbsg-charcoal">Monday - Friday</p>
                <p>8:00 AM - 5:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-tbsg-charcoal">Saturday - Sunday</p>
                <p>Closed (Email support available)</p>
              </div>
            </div>
            <p className="text-sm text-tbsg-charcoal/60 mt-4">
              We process bridging applications during business hours with payment runs at 10am and 2pm daily.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
