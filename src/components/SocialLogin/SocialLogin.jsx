import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
function SocialLogin() {
  return (
    <div className="space-y-4">
      <button className="btn w-full hover:bg-secondary hover:text-white  bg-white text-black border-[#e5e5e5]">
        <FcGoogle size={24} />
        Login with Google
      </button>

      <button className="btn hover:bg-primary hover:text-white   w-full bg-black text-white border-black">
        <FaGithub size={24} />
        Login with GitHub
      </button>
    </div>
  );
}

export default SocialLogin;
