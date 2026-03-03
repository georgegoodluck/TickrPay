import { supabase } from '@/lib/supabase';

export default async function Home() {
  const { data, error } = await supabase.from('attendees').select('count');

  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
      <div className="text-center space-y-3">
        <img src="/logo.jpg" className="h-20 w-20 rounded-2xl mx-auto" />
        {error ? (
          <p className="text-red-400 font-semibold">❌ DB Error: {error.message}</p>
        ) : (
          <p className="text-emerald-400 text-xl font-bold">✓ Database connected</p>
        )}
      </div>
    </div>
  );
}