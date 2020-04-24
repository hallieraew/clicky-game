import React from "react";
import "./style.css";

function Footer() {
	return (
		<nav class='navbar fixed-bottom foot'>
			<a className='navbar-brand' href='https://github.com/hallieraew'>
				Created with React by Hallie Weintraub
			</a>
			<a className='navbar-brand' href='https://unsplash.com/'>
				All images have been sourced from Unsplashed
			</a>
		</nav>
	);
}

export default Footer;
