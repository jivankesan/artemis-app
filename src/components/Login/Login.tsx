import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="form-container space-y-4">
        <div className="email-input space-y-2">
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="input-style"
            id="email"
            placeholder="m@example.com"
            required
            type="email"
          />
        </div>
        <div className="divider flex items-center space-x-2">
          <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
          <span className="text-zinc-400 dark:text-zinc-300 text-sm">OR</span>
          <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
        </div>
        <button className="google-btn">
          <div className="flex items-center justify-center">
            {/* SVG for Google */}
            Login with Google
          </div>
        </button>
        <button className="apple-btn">
          <div className="flex items-center justify-center">
            {/* SVG for Apple */}
            Login with Apple
          </div>
        </button>
      </div>
    </div>
  );
};

export default Login;
