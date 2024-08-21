import NewsFeed from "./NewsFeed";

const App = () => {
  return (
    <>
      <API_Debug />
      <Nav />
      <NewsFeed />
    </>
  );
};

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

const Nav = () => {
  return <h1>ZEPHYR NEWS</h1>;
};

export default App;
