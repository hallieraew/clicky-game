import React from "react";
import "./style.css";


function Cards(props) {
	return (
		<div className='col-3'>
			<img
				className='img'
				id={props.id}
				src={props.image}
				alt={props.name}
				onClick={() => props.clickedIt(props.id)}
			/>
		</div>
	);
}

export default Cards;
