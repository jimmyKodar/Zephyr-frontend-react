// import getNews from "../getNews";
import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "APCA-API-KEY-ID": import.meta.env.VITE_API_KEY_ALPACA,
    "APCA-API-SECRET-KEY": import.meta.env.VITE_API_SECRET_ALPACA,
  },
};

const NewsFeed = () => {
  const [newsItems, setNewsItems] = useState("");

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_NEWS_URL}?sort=desc&limit=50&include_content=true&exclude_contentless=false`,
      options,
    )
      .then((response) => response.json())
      .then((response) => setNewsItems(response.news))
      .catch((err) => console.error(err));
  }, []);

  if (newsItems) {
    return (
      <>
        <article className="newsFeed">
          {newsItems.map((item) => {
            return (
              <NewsItem key={item.id} arrived_at={item.arrived_at} {...item} />
            );
          })}
        </article>
      </>
    );
  } else return <div>Could not fetch news from API</div>;
};

export default NewsFeed;
