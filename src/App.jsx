import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, redirect} from "react-router-dom"
import Homepage from '../pages/Homepage'
import Active from '../pages/Active'
import Create from '../pages/Create'
import Polls from '../pages/Polls'
import Worldcoin from '../components/Worldcoin'
import Layout from '../components/Layout'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Homepage />}/>
      <Route path="signin" element={<Worldcoin />} />
         
          <Route element={<Layout />}>
              <Route path="active" element={<Active />} />
              <Route path="create" element={<Create />}
              layout= {async() => {
                const isLoggedIn = false
                if(!isLoggedIn){
                throw redirect("signin");
                }
                return null
            }}/>
              <Route path="polls" element={<Polls />} />
          </Route>
  </>
))


function App() {
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
