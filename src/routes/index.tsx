import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Repository = lazy(() => import('../pages/Repository'));

const Routes: React.FC = () => (
  <Suspense fallback={<h1 id="Loading">Carregando...</h1>}>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repository/:repository+" component={Repository} />
    </Switch>
  </Suspense>
);

export default Routes;
