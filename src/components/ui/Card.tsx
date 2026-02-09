import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "xl";
}

export function Card({
  children,
  className,
  hover = false,
  padding = "md",
}: CardProps) {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-gray-100 shadow-sm",
        paddingClasses[padding],
        hover && "transition-all duration-300 hover:shadow-lg hover:border-tbsg-primary/20 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
