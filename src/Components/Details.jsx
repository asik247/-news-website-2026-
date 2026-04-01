import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const Details = () => {
    const news = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className="max-w-4xl mx-auto p-4">

            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="btn btn-sm btn-outline mb-4"
            >
                ⬅ Back
            </button>

            {/* Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

                {/* Image */}
                <img
                    src={news.thumbnail_url}
                    alt={news.title}
                    className="w-full h-80 object-cover"
                />

                {/* Content */}
                <div className="p-6">

                    {/* Title */}
                    <h1 className="text-3xl font-bold mb-4">
                        {news.title}
                    </h1>

                    {/* Author */}
                    <div className="flex items-center gap-3 mb-4">
                        <img
                            src={news.author?.img}
                            alt={news.author?.name}
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <p className="font-semibold">
                                {news.author?.name}
                            </p>
                            <p className="text-sm text-gray-500">
                                {new Date(news.author?.published_date).toDateString()}
                            </p>
                        </div>
                    </div>

                    {/* Details Text */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                        {news.details}
                    </p>

                    {/* Footer Info */}
                    <div className="flex justify-between items-center border-t pt-4 text-gray-500">

                        <span className="flex items-center gap-1">
                            👁 {news.total_view || 0}
                        </span>

                        <span className="flex items-center gap-1">
                            ⭐ {news.rating?.number || 0}
                        </span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;