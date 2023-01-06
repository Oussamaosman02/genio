import React from 'react'
import './assets/home.css'
import { useNavigate } from 'react-router-dom'

export default function Home () {
  const imagen = '/logo.png'
  const navigate = useNavigate()
  return (
    <div className='home'>
      <div className='start'>
        <img src={imagen} alt='the logo' />
        <div className='textos'>
          <h1>La página para la generación digital</h1>
          <h3>
            Descubre,disfruta y demuestra que eres un gen<strong>io</strong>
          </h3>
          <button
            onClick={() => {
              navigate('/app', { replace: true })
            }}
          >
            Descubrir
          </button>
        </div>
      </div>
      <div className='center'>
        <section>
          <article>
            <h2>Recursos variados</h2>
            <p>
              Genio.me es la mejor opción para encontrar recursos útiles para
              desarrolladores de todo tipo. Ya sea que estés buscando páginas
              web útiles, canales de YouTube, repositorios de GitHub o APIs,
              Genio.me tiene todo lo que necesitas para mejorar tus habilidades y
              estar al día en el mundo del desarrollo de software.
            </p>
          </article>
          <article>
            <h2>Para vosotros, Frontends</h2>
            <p>
              Si eres un desarrollador de frontend, entonces Genio.me
              es el lugar perfecto para ti. Tenemos una amplia selección
              de recursos para ayudarte a mejorar tus habilidades y a
              estar al día con las últimas tendencias y tecnologías.
              Desde tutoriales y 'Cheat Sheets' hasta repositorios que no te
              puedes perder, encontrarás todo lo que necesitas
              para seguir adelante en tu carrera.
            </p>
          </article>
          <article>
            <h2>¡Aporta!</h2>
            <p>
              Genio.me está hecho por y para desarrolladores y,
              al ser de código abierto, puedes revisar y mejorar
              por ti mismo lo que creas que puede mejorar esta web.
              Aparte, también puedes contribuir con los recursos.
              <br />
              ¡Toda ayuda es bienvenida!
            </p>
            <br />
            <span>
              <a
                href='https://github.com/Oussamaosman02/genio/blob/main/CONTRIBUTING.md'
                target='_blank' rel='noreferrer noopener'
              >
                <button>
                  Repositorio
                </button>
              </a>
            </span>
          </article>
          <article>
            <h2>From 0 to hero!</h2>
            <p>
              No importa si eres un principiante o un profesional
              experimentado, Genio.me tiene algo para todos. Así
              que no esperes más y entra ahora mismo para
              ver todos los recursos increíbles que tenemos para
              ofrecerte. ¡Te esperamos!
            </p>
          </article>
          <br />
          <article>
            <span>
              <button
                onClick={() => {
                  navigate('/app', { replace: true })
                }}
              >
                Entrar
              </button>
            </span>
          </article>
        </section>
      </div>
      <div className='end'>
        <h1>¿Porqué?</h1>
        <p>
          Está idea surge por la cantidad de cuentas que publican contenido útil
          pero que no llegan a todo el mundo. Lo que se pretende con esto es hacer
          llegar muchas herramientas útiles a los programadores que les pueden
          ahorrar tiempo, ayudar a programar mejor o descubrir cosas nuevas e
          inspirarse.
          <br />
          También tiene este tono grisáceo para no provocar sobre estimulación
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
          <strong>Si lo haces, no olvides mencionar :)</strong>
        </p>
      </div>
      <div className='ending' />
    </div>
  )
}
