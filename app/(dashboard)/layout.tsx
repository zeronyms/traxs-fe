import { TooltipProvider } from "@/components/ui/tooltip";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TooltipProvider>{children}</TooltipProvider>
    </div>
  );
}
