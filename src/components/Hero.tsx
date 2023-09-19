import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandMedium,
  IconMail,
} from "@tabler/icons-react";
import { Tooltip, Container, Button } from "@mantine/core";
import "../assets/css/hero.css";
import MyProfile from "../assets/images/my_profile.jpg";
import resume from "../assets/Resume.pdf";

type Props = {};

function Hero({}: Props) {
  return (
    <section className="hero">
      <Container>
        <div className="left">
          <h2>Hi! My name is Sayyed Arib Hussain</h2>
          <span className="headline">
            Full Stack web developer | Open Source Contributor
          </span>
          <p>
            Impact-oriented Full Stack developer in creating many full stack
            projects using various technology and open source to github to fix
            their projects using Javascript, Typescript, React.js, Vite.js and
            more... and also I have been worked at Amupedia as Web developer
            designing/debugging/fixing the frontend & backend system without any
            errors and with completely responsive web design and fast perfomance
          </p>
          <ul className="socialLinks">
            <li>
              <a href="https://www.linkedin.com/in/sayyed-arib-hussain-1220b5187/">
                <IconBrandLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/sayyedarib/">
                <IconBrandGithub />
              </a>
            </li>
            <li>
              <Tooltip label="sayyedaribhussain4321@gmail.com">
                <IconMail />
              </Tooltip>
            </li>
          </ul>
          <Button
            color="black"
            styles={() => ({
              root: {
                width: "fit-content",
              },
            })}
          >
            <a href={resume} download>
              Download Resume
            </a>
          </Button>
        </div>
        <img src={MyProfile} />
      </Container>
    </section>
  );
}

export default Hero;
