import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends Component {
	render() {
		return (
			<div className="main">
				<App />
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
