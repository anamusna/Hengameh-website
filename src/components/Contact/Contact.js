import React from 'react';
import './Contact.css';

class Contact extends React.Component {
	onSubmit = () => {
		this.props.history.push('/');
	};

	render() {
		return (
			<div className="inner contact">
				<div className="contact-form">
					<form id="contact-us" method="post" action="#">
						<div className="col-xs-6 wow animated slideInLeft" data-wow-delay=".5s">
							<input
								type="text"
								name="name"
								id="name"
								required="required"
								className="form"
								placeholder="Name"
							/>

							<input
								type="email"
								name="mail"
								id="mail"
								required="required"
								className="form"
								placeholder="Email"
							/>

							<input
								type="text"
								name="subject"
								id="subject"
								required="required"
								className="form"
								placeholder="Subject"
							/>
						</div>

						<div className="col-xs-6 wow animated slideInRight" data-wow-delay=".5s">
							<textarea name="message" id="message" className="form textarea" placeholder="Message" />
						</div>
						<div className="relative  col-xs-12">
							<button type="submit" id="submit" name="submit" className="form-btn semibold">
								Send Message
							</button>
						</div>
						<div className="clear" />
					</form>

					<div className="mail-message-area">
						<div className="alert gray-bg mail-message not-visible-message">
							<strong>Thank You !</strong> Your email has been delivered.
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
