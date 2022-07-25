import React from "react";
import "./assets/lista.css";
import datos from "../data.json";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import Historias from "./Historias";

export default function Lista() {
  let dats = datos;
  const navigate = useNavigate();
  return (
    <>
      <Historias/>
      {dats
        .sort(function () {
          return Math.random() - 0.5;
        })
        .map((d) => {
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
                <img src={d.imagen} alt="es el logo de la pagina" />
              </a>
              <h2>{d.title}</h2>
              <section>
                <article>
                  <p>{d.description}</p>
                </article>
                <article>
                  <div className="sep"></div>
                  <div className="messi">
                    {d.tags.map((t) => {
                      return (
                        <button
                          key={nanoid()}
                          onClick={() => {
                            navigate(`/app/${t}`, { replace: true });
                          }}
                          className="hw"
                        >
                          #{t}
                        </button>
                      );
                    })}
                  </div>
                </article>
              </section>
            </div>
          );
        })}
    </>
  );
}
