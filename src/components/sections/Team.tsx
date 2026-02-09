import Image from "next/image";
import { Container } from "../layout/Container";

const team = [
  {
    name: "Paul Janse van Rensburg",
    role: "Founder & CEO",
    image: "/images/team/paul.png",
    bio: "Founder of TBSG with decades of experience in property finance and business leadership.",
  },
  {
    name: "Billy Janse van Rensburg",
    role: "Operations & Marketing",
    image: "/images/team/billy.png",
    bio: "Driving operational excellence and growth through technology and marketing innovation.",
  },
  {
    name: "Megan",
    role: "Financials & Program Management",
    image: "/images/team/megan.png",
    bio: "Managing financial operations and ensuring programs run smoothly from start to finish.",
  },
  {
    name: "Nicole",
    role: "Chief Financial Officer",
    image: "/images/team/nicole.png",
    bio: "Overseeing financial strategy and ensuring the company\u2019s fiscal health.",
  },
];

interface TeamProps {
  title?: string;
  subtitle?: string;
}

export function Team({
  title = "Meet the Team",
  subtitle = "The people behind TBSG",
}: TeamProps) {
  return (
    <section className="py-16 lg:py-24 bg-tbsg-light">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-white shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3 className="font-heading font-bold text-xl text-tbsg-charcoal mb-1">
                {member.name}
              </h3>
              <p className="text-tbsg-primary font-semibold text-sm mb-3">
                {member.role}
              </p>
              <p className="text-sm text-tbsg-charcoal/70 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
