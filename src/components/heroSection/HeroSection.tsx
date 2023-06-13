import { SocialHeader, CurrentLocation } from '../controls';
import MyResume from '../../assets/documents/fidelhdz_may2023.pdf';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="h-screen w-full pt-12 pb-3 px-3 box-border border-l-[3px] border-lime-500">
      <div id='hero-object' className="object-center">
        <p className='font-bebas text-base'>&mdash; Hi there! I'm a...</p>
        <span className="scroll-text h-[120px] overflow-hidden block">
          <ul className='uppercase text-[60px] leading-[60px] text-white font-raj font-extralight'>
            <li>UI<br />developer</li>
            <li>Frontend<br />Developer</li>
            <li>UI/UX<br />designer</li>
            <li>Graphic<br />Designer</li>
            <li>Illustrator/<br />Brands builder</li>
            <li>Web<br />developer</li>
          </ul>
        </span>
        <div className="cta-group mt-5">
          <a className="btn btn-outline" href="#contact">Let's do business</a>
          <a className="btn btn-outline ml-5" href={MyResume} download={MyResume}>Download Resume</a>
        </div>
      </div>

      <CurrentLocation />
      <SocialHeader />
    </section>
  )
}

export default HeroSection