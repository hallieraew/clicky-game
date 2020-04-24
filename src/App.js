import React from "react";
import Wrapper from "./components/Wrapper";
import Cards from "./components/Cards";
import fruits from "./fruits.json";
import Header from "./components/Header";
import Counter from "./components/Counter";

class App extends React.Component {
	state = {
		fruits,
		score: 0,
		topScore: 0,
		message: ""
	};

	handleBtnClick = index => {

		if (!this.state.fruits[index].clicked) {
			console.log("not clicked");
			this.setState({
				fruits: this.state.fruits.map((fruit, i) =>
					i === index ? { ...fruit, clicked: true } : fruit
				),
				score: this.state.score + 1,
				topScore: (this.state.score +1) > this.state.topScore ? (this.state.score +1) : this.state.topScore
			},
			() => this.setState({
				fruits: this.state.fruits.sort(() => 0.5 - Math.random())
			}));
		} else {
			console.log("clicked")
			this.setState({
				fruits: this.state.fruits.map(fruit => ({...fruit, clicked: false})).sort(() => 0.5 - Math.random()),
				score: 0,
				message: "You lose"

			})
		}

	}

		// get id for image clicked - value or id
		// determine if it has been clicked
		// if no - change state of clicked to true, change state.score +1,
		// if state.score > topscore update topscore
		// if score = 12 trigger modal (later)
		// if yes - you lost ~ this.state.store - 0 ,
		// this.setState({fruits: this.state.fruits.map(fruit => ({...fruit, clicked: false})}))
		// shuffle array

		// 	if (event) {
		// 		this.name.push(clickedFruit);
		// 		this.setState({ score: this.state.score + 1 });
		// 		this.setState({ topScore: this.state.score });
		// 	} else {
		// 		this.setState({ score: 0 });
		// 	}
		// shuffle={this.state.fruits.sort(function() {
		// 	return 0.5 - Math.random();

		// shuffle function from https://css-tricks.com/snippets/javascript/shuffle-array/


	render() {
		return (
			<Wrapper>
				<Header />
				<Counter score={this.state.score} topScore={this.state.topScore} message={this.state.message} />
				<div className='container'>
					<div className='row'>
						{this.state.fruits.map((fruit, index) => (
							<Cards
								id={index}
								key={fruit.id}
								name={fruit.name}
								image={fruit.image}
								clickedIt={this.handleBtnClick}
							/>
						))}
					</div>
				</div>
			</Wrapper>
		);
	}
}

export default App;
