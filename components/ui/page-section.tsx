import { cn } from "@/lib/util/cn";

const defaultClasses = "py-2 px-2 relative";

const PageSection = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return (
        <section className={cn(defaultClasses, className ?? "")}>
            {children}
        </section>
    );
};

export default PageSection;