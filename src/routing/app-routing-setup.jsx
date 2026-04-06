import { Layout1Page } from '@/pages/layout-1/page';
import { Navigate, Route, Routes } from 'react-router';
import { Layout1 } from '@/components/layouts/layout-1';
import { routes } from '../mb360/routes/routeConfig';

export function AppRoutingSetup() {
  return (
    <Routes>
      <Route element={<Layout1 />}>
        <Route path="/layout-1" element={<Layout1Page />} />
        <Route path="/layout-1/dark-sidebar" element={<Layout1Page />} />
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={Component && <Component />} />
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/layout-1" replace />} />
    </Routes>
  );
}
