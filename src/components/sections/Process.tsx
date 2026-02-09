import { Container } from "../layout/Container";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
  variant?: "horizontal" | "vertical";
}

export function Process({
  title,
  subtitle,
  steps,
  variant = "horizontal",
}: ProcessProps) {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        {(title || subtitle) && (
          <div className="text-center mb-12 lg:mb-16">
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

        {variant === "horizontal" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-tbsg-primary/20" />
                )}

                <div className="text-center lg:text-left">
                  <div className="w-16 h-16 bg-tbsg-primary rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-5 shadow-lg">
                    <span className="text-2xl font-heading font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-tbsg-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-tbsg-charcoal/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Vertical Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-[calc(100%-4rem)] bg-tbsg-primary/20" />
                )}

                <div className="w-16 h-16 bg-tbsg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl font-heading font-bold text-white">
                    {step.number}
                  </span>
                </div>

                <div className="pt-2">
                  <h3 className="font-heading font-bold text-xl text-tbsg-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-tbsg-charcoal/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
