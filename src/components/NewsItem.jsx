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
    <article className="newsItem">
      <h1 className="headline">{headline}</h1>
      <div className="tickers">
        {symbols.map((ticker) => {
          return (
            <span key={ticker} className={`ticker ${highlight()}`}>
              {ticker}
            </span>
          );
        })}
      </div>
      <small className="newsItemInfo">
        ID: {id} / Created: {created_at} / Updated: {updated_at} / Author:{" "}
        {author} / Source:{" "}
        <a href={url} target="_blank" rel="noopener noreferrer">
          {source}
        </a>
      </small>
    </article>
  );
};

function highlight() {
  if (Math.random() * 100 > 70) {
    return "tickerHighlight";
  } else {
    return "";
  }
}

export default NewsItem;
