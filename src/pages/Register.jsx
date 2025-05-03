import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";
import { updateProfile } from "firebase/auth";

function Register() {
  const { setUser, createUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log({ name, photo, email, password });
    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        updateProfile(result.user, { displayName: name, photoURL: photo });
        navigate("/");
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };
  return (
    <div>
      <div className="card bg-base-100 w-md max-w-lg shrink-0 shadow-2xl">
        <h2 className="text-center py-2 text-3xl font-bold">
          Please Register Now
        </h2>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset space-y-3">
            {/* name */}
            <div>
              <label className="label text-base font-semibold text-gray-800">
                Name
              </label>
              <input
                name="name"
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
                name="photo"
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
                name="email"
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
                name="password"
                type="password"
                className="input w-full text-base"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="btn btn-neutral text-base mt-4">
              Register
            </button>
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
