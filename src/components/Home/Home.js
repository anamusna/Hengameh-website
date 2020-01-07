import React from 'react';
import './Home.css';

class Home extends React.Component {
	render() {
		return (
			<div className="sp-container inner cover" role="main">
				<div className="App ">
					<div className="sp-content">
						{/* <h2 className="frame-1 wow animated zoomIn  ">HENGAMEH IRANI</h2> */}
						<h2 className="frame-2 animated slideInLeft infinite">ÜBERSETZERIN</h2>
						{/* <h2 className="frame-3">Translator</h2> */}
						<h2 className=" frame-3 animated slideInRight infinite">مترجم</h2>
						{/* 	<h2 className="frame-5">
						<span>Hengameh -</span>
						<span>- Irani</span>
					</h2> */}
						{/* 	<Link to="/books" className="sp-circle-link">
							Books
						</Link> */}
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
