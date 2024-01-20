
import Link from 'next/link';
import { notoSans } from '../fonts';
import Image from 'next/image';
import { techLogos, resumeData } from '../lib/data';

export default function Introduction() {
  const logos = techLogos.map((tech) => {
    return (
      <Image
        src={tech.logo}
        alt={tech.alt}
        width={tech.width}
        height={tech.height}
      />
    )
  })

  return (
    <div className='flex flex-col place-items-center space-y-4'>
      <Image 
        src='/mahadev.png'
        alt={`${resumeData.name}'s profile picture`}
        width={200}
        height={200}
        className='rounded-3xl p-4'
      />
      <span className={`text-4xl text-center ${notoSans.className}`}>{resumeData.name}</span>
      <span className={`text-xl text-center ${notoSans.className}`}>{resumeData.aboutMe}</span>
      <div id='social_icons' className='flex flex-row space-x-4'>
        <Link href={'mailto:mmaitri@udel.edu'}>
          <Image
            src={'/Gmail_icon.svg'}
            alt={'Linkedin Profile'}
            width={30}
            height={30}
          />
        </Link>
        <Link href={'https://www.linkedin.com/in/mahadev-maitri/'}>
          <Image
            src={'/Linkedin_icon.svg'}
            alt={'Linkedin Profile'}
            width={30}
            height={30}
          />
        </Link>
        <Link href={'https://github.com/mahadev9'}>
          <Image
            src={'/github-mark/github-mark.svg'}
            alt={'Linkedin Profile'}
            width={30}
            height={30}
          />
        </Link>
      </div>
      <Link href='/resume.pdf' target='_blank' className='download-resume mt-12 text-xl text-center font-semibold rounded-md'>
        Download Resume
      </Link>
      <div id='tech_icons' className='flex flex-wrap space-x-4 space-y-4 justify-center'>
        <div></div>
        {
          logos.map((logo, index) => {
            return <div key={index} className={`self-center`}>{logo}</div>
          })
        }
      </div>
    </div>
  )
}
