import Image from "next/image";
import { Container } from "../layout/Container";

const banks = [
  { name: "ABSA", src: "/images/banks/absa.png" },
  { name: "FNB", src: "/images/banks/fnb.png" },
  { name: "Nedbank", src: "/images/banks/nedbank.png" },
  { name: "Capitec", src: "/images/banks/capitec.png" },
  { name: "Investec", src: "/images/banks/investec.png" },
  { name: "SA Home Loans", src: "/images/banks/sa-home-loans.png" },
];

const compliance = [
  { name: "BFASA Member", src: "/images/compliance/bfasa.png" },
  { name: "NCR Registered", src: "/images/compliance/ncr.png" },
];

interface TrustBadgesProps {
  showBanks?: boolean;
  showCompliance?: boolean;
  title?: string;
}

export function TrustBadges({
  showBanks = true,
  showCompliance = true,
  title = "Trusted by South Africa\u2019s leading banks",
}: TrustBadgesProps) {
  return (
    <section className="py-10 lg:py-14 bg-white border-y border-gray-100">
      <Container>
        {title && (
          <p className="text-center text-sm font-medium text-tbsg-charcoal/50 uppercase tracking-wider mb-8">
            {title}
          </p>
        )}

        <div className="flex flex-col gap-10">
          {/* Bank Logos */}
          {showBanks && (
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {banks.map((bank) => (
                <div key={bank.name} className="flex items-center justify-center">
                  <Image
                    src={bank.src}
                    alt={bank.name}
                    width={140}
                    height={50}
                    className="h-10 lg:h-12 w-auto grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Compliance Badges */}
          {showCompliance && (
            <div className="flex items-center justify-center gap-10">
              {compliance.map((badge) => (
                <div key={badge.name} className="flex items-center gap-3">
                  <Image
                    src={badge.src}
                    alt={badge.name}
                    width={100}
                    height={50}
                    className="h-12 lg:h-14 w-auto"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
