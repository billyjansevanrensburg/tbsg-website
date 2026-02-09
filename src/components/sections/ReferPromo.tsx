import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

export function ReferPromo() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-tbsg-green to-emerald-600">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
              Refer &amp; Earn Programme
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Earn Up to R75,000 Per Home Loan Referral
            </h2>
            <p className="text-lg text-white/90 mb-6">
              Refer buyers to TBSG and earn commission when their bond registers.
              Residential bonds pay up to 0.69%, commercial bonds up to 0.2%.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Get your own personal referral link",
                "Track all your referrals in real-time",
                "Daily progress updates & weekly reports",
                "Commission paid when bond registers",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-white/90">
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" href="/tools/refer-and-earn">
                Start Earning
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="/tools/refer-and-earn"
                className="border-white text-white hover:bg-white hover:text-tbsg-green"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <p className="text-4xl lg:text-5xl font-heading font-bold text-white mb-2">0.69%</p>
              <p className="text-white/80 text-sm">Residential Bond Commission</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <p className="text-4xl lg:text-5xl font-heading font-bold text-white mb-2">0.2%</p>
              <p className="text-white/80 text-sm">Commercial Bond Commission</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center col-span-2">
              <p className="text-4xl lg:text-5xl font-heading font-bold text-white mb-2">R75K+</p>
              <p className="text-white/80 text-sm">Maximum Per Single Referral</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
