import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard/NewsCard";

function CatergoryNews() {
  const [categoriesNews, setCategoriesNews] = useState([]);
  const { id: categoryId } = useParams();
  const newsData = useLoaderData();

  useEffect(() => {
    if (categoryId == "0") {
      setCategoriesNews(newsData);
    } else if (categoryId == "1") {
      const breakingNews = newsData.filter((news) => news.others.is_today_pick);
      setCategoriesNews(breakingNews);
    } else {
      const filteredNews = newsData.filter(
        (news) => news.category_id == categoryId
      );
      setCategoriesNews(filteredNews);
    }
  }, [categoryId, newsData]);
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-7">
        Total <span className="text-secondary">{categoriesNews.length}</span>{" "}
        news Found
      </h2>

      <div className="grid grid-cols-1 p-3 gap-8">
        {categoriesNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
}

export default CatergoryNews;
