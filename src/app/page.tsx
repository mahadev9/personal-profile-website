
import DetailResume from './ui/detailResume'
import Introduction from './ui/introduction'

export default function Home () {
  return (
    <div className='flex h-screen flex-col sm:flex-row'>
      <div className='w-full flex-none sm:w-80 p-4 min-h-screen'>
        <Introduction />
      </div>
      <div className='flex-grow p-4'>
        <DetailResume />
      </div>
    </div>
  )
}
