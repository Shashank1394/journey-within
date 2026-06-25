"use client";

const Enquire = () => {
	return (
		<section className="enquire-section">
			<div className="container">
				{/* Page header */}
				<div className="row">
					<div className="col-10 offset-1 text-center">
						<h1 className="title">Enquire With Us</h1>
						<p className="intro">
							Have a question, a doubt, or simply want to know more about us?
							<br />
							we are here to help you begin your Journey Within
						</p>
					</div>
				</div>

				{/* Form card */}
				<div className="row">
					<div className="col-10 offset-1 col-md-8 offset-md-2">
						<div className="form-card">
							<h2 className="form-title">Send us a message</h2>

							<form className="enquire-form" noValidate>
								<div className="field">
									<label htmlFor="name">Your Name</label>
									<input
										id="name"
										type="text"
										placeholder="Enter Your Name"
										autoComplete="name"
									/>
								</div>

								<div className="field">
									<label htmlFor="email">Email Address</label>
									<input
										id="email"
										type="email"
										placeholder="Enter Your Email"
										autoComplete="email"
									/>
								</div>

								<div className="field">
									<label htmlFor="phone">Phone Number</label>
									<input
										id="phone"
										type="tel"
										placeholder="Enter Your Phone Number"
										autoComplete="tel"
									/>
								</div>

								<div className="field">
									<label htmlFor="subject">Subject</label>
									<input
										id="subject"
										type="text"
										placeholder="Enter Your Subject"
									/>
								</div>

								<div className="field">
									<label htmlFor="message">Your Message</label>
									<textarea
										id="message"
										rows={6}
										placeholder="Enter Your Message"
									/>
								</div>

								<button type="submit" className="submit-btn">
									Send Message
								</button>
							</form>

							<p className="privacy">
								<span className="privacy__icon" aria-hidden="true">
									🔒
								</span>
								We respect your privacy. Your information will never be shared
								with third parties.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Enquire;
