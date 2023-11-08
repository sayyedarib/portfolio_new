import React from "react";
import { Container } from "@mantine/core";
import "../assets/css/opensourceprojects.css";
import OpenSourceProjectCard from "./OpenSourceProjectCard";
import zulipLogo from "../assets/images/opensource_projects_logo/zulip-icon.png";
import amupediaLogo from "../assets/images/opensource_projects_logo/amupedia.png";
import grabternLogo from "../assets/images/opensource_projects_logo/grabtern.jpg";
import layer5Logo from "../assets/images/opensource_projects_logo/layer5.png";
import mondayUI from "../assets/images/opensource_projects_logo/monday_ui.png";
import Ockam from "../assets/images/opensource_projects_logo/Ockam.png"

type Props = {};

function OpenSourceProjects({}: Props) {
  return (
    <section className="opensourceprojects" id="opensourceprojects">
      <Container mb={30}>
        <h3>Here some open-projects that I have contributed to:</h3>
        <br />
        <ul className="opensourceprojectsLists">
          <li>
            <OpenSourceProjectCard
              repoName="Zulip"
              repoDescription="Real-time chat with an email threading model."
              repoLink="https://github.com/zulip/zulip"
              repoLive="https://zulip.com/"
              howManyPr="4"
              logo={zulipLogo}
              prLink="https://github.com/zulip/zulip/pulls?q=is%3Apr+author%3Asayyedarib"
            />
          </li>
          <li>
            <OpenSourceProjectCard
              repoName="Grabtern"
              repoDescription="Connecting the mentors and creating a network"
              repoLink="https://github.com/anmode/grabtern-frontend"
              repoLive="https://grabtern.com"
              howManyPr="28"
              logo={grabternLogo}
              prLink="https://github.com/anmode/grabtern-frontend/pulls?q=is%3Apr+author%3Asayyedarib"
            />
          </li>
          <li>
            <OpenSourceProjectCard
              repoName="Amupedia"
              repoDescription="Open source website helping needed students"
              repoLink="https://github.com/amupedia2021/Project-Amupedia"
              repoLive="https://amupedia.com"
              howManyPr="5"
              logo={amupediaLogo}
              prLink="https://github.com/amupedia2021/Project-Amupedia/pulls?q=is%3Apr+is%3Aclosed+author%3Asayyedarib"
            />
          </li>
          <li>
            <OpenSourceProjectCard
              repoName="monday-ui-react-core"
              repoDescription="UI resources for application development in React.js"
              repoLink="https://github.com/mondaycom/monday-ui-react-core"
              repoLive="https://style.monday.com/"
              howManyPr="1"
              logo={mondayUI}
              prLink="https://github.com/mondaycom/monday-ui-react-core/pulls?q=is%3Apr+author%3Asayyedarib"
            />
          </li>
          <li>
            <OpenSourceProjectCard
              repoName="ockam"
              repoDescription="Orchestrate end-to-end encryption, cryptographic identities..."
              repoLink="https://github.com/build-trust/ockam"
              repoLive="https://ockam.io/"
              howManyPr="1"
              logo={Ockam}
              prLink="https://github.com/build-trust/ockam/pulls?q=is%3Apr+author%3Asayyedarib"
            />
          </li>
          <li>
            <OpenSourceProjectCard
              repoName="Layer5"
              repoDescription="Layer5's cloud native application and infrastructure management"
              repoLink="https://github.com/layer5io"
              repoLive="https://layer5.io/"
              howManyPr="1"
              logo={layer5Logo}
              prLink="https://github.com/layer5io/layer5/pulls?q=is%3Apr+author%3Asayyedarib"
            />
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default OpenSourceProjects;
