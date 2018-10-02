import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const ProjectFieldGroup = ({
	title,
	description,
	link,
	label,
	onHover,
	image
}) => {
	return (
		<Segment size="large" raised>
			<Reveal animated="move down">
				<Reveal.Content visible>
					<Image fluid src={require("../../img/" + image)} />
					<Segment vertical color="teal" textAlign="left">
						<Header as="h3" textAlign="left" color="teal">
							title
						</Header>

						<Label.Group size="small">
							<Label color="green">Android</Label>
							<Label color="red">Java</Label>
							<Label color="blue">IOT</Label>
							<Label color="pink">C++</Label>
						</Label.Group>

						<p>
							A gym membership android app that allows users to register for a
							pass, courses and track gym crowdedness. Includes admin features
							to scan and validate passes as well as an IOT door!
						</p>
					</Segment>
				</Reveal.Content>
				<Reveal.Content hidden>
					<Segment vertical color="teal" textAlign="left">
						<Header as="h3" textAlign="left" color="teal">
							{" "}
							Gym Pass
						</Header>
						<p>
							A gym membership android app that allows users to register for a
							pass, courses and track gym crowdedness. Includes admin features
							to scan and validate passes as well as an IOT door!
						</p>
						<Button color="teal"> GitHub</Button>
					</Segment>
				</Reveal.Content>
			</Reveal>
		</Segment>
	);
};

export default ProjectFieldGroup;
