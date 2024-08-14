// src/components/Hero.tsx
"use client"

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';
import { TbJumpRope } from 'react-icons/tb';
// import Button from '../Button';
import ParticlesDemo from './bgparticals';
import Bigtech from "@/components/assets/icon/bigtech"
type Props = {};

const Hero: React.FC<Props> = () => {
  return (
    <Main className='herobg xl:h-screen flex flex-col justify-center items-center py-10 p-2 sm:-mt-10'>
      <Content className=' pt-10 gap-8 '>
        <StyledLink href="">
          <TbJumpRope className=" text-blue-600" />
          View Roadmaps
          <GoArrowRight className="text-blue-600" />
        </StyledLink>
              <Title className='font-bold sm:w-2/3 sm:text-7xl text-3xl '>The Best way to prepare for <span className='text-blue-600'>
              Full-stack Interviews.</span></Title>
        <Description className='lg:w-2/3 sm:text-2xl text-xl font-sans '>
          At CodeFolder, we empower you to master advanced techniques, ace
          interviews, and elevate your career. Join us to transform your
          skills and achieve your goals in the ever-evolving world of software
          engineering.
        </Description>
        <ButtonGroup >
          <StyledLink href=""className="hover:bg-white">
                      Quick Start
                  </StyledLink>
          <SecondaryLink href="">
           Playground <GoArrowRight className="text-blue-600" />
          </SecondaryLink>
              </ButtonGroup>
              <Prepare className='flex-col gap-10'>
                  <PrepareTitle className=" border border-gray-500/30 p-2 font-semibold rounded-md ">
                      Prepare for Big Tech companies
                  </PrepareTitle>
                  <Bigtech/>
              </Prepare>
      </Content>
      <ParticlesDemo />
    </Main>
  );
};

export default Hero;

// Styled Components
const Main = styled.main`
  display: flex;
  overflow: hidden;
  position: relative;
  color: white;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  position: relative;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  color: white;


`;

const Title = styled.h1`
  text-align: center;
  color:white;

  -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
`;
const PrepareTitle = styled.h2`
  text-align: center;
  color:white;
  top:5vh;
`;
// //   background: linear-gradient(90deg, #000, #777);


const Description = styled.p`
  text-align: center;
  color: #ccc;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Prepare = styled.div`
display:flex
`;

const SecondaryLink = styled(StyledLink)`
  background: rgba(0, 0, 0, 0.7);
`;
