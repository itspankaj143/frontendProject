import './Form.css'

const Form = () => {
	return (
		<>
			<div className='form-connect'>
				<h2>Connect with Our Digital Marketing Experts</h2>
				<p>
					Reach Out for Tailored Strategies and Results-Driven Solutions. Let's
					Elevate Your Online Presence Together
				</p>
			</div>
			<div className='flex-wrap'>
				<div className='form-marketting'>
					<form action=''>
						<label htmlFor='name'>Name:</label>
						<br />
						<input type='text' name='name' placeholder='Enter your name' />
						<br />
						<label htmlFor='email'>Email:</label>
						<br />
						<input
							type='text'
							name='email'
							placeholder='Enter your Total No of Vehicles: '
						/>
						<br />
						<label htmlFor='phone'>Phone Number:</label>
						<br />
						<input type='tel' name='phone' placeholder='Enter your Number' />
						<br />
					</form>
					<form action=''>
						<label htmlFor='company'>Message:</label>
						<br />
						<textarea
							name=''
							id='company'
							cols='30'
							rows='10'
							placeholder='Enter your Message.'
						></textarea>
					</form>
				</div>
				<button className='btn btn1 btn5'>Get started</button>
			</div>
		</>
	)
}

export default Form
