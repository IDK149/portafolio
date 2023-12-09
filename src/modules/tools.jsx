function tools({icon, index}) {
	return (
		<div className="caja" key={index}>
			<img
				className="img"
				src={`/assets/logos/${icon.toLowerCase()}.svg`}
				alt = "NA"
			/>
		</div>
	)
}
export default tools;
