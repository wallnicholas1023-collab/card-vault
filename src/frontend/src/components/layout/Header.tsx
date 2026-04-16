import { Button } from "@/components/ui/button";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { LogIn, LogOut, Wallet } from "lucide-react";

export function Header() {
  const { loginStatus, login, clear, identity } = useInternetIdentity();
  const isAuthenticated = loginStatus === "success";

  const principalShort =
    isAuthenticated && identity
      ? `${identity.getPrincipal().toText().slice(0, 8)}…`
      : null;

  return (
    <header className="h-16 shrink-0 flex items-center justify-between px-6 bg-card border-b border-border shadow-sm z-10">
      <div className="flex items-center gap-2">
        <h1 className="font-display font-bold text-xl text-foreground tracking-tight">
          Card Vault
        </h1>
        <span className="text-xs font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
          BETA
        </span>
      </div>

      <div className="flex items-center gap-3">
        {isAuthenticated && principalShort && (
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
            <Wallet className="w-3.5 h-3.5" />
            <span className="font-mono">{principalShort}</span>
          </div>
        )}
        {isAuthenticated ? (
          <Button
            variant="outline"
            size="sm"
            onClick={() => clear()}
            data-ocid="header.logout_button"
            className="gap-1.5 text-muted-foreground"
          >
            <LogOut className="w-3.5 h-3.5" />
            Logout
          </Button>
        ) : (
          <Button
            size="sm"
            onClick={() => login()}
            data-ocid="header.login_button"
            className="gap-1.5"
          >
            <LogIn className="w-3.5 h-3.5" />
            Connect
          </Button>
        )}
      </div>
    </header>
  );
}
