import './Section.css'
import captre from '../image/cuate.png'
const Section = () => {
	return (
		<h1>
			<div className='content'>
				<h1>Real Estate-Focused Digital Mastery</h1>
				<div className='section'>
					<img className='captureimag' src={captre} alt='' />
					<div className='padd'>
						<h3>Unlock the Potential of Digital Real Estate Excellence</h3>
						<p>
							At Osumare, we understand that the real estate landscape demands a
							digital presence that aligns with the intricacies of property
							marketing. Our range of specialized services is meticulously
							designed to catapult your brand's success in the ever-evolving
							digital property market.
						</p>
						<button className='btn btn2'>Get started</button>
					</div>
				</div>
			</div>
		</h1>
	)
}

export default Section
