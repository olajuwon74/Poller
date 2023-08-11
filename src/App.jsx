import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from '../pages/Homepage'
import Active from '../pages/Active'
import Create from '../pages/Create'
import Polls from '../pages/Polls'
import Layout from '../components/Layout'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
          <Route element={<Layout />}>
            <Route path="/active" element={<Active />} />
            <Route path="/create" element={<Create />} />
            <Route path="/polls" element={<Polls />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
