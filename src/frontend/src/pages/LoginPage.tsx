import { Button } from "@/components/ui/button";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { BarChart3, LogIn, Shield, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const FEATURES = [
  {
    icon: TrendingUp,
    title: "Track Portfolio Value",
    desc: "Monitor real-time gains & losses across your entire collection.",
  },
  {
    icon: BarChart3,
    title: "Price History",
    desc: "Visualize every card's value trajectory with detailed charts.",
  },
  {
    icon: Shield,
    title: "Secure Ownership",
    desc: "Your data is stored on-chain — no central authority, no data loss.",
  },
];

export default function LoginPage() {
  const { login, loginStatus } = useInternetIdentity();
  const isLoading = loginStatus === "logging-in";

  return (
    <div
      className="min-h-screen bg-background flex items-center justify-center p-6"
      data-ocid="login.page"
    >
      <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-10 items-center">
        {/* Branding side */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-display font-bold text-xl">
                CV
              </span>
            </div>
            <div>
              <h1 className="font-display font-bold text-3xl text-foreground tracking-tight">
                Card Vault
              </h1>
              <p className="text-sm text-muted-foreground font-body">
                Premium Sports Card Tracker
              </p>
            </div>
          </div>

          <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
            The professional-grade dashboard for serious collectors. Track
            values, analyze performance, and grow your sports card portfolio
            with confidence.
          </p>

          <ul className="space-y-4">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Login card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="bg-card border border-border rounded-2xl p-8 shadow-lg"
          data-ocid="login.card"
        >
          <div className="text-center space-y-2 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display font-bold text-2xl text-foreground">
              Welcome Back
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto">
              Sign in with Internet Identity to access your card portfolio. No
              password required.
            </p>
          </div>

          <Button
            className="w-full gap-2 h-12 text-base font-semibold"
            onClick={() => login()}
            disabled={isLoading}
            data-ocid="login.connect_button"
          >
            {isLoading ? (
              <>
                <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Connecting…
              </>
            ) : (
              <>
                <LogIn className="w-5 h-5" />
                Connect with Internet Identity
              </>
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Internet Identity is a secure, privacy-preserving authentication
            system built on the Internet Computer.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
