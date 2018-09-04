import React, { Component } from "react";
import {
  Segment,
  Menu,
  Header,
  Icon,
  Image,
  Container
} from "semantic-ui-react";

class Heading extends Component {
  constructor() {
    super();
    this.state = { activeItem: "gamepad" };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Segment className="heading-segment">
          <Header color="blue" as="h3" textAlign="center">
            <Header.Content>Nice to meet you!</Header.Content>
          </Header>
          <Header color="blue" as="h3" textAlign="center">
            <Header.Content>My name is</Header.Content>
          </Header>
          <Image
            centered
            circular
            bordered
            size="small"
            src={require("../../img/profile_pic.png")}
          />
          <Header color="blue" as="h1" textAlign="center">
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
              basketball or hit the gym.<br /> For more information visit one of
              the following links
            </p>
          </Container>
          <div className="ui one column stackable center aligned page grid">
            <div className="column twelve wide">
              <div className="ui three item menu">
                <Menu borderless size="mini" compact icon="labeled">
                  <Menu.Item
                    name="github"
                    active={activeItem === "github"}
                    onClick={this.handleItemClick}
                  >
                    <Icon name="github" />
                    Github
                  </Menu.Item>

                  <Menu.Item
                    name="resume"
                    active={activeItem === "resume"}
                    onClick={this.handleItemClick}
                  >
                    <Icon name="file alternate outline" />
                    Resume
                  </Menu.Item>

                  <Menu.Item
                    name="linkedin"
                    active={activeItem === "linkedin"}
                    onClick={this.handleItemClick}
                  >
                    <Icon name="linkedin alternate" />
                    LinkedIn
                  </Menu.Item>
                </Menu>
              </div>
            </div>
          </div>
        </Segment>
      </div>
    );
  }
}

export default Heading;
