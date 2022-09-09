import styled from 'styled-components'
import Header from './components/Header';
import {Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import CreateNFT from './components/CreateNFT';
import Footer from './components/Footer';
import SpeedDialComponent from './components/SpeedDialComponent';

function App() {
  return (
    <>
    <SpeedDialComponent />

    <Header />

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create" element={<CreateNFT />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;

