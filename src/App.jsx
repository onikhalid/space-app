import {  BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

function App() {

  return (
    <BrowserRouter basename="/space-app">
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
