

import Link from 'next/link'
import LinkImage from './LinkImage';

export default function ProjectCard(props: any) {

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
          <Link href={`${props.link}`} target='_blank' className='flex flex-row hover:underline'>
            <h3 className='font-bold text-xl'>{props.title}</h3>
            <LinkImage 
              name={props.name}
              alt={`link to ${props.name}'s website`}
              className=''
            />
          </Link>
          :
          <h3 className='font-bold text-xl'>{props.title}</h3>
      }
      <p className='text-gray-500'>{props.technologies.join(', ')}</p>
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

