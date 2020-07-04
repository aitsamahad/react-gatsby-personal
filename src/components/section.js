import React from 'react'
import styled from 'styled-components'

import Wave from './wave'

const SectionGroup = styled.div`
  background: url(${props => props.image});
  height: 720px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  gap: 20px;
  position: relative;

  @media (max-width: 640px) {
    height: 820px;
  }
`

const SectionLogo = styled.img`
  align-self: end;
  width: 120px;
  margin: 0 auto;
`

const SectionTitleText = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  margin: 0 40px;
  gap: 20px;
  grid-template-rows: auto 100%;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h3`
  color: #f9faf4;
  font-size: 60 px;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 720px) {
    font-size: 40px;
  }
`

const SectionText = styled.p`
  color: #f9faf4;
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`

const Section = ({ image, logo, title, text }) => {
  return (
    <SectionGroup image={image}>
      <WaveBottom>
        <Wave />
      </WaveBottom>
      <SectionLogo src="https://tss-yonder.com/wp-content/uploads/2018/06/blockchain-logo-A0FE252BA6-seeklogo.com_.png" />
      <SectionTitleText>
        <SectionTitle>{title}</SectionTitle>
        <SectionText>{text}</SectionText>
      </SectionTitleText>
      <WaveTop>
        <Wave />
      </WaveTop>
    </SectionGroup>
  )
}

export default Section
