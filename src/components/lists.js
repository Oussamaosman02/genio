import React from 'react'
import './assets/lista.css'
import datos from '../data.json'
import { useNavigate, useParams } from 'react-router-dom'
export default function Lists () {
  const dats = datos
  const navigate = useNavigate()
  const params = useParams()
  const crypto = require('crypto')
  const uid = crypto.randomUUID()
  return (
    <div className='listadiv'>
      <div className='aaa'>
        <button
          onClick={() => {
            navigate('/app', { replace: true })
          }}
          className='hw'
        >
          Back
        </button>
        <h1>{`${params.id[0].toUpperCase()}${params.id.slice(1)}`}</h1>
      </div>
      {dats
        .sort(function () {
          return Math.random() - 0.5
        })
        .map((d) => {
          return (
            <div
              key={`${uid}89`}
              className={`lista ${d.tags.find((item) => item === params.id)}`}
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
    </div>
  )
}
