// BlogNav.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const BlogNav = () => {
	return (
		<div>
			<Navbar style={{
				backgroundColor:"#A3C1D4"
			}}>
				<img
			src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1719705600&semt=sph'
			height='80'
			alt=''
			loading='lazy'
			/>
				<Navbar.Brand href="#home" style={{color:"green", marginLeft:"10px"}}>Loruem Ipsum</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
					<Nav>
						<Nav.Link href="#home" style={{color:"white"}}>
							JavaScript
						</Nav.Link>
						<Nav.Link href="#about" style={{color:"white"}}>
							Data Structure
						</Nav.Link>
						<Nav.Link href="#services" style={{color:"white"}}>
							Algorithm
						</Nav.Link>
						<Nav.Link href="#contact" style={{color:"white"}}>
							Computer Network
						</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="ml-auto" />
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default BlogNav;
