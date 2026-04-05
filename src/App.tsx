import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'
import Placements from './pages/Placements'
import Research from './pages/Research'
import CampusLife from './pages/CampusLife'
import Events from './pages/Events'
import Library from './pages/Library'
import Students from './pages/Students'
import Alumni from './pages/Alumni'
import Contact from './pages/Contact'
import Departments from './pages/Departments'
import DepartmentDetail from './pages/DepartmentDetail'
import AIAssistant from './pages/AIAssistant'
import Progress from './pages/Progress'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="departments" element={<Departments />} />
          <Route path="departments/:slug" element={<DepartmentDetail />} />
          <Route path="academics" element={<Academics />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="placements" element={<Placements />} />
          <Route path="research" element={<Research />} />
          <Route path="progress" element={<Progress />} />
          <Route path="events" element={<Events />} />
          <Route path="library" element={<Library />} />
          <Route path="campus-life" element={<CampusLife />} />
          <Route path="students" element={<Students />} />
          <Route path="alumni" element={<Alumni />} />
          <Route path="contact" element={<Contact />} />
          <Route path="assistant" element={<AIAssistant />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
