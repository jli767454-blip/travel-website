import { ArrowRight, CheckCircle2, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionShell from '@/components/site/SectionShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/i18n/LanguageProvider';

const HomeView = () => {
  const { content } = useLanguage();
  const home = content.home;

  return (
    <div className="pb-10">
      <section className="relative overflow-hidden px-6 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-10 lg:pt-20">
        <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(circle_at_top_left,_rgba(24,62,105,0.16),_transparent_44%),radial-gradient(circle_at_right,_rgba(184,140,76,0.14),_transparent_32%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-3xl space-y-7">
            <p className="text-sm font-semibold tracking-[0.22em] text-[color:var(--color-brand-soft)] uppercase">
              {home.eyebrow}
            </p>
            <div className="space-y-5">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-[color:var(--color-heading)] sm:text-6xl lg:text-7xl">
                {home.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                {home.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-6 text-sm">
                <Link to="/contact">
                  {home.primaryCta}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-[color:var(--color-brand-border)] bg-white/70 px-6 text-sm shadow-sm backdrop-blur-sm">
                <Link to="/destinations">{home.secondaryCta}</Link>
              </Button>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[color:var(--color-body-strong)] sm:text-base">
              {home.assurance}
            </p>
          </div>

          <Card className="border-[color:var(--color-brand-border)] bg-white/88 py-0 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <CardContent className="space-y-8 p-7 sm:p-8">
              <div className="space-y-3">
                <p className="text-sm font-semibold tracking-[0.16em] text-[color:var(--color-brand-soft)] uppercase">
                  {home.trustTitle}
                </p>
                <p className="text-base leading-7 text-muted-foreground">{home.trustDescription}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {home.stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-[color:var(--color-brand-border)] bg-[color:var(--color-surface-soft)] p-5">
                    <div className="text-3xl font-semibold tracking-tight text-[color:var(--color-heading)]">{stat.value}</div>
                    <div className="mt-2 text-sm font-semibold text-foreground">{stat.label}</div>
                    <div className="mt-2 text-sm leading-6 text-muted-foreground">{stat.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <SectionShell title={home.trustTitle} description={home.trustDescription}>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {home.trustPoints.map((point) => (
            <Card key={point.title} className="border-[color:var(--color-brand-border)] bg-card/95">
              <CardContent className="space-y-4 p-6">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <CheckCircle2 className="size-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight text-[color:var(--color-heading)]">{point.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{point.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        className="bg-[color:var(--color-surface-soft)]"
        title={home.destinationsTitle}
        description={home.destinationsDescription}
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {home.destinations.map((destination) => (
            <Card key={destination.city} className="border-[color:var(--color-brand-border)] bg-white">
              <CardContent className="space-y-4 p-6">
                <div className="space-y-1">
                  <p className="text-sm font-semibold tracking-[0.18em] text-[color:var(--color-brand-soft)] uppercase">
                    {destination.highlight}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--color-heading)]">{destination.city}</h3>
                </div>
                <p className="text-sm leading-7 text-muted-foreground">{destination.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-start justify-between gap-4 rounded-[2rem] border border-dashed border-[color:var(--color-brand-border)] bg-white px-6 py-5 sm:flex-row sm:items-center">
          <p className="max-w-3xl text-sm leading-7 text-[color:var(--color-body-strong)]">{home.destinationsNote}</p>
          <Button asChild variant="ghost" className="rounded-full px-0 text-primary hover:bg-transparent">
            <Link to="/destinations">
              {home.secondaryCta}
              <MoveRight className="size-4" />
            </Link>
          </Button>
        </div>
      </SectionShell>

      <SectionShell title={home.servicesTitle} description={home.servicesDescription}>
        <div className="grid gap-5 lg:grid-cols-3">
          {home.services.map((service) => (
            <Card key={service.title} className="border-[color:var(--color-brand-border)] bg-card/95">
              <CardContent className="space-y-3 p-6">
                <h3 className="text-xl font-semibold tracking-tight text-[color:var(--color-heading)]">{service.title}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pb-0" title={home.testimonialsTitle}>
        <div className="grid gap-5 lg:grid-cols-2">
          {home.testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="border-[color:var(--color-brand-border)] bg-white">
              <CardContent className="space-y-4 p-6">
                <p className="text-lg leading-8 text-[color:var(--color-body-strong)]">“{testimonial.quote}”</p>
                <p className="text-sm font-medium text-muted-foreground">{testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionShell>

      <section className="px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[color:var(--color-surface-strong)] px-7 py-10 text-[color:var(--color-on-dark)] shadow-[0_28px_80px_rgba(15,23,42,0.18)] sm:px-10 sm:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold tracking-[0.2em] text-[color:var(--color-accent-soft)] uppercase">Contact</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{home.contactBandTitle}</h2>
              <p className="text-base leading-8 text-[color:var(--color-on-dark-muted)] sm:text-lg">{home.contactBandDescription}</p>
            </div>
            <Button asChild size="lg" className="rounded-full bg-white px-6 text-[color:var(--color-surface-strong)] hover:bg-white/90">
              <Link to="/contact">
                {home.primaryCta}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
