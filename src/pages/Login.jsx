import React, { use } from "react";
import { Link } from "react-router";
import AuthContext from "../contexts/AuthContext";

function Login() {
  const { signInUser } = use(AuthContext);
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password);
  };
  return (
    <div>
      <div className="card bg-base-100 w-md max-w-lg shrink-0 shadow-2xl">
        <h2 className="text-center py-2 text-3xl font-bold">
          Please Login Now
        </h2>
        <div className="card-body">
          <form onSubmit={handleLogIn} className="fieldset space-y-3">
            <div>
              <label className="label text-base font-semibold text-gray-800">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="input w-full text-base"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="label text-base font-semibold text-gray-800">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="input w-full text-base"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
            </div>

            <button className="btn btn-neutral text-base mt-4">Login</button>
            <p className="text-center text-base">
              Don't have an account? Please{" "}
              <Link
                to="/auth/register"
                className="text-red-500 underline  font-medium"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
