import './Header.css'
import logoImg from '../image/Osumare Logo-01 (2) 4.png'
const Header = () => {
	return (
		<>
			<div className='header'>
				<img className='logo' src={logoImg} alt='' />
				<button className='btn'>Contact Us</button>
			</div>
			<div className='section-content'>
				<h2>
					Elevate <span>Real Estate Success</span> with <br /> Osumare's Digital
					Expertise
				</h2>
				<p>
					Tailored Solutions for Thriving in the Digital Real Estate Landscape
				</p>
				<div className='button'>
					<button className='btn btn1'>Get started</button>
				</div>
			</div>
		</>
	)
}

export default Header
