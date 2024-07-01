import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Kanban from './pages/Kanban'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/kanban" element={<Kanban />} />
      </Routes>
    </Router>
  )
}

export default App