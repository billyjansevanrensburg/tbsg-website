import Link from "next/link";
import { Container } from "../layout/Container";
import { cn } from "@/lib/utils";

interface Audience {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  color: "primary" | "secondary" | "green" | "orange";
}

interface AudiencesProps {
  title?: string;
  subtitle?: string;
  audiences: Audience[];
}

export function Audiences({ title, subtitle, audiences }: AudiencesProps) {
  const colors = {
    primary: "bg-tbsg-primary",
    secondary: "bg-tbsg-secondary",
    green: "bg-tbsg-green",
    orange: "bg-tbsg-orange",
  };

  return (
    <section className="py-16 lg:py-24 bg-tbsg-light">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <Link
              key={index}
              href={audience.href}
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-tbsg-secondary/30 transition-all duration-300"
            >
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white transition-transform group-hover:scale-110",
                colors[audience.color]
              )}>
                {audience.icon}
              </div>

              <h3 className="text-lg font-heading font-bold text-tbsg-charcoal mb-2 group-hover:text-tbsg-primary transition-colors">
                {audience.title}
              </h3>

              <p className="text-sm text-tbsg-charcoal/70 mb-4">
                {audience.description}
              </p>

              <span className="inline-flex items-center text-sm font-semibold text-tbsg-primary group-hover:gap-2 transition-all">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
