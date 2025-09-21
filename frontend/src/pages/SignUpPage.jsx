import {React,useState} from 'react'
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore"
import { Eye, EyeOff, Loader2 } from 'lucide-react';
const SignUpPage = () => { 
   const { signup, isSigningUp ,handleGoogleLogin} = useAuthStore();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
    const validateForm = () => {
      if (!formData.fullName.trim()) return toast.error("Full name is required");
      if (!formData.email.trim()) return toast.error("Email is required");
      if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
      if (!formData.password) return toast.error("Password is required");
      if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");
      return true;
    
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      
    const success = validateForm();

    if (success === true) signup(formData); }
  return (
     <div className="flex min-h-full flex-col justify-center px-6  lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <img
            alt="Your Company"
            src="logo.png"
            className="mx-auto h-15 w-50"
          />
          <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign Up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-3"onSubmit={handleSubmit} >
                   <div>
              <label htmlFor="email" className="text-sm/6 font-medium text-gray-900 flex items-center justify-between">
              
               Username
              </label>
              <div className="mt-2">
                <input
                placeholder="Username"
                  id="Username"
                  name="Username"
                  type="Username"
                  required
                  autoComplete="Username"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}/>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-sm/6 font-medium text-gray-900 flex items-center justify-between">
                Email address
              </label>
              <div className="mt-2">
                <input
                placeholder="Email"
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

         <div>
  <div className="flex items-center justify-between">
    <label
      htmlFor="password"
      className="block text-sm font-medium text-gray-900"
    >
      Password
    </label>
  </div>

  <div className="mt-2 relative"> {/* ✅ Make wrapper relative */}
    <input
      placeholder="Password"
      id="password"
      name="password"
      type={showPassword ? "text" : "password"}
      required
      autoComplete="current-password"
      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
      value={formData.password}
      onChange={(e) =>
        setFormData({ ...formData, password: e.target.value })
      }
    />

    {/* ✅ Fixed button positioning */}
    <button
      type="button"
      className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-purple-600"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? (
        <Eye className="w-5 h-5" />
      ) : (
        <EyeOff className="w-5 h-5" />
      )}
    </button>
  </div>
</div>

            <div>
              
             <button type="submit"  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={isSigningUp}>
              {isSigningUp ? (
                <>
                  <Loader2 className=" flex justify-center  size-10  animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign Up"
              )}
            </button>  
            </div>
                          <Link to={"/login"}>
            <div className="space-x-3"> <span>Create a account?</span><span className="text-indigo-600"><a className="hover:underline ">Log In</a></span></div> </Link>

          </form>

          <p className="mt-2  text-center text-sm/6 text-gray-500">
     
     <button onClick={handleGoogleLogin}className="font-semibold flex w-full items-center justify-center  text-indigo-600 hover:text-indigo-500 border-2 rounded-2xl focus-visible:outline-indigo-600 ">
              <img src="google.png" alt="Logo" width={30} />   Continue With Google
            </button>
          </p>
        </div>
      </div>
  )}

export default SignUpPage
