"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BadgeCheck, LayoutDashboard, LogOut } from "lucide-react";

const navItems = [
  {
    href: "/",
    label: "Check-In",
    icon: <BadgeCheck />,
  },
  {
    href: "/admin",
    label: "Dashboard",
    icon: <LayoutDashboard />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <aside
      className="fixed left-0 top-0 h-screen w-55 flex flex-col z-50"
      style={{
        background: "#0a0d13",
        borderRight: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Brand */}
      <div
        className="px-5 py-5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="TickrPay"
            width={36}
            height={36}
            className="rounded-xl"
            style={{ boxShadow: "0 0 16px rgba(52,211,153,0.3)" }}
          />
          <div>
            <p className="text-sm font-extrabold text-white tracking-tight">
              TickrPay
            </p>
            <p className="text-[10px] text-slate-600 font-medium">
              Event Manager
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5 space-y-1">
        <p className="px-3 mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-700">
          Navigation
        </p>
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all duration-150"
              style={
                active
                  ? {
                      background: "rgba(52,211,153,0.1)",
                      color: "#34d399",
                      border: "1px solid rgba(52,211,153,0.2)",
                    }
                  : {
                      color: "#64748b",
                      border: "1px solid transparent",
                    }
              }
            >
              {item.icon}
              {item.label}
              {active && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer — user + logout */}
      <div
        className="px-3 pb-5 space-y-1"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "16px",
        }}
      >
        {/* User row */}
        <div className="flex items-center gap-3 px-3 py-2 mb-1">
          <div
            className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-emerald-400"
            style={{
              background: "rgba(52,211,153,0.15)",
              border: "1px solid rgba(52,211,153,0.2)",
            }}
          >
            A
          </div>
          <div>
            <p className="text-xs font-bold text-slate-300">Admin</p>
            <p className="text-[10px] text-slate-600">Organiser</p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all duration-150 text-slate-600 hover:text-red-400"
          style={{ border: "1px solid transparent" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "rgba(239,68,68,0.08)";
            (e.currentTarget as HTMLButtonElement).style.border =
              "1px solid rgba(239,68,68,0.15)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "transparent";
            (e.currentTarget as HTMLButtonElement).style.border =
              "1px solid transparent";
          }}
        >
          <LogOut />
          Log Out
        </button>
      </div>
    </aside>
  );
}
