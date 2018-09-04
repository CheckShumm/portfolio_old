import React, { Component } from "react";
import { Header, Segment, Container, Grid, Image } from "semantic-ui-react";

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <div className="ui one column stackable center aligned page grid">
          <Header textAlign="center" as="h2" color="teal">
            My Projects
          </Header>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <div className="project-segment">
                  <Segment size="large" raised>
                    <Image fluid src={require("../../img/choices.png")} />
                    <Header as="h3" textAlign="left" color="teal">
                      {" "}
                      Choices
                    </Header>
                    <Container textAlign="left">
                      <p>
                        An android app to help make decisions on restaurant,
                        bars and activities
                      </p>
                    </Container>
                  </Segment>
                </div>
              </Grid.Column>
              <Grid.Column>
                <Segment size="big" raised />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Segment size="big" raised />
              </Grid.Column>
              <Grid.Column>
                <Segment size="big" raised />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Projects;
