import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import {
  ChevronRight,
  CreditCard,
  LayoutDashboard,
  PlusCircle,
} from "lucide-react";

const NAV_ITEMS = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/cards", label: "My Cards", icon: CreditCard },
  { to: "/cards/new", label: "Add Card", icon: PlusCircle },
];

export function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="w-60 shrink-0 border-r border-border bg-card flex flex-col h-full">
      {/* Logo area */}
      <div className="h-16 flex items-center px-5 border-b border-border">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
            <span className="text-primary-foreground font-display font-bold text-sm">
              CV
            </span>
          </div>
          <span className="font-display font-bold text-lg text-foreground tracking-tight">
            Card Vault
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1" aria-label="Sidebar navigation">
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => {
          const isActive =
            to === "/"
              ? pathname === "/"
              : pathname.startsWith(to) && (to !== "/" || pathname === "/");
          return (
            <Link
              key={to}
              to={to}
              data-ocid={`sidebar.${label.toLowerCase().replace(" ", "_")}.link`}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-smooth group",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon
                className={cn(
                  "w-4 h-4 shrink-0",
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground group-hover:text-foreground",
                )}
              />
              <span className="flex-1">{label}</span>
              {isActive && <ChevronRight className="w-3 h-3 opacity-70" />}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </aside>
  );
}
