import CardProject from "./modules/projectCard"
import "./App.css"
import data from './data/project.json'
function App() {
	return (
		<div className="main_container">
			{data.map((element, _) => {
				return (
					<CardProject
						key={_}
						title={element.title}
						resume = {element.resume}
						model = {element.model3d}
						tools={element.tools}
						colabs = {element.colaboradores}
						state = {element.estado}
					/>
				)
			})}
		</div>
	)
}

export default App

