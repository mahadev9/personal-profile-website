
import Link from 'next/link';
import Image from 'next/image';

export default function EducationCard(props: any) {

  const isModal = props.isModal;
  const courses = props.courses.map((course: any, index: number) => {
    return <li className='list-disc ml-4 my-2' key={index}>{course}</li>
  });

  function handleClick() {
    props.openModal(props);
  }

  return (
    <>
      <div className='inline-flex justify-between w-full flex-wrap'>
        <div className='w-fit'>
          <Link className='flex flex-row space-x-4' href={`${props.link}`}>
            <h3 className='font-bold text-xl'>{props.name}</h3>
            <Image
              className='h-fit'
              src={props.logo}
              alt={`${props.name}'s logo`}
              width={30}
              height={30}
            />
          </Link>
          <p className='text-gray-500 text-sm'>{props.location}</p>
        </div>
        <p className=''>{`${props.start} - ${props.end}`}</p>
      </div>
      <div className='mt-2 sm:inline-flex justify-between w-full'>
        <div className='w-fit'>
          <p className=''>{props.degree}</p>
          <p className='text-gray-500'>{props.major}</p>
        </div>
        <p className=''>{`${props.gpa}/${props.totalgpa}`}</p>
      </div>
      {isModal ?
        <ul className='w-fit'>
          { courses }
        </ul>
        :
        <button className='mt-2 text-xs w-fit' onClick={handleClick}>
          More Info...
        </button>
      }
    </>
  )
}
