import SectionShell from '@/components/site/SectionShell';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/i18n/LanguageProvider';

const DestinationsView = () => {
  const { content } = useLanguage();
  const page = content.destinationsPage;

  return (
    <div className="pb-10">
      <SectionShell eyebrow={page.eyebrow} title={page.title} description={page.intro}>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.home.destinations.map((destination) => (
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

        <Card className="border-[color:var(--color-brand-border)] bg-[color:var(--color-surface-soft)]">
          <CardContent className="space-y-3 p-6 sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--color-heading)]">
              {content.home.destinationsNote}
            </h3>
            <p className="text-base leading-8 text-muted-foreground">{page.note}</p>
          </CardContent>
        </Card>
      </SectionShell>
    </div>
  );
};

export default DestinationsView;
