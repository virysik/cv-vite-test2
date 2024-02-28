import "./Sidebar.css";
import PhoneIcon from "./assets/phone";
import MailIcon from "./assets/mail";
import GithubIcon from "./assets/github";
import LinkedInIcon from "./assets/linkedin";
import CityIcon from "./assets/city";
import CVImg from "./assets/vera-cv-img.jpg";
export default function Sidebar() {
  return (
    <aside className="aside">
      <section className="img">
        <div className="img__wrapper">
          <img src={CVImg} alt="vera kuzjo" />
        </div>
        <div className="img__text-wrapper">
          <h1 className="img__title">Vera Kuzjo</h1>
          <h2 className="img__subtitle">Frontend developer</h2>
        </div>
      </section>
      <section className="aside__section">
        <h3 className="aside__title">Contact Details</h3>
        <a className="aside__tel" href="tel:+46704047699">
          <PhoneIcon />
          +46704047699
        </a>
        <a className="aside__mail" href="mailto:verakuzjo@gmail.com">
          <MailIcon />
          verakuzjo@gmail.com
        </a>
        <a
          className="aside__link"
          href="https://github.com/virysik"
          target="_blank"
        >
          <GithubIcon />
          vera kuzjo
        </a>
        <a
          className="aside__link"
          href="https://www.linkedin.com/in/vera-kuzjo/"
          target="_blank"
        >
          <LinkedInIcon />
          vera-kuzjo
        </a>
        <p className="aside__city">
          <CityIcon />
          Stockholm, Sweden
        </p>
      </section>
      <section className="aside__section">
        <h3 className="aside__title">Skills</h3>
        <ul className="aside__list">
          <li className="aside__item">HTML5/CSS3/SASS</li>
          <li className="aside__item">Responsive/Adaptive design</li>
          <li className="aside__item">JavaScript/TypeScript</li>
          <li className="aside__item">React.JS/Redux</li>
          <li className="aside__item">Node.js</li>
          <li className="aside__item">Jest/React Testing Library</li>
          <li className="aside__item">GIT</li>
          <li className="aside__item">WebPack/Vite</li>
          <li className="aside__item">AWS Cloud</li>
        </ul>
        <ul className="aside__list">
          <li className="aside__item">Communication/Collaboration</li>
          <li className="aside__item">Teamwork</li>
          <li className="aside__item">Problem-Solving</li>
          <li className="aside__item">Attention to Detail</li>
          <li className="aside__item">Flexibility and Adaptability</li>
          <li className="aside__item">Growth-oriented</li>
          <li className="aside__item">Continuous Learning</li>
        </ul>
      </section>
      <section className="aside__section">
        <h3 className="aside__title">Languages</h3>
        <ul className="aside__list">
          <li className="aside__item">Ukrainian - native</li>
          <li className="aside__item">Russian - second</li>
          <li className="aside__item">Responsive/Adaptive design</li>
          <li className="aside__item">Swedish - upper intermediate</li>
          <li className="aside__item">English - upper intermediate</li>
          <li className="aside__item">Polish - pre-intermediate</li>
        </ul>
      </section>
    </aside>
  );
}
