// import { useState } from 'react'

const About = () => {
  
  return (
    <section className="about-section h-screen w-full box-border py-16 px-5" id="about">
      <div className="content flex flex-grow md:flex-row h-full align-middle justify-around flex-col">
        <div className="about-image md:w-1/2 w-full">
          &nbsp;
        </div>
        <div className="about-text md:w-1/2 w-full self-center">
          <h6 className="text-base uppercase font-bebas">&mdash; About me</h6>
          <h1 className="uppercase font-raj text-lime-500 text-3xl">Text about me</h1>
        </div>
      </div>
    </section>
  )
}

export default About