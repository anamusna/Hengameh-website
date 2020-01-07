import React from 'react';
import { Link } from 'react-router-dom';
const Notfound = () => {
	return (
		<div className="App text-dark">
			<h4>OOOPS Page Not Found, Sorry!!!</h4>
			<p>
				<Link to="/">Back to Home</Link>
			</p>
		</div>
	);
};

export default Notfound;
