import React, { Component } from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
/* import Books from './components/Books/Books'; */
import Contact from './components/Contact/Contact';
import Notfound from './components/Notfound/Notfound';
/* import { Book1, Book2, Book3, Book4, Book5, Book6, Book7, Book8, Book9, Book10 } from './components/index.js'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<Menu />
				<div className="container-fluid">
					<Switch>
						<Route exact path="/" component={Home} />

						<Route path="/contact" component={Contact} />
						{/* 	<Route path="/books" component={Books} />
							<Route path="/book1" component={Book1} />
							<Route path="/book2" component={Book2} />
							<Route path="/book3" component={Book3} />
							<Route path="/book4" component={Book4} />
							<Route path="/book5" component={Book5} />
							<Route path="/book6" component={Book6} />
							<Route path="/book7" component={Book7} />
							<Route path="/book8" component={Book8} />
							<Route path="/book9" component={Book9} />
							<Route path="/book10" component={Book10} /> */}

						<Route component={Notfound} />
					</Switch>
				</div>
				<Footer />
			</Router>
		);
	}
}
export default App;
