import './App.css'
import Action from './components/Action/Action'
import Conversion from './components/Conversions/Conversion'
import Driving from './components/Driving/Driving'
import Footer from './components/Footer/Footer1'
import Form from './components/Form/Form'
import Frequenlty from './components/Frequenlty/Frequenlty'
import Header from './components/Header/Header'
import House from './components/House/House'
import Landscape from './components/Landscape/Landscape'
import Mind from './components/Mind/Mind'
import Pharma from './components/Pharma/Pharma'
import Section from './components/Section/Section'
import Service from './components/Service/Service'

function App() {
	return (
		<>
			<Header />
			<House />
			<Section />
			<Service />
			<Landscape />
			<Driving />
			<Conversion />
			<Action />
			<Mind />
			<Pharma />
			<Frequenlty />
			<Form />
			<Footer />
			<p>© 2023 Osumare. All rights reserved.</p>
		</>
	)
}

export default App
