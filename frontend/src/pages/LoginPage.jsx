
const LoginPage = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-5 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <img
            alt="Your Company"
            src="logo.png"
            className="mx-auto h-15 w-50"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
           Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-3">
      
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
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                
                </div>
              </div>
              <div className="mt-2">
                <input
                    placeholder="Password"
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
            <div className="space-x-3"> <span>Create a account?</span><span className="text-indigo-600"><a className="hover:underline " href="/signup">Sign Up</a></span></div>
          </form>

          <p className="mt-2  text-center text-sm/6 text-gray-500">
      
            <a href="#" className="font-semibold flex items-center justify-center  text-indigo-600 hover:text-indigo-500 border-2 rounded-2xl focus-visible:outline-indigo-600 ">
              <img src="google.png" alt="Logo" width={30} />   Continue With Google
            </a>
          </p>
        </div>
      </div>
  )
}

export default LoginPage
