import { cn } from "~/lib/utils";

export const Container = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return <div className={cn("mx-auto max-w-7xl px-4", className)} {...props} />;
};
