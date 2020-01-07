import React from 'react';
import './Home.css';

class Home extends React.Component {
	render() {
		return (
			<div className="sp-container inner cover" role="main">
				<div className="sp-content">
					<div className="sp-globe" />
					<h2 className="frame-1">HENGAMEH IRANI</h2>
					<h2 className="frame-2">Übersetzerin</h2>
					<h2 className="frame-3">Translator</h2>
					<h2 className="frame-4">مترجم</h2>
					<h2 className="frame-5">
						<span>Hengameh -</span>
						<span>- Irani</span>
					</h2>
					<a className="sp-circle-link" href="/books">
						Books
					</a>
				</div>
			</div>
		);
	}
}

export default Home;
