import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
	render() {
		const date = new Date();
		const year = date.getFullYear();
		return (
			<footer>
				<div className="footerContents">
					<p>
						&copy; {year}
						{' | '}
						<a href="/" rel="noopener noreferrer">
							Hengameh Irani
						</a>
						<p>
							<a href="/impressum">Impressum</a>
						</p>
					</p>

					{/* <div className="social-media">
					
					</div>
 */}
					{/* <div className="social-media">
						{this.props.socialMedia.map((social, index) => (
							<a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
								<i className={social.faIcon} />{' '}
							</a>
						))}
					</div> */}
				</div>
			</footer>
		);
	}
}
