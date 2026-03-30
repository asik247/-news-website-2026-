import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoriesNews = () => {
    const { id } = useParams();
    // console.log(id);
    const allNews = useLoaderData();
    // console.log(allNews);
    const [news, setNews] = useState([]);
    useEffect(() => {
        if (id == '0') {
            setNews(allNews);
            return;
        } else if (id == '1') {
            const filterNews = allNews.filter(news => news.others.is_today_pick == true);
            setNews(filterNews);
        } else {
            const filterNews = allNews.filter(news => news.category_id == id);
            // console.log(filterNews);
            setNews(filterNews)
        }

    }, [allNews, id])
    return (
        <div>
            <h2>All News here ({news.length})</h2>
        </div>
    );
};

export default CategoriesNews;