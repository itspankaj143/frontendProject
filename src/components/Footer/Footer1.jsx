import styles from './Footer.module.css'
import logo from '../image/Osumare Logo-01 (2) 4.png'

const Footer = () => {
	return (
		<div className={styles.contain}>
			<div className={styles.outset1}>
				<div className={styles.set1}>
					<img src={logo} alt='logo' />
					<p>
						The best digital marketing agency in Pune with a proven track record
						of consistently delivering quality service.
					</p>
				</div>
				<div className={styles.set2}>
					<h4>Address</h4>
					<p>
						Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14,
						Maharastra, India.
					</p>
				</div>
				<div className={styles.set3}>
					<h4>Contacts</h4>
					<p>
						<i class='bx bxs-envelope'></i> hello@osumare.in
					</p>
					<p>
						<i class='bx bxs-phone'></i> +91 8459 8762 26
					</p>
				</div>
			</div>
			<div className={styles.outset2}>
				<h4>Menu</h4>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Services</li>
					<li>Work</li>
					<li>Blog</li>
					<li>Career</li>
				</ul>
			</div>
			<div className={styles.outset3}>
				<h4>Social</h4>
				<div className={styles.icons}>
					<i class='bx bxl-facebook-circle'></i>
					<i class='bx bxl-instagram-alt'></i>
					<i class='bx bxl-whatsapp'></i>
					<i class='bx bxl-youtube'></i>
					<i class='bx bxl-pinterest'></i>
					<i class='bx bxl-xing'></i>
				</div>
			</div>
		</div>
	)
}

export default Footer
