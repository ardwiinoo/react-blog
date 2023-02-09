import { useEffect } from "react";

export default function Contact() {
  useEffect(function () {
    document.title = "Contact";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Contact</h1>
      <p className="section-description">
        Kamu dapat mengubungiku di bawah ini:{" "}
      </p>
      <ul>
        <li>WA: 088831313444</li>
        <li>Email: arif@gantengbanget.com</li>
      </ul>
      <p className="section-description">
        Atau kamu dapat melihatku sharing meme di shosmed.
      </p>
      <ul>
        <li>
          <a href="https://facebook.com">Facebook</a>
        </li>
        <li>
          <a href="https://twitter.com">Twitter</a>
        </li>
      </ul>
    </section>
  );
}
