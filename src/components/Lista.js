import React from "react";
import "./assets/lista.css"

export default function Lista() {
  return (
    <div className="lista">
      <h3>Midu Dev</h3>
      <a
        className="hw"
        href="https://midu.dev/"
        target="_blank"
        rel="noreferrer"
      >
        MiduDev
      </a>
      <section>
        <article>
          <p className="hw">
            MiduDev es la pagina de Miguel Angel Duran, un gran programador que
            enseña en youtube y en sus directos de twitch.
          </p>
        </article>
        <article>
          <h6>Tags:</h6>
          <button className="hw">#react</button>
          <button className="hw">#programacion</button>
          <button className="hw">#aprender</button>
          <button className="hw">#twitch</button>
        </article>
      </section>
    </div>
  );
}
