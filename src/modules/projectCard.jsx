import "./css/projectCard.css"
import Tools from "./tools.jsx"
import Medals from "./medals.jsx"
import Person from "./../modules/person"
function projectCard(args) {
	let roles = []
	return (
		<div className="slider">
			<div className="padding" key={args.Key}>
				<img className="flag" src={`/assets/states/${args.state}.svg`} alt={args.state} />
				<div className="container">
					<div className="text_3dmodel">
						<div className="model_tools">
							<div className="model">
								<model-viewer
									className="glb_file"
									src={"/assets/models/".concat(args.model)}
									camera-controls>
								</model-viewer>
							</div>
							<div className="tools">
								{args.tools.map((element, index) => {
									return (
										<Tools icon={element} key={index} />
									)
								})}
							</div>
						</div>
						<div className="text">
							<div className="title">
								<h1>
									{args.title}
								</h1>
							</div>
							<div className="paragraph">
								<p>
									{args.resume}
								</p>
							</div>
						</div>
					</div>
					<div className="colab_insignia">
						<div className="insignia">
							{args.colabs.map((item) => {
								roles = [...new Set([...roles, ...item.roles])];
							})}
							{roles.map((item) => {
								return (
									<Medals roles={item} />
								)
							})
							}
						</div>
						<div className="colab">
							{args.colabs.map((item, index) => {
								return (
									<Person key={index} name={item.fullname} gmail={item.contact} colabs={item.roles} />
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default projectCard
