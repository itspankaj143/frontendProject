import './Frequenlty.css'

const Frequenlty = () => {
	return (
		<>
			<div className='text-fre'>
				<h2>Frequently Asked Questions</h2>
				<p>
					Pinpoint your audience with precision, ensuring your marketing efforts
					reach those most likely to engage with your brand.
				</p>
			</div>
			<div className='faq-container'>
				<div className='accordion' id='accordionPanelsStayOpenExample'>
					<h2 className='accordion-header' id='panelsStayOpen-headingOne'>
						<button
							className='accordion-button'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#panelsStayOpen-collapseOne'
							aria-expanded='true'
							aria-controls='panelsStayOpen-collapseOne'
						>
							3. How does Osumare measure campaign success?
						</button>
					</h2>
					<div
						id='panelsStayOpen-collapseOne'
						className='accordion-collapse collapse show'
						aria-labelledby='panelsStayOpen-headingOne'
					>
						<div className='accordion-body'></div>
					</div>

					<h2 className='accordion-header' id='panelsStayOpen-headingTwo'>
						<button
							className='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#panelsStayOpen-collapseTwo'
							aria-expanded='false'
							aria-controls='panelsStayOpen-collapseTwo'
						>
							3. How does Osumare measure campaign success?
						</button>
					</h2>
					<div
						id='panelsStayOpen-collapseTwo'
						className='accordion-collapse collapse'
						aria-labelledby='panelsStayOpen-headingTwo'
					>
						<div className='accordion-body'></div>
					</div>

					<h2 className='accordion-header' id='panelsStayOpen-headingThree'>
						<button
							className='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#panelsStayOpen-collapseThree'
							aria-expanded='false'
							aria-controls='panelsStayOpen-collapseThree'
						>
							3. How does Osumare measure campaign success?
						</button>
					</h2>
					<div
						id='panelsStayOpen-collapseThree'
						className='accordion-collapse collapse'
						aria-labelledby='panelsStayOpen-headingThree'
					>
						<div className='accordion-body'>
							We believe in measurable results. Our data-driven approach means
							that every campaign's performance is tracked, analyzed, and
							refined for optimal outcomes. We provide regular reports that
							detail key metrics, giving you clear insights into how our
							strategies are driving growth for your brand.
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Frequenlty
