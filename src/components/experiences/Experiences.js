import React, { Component } from "react";
import { Header, Segment, Container, Grid } from "semantic-ui-react";

class Experiences extends Component {
  render() {
    return (
      <div className="projects-container">
        <Container textAlign="center">
          <Header as="h2" color="teal">
            My Experience
          </Header>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Segment size="big" raised />
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
        </Container>
      </div>
    );
  }
}

export default Experiences;
