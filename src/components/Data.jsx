import React from "react";
import { useState, useEffect } from "react";

const mockData = [
  { name: "Batbold", age: 10 },
  { name: "Chimeg", age: 10 },
];

export const Data = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  console.log("articles", articles);

  return (
    <main>
      <section></section>
      <div className="my-24 '">
        <div className="flex justify-between mb-8">
          <h4 className="font-bold text-2xl">All Blog Post</h4>
          <p className="font-bold text-xs text-title">View All</p>
        </div>
        <div className="flex justify-center m-auto">
          <div className="grid grid-cols-3 gap-5">
            {articles.map((article) => {
              return (
                <div className="flex flex-col flex-start justify-center items-center p-4 gap-4 ">
                  <div>
                    <img
                      className="w-[360px] h-[240px] rounded-md"
                      src={article.cover_image}
                      alt="coverpicture"
                    />
                    <p className="text-2xl w-[344px]">{article.title}</p>

                    <p className="flex  justify-center items-center">
                      {article.tag_list.map((tag) => {
                        return (
                          <label className="text-sm mr-1 mb-1 rounded-md text-[#4b6bfb] bg-[#4b6bfb0d] py-1 px-2.5">
                            {tag}
                          </label>
                        );
                      })}
                    </p>
                  </div>
                  <div></div>
                  <div className="flex items-center text-[#97989F] text-base">
                    <img
                      className="w-9 h-9 rounded-full"
                      src={article.user.profile_image}
                      alt="coverpicture"
                    />
                    <p className="text-base ml-3 ">{article.user.name}</p>
                    <p className="ml-5">
                      {article.readable_publish_date +
                        ", " +
                        new Date(article.published_at).getFullYear()}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
