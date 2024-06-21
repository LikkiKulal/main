import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation
} from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Rewards from './pages/rewards';
import MakePayment from './pages/makepayment';
import ReferAndEarn from './pages/referandearn';
import Banner from './pages/banner';
import Popup from './pages/popup';
import Packed from './pages/packed';
import Empty from './pages/empty';


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = '';
    let description = '';

    switch (pathname) {
      case '/':
        title = 'Home Page';
        description = 'This is the home page description.';
        break;
      case '/dashboard':
        title = 'Dashboard';
        description = 'Dashboard description.';
        break;
      case '/rewards':
        title = 'Rewards';
        description = 'Rewards page description.';
        break;
        case '/packed':
          title = 'Packed';
          description = 'Packed page description.';
          break;
          case '/empty':
            title = 'Empty';
            description = 'Empty page description.';
            break;
      // Add cases for other routes as needed
      default:
        title = '';
        description = '';
    }

    document.title = title;

    const metaDescriptionTag = document.querySelector(
      'head > meta[name="description"]'
    );
    if (metaDescriptionTag) {
      metaDescriptionTag.content = description;
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/makepayment" element={<MakePayment />} />
      <Route path="/referandearn" element={<ReferAndEarn />} />
      <Route path="/banner" element={<Banner />} />
      <Route path="/popup" element={<Popup />} />
      <Route path="/packed" element={<Packed />} />
      <Route path="/empty" element={<Empty />} />
      {/* Add more routes for other pages as needed */}
    </Routes>
  );
}

export default App;
