import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing Components
import Home from './components/FunctionalComponents/home.jsx';
import About from './components/FunctionalComponents/about.jsx';
import Gallery from './components/FunctionalComponents/gallary.jsx';
import Contact from './components/FunctionalComponents/contact.jsx';
import Signup from './components/FunctionalComponents/signup.jsx';
import NavBar from './components/FunctionalComponents/navbar.jsx'; // Corrected path

// Hooks Components
import UseState from './components/FunctionalComponents/Hooks/useState.jsx';
import UseEffect from './components/FunctionalComponents/Hooks/useEffect.jsx';
import UseEffectApi from './components/FunctionalComponents/Hooks/useEffectApi.jsx';
import UseReducer from './components/FunctionalComponents/Hooks/useReducer.jsx';
import UseEffectApiImage from './components/FunctionalComponents/Hooks/useEffectApiimage.jsx';
import UseRef from './components/FunctionalComponents/Hooks/useRef.jsx';
import UseMemo from './components/FunctionalComponents/Hooks/useMemo.jsx';
import UseCallBack from './components/FunctionalComponents/Hooks/useCallback.jsx';

// Rendering the Application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar /> {/* Include NavBar */}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Hooks Routes */}
        <Route path="/usestate" element={<UseState />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/use-effect-api" element={<UseEffectApi />} />
        <Route path="/use-effect-image" element={<UseEffectApiImage />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route path="/use-ref" element={<UseRef />} />
        <Route path="/use-memo" element={<UseMemo />} />
        <Route path="/use-callback" element={<UseCallBack />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
