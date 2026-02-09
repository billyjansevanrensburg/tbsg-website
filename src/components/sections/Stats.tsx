import { Container } from "../layout/Container";
import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
  highlight?: boolean;
}

interface StatsProps {
  stats: Stat[];
  variant?: "light" | "dark" | "primary";
}

export function Stats({ stats, variant = "light" }: StatsProps) {
  const variants = {
    light: "bg-tbsg-light",
    dark: "bg-tbsg-charcoal text-white",
    primary: "bg-tbsg-primary text-white",
  };

  return (
    <section className={cn("py-10 lg:py-12", variants[variant])}>
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p
                className={cn(
                  "text-4xl lg:text-5xl font-heading font-bold mb-2",
                  stat.highlight
                    ? variant === "light"
                      ? "text-tbsg-green"
                      : "text-tbsg-orange"
                    : variant === "light"
                    ? "text-tbsg-primary"
                    : "text-white"
                )}
              >
                {stat.value}
              </p>
              <p
                className={cn(
                  "text-sm lg:text-base font-medium",
                  variant === "light" ? "text-tbsg-charcoal/60" : "text-white/70"
                )}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
