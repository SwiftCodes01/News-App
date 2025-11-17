import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NewsDetails from "../pages/NewsDetails";
const categories = [
  "All",
  "Top Stories",
  "World",
  "Politics",
  "Business",
  "Tech",
];

function FeaturedHero({ loading, featured, articles }) {


  if (loading) return <h1>Loading news ...</h1>;


    if (articles.length === 0) {
  return <p>API data cannot be displayed on deployed site due to NewsAPI free plan restrictions. Please run locally.</p>;
}
  
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="hidden sm:flex gap-1 mb-6">
        {categories.map((c, idx) => (
          <button
            key={c}
            className={`px-3 py-2 rounded-full text-sm font-medium ${
              idx === 0 ? "bg-blue-600 text-white" : " text-slate-700  "
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Featured hero */}
      {featured && (
        <section className="mb-10">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={featured.urlToImage}
              alt="featured"
              className="w-full h-120 object-cover brightness-50"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-3xl px-8 py-8">
                <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-4">
                  {featured.title}
                </h2>
                <p className="text-slate-100 mb-6">{featured.description}</p>

                <Link
                  to={`/news/${encodeURIComponent(featured.title)}`}
                  state={{ article: featured }}
                  className="bg-blue-600 text-white px-4 py-2 rounded shadow-sm text-sm"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section>
        <h3 className="text-2xl font-semibold mb-6">Recent Articles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article key={a.id} className=" rounded-lg overflow-hidden">
              <div className="h-40 md:h-44 overflow-hidden">
                <Link
                  to={`/news/${encodeURIComponent(a.title)}`}
                  state={{ article: a }}
                >
                  <img
                    src={a.urlToImage}
                    alt={a.title}
                    className="w-full h-full object-cover rounded"
                  />
                </Link>
              </div>
              <div className="py-5">
                <h4 className="font-semibold mb-2 text-lg">{a.title}</h4>
                <p className="text-sm text-slate-600 mb-4">{a.description}</p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{new Date(a.publishedAt).toDateString()}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FeaturedHero;
