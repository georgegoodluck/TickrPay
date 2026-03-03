import { formatNaira, formatDate, generateID } from '@/lib/utils';

export default function Home() {
  const testID = generateID('George');
  const testNaira = formatNaira(5000);
  const testDate = formatDate(new Date().toISOString());

  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
      <div className="text-center space-y-3">
        <img src="/logo.jpg" className="h-20 w-20 rounded-2xl mx-auto" />
        <p className="text-emerald-400 text-xl font-bold">✓ Phase 3 — Types & Utils</p>
        <div className="bg-white/5 border border-white/10 rounded-2xl px-8 py-5 space-y-2 text-left">
          <p className="text-slate-300 text-sm">
            Generated ID: <span className="text-emerald-400 font-mono font-bold">{testID}</span>
          </p>
          <p className="text-slate-300 text-sm">
            Formatted amount: <span className="text-emerald-400 font-bold">{testNaira}</span>
          </p>
          <p className="text-slate-300 text-sm">
            Formatted date: <span className="text-emerald-400 font-bold">{testDate}</span>
          </p>
        </div>
        <p className="text-slate-600 text-xs">Refresh to see different IDs generated</p>
      </div>
    </div>
  );
}