import React from 'react'
import { HeadProvider } from 'react-head'

export default function SEO () {
  return (
    <HeadProvider>
      <title>{'title'}</title>
      <meta name="title" content={'title'} />
      <meta name="author" content={'author'} />
      <meta name="description" content={'description'} />
      <meta name="keywords" content={['keywords'].join(', ')} />
      <link rel="canonical" href={'url'} />
    </HeadProvider>
  )
}
