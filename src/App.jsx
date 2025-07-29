import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

import Home from "./pages/home"
import Login from "./pages/loginPage"
import Sobre from "./pages/sobre"
import CentralDeAjuda from "./pages/centralDeAjuda"
import Register from "./pages/registerPage"
import MotoristaPage from "./pages/motoristaPage"
import RegistermotoPage from "./pages/registermotoPage"
import ContactPage from "./pages/contactPage"; 
import LoginMoto from "./pages/loginMotoPage"
import RegisterCar from "./pages/registrocarro"


function App() {
  return (                                                       
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginMoto" element={<LoginMoto />} />
        <Route path="/about" element={<Sobre />} />
        <Route path="/help" element={<CentralDeAjuda />} />
        <Route path="/register" element={<Register />} />
        <Route path="/motorista" element={<MotoristaPage />} />
        <Route path="/registermoto" element={<RegistermotoPage />} />
        <Route path="/registercar" element={<RegisterCar />} />
        <Route path="/contactPage" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
