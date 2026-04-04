import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import NewsCards from '../Components/NewsCards';

const CategoriesNews = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const allNews = useLoaderData();

    const [news, setNews] = useState([]);

    // 👉 Navigate handler
    const handler = (id) => {
        navigate(`/details/${id}`);
    };

    // 👉 Filter logic
    useEffect(() => {
        if (id === '0') {
            setNews(allNews);
        } 
        else if (id === '1') {
            const todayPick = allNews.filter(n => n?.others?.is_today_pick);
            setNews(todayPick);
        } 
        else {
            const categoryNews = allNews.filter(n => String(n.category_id) === id);
            setNews(categoryNews);
        }
    }, [allNews, id]);

    return (
        <div className="space-y-5">

            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                    📰 News ({news.length})
                </h2>
            </div>

            {/* News List */}
            {
                news.length > 0 ? (
                    <div className="grid grid-cols-1 gap-5">
                        {
                            news.map(n => (
                                <NewsCards 
                                    key={n.id} 
                                    n={n} 
                                    handler={handler}
                                />
                            ))
                        }
                    </div>
                ) : (
                    // 👉 Empty state
                    <div className="text-center py-10 bg-base-200 rounded-xl">
                        <h3 className="text-lg font-semibold text-gray-600">
                            😔 No News Found
                        </h3>
                        <p className="text-gray-400 mt-2">
                            Try another category
                        </p>
                    </div>
                )
            }

        </div>
    );
};

export default CategoriesNews;