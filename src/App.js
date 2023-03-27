import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaJava } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiC } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { FaSalesforce } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiAngularjs } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { SiGradle } from "react-icons/si";
import { SiAdobecreativecloud } from "react-icons/si";
import { SiMicrosoftoffice } from "react-icons/si";

import "./App.css";

import profilepic from "./img/profilepic.png";
import baking from "./img/baking.png";
import crocheting from "./img/crocheting.png";
import designingblack from "./img/designingblack.png";
import designingpink from "./img/designingpink.png";
import journaling from "./img/journaling.png";
import gaming from "./img/gaming.png";
import redhat from "./img/redhat.png";
import liveoakbank from "./img/liveoakbank.png";
import researchexchange from "./img/researchexchange.png";
import onewallet from "./img/onewallet.png";
import ncsuinvolvement from "./img/ncsuinvolvement.png";
import resa from "./img/resa.png";
import trappedbypirates from "./img/trappedbypirates.png";
import deathscape from "./img/deathscape.png";

function scrollUpdate() {
  const down = document.getElementById("scroll-down");
  const up = document.getElementById("scroll-up");

  window.addEventListener("scroll", () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      up.classList.remove("scroll-hidden");
      down.classList.add("scroll-hidden");
    } else {
      down.classList.remove("scroll-hidden");
      up.classList.add("scroll-hidden");
    }
  });
}

function navUpdate() {
  const links = document.getElementById("nav-links").children
  const sections = document.getElementById("main").children
  const names = ["home", "about", "experience", "skills", "portfolio"]

  for (let section of sections) {
    if ((!window.location.hash && section.id === "home") || (window.location.hash.substring(1) === section.id)) {
      section.scrollIntoView()
      break;
    }
  }

  window.addEventListener("scroll", () => {
    const bounds = []
    for (let section of sections) {
      bounds.push(section.getBoundingClientRect())
    }
    bounds.pop()

    for (let i = 0; i < bounds.length; i++) {
      if (bounds[i].top < document.documentElement.clientHeight - 75 && (bounds[i].bottom - bounds[i].top) / document.documentElement.clientHeight > .5) {
        for (let link of links) {
          if (link.innerText.toLowerCase() === names[i]) {
            link.classList.add("nav-selected")
          } else {
            link.classList.remove("nav-selected")
          }
        }
      }
    }
  });
}

