import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import FeaturedHero from "../components/FeaturedHero";
import Footer from "../components/Footer";

function Home() {
  const [articles, setArticles] = useState([]);
  const [featured, setFeatured] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );

        const data = await response.json();

        setArticles(data.articles.slice(1, 7) || []);
        setFeatured(data.articles[0]);
        setLoading(false);
      } catch (error) {
         console.error("Error fetching news:", error.response?.data || error);
        setLoading(false);
      }
    }
    fetchNews();
  }, []);
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <Search />
      <FeaturedHero loading={loading} articles={articles} featured={featured} />
      <Footer />
    </div>
  );
}

export default Home;
