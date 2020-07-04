import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'
import Section from '../components/section'
import Wave from '../components/wave'
import StaticData from '../../staticData.json'
import Cell from '../components/cell'
import styled from 'styled-components'
import Footer from '../components/footer'

const SectionCaption = styled.div`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 20px;
  }
`

const VideoSection = styled.div`
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 500px;
  }
`

const VideoSectionVideo = styled.div`
  max-width: 400px;
`

const VideoSectionTitle = styled.h2`
  margin: 50px 20px;
  font-size: 60px;
  text-align: center;
  font-weight: 700;
  background: linear-gradient(104deg, #4a6163 0%, #286fb4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="heroGroup">
        <h1>E-Learning</h1>
        <p>
          Training innovative 4IR software developers for the industry and
          getting SRI LANKA ready for post COVID-19 economy.
        </p>
        <Link to="/page-2/">Watch TechTalk with Zia Khan</Link>
        <div className="skills-logos">
          <img
            src={require('../images/logo-sketch.png')}
            width="50"
            alt="sketch"
          />
          <img
            src={require('../images/logo-figma.png')}
            width="50"
            alt="figma"
          />
          <img
            src={require('../images/logo-studio.png')}
            width="50"
            alt="studio"
          />
          <img
            src={require('../images/logo-framer.png')}
            width="50"
            alt="framer"
          />
          <img
            src={require('../images/logo-react.png')}
            width="50"
            alt="react"
          />
          <img
            src={require('../images/logo-swift.png')}
            width="50"
            alt="swift"
          />
        </div>
        <Wave />
      </div>
    </div>
    <div className="cards">
      <h2>4 Courses, more coming</h2>
      <div className="cardGroup">
        <Card
          title="Cloud Native"
          text="12 sections"
          image={require('../images/wallpaper.jpg')}
        />
        <Card
          title="Blockchain"
          text="15 sections"
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="Artificial Intelligence"
          text="27 sections"
          image={require('../images/wallpaper3.jpg')}
        />
        <Card
          title="Internet of Things"
          text="15 sections"
          image={require('../images/wallpaper4.jpg')}
        />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="Blockchain for Developers"
      text="Learn how to build de-centralized applicaiton using modern and effecient blockchain technologies with Solidity programming language and JavaScript for Front-End."
    />

    <SectionCaption> 3 Months - 12 Hours </SectionCaption>
    <SectionCellGroup>
      {StaticData.cells.map((cell, index) => (
        <Cell key={index} image={cell.image} title={cell.title} />
      ))}
    </SectionCellGroup>

    <VideoSection>
      <VideoSectionTitle>
        Tech Talk with Zia Khan & Adil Altaf
      </VideoSectionTitle>
      <SectionCellGroup>
        <VideoSectionVideo>
          <iframe
            width="700"
            height="350"
            src="https://www.youtube.com/embed/BoavNAbsOGI"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoSectionVideo>
      </SectionCellGroup>
    </VideoSection>
    <Footer />
  </div>
)

export default IndexPage
