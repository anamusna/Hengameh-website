import React from 'react';
import './Contact.css';

class Contact extends React.Component {
	onSubmit = () => {
		this.props.history.push('/');
	};

	render() {
		return (
			<div className="contact-form  container my-5">
				<section>
					<div className="card">
						<div className="row">
							<div className="col-lg-8">
								<div className="card-body form h-100 text-dark">
									<h3 className="font-weight-bold dark-grey-text mt-4">
										<i className="fas fa-envelope pr-2 mr-1" />Write me a message:
									</h3>

									<div className="row">
										<div className="col-md-6">
											<div className="md-form mb-0">
												<input type="text" id="form-contact-name" className="form-control" />
												<label for="form-contact-name" className="">
													Your name
												</label>
											</div>
										</div>

										<div className="col-md-6">
											<div className="md-form mb-0">
												<input type="text" id="form-contact-email" className="form-control" />
												<label for="form-contact-email" className="">
													Your email
												</label>
											</div>
										</div>
									</div>

									<div className="row">
										<div className="col-md-6">
											<div className="md-form mb-0">
												<input type="text" id="form-contact-phone" className="form-control" />
												<label for="form-contact-phone" className="">
													Your phone
												</label>
											</div>
										</div>

										<div className="col-md-6">
											<div className="md-form mb-0">
												<input type="text" id="form-contact-company" className="form-control" />
												<label for="form-contact-company" className="">
													Your company
												</label>
											</div>
										</div>
									</div>

									<div className="row">
										<div className="col-md-12">
											<div className="md-form mb-0">
												<textarea
													id="form-contact-message"
													className="form-control md-textarea"
													rows="3"
												/>
												<label for="form-contact-message">Your message</label>
												<div>
													<a className="btn-floating btn-lg blue">
														<i className="far fa-paper-plane" />
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-4">
								<div className="card-body contact text-center h-100 text-dark">
									<h3 className="font-weight-bold my-4 pb-2">Contact information</h3>
									<ul className="text-lg-left list-unstyled ml-4">
										<li>
											<p>
												<i className="fas fa-map-marker-alt pr-2" />New York, 94126, USA
											</p>
										</li>
										<li>
											<p>
												<i className="fas fa-phone pr-2" />+ 01 234 567 89
											</p>
										</li>
										<li>
											<p>
												<i className="fas fa-envelope pr-2" />contact@example.com
											</p>
										</li>
									</ul>
									<hr className="hr-light my-4" />
									<ul className="list-inline text-center list-unstyled">
										<li className="list-inline-item">
											<a className="p-2 fa-lg tw-ic">
												<i className="fab fa-twitter" />
											</a>
										</li>
										<li className="list-inline-item">
											<a className="p-2 fa-lg li-ic">
												<i className="fab fa-linkedin-in"> </i>
											</a>
										</li>
										<li className="list-inline-item">
											<a className="p-2 fa-lg ins-ic">
												<i className="fab fa-instagram"> </i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Contact;
