export function DashboardFiveBanner({ text }: { text: string }) {
  return (
    <div className="bg-primary px-4 py-2 text-center text-xs font-bold text-primary-foreground">
      {text}
    </div>
  );
}
