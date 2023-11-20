import './Conversions.css'
import virual from '../image/virtual_10569504 2.png'
import online from '../image/online-store_3929777 2.png'
import wd from '../image/3d_9345318 2.png'
import augmented from '../image/augmented-reality_7065057 2.png'

const Conversion = () => {
	return (
		<>
			<h2>Driving Property Inquiries to Conversions</h2>
			<div className='inquires'>
				<div className='card-text-inquiries'>
					<img className='card-img-cov' src={virual} alt='' />
					<div className='flex-content'>
						<h3>Call-to-Action Optimization</h3>
						<p>
							Our carefully crafted CTAs guide potential buyers through the
							property journey, enhancing engagement and conversion rates.
						</p>
					</div>
				</div>
				<div className='card-text-inquiries'>
					<img className='card-img-cov' src={online} alt='' />
					<div className='flex-content'>
						<h3>Landing Page Efficiency</h3>
						<p>
							Tailored landing pages are designed for maximum property lead
							conversion. They provide seamless user experiences and clear
							pathways for inquiry submission.
						</p>
					</div>
				</div>
			</div>
			<div className='inquires'>
				<div className='card-text-inquiries'>
					<img className='card-img-cov' src={wd} alt='' />
					<div className='flex-content'>
						<h3>Social Proof Utilization</h3>
						<p>
							Leverage the power of testimonials and success stories from
							satisfied buyers to build trust and credibility, encouraging
							hesitant prospects to take action
						</p>
					</div>
				</div>
				<div className='card-text-inquiries'>
					<img className='card-img-cov' src={augmented} alt='' />
					<div className='flex-content'>
						<h3>Mobile-Friendly Experience</h3>
						<p>
							With a responsive design approach, our strategies ensure a
							seamless browsing experience across all devices. This
							responsiveness enhances engagement and conversions by
							accommodating the preferences of on-the-go property seekers.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Conversion
