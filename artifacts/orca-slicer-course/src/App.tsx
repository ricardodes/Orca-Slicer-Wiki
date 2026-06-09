import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { HomePage } from "@/pages/home";
import { ModuloPage } from "@/pages/modulo";
import { LicaoPage } from "@/pages/licao";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3">
      <h1 className="text-2xl font-bold text-foreground">404</h1>
      <p className="text-muted-foreground">Página não encontrada.</p>
      <a href="/" className="text-primary hover:underline text-sm">
        Voltar ao início
      </a>
    </div>
  );
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/modulo/:slug" component={ModuloPage} />
        <Route path="/modulo/:moduloSlug/:licaoSlug" component={LicaoPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
