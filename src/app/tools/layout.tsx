import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Tools | TBSG",
    default: "Tools | TBSG",
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
