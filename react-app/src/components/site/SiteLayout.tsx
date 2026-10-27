import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Globe, Menu, MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useLanguage } from '@/i18n/LanguageProvider';
import { cn } from '@/lib/utils';

const headerLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-primary/10 text-primary'
      : 'text-foreground/80 hover:bg-muted hover:text-foreground'
  );

const SiteLayout = () => {
  const { content, toggleLanguage } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        {content.skipToContent}
      </a>

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-10">
          <Link to="/" className="min-w-0 text-foreground no-underline">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-sm">
                CP
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold tracking-[0.18em] text-primary/80 uppercase">
                  万图国际旅行社
                </div>
                <div className="truncate text-sm text-muted-foreground">{content.footer.tagline}</div>
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {content.nav.map((item) => (
              <NavLink key={item.path} to={item.path} className={headerLinkClass} end={item.path === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="outline" className="rounded-full" onClick={toggleLanguage}>
              <Globe className="size-4" />
              {content.languageLabel}
            </Button>
            <Button asChild className="rounded-full px-5">
              <Link to="/contact">
                {content.nav[4]?.label}
                <MoveRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Button variant="outline" size="icon" className="rounded-full" onClick={toggleLanguage} aria-label={content.languageSwitchLabel}>
              <Globe className="size-4" />
            </Button>
            <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full" aria-label={content.nav[0] ? `${content.languageLabel} navigation` : 'Navigation'}>
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="border-l border-border/70 bg-background sm:max-w-xs">
                <SheetHeader className="pr-10">
                  <SheetTitle>万图国际旅行社</SheetTitle>
                  <SheetDescription>{content.footer.tagline}</SheetDescription>
                </SheetHeader>
                <div className="flex flex-1 flex-col gap-2 px-4 pb-6">
                  {content.nav.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileNavOpen(false)}
                      end={item.path === '/'}
                      className={({ isActive }) =>
                        cn(
                          'rounded-2xl border px-4 py-3 text-sm font-medium no-underline transition-colors',
                          isActive
                            ? 'border-primary/20 bg-primary/8 text-primary'
                            : 'border-border/70 bg-card text-foreground hover:bg-muted'
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main id="main-content">
        <Outlet />
      </main>

      <footer className="border-t border-border/60 bg-[color:var(--color-surface-strong)] text-[color:var(--color-on-dark)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:px-8 lg:grid-cols-[1.4fr_0.8fr] lg:px-10">
          <div className="space-y-4">
            <div className="text-sm font-semibold tracking-[0.18em] uppercase text-[color:var(--color-accent-soft)]">
              万图国际旅行社
            </div>
            <p className="max-w-xl text-sm leading-7 text-[color:var(--color-on-dark-muted)]">
              {content.footer.tagline}
            </p>
          </div>
          <div className="space-y-3">
            <div className="text-sm font-semibold text-[color:var(--color-on-dark)]">{content.nav[4]?.label}</div>
            <div className="flex flex-col gap-2 text-sm text-[color:var(--color-on-dark-muted)]">
              <Link className="text-inherit no-underline hover:text-white" to="/contact">
                {content.contact.methods.slice(0, 3).map((method) => method.label).join(' / ')}
              </Link>
              <Link className="text-inherit no-underline hover:text-white" to="/services">
                {content.nav[3]?.label}
              </Link>
            </div>
            <p className="pt-4 text-xs text-[color:var(--color-on-dark-muted)]">{content.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
