import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Bridging Finance | TBSG",
    default: "Bridging Finance | TBSG",
  },
};

export default function BridgingFinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
