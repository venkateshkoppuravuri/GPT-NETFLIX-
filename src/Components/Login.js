import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/f701e918-50a2-4122-96ac-206fd8110fd1/GB-en-20231204-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="back-ground"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-full rounded-md bg-neutral-800"
          />
        )}
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-3 my-2 w-full rounded-md bg-neutral-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full rounded-md bg-neutral-800"
        />
        <button className="p-3 my-6 bg-red-700 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already Registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
