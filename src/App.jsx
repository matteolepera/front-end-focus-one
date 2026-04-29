import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from "./layouts/DafaultLayouts"

//PAGINE
import Home from "./pages/Home"
import Teams from "./pages/Teams"
import Drivers from "./pages/Drivers"
import TeamDetails from "./pages/TeamDetails"
import DriverDetails from "./pages/DriverDetails"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/teams/:id" element={<TeamDetails />} />
            <Route path="/drivers/:id" element={<DriverDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
