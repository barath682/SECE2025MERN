import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/FunctionalComponents/home.jsx'
import About from './components/FunctionalComponents/about.jsx'
import Gallery from './components/FunctionalComponents/gallary.jsx'
import Contact from './components/FunctionalComponents/contact.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/FunctionalComponents/signUp.jsx'
import UseState from './components/FunctionalComponents/Hooks/useState.jsx'
import UseEffect from './components/FunctionalComponents/Hooks/useEffect.jsx'
import UseEffectApi from './components/FunctionalComponents/Hooks/useEffectApi.jsx'
import UseReducer from './components/FunctionalComponents/Hooks/useReducer.jsx'
import UseEffectApiImage from './components/FunctionalComponents/Hooks/useEffectApiimage.jsx'
import UseRef from './components/FunctionalComponents/Hooks/useRef.jsx'
import UseMemo from './components/FunctionalComponents/Hooks/useMemo.jsx'
import UseCallBack from './components/FunctionalComponents/Hooks/useCallback.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/gallery" element={<Gallery/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/usestate" element={<UseState/>}></Route>
      <Route path="/use-effect" element={<UseEffect/>}></Route>
      <Route path="/use-effect-api" element={<UseEffectApi/>}></Route>
      <Route path="/use-effect-Image" element={<UseEffectApiImage/>}></Route>
      <Route path="/use-reducer" element={<UseReducer/>}></Route>
      <Route path="/use-ref" element={<UseRef/>}></Route>
      <Route path='/use-memo' element={<UseMemo/>}></Route>
      <Route path='/use-callback' element={<UseCallBack/>}></Route>
    </Routes>
    
    </BrowserRouter>
    
  </StrictMode>,
)