import { Switch, Route, Router as WouterRouter } from "wouter";
import { HomePage } from "@/pages/home";
import { ModuloPage } from "@/pages/modulo";
import { LicaoPage } from "@/pages/licao";

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
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/modulo/:slug" component={ModuloPage} />
      <Route path="/modulo/:moduloSlug/:licaoSlug" component={LicaoPage} />
      <Route component={NotFound} />
    </Switch>
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
