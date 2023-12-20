import React from "react";
import { useState, useEffect } from "react";

export const Data = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);
  console.log("articles", articles);

  return (
    <div>
      {articles.map((articles) => {
        return <div>{articles.comments_count}</div>;
      })}
    </div>
  );
};
