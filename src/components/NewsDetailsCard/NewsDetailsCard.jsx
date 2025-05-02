import React from "react";
import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
function NewsDetailsCard({ news }) {
  const { category_id, thumbnail_url, details, title } = news;
  return (
    <div className="p-6 rounded-lg border border-gray-200 space-y-5">
      <img className="rounded-md" src={thumbnail_url} alt="" />
      <h2 className="text-2xl text-primary font-bold">{title}</h2>
      <p className="text-sm font-medium text-accent">{details}</p>
      <Link
        to={`/category/${category_id}`}
        className="btn btn-secondary text-white font-medium"
      >
        <FaArrowLeftLong size={20} />
        All news in this category
      </Link>
    </div>
  );
}

export default NewsDetailsCard;
