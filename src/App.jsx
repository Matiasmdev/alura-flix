import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import Home from './pages/Home';
import NuevoVideo from './pages/NuevoVideo';
import VideoDetail from './pages/VideoDetail';
import Footer from './components/Footer/Footer';
import { startKeepAlive, stopKeepAlive } from './services/keepAlive';

const App = () => {
  // KeepAlive como respaldo de UptimeRobot
  useEffect(() => {
    startKeepAlive();
    return () => {
      stopKeepAlive();
    };
  }, []);

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevo-video" element={<NuevoVideo />} />
        <Route path="/video/:id" element={<VideoDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
