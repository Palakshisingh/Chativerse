import { Routes,Route } from 'react-router'
import HomePage from "./pages/HomePage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import NotificationsPage from  "./pages/NotificationsPage.jsx"
import CallPage from  "./pages/CallPage.jsx"
import ChatPage from  "./pages/ChatPage.jsx"
import OnBoardingPage from  "./pages/OnBoardingPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import {Toaster} from "react-hot-toast"
const App = () => {
  return (
    <div className=' h-screen text-5xl' data-theme="coffee">
      <button onClick={() => toast.error("IT works!")}>Toast check </button>
      <Routes>
        <Route path = "/" element = {<HomePage/>}></Route>
        <Route path = "/signup" element = {<SignUpPage/>}></Route>
        <Route path = "/login" element = {<LoginPage/>}></Route>
        <Route path = "/notifications" element = {<NotificationsPage/>}></Route>
        <Route path = "/call" element = {<CallPage/>}></Route>
        <Route path = "/chat" element = {<ChatPage/>}></Route>
        <Route path = "/onboarding" element = {<OnBoardingPage/>}></Route>
      </Routes>

      <Toaster/>
    </div>
  )
}

export default App