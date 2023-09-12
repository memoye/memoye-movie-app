import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path={ '/' } element={ <Home /> }></Route>
          <Route path={ 'search' } element={ <Home /> }></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
