import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  className?: string;
  text?: string;
}

export function ImagePlaceholder({ className, text = "TBSG" }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-tbsg-primary to-tbsg-secondary flex items-center justify-center",
        className
      )}
    >
      <span className="text-white/50 font-heading font-bold text-2xl">
        {text}
      </span>
    </div>
  );
}
