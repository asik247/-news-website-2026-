// import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const NewsCards = ({ n, handler }) => {
  // console.log(n);
  const { title, author, thumbnail_url, total_view, rating, id } = n;
  // const { user } = useContext(AuthContext)
  return (
    <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Top: Author + Title */}
      <div className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">{author?.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toDateString()}
            </p>
          </div>
        </div>

        <h2 className="text-lg font-bold line-clamp-2">
          {title}
        </h2>
      </div>

      {/* Middle: Image */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Bottom: Info ✅✅✅✅*/}
      <div className="p-4 flex justify-between items-center text-sm text-gray-500">
        <span>👁 {total_view}</span>

        <button
      
        onClick={()=>handler(id)}
          className="btn btn-primary"
        >
        Read More
        </button>

        <span>⭐ {rating?.number}</span>
      </div>
      {/* LogOut added */}

    </div>
  );
};

export default NewsCards;

/**  {user?onClick={handler.id}:''} */