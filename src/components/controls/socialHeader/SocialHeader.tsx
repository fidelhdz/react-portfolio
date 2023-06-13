import { FaLinkedin, FaCodepen, FaDribbble, FaGithub, FaBehance } from 'react-icons/all';
// import { faLinkedIn } from '@fortawesome/free-regular-svg-icons';

const SocialHeader = () => {
  const linkedin_url = 'https://www.linkedin.com/in/fidelhdz/';
  const codepen_url = 'https://codepen.io/fidelhdz-the-vuer';
  const dribbble_url = 'https://dribbble.com/fidelhdz';
  const behance_url = 'https://be.net/fhdz';
  const github_url = 'https://github.com/fidelhdz';

  return (
    <>
    <div className="social-header hidden lg:flex lg:flex-col gap-4 absolute bottom-14 right-3">
        <a href={ linkedin_url } target="_blank"><FaLinkedin /></a>
        <a href={ codepen_url } target="_blank"><FaCodepen /></a>
        <a href={ dribbble_url } target="_blank"><FaDribbble /></a>   
        <a href={ github_url } target="_blank"><FaGithub /></a>
        <a href={ behance_url } target="_blank"><FaBehance /></a>
    </div >
    </>
  )
}

export default SocialHeader