import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/auth-context';
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const ExplorePage = lazy(() => import('./pages/ExplorePage'));
const ActiveBidsPage = lazy(() => import('./pages/ActiveBidsPage'));
const CreatorPage = lazy(() => import('./pages/CreatorPage'));
const RankingPages = lazy(() => import('./pages/RankingPages'));
const MyCollectionPage = lazy(() => import('./pages/MyCollectionPage'));

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Suspense>
          <Routes>
            <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
            <Route
              path="/explore"
              element={<ExplorePage></ExplorePage>}
            ></Route>
            <Route
              path="/active-bids"
              element={<ActiveBidsPage></ActiveBidsPage>}
            ></Route>
            <Route
              path="/creator"
              element={<CreatorPage></CreatorPage>}
            ></Route>
            <Route
              path="/rankings"
              element={<RankingPages></RankingPages>}
            ></Route>
            <Route
              path="/my-collection"
              element={<MyCollectionPage></MyCollectionPage>}
            ></Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </div>
  );
};
export default App;
