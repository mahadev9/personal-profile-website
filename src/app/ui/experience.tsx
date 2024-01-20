'use client';

import { useState } from 'react';
import { resumeData } from '../lib/data';
import MyModal from './dialogModal';
import ExperienceCard from './experienceCard';

export default function Experiences() {

  let [modalVisibility, setModalVisibility] = useState(false);
  let [modalContent, setModalContent] = useState({});

  function openModal(childProps: any) {
    setModalContent(
      <ExperienceCard
        company={childProps.company}
        location={childProps.location}
        title={childProps.title}
        start={childProps.start}
        end={childProps.end}
        link={childProps.link}
        description={childProps.description}
        isModal={true}
        openModal={() => {}}
      />
    )
    setModalVisibility(true);
  }

  function closeModal() {
    setModalContent({});
    setModalVisibility(false);
  }

  const exps = resumeData.experience.map((exp) => {
    return (
      <ExperienceCard
        company={exp.company}
        location={exp.location}
        title={exp.title}
        start={exp.start}
        end={exp.end}
        link={exp.link}
        description={exp.description}
        isModal={false}
        openModal={openModal}
      />
    )
  });

  const rExps = resumeData.researchExperience.map((rExp) => {
    return (
      <ExperienceCard
        company={rExp.company}
        location={rExp.location}
        title={rExp.title}
        start={rExp.start}
        end={rExp.end}
        link={rExp.link}
        description={rExp.description}
        isModal={false}
        openModal={openModal}
      />
    )
  });

  return (
    <div>
      <h1 className='section-heading'>Experience</h1>
      {
        exps.map((exp, index) => {
          return (
            <div className='mt-4 bg-white shadow-md bg-clip-border rounded-xl h-fit p-6 m-2' key={index}>
              {exp}
            </div>
          )
        })
      }
      <h1 className='section-heading'>Research Experience</h1>
      {
        rExps.map((rExp, index) => {
          return (
            <div className='details-card' key={index}>
              {rExp}
            </div>
          )
        })
      }
      <MyModal
        heading='Experience'
        show={modalVisibility}
        closeModal={closeModal}
        modelContentComponent={modalContent}
      />
    </div>
  )
}
