import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="main-app">
      <Header />

      <Routes>
        <Route path="/" element={<Accueil />}/>
        <Route path="/a-propos" element={<A-propos />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="/error" element={<Erreur />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
