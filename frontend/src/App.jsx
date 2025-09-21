import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import TextGenerator from './pages/Textgenerator';
import ScrollToTop from './components/ScrollToTop';
import Quotegenerator from './pages/Quotegenerator';
import Codegenerator from './pages/Codegenerator';
import Businessnamegenerator from './pages/Businessnamegenerator';
import Hashtaggenerator from './pages/Hashtaggenerator';
import QA from './pages/QA';
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './store/useAuthStore';
import { useEffect } from 'react';
import { Loader } from 'lucide-react';
import PleaseLoginPage from './pages/PleaseLoginPage';

function App() {

  const {authUser,checkAuth,isCheckingAuth}=useAuthStore()
    useEffect(()=>{
    checkAuth()
  },[checkAuth])
  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  return (
<div>
    <ScrollToTop />
   <Routes>
    
    <Route path='/' element={  <Home/> } />
					<Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
          	<Route path='/login' element={!authUser ? <LoginPage/> : <Navigate to="/" />}/>
            	<Route path='/text-generator' element={!authUser? <PleaseLoginPage/>:<TextGenerator/>} />
              <Route path='/quote-generator' element={!authUser? <PleaseLoginPage/>:<Quotegenerator/>} />
               <Route path='/code-generator' element={!authUser? <PleaseLoginPage/>:<Codegenerator/>} />
               <Route path='/businessname-generator' element={!authUser? <PleaseLoginPage/>:<Businessnamegenerator/>} />
                <Route path='/hashtag-generator' element={!authUser? <PleaseLoginPage/>:<Hashtaggenerator/>} />
                <Route path='/answer-generator' element={!authUser? <PleaseLoginPage/>:<QA/>} />

            	
				</Routes>
          <Toaster />
</div>
  )
}

export default App
