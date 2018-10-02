import React, { Component } from "react";
import { Header, Segment, Grid, Image, Reveal } from "semantic-ui-react";

class Experiences extends Component {
	render() {
		return (
			<div className="projects-container">
				<div className="ui one column stackable center aligned page grid">
					<Header textAlign="center" as="h2" color="teal">
						My Experience
					</Header>
					<Grid columns={4}>
						<Grid.Column>
							<Segment size="small" raised>
								<Reveal animated="move up">
									<Reveal.Content visible>
										<Image small fluid src={require("../../img/PWC.jpg")} />
										<Header as="h3" textAlign="center" color="teal">
											{" "}
											Data Science Intern
										</Header>
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
						<Grid.Column>
							<Segment size="small" raised>
								<Reveal animated="move up">
									<Reveal.Content visible>
										<Image small fluid src={require("../../img/nuance.jpg")} />
										<Header as="h3" textAlign="center" color="teal">
											{" "}
											Software Eng. Intern
										</Header>
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
					</Grid>
				</div>
			</div>
		);
	}
}

export default Experiences;
