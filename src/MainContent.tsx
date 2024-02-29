import "./MainContent.css";
import DownloadIcon from "./assets/download";

export default function MainContent() {
  return (
    <main className="main">
      <section className="summary main__section">
        <h3 className="summary__title main__title">Summary</h3>
        <p className="summary__text">
          Frontend Developer with more than 2 years of work experience and 1,5
          years of studies. Proficient in HTML5, CSS3, TypeScript, React and
          applications testing, I have a deep understanding of modern web
          development practices and tools. I am looking for a full-time position
          as a frontend engineer and open to possibility to develop as a
          full-stack.
        </p>
      </section>
      <section className="experience main__section">
        <h3 className="experience__title main__title">Work Experience</h3>
        <h4 className="experience__subtitle main__subtitle">
          Frontend Developer | Vidispine AB
        </h4>
        <p className="experience__date">
          December 2021 - ongoing | Stockholm, Sweden
        </p>
        <ul className="experience__list">
          <li className="experience__item">
            Spearheaded the maintenance and development of a dynamic single-page
            application utilizing React and TypeScript alongside a Node.js
            &#40;NestJS&#41; proxy Backend for Frontend layer.
          </li>
          <li className="experience__item">
            Collaborated closely with the design team to consistently refine and
            elevate UI/UX standards.
          </li>
          <li className="experience__item">
            Ensured consistency and efficiency across the application's UI by
            using Material-UI library
          </li>
          <li className="experience__item">
            Elevated test coverage by over 60%, implementing comprehensive unit,
            integration, and functional testing protocols.
          </li>
          <li className="experience__item">
            Integrated SonarQube to monitor and enhance code quality across the
            application, ensuring optimal performance and maintainability.
          </li>
          <li className="experience__item">
            Boosted performance by seamlessly transitioning an Angular
            application to React, resulting in improved efficiency and user
            experience.
          </li>
          <li className="experience__item">
            Successfully interfaced with REST APIs from multiple services,
            enhancing both UX and developer productivity by integrating Tanstack
            React Query for streamlined data retrieval.
          </li>
          <li className="experience__item">
            Optimized the development workflow through the strategic
            implementation of reusable components and hooks following the
            principles of atomic design, thereby enhancing efficiency and
            scalability.
          </li>
          <li className="experience__item">
            Actively participated in Scrum activities including Sprint Reviews
            and Backlog development utilizing Azure DevOps, ensuring alignment
            with project objectives and timelines.
          </li>
          <li className="experience__item">
            Played a pivotal role in onboarding new developers, facilitating
            smooth integration into the development team and project workflows.
          </li>
          <li className="experience__item">
            Led the architecture and development of a cutting-edge frontend SPA
            built with React and TypeScript utilizing Vite for tooling, further
            optimized with AWS CloudFront/S3 static website hosting for enhanced
            performance and scalability.
          </li>
        </ul>
      </section>
      <section className="project main__section">
        <h3 className="project__title main__title">Projects</h3>
        <div className="project__content">
          <div className="project__item-wrapper">
            <div className="project__links-content">
              <div className="project__links-wrapper">
                <a
                  className="project__link"
                  href="https://github.com/virysik/goit-js-final-team-project-filmoteka"
                  target="_blank"
                >
                  Filmoteka
                </a>{" "}
                <span className="project__technologies">
                  &#91; HTML5, CSS3, JavaScript&#93;
                </span>{" "}
                <a
                  className="project__link"
                  href="https://virysik.github.io/goit-js-final-team-project-filmoteka/"
                  target="_blank"
                >
                  link
                </a>
              </div>
              <span className="project__year">2021</span>
            </div>
            <p className="project__description">
              Website for creating a personal library with popular movies.
            </p>
            <p className="project__description">&#40;Teamlead&#41;</p>
          </div>
          <div className="project__item-wrapper">
            <div className="project__links-content">
              <div className="project__links-wrapper">
                <a
                  className="project__link"
                  href="https://github.com/virysik/goit-react-hw-08-phonebook"
                  target="_blank"
                >
                  Phonebook
                </a>{" "}
                <span className="project__technologies">
                  &#91;HTML5, JavaScript, React, Redux&#93;
                </span>{" "}
                <a
                  className="project__link"
                  href="https://vera-goit-react-hw-08-phonebook.netlify.app/"
                  target="_blank"
                >
                  link
                </a>
              </div>
              <span className="project__year">2021</span>
            </div>
            <p className="project__description">
              App with user authentication and possibility of making own
              contacts list .
            </p>
          </div>
        </div>
      </section>
      <section className="education main__section">
        <h3 className="education__title main__title">Education</h3>
        <h4 className="education__subtitle main__subtitle">
          Ivan Franko State Pedagogical University
        </h4>
        <p className="education__date">
          2002 - 2007 &#124; Management Master's degree
        </p>
      </section>
      <section className="certificate main__section">
        <h3 className="certificate__title main__title">Certifications</h3>
        <div className="certificate__wrapper">
          <h4 className="certificate__subtitle main__subtitle">
            <a
              className="certificate__link"
              href="https://cp.certmetrics.com/amazon/en/public/verify/credential/9ZBZWH1BSM1EQVWN"
              target="_blank"
            >
              Cloud Practitioner &#124; AWS
            </a>
          </h4>
          <p className="certificate__description">
            December 2023 - December 2026
          </p>
          <p className="certificate__description">
            Validation Number: 9ZBZWH1BSM1EQVWN
          </p>
        </div>
        <div className="certificate__wrapper">
          <h4 className="certificate__subtitle main__subtitle">
            <a
              className="certificate__link"
              href="https://www.udemy.com/certificate/UC-a69bbbe0-c7fa-4c07-9763-900a5c51c533/"
              target="_blank"
            >
              AWS Certified Cloud Practitioner CLF-02 &#124; Udemy Academy
            </a>
          </h4>
          <p className="certificate__description">
            February 2023 - December 2023
          </p>
        </div>
        <div className="certificate__wrapper">
          <h4 className="certificate__subtitle main__subtitle">
            <a
              className="certificate__link"
              href="https://www.udemy.com/certificate/UC-e8ce6683-16f7-4893-b5cc-469b72606291/"
              target="_blank"
            >
              TypeScript &#124; Udemy Academy
            </a>
          </h4>
          <p className="certificate__description">December 2021 - June 2022</p>
        </div>
        <div className="certificate__wrapper">
          <h4 className="certificate__subtitle main__subtitle">
            <a
              className="certificate__link"
              href="https://goit.global/ua/"
              target="_blank"
            >
              Full Stack Developer &#124; IT School GoIT
            </a>
          </h4>
          <p className="certificate__description">
            September 2020 - October 2021 &#124; Ukraine
          </p>
        </div>

        <div className="certificate__wrapper">
          <h4 className="certificate__subtitle main__subtitle">
            <a
              className="certificate__link"
              href="https://www.shecodes.io/certificates/eb721cd6d49c4ce4c32215242ef0d85c"
              target="_blank"
            >
              Frontend Developer &#124; IT School SheCodes
            </a>
          </h4>
          <p className="certificate__description">June 2020 - October 2020</p>
        </div>
      </section>
      <a href="./vera-kuzjo.pdf" download className="download__button">
        DOWNLOAD CV
        <DownloadIcon />
      </a>
    </main>
  );
}
