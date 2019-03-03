import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

const App = () => (
	<div>
		<Route path="/" exact component={HomePage} />
		<Route path="/login" exact component={LoginPage} />
	</div>
);

/*class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>BOOK MY BOOK</h1>
			</div>
		);
	}
}*/

export default App;
