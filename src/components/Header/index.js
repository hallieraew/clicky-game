import React from "react";
import "./style.css"

function Header() {
	return (
		<div className='jumbotron jumbotron-fluid'>
				<div className = "header mx-auto">
				<h1>Choose Yer Fruits!</h1>
				<br />
				<p className='lead mx-auto'>
					This click application will test your memory skills. Choose a
					different fruit each time, when you select a fruit you have already
					chosen, the game will reset. Try to get through all 12 without any
					duplicate selections.
				</p>
				</div>
		</div>
	);
}

export default Header;
