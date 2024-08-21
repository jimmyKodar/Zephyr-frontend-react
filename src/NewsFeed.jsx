import { dummyData } from "./getNews";

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

const NewsItem = ({
  author,
  created_at,
  headline,
  id,
  source,
  symbols,
  updated_at,
  url,
}) => {
  return (
    <div className="newsItem">
      <time className="timestamp_recieved"></time>
      <div className="timestamp_created">{created_at}</div>
      <div className="timestamp_updated">{updated_at}</div>
      <div className="symbols">{symbols}</div>
      <div className="id">{id}</div>
      <div className="author">{author}</div>
      <div className="source">{source}</div>
      <div className="URL">{url}</div>
      <h1 className="headline">{headline}</h1>
    </div>
  );
};

export default NewsFeed;
