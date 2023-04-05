import React from 'react'
import { STATIC_VALUES } from '../constants'

export default function Projects () {
  return (
    <div className='main d-flex flex-column'>
      <div className='container'>
        { STATIC_VALUES.projects.map(proj => (
          <div className='mt-5' key={ proj.name }>
            <h2>{ proj.name }</h2>
            <p className='fst-italic'>{ proj.tools }</p>
            <p>{ proj.period }</p>
            <ul>{ proj.description.map(desc => (<li key={ desc }>{ desc }</li>)) }</ul>
          </div>
        )) }
      </div>
    </div>
  )
}
