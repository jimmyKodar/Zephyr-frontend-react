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
      <span className="timestamp">{created_at.slice(11, -1)}</span>
      <span>
        {symbols.map((ticker) => {
          return (
            <span key={ticker} className={`ticker ${highlight()}`}>
              {ticker}
            </span>
          );
        })}

        <span className="headline">{headline}</span>
        {
          <small className="newsItemInfo">
            ID: {id} / Created: {created_at} / Updated: {updated_at} / Author:{" "}
            {author} / Source:{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {source}
            </a>
          </small>
        }
      </span>
    </article>
  );
};

const highlight = () => {
  if (Math.random() * 100 > 70) {
    return "tickerHighlight";
  } else {
    return "";
  }
};

const timestampNow = () => {
  let now = new Date();
  let currentTimeHours = (now.getHours() - 6).toString().padStart(2, 0);
  let mincurrentTimeMinutes = now.getMinutes().toString().padStart(2, 0);
  let mincurrentTimeSeconds = now.getSeconds().toString().padStart(2, 0);
  return `${currentTimeHours}:${mincurrentTimeMinutes}:${mincurrentTimeSeconds}`;
};

export default NewsItem;
