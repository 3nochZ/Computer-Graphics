import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import DestinationPage from './pages/DestinationPage'

const App = () => {
  const location = useLocation()

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-void to-midnight text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations/:id" element={<DestinationPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
