import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const params = useParams();

  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(
    function () {
      async function getArticle() {
        const request = await fetch(
          `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
        );

        // jika not found -> JSON.parse('Not Found)
        if (!request.ok) {
          setLoading(false);
          return setNotFound(true);
        }

        const response = await request.json();

        document.title = response.title;

        setArticle(response);
        setLoading(false);
      }
      getArticle();
    },
    [params]
  );

  if (notFound) {
    document.title = "Blog Detail";
    return (
      <section className="section">
        <h1 className="section-title">Artikel Tidak Ditemukan :(</h1>
        <small>Kenapa tuh kira2</small>
      </section>
    );
  }

  return (
    <section className="section">
      {loading ? (
        <i>Loading Article, Sabar yaa...</i>
      ) : (
        <article className="article">
          <h1 className="article-title">{article.title}</h1>
          <time className="article-time">
            {new Date(article.publishedAt).toLocaleDateString()}
          </time>
          <img
            src={article.imageUrl}
            alt={article.title}
            className="article-image"
          />
          <p className="article-summary">{article.summary}</p>
          <p className="article-source">
            Source:{" "}
            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="article-source"
            >
              {article.newsSite}
            </a>
          </p>
        </article>
      )}
    </section>
  );
}
