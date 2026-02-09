import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning";
  className?: string;
}

export function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  const variants = {
    primary: "bg-tbsg-primary/10 text-tbsg-primary",
    secondary: "bg-white/20 text-white",
    success: "bg-tbsg-green/10 text-tbsg-green",
    warning: "bg-tbsg-orange/10 text-tbsg-orange",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
