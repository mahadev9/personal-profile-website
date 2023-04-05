import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import developerSkillsAnimation from '../assets/lottiefiles/99312-developer-skills.json'
import { Container, Row, Col } from 'reactstrap'
import { STATIC_VALUES } from '../constants'

const FADE_INTERVAL_MS = 1750
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2

interface FadeProp { fade: 'fade-in' | 'fade-out' }

export default function Introduction () {
  const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: 'fade-in' })
  const [wordOrder, setWordOrder] = useState(0)

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === 'fade-in' ? setFadeProp({ fade: 'fade-out' }) : setFadeProp({ fade: 'fade-in' })
    }, FADE_INTERVAL_MS)

    return () => { clearInterval(fadeTimeout) }
  }, [fadeProp])

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder((prevWordOrder) => (prevWordOrder + 1) % STATIC_VALUES.greetingWords.length)
    }, WORD_CHANGE_INTERVAL_MS)

    return () => { clearInterval(wordTimeout) }
  }, [])

  return (
    <div className='main d-flex flex-column'>
      <Container>
        <div className='col'>
          <Row>
            <Col lg='6'>
              <Lottie animationData={developerSkillsAnimation} loop={true} />
            </Col>
            <Col lg='6' className='align-self-center'>
              <h1 className='text-white'>
                <span className={fadeProp.fade}>{STATIC_VALUES.greetingWords[wordOrder]}</span>
              </h1>
              <p className='fs-3 text-white'>I&apos;m Mahadev Maitri</p>
              <p className='text-white'>hfjsdh</p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}