function App() {
  return (
    <div onLoad={scrollUpdate}>
      <div id="nav">
        <div id="nav-links">
          <div className="selected">
            <a href="#home">Home</a>
          </div>
          <div>
            <a href="#about">About</a>
          </div>
          <div>
            <a href="#experience">Experience</a>
          </div>
          <div>
            <a href="#skills">Skills</a>
          </div>
          <div>
            <a href="#portfolio">Portfolio</a>
          </div>
        </div>
      </div>
      <div id="main" onLoad={navUpdate}>
        <div id="home">
          <div className="section">
            <div className="center row section-content">
              <div id="home-photo">
                <div className="image">
                  <img src={profilepic} alt="Profile pic"></img>
                </div>
              </div>
              <div id="home-text">
                <h2>Hi, I'm Selena!</h2>
                <p>I'm a currently a Master of Computer Science student at North Carolina State University.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="about">
          <div className="section">
            <div className="center row section-content">
              <div id="about-text">
                <h2>About Me</h2>
                <p>I'm a full-stack software developer who prides herself in being a perfectionist and making things look nice. I'm also a creative at heart and have a passion for making all sorts of cool things.</p>
                <p>Some of my hobbies include baking, cooking, crocheting, designing, journaling, and gaming.</p>
              </div>
              <div id="about-photos">
                <div className="center row wrap">
                  <div className="about-photo">
                    <div className="image">
                      <img src={baking} alt="Baking" className="round-corners"></img>
                    </div>
                  </div>
                  <div className="about-photo">
                    <div className="image">
                      <img src={crocheting} alt="Crocheting" className="round-corners"></img>
                    </div>
                  </div>
                  <div className="about-photo">
                    <div className="image">
                      <img src={designingblack} alt="Designing black" className="round-corners"></img>
                    </div>
                  </div>
                  <div className="about-photo">
                    <div className="image">
                      <img src={designingpink} alt="Designing pink" className="round-corners"></img>
                    </div>
                  </div>
                  <div className="about-photo">
                    <div className="image">
                      <img src={journaling} alt="Journaling" className="round-corners"></img>
                    </div>
                  </div>
                  <div className="about-photo">
                    <div className="image">
                      <img src={gaming} alt="Gaming" className="round-corners"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="experience">
          <div className="section">
            <div className="section-content">
              <center><h2>Work Experience</h2></center>
              <div className="row">
                <div className="experience-logo">
                  <div className="image">
                    <img src={redhat} alt="Red Hat" className="round-corners"></img>
                  </div>
                </div>
                <div className="experience-text">
                  <h3>Red Hat</h3>
                  <h4>May 2022 - August 2022</h4>
                  <ul>
                    <li>Designed and developed Python release tooling for midstream OpenShift migration tools to increase productivity by allowing projects to be released faster and more frequently</li>
                    <li>Created a Go tool that scrapes production end-to-end test results, detects test flakes, and formats the information for APIs that are displayed in a Grafana dashboard</li>
                    <li>Helped implement both upstream and downstream automated builds and end-to-end tests to support the CI/CD integration of migration toolkit solutions with at least 85% code coverage</li>
                    <li>Assisted with the documentation and testing of migration toolkit minikube enablement labs to help other developers get started with Kubernetes</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="experience-logo">
                  <div className="image">
                    <img src={liveoakbank} alt="Live Oak Bank" className="round-corners"></img>
                  </div>
                </div>
                <div className="experience-text">
                  <h3>Live Oak Bank</h3>
                  <h4>May 2021 - November 2021</h4>
                  <ul>
                    <li>Worked alongside multiple engineering and business teams to fully transition customer data from a legacy core system to Finxact's cloud-based core processor with 100% accuracy</li>
                    <li>Created custom Salesforce components to support day-to-day business activities</li>
                    <li>Presented a Cucumber.js proof of concept to reduce the time spent on user acceptance testing</li>
                    <li>Maintained a data warehouse on AWS to perform ETL processes and track custom metrics, allowing business users to access important data in the warehouse in real-time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="skills">
          <div className="section">
            <div className="center row section-content">
              <div>
                <center><h2>Skills & Tools</h2></center>
                <p>As a curious engineer who genuinely enjoys learning new things and creating cool things, I've picked up a bunch of skills in nearly every software engineering field. Some of these fields including cloud architecture, computer graphics, data science, DevOps, game development, graphic design, machine learning, project management, quality assurance, and web development.</p>
                <p>Some of the tools that I use include:</p>
                <div className="center row wrap" id="skills-icons">
                  <div>
                    <div className="skills-icon">
                      <FaJava size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>Java</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiPython size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>Python</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <IoLogoJavascript size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>JavaScript</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiC size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>C</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiCplusplus size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>C++</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiCsharp size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>C#</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <TbBrandGolang size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>Go</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiHtml5 size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>HTML</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiCss3 size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>CSS</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiMysql size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>MySQL</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiAmazonaws size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>AWS</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiOracle size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>Oracle</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiGooglecloud size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>Google Cloud</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <FaSalesforce size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>Salesforce</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiNodedotjs size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>Node.js</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiNextdotjs size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>Next.js</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiAngularjs size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>AngularJS</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiReact size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>React</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiDocker size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>Docker</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiKubernetes size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>Kubernetes</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiSpring size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>Spring Boot</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiWebpack size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>Webpack</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiGradle size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>Gradle</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiAdobecreativecloud size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>Adobe CC</h3></center>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="skills-icon">
                      <SiMicrosoftoffice size={100} />
                      <div className="skills-icon-glow">
                        <center><h3>Microsoft Office</h3></center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="portfolio">
          <div className="section">
            <div className="center row section-content">
              <div>
                <center><h2>Portfolio</h2></center>
                <div className="center row wrap">
                  <div class="portfolio-photo">
                    <div className="image">
                      <img src={researchexchange} alt="Research Exchange" className="round-corners"></img>
                      <a href="https://github.com/SelenaChen123/ResearchExchange" target="_blank" rel="noreferrer">
                        <div className="portfolio-blur">
                          <center><h3>Research Exchange</h3></center>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="portfolio-photo">
                    <div className="image">
                      <img src={onewallet} alt="One Wallet" className="round-corners"></img>
                      <a href="https://github.com/SelenaChen123/OneWallet" target="_blank" rel="noreferrer">
                        <div className="portfolio-blur">
                          <center><h3>One Wallet</h3></center>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="portfolio-photo">
                    <div className="image">
                      <img src={ncsuinvolvement} alt="NCSU Involvement" className="round-corners"></img>
                      <a href="https://github.com/SelenaChen123/NCSUInvolvement" target="_blank" rel="noreferrer">
                        <div className="portfolio-blur">
                          <center><h3>NCSU Involvement</h3></center>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="portfolio-photo">
                    <div className="image">
                      <img src={resa} alt="RESA" className="round-corners"></img>
                      <a href="https://github.com/SelenaChen123/RESA" target="_blank" rel="noreferrer">
                        <div className="portfolio-blur">
                          <center><h3>RESA</h3></center>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="portfolio-photo">
                    <div className="image">
                      <img src={trappedbypirates} alt="Trapped By Pirates" className="round-corners"></img>
                      <a href="https://github.com/SelenaChen123/EscapeRoom" target="_blank" rel="noreferrer">
                        <div className="portfolio-blur">
                          <center><h3>Trapped By Pirates</h3></center>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="portfolio-photo">
                    <div className="image">
                      <img src={deathscape} alt="Death Scape" className="round-corners"></img>
                      <a href="https://github.com/SelenaChen123/DeathScape" target="_blank" rel="noreferrer">
                        <div className="portfolio-blur">
                          <center><h3>Death Scape</h3></center>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div id="footer-content">
            <div id="footer-text">
              <h3>Selena Chen</h3>
              <p>Thanks for visiting me! Please feel free to connect with me through these channels.</p>
            </div>
            <div id="footer-icons">
              <div className="center row wrap">
                <a href="https://www.instagram.com/selenachen123/" target="_blank" rel="noreferrer">
                  <div className="footer-icon">
                    <FiInstagram size={30} />
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/selenachen53/" target="_blank" rel="noreferrer">
                  <div className="footer-icon">
                    <FiLinkedin size={30} />
                  </div>
                </a>
                <a href="https://github.com/SelenaChen123" target="_blank" rel="noreferrer">
                  <div className="footer-icon">
                    <FiGithub size={30} />
                  </div>
                </a>
                <a href="mailto:selenachen2000@gmail.com">
                  <div className="footer-icon">
                    <FiMail size={30} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="center row" id="scroll">
        <div className="scroll-icon" id="scroll-down">
          <FaArrowDown size={25} />
        </div>
        <div className="scroll-hidden scroll-icon" id="scroll-up">
          <FaArrowUp size={25} />
        </div>
      </div>
    </div>
  );
}

export default App;
