import { Container } from "@mantine/core";
import ProjectCard from "./ProjectCard";
import Donorlink from "../assets/images/projects/Donorink.png";
import Textutils from "../assets/images/projects/Textutils.png";
import DSA_Projects from "../assets/images/projects/DSA_projects.png";
import Minor_project from "../assets/images/projects/Minor_project.jpg";
import "../assets/css/projects.css";

type Props = {};

function Projects({}: Props) {
  return (
    <section className="projects" id="projects">
      <Container mb={30}>
        <h3>Here's some of my projects that I have created:</h3>
        <br />
        <ul className="projectLists">
          <li>
            <ProjectCard
              projectLiveLink="https://donorlink-frontend.vercel.app/"
              projectRepoLink="https://github.com/sayyedarib/DonorLink"
              image={Donorlink}
              title="DonorLink"
              oText="( 75% on progress )"
              description="User friendly platform that connects donors , volunteers and people in need"
              projectSkills={[
                "NextJS",
                "NodeJS",
                "MongoDB",
                "TailwindCSS",
                "Nodemailer",
              ]}
            />
          </li>
          <li>
            <ProjectCard
              projectLiveLink="https://sayyedarib.github.io/DSA_project/"
              projectRepoLink="https://github.com/sayyedarib/DSA_project"
              image={DSA_Projects}
              title="DSA Projects"
              description="Tree visulaizer,sudoku solver and N-Queen Solver"
              projectSkills={[
                "HTML5",
                "CSS3",
                "Javacript",
                "Data Structures",
                "Algorithms",
              ]}
            />
          </li>
          <li>
            <ProjectCard
              projectLiveLink="https://text-utils-eight-gilt.vercel.app/"
              projectRepoLink="https://github.com/sayyedarib/TextUtils"
              image={Textutils}
              title="TextUtils"
              description="Count number of words, remove spaces, capitalize letters and more..."
              projectSkills={[
                "HTML5",
              "CSS",
              "React.js",
              "RESPONSIVE WEB DESIGN",
            ]}
            />
          </li>
          <li>
            <ProjectCard
              projectLiveLink="https://drive.google.com/file/d/1Neql2rB9dBQobwwxTJFtgko4KtOcUbV0/view?usp=sharing"
              projectRepoLink="https://github.com/sayyedarib/minor_project"
              image={Minor_project}
              title="Speech Recognition RNN Model(UI pending)"
              description="Home Automation by speech recognition"
              projectSkills={[
                "RNN",
                "Deep Learning",
                "Machine Learning",
                "Arduino",
              ]}
            />
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default Projects;
