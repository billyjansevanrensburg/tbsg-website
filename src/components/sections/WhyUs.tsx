import { Container } from "../layout/Container";
import { cn } from "@/lib/utils";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WhyUsProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export function WhyUs({ title, subtitle, features, columns = 3 }: WhyUsProps) {
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

        <div className={cn(
          "grid gap-8",
          columns === 2 && "md:grid-cols-2",
          columns === 3 && "md:grid-cols-2 lg:grid-cols-3",
          columns === 4 && "sm:grid-cols-2 lg:grid-cols-4"
        )}>
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-tbsg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-tbsg-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-tbsg-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-tbsg-charcoal/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
