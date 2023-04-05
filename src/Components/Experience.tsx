import React from 'react'
import { STATIC_VALUES } from '../constants'

export default function Experience () {
  return (
    <div className='main d-flex flex-column'>
      <div className='container'>
        { STATIC_VALUES.experience.map(exp => (
          <div className='mt-5' key={ exp.organizationName }>
            <h2>{ exp.organizationName }</h2>
            <p>{ exp.location }</p>
            <p className='fst-italic'>{ exp.position }</p>
            <p>{ exp.period }</p>
            <ul>{ exp.description.map(desc => (<li key={ desc }>{ desc }</li>)) }</ul>
          </div>
        )) }
      </div>
    </div>
  )
}
