import { useEffect, useState } from "react";
import ArticleContent from "../components/ArticleContent";
import Header from "../components/Header";
import RelatedArticle from "../components/RelatedArticle";
import Comments from "../components/Comments";

function NewsDetails() {
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

        console.log(data)

        setArticles(data.articles.slice(1, 3) || []);

        setLoading(false);
      } catch (error) {
         console.error("Error fetching news:", error.response?.data || error);
        setLoading(false);
      }
    }
    fetchNews();
  }, []);
  return (
    <div>
      <Header />
      <ArticleContent />
      <RelatedArticle articles={articles} />
      <Comments />
    </div>
  );
}

export default NewsDetails;
