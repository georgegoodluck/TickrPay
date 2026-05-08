import AppShell from "@/components/AppShell";

export default function Home() {
  return (
    <AppShell>
      <div className="flex items-center justify-center h-full min-h-[80vh]">
        <div className="text-center space-y-3">
          <p className="text-emerald-400 text-2xl font-extrabold">
            ✓ Phase 4 — Shell works
          </p>
          <p className="text-slate-500 text-sm">
            Sidebar is rendered. Navigation is live.
          </p>
          <p className="text-slate-700 text-xs">
            Click Dashboard in the sidebar — it will 404 for now, that&apos;s fine.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
