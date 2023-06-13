import { FaLinkedin, FaCodepen, FaDribbble } from 'react-icons/all';
// import { faLinkedIn } from '@fortawesome/free-regular-svg-icons';

const SocialHeader = () => {
    const linkedin_url = 'https://www.linkedin.com/in/fidelhdz/';
    const codepen_url = 'https://codepen.io/fidelhdz-the-vuer';
    const dribbble_url = 'https://dribbble.com/fidelhdz';

    return (
      <>
    <div className="social-header" data-aos="fade-up" data-aos-duration="1200">
        <a href={ linkedin_url } target="_blank"><FaLinkedin /></a>
        <a href={ codepen_url } target="_blank"><FaCodepen /></a>
        <a href={ dribbble_url } target="_blank"><FaDribbble /></a>   
    </div >
    </>
  )
}

export default SocialHeader