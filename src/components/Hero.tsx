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
          As an enthusiastic and self-motivated individual, I am currently pursuing a Bachelor's degree in Artificial Intelligence from Aligarh Muslim University. My passion for programming has led me to develop skills in a range of languages including C++, JavaScript, and Python. I am also interested in the latest web technologies, including React.js and Next.js, and have experience working on local websites. Additionally, I am intrigued by the fields of Deep Learning and Natural Language Processing. I believe in the power of teamwork and actively seek opportunities to collaborate and learn from others. Feel free to connect with me to discuss anything related to AI, programming or web development.
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
