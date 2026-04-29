import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import DefaultLayout from "./layouts/DafaultLayouts"

import ScrollToTop from "./components/ScrollToTop"
import Loader from './components/Loader'

//PAGINE
import Home from "./pages/Home"
import Teams from "./pages/Teams"
import Drivers from "./pages/Drivers"
import TeamDetails from "./pages/TeamDetails"
import DriverDetails from "./pages/DriverDetails"
import NotFound from './pages/NotFound'

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        {loading && <Loader />}
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams setLoading={setLoading} />} />
            <Route path="/drivers" element={<Drivers setLoading={setLoading} />} />
            <Route path="/teams/:id" element={<TeamDetails setLoading={setLoading} />} />
            <Route path="/drivers/:id" element={<DriverDetails setLoading={setLoading} />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
