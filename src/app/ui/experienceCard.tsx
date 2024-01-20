
import Link from 'next/link'

export default function ExperienceCard(props: any) {

  const isModal = props.isModal;
  const description = props.description.map((desc: any, index: number) => {
    return <li className='list-disc ml-4 my-2' key={index}>{desc}</li>
  });

  function handleClick() {
    props.openModal(props);
  }

  return (
    <>
      {
        props.link ?
          <Link href={`${props.link}`} target='_blank'>
            <h3 className='font-bold text-xl'>{props.company}</h3>
          </Link>
          :
          <h3 className='font-bold text-xl'>{props.company}</h3>
      }
      <p className='text-gray-500 text-sm'>{props.location}</p>
      <p className='mt-2'>{props.title}</p>
      <p className='text-gray-500'>{`${props.start} - ${props.end}`}</p>
      {isModal ?
        <ul className='w-fit'>
          { description }
        </ul>
        :
        <button className='mt-2 text-xs w-fit' onClick={handleClick}>
          More Info...
        </button>
      }
    </>
  )
}
