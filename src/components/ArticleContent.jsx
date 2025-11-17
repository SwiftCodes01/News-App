import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";

import { useLocation, useParams } from "react-router-dom";
function ArticleContent() {
  const { id } = useParams();
  const location = useLocation();
  const article = location.state?.article;
  if (!article) return <h1>Article not found...</h1>;
  return (
    <div className="max-w-5xl mx-auto mt-10 px-8">
      <div className="border-b border-gray-400/50 pb-14">
        <div className="my-5">
          <h1 className="text-4xl font-bold max-w-2xl mb-2 ">
            {article.title}
          </h1>
          <p>
            By {article.author} . Published on{" "}
            {new Date(article.publishedAt).toDateString()}
          </p>
        </div>
        <img src={article.urlToImage} alt={article.title} />
        <p className="pt-8">{article.content || article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read full article
        </a>
      </div>

      <div className="flex items-center justify-center space-x-6 text-gray-600 my-8 border-b border-gray-400/50 pb-10">
        <span className="flex gap-2">
          <AiOutlineHeart className="text-2xl" /> <span>12</span>
        </span>
        <span className="flex gap-2">
          <FaRegComment className="text-2xl" />
          <span>12</span>
        </span>
        <span className="flex gap-2">
          <BsBookmark className="text-2xl" /> <span>Save</span>
        </span>
        <span className="flex gap-2">
          <IoShareOutline className="text-2xl" /> <span>Share</span>
        </span>
      </div>
    </div>
  );
}

export default ArticleContent;
