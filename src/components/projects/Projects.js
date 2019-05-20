import React, { Component } from "react";
import {
  Header,
  Segment,
  Grid,
  Image,
  Reveal,
  Button,
  Label,
  Icon
} from "semantic-ui-react";

class Projects extends Component {
  render() {
    return (
      <div className="projects-grid-container">
        <div className="ui one column stackable center aligned page grid">
          <Header textAlign="center" as="h2" color="teal">
            My Projects
          </Header>
          <Grid columns={3}>
            <Grid.Row>

            <div className="project-container">
              <Grid.Column>
                <Segment size="medium" raised>
                  <Reveal animated="move down">
                    <Reveal.Content visible>
                      <Segment vertical textAlign="left">
                        <Grid.Row>
                          <Image fluid src={require("../../img/choices.png")} />
                          <div className="project-title" >
                            <Header as="h3" textAlign="left" color="teal" >
                              Choices
                        </Header>
                          </div>
                        </Grid.Row>
                        <Grid.Row>
                          <Label.Group size="medium">
                            <Label color="green">Android</Label>
                            <Label color="red">Java</Label>
                          </Label.Group>
                        </Grid.Row>
                      </Segment>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                      <Segment vertical color="teal" textAlign="left">
                        <Grid>
                          <Grid.Column floated="left" width={5}>
                            <Header as="h3" textAlign="left" color="teal">
                              {" "}
                              Choices
                        </Header>
                          </Grid.Column>
                          <Grid.Column floated="right" width={4}>
                            <a
                              rel="noopener noreferrer"
                              href="https://www.github.com/checkshumm/Choices"
                              target="_blank"
                            >
                              <Icon size="big" name="github" />
                            </a>
                          </Grid.Column>
                        </Grid>
                        <p>
                          An android app to help make decisions on restaurant,
                          bars and activities. The app uses the Google Places
                          API to locate nearby establishments and retrieve
                          details such as price, rating and location. Users can
                          filter through different location types then easily
                          start deciding by swiping left or right.
                        </p>
                      </Segment>
                    </Reveal.Content>
                  </Reveal>
                </Segment>
              </Grid.Column>
              </div>

              <div className="project-container">
              <Grid.Column>
                <Segment size="medium" raised>
                  <Reveal animated="move down">
                    <Reveal.Content visible>
                      <Segment vertical textAlign="left">
                        <Grid.Row>
                          <Image fluid src={require("../../img/city.jpeg")} />
                          <div className="project-title" >
                            <Header as="h3" textAlign="left" color="teal" >
                              I Want Out
                        </Header>
                          </div>
                        </Grid.Row>
                        <Grid.Row>
                        <Label.Group size="medium">
                          <Label color="red">Mongo</Label>
                          <Label color="orange">Express</Label>
                          <Label color="green">React js</Label>
                          <Label color="blue">Node js</Label>
                        </Label.Group>
                        </Grid.Row>
                      </Segment>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                      <Segment vertical color="teal" textAlign="left">
                        <Grid>
                          <Grid.Column floated="left" width={7}>
                            <Header as="h3" textAlign="left" color="teal">
                              {" "}
                              PINE
                        </Header>
                          </Grid.Column>
                          <Grid.Column floated="right" width={4}>
                            <a
                              rel="noopener noreferrer"
                              href="https://www.github.com/checkshumm/IWantOut"
                              target="_blank"
                            >
                              <Icon size="big" name="github" />
                            </a>
                          </Grid.Column>
                        </Grid>
                        <p>
                          A website that searches around the world to find the
                          perfect city for you. This website incorporates the
                          MERN stack, with the semantic-ui famework for the
                          front end. Using the Teleport API users can quickly
                          search and view major details about hundreds of
                          cities. Users may create a profile and get matched
                          with a city.
                        </p>
                      </Segment>
                    </Reveal.Content>
                  </Reveal>
                </Segment>
              </Grid.Column>
              </div>

              <div className="project-container">
              <Grid.Column>
                <Segment size="medium" raised>
                  <Reveal animated="move down">
                    <Reveal.Content visible>
                      <Segment vertical textAlign="left">
                        <Grid.Row>
                          <Image fluid src={require("../../img/PINE.jpg")} />
                          <div className="project-title" >
                            <Header as="h3" textAlign="left" color="teal" >
                              PINE
                        </Header>
                          </div>
                        </Grid.Row>
                        <Grid.Row>
                        <Label.Group size="medium">
                          <Label color="green">Flutter</Label>
                          <Label color="blue">Dart</Label>
                        </Label.Group>
                        </Grid.Row>
                      </Segment>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                      <Segment vertical color="teal" textAlign="left">
                        <Grid>
                          <Grid.Column floated="left" width={7}>
                            <Header as="h3" textAlign="left" color="teal">
                              {" "}
                              I Want Out
                        </Header>
                          </Grid.Column>
                          <Grid.Column floated="right" width={4}>
                            <a
                              rel="noopener noreferrer"
                              href="https://www.github.com/checkshumm/pine"
                              target="_blank"
                            >
                              <Icon size="big" name="github" />
                            </a>
                          </Grid.Column>
                        </Grid>
                        <p>
                          A productivity app built on flutter for IOS and Android using the BLOC pattern. 
                          Features include task management and personalization all in a reactive and simplistic user interface.
                        </p>
                      </Segment>
                    </Reveal.Content>
                  </Reveal>
                </Segment>
              </Grid.Column>
              </div>
            </Grid.Row>

            <Grid.Row>
             
            <div className="project-container">
              <Grid.Column>
                <Segment size="medium" raised>
                  <Reveal animated="move down">
                    <Reveal.Content visible>
                      <Segment vertical textAlign="left">
                        <Grid.Row>
                          <Image fluid src={require("../../img/gym_pass.jpg")} />
                          <div className="project-title" >
                            <Header as="h3" textAlign="left" color="teal" >
                              Gym Pass
                        </Header>
                          </div>
                        </Grid.Row>
                        <Grid.Row>
                        <Label.Group size="small">
                          <Label color="green">Android</Label>
                          <Label color="red">Java</Label>
                          <Label color="teal">ESP8266</Label>
                          <Label color="blue">IOT</Label>
                          <Label color="pink">C++</Label>
                        </Label.Group>
                        </Grid.Row>
                      </Segment>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                      <Segment vertical color="teal" textAlign="left">
                        <Grid>
                          <Grid.Column floated="left" width={7}>
                            <Header as="h3" textAlign="left" color="teal">
                              {" "}
                              Gym Pass
                        </Header>
                          </Grid.Column>
                          <Grid.Column floated="right" width={4}>
                            <a
                              rel="noopener noreferrer"
                              href="https://www.github.com/checkshumm/gympass"
                              target="_blank"
                            >
                              <Icon size="big" name="github" />
                            </a>
                          </Grid.Column>
                        </Grid>
                        <p>
                          A gym membership android app that allows users to
                          register for a pass, courses and track gym
                          crowdedness. Includes admin features to scan and
                          validate passes. Upon validation of a member's pass
                          the electromagnetic locks of an IOT door is unlocked.
                        </p>
                      </Segment>
                    </Reveal.Content>
                  </Reveal>
                </Segment>
              </Grid.Column>
              </div>

              <div className="project-container">
              <Grid.Column>
                <Segment size="medium" raised>
                  <Reveal animated="move down">
                    <Reveal.Content visible>
                      <Segment vertical textAlign="left">
                        <Grid.Row>
                          <Image fluid src={require("../../img/yelp.png")} />
                          <div className="project-title" >
                            <Header as="h3" textAlign="left" color="teal" >
                             Yelp Recommender System
                        </Header>
                          </div>
                        </Grid.Row>
                        <Grid.Row>
                        <Label.Group size="small">
                          <Label color="teal">Python</Label>
                          <Label color="blue">AWS</Label>
                          <Label color="pink">Spark</Label>
                        </Label.Group>
                        </Grid.Row>
                      </Segment>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                      <Segment vertical color="teal" textAlign="left">
                        <Grid>
                          <Grid.Column floated="left" width={10}>
                            <Header as="h3" textAlign="left" color="teal">
                              {" "}
                              Yelp Recommender
                        </Header>
                          </Grid.Column>
                          <Grid.Column floated="right" width={4}>
                            <a
                              rel="noopener noreferrer"
                              href="https://github.com/CheckShumm/Yelp-Recommendation-Engine"
                              target="_blank"
                            >
                              <Icon size="big" name="github" />
                            </a>
                          </Grid.Column>
                        </Grid>
                        <p>
                        A recommender system for restaurants using the yelp
                          data set. Using a least alternating square machine
                          learning algorithm, the system recommends new
                          restaurants based on user reviews. Built using
                          pyspark, a python wrapper for spark. Hosted on an AWS
                          server to use GPU clusters for faster analysis
                        </p>
                      </Segment>
                    </Reveal.Content>
                  </Reveal>
                </Segment>
              </Grid.Column>
              </div>

              <div className="project-container">
              <Grid.Column>
                <Segment size="medium" raised>
                  <Reveal animated="move down">
                    <Reveal.Content visible>
                      <Segment vertical textAlign="left">
                        <Grid.Row>
                          <Image fluid src={require("../../img/thermostat.jpg")} />
                          <div className="project-title" >
                            <Header as="h3" textAlign="left" color="teal" >
                            Smart Thermostat
                        </Header>
                          </div>
                        </Grid.Row>
                        <Grid.Row>
                        <Label.Group size="small">
                          <Label color="teal">Python</Label>
                          <Label color="blue">AWS</Label>
                          <Label color="pink">Spark</Label>
                        </Label.Group>
                        </Grid.Row>
                      </Segment>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                      <Segment vertical color="teal" textAlign="left">
                        <Grid>
                          <Grid.Column floated="left" width={10}>
                            <Header as="h3" textAlign="left" color="teal">
                              {" "}
                              Smart Thermostat
                        </Header>
                          </Grid.Column>
                          <Grid.Column floated="right" width={4}>
                            <a
                              rel="noopener noreferrer"
                              href="https://github.com/CheckShumm/Smart-Thermostat"
                              target="_blank"
                            >
                              <Icon size="big" name="github" />
                            </a>
                          </Grid.Column>
                        </Grid>
                        <p>
                        A basic smart home thermometer built using ESP8266, DHT22 sensors and an oled screen.
                        Uses wunderground's API to retrieve nearby weather conditions and compare them to internal temperature and humidity.
                        </p>
                      </Segment>
                    </Reveal.Content>
                  </Reveal>
                </Segment>
              </Grid.Column>
              </div>

            </Grid.Row>
          </Grid>
        </div>
      </div>
      
    );
  }
}

export default Projects;
