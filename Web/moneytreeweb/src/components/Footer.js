import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles.js";

const Footer = () => {
return (
	<Box>
	<h3 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		Copyright 2022 with WebDevGroup5. All rights reserved
	</h3>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Budgeting</FooterLink>
			<FooterLink href="#">Finance Tracking</FooterLink>
			
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">111-111-1111 main</FooterLink>
			<FooterLink href="#">111-111-1124 toll free</FooterLink>
			
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="http://facebook.com">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			
			<FooterLink href="http://twitter.com">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
