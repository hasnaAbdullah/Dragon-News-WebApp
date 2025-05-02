import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function FindUS() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Find Us On</h2>
      <div className="join join-vertical w-full ">
        <button className="btn hover:bg-transparent justify-start py-7 join-item">
          <span className="p-2  bg-base-300 rounded-full">
            {" "}
            <FaFacebook size={22} className="text-sky-400 " />
          </span>
          Facebook
        </button>
        <button className="btn hover:bg-transparent justify-start py-7 join-item">
          <span className="p-2  bg-base-300 rounded-full">
            <FaTwitter size={22} className="text-sky-500" />
          </span>
          Twitter
        </button>
        <button className="btn hover:bg-transparent justify-start py-7 join-item">
          <span className="p-2  bg-base-300 rounded-full">
            <FaInstagram size={22} />
          </span>
          Instagram
        </button>
      </div>
    </div>
  );
}

export default FindUS;
