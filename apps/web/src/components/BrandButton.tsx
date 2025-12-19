import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BrandButtonProps {
  children: React.ReactNode;
  variant?: "filled" | "outline";
  size?: "default" | "lg";
  className?: string;
}

export default function BrandButton({
  children,
  variant = "filled",
  size = "default",
  className
}: BrandButtonProps) {
  return (
    <Button
      size={size}
      className={cn(
        "rounded-xl transition-all duration-200 active:scale-[0.97]",
        variant === "filled" && [
          "bg-primary text-base",
          "hover:bg-primaryStrong"
        ],
        variant === "outline" && [
          "border-2 border-textBase bg-transparent text-textBase",
          "hover:bg-textBase hover:text-base"
        ],
        className
      )}
    >
      {children}
    </Button>
  );
}
