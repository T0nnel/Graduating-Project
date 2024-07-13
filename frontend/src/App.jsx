import './App.css'
import { Landingpage } from './pages/landingpage/Landingpage'
import {HashRouter as Router,Routes,Route} from "react-router-dom"
import { Orderpage } from './pages/orderpage/orderpage'
import { Addproduct } from './pages/addproduct/addproduct'
import {HomePage} from './pages/homepage/homepage'

function App() {

  return (
    <>
      <div>
        <Router>
        <Routes>
          <Route index element={<Landingpage/>}/>
          <Route path="/order" element={<Orderpage/>}/>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/addproduct" element={<Addproduct/>}/>
        </Routes>
        </Router>
        </div>
    </>
  )
}

export default App
