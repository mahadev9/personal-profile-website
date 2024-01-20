
import Education from './education';
import Experiences from './experience';
import Extracurricular from './extracurricular';
import Projects from './project';

export default function DetailResume() {

  return (
    <div className='md:columns-2 xl:columns-3'>
      <div id='education'>
        <Education />
      </div>
      <div id='experience'>
        <Experiences />
      </div>
      <div id='projects' className='mt-32'>
        <Projects />
      </div>
      <div id='extracurricular'>
        {/* <Extracurricular /> */}
      </div>
    </div>
  )
}
