/*
 author,
  content,
  created_at,
  headline,
  id,
  source,
  symbols,
  updated_at,
  url,
  arrived_at,
*/

const NewsItem = ({ created_at, headline, symbols, arrived_at }) => {
  // const formatContent = () => {
  //   let formatedContent = content
  //     .replace(/<[^>]*>/g, "")
  //     .replace(/&nbsp;/g, " ")
  //     .replace(/&#8217;/g, "’")
  //     .replace(/&#8216;/g, "‘")
  //     .replace(/&#8221;/g, "”")
  //     .replace(/&#8211;/g, "–")
  //     .replace(/&#39;/g, "'")
  //     .replace(/&#8220;/g, "“")
  //     .replace(/&amp;/g, "&")
  //     .replace(/&#x2A;/g, "*")
  //     .replace(/&#8230;/g, "…");

  //   return formatedContent;
  // };

  return (
    <article className="newsItem">
      <span className="timestamp">
        {created_at.slice(11, -1)}
        <br />
        {arrived_at && (
          <small className="newsItemInfo">{arrived_at.slice(11, -1)}</small>
        )}
      </span>

      <span>
        {symbols.map((ticker) => {
          return (
            <span key={ticker} className={`ticker ${highlight()}`}>
              {ticker}
            </span>
          );
        })}

        <span className="headline">{headline}</span>
        <br />
        {/* <span className="content">{formatContent()}</span> */}

        {/* <small className="newsItemInfo">
          / ID: {id} / Created: {created_at} / Updated: {updated_at} / Author:{" "}
          {author} / Source:{" "}
          <a href={url} target="_blank" rel="noopener noreferrer">
            {source}
          </a>
        </small> */}
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

export default NewsItem;
