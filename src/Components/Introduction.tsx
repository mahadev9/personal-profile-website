import React from 'react'
import Lottie from 'lottie-react'
import { Col, Container, Row, Button } from 'reactstrap'
import { STATIC_VALUES } from '../constants'

export default function Introduction () {
  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-info">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <h1 className="display-3 text-white">
                    {STATIC_VALUES.intro + ' '}
                  </h1>
                  <p className="lead text-white">{STATIC_VALUES.description1}</p>
                  {(Boolean(STATIC_VALUES.linkedin)) && (
                    <Button
                      className="btn-icon-only rounded-circle ml-1"
                      color="twitter"
                      rel="noopener"
                      aria-label="Linkedin"
                      href={STATIC_VALUES.linkedin}
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-linkedin" />
                      </span>
                    </Button>
                  )}
                  {(Boolean(STATIC_VALUES.github)) && (
                    <Button
                      className="btn-icon-only rounded-circle ml-1"
                      color="github"
                      href={STATIC_VALUES.github}
                      rel="noopener"
                      aria-label="Github"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-github" />
                      </span>
                    </Button>
                  )}
                  <div className="btn-wrapper my-4">
                    <Button
                      className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                      color="default"
                      href={''}
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-file" />
                      </span>
                      <span className="btn-inner--text">See My Resume</span>
                    </Button>
                  </div>
                </Col>
                <Col lg="6">
                  <div onClick={() => null}>
                    <Lottie animationData={{
                      loop: true,
                      autoplay: true,
                      path: STATIC_VALUES.animationPath
                    }} />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        {/* 1st Hero Variation */}
      </div>
    </main>
  )
}
