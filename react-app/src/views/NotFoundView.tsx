import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageProvider';

const NotFoundView = () => {
  const { content } = useLanguage();

  return (
    <main className="px-6 py-16 text-foreground sm:px-8 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-18rem)] max-w-3xl items-center justify-center">
        <div className="w-full rounded-[2rem] border border-[color:var(--color-brand-border)] bg-card p-8 shadow-sm sm:p-10">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">404</span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[color:var(--color-heading)]">
            {content.notFound.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
            {content.notFound.description}
          </p>
          <div className="mt-8">
            <Link
              className="inline-flex items-center font-medium text-primary no-underline"
              to="/"
            >
              {content.notFound.action}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFoundView;
