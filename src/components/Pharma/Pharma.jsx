import './Pharma.css'
import frame from '../image/Frame 880.png'
import btn from '../image/Frame 294.png'

const Pharma = () => {
	return (
		<>
			<div className='text-content'>
				<h3>What Our Pharma Partners Say</h3>
				<p>Driving Transformations, One Brand at a Time</p>
			</div>
			<div className='tabish'>
				<img className='tabish-khan' src={frame} alt='' />
			</div>
			<div className='btn-partner'>
				<img src={btn} alt='' />
			</div>
		</>
	)
}

export default Pharma
