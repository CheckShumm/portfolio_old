import React, { Component } from "react";
import {
  Segment,
  Menu,
  Header,
  Icon,
  Grid,
  Image,
  Container
} from "semantic-ui-react";

import resume from "../.././resume/Nathan-Shummoogum-Resume.pdf";

class Heading extends Component {
  render() {
    return (
      <div>
        <Segment className="heading-segment" inverted color="black">

          <Image
            centered
            circular
            bordered
            size="small"
            src={require("../../img/profile_pic.png")}
          />
          <Header color="white" as="h1" textAlign="center">
            <Header.Content>Nathan Shummoogum</Header.Content>
          </Header>
          <Container
            size="large"
            textAlign="center"
            style={{ width: "50%", marginBottom: "16px" }}
          >
            <p>
              I am an undergraduate student enrolled in his 4th year of computer
              engineering. <br /> I enjoy coding all sorts of things from mobile
              apps and websites to micro-controllers <br /> I enjoy data
              science, machine learning and love to tinker with IOT devices.{" "}
              <br /> In my free time I practice fingerstyle guitar, play
              basketball or hit the gym.
              <br /> For more information visit the following links
            </p>
          </Container>
          <Grid centered columns={8}>
          <Grid.Column>
                <Menu inverted color="black" borderless size="mini" compact icon="labeled">
                  <a
                    rel="noopener noreferrer"
                    href="https://www.github.com/checkshumm"
                    target="_blank"
                  >
                    <Menu.Item name="github">
                      <Icon name="github" />
                      Github
                    </Menu.Item>
                  </a>
                  <a href={resume} target="_blank">
                    <Menu.Item name="resume">
                      <Icon name="file alternate outline" />
                      Resume
                    </Menu.Item>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/nathan-shummoogum-8a1b8217a/"
                    target="_blank"
                  >
                    <Menu.Item name="linkedin">
                      <Icon name="linkedin alternate" />
                      LinkedIn
                    </Menu.Item>
                  </a>
                </Menu>
                </Grid.Column>
                </Grid>
        </Segment>
      </div>
    );
  }
}

export default Heading;
