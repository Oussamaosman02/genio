import React from "react";
import "./assets/home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let imagen = "https://telegra.ph/file/cded71315dcd1fabf6489.png";
  let navigate = useNavigate();
  return (
    <div className="home">
      <div className="start">
        <img src={imagen} alt="the logo" />
        <div className="textos">
          <h1>La página para la generación digitial</h1>
          <h3>
            Descubre,disfruta y demuestra que eres un gen<strong>io</strong>
          </h3>
          <button
            onClick={() => {
              navigate("/app", { replace: true });
            }}
          >
            Descubrir
          </button>
        </div>
      </div>
      <div className="center">
        <h1>¿Como funciona?</h1>
        <section>
          <h2>Ver</h2>
          <div>
            <img
              src="https://telegra.ph/file/6d20f371d0308b47567b0.png"
              alt="representa lo que tiene la apliacion"
            />
            <p>
              Cuando entras a la web-app verás muchas cartas en estilo de
              publicaciones y hashtags en estilo de historias. Si pulsas en las
              historias podrás ir a ver publicaciones filtradas por ese hashtag.
              En las publicaciones verás una foto representativa(suele ser un
              logo) y si pulsas en ella te llevará al enlace.Debajo de la foto
              está el título y una breve descrpción aunque lo mejor es que
              entres y descubras tu mismo de que va!. Como último están los
              hashtags donde también si pulsas podrás ver más publicaciones con
              ese hashtag.
            </p>
            <span>
              <button
                onClick={() => {
                  navigate("/app", { replace: true });
                }}
              >
                Ir
              </button>
            </span>
          </div>
        </section>
        <section>
          <h2>Aportar</h2>
          <div>
            <img
              src="https://telegra.ph/file/6a66c96f763d2fde603b2.png"
              alt="representa lo que tiene la apliacion"
            />
            <p>
              En VoteÚ podrás poner propuestas de webs con una descripción y
              pódras votar propuestas.Se libre, entra, vota, aporta y disfruta.
              <br />
              VoteÚ está hecho para votar cualquier cosa, pero en este caso será
              para votar webs o apps útiles para la programación
            </p>
            <span>
              <a href="https://voteu.tk/" target="_BLANK" rel="noreferrer">
                <button>Aportar</button>
              </a>
            </span>
          </div>
        </section>
      </div>
      <div className="end">
        <h1>¿Porqué?</h1>
        <p>
          Está idea surge por la cantidad de cuentas que publican contenido útil
          pero que no llegan a todo el mundo.Lo que pretendo con esto es hacer
          llegar muchas herramientas útiles a programadores que les pueden
          ahorrar tiempo, ayudar a programar mejor o descubrir cosas nuevas e
          inspirarse.
          <br />
          También tiene este tono grisaceo para no provocar sobreestimulación
          visual, esto no es una red social ni intenta que pases 3 horas
          descubriendo cosas ni atraparte. Intenta ser minimalista y útil, si
          necesitas descubrir o inspirarte con un par de minutos al dia
          seguramente te sea súper útil y dinámica ya que el contenido cada vez
          que se recarga cambia, así nadie controla que sale primero o no y tu
          puedes descubrir de todo sin limitaciones. Sobre todo es para que
          entres un rato de vez en cuando y veas nuevas cosas. También viene
          bien para crear contenido y descubrir nuevas herramientas a tu
          comunidad
          <br />
          <strong>Si lo haces menciona :)</strong>
        </p>
      </div>
      <div className="ending"></div>
    </div>
  );
}
