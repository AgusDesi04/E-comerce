import { BrowserRouter } from "react-router-dom";
import Footer from "./componentes/Footer.jsx";
import Header from "./componentes/Header.jsx";
import Main from "./componentes/Main.jsx";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}
export default App;
