import React, { useEffect, useState } from 'react';
import axios from "axios";
import Button from "../../../../components/button";
import project_3 from "../../../../components/Images/project_3.svg";
import "./index.css";
export const Section2 = () => {
    const [articles, setArticles] = useState([]);


    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get(
                "https://newsapi.org/v2/top-headlines?pageSize=100&country=in&category=general&apiKey=047db78be4b240d1b85cac02bd28fa05"
            );
            setArticles(res.data.articles)
            console.log(res);
        }
        getArticles();
    });
    return (
    <div className="w-11/12 mx-auto mt-12 md:mt-70">
      <div className="grid grid-flex-row lg:grid-cols-2 grid-cols-1">
      {articles.map(({ title, description, url, urlToImage, content, author, name, publishedAt, language }) => (
        <div className="hc_card mx-auto mb-16 pb-8">
          <img src={urlToImage ? urlToImage : project_3}></img>

          <div className="mx-8">
           <p className="mt-5 md:mt-2 hc_card_heading">{title}</p>
            <p className="mt-1 mb-2 md:mt-2 md:mb-4">
              {description}
            </p>
            {author?
            <span className="mr-2 lg:mr-4 lg:mb-4">
              <Button
                style={{
                  fontSize: "12px",
                  padding: "4px 20px",
                  border: "0.864198px solid #0070E4",
                }}
                type="card"
                variant="primary"
              >
                {author}
              </Button>
            </span>:''}
            {name?
            <span className="mr-2 lg:mr-4 lg:mb-4">
              <Button
                style={{
                  fontSize: "12px",
                  padding: "4px 20px",
                  border: "0.864198px solid #0070E4",
                }}
                type="card"
                variant="primary"
              >
                {name}
              </Button>
            </span>:''}
            {publishedAt?
            <span className="mr-2 lg:mr-4 lg:mb-4">
              <Button
                style={{
                  fontSize: "12px",
                  padding: "4px 20px",
                  border: "0.864198px solid #0070E4",
                }}
                type="card"
                variant="primary"
              >
                {publishedAt}
              </Button>
            </span>:''}
            {language?
            <span className="mr-2 lg:mr-4 lg:mb-4">
              <Button
                style={{
                  fontSize: "12px",
                  padding: "4px 20px",
                  border: "0.864198px solid #0070E4",
                }}
                type="card"
                variant="primary"
              >
                {language}
              </Button>
            </span>:''}
           <a href={url}> <span className="mr-2 lg:mr-4 lg:mb-4">
              <Button
                style={{
                  fontSize: "12px",
                  padding: "4px 20px",
                  background: "#0070E4",
                  color: '#fff'
                }}
                type="card"
                variant="primary"
              >
                View More
              </Button>
            </span></a>
          </div>
        </div>
        ))}
     
       </div>
    </div>
  );
};
