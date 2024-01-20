'use client';

import { useState } from 'react';
import { resumeData } from '../lib/data';
import MyModal from './dialogModal';
import ProjectCard from './projectCard';

export default function Projects() {

  let [modalVisibility, setModalVisibility] = useState(false);
  let [modalContent, setModalContent] = useState({});

  function openModal(childProps: any) {
    setModalContent(
      <ProjectCard
        title={childProps.title}
        technologies={childProps.technologies}
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

  const projs = resumeData.projects.map((proj) => {
    return (
      <ProjectCard 
        title={proj.title}
        technologies={proj.technologies}
        start={proj.start}
        end={proj.end}
        link={proj.link}
        description={proj.description}
        isModal={false}
        openModal={openModal}
      />
    )
  });

  return (
    <div>
      <h1 className='section-heading'>Projects</h1>
      {
        projs.map((proj, index) => {
          return (
            <div className='details-card' key={index}>
              {proj}
            </div>
          )
        })
      }
      <MyModal
        heading='Project'
        show={modalVisibility}
        closeModal={closeModal}
        modelContentComponent={modalContent}
      />
    </div>
  )
}
