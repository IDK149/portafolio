import "./css/person.css"
function person(parameters) {
	return (
		<div className="container_data">
			<div className="roles">
				{parameters.colabs.map((roles, _) => {
					return (
						<img key = {_} className="img" src={`/assets/roles/${roles}.svg`} alt="NA" />
					)
				})}
			</div>
			<p className="p1">
				{parameters.name}
			</p>
			<p className="p2">
				{parameters.gmail}
			</p>
		</div>
	)
}
export default person
