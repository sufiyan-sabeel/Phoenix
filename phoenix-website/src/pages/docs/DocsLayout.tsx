import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { docs } from '../../data/docs'
import type { DocSection, DocPage } from '../../data/docs'

export default function DocsLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const allPages: DocPage[] = docs.flatMap((s: DocSection) => s.items)
  const currentIndex = allPages.findIndex((p: DocPage) => `/docs/${p.slug}` === location.pathname)
  const prev = currentIndex > 0 ? allPages[currentIndex - 1] : null
  const next = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null

  return (
    <div className="pt-16 min-h-screen flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-border bg-surface/50 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
        <nav className="p-6 space-y-6">
          {docs.map((section: DocSection) => (
            <div key={section.title}>
              <h4 className="text-[10px] font-mono font-semibold text-ghost tracking-widest uppercase mb-2">
                {section.title}
              </h4>
              <ul className="space-y-0.5">
                {section.items.map((item: DocPage) => (
                  <li key={item.slug}>
                    <NavLink
                      to={`/docs/${item.slug}`}
                      className={({ isActive }) =>
                        `block px-3 py-1.5 text-sm rounded transition-colors ${
                          isActive
                            ? 'text-ember bg-ember/10 font-medium'
                            : 'text-muted hover:text-text hover:bg-surface'
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-bg/80 backdrop-blur-xl border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-sm font-medium text-text">Documentation</span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 text-muted hover:text-text rounded-md"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-30 pt-28">
          <div className="absolute inset-0 bg-bg/80" onClick={() => setMobileOpen(false)} />
          <nav className="relative bg-surface border-r border-border h-full overflow-y-auto p-4 space-y-4">
            {docs.map((section: DocSection) => (
              <div key={section.title}>
                <h4 className="text-[10px] font-mono font-semibold text-ghost tracking-widest uppercase mb-2">
                  {section.title}
                </h4>
                <ul className="space-y-0.5">
                  {section.items.map((item: DocPage) => (
                    <li key={item.slug}>
                      <NavLink
                        to={`/docs/${item.slug}`}
                        className={({ isActive }) =>
                          `block px-3 py-2 text-sm rounded transition-colors ${
                            isActive
                              ? 'text-ember bg-ember/10 font-medium'
                              : 'text-muted hover:text-text hover:bg-elevated'
                          }`
                        }
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 min-w-0 lg:pl-0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <Outlet />

          {/* Previous / Next */}
          <div className="mt-16 pt-6 border-t border-border flex items-center justify-between gap-4">
            {prev ? (
              <NavLink
                to={`/docs/${prev.slug}`}
                className="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors"
              >
                <ChevronLeft size={16} />
                {prev.title}
              </NavLink>
            ) : (
              <div />
            )}
            {next ? (
              <NavLink
                to={`/docs/${next.slug}`}
                className="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors"
              >
                {next.title}
                <ChevronRight size={16} />
              </NavLink>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
