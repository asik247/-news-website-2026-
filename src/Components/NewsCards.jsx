import React from "react";

const NewsCards = ({ n }) => {
    const {
        title,
        author,
        thumbnail_url,
        details,
        total_view,
        rating,
    } = n;

    return (
        <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

            {/* Image */}
            <img
                src={thumbnail_url}
                alt={title}
                className="w-full h-48 object-cover"
            />

            <div className="p-4">

                {/* Author */}
                <div className="flex items-center gap-3 mb-3">
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

                {/* Title */}
                <h2 className="text-lg font-bold mb-2 line-clamp-2">
                    {title}
                </h2>

                {/* Details */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {details}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>👁 {total_view}</span>
                    <span>⭐ {rating?.number}</span>
                </div>

            </div>
        </div>
    );
};

export default NewsCards;