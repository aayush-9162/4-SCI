import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import SoilSmartSchools from './pages/SoilSmartSchools.jsx'
import SustainableVillages from './pages/SustainableVillages.jsx'
import SkillsMissions from './pages/SkillsMissions.jsx'
import DomainDetail from './pages/DomainDetail.jsx'
import FarmerResources from './pages/FarmerResources.jsx'
import TeacherResources from './pages/TeacherResources.jsx'
import ImpactDashboard from './pages/ImpactDashboard.jsx'
import Stories from './pages/Stories.jsx'
import Partners from './pages/Partners.jsx'
import RegisterLogin from './pages/RegisterLogin.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/soil-smart-schools" element={<SoilSmartSchools />} />
        <Route path="/sustainable-villages" element={<SustainableVillages />} />
        <Route path="/skills-missions" element={<SkillsMissions />} />
        <Route path="/domains/:slug" element={<DomainDetail />} />
        <Route path="/farmer-resources" element={<FarmerResources />} />
        <Route path="/teacher-resources" element={<TeacherResources />} />
        <Route path="/impact" element={<ImpactDashboard />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/register" element={<RegisterLogin />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
