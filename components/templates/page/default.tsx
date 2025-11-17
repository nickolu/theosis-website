import { cn } from "@/lib/util/cn";

interface DefaultPageProps {
    children: React.ReactNode;
    className?: string;
}

export default function DefaultPage({ children, className="text-center" }: DefaultPageProps) {
    return (
      <div className={cn("min-h-screen py-12 mt-20", className ?? "")}>
        {children}
      </div>
    );
  }
