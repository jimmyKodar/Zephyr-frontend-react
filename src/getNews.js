// get news from alpaca historical API
// and save to local DB

export const dummyData = [
  {
    author: "Benzinga Neuro",
    content: "",
    created_at: "2024-08-21T09:52:23Z",
    headline:
      "Chinese Tech Giants Alibaba And Tencent Ramp Up AI Investments, With Nearly A Third Of Deals Since 2023 Aimed At AI Startups",
    id: 40480304,
    images: [
      {
        size: "large",
        url: "https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/08/21/Catching-Up-In-AI.jpeg",
      },
      {
        size: "small",
        url: "https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/08/21/Catching-Up-In-AI.jpeg",
      },
      {
        size: "thumb",
        url: "https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/08/21/Catching-Up-In-AI.jpeg",
      },
    ],
    source: "benzinga",
    summary:
      "Chinese tech giants Alibaba Group Holding Ltd and Tencent Holdings Ltd are significantly increasing their investments in artificial intelligence startups, despite a general decrease in their overall investments.",
    symbols: ["BABA", "META", "NVDA", "SFTBY", "TCEHY"],
    updated_at: "2024-08-21T09:52:24Z",
    url: "https://www.benzinga.com/markets/asia/24/08/40480304/chinese-tech-giants-alibaba-and-tencent-ramp-up-ai-investments-with-nearly-a-third-of-deals-since-20",
  },
  {
    author: "Avi Kapoor",
    content: "",
    created_at: "2024-08-21T09:47:26Z",
    headline:
      "Why Keysight Technologies Shares Are Trading Higher By Around 11%; Here Are 20 Stocks Moving Premarket",
    id: 40480200,
    images: [
      {
        size: "large",
        url: "https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/08/21/movers-image.jpeg",
      },
      {
        size: "small",
        url: "https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/08/21/movers-image.jpeg",
      },
      {
        size: "thumb",
        url: "https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/08/21/movers-image.jpeg",
      },
    ],
    source: "benzinga",
    summary: " ",
    symbols: [
      "AADI",
      "ALLG",
      "APDN",
      "AZTR",
      "BBAI",
      "BIRD",
      "EYEN",
      "GLMD",
      "GXAI",
      "INM",
      "IVVD",
      "KEYS",
      "MYNA",
      "OBLG",
      "PITA",
      "REVB",
      "SINT",
      "STEC",
      "TGL",
      "WENA",
    ],
    updated_at: "2024-08-21T09:47:26Z",
    url: "https://www.benzinga.com/news/24/08/40480200/why-keysight-technologies-shares-are-trading-higher-by-around-11-here-are-20-stocks-moving-premarket",
  },
  {
    author: "Benzinga Neuro",
    content: "",
    created_at: "2024-08-21T09:44:14Z",
    headline:
      "Alibaba-Rival JD.Com Plummets Over 7% in Pre-Market After Largest Shareholder Walmart Sells Stake To Reportedly Raise $3.74M",
    id: 40480174,
    images: [
      {
        size: "large",
        url: "https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/08/21/11-Trending-Household-Essentials-At-Walm.jpeg",
      },
      {
        size: "small",
        url: "https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/08/21/11-Trending-Household-Essentials-At-Walm.jpeg",
      },
      {
        size: "thumb",
        url: "https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/08/21/11-Trending-Household-Essentials-At-Walm.jpeg",
      },
    ],
    source: "benzinga",
    summary:
      "Despite being JD.com&#39;s largest shareholder, Walmart stated that it remains committed to a continued commercial relationship with JD.com. ",
    symbols: ["JD", "WMT"],
    updated_at: "2024-08-21T09:44:15Z",
    url: "https://www.benzinga.com/markets/asia/24/08/40480174/alibaba-rival-jd-com-plummets-over-7-in-pre-market-after-largest-shareholder-walmart-sells-stake-to",
  },
  {
    author: "Benzinga Newsdesk",
    content: "",
    created_at: "2024-08-21T09:40:29Z",
    headline:
      "CLSA Downgrades Vipshop Holdings to Hold, Lowers Price Target to $12",
    id: 40480097,
    images: [],
    source: "benzinga",
    summary: "",
    symbols: ["VIPS"],
    updated_at: "2024-08-21T09:40:29Z",
    url: "https://www.benzinga.com/news/24/08/40480097/clsa-downgrades-vipshop-holdings-to-hold-lowers-price-target-to-12",
  },
  {
    author: "Benzinga Newsdesk",
    content: "",
    created_at: "2024-08-21T09:37:54Z",
    headline:
      "Raymond James Upgrades EPR Props to Strong Buy, Maintains Price Target to $54",
    id: 40480094,
    images: [],
    source: "benzinga",
    summary: "",
    symbols: ["EPR"],
    updated_at: "2024-08-21T09:37:54Z",
    url: "https://www.benzinga.com/news/24/08/40480094/raymond-james-upgrades-epr-props-to-strong-buy-maintains-price-target-to-54",
  },
  {
    author: "Benzinga Newsdesk",
    content: "",
    created_at: "2024-08-21T09:37:09Z",
    headline:
      "Tesla Is Recalling 9,136 2016 Model X Vehicles- Reuters Citing NHTSA",
    id: 40480089,
    images: [],
    source: "benzinga",
    summary: "",
    symbols: ["TSLA"],
    updated_at: "2024-08-21T09:37:09Z",
    url: "https://www.benzinga.com/news/24/08/40480089/tesla-is-recalling-9-136-2016-model-x-vehicles-reuters-citing-nhtsa",
  },
  {
    author: "Benzinga Newsdesk",
    content: "",
    created_at: "2024-08-21T09:35:52Z",
    headline:
      "Stifel Reinstates Buy on Eos Energy Enterprises, Announces $6 Price Target",
    id: 40480085,
    images: [],
    source: "benzinga",
    summary: "",
    symbols: ["EOSE"],
    updated_at: "2024-08-21T09:35:53Z",
    url: "https://www.benzinga.com/news/24/08/40480085/stifel-reinstates-buy-on-eos-energy-enterprises-announces-6-price-target",
  },
  {
    author: "Benzinga Newsdesk",
    content: "",
    created_at: "2024-08-21T09:34:18Z",
    headline: "Needham Reiterates Buy on Alcon, Maintains $101 Price Target",
    id: 40480081,
    images: [],
    source: "benzinga",
    summary: "",
    symbols: ["ALC"],
    updated_at: "2024-08-21T09:34:19Z",
    url: "https://www.benzinga.com/news/24/08/40480081/needham-reiterates-buy-on-alcon-maintains-101-price-target",
  },
  {
    author: "Benzinga Newsdesk",
    content: "",
    created_at: "2024-08-21T09:33:56Z",
    headline: "Stifel Maintains Hold on Medtronic, Raises Price Target to $87",
    id: 40480080,
    images: [],
    source: "benzinga",
    summary: "",
    symbols: ["MDT"],
    updated_at: "2024-08-21T09:33:57Z",
    url: "https://www.benzinga.com/news/24/08/40480080/stifel-maintains-hold-on-medtronic-raises-price-target-to-87",
  },
  {
    author: "Benzinga Newsdesk",
    content: "",
    created_at: "2024-08-21T09:32:21Z",
    headline:
      "QuantaSing Launches New Vision for Supporting Middle-Aged and Senior Adults",
    id: 40480066,
    images: [],
    source: "benzinga",
    summary: "",
    symbols: ["QSG"],
    updated_at: "2024-08-21T09:32:21Z",
    url: "https://www.benzinga.com/news/24/08/40480066/quantasing-launches-new-vision-for-supporting-middle-aged-and-senior-adults",
  },
];
