import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionShell from '@/components/site/SectionShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/i18n/LanguageProvider';

const ServicesView = () => {
  const { content } = useLanguage();
  const page = content.servicesPage;

  return (
    <div className="pb-10">
      <SectionShell eyebrow={page.eyebrow} title={page.title} description={page.intro}>
        <div className="grid gap-5 lg:grid-cols-3">
          {content.home.services.map((service) => (
            <Card key={service.title} className="border-[color:var(--color-brand-border)] bg-white">
              <CardContent className="space-y-3 p-6">
                <h3 className="text-xl font-semibold tracking-tight text-[color:var(--color-heading)]">{service.title}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-[2rem] border border-[color:var(--color-brand-border)] bg-[color:var(--color-surface-soft)] p-6 sm:p-8">
          <div className="max-w-3xl space-y-6">
            <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--color-heading)]">{page.planningTitle}</h3>
            <div className="grid gap-4">
              {page.planningSteps.map((step, index) => (
                <div key={step.title} className="rounded-3xl border border-[color:var(--color-brand-border)] bg-white p-5">
                  <p className="text-sm font-semibold tracking-[0.18em] text-[color:var(--color-brand-soft)] uppercase">0{index + 1}</p>
                  <h4 className="mt-2 text-lg font-semibold text-[color:var(--color-heading)]">{step.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
            <Button asChild className="rounded-full px-6">
              <Link to="/contact">
                {content.home.primaryCta}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionShell>
    </div>
  );
};

export default ServicesView;
