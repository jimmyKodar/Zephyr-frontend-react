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
      <div className="symbols">
        {symbols.map((ticker) => {
          return (
            <span key={ticker} className="ticker">
              {ticker}
            </span>
          );
        })}
      </div>
      <div className="id">{id}</div>
      <div className="author">{author}</div>
      <div className="source">{source}</div>
      <div className="URL">{url}</div>
      <h1 className="headline">{headline}</h1>
    </div>
  );
};

export default NewsItem;
