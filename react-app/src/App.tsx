import ErrorBoundary from '@/components/ErrorBoundary';
import { TooltipProvider } from '@/components/ui/tooltip';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import Routes from '@/routes/Routes';

/**
 * Root Application Component
 * @component MainApp
 */
const MainApp = () => {
  return (
    <ErrorBoundary name="App">
      <LanguageProvider>
        <TooltipProvider>
          <Routes />
        </TooltipProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default MainApp;
