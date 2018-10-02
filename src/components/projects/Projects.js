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
			<div className="projects-container">
				<div className="ui one column stackable center aligned page grid">
					<Header textAlign="center" as="h2" color="teal">
						My Projects
					</Header>
					<Grid columns={2}>
						<Grid.Row>
							<Grid.Column>
								<Segment size="large" raised>
									<Reveal animated="move down">
										<Reveal.Content visible>
											<Segment vertical textAlign="left">
												<Image fluid src={require("../../img/choices.png")} />
												<Header as="h3" textAlign="left" color="teal">
													Choices
												</Header>

												<Label.Group size="medium">
													<Label color="green">Android</Label>
													<Label color="red">Java</Label>
												</Label.Group>
											</Segment>
										</Reveal.Content>
										<Reveal.Content hidden>
											<Segment vertical color="teal" textAlign="left">
												<Header as="h3" textAlign="left" color="teal">
													{" "}
													Choices
												</Header>
												<p>
													An android app to help make decisions on restaurant,
													bars and activities. The app uses the Google Places
													API to locate nearby establishments and retrieve
													details such as price, rating and location. Users can
													filter through different location types then easily
													start deciding by swiping left or right. all favorites
													establishments will be added to a list. Users can then
													begin removing options from a list.
												</p>
												<a
													rel="noopener noreferrer"
													href="https://www.github.com/checkshumm/Choices"
													target="_blank">
													<Button color="teal" icon labelPosition="left">
														<Icon size="large" name="github" />
														GitHub
													</Button>
												</a>
											</Segment>
										</Reveal.Content>
									</Reveal>
								</Segment>
							</Grid.Column>
							<Grid.Column>
								<Segment size="large" raised>
									<Reveal animated="move down">
										<Reveal.Content visible>
											<Segment vertical textAlign="left">
												<Image fluid src={require("../../img/city.jpeg")} />
												<Header as="h3" textAlign="left" color="teal">
													IWantOut
												</Header>

												<Label.Group size="medium">
													<Label color="red">Mongo</Label>
													<Label color="orange">Express</Label>
													<Label color="green">React js</Label>
													<Label color="teal">Redux</Label>
													<Label color="blue">Node js</Label>
													<Label color="purple">Semantic-UI</Label>
												</Label.Group>
											</Segment>
										</Reveal.Content>
										<Reveal.Content hidden>
											<Segment vertical color="teal" textAlign="left">
												<Header as="h3" textAlign="left" color="teal">
													{" "}
													IWantOut
												</Header>
												<p>
													A website that searches around the world to find the
													perfect city for you. This website incorporates the
													MERN stack, with the semantic-ui famework for the
													front end. Using the Teleport API users can quickly
													search and view major details about hundreds of
													cities. Users may create a profile and get matched
													with a city.
												</p>
												<a
													rel="noopener noreferrer"
													href="https://www.github.com/checkshumm/IWantOut"
													target="_blank">
													<Button color="teal" icon labelPosition="left">
														<Icon size="large" name="github" />
														GitHub
													</Button>
												</a>
											</Segment>
										</Reveal.Content>
									</Reveal>
								</Segment>
							</Grid.Column>
						</Grid.Row>

						<Grid.Row>
							<Grid.Column>
								<Segment size="large" raised>
									<Reveal animated="move down">
										<Reveal.Content visible>
											<Segment vertical textAlign="left">
												<Image fluid src={require("../../img/gym_pass.jpg")} />
												<Header as="h3" textAlign="left" color="teal">
													Gym Pass
												</Header>

												<Label.Group size="medium">
													<Label color="green">Android</Label>
													<Label color="red">Java</Label>
													<Label color="teal">ESP8266</Label>
													<Label color="blue">IOT</Label>
													<Label color="pink">C++</Label>
												</Label.Group>
											</Segment>
										</Reveal.Content>
										<Reveal.Content hidden>
											<Segment vertical color="teal" textAlign="left">
												<Header as="h3" textAlign="left" color="teal">
													{" "}
													Gym Pass
												</Header>
												<p>
													A gym membership android app that allows users to
													register for a pass, courses and track gym
													crowdedness. Includes admin features to scan and
													validate passes. Upon validation of a member's pass
													the electromagnetic locks of an IOT door is unlocked.
												</p>
												<a
													rel="noopener noreferrer"
													href="https://www.github.com/checkshumm/GymPass"
													target="_blank">
													<Button color="teal" icon labelPosition="left">
														<Icon size="large" name="github" />
														GitHub
													</Button>
												</a>
											</Segment>
										</Reveal.Content>
									</Reveal>
								</Segment>
							</Grid.Column>
							<Grid.Column>
								<Segment size="large" raised>
									<Reveal animated="move down">
										<Reveal.Content visible>
											<Segment vertical textAlign="left">
												<Image
													fluid
													src={require("../../img/thermostat.jpg")}
												/>
												<Header as="h3" textAlign="left" color="teal">
													Smart Thermostat
												</Header>

												<Label.Group size="medium">
													<Label color="teal">Arduino</Label>
													<Label color="blue">IOT</Label>
													<Label color="pink">C++</Label>
												</Label.Group>
											</Segment>
										</Reveal.Content>
										<Reveal.Content hidden>
											<Segment vertical color="teal" textAlign="left">
												<Header as="h3" textAlign="left" color="teal">
													{" "}
													Smart Thermostat
												</Header>
												<p>
													An IOT weather station, tracks indoor and outdoor
													temperature to adjust thermostat. The station uses a
													DHT22 sensor to track indoor temperature and humidity.
													Using the wunderground API, the device tracks outdoor
													weather condition for the current location. After
													comparing the two weather conditions, the app
													concludes an appropriate temperature for a thermostat.
												</p>
												<a
													rel="noopener noreferrer"
													href="https://www.github.com/checkshumm/Smart-Thermostat"
													target="_blank">
													<Button color="teal" icon labelPosition="left">
														<Icon size="large" name="github" />
														GitHub
													</Button>
												</a>
											</Segment>
										</Reveal.Content>
									</Reveal>
								</Segment>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
			</div>
		);
	}
}

export default Projects;
