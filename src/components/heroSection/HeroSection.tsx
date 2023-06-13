import { SocialHeader, CurrentLocation } from '../controls';
import MyResume from '../../assets/documents/fidelhdz_may2023.pdf';

const HeroSection = () => {
  return (
    <section className="h-screen w-full pt-12 pb-3 px-3 box-border">
      <div className="">
        <p>Hi there! My name is</p>
        <h1>Fidel Hdz</h1>
        <h6>
          I'm a
          <span className="scroll-text">
            <ul>
              <li>UI developer</li>
              <li style={{ color: 'rgb(85, 224, 255)' }}>Frontend Dev</li>
              <li style={{ color: 'rgb(255, 85, 139)' }}>UI/UX designer</li>
              <li style={{ color: 'rgb(51, 255, 189)' }}>Graphic Designer</li>
              <li style={{ color: 'rgb(255, 87, 51)' }}>Illustrator</li>
              <li style={{ color: 'rgb(255, 195, 0)' }}>Web developer</li>
            </ul>
            </span>
        </h6>
        <div className="cta-group">
          <a className="btn btn-outline" href="#contact">Hire Me!</a>
          <a className="btn btn-outline" href={MyResume} download={MyResume}>Download Resume</a>
        </div>
      </div>

      <CurrentLocation />
      <SocialHeader />
    </section>
  )
}

export default HeroSection