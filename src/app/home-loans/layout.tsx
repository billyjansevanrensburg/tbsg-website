import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Home Loans | TBSG",
    default: "Home Loans | TBSG",
  },
};

export default function HomeLoansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
