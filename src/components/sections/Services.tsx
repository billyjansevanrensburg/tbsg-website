import { Container } from "../layout/Container";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
  ctaText: string;
}

interface ServicesProps {
  title?: string;
  subtitle?: string;
  services: Service[];
}

export function Services({ title, subtitle, services }: ServicesProps) {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} hover padding="lg" className="flex flex-col">
              <div className="w-14 h-14 bg-tbsg-primary/10 rounded-xl flex items-center justify-center mb-6 text-tbsg-primary">
                {service.icon}
              </div>

              <h3 className="text-2xl font-heading font-bold text-tbsg-charcoal mb-3">
                {service.title}
              </h3>

              <p className="text-tbsg-charcoal/70 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-tbsg-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-tbsg-charcoal/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="secondary" href={service.href} className="w-full">
                {service.ctaText}
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
