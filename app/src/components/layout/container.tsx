import { layout } from "@/styles/tokens";
import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full", className)}
      style={{ maxWidth: layout.maxWidth }}
    >
      {children}
    </div>
  );
}
