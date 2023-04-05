import React from 'react'
import { STATIC_VALUES } from '../constants'

export default function Education () {
  return (
    <div className='main d-flex flex-column'>
      <div className='container'>
        { STATIC_VALUES.education.map(edu => (
          <div className='mt-5' key={ edu.institutionName }>
            <a className='fs-1 text-decoration-none text-black' href={ edu.url } target="_blank" rel="noopener noreferrer">{ edu.institutionName }</a>
            <p className='fst-italic'>{ edu.location }</p>
            <p>{ edu.degree }</p>
            <p>{ edu.period }</p>
          </div>
        )) }
      </div>
    </div>
  )
}
