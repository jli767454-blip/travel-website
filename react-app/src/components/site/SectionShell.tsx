import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SectionShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

const SectionShell = ({
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
}: SectionShellProps) => {
  return (
    <section className={cn('px-6 py-16 sm:px-8 sm:py-20 lg:px-10', className)}>
      <div className="mx-auto max-w-7xl">
        <div className={cn('space-y-10', contentClassName)}>
          <div className="max-w-3xl space-y-4">
            {eyebrow ? (
              <p className="text-sm font-semibold tracking-[0.2em] text-[color:var(--color-brand-soft)] uppercase">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {description ? (
              <p className="text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>
            ) : null}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionShell;
