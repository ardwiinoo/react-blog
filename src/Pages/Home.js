import { useEffect } from "react";

export default function Home() {
  useEffect(function () {
    document.title = "Home";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Selamat Datang di Website que</h1>
      <p className="section-description">
        Halo semuanya ini website baru akuh. Chekidot
      </p>
    </section>
  );
}
