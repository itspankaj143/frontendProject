import './Action.css'
import weather from '../image/weather_534564 2.png'
import mass from '../image/mass_9984040 2.png'
import model from '../image/3d-model_9040866 3.png'
import Mobbie from '../image/medal_2439078 (1) 1.png'

const Action = () => {
	return (
		<>
			<h2>Our Expertise in Action</h2>
			<div className='inquires'>
				<div className='card-text-inquiries'>
					<img className='card-img-cov' src={weather} alt='' />
					<div className='flex-content'>
						<h3>Effective CTAs</h3>
						<p>
							See how our strategic CTAs drove a significant increase in
							property inquiries and accelerated sales for a real estate agency.
						</p>
					</div>
				</div>
				<div className='card-text-inquiries'>
					<img className='card-img-cov' src={mass} alt='' />
					<div className='flex-content'>
						<h3>Conversion-Optimized Landing Pages</h3>
						<p>
							Explore a case study where our landing page optimization increased
							property lead conversion rates by 30%
						</p>
					</div>
				</div>
			</div>
			<div className='inquires'>
				<div className='card-text-inquiries'>
					<img className='card-img-cov' src={model} alt='' />
					<div className='flex-content'>
						<h3>Trust Building with Social Proof</h3>
						<p>
							Discover how leveraging client testimonials boosted buyer
							confidence, leading to higher conversion rates for a property
							development project
						</p>
					</div>
				</div>
				<div className='card-text-inquiries'>
					<img className='card-img-cov' src={Mobbie} alt='' />
					<div className='flex-content'>
						<h3>Mobile-First Success:</h3>
						<p>
							Learn how our mobile-responsive design approach resulted in a 25%
							increase in inquiries from mobile users for a real estate agency.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Action
