import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Menu";
import NuevoVideo from "./components/NuevoVideo";
import Banner from "./components/Banner";
import styled from "styled-components";
import Footer from "./components/Footer";
import Secciones from "./components/Secciones";

const ContenedorEstilizado = styled.div`
  position: relative;
  z-index: 1;
  background-color: #191919;

`;

function App() {
  return (
    <ContenedorEstilizado>
    <GlobalStyles />
    <Router>
      <Header oscuro={false} />
      <Routes>
        <Route path="/"element={
          <>
              <Banner />
              <Secciones />
              <Footer />
            </>
          }
          />
          <Route path="/nuevo_video" element={<NuevoVideo />} />
          {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </Router>
  </ContenedorEstilizado>
  )
}

export default App;
