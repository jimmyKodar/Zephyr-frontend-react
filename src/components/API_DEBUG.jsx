const API_Debug = () => {
  return (
    <div className="debug">
      <strong> Alpaca News URL: </strong>
      {import.meta.env.VITE_API_NEWS_URL}
      <br />
      <strong> Alpaca Web Socket URL: </strong>
      {import.meta.env.VITE_API_NEWS_WSS_URL}
    </div>
  );
};

export default API_Debug;
