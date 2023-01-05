import React from 'react'
import './assets/lista.css'
import datos from '../data.json'
import { useNavigate } from 'react-router-dom'
import Historias from './Historias'

export default function Lista () {
  const dats = datos
  const crypto = require('crypto')
  const navigate = useNavigate()
  return (
    <>
      <Historias />
      {dats
        .sort(function () {
          return Math.random() - 0.5
        })
        .map((d) => {
          return (
            <div
              key={crypto.randomUUID()}
              className={`lista ${d.tags
                .map((item) => {
                  return ` ${item}`
                })
                .join('')}`}
            >
              <a className='hw' href={d.url} target='_blank' rel='noreferrer'>
                <h2>{d.title}</h2>
              </a>
              <section>
                <article>
                  <p>{d.description}</p>
                </article>
                <article>
                  <div className='sep' />
                  <div className='messi'>
                    {d.tags.map((t) => {
                      return (
                        <button
                          key={crypto.randomUUID()}
                          onClick={() => {
                            navigate(`/app/${t}`, { replace: true })
                          }}
                          className='hw'
                        >
                          #{t}
                        </button>
                      )
                    })}
                  </div>
                </article>
              </section>
            </div>
          )
        })}
    </>
  )
}
