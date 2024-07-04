import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Rentals from "./pages/Rentals"
import About from "./pages/About"


function App() {
  return (
    <div className="main-app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/a-propos" element={<About />} />
        <Route path="/location/:id" element={<Rentals />} />
        <Route path="/error" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
