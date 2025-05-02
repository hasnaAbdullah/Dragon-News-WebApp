import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const NewsCard = ({ news }) => {
  const { title, thumbnail_url, author, rating, total_view, details, tags } =
    news;

  const publishedDate = new Date(author.published_date)
    .toISOString()
    .split("T")[0];

  return (
    <div className="bg-base-100 rounded-box shadow p-5 space-y-3">
      {/* Top section: Author */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">{publishedDate}</p>
          </div>
        </div>
        <div className="space-x-2">
          <button>
            <FaRegBookmark className="text-xl text-gray-500 cursor-pointer" />
          </button>
          <button>
            <FiShare2 className="text-xl text-gray-500 cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg md:text-xl font-bold">{title}</h2>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt="news"
        className="rounded-lg w-full max-h-[200px] object-cover"
      />

      {/* Details (trimmed) */}
      <p className="text-sm text-gray-600">
        {details.length > 200 ? details.slice(0, 200) + "..." : details}
        <span className="text-primary font-semibold ml-1 cursor-pointer">
          Read More
        </span>
      </p>

      {/* Tags */}
      <p className="text-sm text-gray-400">
        Tags:
        {tags.map((tag, i) => (
          <span key={i}>
            {tag}
            {i < tags.length - 1 && ","}{" "}
          </span>
        ))}
      </p>

      {/* Bottom: Rating and Views */}
      <div className="flex justify-between items-center pt-3 border-t">
        <div className="flex items-center gap-1 text-warning">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "text-warning" : "text-base-300"}
            />
          ))}
          <span className="text-base text-gray-700 ml-1">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
