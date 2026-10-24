import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionShell from '@/components/site/SectionShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/i18n/LanguageProvider';

const AboutView = () => {
  const { content } = useLanguage();
  const about = content.about;

  return (
    <div className="pb-10">
      <SectionShell eyebrow={about.eyebrow} title={about.title} description={about.intro}>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-[color:var(--color-brand-border)] bg-white">
            <CardContent className="space-y-5 p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--color-heading)]">{about.storyTitle}</h3>
              <div className="space-y-4 text-base leading-8 text-muted-foreground">
                {about.storyBody.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-5">
            <p className="text-sm font-semibold tracking-[0.18em] text-[color:var(--color-brand-soft)] uppercase">
              {about.strengthsTitle}
            </p>
            {about.strengths.map((item) => (
              <Card key={item.title} className="border-[color:var(--color-brand-border)] bg-card/95">
                <CardContent className="space-y-3 p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-[color:var(--color-heading)]">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[color:var(--color-brand-border)] bg-[color:var(--color-surface-soft)] px-6 py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl text-sm leading-7 text-[color:var(--color-body-strong)]">{content.home.contactBandDescription}</p>
            <Button asChild className="rounded-full px-6">
              <Link to="/contact">
                {content.nav[4]?.label}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionShell>
    </div>
  );
};

export default AboutView;
