import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

interface CTAProps {
  title: string;
  subtitle?: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: "primary" | "secondary" | "gradient";
}

export function CTA({ title, subtitle, primaryCTA, secondaryCTA, variant = "primary" }: CTAProps) {
  const variants = {
    primary: "bg-tbsg-primary",
    secondary: "bg-tbsg-secondary",
    gradient: "bg-gradient-to-r from-tbsg-primary to-tbsg-secondary",
  };

  return (
    <section className={cn("py-16 lg:py-20", variants[variant])}>
      <Container>
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href={primaryCTA.href}>
              {primaryCTA.text}
            </Button>
            {secondaryCTA && (
              <Button variant="ghost" size="lg" href={secondaryCTA.href} className="text-white border-white/30 hover:bg-white/10">
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
