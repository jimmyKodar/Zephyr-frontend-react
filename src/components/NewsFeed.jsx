import { dummyData } from "../getNews";
import NewsItem from "./NewsItem";

const newsItems = dummyData; // DEV: While using dummy data

const NewsFeed = () => {
  return (
    <article className="newsFeed">
      <h1>NEWS FEED</h1>

      {newsItems.map((item) => {
        return <NewsItem key={item.id} {...item} />;
      })}
    </article>
  );
};

export default NewsFeed;
