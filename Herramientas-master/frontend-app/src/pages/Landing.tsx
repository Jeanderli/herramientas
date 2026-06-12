import { Link } from "react-router-dom"
import { NeonButton, NeonCard } from "../components/NeonProtocol"

const FEATURES = [
  {
    icon: "inventory_2",
    title: "Gestión de Productos",
    description: "Controla tu inventario en tiempo real: stock, precios y categorías centralizados en un solo panel.",
  },
  {
    icon: "groups",
    title: "Gestión de Clientes",
    description: "Administra los perfiles de tus clientes, su historial de compras y mantén la relación bajo control.",
  },
  {
    icon: "payments",
    title: "Gestión de Ventas",
    description: "Registra transacciones, genera reportes y monitorea el rendimiento de tu negocio al instante.",
  },
]

const CATEGORIES = [
  { icon: "construction", label: "Herramientas Manuales" },
  { icon: "bolt", label: "Herramientas Eléctricas" },
  { icon: "plumbing", label: "Plomería" },
  { icon: "yard", label: "Jardinería" },
  { icon: "engineering", label: "Construcción" },
  { icon: "security", label: "Seguridad Industrial" },
]

export function Landing() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body-md overflow-x-hidden">
      {/* TopNavBar */}
      <header className="h-[64px] w-full sticky top-0 z-50 bg-surface flex justify-between items-center px-6 border-b border-outline-variant shadow-[0_0_10px_rgba(0,219,231,0.2)]">
        <span className="font-headline-md text-headline-md text-primary-container tracking-tighter">HERRAMIENTAS</span>
        <Link to="/login">
          <NeonButton variant="primary">LOGIN_SYSTEM</NeonButton>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-24 text-center border-b border-outline-variant">
        <h1 className="font-headline-lg text-headline-lg text-primary uppercase glow-primary">
          Herramientas
        </h1>
        <p className="code-snippet text-on-surface-variant mt-4 max-w-2xl mx-auto">
          Sistema integral de gestión para tu ferretería: productos, clientes y ventas,
          todo en una sola plataforma.<span className="terminal-cursor"></span>
        </p>
        <div className="mt-8 flex justify-center">
          <Link to="/login">
            <NeonButton variant="primary" size="lg">
              <span className="material-symbols-outlined text-[18px]">terminal</span>
              ACCEDER_AL_SISTEMA
            </NeonButton>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 border-b border-outline-variant">
        <div className="mb-8 border-l-4 border-primary-fixed-dim pl-4">
          <h2 className="font-headline-md text-headline-md text-primary uppercase">Características</h2>
          <p className="code-snippet text-on-surface-variant mt-2">Todo lo que necesitas para administrar tu negocio</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <NeonCard key={feature.title} variant="primary" className="text-left">
              <span className="material-symbols-outlined text-primary-fixed-dim text-[28px]">{feature.icon}</span>
              <h3 className="font-headline-md text-[18px] text-on-surface mt-4 uppercase">{feature.title}</h3>
              <p className="code-snippet text-on-surface-variant mt-2">{feature.description}</p>
            </NeonCard>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-6 py-16 border-b border-outline-variant">
        <div className="mb-8 border-l-4 border-secondary-fixed-dim pl-4">
          <h2 className="font-headline-md text-headline-md text-secondary-fixed uppercase">Categorías de Herramientas</h2>
          <p className="code-snippet text-on-surface-variant mt-2">Explora los rubros que puedes administrar</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((category) => (
            <div
              key={category.label}
              className="ascii-border bg-surface-container-low glitch-hover p-4 flex flex-col items-center gap-2 text-center"
            >
              <span className="material-symbols-outlined text-secondary-fixed text-[24px]">{category.icon}</span>
              <span className="code-snippet text-on-surface-variant text-[11px] uppercase">{category.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-surface-container-lowest font-code-snippet text-[10px] text-outline flex flex-col md:flex-row items-center gap-4 md:justify-between">
        <span className="text-primary-fixed-dim animate-pulse">● SYS_READY</span>
        <span>HERRAMIENTAS_V2.0 — Sistema de Gestión Comercial</span>
        <span>© {new Date().getFullYear()} HERRAMIENTAS. Todos los derechos reservados.</span>
      </footer>
    </div>
  )
}
