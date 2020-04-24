import React from "react";
import Wrapper from "./components/Wrapper";
import Cards from "./components/Cards";
import fruits from "./fruits.json";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

class App extends React.Component {
	state = {
		fruits,
		score: 0,
		topScore: 0,
		message: ""
	};

	handleBtnClick = index => {
		this.setState({
			message: "Keep selecting fruits!"
		});

		if (!this.state.fruits[index].clicked) {
			console.log("not clicked");
			this.setState(
				{
					fruits: this.state.fruits.map((fruit, i) =>
						i === index ? { ...fruit, clicked: true } : fruit
					),
					score: this.state.score + 1,
					topScore:
						this.state.score + 1 > this.state.topScore
							? this.state.score + 1
							: this.state.topScore
				},
				() =>
					this.setState({
						fruits: this.state.fruits.sort(() => 0.5 - Math.random())
					})
			);
		} else {
			console.log("clicked");
			this.setState({
				fruits: this.state.fruits
					.map(fruit => ({ ...fruit, clicked: false }))
					.sort(() => 0.5 - Math.random()),
				score: 0,
				message:
					"Oh no! You have already picked that one. Select any fruit to start again!"
			});
		}
	};
	// shuffle function from https://css-tricks.com/snippets/javascript/shuffle-array/

	render() {
		return (
			<Wrapper>
				<Header />
				<Counter
					score={this.state.score}
					topScore={this.state.topScore}
					message={this.state.message}
				/>
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
				<Footer />
			</Wrapper>
		);
	}
}

export default App;
