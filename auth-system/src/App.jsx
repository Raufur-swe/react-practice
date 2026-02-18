import React, { useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import SignUp from "./pages/SignUp"
import Login from "./pages/LoginPage"
import DashBoard from './pages/DashBoard'

const App = () => {
 
 const [page , setPage] = useState();
 return (
<AuthProvider>
  {page === "signup" && <SignUp setPage={setPage} /> }
  {page === "login" && <Login setPage={setPage} /> }
  {page === "dashboard" && <DashBoard/> }
</AuthProvider>
  )
}

export default App;