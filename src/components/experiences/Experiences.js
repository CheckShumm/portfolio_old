import React, { Component } from "react";
import { Header, Segment, Grid, Image, Reveal } from "semantic-ui-react";

class Experiences extends Component {
	render() {
		return (
			<div className="projects-grid-container">
				<div className="ui one column stackable center aligned page grid">
					<Header textAlign="center" as="h2" color="teal">
						My Experience
					</Header>
					<Grid columns={3} stackable className="fill-content">
						<Grid.Row stretched>

							<div className="experience-container">
								<Grid.Column>
								
										<Segment size="medium" raised>
											<Reveal animated="move up">
												<Reveal.Content visible>
													<Grid.Row>
														<Image small fluid src={require("../../img/PWC.jpg")} />
													</Grid.Row>
													<Grid.Row>
														<Header as="h3" textAlign="center" color="teal">
															{" "}
															Data Science Intern
										</Header>
													</Grid.Row>
												</Reveal.Content>
												<Reveal.Content hidden>
													<Grid centered>
														{" "}
														<Grid.Row />
														<Grid.Row />
														<Grid.Row />
														<Grid.Row>
															<Header as="h3" textAlign="left" color="teal">
																FALL 2016
												</Header>
														</Grid.Row>
													</Grid>
												</Reveal.Content>
											</Reveal>
										</Segment>
									
								</Grid.Column>
							</div>
							<div className="experience-container">
								<Grid.Column>
									
										<Segment size="medium" raised>
											<Reveal animated="move up">
												<Reveal.Content visible>
													<Grid.Row>
														<Image src={require("../../img/nuance.jpg")} />
													</Grid.Row>
													<Grid.Row>
														<Header as="h3" textAlign="center" color="teal">
															{" "}
															Software Eng. Intern
													</Header>
													</Grid.Row>

												</Reveal.Content>
												<Reveal.Content hidden>
													<Grid centered>
														{" "}
														<Grid.Row />
														<Grid.Row />
														<Grid.Row />
														<Grid.Row>
															<Header as="h3" textAlign="left" color="teal">
																FALL 2017
												</Header>
														</Grid.Row>
													</Grid>
												</Reveal.Content>
											</Reveal>
										</Segment>
									
								</Grid.Column>
							</div>
							<div className="experience-container">
								<Grid.Column>
									
										<Segment size="medium" raised>
											<Reveal animated="move up">
												<Reveal.Content visible>
													<Grid.Row>
														<Image src={require("../../img/PERFORM.jpg")} />
													</Grid.Row>
													<Grid.Row>
														<Header as="h3" textAlign="center" color="teal">
															{" "}
															Full-Stack Software Intern
												</Header>
													</Grid.Row>
												</Reveal.Content>
												<Reveal.Content hidden>
													<Grid centered>
														{" "}
														<Grid.Row />
														<Grid.Row />
														<Grid.Row />
														<Grid.Row>
															<Header as="h3" textAlign="left" color="teal">
																Summer 2019
												</Header>
														</Grid.Row>
													</Grid>
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

export default Experiences;
