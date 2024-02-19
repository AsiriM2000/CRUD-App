import { BrowserRouter, Routes, Route } from "react-router-dom"
import User from "./pages/User"
import CreateUser from "./pages/CreateUser"
import UpdateUser from "./pages/UpdateUser"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<User/>}></Route>
            <Route path="/create" element={<CreateUser/>}></Route>
            <Route path="/update/:id" element={<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
