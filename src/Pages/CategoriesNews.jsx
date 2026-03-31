import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCards from '../Components/NewsCards';

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
            <div className='grid grid-cols-1 gap-5'>
                {
                    news.map(n => <NewsCards key={n.id} n={n}></NewsCards>)
                }
            </div>
        </div>
    );
};

export default CategoriesNews;
{/* ✅✅✅✅ */ }
