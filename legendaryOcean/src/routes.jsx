import React from 'react';
import { createHashRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Setting from './pages/Settings';

function AuthRoute({ children }) {
  const { user } = useOutletContext();

  return user ? <Navigate to="/" /> : children;
}

function PrivateRoute({ children }) {
  const { user } = useOutletContext();

  return !user ? <Navigate to="/" /> : children;
}


const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      {/* <Route path="register" element={<AuthRoute><Register /></AuthRoute>} />
      <Route path="login" element={<AuthRoute><Login /></AuthRoute>} />
      <Route path="settings" element={<PrivateRoute><Setting /></PrivateRoute>} /> */}
      {/* <Route path="chat" element={<PrivateRoute><Chat /></PrivateRoute>} />
      <Route path="boards/:boardID" element={<Board />} /> */}
    </Route>
  )
);

export default router;