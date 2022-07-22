import React from "react";
import "./assets/lista.css";
import datos from "../data.json";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

let dats = datos;
export function getData(clas) {
  return dats.find((invoice) => invoice === clas);
}
export default function Lista() {
  const navigate = useNavigate();
  return (
    <>
      {dats.sort(function() { return Math.random() - 0.5 }).map((d) => {
        return (
          <div
            key={nanoid()}
            className={`lista ${d.tags
              .map((item) => {
                return ` ${item}`;
              })
              .join("")}`}
          >
            <a className="hw" href={d.url} target="_blank" rel="noreferrer">
              {d.title}
            </a>

            <section>
              <article>
                <p className="hw">{d.description}</p>
              </article>
              <article>
                <h6>Tags:</h6>
                {d.tags.map((t) => {
                  return (
                    <button
                      key={nanoid()}
                      onClick={() => {
                        navigate(`/${t}`, { replace: true });
                      }}
                      className="hw"
                    >
                      #{t}
                    </button>
                  );
                })}
              </article>
            </section>
          </div>
        );
      })}
    </>
  );
}
