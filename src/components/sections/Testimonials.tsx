import { Container } from "../layout/Container";
import { Card } from "../ui/Card";

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export function Testimonials({ title, subtitle, testimonials }: TestimonialsProps) {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hover className="flex flex-col">
              {/* Quote Icon */}
              <svg
                className="w-10 h-10 text-tbsg-secondary/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-tbsg-charcoal/80 mb-6 flex-grow italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="border-t border-gray-100 pt-4">
                <p className="font-heading font-semibold text-tbsg-charcoal">
                  {testimonial.author}
                </p>
                {(testimonial.role || testimonial.company) && (
                  <p className="text-sm text-tbsg-charcoal/60">
                    {testimonial.role}{testimonial.role && testimonial.company && ", "}
                    {testimonial.company}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
