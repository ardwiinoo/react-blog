import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    document.title = "Blog";

    async function getArticles() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const response = await request.json();

      setArticles(response);
      //   console.log(response);

      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Blog</h1>
      <p className="section-description">
        Berikut adalah tulisan-tulisanku (tapi bo'ong :'v)
      </p>
      {loading ? (
        <i>Loading Articles, Sabar yaa...</i>
      ) : (
        <div className="articles">
          {articles.map(function (article) {
            return (
              <article className="article" key={article.id}>
                <h1 className="article-title">
                  <Link to={`/blog/${article.id}`}>{article.title}</Link>
                </h1>
                <time className="article-time">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </time>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
