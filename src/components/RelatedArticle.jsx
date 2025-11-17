import React from "react";
import { Link } from "react-router-dom";

function RelatedArticle({ articles }) {
  return (
    <section className="mt-10 max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">Related Articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((item) => (
          <div key={item.id} className=" p-4 rounded-lg flex">
            <div>
              <p className="text-sm text-blue-600">{item.category}</p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <Link to={item.url} className="text-blue-500 mt-2">
                Read More
              </Link>
            </div>
            <img
              src={item.urlToImage}
              className="w-full h-32 object-cover mt-3 rounded"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RelatedArticle;
