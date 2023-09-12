import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Search from './pages/Search';
import Movies from './pages/Movies';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path={ '/' } element={ <Home /> }></Route>
          <Route path={ '/search/:query' } element={ <Search /> }></Route>
          <Route path={ '/movies/:id' } element={ <Movies /> }></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
