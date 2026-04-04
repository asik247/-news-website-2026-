import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const NewsCards = ({ n, handler }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { title, author, thumbnail_url, total_view, rating, id } = n;

  const handleReadMore = () => {
    if (user) {
      handler(id); // logged in → previous handler (navigate to details)
    } else {
      navigate("/auth/login"); // not logged in → go to login page
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Top: Author + Title */}
      <div className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold">{author?.name || "Unknown"}</p>
            <p className="text-xs text-gray-500">
              {author?.published_date
                ? new Date(author.published_date).toDateString()
                : "Date unknown"}
            </p>
          </div>
        </div>

        <h2 className="text-lg font-bold line-clamp-2">{title}</h2>
      </div>

      {/* Middle: Image */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-48 object-cover hover:scale-105 transition duration-300"
      />

      {/* Bottom: Info */}
      <div className="p-4 flex justify-between items-center text-sm text-gray-500">

        <span>👁 {total_view || 0}</span>

        <button
          onClick={handleReadMore}
          className="btn btn-primary"
        >
          Read More
        </button>

        <span>⭐ {rating?.number || 0}</span>
      </div>

    </div>
  );
};

export default NewsCards;