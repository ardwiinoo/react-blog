import { useEffect } from "react";

export default function Profile() {
  useEffect(function () {
    document.title = "Profile";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Profile</h1>
      <p className="section-description">
        Halo namaku Arif, aku adalah seorang web developer yang baru saja lulus
        dari Harvard.
      </p>
    </section>
  );
}
