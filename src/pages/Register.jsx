import React from "react";
import { Link } from "react-router";

function Register() {
  return (
    <div>
      <div className="card bg-base-100 w-md max-w-lg shrink-0 shadow-2xl">
        <h2 className="text-center py-2 text-3xl font-bold">
          Please Register Now
        </h2>
        <div className="card-body">
          <form className="fieldset space-y-3">
            {/* name */}
            <div>
              <label className="label text-base font-semibold text-gray-800">
                Name
              </label>
              <input
                type="text"
                className="input w-full text-base"
                placeholder="name"
              />
            </div>
            {/* photo URL */}
            <div>
              <label className="label text-base font-semibold text-gray-800">
                Photo URL
              </label>
              <input
                type="text"
                className="input w-full text-base"
                placeholder="photo URL"
              />
            </div>
            {/* email */}
            <div>
              <label className="label text-base font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                className="input w-full text-base"
                placeholder="Email"
              />
            </div>
            {/* password */}
            <div>
              <label className="label text-base font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                className="input w-full text-base"
                placeholder="Password"
              />
            </div>

            <button className="btn btn-neutral text-base mt-4">Register</button>
            <p className="text-center text-base">
              Already have an account? Please
              <Link
                to="/auth/login"
                className="text-red-500 underline  font-medium"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
