import SectionShell from '@/components/site/SectionShell';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/i18n/LanguageProvider';

const ContactView = () => {
  const { content } = useLanguage();
  const contact = content.contact;

  return (
    <div className="pb-10">
      <SectionShell eyebrow={contact.eyebrow} title={contact.title} description={contact.intro}>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4">
            {contact.methods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="rounded-[1.75rem] border border-[color:var(--color-brand-border)] bg-white p-6 text-foreground no-underline transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <p className="text-sm font-semibold tracking-[0.18em] text-[color:var(--color-brand-soft)] uppercase">{method.label}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-[color:var(--color-heading)]">{method.value}</h3>
              </a>
            ))}
          </div>

          <Card className="border-[color:var(--color-brand-border)] bg-[color:var(--color-surface-soft)]">
            <CardContent className="space-y-6 p-6 sm:p-8">
              <div className="space-y-3">
                <p className="text-sm font-semibold tracking-[0.18em] text-[color:var(--color-brand-soft)] uppercase">{contact.responseTitle}</p>
                <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--color-heading)]">
                  {content.home.contactBandTitle}
                </h3>
              </div>
              <div className="space-y-4">
                {contact.responsePoints.map((point, index) => (
                  <div key={point} className="flex gap-4 rounded-3xl border border-[color:var(--color-brand-border)] bg-white p-5">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-7 text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl border border-dashed border-[color:var(--color-brand-border)] bg-white px-5 py-4 text-sm leading-7 text-[color:var(--color-body-strong)]">
                {content.home.assurance}
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionShell>
    </div>
  );
};

export default ContactView;
