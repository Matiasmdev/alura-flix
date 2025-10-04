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
  // Iniciar el servicio de keep-alive cuando la app se monta
  useEffect(() => {
    startKeepAlive();

    // Limpiar el intervalo cuando la app se desmonta
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
