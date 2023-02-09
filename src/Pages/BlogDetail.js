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

        setArticle(response);
        setLoading(false);
      }
      getArticle();
    },
    [params]
  );

  if (notFound) {
    return (
      <>
        <h1>Artikel Tidak Ditemukan :(</h1>
        <small>Kenapa tuh kira2</small>
      </>
    );
  }

  return (
    <section>
      {loading ? (
        <i>Loading Article, Sabar yaa...</i>
      ) : (
        <article>
          <h1>{article.title}</h1>
          <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
          <img src={article.imageUrl} alt={article.title} />
          <p>{article.summary}</p>
          <p>
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.newsSite}
            </a>
          </p>
        </article>
      )}
    </section>
  );
}
