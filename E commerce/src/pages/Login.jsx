import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-white lg:px-[300px] px-0">
      <section className="bg-[#F2F2F280] w-full ">
        <div class="flex flex-col justify-center items-center  py-12 w-full px-2 ">
          <div class="sm:mx-auto sm:w-full sm:max-w-md text-center">
            <h2 class="mt-6 text-3xl font-extrabold text-center text-neutral-600">
              User Login!
            </h2>
            <p>Please enter your credentials below to continue</p>
          </div>

          <div class="mt-8 sm:mx-auto sm:w-full flex justify-center items-center">
            <div class="lg:px-4 py-8 px-0">
              <form class="space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div class="mt-1">
                    <input
                      placeholder="Enter your Username"
                      type="email"
                      autocomplete="email"
                      required=""
                      class="block w-full px-5 py-3 lg:w-[500px] text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <div class="mt-1">
                    <input
                      placeholder="Enter your password"
                      type="password"
                      autocomplete="current-password"
                      required=""
                      class="block px-5 py-3 lg:w-[500px] w-[350px] text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      for="remember-me"
                      class="block ml-2 text-sm text-neutral-600"
                    >
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>

                  <div class="text-sm">
                    <Link
                      to="/ForgotPassword"
                      class="font-medium lg:text-base text-[7px] hover:text-blue-500 underline text-[#BE0CE7]"
                    >
                      {" "}
                      Forgot your password?{" "}
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-[#BE0CE7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
