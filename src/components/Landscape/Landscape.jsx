import './Landscape.css'
import market from '../image/bard-fill.png'
import rakfi from '../image/rafiki.png'
import flash from '../image/flashlight-fill.png'
import sieldcheck from '../image/shield-check-fill.png'
import visual from '../image/phone-find-fill.png'

const Landscape = () => {
	return (
		<>
			<div className='landcape'>
				<h2>Navigating Real Estate's Digital Landscape</h2>
				<p>Insights for Real Estate Marketing Advantage</p>
			</div>
			<div className='box-content'>
				<div className='naviage-card'>
					<div className='markrt'>
						<img className='logo' src={market} alt='' />
						<div className='text-content'>
							<h3>Market Trends Analysis</h3>
							<p>Predictive insights to guide real estate strategies.</p>
						</div>
					</div>
					<div className='markrt'>
						<img className='logo' src={flash} alt='' />
						<div className='text-content'>
							<h3>Targeted Buyer Persona</h3>
							<p>Understand and connect with your ideal property buyers.</p>
						</div>
					</div>
					<div className='markrt'>
						<img className='logo' src={sieldcheck} alt='' />
						<div className='text-content'>
							<h3>Competitor Insights</h3>
							<p>Stand out in the property market with informed strategies.</p>
						</div>
					</div>
					<div className='markrt'>
						<img className='logo' src={visual} alt='' />
						<div className='text-content'>
							<h3>Visual Content Appeal</h3>
							<p>
								Captivate buyers with appealing visuals and immersive
								experiences.
							</p>
						</div>
					</div>
				</div>
				<div className='Imgae-right'>
					<img src={rakfi} alt='' />
				</div>
			</div>
		</>
	)
}

export default Landscape
