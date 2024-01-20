'use client';

import { use, useState } from 'react';
import { resumeData } from '../lib/data';
import EducationCard from './educationCard';
import MyModal from './dialogModal';

export default function Education() {

  let [modalVisibility, setModalVisibility] = useState(false);
  let [modalContent, setModalContent] = useState({});

  function openModal(childProps: any) {
    setModalContent(
      <EducationCard
        name={childProps.name}
        location={childProps.location}
        logo={childProps.logo}
        link={childProps.link}
        degree={childProps.degree}
        major={childProps.major}
        gpa={childProps.gpa}
        totalgpa={childProps.totalgpa}
        start={childProps.start}
        end={childProps.end}
        courses={childProps.courses}
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

  const edus = resumeData.school.map((sch) => {
    return (
      <EducationCard
        name={sch.name}
        location={sch.location}
        logo={sch.logo}
        link={sch.link}
        degree={sch.degree}
        major={sch.major}
        gpa={sch.gpa}
        totalgpa={sch.totalgpa}
        start={sch.start}
        end={sch.end}
        courses={sch.courses}
        isModal={false}
        openModal={openModal}
      />
    )
  });

  return (
    <div>
      <h1 className='section-heading'>Education</h1>
      {
        edus.map((edu, index) => {
          return (
            <div className='details-card' key={index}>
              {edu}
            </div>
          )
        })
      }
      <MyModal
        heading='Education'
        show={modalVisibility}
        closeModal={closeModal}
        modelContentComponent={modalContent}
      />
    </div>
  )
}
