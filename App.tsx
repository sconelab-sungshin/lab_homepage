import React from 'react';
import { HashRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import People from './pages/People';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import Resources from './pages/Resources';
import News from './pages/News';
import Opportunities from './pages/Opportunities';
import Photos from './pages/Photos';

// ScrollToTop component to ensure pages start at the top when navigating
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
       <header className="pt-10 pb-5 text-center bg-[#fcfcfc]">
        <div className="max-w-[900px] mx-auto px-5">
          <Link to="/" className="inline-block">
            <h1 className="text-[2.2rem] md:text-[3.5rem] font-bold tracking-wider mb-1 text-[#333]">
                SCONE LAB
            </h1>
          </Link>
            <div className="text-sm md:text-base text-[#777] tracking-wider">
                @ Sungshin Women's University
            </div>
        </div>
      </header>

      <Navigation />

      <main className="flex-1 max-w-[900px] w-full mx-auto px-5">
        {children}
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/news" element={<News />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;