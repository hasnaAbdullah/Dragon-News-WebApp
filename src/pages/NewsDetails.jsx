import React, { useEffect, useState } from "react";
import HeaderTop from "../components/Header/HeaderTop";
import RightSide from "../components/homelayouts/RightSide";

import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "../components/NewsDetailsCard/NewsDetailsCard";

function NewsDetails() {
  const { newsId } = useParams();
  const newses = useLoaderData();
  const [news, setNews] = useState({});

  useEffect(() => {
    const currentNews = newses.find((news) => news.id == newsId);
    setNews(currentNews);
  }, [newsId, newses]);
  return (
    <div>
      <div className="flex flex-col items-center py-5">
        <HeaderTop />
      </div>

      <main className="w-10/12 mx-auto grid grid-cols-12 gap-8">
        <section className="col-span-9">
          <h2 className="text-2xl font-bold mb-5 ">News Details</h2>
          <NewsDetailsCard news={news} />
        </section>
        <aside className="col-span-3">
          <RightSide />
        </aside>
      </main>
    </div>
  );
}

export default NewsDetails;
