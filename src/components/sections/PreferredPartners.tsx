import Image from "next/image";
import { Container } from "../layout/Container";

const attorneyPartners = [
  {
    name: "Cliffe Dekker Hofmeyr",
    src: "/images/partners/cdh-attorneys.png",
  },
  {
    name: "Hammond Pole Attorneys",
    src: "/images/partners/hammond-pole.png",
  },
  {
    name: "WDS Attorneys",
    src: "/images/partners/wds-attorneys.png",
  },
];

const otherPartners = [
  {
    name: "Municipal Debt Specialists",
    src: "/images/partners/municipal-debt-specialists.png",
  },
];

interface PreferredPartnersProps {
  type?: "attorneys" | "all";
  title?: string;
  subtitle?: string;
}

export function PreferredPartners({
  type = "all",
  title = "Our Preferred Partners",
  subtitle = "We work with South Africa\u2019s leading professionals",
}: PreferredPartnersProps) {
  const partners = type === "attorneys" ? attorneyPartners : [...attorneyPartners, ...otherPartners];

  return (
    <section className="py-12 lg:py-16 bg-tbsg-light">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-tbsg-charcoal mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-tbsg-charcoal/70">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <Image
                src={partner.src}
                alt={partner.name}
                width={150}
                height={60}
                className="h-12 lg:h-16 w-auto grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
