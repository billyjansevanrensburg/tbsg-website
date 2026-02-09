import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { cn } from "@/lib/utils";

interface HeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: "default" | "gradient" | "light";
  centered?: boolean;
}

export function Hero({
  badge,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  variant = "default",
  centered = true,
}: HeroProps) {
  const variants = {
    default: "bg-white",
    gradient: "bg-gradient-to-br from-tbsg-primary via-tbsg-primary to-tbsg-secondary text-white",
    light: "bg-tbsg-light",
  };

  const isGradient = variant === "gradient";

  return (
    <section className={cn("py-16 lg:py-24", variants[variant])}>
      <Container>
        <div className={cn("max-w-4xl", centered && "mx-auto text-center")}>
          {badge && (
            <Badge variant={isGradient ? "secondary" : "primary"} className="mb-6">
              {badge}
            </Badge>
          )}

          <h1
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight",
              isGradient ? "text-white" : "text-tbsg-charcoal"
            )}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className={cn(
                "text-lg lg:text-xl mb-10 max-w-3xl leading-relaxed",
                centered && "mx-auto",
                isGradient ? "text-white/90" : "text-tbsg-charcoal/70"
              )}
            >
              {subtitle}
            </p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <div
              className={cn(
                "flex flex-col sm:flex-row gap-4",
                centered && "justify-center"
              )}
            >
              {primaryCTA && (
                <Button
                  variant={isGradient ? "secondary" : "primary"}
                  size="lg"
                  href={primaryCTA.href}
                >
                  {primaryCTA.text}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  variant="ghost"
                  size="lg"
                  href={secondaryCTA.href}
                  className={isGradient ? "text-white border-white/30 hover:bg-white/10" : ""}
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
