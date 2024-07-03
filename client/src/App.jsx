import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Kanban from './pages/Kanban'
import { AuthProvider } from './utils/AuthContext'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/kanban" element=
          {
            <AuthProvider redirect={"/teste"}>
              <Kanban />
            </AuthProvider>
          }
        />
      </Routes>
    </Router>
  )
}

export default App