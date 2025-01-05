import { Route, Routes } from "react-router-dom"
import HeroPage from "./Pages/hero-page"
import Form from "./Pages/form-page"
import KnowPage from "./Pages/knowmore-page"
import UserProfile from "./Pages/user-profile"
import AuthPage from "./Pages/auth-page"
import SignUpPage from "./Pages/signup-page"

function App(){

  return (
    <>
    <Routes>
      <Route path="/" element={<HeroPage/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/know" element = {<KnowPage/>}/>
      <Route path="/profile" element={<UserProfile/>}/>
      <Route path="/login" element={<AuthPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
    </Routes>
    </>
  )
}
export default App