import { Layout } from "@/components/layout/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import LoginPage from "@/pages/LoginPage";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

// Lazy-loaded pages
const DashboardPage = lazy(() => import("@/pages/DashboardPage"));
const CardsPage = lazy(() => import("@/pages/CardsPage"));
const AddCardPage = lazy(() => import("@/pages/AddCardPage"));
const CardDetailPage = lazy(() => import("@/pages/CardDetailPage"));
const EditCardPage = lazy(() => import("@/pages/EditCardPage"));

function PageLoader() {
  return (
    <div className="p-6 space-y-4">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-40 w-full rounded-xl" />
      <div className="grid grid-cols-3 gap-4">
        <Skeleton className="h-24 rounded-xl" />
        <Skeleton className="h-24 rounded-xl" />
        <Skeleton className="h-24 rounded-xl" />
      </div>
    </div>
  );
}

// Auth guard — runs before each protected route
function requireAuth() {
  // We check via the global auth state on each route load.
  // Since useInternetIdentity is a hook, we guard at render level in ProtectedLayout.
  return null;
}

// Root route
const rootRoute = createRootRoute();

// Login route (public)
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

// Protected layout route
const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: ProtectedLayout,
});

function ProtectedLayout() {
  const { loginStatus } = useInternetIdentity();
  if (loginStatus === "idle" || loginStatus === "logging-in") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground">Loading…</p>
        </div>
      </div>
    );
  }
  if (loginStatus !== "success") {
    throw redirect({ to: "/login" });
  }
  return (
    <Suspense fallback={<PageLoader />}>
      <Layout />
    </Suspense>
  );
}

// Dashboard: /
const dashboardRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <DashboardPage />
    </Suspense>
  ),
  beforeLoad: requireAuth,
});

// Cards list: /cards
const cardsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/cards",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <CardsPage />
    </Suspense>
  ),
  beforeLoad: requireAuth,
});

// Add card: /cards/new
const addCardRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/cards/new",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AddCardPage />
    </Suspense>
  ),
  beforeLoad: requireAuth,
});

// Card detail: /cards/$cardId
const cardDetailRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/cards/$cardId",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <CardDetailPage />
    </Suspense>
  ),
  beforeLoad: requireAuth,
});

// Edit card: /cards/$cardId/edit
const editCardRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/cards/$cardId/edit",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <EditCardPage />
    </Suspense>
  ),
  beforeLoad: requireAuth,
});

const routeTree = rootRoute.addChildren([
  loginRoute,
  layoutRoute.addChildren([
    dashboardRoute,
    cardsRoute,
    addCardRoute,
    cardDetailRoute,
    editCardRoute,
  ]),
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
