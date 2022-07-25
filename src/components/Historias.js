import React from "react";
import "./assets/lista.css";
import tags from "../tags.json";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

export default function Historias() {
    let tag = tags;
    const navigate = useNavigate();
    return (
      <>
        <div className="hist">
          {tag
            .sort(function () {
              return Math.random() - 0.5;
            })
            .map((d) => {
              return (
                <button
                  key={nanoid()}
                  onClick={() => {
                    navigate(`/app/${d}`, { replace: true });
                  }}
                  className="hw"
                >
                  <h2>{d}</h2>
                </button>
              );
            })}
        </div>
        </>
  )
}
