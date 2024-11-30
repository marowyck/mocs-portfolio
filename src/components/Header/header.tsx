import "../Header/header.css";
import LogoImg from "../../assets/MOCS.png";
import YtLogo from '../../assets/yt.png'
import GitLogo from '../../assets/git.png'
import DevLogo from '../../assets/dev.png'

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={LogoImg.src} alt="Logo Image" className="logo-img" />
        <div className="middle-header">
          <ul className="middle">
            <li className="technologies"></li><br />
            <li className="articles"></li><br />
            <li className="projects"></li><br />
            <li className="contact"></li><br />
          </ul>
        </div>
        <div className="social">
          <a href="https://www.youtube.com/@marowyckk" target="_blank"><img src={YtLogo.src} alt="Youtube Logo" className="social-img" /></a>
          <a href="https://github.com/marowyck" target="_blank"><img src={GitLogo.src} alt="GitHub Logo" className="social-img" /></a>
          <a href="https://dev.to/marowyck" target="_blank"><img src={DevLogo.src} alt="DevTo Logo" className="social-img" /></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
