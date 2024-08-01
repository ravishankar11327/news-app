import { useEffect,useState } from "react";
import NewsItem from "./NewsItem";

const Newsboard=()=>{
  const [article,setArticle]=useState([]);
  useEffect(() => {
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=3ce6a33c7df24e7fa573233385062602`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>{setArticle(data.articles);
      console.log(data);
    })
    .catch(error=>console.log(error));
},[]);

    return (
      <div>
        <h2 className=" text-center"> Latest <span className=" badge bg-danger">News</span></h2>
        {article&&article.map((news,index)=>{
          return <NewsItem key={index} title={news.title} description={news.description} src={news.urltoImage} url={news.url}/>
        }
        )}
      </div>
    )
  }
  export default Newsboard