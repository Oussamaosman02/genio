import React from "react";
import "./assets/lista.css";
import datos from "../data.json";
import { useNavigate, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
export default function Lists() {
  let dats = datos;
  let navigate = useNavigate();
  let params = useParams();
  let uid = nanoid();
  return (
    <div className="listadiv">
      <div className="aaa">
        <button
          onClick={() => {
            navigate("/", { replace: true });
          }}
          className="hw"
        >
          Home
        </button>
        <h1>{params.id}</h1>
      </div>
      {dats.sort(function() { return Math.random() - 0.5 }).map((d) => {
        return (
          <>
            <div
              key={`${uid}89`}
              className={`lista ${d.tags.find((item) => item === params.id)}`}
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
          </>
        );
      })}
    </div>
  );
}
