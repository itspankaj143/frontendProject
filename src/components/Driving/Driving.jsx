import './Driving.css'
import bro from '../image/bro.png'

const Driving = () => {
	return (
		<>
			<div className='context-text'>
				<h2>Driving Property Inquiries to Conversions</h2>
				<p>Streamlined Strategies for Real Estate Success</p>
			</div>
			<div className='container1'>
				<img src={bro} alt='' />
				<div className='padding-text'>
					<h3>Optimized Path to Property Purchase</h3>
					<p>
						In the dynamic realm of real estate, the journey from a property
						inquiry to a successful conversion demands a well-crafted approach.
						At Osumare, we specialize in guiding potential buyers through this
						journey seamlessly, maximizing inquiries-turned-conversions with
						expert strategies.
					</p>
					<button className='btn1 btn btn4'>Get started</button>
				</div>
			</div>
		</>
	)
}

export default Driving
