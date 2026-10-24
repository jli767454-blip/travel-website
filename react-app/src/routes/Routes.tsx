import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExampleView from '@/views/ExampleView';
import SiteLayout from '@/components/site/SiteLayout';
import NotFoundView from '@/views/NotFoundView';
import ProtectedRoute from '@/routes/ProtectedRoute';
import ContactView from '@/views/ContactView';
import DestinationsView from '@/views/DestinationsView';
import AboutView from '@/views/AboutView';
import ServicesView from '@/views/ServicesView';
import UnauthorizedView from '@/views/UnauthorizedView';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<ExampleView />} />
          <Route path="about" element={<AboutView />} />
          <Route path="destinations" element={<DestinationsView />} />
          <Route path="services" element={<ServicesView />} />
          <Route path="contact" element={<ContactView />} />
          <Route path="*" element={<NotFoundView />} />
        </Route>
        <Route path="/unauthorized" element={<UnauthorizedView />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
