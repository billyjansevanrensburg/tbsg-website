import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Partners | TBSG",
    default: "Partners | TBSG",
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
